import {
  CORE_INDUSTRIES,
  type IndustryId,
} from "../../data/marketing-taxonomy.ts";

export interface CaseStat {
  label: string;
  value: string;
  trend: "up" | "down" | "neutral";
}

export interface CustomerCase {
  id: string;
  logo: string;
  name: string;
  industry: IndustryId;
  scale: string;
  painPoints: string;
  solution: string;
  stats: CaseStat[];
}

export const industries = [
  { id: "all", name: "全部", icon: "fa7-solid:list" },
  ...CORE_INDUSTRIES.map((industry) => ({
    id: industry.id,
    name: industry.name,
    icon: industry.icon,
  })),
];

export const customerCases: CustomerCase[] = [
  {
    id: "case-001",
    logo: "fa7-solid:utensils",
    name: "广州悦味餐饮管理有限公司",
    industry: "catering",
    scale: "5家门店，30名员工",
    painPoints:
      "每月采购食材发票超过200张，全靠人工整理录入，财务人员每月加班超过40小时。外卖平台对账数据分散，经常出现账目差异。",
    solution:
      "通过票据小灵OCR自动识别采购发票，美团/饿了么流水自动导入，实现票据自动归档和对账自动匹配。",
    stats: [
      { label: "票据处理时间", value: "-70%", trend: "down" },
      { label: "财务人力成本", value: "-50%", trend: "down" },
      { label: "融资获批额度", value: "+200%", trend: "up" },
    ],
  },
  {
    id: "case-002",
    logo: "fa7-solid:store",
    name: "深圳优选便利连锁有限公司",
    industry: "retail",
    scale: "20家门店，80名员工",
    painPoints:
      "进货发票量大，手工录入效率低。多门店库存与财务数据脱节，月末盘点经常出现账实不符。总部无法实时掌握各门店经营状况。",
    solution:
      "批量识别进货发票自动匹配库存，进销存数据实时同步，建立多门店独立核算体系，总部统一查看经营报表。",
    stats: [
      { label: "财务处理时间", value: "-80%", trend: "down" },
      { label: "库存准确率", value: "99.5%", trend: "up" },
      { label: "对账效率提升", value: "3倍", trend: "up" },
    ],
  },
  {
    id: "case-003",
    logo: "fa7-solid:briefcase",
    name: "上海创意设计工作室",
    industry: "service",
    scale: "15人团队，年营收500万",
    painPoints:
      "项目制核算复杂，每个项目的收入和成本难以精确匹配。客户回款周期长，应收账款管理混乱。人员成本分摊困难，项目利润率不清晰。",
    solution:
      "按项目自动归集收入成本，实时计算项目利润。应收账款账龄分析，自动发送催收提醒。人员工时与成本自动分摊到具体项目。",
    stats: [
      { label: "回款周期", value: "-30%", trend: "down" },
      { label: "项目利润率", value: "+15%", trend: "up" },
      { label: "核算效率", value: "+60%", trend: "up" },
    ],
  },
  {
    id: "case-004",
    logo: "fa7-solid:industry",
    name: "东莞精密零件制造厂",
    industry: "manufacturing",
    scale: "50名员工，年产值2000万",
    painPoints:
      "原材料采购票据种类繁多，增值税发票、运输单据需要分别处理。生产成本核算复杂，难以追溯到具体订单。银行流水与财务账目对账耗时。",
    solution:
      "多类型票据统一识别处理，按订单自动归集原材料成本，银企直联自动同步流水并智能匹配凭证。",
    stats: [
      { label: "票据处理效率", value: "+85%", trend: "up" },
      { label: "成本核算准确率", value: "98%", trend: "up" },
      { label: "对账时间", value: "-75%", trend: "down" },
    ],
  },
  {
    id: "case-005",
    logo: "fa7-solid:mug-hot",
    name: "杭州茶语时光连锁茶饮",
    industry: "catering",
    scale: "8家门店，45名员工",
    painPoints:
      "原料采购频繁，票据管理混乱。各门店收入汇总不及时，无法实时了解整体经营状况。季节性促销活动效果难以评估。",
    solution:
      "供应商发票自动识别归档，各门店收入实时汇总到总部看板，结合历史数据提供经营分析报告。",
    stats: [
      { label: "财务结算周期", value: "-60%", trend: "down" },
      { label: "经营决策效率", value: "+40%", trend: "up" },
      { label: "获批贷款额度", value: "50万", trend: "up" },
    ],
  },
  {
    id: "case-006",
    logo: "fa7-solid:laptop-code",
    name: "北京云途科技有限公司",
    industry: "service",
    scale: "30人团队，年营收800万",
    painPoints:
      "软件开发项目周期长，成本核算需要跨越多个会计期间。外包人员费用报销票据多且杂。客户分期付款，收入确认复杂。",
    solution:
      "跨期项目成本自动归集，费用票据批量识别和分类，按合同约定自动确认收入，生成项目全周期财务报告。",
    stats: [
      { label: "财务工作量", value: "-55%", trend: "down" },
      { label: "收入确认准确率", value: "100%", trend: "up" },
      { label: "信用评分提升", value: "+12分", trend: "up" },
    ],
  },
];
