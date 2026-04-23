import { customElement, property, query } from "lit/decorators.js";
import {
  css,
  html,
  LitElement,
  type PropertyValues,
  type TemplateResult,
} from "lit";
import {
  autoPlacement,
  autoUpdate,
  computePosition,
  offset,
  shift,
  size,
} from "@floating-ui/dom";

export type PopoverMenuItemContent = string | number | TemplateResult;
export interface PopoverMenuItem {
  id?: string;
  content: PopoverMenuItemContent;
}

@customElement("app-popover-menu")
export class AppPopoverMenu extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      box-sizing: border-box;
    }

    .anchor {
      display: inline-block;
    }

    .menu {
      opacity: 0;
      transform: scale(0.95) translateY(-10px);
      transition:
        opacity 0.1s ease-out,
        transform 0.1s ease-out,
        display 0.1s ease-out allow-discrete,
        overlay 0.1s ease-out allow-discrete;

      margin: 0;
      inset: auto;
      overflow: visible;
      display: none;

      position: fixed;
      width: max-content;
      flex-direction: column;
      background: rgb(var(--white) r g b / 0.8);
      backdrop-filter: blur(32px) saturate(180%);
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-soft);
      padding: 8px;
    }

    .menu:popover-open {
      display: flex;
      opacity: 1;
      transform: scale(1) translateY(0);
    }

    @starting-style {
      .menu:popover-open {
        opacity: 0;
        transform: scale(0.95) translateY(-10px);
      }
    }

    .item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 14px;
      color: var(--text);
      cursor: pointer;
    }

    .item:hover {
      background: var(--bg);
      color: var(--primary);
    }
  `;

  @property({ type: Array })
  items: PopoverMenuItem[] = [];

  @query(".menu")
  _menu?: HTMLElement;

  @query(".anchor")
  _anchor?: HTMLElement;

  private autoUpdateCleanup?: () => void;

  disconnectedCallback() {
    super.disconnectedCallback();
    this.autoUpdateCleanup?.();
  }

  render() {
    return html`
      <div class="anchor">
        <slot></slot>
      </div>
      <div class="menu" popover="auto">
        ${this.items.map(
          (item) => html`
            <div class="item" @click=${() => this.handleItemClick(item)}>
              ${item.content}
            </div>
          `,
        )}
      </div>
    `;
  }

  showMenu() {
    this._menu?.showPopover();
  }

  hideMenu() {
    this._menu?.hidePopover();
  }

  toggleMenu() {
    this._menu?.togglePopover();
  }

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    if (this._anchor && this._menu) {
      this.dispatchEvent(new CustomEvent("menu-ready", { detail: this._menu }));
      this.updatePosition();
      this.autoUpdateCleanup = autoUpdate(
        this._anchor,
        this._menu,
        this.updatePosition.bind(this),
      );
    }
  }

  private handleItemClick(item: PopoverMenuItem) {
    this.hideMenu();
    this.dispatchEvent(new CustomEvent("item-click", { detail: item }));
  }

  private updatePosition() {
    const anchor = this._anchor;
    const menu = this._menu;
    if (!anchor || !menu) return;

    if (!menu.matches(":popover-open")) return;

    computePosition(anchor, menu, {
      placement: "bottom",
      strategy: "fixed",
      middleware: [
        offset(10),
        shift(),
        autoPlacement({ allowedPlacements: ["top", "bottom"] }),
        size({
          apply({ availableWidth, availableHeight, elements }) {
            const s = getComputedStyle(elements.floating);
            const maxWidth =
              parseFloat(s.getPropertyValue("--menu-max-width")) || Infinity;
            const maxHeight =
              parseFloat(s.getPropertyValue("--menu-max-height")) || Infinity;
            Object.assign(elements.floating.style, {
              maxWidth: Math.min(availableWidth, maxWidth) + "px",
              maxHeight: Math.min(availableHeight, maxHeight) + "px",
            });
          },
        }),
      ],
    }).then(({ x, y }) => {
      Object.assign(menu.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }
}
