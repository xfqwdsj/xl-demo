import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { AdminPageBase } from "./admin-page-base.js";
import "../../../components/app-card.js";
import "../../../components/app-table.ts";
import "../admin-grid.js";
import "../admin-grid-item.js";
import "../admin-button.js";
import "../admin-status-badge.js";
import "../admin-step-card.js";
import "../admin-note-card.js";
import { layoutStyles } from "../styles/layout.ts";
import { typographyStyles } from "../styles/typography.ts";
import { tableStyles } from "../styles/table.ts";

@customElement("bank-reconcile-page")
export class BankReconcilePage extends AdminPageBase {
  static styles = css`
    ${layoutStyles}
    ${typographyStyles}
    ${tableStyles}
    ${super.styles}
  `;

  render() {
    return html`
      <div class="section-stack">
        <admin-grid type="info" .columns=${3} .gap=${12}>
          <admin-grid-item>
            <span slot="label">本期流水</span>
            <span slot="value">50 笔</span>
            <span slot="helper">含收入 18 笔、支出 32 笔</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">自动匹配率</span>
            <span slot="value">90%</span>
            <span slot="helper">剩余 5 笔需人工处理</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">差异金额</span>
            <span slot="value">¥6,800</span>
            <span slot="helper">主要来自跨期回款与手续费</span>
          </admin-grid-item>
        </admin-grid>

        <admin-grid .columns=${3} .gap=${16}>
          <app-card fill-height>
            <div class="header-row">
              <strong>银行账户</strong>
              <button class="btn btn-outline" type="button">添加账户</button>
            </div>
            <p>工商银行 **** **** **** 8888</p>
            <p class="muted">余额：¥128,500.00 / 上次同步：10分钟前</p>
            <admin-button
              label="立即同步"
              variant="primary"
              .onClick=${() => this.handleMockAction("立即同步")}
            ></admin-button>
          </app-card>
          <app-card fill-height>
            <strong>银行流水（未匹配）</strong>
            <app-table
              .headers=${["日期", "对方户名", "收入", "支出", "匹配状态"]}
              .rows=${[
                [
                  "03-10",
                  "XX客户",
                  "¥15,000",
                  "-",
                  html` <admin-status-badge
                    tone="warning"
                    label="未匹配"
                  ></admin-status-badge>`,
                ],
                [
                  "03-09",
                  "XX供应商",
                  "-",
                  "¥8,000",
                  html` <admin-status-badge
                    tone="success"
                    label="已匹配"
                  ></admin-status-badge>`,
                ],
              ]}
            ></app-table>
          </app-card>
          <app-card fill-height>
            <strong>记账凭证（待匹配）</strong>
            <app-table
              .headers=${["日期", "摘要", "借方", "贷方"]}
              .rows=${[
                ["03-10", "收到货款", "银行存款 ¥15,000", "应收账款"],
                ["03-09", "支付货款", "应付账款", "银行存款 ¥8,000"],
              ]}
            ></app-table>
          </app-card>
        </admin-grid>

        <app-card>
          <div class="toolbar">
            <admin-button
              label="智能匹配"
              variant="primary"
              .onClick=${() => this.handleMockAction("智能匹配")}
            ></admin-button>
            <button class="btn btn-outline" type="button">手动匹配</button>
            <button class="btn btn-outline" type="button">标记差异</button>
          </div>
          <p class="muted">
            总流水 50 笔，已匹配 45 笔（90%），未匹配 3 笔，差异 2 笔。
          </p>
        </app-card>

        <admin-grid .columns=${2} .gap=${16}>
          <app-card>
            <strong>差异原因分析</strong>
            <admin-step-card
              .steps=${[
                {
                  index: 1,
                  title: "跨期回款",
                  description:
                    "客户付款日期在 3 月，凭证归属在 2 月，需人工确认期间。",
                },
                {
                  index: 2,
                  title: "银行手续费",
                  description: "小额手续费未自动生成凭证，可一键补录。",
                },
                {
                  index: 3,
                  title: "备注信息缺失",
                  description:
                    "流水摘要不完整时，建议结合合同编号进行二次匹配。",
                },
              ]}
            ></admin-step-card>
          </app-card>
          <app-card>
            <strong>复核建议</strong>
            <admin-note-card
              title="优先处理项"
              content="先处理金额差异超过 5,000 元的流水。将固定手续费配置为自动补录规则。收款方备注中加入客户简称，可显著提高匹配率。"
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
