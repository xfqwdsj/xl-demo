import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { AdminPageBase } from "./admin-page-base.js";
import "../../../components/app-card.js";
import "../../../components/app-table.ts";
import "../admin-grid.js";
import "../admin-grid-item.js";
import "../../../components/app-popover-menu.ts";
import "../admin-input.js";
import "../admin-button.js";
import "../admin-status-badge.js";
import "../admin-step-card.js";
import "../admin-note-card.js";
import { layoutStyles } from "../styles/layout.ts";
import { tableStyles } from "../styles/table.ts";

@customElement("auto-accounting-page")
export class AutoAccountingPage extends AdminPageBase {
  static styles = css`
    ${layoutStyles}
    ${tableStyles}
    ${super.styles}
  `;

  render() {
    return html`
      <div class="section-stack">
        <admin-grid type="info" .columns=${3} .gap=${12}>
          <admin-grid-item>
            <span slot="label">本月自动生成</span>
            <span slot="value">128 张</span>
            <span slot="helper">规则命中率 94.6%</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">待审核凭证</span>
            <span slot="value">12 张</span>
            <span slot="helper">含 3 张高金额凭证</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">异常队列</span>
            <span slot="value">4 条</span>
            <span slot="helper">主要为科目匹配冲突</span>
          </admin-grid-item>
        </admin-grid>

        <app-card>
          <div class="toolbar">
            <app-popover-menu
              .items=${[{ id: "month", content: "日期范围：本月" }]}
              @item-click=${(e: CustomEvent) => this.handleDateRangeChange(e.detail.id)}
            >
              <button class="btn btn-outline" type="button" @click=${this.togglePopoverMenu}>日期范围：本月</button>
            </app-popover-menu>
            <app-popover-menu
              .items=${[{ id: "all", content: "状态：全部" }]}
              @item-click=${(e: CustomEvent) => this.handleStatusChange(e.detail.id)}
            >
              <button class="btn btn-outline" type="button" @click=${this.togglePopoverMenu}>状态：全部</button>
            </app-popover-menu>
            <app-popover-menu
              .items=${[{ id: "all", content: "科目筛选" }]}
              @item-click=${(e: CustomEvent) => this.handleSubjectFilter(e.detail.id)}
            >
              <button class="btn btn-outline" type="button" @click=${this.togglePopoverMenu}>科目筛选</button>
            </app-popover-menu>
          </div>
          <strong>凭证列表</strong>
          <app-table
            .headers=${[
              "凭证日期",
              "凭证字号",
              "摘要",
              "借方科目",
              "借方金额",
              "贷方科目",
              "贷方金额",
              "附件",
              "状态",
            ]}
            .rows=${[
              [
                "2025-05-10",
                "记-001",
                "采购办公用品",
                "管理费用-办公费",
                "¥500.00",
                "银行存款",
                "¥500.00",
                "1张",
                html` <admin-status-badge
                  tone="success"
                  label="已审核"
                ></admin-status-badge>`,
              ],
              [
                "2025-05-09",
                "记-002",
                "支付3月房租",
                "管理费用-房租",
                "¥8,000.00",
                "银行存款",
                "¥8,000.00",
                "1张",
                html` <admin-status-badge
                  tone="warning"
                  label="待审核"
                ></admin-status-badge>`,
              ],
            ]}
          ></app-table>
          <div class="toolbar">
            <admin-button
              label="审核通过"
              variant="primary"
              .onClick=${() => this.handleMockAction("审核通过")}
            ></admin-button>
            <button class="btn btn-outline" type="button">查看详情</button>
            <button class="btn btn-outline" type="button">删除</button>
          </div>
        </app-card>

        <app-card>
          <strong>凭证详情（静态示例）</strong>
          <admin-grid type="info" .columns=${3} .gap=${16}>
            <admin-grid-item>
              <span slot="label">凭证日期</span>
              <span slot="value">2025-05-10</span>
            </admin-grid-item>
            <admin-grid-item>
              <span slot="label">凭证字号</span>
              <span slot="value">记-001</span>
            </admin-grid-item>
            <admin-grid-item>
              <span slot="label">附单据数</span>
              <span slot="value">1 张</span>
            </admin-grid-item>
          </admin-grid>
          <app-table
            .headers=${["摘要", "科目", "借方金额", "贷方金额"]}
            .rows=${[
              ["采购办公用品", "管理费用-办公费", "¥500.00", ""],
              ["采购办公用品", "银行存款", "", "¥500.00"],
              ["合计", "-", "¥500.00", "¥500.00"],
            ]}
          ></app-table>
        </app-card>

        <admin-grid .columns=${2} .gap=${16}>
          <app-card>
            <strong>记账规则命中说明</strong>
            <admin-step-card
              .steps=${[
                {
                  index: 1,
                  title: "票据类型识别",
                  description: "先根据票据类型、供应商和用途匹配默认会计科目。",
                },
                {
                  index: 2,
                  title: "金额与税额拆分",
                  description: "自动按税率拆分价税，生成借贷分录并校验平衡。",
                },
                {
                  index: 3,
                  title: "人工复核回流",
                  description:
                    "复核通过后的调整会回写规则库，提升下次自动命中率。",
                },
              ]}
            ></admin-step-card>
          </app-card>
          <app-card>
            <strong>异常处理建议</strong>
            <admin-note-card
              title="常见异常"
              content="同一供应商存在多个科目映射时，建议锁定默认科目策略。房租、水电等周期性费用可配置固定摘要模板。金额较大且附件不足的凭证应优先审核，避免报表失真。"
              type="warning"
            ></admin-note-card>
          </app-card>
        </admin-grid>
      </div>
    `;
  }

  protected handleDateRangeChange(value: string) {
    window.alert(`日期范围: ${value}`);
  }

  protected handleStatusChange(value: string) {
    window.alert(`状态: ${value}`);
  }

  protected handleSubjectFilter(value: string) {
    window.alert(`科目筛选: ${value}`);
  }

  protected handleMockAction(action: string) {
    window.alert(`执行操作: ${action}`);
  }
}
