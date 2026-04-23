import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { headerStyles } from "../../components/app-header.ts";

@customElement("admin-header")
export class AdminHeader extends LitElement {
  static styles = css`
    ${headerStyles}

    :host {
      display: block;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
      padding: 0 24px;
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: var(--primary);
      font-size: 18px;
      font-weight: 700;
      text-decoration: none;
    }

    .brand-logo {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }

    .top-actions {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      color: var(--text);
    }

    .action {
      width: 32px;
      height: 32px;
      border: 1px solid rgb(from var(--border) r g b / 0.5);
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: rgb(from var(--white) r g b / 0.8);
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .action:hover {
      background: rgb(from var(--white) r g b / 0.9);
      border-color: rgb(from var(--border) r g b / 0.7);
      transform: translateY(-1px);
    }

    .profile {
      border-radius: 16px;
      background: color-mix(in srgb, var(--white) 70%, var(--bg));
      border: 1px solid rgb(from var(--border) r g b / 0.5);
      padding: 6px 12px;
      font-size: 13px;
      color: var(--text);
    }

    .menu-toggle {
      display: none;
      width: 36px;
      height: 36px;
      border: none;
      border-radius: 8px;
      background: transparent;
      color: var(--text);
      font-size: 20px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    @media (max-width: 768px) {
      .header-content {
        padding: 0 12px;
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        column-gap: 4px;
      }

      .menu-toggle {
        display: flex;
      }

      .brand {
        font-size: 16px;
        min-width: 0;
      }

      .brand-logo {
        width: 24px;
        height: 24px;
      }

      .top-actions {
        gap: 8px;
      }

      .action {
        width: 28px;
        height: 28px;
      }

      .profile {
        padding: 4px 8px;
        font-size: 12px;
      }
    }
  `;

  @property({ type: Boolean, attribute: "show-menu-toggle" })
  showMenuToggle = false;

  @property({ type: Boolean, attribute: "menu-open" })
  menuOpen = false;

  render() {
    return html`
      <header class="header-content">
        ${this.showMenuToggle
          ? html`
              <button
                class="menu-toggle"
                @click=${() =>
                  this.dispatchEvent(new CustomEvent("toggle-sidebar"))}
                aria-label="${this.menuOpen ? "关闭菜单" : "打开菜单"}"
              >
                <iconify-icon
                  icon="${this.menuOpen ? "fa7-solid:xmark" : "fa7-solid:bars"}"
                ></iconify-icon>
              </button>
            `
          : null}
        <a class="brand" href="/dashboard.html">
          <img
            class="brand-logo"
            src="/icon.svg"
            alt="票据小灵"
            @error=${(e: Event) =>
              ((e.target as HTMLImageElement).style.display = "none")}
          />
          票据小灵
        </a>
        <div class="top-actions">
          <button class="action" type="button" aria-label="消息">
            <iconify-icon icon="fa7-solid:bell"></iconify-icon>
          </button>
          <button class="action" type="button" aria-label="帮助">
            <iconify-icon icon="fa7-solid:circle-question"></iconify-icon>
          </button>
          <div class="profile">张会计</div>
        </div>
      </header>
    `;
  }
}
