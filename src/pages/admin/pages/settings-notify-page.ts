import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { AdminPageBase } from "./admin-page-base.js";
import "../../../components/app-card.js";
import "../admin-grid.js";
import "../admin-grid-item.js";
import "../../../components/app-popover-menu.ts";
import "../admin-input.js";
import { layoutStyles } from "../styles/layout.ts";

@customElement("settings-notify-page")
export class SettingsNotifyPage extends AdminPageBase {
  static styles = css`
    ${layoutStyles}
    ${super.styles}
  `;

  render() {
    return html`
      <div class="section-stack">
        <admin-grid type="info" .columns=${3} .gap=${12}>
          <admin-grid-item>
            <span slot="label">通知渠道</span>
            <span slot="value">3 个</span>
            <span slot="helper">站内 / 邮件 / 短信</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">今日通知</span>
            <span slot="value">12 条</span>
            <span slot="helper">含 2 条预警</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">免打扰时段</span>
            <span slot="value">22:00–08:00</span>
            <span slot="helper">可自定义</span>
          </admin-grid-item>
        </admin-grid>

        <app-card>
          <strong>通知设置</strong>
          <admin-grid .columns=${3} .gap=${16}>
            <div class="field">
              <label>票据到期提醒</label>
              <app-popover-menu
                .items=${[
                  { id: "1", content: "1 天" },
                  { id: "3", content: "3 天" },
                  { id: "7", content: "7 天" },
                ]}
                @item-click=${(e: CustomEvent) => this.handleMockAction(`票据到期提醒: ${e.detail.id}`)}
              >
                <button class="btn btn-outline" type="button" @click=${this.togglePopoverMenu}>3 天</button>
              </app-popover-menu>
            </div>
            <div class="field">
              <label>异常交易预警</label>
              <app-popover-menu
                .items=${[
                  { id: "low", content: "低" },
                  { id: "mid", content: "中" },
                  { id: "high", content: "高" },
                ]}
                @item-click=${(e: CustomEvent) => this.handleMockAction(`异常交易预警: ${e.detail.id}`)}
              >
                <button class="btn btn-outline" type="button" @click=${this.togglePopoverMenu}>中</button>
              </app-popover-menu>
            </div>
            <div class="field">
              <label>站内信</label>
              <app-popover-menu
                .items=${[
                  { id: "enabled", content: "开启" },
                  { id: "disabled", content: "关闭" },
                ]}
                @item-click=${(e: CustomEvent) => this.handleMockAction(`站内信: ${e.detail.id}`)}
              >
                <button class="btn btn-outline" type="button" @click=${this.togglePopoverMenu}>开启</button>
              </app-popover-menu>
            </div>
            <div class="field">
              <label>邮件通知</label>
              <app-popover-menu
                .items=${[
                  { id: "enabled", content: "开启" },
                  { id: "disabled", content: "关闭" },
                ]}
                @item-click=${(e: CustomEvent) => this.handleMockAction(`邮件通知: ${e.detail.id}`)}
              >
                <button class="btn btn-outline" type="button" @click=${this.togglePopoverMenu}>开启</button>
              </app-popover-menu>
            </div>
            <div class="field">
              <label>短信通知</label>
              <app-popover-menu
                .items=${[
                  { id: "enabled", content: "开启" },
                  { id: "disabled", content: "关闭" },
                ]}
                @item-click=${(e: CustomEvent) => this.handleMockAction(`短信通知: ${e.detail.id}`)}
              >
                <button class="btn btn-outline" type="button" @click=${this.togglePopoverMenu}>关闭</button>
              </app-popover-menu>
            </div>
          </admin-grid>
        </app-card>

        <app-card>
          <strong>免打扰设置</strong>
          <admin-grid .columns=${2} .gap=${16}>
            <div class="field">
              <label>开始时间</label>
              <admin-input
                label="时间"
                value="22:00"
                .onChange=${(v: string) =>
                  this.handleMockAction(`免打扰开始: ${v}`)}
              ></admin-input>
            </div>
            <div class="field">
              <label>结束时间</label>
              <admin-input
                label="时间"
                value="08:00"
                .onChange=${(v: string) =>
                  this.handleMockAction(`免打扰结束: ${v}`)}
              ></admin-input>
            </div>
          </admin-grid>
        </app-card>
      </div>
    `;
  }

  protected handleMockAction(action: string) {
    window.alert(`执行操作: ${action}`);
  }
}
