import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { AdminPageBase } from "./admin-page-base.js";
import "../../../components/app-card.js";
import "../../../components/app-table.ts";
import "../admin-grid.js";
import "../admin-grid-item.js";
import "../admin-chip.js";
import "../admin-status-badge.js";
import "../admin-step-card.js";
import "../admin-note-card.js";
import "../admin-button.js";
import { layoutStyles } from "../styles/layout.ts";
import { interactiveStyles } from "../styles/interactive.ts";
import { tableStyles } from "../styles/table.ts";
import { typographyStyles } from "../styles/typography.ts";

@customElement("financing-page")
export class FinancingPage extends AdminPageBase {
  static styles = css`
    ${layoutStyles}
    ${interactiveStyles}
    ${tableStyles}
    ${typographyStyles}
    ${super.styles}
  `;

  render() {
    return html`
      <div class="section-stack">
        <admin-grid .columns=${4} .gap=${16}>
          <admin-grid-item type="stat">
            <span slot="label">累计申请</span>
            <span slot="value">3次</span>
          </admin-grid-item>
          <admin-grid-item type="stat">
            <span slot="label">获批额度</span>
            <span slot="value">¥200,000</span>
          </admin-grid-item>
          <admin-grid-item type="stat" extra-type="warning">
            <span slot="label">已用额度</span>
            <span slot="value">¥100,000</span>
            <span slot="extra">50%</span>
          </admin-grid-item>
          <admin-grid-item type="stat">
            <span slot="label">剩余额度</span>
            <span slot="value">¥100,000</span>
          </admin-grid-item>
        </admin-grid>

        <app-card>
          <strong>合作银行产品</strong>
          <app-table
            .headers=${[
              "银行",
              "产品名称",
              "额度范围",
              "年利率",
              "期限",
              "特点",
              "操作",
            ]}
            .rows=${[
              [
                "工商银行",
                "经营快贷",
                "1-50万",
                "4.35%起",
                "1-12月",
                "秒批秒贷",
                html` <admin-status-badge
                  tone="success"
                  label="推荐"
                ></admin-status-badge>`,
              ],
              [
                "建设银行",
                "云税贷",
                "1-100万",
                "4.5%起",
                "3-36月",
                "以税定贷",
                html` <admin-status-badge
                  tone="info"
                  label="适配"
                ></admin-status-badge>`,
              ],
              [
                "微众银行",
                "微粒贷企业版",
                "1-30万",
                "5%起",
                "随借随还",
                "按日计息",
                html` <admin-status-badge
                  tone="neutral"
                  label="备选"
                ></admin-status-badge>`,
              ],
            ]}
            .minWidth=${760}
          ></app-table>
        </app-card>

        <app-card>
          <strong>我的申请记录</strong>
          <app-table
            .headers=${[
              "申请日期",
              "银行",
              "产品",
              "申请金额",
              "状态",
              "进度",
              "操作",
            ]}
            .rows=${[
              [
                "2025-05-01",
                "工商银行",
                "经营快贷",
                "¥100,000",
                html` <admin-status-badge
                  tone="warning"
                  label="审批中"
                ></admin-status-badge>`,
                "资料审核",
                "查看进度",
              ],
              [
                "2025-02-15",
                "建设银行",
                "云税贷",
                "¥100,000",
                html` <admin-status-badge
                  tone="success"
                  label="已放款"
                ></admin-status-badge>`,
                "100%",
                "查看合同",
              ],
            ]}
            .minWidth=${760}
          ></app-table>
        </app-card>

        <app-card>
          <strong>申请流程</strong>
          <div class="chips">
            <admin-chip label="1. 生成信用报告" active disabled></admin-chip>
            <admin-chip label="2. 选择银行产品" active disabled></admin-chip>
            <admin-chip label="3. 提交申请资料" disabled></admin-chip>
            <admin-chip label="4. 银行审批" disabled></admin-chip>
            <admin-chip label="5. 签订合同" disabled></admin-chip>
            <admin-chip label="6. 放款到账" disabled></admin-chip>
          </div>
        </app-card>

        <admin-grid .columns=${2} .gap=${16}>
          <app-card>
            <strong>准入判断</strong>
            <admin-step-card
              .steps=${[
                {
                  index: 1,
                  title: "税票连续性",
                  description: "近 12 个月有稳定开票记录，是授信的基础前提。",
                },
                {
                  index: 2,
                  title: "现金流可验证",
                  description: "银行流水与报表收入匹配度越高，越容易通过初筛。",
                },
                {
                  index: 3,
                  title: "画像评分",
                  description: "当前 82.6 分可覆盖多数小额经营贷产品。",
                },
              ]}
            ></admin-step-card>
          </app-card>
          <app-card>
            <strong>材料准备建议</strong>
            <admin-note-card
              title="申请前建议准备"
              content="最近 6 个月银行流水与纳税申报记录。营业执照、法人身份证和开户许可证。近一期财务报表与信用报告，便于缩短审批时间。"
              type="normal"
            ></admin-note-card>
          </app-card>
        </admin-grid>
      </div>
    `;
  }
}
