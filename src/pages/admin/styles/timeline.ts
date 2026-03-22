import { css } from "lit";

export const timelineStyles = css`
  .timeline {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 10px;
  }

  .timeline li {
    font-size: 13px;
    color: var(--text);
    display: flex;
    gap: 10px;
    align-items: flex-start;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-top: 6px;
    background: var(--primary);
    flex-shrink: 0;
  }
`;
