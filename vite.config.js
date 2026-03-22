import { defineConfig } from "vite";
import minifyTemplateLiterals from "rollup-plugin-minify-template-literals";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [{ ...minifyTemplateLiterals(), apply: "build" }],
  build: {
    rollupOptions: {
      input: {
        index: resolve(rootDir, "index.html"),
        about: resolve(rootDir, "about.html"),
        cases: resolve(rootDir, "cases.html"),
        product: resolve(rootDir, "product.html"),
        pricing: resolve(rootDir, "pricing.html"),
        solution: resolve(rootDir, "solution.html"),
        login: resolve(rootDir, "login.html"),
        register: resolve(rootDir, "register.html"),
        helpCenter: resolve(rootDir, "help-center.html"),
        demoOcr: resolve(rootDir, "demo-ocr.html"),
        privacy: resolve(rootDir, "privacy.html"),
        terms: resolve(rootDir, "terms.html"),
        dashboard: resolve(rootDir, "dashboard.html"),
        invoiceList: resolve(rootDir, "invoice-list.html"),
        invoiceUpload: resolve(rootDir, "invoice-upload.html"),
        autoAccounting: resolve(rootDir, "auto-accounting.html"),
        bankReconcile: resolve(rootDir, "bank-reconcile.html"),
        taxDeclare: resolve(rootDir, "tax-declare.html"),
        financialReports: resolve(rootDir, "financial-reports.html"),
        businessAnalysis: resolve(rootDir, "business-analysis.html"),
        financialPortrait: resolve(rootDir, "financial-portrait.html"),
        financing: resolve(rootDir, "financing.html"),
        settingsCompany: resolve(rootDir, "settings-company.html"),
        settingsUsers: resolve(rootDir, "settings-users.html"),
        settingsNotify: resolve(rootDir, "settings-notify.html"),
        settingsSecurity: resolve(rootDir, "settings-security.html"),
      },
    },
  },
});
