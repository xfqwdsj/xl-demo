import { css } from "lit";
import { getUnsafeCSS } from "./unsafe-util.ts";

export type AppSpacing =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl";

export const spacingValues: Record<AppSpacing, string> = {
  xxs: "2px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  xxl: "24px",
  xxxl: "32px",
};

export const spacingStyles = css`
  ${Object.entries(spacingValues)
    .map(([key, value]) => {
      const cssKey = getUnsafeCSS(key);
      const variableName = css`--spacing-${cssKey}`;
      return css`
        :host {
          ${variableName}: ${getUnsafeCSS(value)};
        }
      `;
    })
    .reduce(
      (acc, style) => css`
        ${acc} ${style}
      `,
    )}
`;

export const gapStyles = css`
  ${Object.keys(spacingValues)
    .map((key) => {
      const cssKey = getUnsafeCSS(key);
      const variableName = css`--spacing-${cssKey}`;
      return css`
        .gap-${cssKey} {
          gap: var(${variableName});
        }
      `;
    })
    .reduce(
      (acc, style) => css`
        ${acc} ${style}
      `,
    )}
`;
