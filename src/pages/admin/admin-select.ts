import { css, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { buttonStyles } from "../../components/button.ts";
import "../../components/app-popover-menu.ts";
import type { AppPopoverMenu } from "../../components/app-popover-menu.ts";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@customElement("admin-select")
export class AdminSelect extends LitElement {
  static styles = css`
    ${buttonStyles}
    :host {
      display: inline-block;
    }
  `;

  @property({ type: String })
  value = "";

  @property({ type: Array })
  options: SelectOption[] = [];

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Function })
  onChange?: (value: string) => void;

  @query("app-popover-menu")
  _popover?: AppPopoverMenu;

  render() {
    return html`
      <app-popover-menu
        .items=${this.options.map((o) => ({ id: o.value, content: o.label }))}
        @item-click=${this.handleChange}
      >
        <button
          class="btn btn-outline"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleClick}
        >
          ${this.value}
        </button>
      </app-popover-menu>
    `;
  }

  private handleClick(e: MouseEvent) {
    e.stopPropagation();
    this._popover?.toggleMenu();
  }

  private handleChange(e: CustomEvent) {
    const selectedValue = e.detail.id;
    this.value = selectedValue ?? this.value;
    this.onChange?.(this.value);
    this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
  }
}
