import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { EChartsOption } from "echarts/types/dist/shared";

type EchartsCore = typeof import("echarts/core");

@customElement("app-echarts")
export class AppEcharts extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      min-height: 200px;
    }

    .echarts-container {
      width: 100%;
      height: 100%;
      min-height: inherit;
    }
  `;

  @property({ type: Object })
  option: EChartsOption = {};

  @property({ type: Boolean })
  loading = false;

  @property({ attribute: false })
  echarts: EchartsCore | null = null;

  private chart: ReturnType<EchartsCore["init"]> | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private chartInitialized = false;

  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      this.initChart();
      this.initResizeObserver();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
    this.chart?.dispose();
    this.chart = null;
    this.chartInitialized = false;
  }

  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);

    if (changedProperties.has("echarts")) {
      this.recreateChart();
    }

    if (
      changedProperties.has("option") &&
      this.chart &&
      this.chartInitialized
    ) {
      this.chart.setOption(this.option, { notMerge: true });
    }

    if (changedProperties.has("loading")) {
      if (this.loading) {
        this.chart?.showLoading();
      } else {
        this.chart?.hideLoading();
      }
    }
  }

  render() {
    return html`<div class="echarts-container"></div>`;
  }

  private initChart() {
    const container = this.shadowRoot?.querySelector(".echarts-container");
    if (!container || !this.echarts || this.chartInitialized) return;

    this.chart = this.echarts.init(container as HTMLElement);
    this.chartInitialized = true;

    if (this.option && Object.keys(this.option).length > 0) {
      this.chart.setOption(this.option);
    }

    if (this.loading) {
      this.chart.showLoading();
    }
  }

  private initResizeObserver() {
    const container = this.shadowRoot?.querySelector(".echarts-container");
    if (!container || this.resizeObserver) return;

    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          this.chart?.resize();
        }
      }
    });

    this.resizeObserver.observe(container);
  }

  private recreateChart() {
    this.chart?.dispose();
    this.chart = null;
    this.chartInitialized = false;
    this.initChart();
  }
}
