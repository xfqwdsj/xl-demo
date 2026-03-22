import { css } from "lit";

export const interactiveStyles = css`
  .inline-action {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: color-mix(in srgb, var(--text) 18%, black);
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
  }

  .inline-action:hover {
    color: var(--primary);
  }

  .page-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    height: 32px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--white);
    color: var(--text);
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .page-btn:hover {
    border-color: var(--primary);
    color: var(--primary);
  }

  .page-btn.active {
    background: var(--primary);
    border-color: var(--primary);
    color: var(--white);
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;
