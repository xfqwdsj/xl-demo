import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("auth-page")
export class AuthPage extends LitElement {
  static styles = css`
    .auth-shell {
      display: flex;
      min-height: calc(100dvh - 64px);
    }

    .panel-left {
      flex: 0 0 440px;
      background: linear-gradient(
        150deg,
        var(--primary-strong) 0%,
        var(--primary-deep) 55%,
        rgb(from var(--primary-deep) r g b / 0.8) 100%
      );
      display: flex;
      flex-direction: column;
      padding: 48px 44px;
      position: relative;
      overflow: hidden;
      color: var(--white);
    }

    .panel-left::before {
      content: "";
      position: absolute;
      width: 380px;
      height: 380px;
      border-radius: 50%;
      background: rgb(from var(--white) r g b / 0.07);
      top: -130px;
      right: -130px;
      pointer-events: none;
    }

    .panel-left::after {
      content: "";
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: rgb(from var(--white) r g b / 0.05);
      bottom: -80px;
      left: -80px;
      pointer-events: none;
    }

    .panel-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 24px;
      position: relative;
      z-index: 1;
      margin-top: 44px;
    }

    .panel-tagline {
      margin: 0;
      font-size: 26px;
      font-weight: 700;
      line-height: 1.4;
    }

    .panel-desc {
      margin: 0;
      font-size: 14px;
      line-height: 1.7;
      opacity: 0.82;
    }

    .benefit-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 16px;
    }

    .benefit-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .benefit-icon {
      flex: 0 0 30px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: rgb(from var(--white) r g b / 0.15);
      border: 1px solid rgb(from var(--white) r g b / 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1px;
    }

    .benefit-text strong {
      display: block;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 2px;
    }

    .benefit-text span {
      font-size: 13px;
      opacity: 0.75;
      line-height: 1.5;
    }

    .trust-strip {
      display: flex;
      gap: 24px;
      padding-top: 24px;
      border-top: 1px solid rgb(from var(--white) r g b / 0.2);
      position: relative;
      z-index: 1;
    }

    .trust-item {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .trust-count {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.01em;
    }

    .trust-label {
      font-size: 12px;
      opacity: 0.7;
    }

    .panel-right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 48px 32px;
      background: var(--white);
    }

    .form-wrap {
      width: 100%;
      max-width: 400px;
    }

    .form-header {
      margin-bottom: 30px;
    }

    .form-title {
      margin: 0 0 6px;
      font-size: 24px;
      font-weight: 700;
      color: var(--text-title);
    }

    .form-subtitle {
      margin: 0;
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.5;
    }

    .auth-form {
      display: grid;
      gap: 18px;
    }

    .field {
      display: grid;
      gap: 6px;
    }

    .field-label {
      font-size: 13px;
      font-weight: 500;
      color: var(--text);
    }

    .input-wrap {
      position: relative;
    }

    .input-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: rgb(from var(--text-muted) r g b / 0.8);
      display: flex;
      align-items: center;
      pointer-events: none;
    }

    .input {
      width: 100%;
      height: 44px;
      border-radius: 8px;
      border: 1px solid rgb(from var(--border) r g b / 0.8);
      padding: 0 12px 0 38px;
      font-size: 14px;
      color: var(--text-title);
      background: rgb(from var(--white) r g b / 0.98);
      box-sizing: border-box;
      transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        background 0.2s ease;
      outline: none;
      font-family: inherit;
    }

    .input:focus {
      border-color: var(--primary-strong);
      background: var(--white);
      box-shadow: 0 0 0 3px rgb(from var(--primary-strong) r g b / 0.12);
    }

    .input::placeholder {
      color: rgb(from var(--text-muted) r g b / 0.6);
    }

    .code-row {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 8px;
      align-items: start;
    }

    .send-code-btn {
      height: 44px;
      padding: 0 14px;
      border-radius: 8px;
      border: 1px solid var(--border);
      background: var(--white);
      color: var(--primary-strong);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
      transition:
        background 0.2s ease,
        border-color 0.2s ease;
      font-family: inherit;
    }

    .send-code-btn:hover {
      background: rgb(from var(--primary-strong) r g b / 0.05);
      border-color: var(--primary-strong);
    }

    .form-actions {
      display: grid;
      gap: 14px;
      margin-top: 2px;
    }

    .submit-btn {
      width: 100%;
      height: 46px;
      border-radius: 8px;
      background: linear-gradient(
        135deg,
        var(--primary-strong) 0%,
        var(--primary) 100%
      );
      color: var(--white);
      font-size: 15px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition:
        opacity 0.2s ease,
        transform 0.15s ease;
      box-shadow: 0 4px 14px rgb(from var(--primary-strong) r g b / 0.32);
      font-family: inherit;
      letter-spacing: 0.02em;
    }

    .submit-btn:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    .submit-btn:active {
      transform: translateY(0);
    }

    .switch-link {
      text-align: center;
      font-size: 14px;
      color: var(--text-muted);
      margin: 0;
    }

    .switch-link a {
      color: var(--primary-strong);
      text-decoration: none;
      font-weight: 500;
    }

    .switch-link a:hover {
      text-decoration: underline;
    }

    @media (max-width: 900px) {
      .auth-shell {
        flex-direction: column;
        min-height: unset;
      }

      .panel-left {
        flex: 0 0 auto;
        padding: 32px 24px;
      }

      .panel-body {
        margin-top: 24px;
        gap: 16px;
      }

      .panel-tagline {
        font-size: 22px;
      }

      .trust-strip {
        display: none;
      }

      .panel-right {
        padding: 36px 24px;
      }
    }

    @media (max-width: 480px) {
      .panel-left {
        padding: 24px 20px;
      }

      .panel-right {
        padding: 28px 20px;
      }

      .form-title {
        font-size: 20px;
      }
    }
  `;

  @property({ type: String })
  mode: "login" | "register" = "login";

  private get isRegister() {
    return this.mode === "register";
  }

  render() {
    const { isRegister } = this;

    return html`
      <main class="page-container">
        <div class="auth-shell">
          <aside class="panel-left" aria-hidden="true">
            <div class="panel-body">
              <h2 class="panel-tagline">
                ${isRegister
                  ? "开启智能财务管理，告别繁琐手工"
                  : "欢迎回来，继续高效财务管理"}
              </h2>
              <p class="panel-desc">
                ${isRegister
                  ? "注册即可体验票据识别、自动记账、纳税申报与融资画像等核心能力，助力企业财务数字化转型。"
                  : "登录后可查看经营概览、处理待办事项并继续业务流程。数千家企业正在使用票据小灵提升效率。"}
              </p>

              <ul class="benefit-list">
                ${this.getBenefits().map(
                  (b) => html`
                    <li class="benefit-item">
                      <div class="benefit-icon">
                        <iconify-icon
                          icon="${b.icon}"
                          width="14"
                          height="14"
                        ></iconify-icon>
                      </div>
                      <div class="benefit-text">
                        <strong>${b.title}</strong>
                        <span>${b.desc}</span>
                      </div>
                    </li>
                  `,
                )}
              </ul>
            </div>

            <div class="trust-strip">
              <div class="trust-item">
                <span class="trust-count">5000+</span>
                <span class="trust-label">企业客户</span>
              </div>
              <div class="trust-item">
                <span class="trust-count">98%</span>
                <span class="trust-label">识别准确率</span>
              </div>
              <div class="trust-item">
                <span class="trust-count">&lt; 3s</span>
                <span class="trust-label">平均处理时间</span>
              </div>
            </div>
          </aside>

          <div class="panel-right">
            <div class="form-wrap">
              <div class="form-header">
                <h1 class="form-title">
                  ${isRegister ? "创建账号" : "账号登录"}
                </h1>
                <p class="form-subtitle">
                  ${isRegister
                    ? "填写信息快速开通服务，仅前端演示。"
                    : "输入手机号和密码登录，仅前端演示。"}
                </p>
              </div>

              <form class="auth-form" @submit=${this.handleSubmit}>
                ${isRegister
                  ? html`
                      <label class="field">
                        <span class="field-label">企业名称</span>
                        <div class="input-wrap">
                          <span class="input-icon">
                            <iconify-icon
                              icon="fa7-solid:building"
                              width="15"
                              height="15"
                            ></iconify-icon>
                          </span>
                          <input
                            class="input"
                            type="text"
                            placeholder="请输入企业名称"
                            autocomplete="organization"
                          />
                        </div>
                      </label>
                    `
                  : null}

                <label class="field">
                  <span class="field-label">手机号</span>
                  <div class="input-wrap">
                    <span class="input-icon">
                      <iconify-icon
                        icon="fa7-solid:mobile-screen"
                        width="15"
                        height="15"
                      ></iconify-icon>
                    </span>
                    <input
                      class="input"
                      type="tel"
                      placeholder="请输入手机号"
                      autocomplete="tel"
                    />
                  </div>
                </label>

                <label class="field">
                  <span class="field-label">密码</span>
                  <div class="input-wrap">
                    <span class="input-icon">
                      <iconify-icon
                        icon="fa7-solid:lock"
                        width="15"
                        height="15"
                      ></iconify-icon>
                    </span>
                    <input
                      class="input"
                      type="password"
                      placeholder="${isRegister
                        ? "设置密码（至少 8 位）"
                        : "请输入密码"}"
                      autocomplete="${isRegister
                        ? "new-password"
                        : "current-password"}"
                    />
                  </div>
                </label>

                ${isRegister
                  ? html`
                      <label class="field">
                        <span class="field-label">短信验证码</span>
                        <div class="code-row">
                          <div class="input-wrap">
                            <span class="input-icon">
                              <iconify-icon
                                icon="fa7-solid:shield-halved"
                                width="15"
                                height="15"
                              ></iconify-icon>
                            </span>
                            <input
                              class="input"
                              type="text"
                              placeholder="请输入验证码"
                              autocomplete="one-time-code"
                            />
                          </div>
                          <button type="button" class="send-code-btn">
                            获取验证码
                          </button>
                        </div>
                      </label>
                    `
                  : null}

                <div class="form-actions">
                  <button class="submit-btn" type="submit">
                    ${isRegister ? "立即注册" : "登 录"}
                  </button>
                  <p class="switch-link">
                    ${isRegister
                      ? html`已有账号？<a href="/login.html">去登录</a>`
                      : html`没有账号？<a href="/register.html">免费注册</a>`}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    `;
  }

  private getBenefits() {
    if (this.isRegister) {
      return [
        {
          icon: "fa7-solid:barcode",
          title: "票据识别",
          desc: "拍照上传即可识别，支持批量处理",
        },
        {
          icon: "fa7-solid:calculator",
          title: "自动记账",
          desc: "基于规则自动生成凭证，保留审核能力",
        },
        {
          icon: "fa7-solid:chart-line",
          title: "申报与融资",
          desc: "税务提醒、信用评分和融资建议集中展示",
        },
      ];
    }
    return [
      {
        icon: "fa7-solid:chart-simple",
        title: "经营概览",
        desc: "一键查看收支、现金流和核心指标",
      },
      {
        icon: "fa7-solid:list-check",
        title: "待办处理",
        desc: "快速处理审批、对账、申报等任务",
      },
      {
        icon: "fa7-solid:shield-halved",
        title: "安全可靠",
        desc: "企业级数据加密与权限管理",
      },
    ];
  }

  private handleSubmit(event: Event) {
    event.preventDefault();
    window.location.href = "/dashboard.html";
  }
}
