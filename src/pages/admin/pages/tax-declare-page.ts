import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { AdminPageBase } from "./admin-page-base.js";
import "../../../components/app-card.js";
import "../../../components/app-table.js";
import "../admin-grid.js";
import "../admin-grid-item.js";
import "../admin-button.js";
import "../admin-status-badge.js";
import "../admin-step-card.js";
import "../admin-note-card.js";
import { layoutStyles } from "../styles/layout.ts";
import { typographyStyles } from "../styles/typography.ts";
import { statusStyles } from "../styles/status.ts";
import { tableStyles } from "../styles/table.ts";

@customElement("tax-declare-page")
export class TaxDeclarePage extends AdminPageBase {
  static styles = css`
    ${layoutStyles}
    ${typographyStyles}
    ${statusStyles}
    ${tableStyles}
    ${super.styles}
  `;

  render() {
    return html`
      <div class="section-stack">
        <admin-grid type="info" .columns=${3} .gap=${12}>
          <admin-grid-item>
            <span slot="label">本月应申报税种</span>
            <span slot="value">3 项</span>
            <span slot="helper">增值税、个税、附加税</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">最近到期</span>
            <span slot="value">3月15日</span>
            <span slot="helper">增值税与个税需同日完成</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">风险提示</span>
            <span slot="value">2 项</span>
            <span slot="helper">进项缺票与零申报临期</span>
          </admin-grid-item>
        </admin-grid>

        <admin-grid .columns=${3} .gap=${16}>
          <app-card fill-height>
            <strong>增值税（月度申报）</strong>
            <p class="muted">申报期限：2025-03-15</p>
            <p class="stat-value stat-value-sm text-error">¥5,200.00</p>
            <div class="toolbar">
              <button class="btn btn-outline" type="button">生成申报表</button>
              <admin-button
                label="立即申报"
                variant="primary"
                .onClick=${() => this.handleMockAction("立即申报")}
              ></admin-button>
            </div>
          </app-card>
          <app-card fill-height>
            <strong>企业所得税（季度）</strong>
            <p class="muted">申报期限：2025-04-15</p>
            <p class="muted">预计税额：计算中...</p>
          </app-card>
          <app-card fill-height>
            <strong>个人所得税（代扣代缴）</strong>
            <p class="muted">申报期限：2025-03-15</p>
            <p class="stat-value stat-value-sm">¥1,850.00</p>
          </app-card>
        </admin-grid>

        <app-card>
          <strong>申报表预览</strong>
          <app-table
            .headers=${["行次", "项目", "本期数", "本年累计"]}
            .rows=${[
              ["1", "应征增值税不含税销售额", "¥100,000", "¥300,000"],
              ["15", "本期应纳税额", "¥3,000", "¥9,000"],
              ["22", "本期应补（退）税额", "¥3,000", "¥9,000"],
            ]}
          ></app-table>
          <div class="toolbar">
            <button class="btn btn-outline" type="button">导出PDF</button>
            <admin-button
              label="确认申报"
              variant="primary"
              .onClick=${() => this.handleMockAction("确认申报")}
            ></admin-button>
            <button class="btn btn-outline" type="button">取消</button>
          </div>
        </app-card>

        <app-card>
          <strong>申报历史记录</strong>
          <app-table
            .headers=${["申报期间", "税种", "申报日期", "状态", "税额", "操作"]}
            .rows=${[
              [
                "2025年2月",
                "增值税",
                "2025-05-15",
                html` <admin-status-badge
                  tone="success"
                  label="申报成功"
                ></admin-status-badge>`,
                "¥4,500.00",
                "查看完税证明",
              ],
              [
                "2025年2月",
                "个人所得税",
                "2025-05-15",
                html` <admin-status-badge
                  tone="success"
                  label="申报成功"
                ></admin-status-badge>`,
                "¥1,800.00",
                "查看明细",
              ],
            ]}
          ></app-table>
        </app-card>

        <admin-grid .columns=${2} .gap=${16}>
          <app-card>
            <strong>申报前检查清单</strong>
            <admin-step-card
              .steps=${[
                {
                  index: 1,
                  title: "票据完整性",
                  description: "确认进项票据已全部识别并完成审核，避免少抵扣。",
                },
                {
                  index: 2,
                  title: "对账一致性",
                  description: "核对银行流水与销项收入是否一致，排查跨期金额。",
                },
                {
                  index: 3,
                  title: "优惠政策匹配",
                  description: "检查小微企业优惠、附加税减免是否命中。",
                },
              ]}
            ></admin-step-card>
          </app-card>
          <app-card>
            <strong>税务提醒</strong>
            <admin-note-card
              title="本期风险关注"
              content="本月有 2 张采购票据尚未完成复核，可能影响进项抵扣。若选择零申报，请先确认本期无实际经营收入与成本发生。历史申报差异较大时，建议保留完整导出底稿备查。"
              type="warning"
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
