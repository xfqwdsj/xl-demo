import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { AdminPageBase } from "./admin-page-base.js";
import "../../../components/app-card.js";
import "../../../components/app-echarts.js";
import "../admin-grid.js";
import "../admin-grid-item.js";
import "../admin-note-card.js";
import "../admin-step-card.js";
import "../admin-button.js";
import { layoutStyles } from "../styles/layout.ts";
import { typographyStyles } from "../styles/typography.ts";
import { interactiveStyles } from "../styles/interactive.ts";
import { tableStyles } from "../styles/table.ts";
import * as echarts from "echarts/core";
import { BarChart, PieChart } from "echarts/charts";
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  GridComponent,
  LegendComponent,
  TooltipComponent,
  BarChart,
  PieChart,
  CanvasRenderer,
]);

@customElement("dashboard-page")
export class DashboardPage extends AdminPageBase {
  static styles = css`
    ${layoutStyles}
    ${typographyStyles}
    ${interactiveStyles}
    ${tableStyles}
    ${super.styles}
  `;

  private revenueTrendOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["收入", "支出"],
      top: 10,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["2025.10", "2025.11", "2025.12", "2025.01", "2025.02", "2025.03"],
      axisTick: {
        alignWithLabel: true,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}万",
      },
    },
    series: [
      {
        name: "收入",
        type: "bar",
        data: [10.5, 11.2, 12.8, 13.5, 11.8, 15.2],
        itemStyle: {
          color: "#1890ff",
        },
      },
      {
        name: "支出",
        type: "bar",
        data: [8.2, 8.6, 9.4, 10.0, 9.2, 11.3],
        itemStyle: {
          color: "#f5222d",
        },
      },
    ],
  };

  private revenueCompositionOption = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: 10,
      top: 20,
      data: ["产品销售", "服务收入", "其他业务", "投资收益"],
    },
    series: [
      {
        name: "收入来源",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "18",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 70,
            name: "产品销售",
            itemStyle: { color: "#1890ff" },
          },
          {
            value: 25,
            name: "服务收入",
            itemStyle: { color: "#52c41a" },
          },
          {
            value: 3,
            name: "其他业务",
            itemStyle: { color: "#faad14" },
          },
          {
            value: 2,
            name: "投资收益",
            itemStyle: { color: "#f5222d" },
          },
        ],
      },
    ],
  };

  render() {
    return html`
      <div class="section-stack">
        <admin-grid .columns=${4} .gap=${16}>
          <admin-grid-item type="stat">
            <span slot="label">本月收入</span>
            <span slot="value">¥128,500.00</span>
            <span slot="extra">↑ 12% vs 上月</span>
          </admin-grid-item>
          <admin-grid-item type="stat">
            <span slot="label">本月支出</span>
            <span slot="value">¥86,300.00</span>
            <span slot="extra">↓ 5% vs 上月</span>
          </admin-grid-item>
          <admin-grid-item type="stat" extra-type="warning">
            <span slot="label">待处理票据</span>
            <span slot="value">23张</span>
            <span slot="extra">需关注</span>
          </admin-grid-item>
          <admin-grid-item type="stat">
            <span slot="label">信用评分</span>
            <span slot="value">82分</span>
            <span slot="extra">评级：良好</span>
          </admin-grid-item>
        </admin-grid>

        <app-card>
          <div class="header-row">
            <strong>快捷操作</strong>
            <div class="toolbar">
              <admin-button
                label="上传票据"
                variant="primary"
                .onClick=${() => this.handleMockAction("上传票据")}
              ></admin-button>
              <admin-button
                label="生成凭证"
                variant="primary"
                .onClick=${() => this.handleMockAction("生成凭证")}
              ></admin-button>
              <admin-button
                label="银行对账"
                variant="primary"
                .onClick=${() => this.handleMockAction("银行对账")}
              ></admin-button>
              <admin-button
                label="纳税申报"
                variant="primary"
                .onClick=${() => this.handleMockAction("纳税申报")}
              ></admin-button>
            </div>
          </div>
        </app-card>

        <admin-grid type="info" .columns=${3} .gap=${12}>
          <admin-grid-item>
            <span slot="label">待办优先级</span>
            <span slot="value">3项 P1</span>
            <span slot="helper">建议先处理凭证审核与报税</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">对账完成率</span>
            <span slot="value">90%</span>
            <span slot="helper">剩余 5 笔异常流水待处理</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">识别健康度</span>
            <span slot="value">97.2%</span>
            <span slot="helper">高于近30日平均水平</span>
          </admin-grid-item>
        </admin-grid>

        <admin-grid .columns=${2} .gap=${16}>
          <app-card fill-height>
            <div class="header-row"><strong>近6个月收支趋势</strong></div>
            <p class="text-label">收入（蓝） vs 支出（红） | 单位：万元</p>
            <app-echarts
              .echarts=${echarts}
              .option=${this.revenueTrendOption}
              style="width: 100%; height: 280px;"
            ></app-echarts>
          </app-card>

          <app-card fill-height>
            <div class="header-row"><strong>本月收入构成</strong></div>
            <div class="composition-viz">
              <p class="text-label">收入来源分布</p>
              <app-echarts
                .echarts=${echarts}
                .option=${this.revenueCompositionOption}
                style="width: 100%; height: 280px;"
              ></app-echarts>
            </div>
          </app-card>
        </admin-grid>

        <admin-grid .columns=${2} .gap=${16}>
          <app-card fill-height>
            <div class="header-row">
              <strong>待办事项</strong>
              <a class="inline-action" href="/invoice-list.html">查看全部</a>
            </div>
            <admin-note-card
              title="凭证审核"
              content="3张高金额凭证待审核，涉及金额 ¥45,200"
              tone="warning"
              time="今天 14:30"
            ></admin-note-card>
            <admin-note-card
              title="银行对账异常"
              content="5笔流水匹配失败，需人工干预"
              tone="error"
              time="昨天 16:45"
            ></admin-note-card>
            <admin-note-card
              title="纳税申报提醒"
              content="本月增值税申报截止日期：3月25日"
              tone="info"
              time="2天前"
            ></admin-note-card>
            <admin-note-card
              title="系统更新"
              content="智能记账规则库已更新至 v2.3.1"
              tone="success"
              time="3天前"
            ></admin-note-card>
          </app-card>

          <app-card fill-height>
            <div class="header-row"><strong>操作指引</strong></div>
            <admin-step-card
              .steps=${[
                {
                  index: 1,
                  title: "上传票据",
                  description: "支持拍照、扫描或直接上传电子发票",
                },
                {
                  index: 2,
                  title: "智能记账",
                  description: "系统自动识别并生成会计凭证",
                },
                {
                  index: 3,
                  title: "审核确认",
                  description: "检查凭证准确性，一键过账",
                },
                {
                  index: 4,
                  title: "生成报表",
                  description: "实时查看财务报表与经营分析",
                },
              ]}
            ></admin-step-card>
          </app-card>
        </admin-grid>

        <app-card>
          <div class="header-row"><strong>关键指标对比</strong></div>
          <admin-grid type="compare" .columns=${3} .gap=${12}>
            <admin-grid-item change-type="increase">
              <span slot="title">收入增长率</span>
              <span slot="current">15%</span>
              <span slot="previous">12%</span>
              <span slot="change">+3%</span>
            </admin-grid-item>
            <admin-grid-item change-type="decrease">
              <span slot="title">净利润率</span>
              <span slot="current">12.2%</span>
              <span slot="previous">13.8%</span>
              <span slot="change">-1.6%</span>
            </admin-grid-item>
            <admin-grid-item change-type="increase">
              <span slot="title">应收账款周转</span>
              <span slot="current">45天</span>
              <span slot="previous">52天</span>
              <span slot="change">-7天</span>
            </admin-grid-item>
            <admin-grid-item change-type="increase">
              <span slot="title">存货周转</span>
              <span slot="current">38天</span>
              <span slot="previous">42天</span>
              <span slot="change">-4天</span>
            </admin-grid-item>
            <admin-grid-item change-type="increase">
              <span slot="title">流动比率</span>
              <span slot="current">2.1</span>
              <span slot="previous">1.9</span>
              <span slot="change">+0.2</span>
            </admin-grid-item>
            <admin-grid-item change-type="increase">
              <span slot="title">资产负债率</span>
              <span slot="current">48%</span>
              <span slot="previous">52%</span>
              <span slot="change">-4%</span>
            </admin-grid-item>
          </admin-grid>
        </app-card>
      </div>
    `;
  }

  protected handleMockAction(action: string) {
    window.alert(`执行操作: ${action}`);
  }
}
