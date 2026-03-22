import { css, LitElement } from "lit";
import { spacingStyles } from "../../../components/spacing.ts";
import { buttonStyles } from "../../../components/button.ts";

export class AdminPageBase extends LitElement {
  static styles = css`
    ${spacingStyles}
    ${buttonStyles}
    :host {
      display: block;

      --spacing-card-inner: var(--spacing-md);
      --spacing-section: var(--spacing-lg);
      --spacing-component: var(--spacing-sm);
      --spacing-text: var(--spacing-xs);
      --spacing-grid: var(--spacing-lg);

      --app-card-gap: var(--spacing-md);
    }
  `;

  protected handleMockAction(label: string) {
    window.alert(`${label}功能开发中`);
  }

  protected handleBatchAction(value: string) {
    window.alert(`批量操作: ${value}`);
  }

  protected handleSearch(value: string) {
    window.alert(`搜索: ${value}`);
  }

  protected handleDateRangeChange(value: string) {
    window.alert(`日期范围: ${value}`);
  }

  protected handleStatusChange(value: string) {
    window.alert(`状态: ${value}`);
  }

  protected handleSubjectFilter(value: string) {
    window.alert(`科目筛选: ${value}`);
  }

  protected handleReportTypeChange(type: string) {
    window.alert(`报表类型: ${type}`);
  }

  protected handleReportDateChange(value: string) {
    window.alert(`报表日期: ${value}`);
  }

  protected handleAnalysisTypeChange(type: string) {
    window.alert(`分析类型: ${type}`);
  }

  protected handleCompanyChange(field: string, value: string) {
    window.alert(`公司信息 ${field}: ${value}`);
  }
}
