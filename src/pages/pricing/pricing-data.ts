export interface PricingPlan {
  name: string;
  price: string;
  note: string;
  features: string[];
  mutedFeatures?: string[];
  actionText: string;
  actionLink: string;
  recommended?: boolean;
}

export interface PricingFaqItem {
  question: string;
  answer: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "免费版",
    price: "¥0/年",
    note: "永久免费",
    features: [
      "票据OCR识别（每月100张）",
      "自动记账",
      "基础财务报表",
      "单企业使用",
    ],
    mutedFeatures: [
      "银行直连对账",
      "多门店管理",
      "经营分析报告",
      "融资对接服务",
    ],
    actionText: "立即注册",
    actionLink: "/register.html",
  },
  {
    name: "Pro版",
    price: "¥1,200/年",
    note: "适合成长型企业",
    features: [
      "票据OCR识别（无限量）",
      "自动记账",
      "基础财务报表",
      "银行直连对账",
      "多门店管理（最多5个）",
      "经营分析报告",
      "行业数据对标",
      "融资对接服务",
      "专属客服支持",
    ],
    actionText: "开始试用",
    actionLink: "/register.html",
    recommended: true,
  },
  {
    name: "Ultra版",
    price: "¥5,000/年起",
    note: "适合代账公司",
    features: [
      "票据OCR识别（无限量）",
      "自动记账",
      "基础财务报表",
      "银行直连对账",
      "多门店管理",
      "经营分析报告",
      "行业数据对标",
      "融资对接服务",
      "专属客服支持",
      "批量企业管理（50家起）",
      "API接口对接",
      "自定义报表",
      "团队协作功能",
      "优先技术支持",
      "专属客户成功经理",
    ],
    actionText: "联系销售",
    actionLink: "/about.html",
  },
];

export const pricingFaqs: PricingFaqItem[] = [
  {
    question: "免费版有使用期限吗？",
    answer: "永久免费，功能不设期限，可长期使用。",
  },
  {
    question: "可以随时升级或降级吗？",
    answer: "可以随时升级，按比例补差价；降级次月生效。",
  },
  {
    question: "支持退款吗？",
    answer: "7天内无理由退款，让您零风险试用。",
  },
];
