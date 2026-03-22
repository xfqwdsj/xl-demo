import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("admin-input")
export class AdminInput extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .input {
      width: 100%;
      min-height: 34px;
      border: 1px solid rgb(from var(--border) r g b / 0.8);
      border-radius: 6px;
      background: rgb(from var(--white) r g b / 0.95);
      color: var(--text);
      padding: 0 10px;
      font-size: 13px;
      box-sizing: border-box;
      transition: all 0.2s ease;
    }

    .input:hover {
      border-color: rgb(from var(--border) r g b / 1);
      background: var(--white);
    }

    .input:focus {
      outline: none;
      border-color: rgb(from var(--primary) r g b / 0.8);
      box-shadow: 0 0 0 2px rgb(from var(--primary) r g b / 0.1);
    }

    .input:disabled {
      background: color-mix(in srgb, var(--border) 15%, var(--white));
      color: color-mix(in srgb, var(--text) 40%, white);
      cursor: not-allowed;
    }

    .input-error {
      border-color: rgb(from var(--error) r g b / 0.8);
    }

    .input-error:focus {
      border-color: rgb(from var(--error) r g b / 0.8);
      box-shadow: 0 0 0 2px rgb(from var(--error) r g b / 0.1);
    }

    .input-success {
      border-color: rgb(from var(--success) r g b / 0.8);
    }

    .input-success:focus {
      border-color: rgb(from var(--success) r g b / 0.8);
      box-shadow: 0 0 0 2px rgb(from var(--success) r g b / 0.1);
    }
  `;

  @property({ type: String })
  value = "";

  @property({ type: String })
  placeholder = "";

  @property({ type: String })
  type: "text" | "password" | "email" | "number" = "text";

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  required = false;

  @property({ type: String })
  status: "normal" | "error" | "success" = "normal";

  @property({ type: Function })
  onChange?: (value: string) => void;

  @property({ type: Function })
  onInput?: (value: string) => void;

  render() {
    const classes = `input ${this.status !== "normal" ? `input-${this.status}` : ""}`;

    return html`
      <input
        class="${classes}"
        type="${this.type}"
        .value="${this.value}"
        placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        @input="${this.handleInput}"
        @change="${this.handleChange}"
      />
    `;
  }

  private handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    if (this.onInput) {
      this.onInput(input.value);
    }
  }

  private handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (this.onChange) {
      this.onChange(input.value);
    }
  }
}
