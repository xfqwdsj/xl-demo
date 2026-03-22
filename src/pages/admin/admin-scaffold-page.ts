import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./admin-shell.ts";
import { type AdminPageId, pageMetaMap } from "./admin-page-meta.ts";

@customElement("admin-scaffold-page")
export class AdminScaffoldPage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: String })
  page: AdminPageId = "dashboard";

  render() {
    const pageMeta = pageMetaMap[this.page] ?? pageMetaMap.dashboard;
    return html`
      <admin-shell
        active-page="${this.page}"
        page-title="${pageMeta.title}"
        page-subtitle="${pageMeta.subtitle}"
        page-icon="${pageMeta.icon}"
      >
        ${this.renderPageBody()}
      </admin-shell>
    `;
  }

  private renderPageBody() {
    const renderers: Partial<Record<AdminPageId, () => unknown>> = {
      dashboard: () => {
        import("./pages/dashboard-page.ts");
        return html`<dashboard-page></dashboard-page>`;
      },
      "invoice-list": () => {
        import("./pages/invoice-list-page.ts");
        return html`<invoice-list-page></invoice-list-page>`;
      },
      "invoice-upload": () => {
        import("./pages/invoice-upload-page.ts");
        return html`<invoice-upload-page></invoice-upload-page>`;
      },
      "auto-accounting": () => {
        import("./pages/auto-accounting-page.ts");
        return html`<auto-accounting-page></auto-accounting-page>`;
      },
      "bank-reconcile": () => {
        import("./pages/bank-reconcile-page.ts");
        return html`<bank-reconcile-page></bank-reconcile-page>`;
      },
      "tax-declare": () => {
        import("./pages/tax-declare-page.ts");
        return html`<tax-declare-page></tax-declare-page>`;
      },
      "financial-reports": () => {
        import("./pages/financial-reports-page.ts");
        return html`<financial-reports-page></financial-reports-page>`;
      },
      "business-analysis": () => {
        import("./pages/business-analysis-page.ts");
        return html`<business-analysis-page></business-analysis-page>`;
      },
      "financial-portrait": () => {
        import("./pages/financial-portrait-page.ts");
        return html`<financial-portrait-page></financial-portrait-page>`;
      },
      financing: () => {
        import("./pages/financing-page.ts");
        return html`<financing-page></financing-page>`;
      },
      "settings-company": () => {
        import("./pages/settings-company-page.ts");
        return html`<settings-company-page></settings-company-page>`;
      },
      "settings-users": () => {
        import("./pages/settings-users-page.ts");
        return html`<settings-users-page></settings-users-page>`;
      },
      "settings-notify": () => {
        import("./pages/settings-notify-page.ts");
        return html`<settings-notify-page></settings-notify-page>`;
      },
      "settings-security": () => {
        import("./pages/settings-security-page.ts");
        return html`<settings-security-page></settings-security-page>`;
      },
    };

    return (renderers[this.page] ?? renderers.dashboard)?.();
  }
}
