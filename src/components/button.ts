import { css } from "lit";

export const buttonStyles = css`
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 20px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    border: 1px solid transparent;
    background: transparent;

    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    user-select: none;
    outline: none;
  }

  .btn-elevate:hover {
    transform: translateY(-1px);
  }

  .btn-elevate:active {
    transform: translateY(1px);
    filter: brightness(0.9);
  }

  .btn-outline {
    border: 1px solid var(--border);
    color: var(--text);
  }

  .btn-outline.btn-shadow {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  .btn-outline:hover {
    background: var(--bg);
    border-color: var(--primary);
    color: var(--primary);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .btn-primary {
    background: var(--primary);
    color: var(--white);
    border: 1px solid var(--primary);
  }

  .btn-primary.btn-shadow {
    box-shadow: 0 4px 18px color-mix(in srgb, var(--primary) 15%, transparent);
  }

  .btn-primary:hover {
    background: var(--primary-strong);
    border-color: var(--primary-strong);
    box-shadow: 0 4px 12px color-mix(in srgb, var(--primary) 30%, transparent);
    filter: brightness(1.05);
  }

  .btn-primary:active {
    background: var(--primary-deep);
    border-color: var(--primary-deep);
  }

  .btn:focus-visible {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 40%, transparent);
  }
`;
