import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { TableCell } from "./table-types.ts";

@customElement("app-table")
export class AppTable extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-width: 0;
      max-width: 100%;
    }

    .table-wrap {
      min-width: 0;
      max-width: 100%;
      overflow-x: auto;
      overscroll-behavior-x: contain;
      border-radius: 12px;
      border: 1px solid color-mix(in srgb, var(--border) 72%, white);
      background: var(--white);
    }

    .table-wrap.shadow {
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
    }

    table {
      width: max-content;
      min-width: 100%;
      border-collapse: collapse;
      font-size: 14px;
    }

    th,
    td {
      text-align: left;
      padding: 14px 16px;
      border-bottom: 1px solid color-mix(in srgb, var(--border) 64%, white);
      vertical-align: middle;
      line-height: 1.5;
      color: var(--text);
      white-space: nowrap;
    }

    th {
      background: color-mix(in srgb, var(--bg) 56%, var(--white));
      color: color-mix(in srgb, var(--text) 34%, black);
      font-weight: 600;
      font-size: 15px;
    }

    tbody tr:hover {
      background: color-mix(in srgb, var(--bg) 65%, var(--white));
    }

    tbody tr:last-child td {
      border-bottom: none;
    }
  `;

  @property({ type: Array })
  headers: string[] = [];

  @property({ type: Array })
  rows: TableCell[][] = [];

  @property({ type: String, attribute: "aria-label" })
  ariaLabel = "数据表格";

  @property({ type: Boolean, reflect: true })
  shadow = false;

  render() {
    return html`
      <div class="table-wrap ${this.shadow ? "shadow" : ""}">
        <table
          aria-label="${this.ariaLabel}"
        >
          <thead>
            <tr>
              ${this.headers.map((header) => html`<th>${header}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.rows.map(
              (row) => html`
                <tr>
                  ${row.map((cell) => html`<td>${cell}</td>`)}
                </tr>
              `,
            )}
          </tbody>
        </table>
      </div>
    `;
  }
}
