import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../../components/app-card.ts";
import "../../components/breadcrumb.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";

interface SupportMeta {
  title: string;
  subtitle: string;
}

const pageMetaMap: Record<string, SupportMeta> = {
  "help-center": {
    title: "帮助中心",
    subtitle: "常见问题、操作指南和功能说明。",
  },
  "demo-ocr": {
    title: "OCR 演示",
    subtitle: "展示票据识别流程与关键字段提取效果。",
  },
  privacy: {
    title: "隐私政策",
    subtitle: "说明数据收集、使用与保护方式。",
  },
  terms: {
    title: "服务条款",
    subtitle: "说明平台服务范围与双方责任。",
  },
};

@customElement("support-page")
export class SupportPage extends LitElement {
  static styles = css`
    ${introductionPageStyles}
    :host {
      background: var(--surface-page);
    }

    .content {
      display: grid;
      gap: 18px;
    }

    .hero {
      border-radius: 14px;
      border: 1px solid var(--border-subtle);
      background: linear-gradient(
        135deg,
        rgb(from var(--primary) r g b / 0.14) 0%,
        var(--surface-card) 100%
      );
      padding: 24px;
    }

    .title {
      margin: 0;
      font-size: 32px;
      line-height: 1.2;
      color: var(--text-title);
    }

    .subtitle {
      margin: 0;
      font-size: 14px;
      color: var(--text-body);
    }

    .block {
      display: grid;
      gap: 10px;
    }

    .block-title {
      margin: 0;
      font-size: 18px;
      color: var(--text-title);
    }

    .list {
      margin: 0;
      padding: 0;
      list-style-position: inside;
      display: grid;
      gap: 8px;
      color: var(--text-body);
      font-size: 14px;
      line-height: 1.7;
    }

    .demo-wrap {
      border-radius: 12px;
      border: 1px dashed var(--border-subtle);
      min-height: 220px;
      background: var(--surface-card);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
      text-align: center;
      padding: 16px;
    }
  `;

  @property({ type: String })
  page: "help-center" | "demo-ocr" | "privacy" | "terms" = "help-center";

  render() {
    const meta = pageMetaMap[this.page];

    return html`
      <main class="page-container">
        <div class="section-container content">
          <app-breadcrumb
            .items=${[
              { label: "首页", href: "/index.html" },
              { label: meta.title },
            ]}
          ></app-breadcrumb>

          <section class="hero">
            <h1 class="title">${meta.title}</h1>

            <spacer-item height="10px"></spacer-item>

            <p class="subtitle">${meta.subtitle}</p>
          </section>

          ${this.page === "help-center"
            ? this.renderHelp()
            : this.page === "demo-ocr"
              ? this.renderDemo()
              : this.page === "privacy"
                ? this.renderPrivacy()
                : this.renderTerms()}
        </div>
      </main>
    `;
  }

  private renderHelp() {
    return html`
      <app-card>
        <div class="block">
          <h2 class="block-title">常见问题</h2>
          <ul class="list">
            <li>票据识别失败怎么办？建议检查图片是否清晰完整后重新上传。</li>
            <li>如何提高自动记账准确率？可在智能记账页持续完善规则。</li>
            <li>报税提醒如何配置？可在通知设置中选择渠道和提前天数。</li>
          </ul>
        </div>
      </app-card>
    `;
  }

  private renderDemo() {
    return html`
      <app-card>
        <div class="block">
          <h2 class="block-title">识别效果示例</h2>
          <div class="demo-wrap">
            OCR 演示占位：后续可接入静态样例图和字段映射动画。
          </div>
          <ul class="list">
            <li>支持增值税发票、银行回单、差旅票据等常见票据类型。</li>
            <li>关键字段：发票号码、开票日期、金额、税额、销售方名称。</li>
            <li>当前为静态演示页面，不会上传或存储真实票据数据。</li>
          </ul>
        </div>
      </app-card>
    `;
  }

  private renderPrivacy() {
    return html`
      <app-card>
        <div class="block">
          <h2 class="block-title">隐私政策摘要</h2>
          <ul class="list">
            <li>仅在提供服务所必需范围内收集和处理业务数据。</li>
            <li>演示环境下数据仅做前端展示，不进行真实后端存储。</li>
            <li>用户可通过设置页面查看并管理通知与账号安全相关配置。</li>
          </ul>
        </div>
      </app-card>
    `;
  }

  private renderTerms() {
    return html`
      <app-card>
        <div class="block">
          <h2 class="block-title">服务条款摘要</h2>
          <ul class="list">
            <li>本项目当前为静态演示版本，功能表现以页面说明为准。</li>
            <li>用户需遵守平台使用规范，不得提交违法违规信息。</li>
            <li>后续接入真实服务后，条款将根据正式产品能力更新。</li>
          </ul>
        </div>
      </app-card>
    `;
  }
}
