import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("admin-placeholder")
export class AdminPlaceholder extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: color-mix(in srgb, var(--border) 15%, var(--white));
      border: 2px dashed rgb(from var(--border) r g b / 0.4);
      border-radius: 8px;
      color: color-mix(in srgb, var(--text) 60%, white);
      font-size: 14px;
      line-height: 1.5;
      padding: 24px 16px;
      box-sizing: border-box;
      transition: all 0.2s ease;
    }

    .placeholder:hover {
      background: color-mix(in srgb, var(--border) 20%, var(--white));
      border-color: rgb(from var(--border) r g b / 0.6);
    }

    .placeholder-sm {
      min-height: 120px;
    }

    .placeholder-md {
      min-height: 280px;
    }

    .placeholder-lg {
      min-height: 340px;
    }

    .placeholder-drag {
      cursor: pointer;
    }

    .placeholder-drag:hover {
      background: color-mix(in srgb, var(--primary) 8%, var(--white));
      border-color: rgb(from var(--primary) r g b / 0.4);
      color: var(--primary);
    }
  `;

  @property({ type: String })
  size: "sm" | "md" | "lg" = "md";

  @property({ type: String })
  text = "";

  @property({ type: Boolean })
  draggable = false;

  @property({ type: Function })
  onClick?: () => void;

  render() {
    const classes = `placeholder placeholder-${this.size} ${
      this.draggable ? "placeholder-drag" : ""
    }`;

    return html`
      <div
        class="${classes}"
        @click=${this.handleClick}
        @dragover=${this.handleDragOver}
        @drop=${this.handleDrop}
      >
        ${this.text}
      </div>
    `;
  }

  private handleClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();

    if (this.onClick && this.draggable) {
      this.onClick();
    }
  }

  private handleDragOver(e: DragEvent) {
    if (this.draggable) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  private handleDrop(e: DragEvent) {
    if (this.draggable) {
      e.preventDefault();
      e.stopPropagation();

      if (this.onClick) {
        this.onClick();
      }
    }
  }
}
