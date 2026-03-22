import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

export interface StatStripItem {
  value: string;
  label: string;
}

@customElement("stat-strip")
export class StatStrip extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(
        auto-fit,
        minmax(var(--stat-strip-item-min-width, 200px), 1fr)
      );

      gap: 1px;
      background-color: var(
        --stat-strip-item-border,
        rgb(from var(--border) r g b / 0.6)
      );

      border: 1px solid
        var(--stat-strip-border, rgb(from var(--border) r g b / 0.6));
      border-radius: var(--stat-strip-border-radius-large, 12px);
      overflow: hidden;
    }

    .item {
      padding: var(--stat-strip-item-padding, 26px 18px);
      text-align: center;
      background-color: var(--stat-strip-background, var(--surface-card));
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .value {
      font-size: var(--stat-strip-value-size, 30px);
      font-weight: 700;
      line-height: 1.2;
      background: linear-gradient(
        135deg,
        var(--primary-strong) 0%,
        var(--accent-violet) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .value::selection {
      color: var(--white);
      -webkit-text-fill-color: var(--white);
      -webkit-background-clip: border-box;
      background-clip: border-box;
    }

    :host([tone="solid"]) .value {
      background: none;
      -webkit-text-fill-color: var(--primary-strong);
      color: var(--primary-strong);
    }

    :host([tone="solid"]) .value::selection {
      background: rgb(from var(--primary) r g b / 0.2);
      color: var(--primary-strong);
      -webkit-text-fill-color: var(--primary-strong);
    }

    .label {
      margin-top: var(--stat-strip-label-margin-top, 8px);
      color: var(--stat-strip-label-color, var(--text));
      font-size: var(--stat-strip-label-size, 14px);
    }

    @media (max-width: 1080px) {
      .stats {
        grid-template-columns: repeat(
          auto-fit,
          minmax(calc(var(--stat-strip-item-min-width, 200px) * 1.2), 1fr)
        );
      }
    }

    @media (max-width: 640px) {
      .stats {
        grid-template-columns: 1fr;
      }
    }
  `;

  @property({ attribute: false })
  items: StatStripItem[] = [];

  @property({ type: String, reflect: true })
  tone: "gradient" | "solid" = "gradient";

  @property({ type: String, attribute: "item-min-width" })
  itemMinWidth?: string;
  @property({ type: String, attribute: "item-padding" }) itemPadding?: string;
  @property({ type: String, attribute: "value-size" }) valueSize?: string;
  @property({ type: String, attribute: "label-size" }) labelSize?: string;
  @property({ type: String, attribute: "label-margin-top" })
  labelMarginTop?: string;
  @property({ type: String }) border?: string;
  @property({ type: String, attribute: "item-border" }) itemBorder?: string;
  @property({ type: String, attribute: "border-radius" }) borderRadius?: string;
  @property({ type: String }) background?: string;
  @property({ type: String, attribute: "label-color" }) labelColor?: string;

  render() {
    const dynamicStyles: Record<string, string> = {};

    if (this.itemMinWidth !== undefined)
      dynamicStyles["--stat-strip-item-min-width"] = this.itemMinWidth;
    if (this.itemPadding !== undefined)
      dynamicStyles["--stat-strip-item-padding"] = this.itemPadding;
    if (this.valueSize !== undefined)
      dynamicStyles["--stat-strip-value-size"] = this.valueSize;
    if (this.labelSize !== undefined)
      dynamicStyles["--stat-strip-label-size"] = this.labelSize;
    if (this.labelMarginTop !== undefined)
      dynamicStyles["--stat-strip-label-margin-top"] = this.labelMarginTop;
    if (this.border !== undefined)
      dynamicStyles["--stat-strip-border"] = this.border;
    if (this.itemBorder !== undefined)
      dynamicStyles["--stat-strip-item-border"] = this.itemBorder;
    if (this.borderRadius !== undefined)
      dynamicStyles["--stat-strip-border-radius-large"] = this.borderRadius;
    if (this.background !== undefined)
      dynamicStyles["--stat-strip-background"] = this.background;
    if (this.labelColor !== undefined)
      dynamicStyles["--stat-strip-label-color"] = this.labelColor;

    return html`
      <div class="stats" style=${styleMap(dynamicStyles)}>
        ${this.items.map(
          (item) => html`
            <div class="item">
              <div class="value">${item.value}</div>
              <div class="label">${item.label}</div>
            </div>
          `,
        )}
      </div>
    `;
  }
}
