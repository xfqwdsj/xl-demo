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
import { layoutStyles } from "../styles/layout.ts";
import { tableStyles } from "../styles/table.ts";
import { timelineStyles } from "../styles/timeline.ts";

@customElement("settings-users-page")
export class SettingsUsersPage extends AdminPageBase {
  static styles = css`
    ${layoutStyles}
    ${tableStyles}
    ${timelineStyles}
    ${super.styles}
  `;

  render() {
    return html`
      <div class="section-stack">
        <admin-grid type="info" .columns=${3} .gap=${12}>
          <admin-grid-item>
            <span slot="label">总账号数</span>
            <span slot="value">4 个</span>
            <span slot="helper">含 1 个企业主账号</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">启用状态</span>
            <span slot="value">3 个</span>
            <span slot="helper">1 个待邀请确认</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">高权限账号</span>
            <span slot="value">2 个</span>
            <span slot="helper">建议定期复核权限</span>
          </admin-grid-item>
        </admin-grid>

        <app-card>
          <div class="header-row">
            <strong>当前用户列表</strong>
            <admin-button
              label="添加用户"
              variant="primary"
              .onClick=${() => this.handleMockAction("添加用户")}
            ></admin-button>
          </div>
          <app-table
            .headers=${["姓名", "角色", "手机号", "状态", "添加时间", "操作"]}
            .rows=${[
              [
                "张三",
                "企业主",
                "138****8888",
                html`<admin-status-badge
                  tone="success"
                  label="启用"
                ></admin-status-badge>`,
                "2025-06-01",
                "编辑 / 禁用",
              ],
              [
                "李四",
                "财务主管",
                "139****6666",
                html`<admin-status-badge
                  tone="success"
                  label="启用"
                ></admin-status-badge>`,
                "2025-07-15",
                "编辑 / 禁用",
              ],
              [
                "王五",
                "会计",
                "137****5555",
                html`<admin-status-badge
                  tone="success"
                  label="启用"
                ></admin-status-badge>`,
                "2025-09-10",
                "编辑 / 禁用",
              ],
            ]}
            .minWidth=${760}
          ></app-table>
        </app-card>

        <admin-grid .columns=${2} .gap=${16}>
          <app-card>
            <strong>角色说明</strong>
            <ul class="timeline">
              <li>
                <span class="dot"></span
                ><span>企业主：全部权限，包括删除数据</span>
              </li>
              <li>
                <span class="dot"></span
                ><span>财务主管：除删除外的全部权限</span>
              </li>
              <li>
                <span class="dot"></span
                ><span>会计：记账、查看报表，无审核权限</span>
              </li>
              <li>
                <span class="dot"></span><span>出纳：资金操作，无记账权限</span>
              </li>
            </ul>
          </app-card>
          <app-card>
            <strong>开通建议</strong>
            <admin-step-card
              .steps=${[
                {
                  index: 1,
                  title: "先设角色",
                  description:
                    "建议先创建标准角色，再邀请成员，减少逐个配置成本。",
                },
                {
                  index: 2,
                  title: "控制高权限",
                  description:
                    "删除、导出、授权类权限建议仅保留给企业主和财务主管。",
                },
                {
                  index: 3,
                  title: "定期复核",
                  description:
                    "离职或岗位调整后，应在 24 小时内停用账号并回收设备。",
                },
              ]}
            ></admin-step-card>
          </app-card>
        </admin-grid>
      </div>
    `;
  }

  protected handleMockAction(action: string) {
    window.alert(`执行操作: ${action}`);
  }
}
