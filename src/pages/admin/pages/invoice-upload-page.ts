import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { AdminPageBase } from "./admin-page-base.js";
import "../../../components/app-card.js";
import "../../../components/app-table.js";
import "../admin-grid.js";
import "../admin-grid-item.js";
import "../admin-placeholder.js";
import "../admin-button.js";
import "../admin-status-badge.js";
import "../admin-step-card.js";
import "../admin-note-card.js";
import { layoutStyles } from "../styles/layout.ts";
import { tableStyles } from "../styles/table.ts";

@customElement("invoice-upload-page")
export class InvoiceUploadPage extends AdminPageBase {
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
            <span slot="label">本月已上传</span>
            <span slot="value">286 张</span>
            <span slot="helper">较上月增加 18%</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">平均识别时间</span>
            <span slot="value">3.2 秒</span>
            <span slot="helper">较上月优化 0.8 秒</span>
          </admin-grid-item>
          <admin-grid-item>
            <span slot="label">格式支持</span>
            <span slot="value">12 种</span>
            <span slot="helper">含 PDF、JPG、PNG、OFD 等</span>
          </admin-grid-item>
        </admin-grid>

        <app-card>
          <admin-placeholder
            size="md"
            text="拖拽上传区域（支持 jpg / png / pdf，单文件 10MB，单次最多 100 个）"
            draggable
            .onClick=${() => this.handleMockAction("上传文件")}
          ></admin-placeholder>
          <admin-button
            label="选择文件"
            variant="primary"
            .onClick=${() => this.handleMockAction("选择文件")}
          ></admin-button>
        </app-card>

        <app-card>
          <strong>上传记录</strong>
          <app-table
            .headers=${["文件名", "上传时间", "状态", "操作"]}
            .rows=${[
              [
                "采购发票_20250310_001.jpg",
                "今天 10:23",
                html` <admin-status-badge
                  tone="success"
                  label="识别成功"
                ></admin-status-badge>`,
                "查看 / 删除",
              ],
              [
                "差旅报销单_20250309.pdf",
                "昨天 16:45",
                html` <admin-status-badge
                  tone="info"
                  label="识别中"
                ></admin-status-badge>`,
                "查看",
              ],
              [
                "银行回单_20250308.png",
                "3月8日 14:30",
                html` <admin-status-badge
                  tone="neutral"
                  label="已入账"
                ></admin-status-badge>`,
                "查看 / 反冲",
              ],
            ]}
            .minWidth=${760}
          ></app-table>
        </app-card>

        <admin-grid .columns=${2} .gap=${16}>
          <app-card>
            <strong>上传建议</strong>
            <admin-step-card
              .steps=${[
                {
                  index: 1,
                  title: "拍摄清晰",
                  description: "确保发票四角完整、文字清晰，避免反光或遮挡。",
                },
                {
                  index: 2,
                  title: "分类整理",
                  description:
                    "按业务类型（采购、费用、收入等）分别上传，便于后续处理。",
                },
                {
                  index: 3,
                  title: "及时复核",
                  description:
                    "上传后 5 分钟内查看识别结果，及时修正异常字段。",
                },
              ]}
            ></admin-step-card>
          </app-card>
          <app-card>
            <strong>格式说明</strong>
            <admin-note-card
              title="支持格式"
              content="图像：JPG、PNG、BMP、TIFF，建议分辨率 300 DPI 以上。文档：PDF（含扫描版与电子版）、OFD（电子发票专用）。压缩包：ZIP、RAR（自动解压并批量识别）。"
              type="normal"
            ></admin-note-card>
          </app-card>
        </admin-grid>
      </div>
    `;
  }
}
