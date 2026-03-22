import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface FeatureCheckItem {
  text: string;
  muted?: boolean;
}

@customElement("feature-check-list")
export class FeatureCheckList extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: grid;
      gap: 10px;
    }

    li {
      display: flex;
      align-items: baseline;
      gap: 8px;
      line-height: 1.5;
      font-size: 14px;
      color: var(--text);
    }

    .icon {
      color: var(--success);
      flex: 0 0 auto;
    }

    li.muted {
      color: var(--text-muted);
    }

    li.muted .icon {
      color: var(--text-muted);
    }
  `;
  @property({ type: Array })
  items: FeatureCheckItem[] = [];

  render() {
    return html`
      <ul>
        ${this.items.map(
          (item) => html`
            <li class="${item.muted ? "muted" : ""}">
              <iconify-icon
                class="icon"
                icon="${item.muted ? "fa7-solid:xmark" : "fa7-solid:check"}"
                width="14"
                height="14"
              ></iconify-icon>
              <span>${item.text}</span>
            </li>
          `,
        )}
      </ul>
    `;
  }
}
