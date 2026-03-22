export interface PageMeta {
  title: string;
  subtitle: string;
  activeMenu: string;
  icon: string;
}

export const pageMetaMap = {
  dashboard: {
    title: "控制台首页",
    subtitle: "经营数据概览与今日待办",
    activeMenu: "dashboard",
    icon: "fa7-solid:gauge",
  },
  "invoice-list": {
    title: "票据管理中心",
    subtitle: "统一管理票据识别结果和处理状态",
    activeMenu: "invoice-list",
    icon: "fa7-solid:file-invoice",
  },
  "invoice-upload": {
    title: "票据上传",
    subtitle: "拖拽上传文件并查看识别进度",
    activeMenu: "invoice-list",
    icon: "fa7-solid:upload",
  },
  "auto-accounting": {
    title: "智能记账",
    subtitle: "自动生成凭证并支持审核流程",
    activeMenu: "auto-accounting",
    icon: "fa7-solid:book",
  },
  "bank-reconcile": {
    title: "银行对账",
    subtitle: "银行流水与凭证匹配及差异标记",
    activeMenu: "bank-reconcile",
    icon: "fa7-solid:building-columns",
  },
  "tax-declare": {
    title: "纳税申报",
    subtitle: "税种申报、申报表预览和历史记录",
    activeMenu: "tax-declare",
    icon: "fa7-solid:receipt",
  },
  "financial-reports": {
    title: "财务报表",
    subtitle: "资产负债表、利润表、现金流量表查看",
    activeMenu: "financial-reports",
    icon: "fa7-solid:chart-line",
  },
  "business-analysis": {
    title: "经营分析",
    subtitle: "收入、成本、利润、现金流多维分析",
    activeMenu: "business-analysis",
    icon: "fa7-solid:chart-pie",
  },
  "financial-portrait": {
    title: "财务画像",
    subtitle: "信用评分、五维雷达和行业对标",
    activeMenu: "financial-portrait",
    icon: "fa7-solid:user",
  },
  financing: {
    title: "融资服务",
    subtitle: "贷款产品、申请流程和进度跟踪",
    activeMenu: "financing",
    icon: "fa7-solid:hand-holding-dollar",
  },
  "settings-company": {
    title: "企业信息设置",
    subtitle: "企业基础资料、纳税信息和银行账户",
    activeMenu: "settings",
    icon: "fa7-solid:building",
  },
  "settings-users": {
    title: "用户权限管理",
    subtitle: "子账号、角色权限与状态维护",
    activeMenu: "settings",
    icon: "fa7-solid:users",
  },
  "settings-notify": {
    title: "通知设置",
    subtitle: "通知渠道与提醒策略配置",
    activeMenu: "settings",
    icon: "fa7-solid:bell",
  },
  "settings-security": {
    title: "安全设置",
    subtitle: "密码、设备、邮箱和操作日志安全控制",
    activeMenu: "settings",
    icon: "fa7-solid:shield-halved",
  },
} satisfies Record<string, PageMeta>;

export type AdminPageId = keyof typeof pageMetaMap;
