import { css, html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import "./spacer-item.ts";

@customElement("logo-wall")
export class LogoWall extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .title {
      text-align: center;
      margin: 0;
      color: var(--text-muted);
      font-size: 14px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(
        auto-fit,
        minmax(var(--logo-wall-item-min-width, 120px), 1fr)
      );
      gap: var(--logo-wall-gap, 12px);
    }

    .item {
      border: 1px solid var(--logo-wall-item-border, var(--border-subtle));
      border-radius: var(--logo-wall-item-radius, 10px);
      background: var(--logo-wall-item-bg, var(--surface-subtle));
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: var(--logo-wall-item-padding, 12px 10px);
      color: var(--logo-wall-item-color, var(--text-title));
      font-weight: 500;
      transition:
        border-color 0.2s ease,
        background-color 0.2s ease;
    }

    .item:hover {
      border-color: var(--logo-wall-item-border-hover, var(--border-strong));
      background: var(--logo-wall-item-bg-hover, var(--surface-soft));
    }

    @media (max-width: 1080px) {
      .grid {
        grid-template-columns: repeat(
          auto-fit,
          minmax(calc(var(--logo-wall-item-min-width, 120px) * 1.2), 1fr)
        );
      }
    }

    @media (max-width: 640px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  @property({ type: String })
  title = "";

  @property({ attribute: false })
  items: string[] = [];

  @property({ type: String })
  gap?: string;

  @property({ type: String, attribute: "item-min-width" })
  itemMinWidth?: string;

  @property({ type: String, attribute: "item-padding" })
  itemPadding?: string;

  @property({ type: String, attribute: "item-radius" })
  itemRadius?: string;

  render() {
    const dynamicStyles: Record<string, string> = {};

    if (this.gap !== undefined) dynamicStyles["--logo-wall-gap"] = this.gap;
    if (this.itemMinWidth !== undefined)
      dynamicStyles["--logo-wall-item-min-width"] = this.itemMinWidth;
    if (this.itemPadding !== undefined)
      dynamicStyles["--logo-wall-item-padding"] = this.itemPadding;
    if (this.itemRadius !== undefined)
      dynamicStyles["--logo-wall-item-radius"] = this.itemRadius;

    return html`
      ${this.title
        ? html`
            <p class="title">${this.title}</p>
            <spacer-item height="24px"></spacer-item>
          `
        : nothing}
      <div class="grid" style=${styleMap(dynamicStyles)}>
        ${this.items.map((item) => html`<div class="item">${item}</div>`)}
      </div>
    `;
  }
}
