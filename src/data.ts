import { LinkItem } from './types';

export const PHONE_SERVICE = {
  title: '用路人服務專線',
  number: '0800-231-035',
  telUrl: 'tel:0800231035',
};

export const ROAD_TRAFFIC_LINKS: LinkItem[] = [
  {
    id: 'link-thb-168',
    title: '智慧化省道即時資訊服務網',
    url: 'https://168.thb.gov.tw/thb168',
  },
  {
    id: 'link-police-radio',
    title: '警廣即時路況',
    url: 'https://rtr.pbs.gov.tw/pbsmgt/RoadAll.html',
  },
  {
    id: 'link-1968-hov',
    title: '國道高乘載管制－高速公路資訊網',
    url: 'https://www.1968services.tw/high-occupancy-vehicle',
  },
];

export const REGULAR_CONTROL_LINKS: LinkItem[] = [
  {
    id: 'link-nanheng',
    title: '南橫公路',
    url: 'https://www.thb.gov.tw/Advanced_Search.aspx?q=%E5%8D%97%E6%A9%AB%E5%85%AC%E8%B7%AF',
  },
  {
    id: 'link-new-central-cross',
    title: '新中橫管制',
    url: 'https://www.thb.gov.tw/Advanced_Search.aspx?q=%E6%96%B0%E4%B8%AD%E6%A9%AB',
  },
  {
    id: 'link-beiheng',
    title: '北橫公路',
    url: 'https://www.thb.gov.tw/Advanced_Search.aspx?q=%E5%8C%97%E6%A9%AB',
  },
  {
    id: 'link-provincial-7a',
    title: '台七甲線',
    url: 'https://www.thb.gov.tw/Advanced_Search.aspx?q=%E5%8F%B0%E4%B8%83%E7%94%B2',
  },
];

export const FORESTRY_LINKS: LinkItem[] = [
  {
    id: 'link-forest-roads',
    title: '林業保育署所屬林道',
    url: 'https://www.forest.gov.tw/0003286',
  },
  {
    id: 'link-forest-recreation',
    title: '全國森林遊樂區開放時間',
    url: 'https://recreation.forest.gov.tw/Forest/Query?area=&typ=&word=%E6%A3%AE%E6%9E%97%E9%81%8A%E6%A8%82%E5%8D%80',
  },
];

export const NATIONAL_PARK_LINKS: LinkItem[] = [
  {
    id: 'link-hiking-permit',
    title: '管制路線查詢',
    url: 'https://hike.taiwan.gov.tw/open.aspx',
  },
];
