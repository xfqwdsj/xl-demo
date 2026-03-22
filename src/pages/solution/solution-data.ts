import {
  INDUSTRY_MAP,
  type IndustryId,
} from "../../data/marketing-taxonomy.ts";

export interface SolutionPainPoint {
  icon: string;
  text: string;
}

export interface SolutionStep {
  number: number;
  text: string;
}

export interface IndustrySolution {
  id: IndustryId;
  name: string;
  icon: string;
  painPoints: SolutionPainPoint[];
  solutions: SolutionStep[];
  effectTitle: string;
  effectDescription: string;
  stats: {
    label: string;
    value: string;
    color: string;
  }[];
  image: string;
  imageAlt: string;
}

const getIndustryName = (id: IndustryId) => INDUSTRY_MAP[id].name;

export const industrySolutions: IndustrySolution[] = [
  {
    id: "catering",
    name: getIndustryName("catering"),
    icon: "fa7-solid:utensils",
    painPoints: [
      {
        icon: "fa7-solid:file-invoice",
        text: "食材采购票多，整理耗时",
      },
      {
        icon: "fa7-solid:mobile-screen",
        text: "外卖平台对账难，数据分散",
      },
      {
        icon: "fa7-solid:calculator",
        text: "成本控制复杂，毛利算不清",
      },
    ],
    solutions: [
      {
        number: 1,
        text: "食材发票批量识别，自动归集成本",
      },
      {
        number: 2,
        text: "美团/饿了么流水自动导入，对账无忧",
      },
      {
        number: 3,
        text: "菜品成本分析，毛利实时监控",
      },
    ],
    effectTitle: "某连锁餐饮",
    effectDescription: "使用后财务处理效率提升60%，每月节省人工成本超2万元",
    stats: [
      { label: "票据处理时间", value: "-70%", color: "var(--success)" },
      { label: "财务人力成本", value: "-50%", color: "var(--success)" },
      { label: "毛利核算准确率", value: "99%", color: "var(--primary-strong)" },
    ],
    image: "/img/solution-catering.svg",
    imageAlt: "餐饮行业解决方案示意图",
  },
  {
    id: "retail",
    name: getIndustryName("retail"),
    icon: "fa7-solid:store",
    painPoints: [
      {
        icon: "fa7-solid:boxes-stacked",
        text: "进货发票量大，手工录入慢",
      },
      {
        icon: "fa7-solid:chart-line",
        text: "库存与财务脱节，账实不符",
      },
      {
        icon: "fa7-solid:shop",
        text: "多门店管理难，数据汇总慢",
      },
    ],
    solutions: [
      {
        number: 1,
        text: "进货发票批量处理，自动匹配库存",
      },
      {
        number: 2,
        text: "进销存数据实时同步，账实一致",
      },
      {
        number: 3,
        text: "多门店独立核算，总部统一视图",
      },
    ],
    effectTitle: "某便利店品牌",
    effectDescription: "财务处理时间减少80%，库存准确率提升至99.5%",
    stats: [
      { label: "财务处理时间", value: "-80%", color: "var(--success)" },
      { label: "库存准确率", value: "99.5%", color: "var(--primary-strong)" },
      { label: "对账效率提升", value: "3倍", color: "var(--primary-strong)" },
    ],
    image: "/img/solution-retail.svg",
    imageAlt: "零售行业解决方案示意图",
  },
  {
    id: "service",
    name: getIndustryName("service"),
    icon: "fa7-solid:briefcase",
    painPoints: [
      {
        icon: "fa7-solid:folder-tree",
        text: "项目核算复杂，收入成本难匹配",
      },
      {
        icon: "fa7-solid:clock",
        text: "应收账款难管，回款周期长",
      },
      {
        icon: "fa7-solid:users",
        text: "人员成本分摊难，利润算不清",
      },
    ],
    solutions: [
      {
        number: 1,
        text: "按项目归集收入成本，盈亏一目了然",
      },
      {
        number: 2,
        text: "应收账款账龄分析，自动催收提醒",
      },
      {
        number: 3,
        text: "人员工时与成本自动分摊",
      },
    ],
    effectTitle: "某设计公司",
    effectDescription: "回款周期缩短30%，项目利润率提升15%",
    stats: [
      { label: "回款周期", value: "-30%", color: "var(--success)" },
      { label: "项目利润率", value: "+15%", color: "var(--primary-strong)" },
      { label: "人工核算时间", value: "-60%", color: "var(--success)" },
    ],
    image: "/img/solution-service.svg",
    imageAlt: "服务行业解决方案示意图",
  },
];
