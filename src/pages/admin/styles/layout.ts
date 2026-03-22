import { css } from "lit";

export const layoutStyles = css`
  .section-stack {
    display: grid;
    gap: 20px;
  }

  .header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .toolbar {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .field {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .field > label {
    font-size: 13px;
    color: color-mix(in srgb, var(--text) 70%, white);
    line-height: 1.4;
  }

  .push-bottom {
    margin-top: auto;
  }

  .text-center {
    text-align: center;
  }

  .py-12 {
    padding-block: 12px;
  }
`;
