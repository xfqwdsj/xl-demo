import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { AdminPageBase } from "./admin-page-base.js";
import "../../../components/app-card.js";
import "../../../components/app-table.ts";
import "../admin-grid.js";
import "../admin-grid-item.js";
import "../admin-button.js";
import "../admin-select.js";
import "../admin-input.js";
import "../admin-status-badge.js";
import "../admin-step-card.js";
import "../admin-note-card.js";
import { layoutStyles } from "../styles/layout.ts";
import { typographyStyles } from "../styles/typography.ts";
import { interactiveStyles } from "../styles/interactive.ts";
import { tableStyles } from "../styles/table.ts";

@customElement("invoice-list-page")
export class InvoiceListPage extends AdminPageBase {
  static styles = css`
    ${layoutStyles}
    ${typographyStyles}
    ${interactiveStyles}
    ${tableStyles}
    ${super.styles}
  `;

  render() {
    return html`
      <div class="section-stack">
        <admin-grid type="info" .columns=${3} .gap=${12}>
          <admin-grid-item>
            <span slot="label">本月入库</span>
            <span slot="value">286 张</span>
            <span slot="helper">较上月增加 18%</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">识别成功率</span>
            <span slot="value">97.4%</span>
            <span slot="helper">异常 7 张待人工修正</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">重复票据</span>
            <span slot="value">4 张</span>
            <span slot="helper">已自动标记防止重复报销</span>
          </admin-grid-item>
        </admin-grid>

        <app-card>
          <div class="header-row">
            <div class="toolbar">
              <admin-button
                label="上传票据"
                variant="primary"
                .onClick=${() => this.handleMockAction("上传票据")}
              ></admin-button>
              <admin-select
                .options=${[
                  { value: "batch", label: "批量操作" },
                  { value: "export", label: "导出" },
                  { value: "delete", label: "删除" },
                ]}
                .onChange=${(value: string) => this.handleBatchAction(value)}
              ></admin-select>
            </div>
            <div class="toolbar">
              <admin-input
                placeholder="按发票号/金额/供应商搜索"
                .onChange=${(value: string) => this.handleSearch(value)}
              ></admin-input>
              <button class="btn btn-outline" type="button">筛选</button>
            </div>
          </div>
          <strong>票据列表</strong>
          <app-table
            .headers=${[
              "票据编号",
              "票据类型",
              "开票日期",
              "销售方",
              "金额",
              "状态",
              "操作",
            ]}
            .rows=${[
              [
                "INV-2025-001",
                "增值税专票",
                "2025-05-10",
                "XX科技有限公司",
                "¥10,000.00",
                html` <admin-status-badge
                  tone="success"
                  label="已识别"
                ></admin-status-badge>`,
                "查看 / 删除",
              ],
              [
                "INV-2025-002",
                "差旅费发票",
                "2025-05-09",
                "广州XX酒店",
                "¥1,200.00",
                html` <admin-status-badge
                  tone="info"
                  label="识别中"
                ></admin-status-badge>`,
                "查看",
              ],
              [
                "INV-2025-003",
                "银行回单",
                "2025-05-08",
                "XX银行",
                "¥25,000.00",
                html` <admin-status-badge
                  tone="neutral"
                  label="已入账"
                ></admin-status-badge>`,
                "查看 / 反冲",
              ],
            ]}
            .minWidth=${760}
          ></app-table>
          <div class="pager" aria-label="分页">
            <span class="page-btn">&lt;</span>
            <span class="page-btn active">1</span>
            <span class="page-btn">2</span>
            <span class="page-btn">3</span>
            <span class="page-btn">...</span>
            <span class="page-btn">10</span>
            <span class="page-btn">&gt;</span>
          </div>
          <p class="muted">每页20条，共186条记录。</p>
        </app-card>

        <admin-grid .columns=${2} .gap=${16}>
          <app-card>
            <strong>状态说明</strong>
            <admin-step-card
              .steps=${[
                {
                  index: 1,
                  title: "已识别",
                  description: "OCR 字段提取完成，可进入复核或自动入账流程。",
                },
                {
                  index: 2,
                  title: "识别中",
                  description: "系统正在排队或进行模型校验，通常 5 秒内完成。",
                },
                {
                  index: 3,
                  title: "已入账",
                  description: "该票据已关联凭证，不建议直接删除。",
                },
              ]}
            ></admin-step-card>
          </app-card>
          <app-card>
            <strong>处理建议</strong>
            <admin-note-card
              title="今天建议"
              content="优先复核大于 1 万元的采购票据。对于低置信度字段，建议查看原图并锁定关键项。银行回单可与对账模块联动，减少重复录入。"
              type="normal"
            ></admin-note-card>
          </app-card>
        </admin-grid>
      </div>
    `;
  }

  protected handleBatchAction(value: string) {
    window.alert(`批量操作: ${value}`);
  }

  protected handleSearch(value: string) {
    window.alert(`搜索: ${value}`);
  }
}
