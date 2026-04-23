import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import type { FeatureCheckItem } from "../../components/feature-check-list.ts";
import "../../components/app-card.ts";
import "../../components/app-table.ts";
import "../../components/breadcrumb.ts";
import "../../components/feature-check-list.ts";
import "../../components/page-hero.ts";
import "../../components/section-cta.ts";
import "../../components/section-heading.ts";
import "../../components/spacer-item.ts";
import "../../components/stat-strip.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";

interface ProductSection {
  id: string;
  nav: string;
  title: string;
  icon: string;
  description: string;
  flow: string;
  points: FeatureCheckItem[];
  stats?: { label: string; value: string }[];
  table?: {
    headers: string[];
    rows: string[][];
    minWidth?: number;
  };
}

@customElement("product-page")
export class ProductPage extends LitElement {
  static styles = css`
    ${introductionPageStyles}
    :host {
      --section-gap: 24px;
      --panel-radius: 20px;
    }

    .top {
      display: grid;
      gap: var(--section-gap);
    }

    .overview-header {
      display: grid;
      gap: 8px;
    }

    .overview-kicker {
      margin: 0;
      font-size: 12px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: color-mix(in srgb, var(--primary) 65%, black);
      font-weight: 700;
    }

    .overview-title {
      margin: 0;
      font-size: clamp(22px, 3vw, 30px);
      line-height: 1.25;
      color: color-mix(in srgb, var(--text) 18%, black);
    }

    .overview-subtitle {
      margin: 0;
      max-width: 760px;
      line-height: 1.7;
      color: color-mix(in srgb, var(--text) 76%, white);
    }

    .module-grid {
      margin-top: 22px;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
    }

    .surface-item {
      display: grid;
      gap: 6px;
      border: 1px solid var(--border-subtle);
      background: color-mix(in srgb, var(--surface-card) 96%, white);
      border-radius: 14px;
      padding: 14px 16px;
    }

    .module-chip strong {
      font-size: 15px;
      color: color-mix(in srgb, var(--text) 22%, black);
    }

    .module-chip span {
      font-size: 13px;
      color: color-mix(in srgb, var(--text) 72%, white);
    }

    .feature-panel {
      border-radius: var(--panel-radius);
    }

    .feature-top {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr) auto;
      align-items: center;
      gap: 16px;
    }

    .feature-index {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-size: 13px;
      font-weight: 700;
      color: var(--primary-strong);
      background: color-mix(in srgb, var(--primary) 16%, white);
      border: 1px solid
        color-mix(in srgb, var(--primary) 26%, var(--border-subtle));
    }

    .feature-title {
      min-width: 0;
    }

    .feature-title section-heading {
      display: block;
    }

    .feature-icon {
      width: 56px;
      height: 56px;
      border-radius: 14px;
      display: grid;
      place-items: center;
      color: var(--primary-strong);
      background: linear-gradient(
        135deg,
        rgb(from var(--primary) r g b / 0.16) 0%,
        rgb(from var(--accent-violet) r g b / 0.11) 100%
      );
    }

    .feature-icon iconify-icon {
      font-size: 26px;
    }

    .flow-banner {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 16px;
      border-radius: 12px;
      border: 1px solid
        color-mix(in srgb, var(--success) 35%, var(--border-subtle));
      background: linear-gradient(
        120deg,
        color-mix(in srgb, var(--success) 13%, white) 0%,
        color-mix(in srgb, var(--primary) 8%, white) 100%
      );
      color: color-mix(in srgb, var(--success) 65%, black);
      font-weight: 600;
    }

    .flow-banner iconify-icon {
      font-size: 18px;
    }

    .cta-wrap {
      margin-top: 8px;
    }

    @media (max-width: 1024px) {
      .module-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 760px) {
      .module-grid {
        grid-template-columns: 1fr;
      }

      .feature-top {
        grid-template-columns: 1fr;
        justify-items: start;
      }
    }
  `;

  private readonly sections: ProductSection[] = [
    {
      id: "invoice",
      nav: "票据智能处理",
      title: "票据智能处理",
      icon: "fa7-solid:camera",
      description: "通过AI技术自动识别各类票据，实现票据数字化管理",
      flow: "拍照 -> 上传 -> 识别 -> 结果",
      points: [
        { text: "支持增值税专票、普票、电子发票、火车票、出租车票等20+类型" },
        { text: "识别准确率95%以上，关键字段自动提取" },
        { text: "支持批量上传，一次处理上百张票据" },
        { text: "自动查重，防止重复报销" },
      ],
      table: {
        headers: ["发票代码", "发票号码", "开票日期", "金额", "税率", "税额"],
        rows: [
          [
            "011001900211",
            "12345678",
            "2025-05-10",
            "¥10,000",
            "13%",
            "¥1,300",
          ],
        ],
        minWidth: 760,
      },
      stats: [
        { label: "识别准确率", value: "95%+" },
        { label: "处理速度", value: "2秒/张" },
        {
          label: "支持票据类型",
          value: "20+",
        },
      ],
    },
    {
      id: "accounting",
      nav: "自动记账系统",
      title: "自动记账系统",
      icon: "fa7-solid:book",
      description: "智能生成会计凭证，自动化完成记账流程",
      flow: "票据 -> 凭证 -> 账簿",
      points: [
        { text: "智能匹配会计科目，自动生成借贷分录" },
        { text: "支持自定义记账规则，满足个性化需求" },
        { text: "一键生成三大财务报表（资产负债表、利润表、现金流量表）" },
        { text: "操作日志全程留痕，可追溯可审计" },
      ],
      stats: [
        { label: "记账效率提升", value: "80%" },
        { label: "科目匹配准确率", value: "98%" },
        {
          label: "报表生成时间",
          value: "<1分钟",
        },
      ],
    },
    {
      id: "tax",
      nav: "纳税申报中心",
      title: "纳税申报中心",
      icon: "fa7-solid:file-invoice-dollar",
      description: "自动化纳税申报，智能预警税务风险",
      flow: "数据聚合 -> 申报单生成 -> 风险预警 -> 申报记录",
      points: [
        { text: "自动生成增值税、企业所得税申报表" },
        { text: "内置税收优惠政策提醒，帮助企业合理节税" },
        { text: "申报期限智能预警，避免逾期罚款" },
        { text: "历史申报记录查询，支持多期对比分析" },
      ],
      stats: [
        { label: "申报时间节省", value: "70%" },
        { label: "逾期风险降低", value: "90%" },
        {
          label: "政策匹配准确率",
          value: "95%",
        },
      ],
    },
    {
      id: "bank",
      nav: "银行对账管理",
      title: "银行对账管理",
      icon: "fa7-solid:building-columns",
      description: "银企直联，自动化对账，确保账实相符",
      flow: "流水同步 -> 自动勾兑 -> 差异标记 -> 调节表输出",
      points: [
        { text: "银企直联，流水自动同步" },
        { text: "智能匹配规则，自动勾兑" },
        { text: "差异自动标记，人工复核" },
        { text: "余额调节表自动生成" },
      ],
      stats: [
        { label: "对账效率提升", value: "85%" },
        { label: "勾兑准确率", value: "99%" },
        {
          label: "支持银行数量",
          value: "50+",
        },
      ],
    },
    {
      id: "portrait",
      nav: "财务画像分析",
      title: "财务画像分析",
      icon: "fa7-solid:chart-line",
      description: "多维度财务分析，生成企业信用画像",
      flow: "五维指标聚合 -> 模型计算 -> 信用评分",
      points: [
        { text: "盈利能力：毛利率、净利率、ROE分析" },
        { text: "偿债能力：流动比率、资产负债率监控" },
        { text: "运营效率：应收账款周转、存货周转分析" },
        { text: "税务健康度：申报及时率、税负稳定性" },
        { text: "经营稳定性：收入波动、银企流水匹配度" },
      ],
      stats: [
        { label: "分析维度", value: "5个" },
        {
          label: "数据指标",
          value: "20+",
        },
        { label: "模型准确率", value: "92%" },
      ],
    },
    {
      id: "financing",
      nav: "融资对接服务",
      title: "融资对接服务",
      icon: "fa7-solid:handshake",
      description: "基于真实经营数据，智能匹配融资产品",
      flow: "信用报告生成 -> 银行授权 -> 产品比价 -> 进度跟踪",
      points: [
        { text: "基于真实经营数据生成信用报告" },
        { text: "一键授权银行查询，保护数据隐私" },
        { text: "多家银行产品比价，选择最优方案" },
        { text: "贷款进度实时跟踪，透明化管理" },
      ],
      stats: [
        { label: "融资成功率", value: "提升40%" },
        { label: "利率优惠", value: "平均0.5%" },
        {
          label: "审批时间",
          value: "缩短50%",
        },
      ],
    },
  ];

  render() {
    return html`
      <main class="page-container">
        <div class="section-container top">
          <app-breadcrumb
            .items=${[
              { label: "首页", href: "/index.html" },
              { label: "产品功能" },
            ]}
          ></app-breadcrumb>

          <page-hero
            title="产品功能详解"
            subtitle="票据小灵提供从票据识别到融资对接的全流程财务自动化解决方案，六大核心功能模块帮助企业实现财务数字化转型，提升运营效率。"
          ></page-hero>

          <app-card padding="28px">
            <div class="overview-header">
              <p class="overview-kicker">Core Capability Map</p>
              <h2 class="overview-title">六大模块，一条可落地的智能财务链路</h2>
              <p class="overview-subtitle">
                从识别到记账、申报、对账，再到信用画像与融资对接，每个模块都可独立使用，也能组合成完整闭环。
              </p>
            </div>
            <div class="module-grid">
              ${this.sections.map(
                (section) => html`
                  <div class="module-chip surface-item">
                    <strong>${section.nav}</strong>
                    <span>${section.flow}</span>
                  </div>
                `,
              )}
            </div>
          </app-card>
        </div>

        <spacer-item height="40px"></spacer-item>

        <div class="section-container section-stack section-stack--lg">
          ${this.sections.map((section, index) =>
            this.renderSection(section, index),
          )}

          <section-cta
            class="cta-wrap"
            title="准备好让财务自动化了吗？"
            description="立即注册，体验票据识别、自动记账和融资对接的一站式流程。"
            primary-text="免费试用"
            primary-link="/register.html"
            secondary-text="查看定价方案"
            secondary-link="/pricing.html"
          ></section-cta>
        </div>
      </main>
    `;
  }

  private renderSection(section: ProductSection, index: number) {
    return html`
      <app-card class="feature-panel" id="${section.id}" padding="32px">
        <div class="feature-top">
          <div class="feature-index">${String(index + 1).padStart(2, "0")}</div>
          <div class="feature-title">
            <section-heading
              align="left"
              title="${section.title}"
              subtitle="${section.description}"
            ></section-heading>
          </div>
          <div class="feature-icon">
            <iconify-icon icon="${section.icon}"></iconify-icon>
          </div>
        </div>

        <spacer-item height="20px"></spacer-item>

        <div class="flow-banner">
          <iconify-icon icon="fa7-solid:arrow-right-arrow-left"></iconify-icon>
          流程示意：${section.flow}
        </div>

        ${section.stats && section.stats.length > 0
          ? html`
              <spacer-item height="24px"></spacer-item>
              <stat-strip
                .items=${section.stats.map((stat) => ({
                  value: stat.value,
                  label: stat.label,
                }))}
                tone="solid"
              ></stat-strip>
            `
          : null}

        <spacer-item height="24px"></spacer-item>

        ${section.table
          ? html`
              <app-table
                aria-label="票据识别结果示例"
                shadow
                .headers=${section.table.headers}
                .rows=${section.table.rows}
              ></app-table>
              ${section.points.length
                ? html`
                    <spacer-item height="20px"></spacer-item>
                    ${this.renderPointList(section.points)}
                  `
                : null}
            `
          : this.renderPointList(section.points)}
      </app-card>
    `;
  }

  private renderPointList(points: FeatureCheckItem[]) {
    return html`<feature-check-list .items=${points}></feature-check-list>`;
  }
}
