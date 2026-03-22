import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { AdminPageBase } from "./admin-page-base.js";
import "../../../components/app-card.js";
import "../admin-grid.js";
import "../admin-grid-item.js";
import "../admin-select.js";
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
          <strong>通知规则</strong>
          <admin-grid .columns=${2} .gap=${16}>
            <div class="field">
              <label>票据到期提醒</label>
              <admin-select
                label="提前天数"
                .options=${[
                  { value: "1", label: "1 天" },
                  { value: "3", label: "3 天" },
                  { value: "7", label: "7 天" },
                ]}
                .value=${"3"}
                .onChange=${(v: string) =>
                  this.handleMockAction(`票据到期提醒: ${v}`)}
              ></admin-select>
            </div>
            <div class="field">
              <label>异常交易预警</label>
              <admin-select
                label="预警级别"
                .options=${[
                  { value: "low", label: "低" },
                  { value: "mid", label: "中" },
                  { value: "high", label: "高" },
                ]}
                .value=${"mid"}
                .onChange=${(v: string) =>
                  this.handleMockAction(`异常交易预警: ${v}`)}
              ></admin-select>
            </div>
          </admin-grid>
        </app-card>

        <app-card>
          <strong>通知渠道</strong>
          <admin-grid .columns=${3} .gap=${16}>
            <div class="field">
              <label>站内信</label>
              <admin-select
                label="状态"
                .options=${[
                  { value: "enabled", label: "开启" },
                  { value: "disabled", label: "关闭" },
                ]}
                .value=${"enabled"}
                .onChange=${(v: string) =>
                  this.handleMockAction(`站内信: ${v}`)}
              ></admin-select>
            </div>
            <div class="field">
              <label>邮件通知</label>
              <admin-select
                label="状态"
                .options=${[
                  { value: "enabled", label: "开启" },
                  { value: "disabled", label: "关闭" },
                ]}
                .value=${"enabled"}
                .onChange=${(v: string) =>
                  this.handleMockAction(`邮件通知: ${v}`)}
              ></admin-select>
            </div>
            <div class="field">
              <label>短信通知</label>
              <admin-select
                label="状态"
                .options=${[
                  { value: "enabled", label: "开启" },
                  { value: "disabled", label: "关闭" },
                ]}
                .value=${"disabled"}
                .onChange=${(v: string) =>
                  this.handleMockAction(`短信通知: ${v}`)}
              ></admin-select>
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
