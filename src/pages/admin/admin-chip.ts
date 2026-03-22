import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("admin-chip")
export class AdminChip extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .chip {
      border-radius: 999px;
      padding: 5px 10px;
      font-size: 12px;
      border: 1px solid rgb(from var(--border) r g b / 0.8);
      background: rgb(from var(--white) r g b / 0.95);
      color: var(--text);
      cursor: pointer;
      transition: all 0.2s ease;
      user-select: none;
    }

    .chip:hover {
      border-color: rgb(from var(--border) r g b / 1);
      background: var(--white);
      transform: translateY(-1px);
    }

    .chip.active {
      border-color: rgb(from var(--primary) r g b / 0.8);
      color: rgb(from var(--primary) r g b / 0.9);
      background: color-mix(in srgb, var(--primary) 12%, var(--white));
      font-weight: 500;
    }

    .chip.active:hover {
      border-color: rgb(from var(--primary) r g b / 1);
      background: color-mix(in srgb, var(--primary) 16%, var(--white));
    }

    .chip.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .chip.disabled:hover {
      transform: none;
      border-color: rgb(from var(--border) r g b / 0.8);
      background: rgb(from var(--white) r g b / 0.95);
    }
  `;

  @property({ type: String })
  label = "";

  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Function })
  onClick?: () => void;

  render() {
    const classes = `chip ${this.active ? "active" : ""} ${this.disabled ? "disabled" : ""}`;

    return html`
      <span class="${classes}" @click="${this.handleClick}">
        ${this.label}
      </span>
    `;
  }

  private handleClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();

    if (!this.disabled && this.onClick) {
      this.onClick();
    }
  }
}
