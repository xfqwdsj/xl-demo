import { css } from "lit";

export const typographyStyles = css`
  .label {
    font-size: 12px;
    color: color-mix(in srgb, var(--text) 70%, white);
  }

  .value {
    font-size: 18px;
    font-weight: 700;
    color: var(--text);
  }

  .value-lg {
    font-size: 24px;
    font-weight: 700;
    color: var(--text);
  }

  .value-xxl {
    font-size: 48px;
    font-weight: 700;
    color: var(--text);
  }

  .text-label {
    font-size: 13px;
    color: color-mix(in srgb, var(--text) 70%, white);
  }

  .text-title-sm {
    font-size: 14px;
    font-weight: 600;
    color: var(--text);
  }

  .text-title-md {
    font-size: 16px;
    font-weight: 600;
    color: var(--text);
  }

  .muted {
    font-size: 13px;
    color: color-mix(in srgb, var(--text) 60%, white);
  }

  .composition-note {
    font-size: 12px;
    color: color-mix(in srgb, var(--text) 68%, white);
    line-height: 1.5;
  }

  app-card strong {
    display: block;
    font-size: 16px;
    font-weight: 600;
    color: color-mix(in srgb, var(--text) 30%, black);
  }

  p {
    margin: 0;
  }

  app-card > p:last-of-type {
    margin-bottom: 0;
  }
`;
