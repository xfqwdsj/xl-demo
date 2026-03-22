const INDUSTRY_ORDER = [
  "catering",
  "retail",
  "service",
  "manufacturing",
] as const;

export type IndustryId = (typeof INDUSTRY_ORDER)[number];

export interface IndustryInfo {
  id: IndustryId;
  name: string;
  icon: string;
  color: string;
}

export const INDUSTRY_MAP: Record<IndustryId, Omit<IndustryInfo, "id">> = {
  catering: {
    name: "餐饮行业",
    icon: "fa7-solid:utensils",
    color: "var(--industry-catering)",
  },
  retail: {
    name: "零售行业",
    icon: "fa7-solid:store",
    color: "var(--industry-retail)",
  },
  service: {
    name: "服务行业",
    icon: "fa7-solid:briefcase",
    color: "var(--industry-service)",
  },
  manufacturing: {
    name: "制造业",
    icon: "fa7-solid:industry",
    color: "var(--industry-manufacturing)",
  },
};

export const CORE_INDUSTRIES: ReadonlyArray<IndustryInfo> = INDUSTRY_ORDER.map(
  (id) => ({
    id,
    ...INDUSTRY_MAP[id],
  }),
);

const PARTNER_CONFIG = {
  bank: {
    "cmb-bank": "招商银行",
    "icbc-bank": "工商银行",
    "ccb-bank": "建设银行",
    "boc-bank": "中国银行",
    "spd-bank": "浦发银行",
    "abc-bank": "农业银行",
  },
  tech: {
    "ali-cloud": "阿里云",
    "tencent-cloud": "腾讯云",
    "huawei-cloud": "华为云",
    "baidu-paddle": "百度飞桨",
  },
  association: {
    "tax-assoc": "中国财税协会",
    "sme-assoc": "中小企业协会",
  },
} as const;

export type PartnerType = keyof typeof PARTNER_CONFIG;

export type PartnerId = {
  [K in PartnerType]: keyof (typeof PARTNER_CONFIG)[K];
}[PartnerType];

export interface PartnerInfo {
  id: PartnerId;
  name: string;
  type: PartnerType;
}

export const PARTNERS_BY_TYPE: Record<
  PartnerType,
  ReadonlyArray<PartnerInfo>
> = (Object.keys(PARTNER_CONFIG) as PartnerType[]).reduce(
  (acc, type) => {
    acc[type] = Object.entries(PARTNER_CONFIG[type]).map(([id, name]) => ({
      id: id as PartnerId,
      name: name as string,
      type: type as PartnerType,
    }));
    return acc;
  },
  {} as Record<PartnerType, PartnerInfo[]>,
);

export const getPartnerNamesByType = (type: PartnerType) =>
  Object.values(PARTNER_CONFIG[type]);
