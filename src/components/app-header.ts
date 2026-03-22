import { customElement, property, state } from "lit/decorators.js";
import { css, html, LitElement } from "lit";
import { buttonStyles } from "./button.ts";

export const headerStyles = css`
  :host {
    display: block;
    background: rgb(from var(--white) r g b / 0.65);
    border-bottom: 1px solid rgb(from var(--border) r g b / 0.5);
    backdrop-filter: blur(32px) saturate(180%);
    position: sticky;
    top: 0;
    z-index: 1000;
  }
`;

@customElement("app-header")
export class AppHeader extends LitElement {
  static styles = css`
    ${buttonStyles}
    ${headerStyles}
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      height: 64px;
      position: relative;
    }

    .logo {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.02em;
      color: var(--primary);
      text-decoration: none;
      display: flex;
      align-items: center;
    }

    .logo img {
      height: 32px;
      margin-right: 8px;
    }

    .nav {
      display: flex;
      gap: 32px;
    }

    .nav a {
      color: var(--text);
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      transition:
        color 0.2s ease,
        opacity 0.2s ease;
      position: relative;
      padding: 4px 0;
    }

    .nav a:hover {
      color: var(--primary);
      opacity: 0.9;
    }

    .nav a.active {
      color: var(--primary);
      font-weight: 600;
    }

    .nav a.active::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: var(--primary);
      border-radius: 1px;
    }

    .actions {
      display: flex;
      gap: 16px;
      align-items: center;
    }

    @media (max-width: 1024px) {
      .header {
        padding: 0 20px;
      }

      .nav {
        gap: 24px;
      }
    }

    @media (max-width: 768px) {
      .header {
        padding: 8px 16px;
        min-height: 56px;
        height: auto;
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto auto;
        align-items: center;
        column-gap: 8px;
        row-gap: 0;
      }

      .header.mobile-open {
        row-gap: 8px;
      }

      .logo {
        font-size: 18px;
        grid-column: 1;
        grid-row: 1;
        min-width: 0;
        align-self: center;
        line-height: 1;
      }

      .logo img {
        height: 28px;
      }

      .actions {
        margin-left: 0;
        gap: 10px;
        grid-column: 2;
        grid-row: 1;
        align-items: center;
        justify-self: end;
        align-self: center;
      }

      .actions a {
        font-size: 13px;
        padding: 6px 12px;
        line-height: 1;
      }

      .menu-toggle {
        width: 36px;
        height: 36px;
        padding: 0;
      }
    }

    @media (max-width: 480px) {
      .header {
        padding: 8px 12px;
      }

      .logo {
        font-size: 16px;
      }

      .logo img {
        height: 24px;
        margin-right: 6px;
      }

      .actions {
        gap: 8px;
      }

      .actions a {
        font-size: 12px;
        padding: 5px 10px;
        min-width: 60px;
        text-align: center;
      }
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      padding: 8px;
      cursor: pointer;
      color: var(--text);
      font-size: 20px;
    }

    @media (max-width: 768px) {
      .header {
        padding: 0 16px;
        height: auto;
        min-height: 64px;
        display: grid;
        grid-template-columns: 1fr auto auto;
        align-items: center;
        column-gap: 12px;
        transition: padding 0.3s ease;
      }

      .logo,
      .actions,
      .menu-toggle {
        grid-row: 1;
        height: 64px;
        display: flex;
        align-items: center;
        margin: 0;
      }

      .nav-container {
        grid-column: 1 / -1;
        grid-row: 2;
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
      }

      .nav-container.open {
        grid-template-rows: 1fr;
      }

      .nav {
        min-height: 0;
        display: flex;
        flex-direction: column;
        padding: 0 4px;
        gap: 0;
        opacity: 0;
        transform: translateY(-20px);
        transition:
          opacity 0.2s ease,
          transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .nav-container.open .nav {
        opacity: 1;
        transform: translateY(0);
        padding-top: 12px;
        padding-bottom: 24px;
        border-top: 1px solid rgb(from var(--border) r g b / 0.3);
        transition:
          opacity 0.3s ease 0.1s,
          transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .nav a {
        padding: 14px 0;
        border-bottom: 1px solid rgb(from var(--border) r g b / 0.1);
        font-size: 15px;
        display: block;
        width: 100%;
        transition:
          color 0.2s ease,
          opacity 0.2s ease;
      }

      .nav a:last-child {
        border-bottom: none;
      }

      .actions {
        grid-column: 2;
        gap: 8px;
        justify-content: flex-end;
      }

      .menu-toggle {
        grid-column: 3;
        background: transparent;
        border-radius: 8px;
        width: 40px;
        justify-content: center;
        font-size: 22px;
      }
    }
  `;

  @property({ type: String })
  logoText = "票据小灵";

  @property({ type: Array })
  items: MenuItem[] = [
    { label: "产品功能", link: "product.html" },
    { label: "解决方案", link: "solution.html" },
    { label: "定价方案", link: "pricing.html" },
    { label: "客户案例", link: "cases.html" },
    { label: "关于我们", link: "about.html" },
  ];

  @state()
  private currentPath = "";

  @state()
  private mobileMenuOpen = false;

  connectedCallback() {
    super.connectedCallback();
    this.detectCurrentPage();
  }

  render() {
    const navClass = this.mobileMenuOpen ? "nav mobile-open" : "nav";
    const headerClass = this.mobileMenuOpen ? "header mobile-open" : "header";

    return html`
      <header class="${headerClass}">
        <a href="/index.html" class="logo">
          <img
            src="/icon.svg"
            alt="票据小灵"
            @error=${(e: Event) =>
              ((e.target as HTMLImageElement).style.display = "none")}
          />
          ${this.logoText}
        </a>

        <button
          class="menu-toggle"
          @click=${this.toggleMobileMenu}
          aria-controls="app-header-nav"
          aria-expanded="${this.mobileMenuOpen ? "true" : "false"}"
          aria-label="${this.mobileMenuOpen ? "关闭菜单" : "打开菜单"}"
        >
          <iconify-icon
            icon="${this.mobileMenuOpen ? "fa7-solid:xmark" : "fa7-solid:bars"}"
          ></iconify-icon>
        </button>

        <div class="nav-container ${this.mobileMenuOpen ? "open" : ""}">
          <nav id="app-header-nav" class="${navClass}">
            ${this.items.map(
              (item) => html`
                <a
                  href="${item.link}"
                  class="${this.isActive(item.link) ? "active" : ""}"
                  @click=${() => this.closeMobileMenu()}
                  >${item.label}</a
                >
              `,
            )}
          </nav>
        </div>

        <div class="actions">
          <a href="/login.html" class="btn btn-outline">登录</a>
          <a href="/register.html" class="btn btn-primary btn-shadow"
            >免费试用</a
          >
        </div>
      </header>
    `;
  }

  private detectCurrentPage() {
    const path = window.location.pathname;
    this.currentPath = path.split("/").pop() || "";
  }

  private isActive(link: string): boolean {
    const path = this.currentPath.trim();
    if (!path) return false;

    return path === link;
  }

  private toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  private closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}

interface MenuItem {
  label: string;
  link: string;
}
