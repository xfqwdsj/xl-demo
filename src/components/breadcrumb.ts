import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

@customElement("app-breadcrumb")
export class AppBreadcrumb extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    nav {
      font-size: 14px;
      color: #8c8c8c;
      margin-bottom: 8px;
    }

    a {
      color: #1677ff;
      text-decoration: none;
      transition: color 0.2s ease;
    }

    a:hover {
      color: #0958d9;
      text-decoration: underline;
    }

    .separator {
      margin: 0 6px;
      user-select: none;
    }

    .current {
      color: #8c8c8c;
    }
  `;

  @property({ type: Array })
  items: BreadcrumbItem[] = [];

  render() {
    return html`
      <nav aria-label="面包屑导航">
        ${this.items.map(
          (item, index) => html`
            ${index > 0
              ? html`<span class="separator" aria-hidden="true">></span>`
              : null}
            ${item.href
              ? html`<a href="${item.href}">${item.label}</a>`
              : html`<span class="current" aria-current="page"
                  >${item.label}</span
                >`}
          `,
        )}
      </nav>
    `;
  }
}
