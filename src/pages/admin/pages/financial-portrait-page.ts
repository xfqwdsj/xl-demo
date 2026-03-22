import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { AdminPageBase } from "./admin-page-base.js";
import "../../../components/app-card.js";
import "../../../components/app-echarts.js";
import "../../../components/app-table.ts";
import "../admin-grid.js";
import "../admin-grid-item.js";
import "../admin-button.js";
import "../admin-step-card.js";
import "../admin-note-card.js";
import { layoutStyles } from "../styles/layout.ts";
import { typographyStyles } from "../styles/typography.ts";
import { statusStyles } from "../styles/status.ts";
import { tableStyles } from "../styles/table.ts";
import * as echarts from "echarts/core";
import { RadarChart } from "echarts/charts";
import {
  LegendComponent,
  RadarComponent,
  TooltipComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  LegendComponent,
  RadarComponent,
  TooltipComponent,
  RadarChart,
  CanvasRenderer,
]);

@customElement("financial-portrait-page")
export class FinancialPortraitPage extends AdminPageBase {
  static styles = css`
    ${layoutStyles}
    ${typographyStyles}
    ${statusStyles}
    ${tableStyles}
    ${super.styles}
  `;

  private radarOption = {
    tooltip: {},
    legend: {
      data: ["本企业", "行业中位"],
      top: 10,
    },
    radar: {
      indicator: [
        { name: "盈利能力", max: 100 },
        { name: "偿债能力", max: 100 },
        { name: "运营效率", max: 100 },
        { name: "税务健康度", max: 100 },
        { name: "经营稳定性", max: 100 },
      ],
      shape: "polygon",
      splitNumber: 5,
      axisName: {
        color: "#666",
      },
      splitArea: {
        areaStyle: {
          color: ["rgba(24, 144, 255, 0.05)", "rgba(24, 144, 255, 0.1)"],
        },
      },
    },
    series: [
      {
        name: "评分对比",
        type: "radar",
        data: [
          {
            value: [75, 82, 68, 90, 78],
            name: "本企业",
            areaStyle: {
              color: "rgba(24, 144, 255, 0.3)",
            },
            lineStyle: {
              color: "#1890ff",
              width: 2,
            },
            itemStyle: {
              color: "#1890ff",
            },
          },
          {
            value: [74, 74, 74, 74, 74],
            name: "行业中位",
            areaStyle: {
              color: "rgba(250, 173, 20, 0.2)",
            },
            lineStyle: {
              color: "#faad14",
              width: 2,
              type: "dashed",
            },
            itemStyle: {
              color: "#faad14",
            },
          },
        ],
      },
    ],
  };

  render() {
    return html`
      <div class="section-stack">
        <app-card class="text-center py-12">
          <p class="text-label">综合信用评分</p>
          <p class="value-xxl text-primary">82.6</p>
          <p class="muted">评级 B+，距 A 级还需 7.4 分</p>
        </app-card>

        <app-card>
          <strong>五维评估概览</strong>
          <app-echarts
            .echarts=${echarts}
            .option=${this.radarOption}
            style="width: 100%; height: 400px;"
          ></app-echarts>
        </app-card>

        <admin-grid .columns=${3} .gap=${16}>
          <admin-grid-item type="stat" extra-type="success">
            <span slot="label">盈利能力</span>
            <span slot="value">75分</span>
            <span slot="extra">优于行业平均</span>
          </admin-grid-item>
          <admin-grid-item type="stat" extra-type="success">
            <span slot="label">偿债能力</span>
            <span slot="value">82分</span>
            <span slot="extra">短期风险可控</span>
          </admin-grid-item>
          <admin-grid-item type="stat" extra-type="warning">
            <span slot="label">运营效率</span>
            <span slot="value">68分</span>
            <span slot="extra">需关注应收周转</span>
          </admin-grid-item>
        </admin-grid>

        <admin-grid type="info" .columns=${3} .gap=${12}>
          <admin-grid-item>
            <span slot="label">税务健康度</span>
            <span slot="value">80分</span>
            <span slot="helper">申报及时率高，但进项波动较大</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">经营稳定性</span>
            <span slot="value">78分</span>
            <span slot="helper">回款趋势稳定，季节性波动可控</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">融资可读性</span>
            <span slot="value">A-</span>
            <span slot="helper">可直接用于基础授信初筛</span>
          </admin-grid-item>
        </admin-grid>

        <app-card>
          <strong>行业对标</strong>
          <app-table
            .headers=${["维度", "本企业", "行业平均", "行业优秀"]}
            .rows=${[
              ["收入规模", "82", "76", "90"],
              ["盈利能力", "75", "72", "88"],
              ["运营效率", "68", "70", "86"],
              ["税务合规", "90", "80", "93"],
            ]}
            .minWidth=${760}
          ></app-table>
        </app-card>

        <admin-grid .columns=${3} .gap=${16}>
          <app-card>
            <strong>信用报告生成</strong>
            <p class="muted">基于经营数据可生成银行认可信用报告。</p>
            <div class="toolbar">
              <admin-button
                label="生成信用报告"
                variant="primary"
                .onClick=${() => this.handleMockAction("生成信用报告")}
              ></admin-button>
              <button class="btn btn-outline" type="button">
                查看示例报告
              </button>
            </div>
          </app-card>
          <app-card>
            <strong>评分拆解</strong>
            <admin-step-card
              .steps=${[
                {
                  index: 1,
                  title: "盈利能力",
                  description:
                    "毛利率持续高于行业中位数，但净利率仍有优化空间。",
                },
                {
                  index: 2,
                  title: "偿债能力",
                  description: "现金流覆盖短债能力较强，银行视角风险偏低。",
                },
                {
                  index: 3,
                  title: "运营效率",
                  description: "应收账款周转略慢，建议缩短账期并强化催收。",
                },
              ]}
            ></admin-step-card>
          </app-card>
          <app-card>
            <strong>提升建议</strong>
            <admin-note-card
              title="可提升评分的动作"
              content="将应收账款周转天数从 35 天压缩到 30 天以内。保持连续 6 个月按期申报并减少手工调账。补齐固定成本和费用归集，提高报表一致性。"
              type="success"
            ></admin-note-card>
          </app-card>
        </admin-grid>
      </div>
    `;
  }

  protected handleMockAction(action: string) {
    window.alert(`执行操作: ${action}`);
  }
}
