import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@customElement("admin-select")
export class AdminSelect extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .select {
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
      appearance: none;
    }

    .select:hover {
      border-color: rgb(from var(--border) r g b / 1);
      background: var(--white);
    }

    .select:focus {
      outline: none;
      border-color: rgb(from var(--primary) r g b / 0.8);
      box-shadow: 0 0 0 2px rgb(from var(--primary) r g b / 0.1);
    }

    .select:disabled {
      background: color-mix(in srgb, var(--border) 15%, var(--white));
      color: color-mix(in srgb, var(--text) 40%, white);
      cursor: not-allowed;
    }

    .select-error {
      border-color: rgb(from var(--error) r g b / 0.8);
    }

    .select-error:focus {
      border-color: rgb(from var(--error) r g b / 0.8);
      box-shadow: 0 0 0 2px rgb(from var(--error) r g b / 0.1);
    }

    .select-success {
      border-color: rgb(from var(--success) r g b / 0.8);
    }

    .select-success:focus {
      border-color: rgb(from var(--success) r g b / 0.8);
      box-shadow: 0 0 0 2px rgb(from var(--success) r g b / 0.1);
    }
  `;

  @property({ type: String })
  value = "";

  @property({ type: Array })
  options: SelectOption[] = [];

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  required = false;

  @property({ type: String })
  status: "normal" | "error" | "success" = "normal";

  @property({ type: Function })
  onChange?: (value: string) => void;

  render() {
    const classes = `select ${this.status !== "normal" ? `select-${this.status}` : ""}`;

    return html`
      <select
        class="${classes}"
        .value="${this.value}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        @change="${this.handleChange}"
      >
        ${this.options.map(
          (option) => html`
            <option value="${option.value}" ?disabled="${option.disabled}">
              ${option.label}
            </option>
          `,
        )}
      </select>
    `;
  }

  private handleChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    if (this.onChange) {
      this.onChange(select.value);
    }
  }
}
