import { customElement } from "lit/decorators.js";
import { css, html, LitElement } from "lit";
import "./app-hr.ts";
import "./spacer-item.ts";

@customElement("app-footer")
export class AppFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--bg);
      padding: 40px 0 20px;
      margin-top: auto;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .columns {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 30px;
    }

    .column h4 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 16px;
      color: var(--text);
    }

    .column ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .column li {
      margin-bottom: 8px;
    }

    .column a {
      color: rgb(from var(--text) r g b / 0.8);
      text-decoration: none;
      font-size: 14px;
      transition: color 0.2s;
    }

    .column a:hover {
      color: var(--primary);
    }

    .bottom {
      text-align: center;
      padding: 12px 0;
      color: var(--text);
      font-size: 12px;
    }
  `;

  columns = [
    {
      title: "产品",
      links: [
        { label: "功能介绍", link: "product.html" },
        { label: "定价方案", link: "pricing.html" },
        { label: "解决方案", link: "solution.html" },
      ],
    },
    {
      title: "客户",
      links: [
        { label: "客户案例", link: "cases.html" },
        { label: "OCR演示", link: "demo-ocr.html" },
        { label: "帮助中心", link: "help-center.html" },
      ],
    },
    {
      title: "公司",
      links: [{ label: "关于我们", link: "about.html" }],
    },
    {
      title: "法律",
      links: [
        { label: "隐私政策", link: "privacy.html" },
        { label: "服务条款", link: "terms.html" },
      ],
    },
  ];

  render() {
    return html`
      <footer>
        <div class="footer-container">
          <div class="columns">
            ${this.columns.map(
              (col) => html`
                <div class="column">
                  <h4>${col.title}</h4>
                  <ul>
                    ${col.links.map(
                      (link) =>
                        html`<li><a href=${link.link}>${link.label}</a></li>`,
                    )}
                  </ul>
                </div>
              `,
            )}
          </div>
          <spacer-item height="42px"></spacer-item>
          <app-hr></app-hr>
          <div class="bottom">© 2025 票据小灵 版权所有 | 京ICP备XXXXXXXX号</div>
        </div>
      </footer>
    `;
  }
}
