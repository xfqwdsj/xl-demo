import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { AdminPageBase } from "./admin-page-base.js";
import "../../../components/app-card.js";
import "../../../components/app-echarts.js";
import "../../../components/app-table.ts";
import "../admin-grid.js";
import "../admin-grid-item.js";
import "../admin-chip.js";
import "../admin-step-card.js";
import "../admin-note-card.js";
import { layoutStyles } from "../styles/layout.ts";
import { typographyStyles } from "../styles/typography.ts";
import { interactiveStyles } from "../styles/interactive.ts";
import { timelineStyles } from "../styles/timeline.ts";
import { tableStyles } from "../styles/table.ts";
import * as echarts from "echarts/core";
import { BarChart, LineChart, PieChart } from "echarts/charts";
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
  LineChart,
  PieChart,
  CanvasRenderer,
]);

@customElement("business-analysis-page")
export class BusinessAnalysisPage extends AdminPageBase {
  static styles = css`
    ${layoutStyles}
    ${typographyStyles}
    ${interactiveStyles}
    ${timelineStyles}
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
      data: ["月收入", "累计收入"],
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
      data: [
        "2025.04",
        "2025.05",
        "2025.06",
        "2025.07",
        "2025.08",
        "2025.09",
        "2025.10",
        "2025.11",
        "2025.12",
        "2025.01",
        "2025.02",
        "2025.03",
      ],
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
        name: "月收入",
        type: "bar",
        data: [
          8.5, 9.2, 10.8, 11.5, 12.8, 13.2, 11.8, 12.5, 14.2, 13.5, 11.8, 15.2,
        ],
        itemStyle: {
          color: "#1890ff",
        },
      },
      {
        name: "累计收入",
        type: "line",
        data: [
          8.5, 17.7, 28.5, 40.0, 52.8, 66.0, 77.8, 90.3, 104.5, 118.0, 129.8,
          145.0,
        ],
        lineStyle: {
          color: "#52c41a",
          width: 2,
        },
        itemStyle: {
          color: "#52c41a",
        },
      },
    ],
  };

  private revenueCompositionOption = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c}% ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: 10,
      top: 20,
      data: ["产品销售", "服务收入", "其他收入"],
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
            itemStyle: { color: "#1677ff" },
          },
          {
            value: 25,
            name: "服务收入",
            itemStyle: { color: "#52c41a" },
          },
          {
            value: 5,
            name: "其他收入",
            itemStyle: { color: "#d9d9d9" },
          },
        ],
      },
    ],
  };

  render() {
    return html`
      <div class="section-stack">
        <app-card>
          <div class="chips">
            <admin-chip
              label="收入分析"
              active
              .onClick=${() => this.handleAnalysisTypeChange("revenue")}
            ></admin-chip>
            <admin-chip
              label="成本分析"
              .onClick=${() => this.handleAnalysisTypeChange("cost")}
            ></admin-chip>
            <admin-chip
              label="利润分析"
              .onClick=${() => this.handleAnalysisTypeChange("profit")}
            ></admin-chip>
            <admin-chip
              label="现金流分析"
              .onClick=${() => this.handleAnalysisTypeChange("cashflow")}
            ></admin-chip>
          </div>
        </app-card>

        <admin-grid .columns=${4} .gap=${16}>
          <admin-grid-item type="stat" extra-type="success">
            <span slot="label">本月收入</span>
            <span slot="value">¥128,500</span>
            <span slot="extra">↑12%</span>
          </admin-grid-item>
          <admin-grid-item type="stat" extra-type="success">
            <span slot="label">收入增长率</span>
            <span slot="value">15%</span>
            <span slot="extra">同比去年</span>
          </admin-grid-item>
          <admin-grid-item type="stat" extra-type="success">
            <span slot="label">客单价</span>
            <span slot="value">¥256</span>
            <span slot="extra">↑5%</span>
          </admin-grid-item>
          <admin-grid-item type="stat" extra-type="success">
            <span slot="label">回款周期</span>
            <span slot="value">35天</span>
            <span slot="extra">↓3天</span>
          </admin-grid-item>
        </admin-grid>

        <admin-grid type="info" .columns=${3} .gap=${12}>
          <admin-grid-item>
            <span slot="label">毛利率</span>
            <span slot="value">32.4%</span>
            <span slot="helper">优于行业均值 2.1pct</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">现金流健康度</span>
            <span slot="value">良好</span>
            <span slot="helper">经营现金净流入持续为正</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">客户集中度</span>
            <span slot="value">49%</span>
            <span slot="helper">前 3 大客户占比较高</span>
          </admin-grid-item>
        </admin-grid>

        <admin-grid .columns=${2} .gap=${16}>
          <app-card fill-height>
            <strong>近12个月收入趋势</strong>
            <p class="text-label">单位：万元（柱状+折线）</p>
            <app-echarts
              .echarts=${echarts}
              .option=${this.revenueTrendOption}
              style="width: 100%; height: 280px;"
            ></app-echarts>
            <p class="composition-note push-bottom">
              收入整体稳步抬升，1-3月增长动能明显。
            </p>
          </app-card>
          <app-card fill-height>
            <strong>收入构成分析</strong>
            <app-echarts
              .echarts=${echarts}
              .option=${this.revenueCompositionOption}
              style="width: 100%; height: 280px;"
            ></app-echarts>
            <p class="composition-note push-bottom">
              服务收入连续 3 个月提升，结构稳定优化。
            </p>
          </app-card>
        </admin-grid>

        <app-card>
          <strong>Top 5 客户分析</strong>
          <app-table
            .headers=${["客户名称", "本月收入", "占比", "环比", "趋势"]}
            .rows=${[
              ["XX科技有限公司", "¥35,000", "27%", "↑15%", "上升"],
              ["XX商贸有限公司", "¥28,000", "22%", "↓5%", "下降"],
              ["XX餐饮管理公司", "¥22,000", "17%", "↑8%", "上升"],
            ]}
          ></app-table>
        </app-card>

        <app-card>
          <strong>智能解读</strong>
          <ul class="timeline">
            <li>
              <span class="dot"></span
              ><span>本月收入环比增长12%，主要来源于新增订单。</span>
            </li>
            <li>
              <span class="dot"></span
              ><span>服务收入占比提升，建议继续拓展高毛利业务。</span>
            </li>
            <li>
              <span class="dot"></span
              ><span>应收账款回收周期略延长，建议加强催收管理。</span>
            </li>
          </ul>
        </app-card>

        <admin-grid .columns=${2} .gap=${16}>
          <app-card>
            <strong>利润与现金流解读</strong>
            <admin-step-card
              .steps=${[
                {
                  index: 1,
                  title: "收入增长",
                  description: "新增订单驱动营收提升，但回款节奏仍需持续跟踪。",
                },
                {
                  index: 2,
                  title: "费用控制",
                  description: "固定成本保持稳定，变动成本随业务增长小幅上升。",
                },
                {
                  index: 3,
                  title: "现金沉淀",
                  description: "利润增长已逐步转化为现金流，经营质量整体改善。",
                },
              ]}
            ></admin-step-card>
          </app-card>
          <app-card>
            <strong>经营建议</strong>
            <admin-note-card
              title="建议动作"
              content="继续提升高毛利服务收入占比，优化产品结构。对账期较长客户设置分层催收策略，缩短回款天数。将月度经营分析与融资画像联动，提高授信通过率。"
              type="success"
            ></admin-note-card>
          </app-card>
        </admin-grid>
      </div>
    `;
  }

  protected handleAnalysisTypeChange(type: string) {
    window.alert(`分析类型: ${type}`);
  }
}
