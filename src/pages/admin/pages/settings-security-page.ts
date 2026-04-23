import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { AdminPageBase } from "./admin-page-base.js";
import "../../../components/app-card.js";
import "../../../components/app-table.js";
import "../admin-grid.js";
import "../admin-grid-item.js";
import "../../../components/app-popover-menu.ts";
import "../admin-button.js";
import "../admin-status-badge.js";
import "../admin-step-card.js";
import { layoutStyles } from "../styles/layout.ts";
import { tableStyles } from "../styles/table.ts";

@customElement("settings-security-page")
export class SettingsSecurityPage extends AdminPageBase {
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
            <span slot="label">安全等级</span>
            <span slot="value">高</span>
            <span slot="helper">已开启全部防护</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">最近登录</span>
            <span slot="value">2 分钟前</span>
            <span slot="helper">IP: 192.168.1.100</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">异常登录</span>
            <span slot="value">0 次</span>
            <span slot="helper">近 30 天无异常</span>
          </admin-grid-item>
        </admin-grid>

        <app-card>
          <strong>安全策略</strong>
          <admin-grid .columns=${2} .gap=${16}>
            <div class="field">
              <label>双因素认证</label>
              <app-popover-menu
                .items=${[
                  { id: "enabled", content: "开启" },
                  { id: "disabled", content: "关闭" },
                ]}
                @item-click=${(e: CustomEvent) => this.handleMockAction(`双因素认证: ${e.detail.id}`)}
              >
                <button class="btn btn-outline" type="button" @click=${this.togglePopoverMenu}>开启</button>
              </app-popover-menu>
            </div>
            <div class="field">
              <label>登录设备管理</label>
              <admin-button
                label="查看设备"
                variant="secondary"
                .onClick=${() => this.handleMockAction("查看设备")}
              ></admin-button>
            </div>
            <div class="field">
              <label>密码强度</label>
              <app-popover-menu
                .items=${[
                  { id: "low", content: "低（6位）" },
                  { id: "mid", content: "中（8位+大小写）" },
                  { id: "high", content: "高（12位+特殊字符）" },
                ]}
                @item-click=${(e: CustomEvent) => this.handleMockAction(`密码强度: ${e.detail.id}`)}
              >
                <button class="btn btn-outline" type="button" @click=${this.togglePopoverMenu}>中（8位+大小写）</button>
              </app-popover-menu>
            </div>
            <div class="field">
              <label>密码有效期</label>
              <app-popover-menu
                .items=${[
                  { id: "30", content: "30 天" },
                  { id: "60", content: "60 天" },
                  { id: "90", content: "90 天" },
                  { id: "forever", content: "永不过期" },
                ]}
                @item-click=${(e: CustomEvent) => this.handleMockAction(`密码有效期: ${e.detail.id}`)}
              >
                <button class="btn btn-outline" type="button" @click=${this.togglePopoverMenu}>90 天</button>
              </app-popover-menu>
            </div>
          </admin-grid>
        </app-card>

        <app-card>
          <strong>操作日志</strong>
          <app-table
            .headers=${["时间", "用户", "操作", "IP 地址", "状态"]}
            .rows=${[
              [
                "2025-11-20 14:30",
                "张三",
                "登录系统",
                "192.168.1.100",
                html`<admin-status-badge
                  tone="success"
                  label="成功"
                ></admin-status-badge>`,
              ],
              [
                "2025-11-20 14:25",
                "李四",
                "修改密码",
                "192.168.1.101",
                html`<admin-status-badge
                  tone="success"
                  label="成功"
                ></admin-status-badge>`,
              ],
              [
                "2025-11-20 14:20",
                "王五",
                "导出报表",
                "192.168.1.102",
                html`<admin-status-badge
                  tone="success"
                  label="成功"
                ></admin-status-badge>`,
              ],
            ]}
          ></app-table>
        </app-card>

        <app-card>
          <strong>安全建议</strong>
          <admin-step-card
            .steps=${[
              {
                index: 1,
                title: "开启双因素认证",
                description: "建议所有管理员开启双因素认证，提升账户安全性。",
              },
              {
                index: 2,
                title: "定期更换密码",
                description: "建议每 90 天更换一次密码，避免使用简单密码。",
              },
              {
                index: 3,
                title: "检查登录设备",
                description: "定期检查登录设备列表，移除不常用的设备。",
              },
            ]}
          ></admin-step-card>
        </app-card>
      </div>
    `;
  }

  protected handleMockAction(action: string) {
    window.alert(`执行操作: ${action}`);
  }
}
