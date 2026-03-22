import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "../../components/breadcrumb.ts";
import "../../components/page-hero.ts";
import "../../components/section-cta.ts";
import "./about-mission.ts";
import "./about-history.ts";
import "./about-team.ts";
import "./about-partners.ts";
import "./about-jobs.ts";
import { introductionPageStyles } from "../../components/introduction-page.ts";

@customElement("about-page")
export class AboutPage extends LitElement {
  static styles = css`
    ${introductionPageStyles}
    .top {
      background: var(--background-color);
    }
  `;

  render() {
    return html`
      <main class="page-container">
        <div class="top section-container">
          <app-breadcrumb
            .items=${[
              { label: "首页", href: "/index.html" },
              { label: "关于我们" },
            ]}
          ></app-breadcrumb>
          <page-hero
            title="关于票据小灵"
            subtitle="用AI技术解决小微企业财务难题，让每一位老板都能轻松管账"
          ></page-hero>
        </div>

        <about-mission></about-mission>
        <about-history></about-history>
        <about-team></about-team>
        <about-partners></about-partners>
        <about-jobs></about-jobs>

        <spacer-item height="64px"></spacer-item>

        <section-cta
          class="section-container"
          variant="primary"
          title="准备好开始了吗？"
          description="立即注册，体验AI票据识别、自动记账和融资对接的一站式财务管理服务。"
          primary-text="免费试用"
          primary-link="/register.html"
          secondary-text="联系我们"
          secondary-link="mailto:hello@piaojuxiaoling.com"
        ></section-cta>
      </main>
    `;
  }
}
