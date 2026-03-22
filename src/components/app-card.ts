import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

type AppCardVariant = "gradient-success";

@customElement("app-card")
export class AppCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .card {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;

      gap: var(--app-card-gap, 0px);
      padding: var(--app-card-padding, 22px);
      border-radius: var(--app-card-radius, 12px);
      box-shadow: var(--app-card-shadow, none);
      background: var(--app-card-bg, var(--white));
      border: 1px solid var(--app-card-border-color, #eeeeee);

      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        border-color 0.2s ease;
    }

    .card.fill-height {
      height: 100%;
    }

    .card.hoverable:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
    }

    .card.gradient-success {
      --app-card-bg: linear-gradient(135deg, #f6ffed 0%, #e6f7ff 100%);
      --app-card-border-color: #b7eb8f;
      color: #135200;
    }
  `;

  @property({ type: String }) padding?: string;
  @property({ type: String }) radius?: string;
  @property({ type: String }) shadow?: string;
  @property({ type: String }) background?: string;
  @property({ type: String, attribute: "border-color" }) borderColor?: string;
  @property({ type: String }) gap?: string;

  @property({ type: Boolean }) hoverable = false;
  @property({ type: Boolean, attribute: "fill-height" }) fillHeight = false;
  @property({ type: String }) variant?: AppCardVariant;

  render() {
    const dynamicStyles: Record<string, string> = {};

    if (this.padding !== undefined)
      dynamicStyles["--app-card-padding"] = this.padding;
    if (this.radius !== undefined)
      dynamicStyles["--app-card-radius"] = this.radius;
    if (this.shadow !== undefined)
      dynamicStyles["--app-card-shadow"] = this.shadow;
    if (this.background !== undefined)
      dynamicStyles["--app-card-bg"] = this.background;
    if (this.borderColor !== undefined)
      dynamicStyles["--app-card-border-color"] = this.borderColor;
    if (this.gap !== undefined)
      dynamicStyles["--app-card-gap"] = String(this.gap);

    const classes: Record<string, boolean> = {
      card: true,
    };

    classes["hoverable"] = this.hoverable;
    classes["fill-height"] = this.fillHeight;
    if (this.variant) {
      classes[this.variant] = true;
    }

    return html`
      <article class=${classMap(classes)} style=${styleMap(dynamicStyles)}>
        <slot></slot>
      </article>
    `;
  }
}
