export interface TeamMember {
  name: string;
  initials: string;
  title: string;
  bio: string;
  purple?: boolean;
}

export interface Milestone {
  year: string;
  month: string;
  title: string;
  description: string;
}

export interface Honor {
  name: string;
  org: string;
}

export interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
  tags: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "张明",
    initials: "张",
    title: "创始人 & CEO",
    bio: "前阿里云高级产品专家，10年企业服务经验，专注于财务科技领域创新",
  },
  {
    name: "李华",
    initials: "李",
    title: "CTO",
    bio: "前腾讯AI Lab高级工程师，深耕计算机视觉与自然语言处理方向",
    purple: true,
  },
  {
    name: "王芳",
    initials: "王",
    title: "产品总监",
    bio: "前用友网络产品经理，8年财务软件产品设计经验，精通企业财务流程",
  },
  {
    name: "刘强",
    initials: "刘",
    title: "算法负责人",
    bio: "中科院博士，专注OCR与文档智能识别技术，发表多篇顶会论文",
    purple: true,
  },
  {
    name: "陈静",
    initials: "陈",
    title: "运营总监",
    bio: "前美团点评运营专家，擅长用户增长策略与客户成功体系搭建",
  },
  {
    name: "赵磊",
    initials: "赵",
    title: "商务总监",
    bio: "前招商银行对公业务经理，熟悉银行融资产品与企业风控流程",
    purple: true,
  },
];

export const milestones: Milestone[] = [
  {
    year: "2023",
    month: "3月",
    title: "公司成立",
    description: "票据小灵正式成立，完成天使轮融资500万元，核心团队组建完毕",
  },
  {
    year: "2023",
    month: "7月",
    title: "产品MVP上线",
    description: "首个版本正式上线，支持票据OCR识别和自动记账核心功能",
  },
  {
    year: "2023",
    month: "11月",
    title: "A轮融资",
    description: "完成A轮融资2000万元，红杉资本、高瓴资本联合投资",
  },
  {
    year: "2024",
    month: "3月",
    title: "用户突破1万",
    description: "服务小微企业用户超过1万家，产品覆盖全国30个城市",
  },
  {
    year: "2024",
    month: "6月",
    title: "银行直连上线",
    description: "与招商银行、工商银行等10家银行达成战略合作，银行对账功能上线",
  },
  {
    year: "2024",
    month: "10月",
    title: "AI引擎升级",
    description: "新一代AI识别引擎发布，票据识别准确率突破95%",
  },
  {
    year: "2025",
    month: "2月",
    title: "用户突破5万",
    description: "服务小微企业超5万家，月处理票据量突破100万张",
  },
  {
    year: "2025",
    month: "9月",
    title: "B轮融资",
    description: "完成B轮融资5000万元，估值达到5亿元，开启全国市场扩张",
  },
];

export const honors: Honor[] = [
  { name: "国家高新技术企业", org: "科学技术部 · 2024年" },
  { name: "金融科技创新优秀奖", org: "中国互联网金融协会 · 2024年" },
  { name: "中小企业数字化优秀案例", org: "工业和信息化部 · 2025年" },
];

export const jobOpenings: JobOpening[] = [
  {
    title: "高级前端工程师",
    department: "技术部",
    location: "上海",
    type: "全职",
    tags: ["Vue3", "TypeScript", "Lit"],
  },
  {
    title: "AI算法工程师",
    department: "算法部",
    location: "北京 / 上海",
    type: "全职",
    tags: ["OCR", "NLP", "PyTorch"],
  },
  {
    title: "产品经理",
    department: "产品部",
    location: "上海",
    type: "全职",
    tags: ["B端产品", "财务SaaS", "数据分析"],
  },
];
