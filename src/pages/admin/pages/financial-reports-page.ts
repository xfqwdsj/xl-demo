import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { AdminPageBase } from "./admin-page-base.js";
import "../../../components/app-card.js";
import "../../../components/app-echarts.js";
import "../../../components/app-table.ts";
import "../admin-grid.js";
import "../admin-grid-item.js";
import "../admin-chip.js";
import "../admin-select.js";
import "../admin-step-card.js";
import "../admin-note-card.js";
import { layoutStyles } from "../styles/layout.ts";
import { interactiveStyles } from "../styles/interactive.ts";
import { tableStyles } from "../styles/table.ts";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { LegendComponent, TooltipComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([LegendComponent, TooltipComponent, PieChart, CanvasRenderer]);

@customElement("financial-reports-page")
export class FinancialReportsPage extends AdminPageBase {
  static styles = css`
    ${layoutStyles}
    ${interactiveStyles}
    ${tableStyles}
    ${super.styles}
  `;

  private assetStructureOption = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c}%",
    },
    legend: {
      orient: "vertical",
      left: 10,
      top: 20,
      data: ["流动资产", "非流动资产"],
    },
    series: [
      {
        name: "资产结构",
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
            value: 80,
            name: "流动资产",
            itemStyle: { color: "#1677ff" },
          },
          {
            value: 20,
            name: "非流动资产",
            itemStyle: { color: "#52c41a" },
          },
        ],
      },
    ],
  };

  private liabilityStructureOption = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c}%",
    },
    legend: {
      orient: "vertical",
      left: 10,
      top: 20,
      data: ["流动负债", "长期负债"],
    },
    series: [
      {
        name: "负债结构",
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
            value: 100,
            name: "流动负债",
            itemStyle: { color: "#ff9c6e" },
          },
          {
            value: 0,
            name: "长期负债",
            itemStyle: { color: "#d9d9d9" },
          },
        ],
      },
    ],
  };

  render() {
    return html`
      <div class="section-stack">
        <admin-grid type="info" .columns=${3} .gap=${12}>
          <admin-grid-item>
            <span slot="label">报表期间</span>
            <span slot="value">2025-02</span>
            <span slot="helper">已完成月结</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">资产总计</span>
            <span slot="value">¥255,500</span>
            <span slot="helper">较上月增加 6.4%</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">净利润</span>
            <span slot="value">¥18,300</span>
            <span slot="helper">利润率保持稳定</span>
          </admin-grid-item>
        </admin-grid>

        <app-card>
          <div class="header-row">
            <div class="chips">
              <admin-chip
                label="资产负债表"
                active
                .onClick=${() => this.handleReportTypeChange("balance")}
              ></admin-chip>
              <admin-chip
                label="利润表"
                .onClick=${() => this.handleReportTypeChange("income")}
              ></admin-chip>
              <admin-chip
                label="现金流量表"
                .onClick=${() => this.handleReportTypeChange("cashflow")}
              ></admin-chip>
            </div>
            <div class="toolbar">
              <admin-select
                .options=${[{ value: "2025-02-28", label: "2025年2月28日" }]}
                .onChange=${(value: string) =>
                  this.handleReportDateChange(value)}
              ></admin-select>
              <button class="btn btn-outline" type="button">导出Excel</button>
              <button class="btn btn-outline" type="button">导出PDF</button>
            </div>
          </div>
          <strong>资产负债表</strong>
          <app-table
            .headers=${["科目", "期末余额"]}
            .rows=${[
              ["货币资金", "¥128,500.00"],
              ["应收账款", "¥45,000.00"],
              ["存货", "¥32,000.00"],
              ["固定资产", "¥50,000.00"],
              ["资产总计", "¥255,500.00"],
              ["负债及所有者权益总计", "¥255,500.00"],
            ]}
            .minWidth=${760}
          ></app-table>
        </app-card>

        <admin-grid .columns=${2} .gap=${16}>
          <app-card>
            <strong>资产结构</strong>
            <app-echarts
              .echarts=${echarts}
              .option=${this.assetStructureOption}
              style="width: 100%; height: 250px;"
            ></app-echarts>
          </app-card>
          <app-card>
            <strong>负债结构</strong>
            <app-echarts
              .echarts=${echarts}
              .option=${this.liabilityStructureOption}
              style="width: 100%; height: 250px;"
            ></app-echarts>
          </app-card>
        </admin-grid>

        <admin-grid .columns=${2} .gap=${16}>
          <app-card>
            <strong>报表口径提示</strong>
            <admin-step-card
              .steps=${[
                {
                  index: 1,
                  title: "资产负债表",
                  description:
                    "反映期末时点资产、负债及权益结构，适合看资金与杠杆。",
                },
                {
                  index: 2,
                  title: "利润表",
                  description:
                    "反映期间经营成果，建议与收入、费用趋势联动查看。",
                },
                {
                  index: 3,
                  title: "现金流量表",
                  description: "重点关注经营活动现金净流量与利润匹配程度。",
                },
              ]}
            ></admin-step-card>
          </app-card>
          <app-card>
            <strong>异动说明</strong>
            <admin-note-card
              title="本期变化"
              content="货币资金较上月增长，主要来自两笔集中回款。应收账款余额偏高，建议结合经营分析页关注回款周期。固定资产本期无新增，折旧影响已在利润表中体现。"
              type="normal"
            ></admin-note-card>
          </app-card>
        </admin-grid>
      </div>
    `;
  }

  protected handleReportTypeChange(type: string) {
    window.alert(`报表类型: ${type}`);
  }

  protected handleReportDateChange(value: string) {
    window.alert(`报表日期: ${value}`);
  }
}
