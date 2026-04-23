import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./admin-header.ts";

interface AdminMenuItem {
  key: string;
  label: string;
  href: string;
  icon: string;
  children?: AdminMenuItem[];
}

const menuItems: AdminMenuItem[] = [
  {
    key: "dashboard",
    label: "控制台首页",
    href: "/dashboard.html",
    icon: "fa7-solid:gauge",
  },
  {
    key: "invoice-list",
    label: "票据管理",
    href: "/invoice-list.html",
    icon: "fa7-solid:file-invoice",
  },
  {
    key: "auto-accounting",
    label: "智能记账",
    href: "/auto-accounting.html",
    icon: "fa7-solid:book",
  },
  {
    key: "bank-reconcile",
    label: "银行对账",
    href: "/bank-reconcile.html",
    icon: "fa7-solid:building-columns",
  },
  {
    key: "tax-declare",
    label: "纳税申报",
    href: "/tax-declare.html",
    icon: "fa7-solid:receipt",
  },
  {
    key: "financial-reports",
    label: "财务报表",
    href: "/financial-reports.html",
    icon: "fa7-solid:chart-line",
  },
  {
    key: "business-analysis",
    label: "经营分析",
    href: "/business-analysis.html",
    icon: "fa7-solid:chart-pie",
  },
  {
    key: "financial-portrait",
    label: "财务画像",
    href: "/financial-portrait.html",
    icon: "fa7-solid:user",
  },
  {
    key: "financing",
    label: "融资服务",
    href: "/financing.html",
    icon: "fa7-solid:hand-holding-dollar",
  },
  {
    key: "settings",
    label: "系统设置",
    href: "#",
    icon: "fa7-solid:gear",
    children: [
      {
        key: "settings-company",
        label: "企业信息",
        href: "/settings-company.html",
        icon: "fa7-solid:building",
      },
      {
        key: "settings-users",
        label: "用户管理",
        href: "/settings-users.html",
        icon: "fa7-solid:users",
      },
      {
        key: "settings-security",
        label: "安全设置",
        href: "/settings-security.html",
        icon: "fa7-solid:shield",
      },
      {
        key: "settings-notify",
        label: "通知设置",
        href: "/settings-notify.html",
        icon: "fa7-solid:bell",
      },
    ],
  },
];

@customElement("admin-shell")
export class AdminShell extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-width: 0;
      min-height: 100dvh;
      background:
        radial-gradient(
          1200px 400px at 20% -10%,
          color-mix(in srgb, var(--primary) 10%, transparent),
          transparent
        ),
        var(--bg);
      color: var(--text);
    }

    p {
      margin: 0;
    }

    admin-header {
      position: fixed;
      inset: 0 0 auto 0;
      z-index: 30;
    }

    .sidebar {
      position: fixed;
      top: 64px;
      left: 0;
      bottom: 0;
      width: 236px;
      background: rgb(from var(--white) r g b / 0.72);
      backdrop-filter: blur(20px) saturate(180%);
      border-right: 1px solid var(--border);
      padding: 14px 12px;
      box-sizing: border-box;
      overflow-y: auto;
      overscroll-behavior: contain;
    }

    .menu {
      display: grid;
      gap: 4px;
    }

    .menu-link {
      display: inline-flex;
      width: 100%;
      box-sizing: border-box;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      border-radius: 8px;
      color: var(--text);
      text-decoration: none;
      font-size: 14px;
      transition:
        background-color 0.2s ease,
        color 0.2s ease;
      white-space: nowrap;
    }

    .menu-label {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .menu-link:hover {
      background: color-mix(in srgb, var(--primary) 14%, var(--white));
      color: var(--primary);
    }

    .menu-link.active {
      background: var(--primary);
      color: var(--white);
      font-weight: 600;
    }

    .menu-item-with-children {
      position: relative;
    }

    .menu-item-with-children .menu-link {
      position: relative;
      padding-right: 36px;
    }

    .menu-arrow {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      transition: transform 0.2s ease;
      color: color-mix(in srgb, var(--text) 60%, white);
    }

    .menu-item-with-children.active .menu-arrow {
      transform: translateY(-50%) rotate(90deg);
    }

    .menu-item-with-children.active .menu-link.active .menu-arrow {
      color: var(--white);
    }

    .menu-item-with-children.active .menu-link:not(.active) .menu-arrow {
      color: var(--primary);
    }

    .submenu {
      margin: 4px 0 4px 12px;
      padding-left: 12px;
      border-left: 1px solid var(--border);
      display: grid;
      gap: 2px;
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.3s ease;
    }

    .menu-item-with-children.active .submenu {
      max-height: 500px;
    }

    .submenu-link {
      display: inline-flex;
      width: 100%;
      box-sizing: border-box;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: 6px;
      color: color-mix(in srgb, var(--text) 80%, white);
      text-decoration: none;
      font-size: 13px;
      transition:
        background-color 0.2s ease,
        color 0.2s ease;
      white-space: nowrap;
    }

    .submenu-link:hover {
      background: color-mix(in srgb, var(--primary) 10%, var(--white));
      color: var(--primary);
    }

    .submenu-link.active {
      background: color-mix(in srgb, var(--primary) 20%, var(--white));
      color: var(--primary);
      font-weight: 500;
    }

    .main {
      margin-top: 64px;
      margin-left: calc(236px + 20px);
      padding: 28px 28px 32px;
      min-height: calc(100dvh - 64px);
    }

    .page-head {
      margin-bottom: 30px;
    }

    .page-title {
      font-size: 26px;
      color: color-mix(in srgb, var(--text) 36%, black);
      line-height: 1.2;
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }

    .page-title-icon {
      color: var(--primary);
      font-size: 22px;
    }

    .page-subtitle {
      color: color-mix(in srgb, var(--text) 72%, white);
      font-size: 14px;
    }

    @media (max-width: 1280px) {
      .main {
        padding: 20px;
      }
    }

    .sidebar-overlay {
      display: none;
      position: fixed;
      top: 64px;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.2);
      z-index: 22;
    }

    .sidebar-overlay.open {
      display: block;
    }

    @media (max-width: 768px) {
      .sidebar {
        transform: translateX(-100%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 25;
      }

      .sidebar.open {
        transform: translateX(0);
      }

      .main {
        margin-left: 0;
        padding: 16px;
        padding-top: 72px;
      }
    }
  `;

  @property({ type: String, attribute: "active-page" })
  activePage = "dashboard";

  @property({ type: String, attribute: "page-title" })
  pageTitle = "";

  @property({ type: String, attribute: "page-subtitle" })
  pageSubtitle = "";

  @property({ type: String, attribute: "page-icon" })
  pageIcon = "fa7-solid:table-cells-large";

  @property({ type: Array })
  private expandedMenus: string[] = [];

  @state()
  private sidebarOpen = false;

  render() {
    return html`
      <admin-header
        show-menu-toggle
        ?menu-open=${this.sidebarOpen}
        @toggle-sidebar=${this.toggleSidebar}
      ></admin-header>

      <div
        class="sidebar-overlay ${this.sidebarOpen ? "open" : ""}"
        @click=${this.closeSidebar}
      ></div>

      <aside class="sidebar ${this.sidebarOpen ? "open" : ""}" aria-label="后台菜单">
        <nav class="menu">
          ${menuItems.map((item) => this.renderMenuItem(item))}
        </nav>
      </aside>

      <main class="main">
        <div class="page-head">
          <h1 class="page-title">
            <iconify-icon
              class="page-title-icon"
              icon="${this.pageIcon}"
            ></iconify-icon>
            ${this.pageTitle}
          </h1>
          ${this.pageSubtitle
            ? html`<p class="page-subtitle">${this.pageSubtitle}</p>`
            : null}
        </div>
        <slot></slot>
      </main>
    `;
  }

  private toggleMenu(key: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();

    if (this.expandedMenus.includes(key)) {
      this.expandedMenus = this.expandedMenus.filter((k) => k !== key);
    } else {
      this.expandedMenus = [...this.expandedMenus, key];
    }
    this.requestUpdate();
  }

  private toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  private closeSidebar() {
    this.sidebarOpen = false;
  }

  private isMenuExpanded(key: string): boolean {
    const menuItem = menuItems.find((item) => item.key === key);
    if (menuItem?.children) {
      const hasActiveChild = menuItem.children.some(
        (child) => this.activePage === child.key,
      );
      if (hasActiveChild) {
        return true;
      }
    }
    return this.expandedMenus.includes(key);
  }

  private isMenuItemActive(menuItem: AdminMenuItem): boolean {
    if (this.activePage === menuItem.key) {
      return true;
    }

    if (menuItem.children) {
      return menuItem.children.some((child) => this.activePage === child.key);
    }

    return false;
  }

  private renderMenuItem(item: AdminMenuItem) {
    if (item.children && item.children.length > 0) {
      const isExpanded = this.isMenuExpanded(item.key);
      const isActive = this.isMenuItemActive(item);

      return html`
        <div class="menu-item-with-children ${isExpanded ? "active" : ""}">
          <a
            class="menu-link ${isActive ? "active" : ""}"
            href="${item.href}"
            @click=${(e: Event) => this.toggleMenu(item.key, e)}
          >
            <iconify-icon icon="${item.icon}"></iconify-icon>
            <span class="menu-label">${item.label}</span>
            <iconify-icon
              class="menu-arrow"
              icon="fa7-solid:chevron-right"
            ></iconify-icon>
          </a>
          <div class="submenu">
            ${item.children.map(
              (child) => html`
                <a
                  class="submenu-link ${this.activePage === child.key
                    ? "active"
                    : ""}"
                  href="${child.href}"
                  @click=${() => this.closeSidebar()}
                >
                  <iconify-icon icon="${child.icon}"></iconify-icon>
                  <span class="menu-label">${child.label}</span>
                </a>
              `,
            )}
          </div>
        </div>
      `;
    } else {
      return html`
        <a
          class="menu-link ${this.activePage === item.key ? "active" : ""}"
          href="${item.href}"
          @click=${() => this.closeSidebar()}
        >
          <iconify-icon icon="${item.icon}"></iconify-icon>
          <span class="menu-label">${item.label}</span>
        </a>
      `;
    }
  }
}
