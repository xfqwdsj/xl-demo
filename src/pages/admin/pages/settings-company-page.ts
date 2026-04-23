import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { AdminPageBase } from "./admin-page-base.js";
import "../../../components/app-card.js";
import "../../../components/app-table.js";
import "../admin-grid.js";
import "../admin-grid-item.js";
import "../admin-input.js";
import "../admin-placeholder.js";
import "../admin-button.js";
import "../admin-note-card.js";
import { layoutStyles } from "../styles/layout.ts";
import { tableStyles } from "../styles/table.ts";

@customElement("settings-company-page")
export class SettingsCompanyPage extends AdminPageBase {
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
            <span slot="label">资料完整度</span>
            <span slot="value">92%</span>
            <span slot="helper">缺少开户许可证扫描件</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">税务档案</span>
            <span slot="value">已同步</span>
            <span slot="helper">最近同步时间：今天 09:40</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">银行账户</span>
            <span slot="value">1 个</span>
            <span slot="helper">已启用默认收付款账户</span>
          </admin-grid-item>
        </admin-grid>

        <app-card>
          <strong>企业基本信息</strong>
          <admin-grid .columns=${2} .gap=${16}>
            <admin-input
              value="XX有限公司"
              .onChange=${(value: string) =>
                this.handleCompanyChange("name", value)}
            ></admin-input>
            <admin-input
              value="91440101MA5XXXXXXXX"
              .onChange=${(value: string) =>
                this.handleCompanyChange("taxId", value)}
            ></admin-input>
            <admin-input
              value="020-12345678"
              .onChange=${(value: string) =>
                this.handleCompanyChange("phone", value)}
            ></admin-input>
            <admin-input
              value="查账征收"
              .onChange=${(value: string) =>
                this.handleCompanyChange("taxType", value)}
            ></admin-input>
          </admin-grid>
          <admin-placeholder
            size="sm"
            text="营业执照上传区域"
            draggable
            .onClick=${() => this.handleMockAction("上传营业执照")}
          ></admin-placeholder>
          <div class="toolbar">
            <admin-button
              label="保存"
              variant="primary"
              .onClick=${() => this.handleMockAction("保存")}
            ></admin-button>
            <button class="btn btn-outline" type="button">取消</button>
          </div>
        </app-card>

        <app-card>
          <div class="header-row">
            <strong>银行账户</strong>
            <button
              class="btn btn-outline"
              type="button"
              @click=${() => this.handleMockAction("添加银行账户")}
            >
              添加银行账户
            </button>
          </div>
          <app-table
            .headers=${["开户行", "账号", "开户名", "操作"]}
            .rows=${[["工商银行广州分行", "****8888", "XX有限公司", "删除"]]}
          ></app-table>
        </app-card>

        <app-card>
          <strong>资料维护提示</strong>
          <admin-note-card
            title="建议保持最新"
            content="企业名称、统一社会信用代码和纳税征收方式需与税局档案一致。默认银行账户建议与报税扣款账户保持一致，避免后续申报失败。营业执照变更后建议 24 小时内同步更新，防止融资资料不一致。"
            type="normal"
          ></admin-note-card>
        </app-card>
      </div>
    `;
  }

  protected handleCompanyChange(field: string, value: string) {
    window.alert(`公司信息 ${field}: ${value}`);
  }

  protected handleMockAction(action: string) {
    window.alert(`执行操作: ${action}`);
  }
}
