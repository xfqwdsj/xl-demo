import "../css/introduction-page.css";
import { css } from "lit";

export const introductionPageStyles = css`
  :host {
    display: block;
    background: var(--background-color);
    color: var(--foreground-color);
  }

  .page-container {
    padding: var(--page-padding-top) 0 var(--page-padding-bottom);
  }

  .section-container {
    max-width: var(--section-max-width);
    margin: var(--section-margin);
    padding: 0 var(--section-padding-horizontal);
  }

  .section-stack {
    display: grid;
    gap: 24px;
  }

  .section-stack--lg {
    gap: 32px;
  }

  .surface-card {
    background: var(--surface-card);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-soft);
  }
`;
