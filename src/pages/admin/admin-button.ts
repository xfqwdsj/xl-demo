import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { buttonStyles } from "../../components/button.ts";

@customElement("admin-button")
export class AdminButton extends LitElement {
  static styles = buttonStyles;

  @property({ type: String })
  label = "";

  @property({ type: String })
  variant: "primary" | "secondary" | "outline" = "primary";

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Function })
  onClick?: () => void;

  render() {
    const buttonClass = `btn btn-${this.variant} ${this.disabled ? "disabled" : ""}`;

    return html`
      <button
        class="${buttonClass}"
        type="button"
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        ${this.label}
      </button>
    `;
  }

  private handleClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();

    if (this.onClick && !this.disabled) {
      this.onClick();
    }
  }
}
