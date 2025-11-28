import React from 'react';
import { TeamMember, LocationContact } from './types';
import { Video, Share2, Building2, Cpu } from 'lucide-react';

// Use placeholders for team images since we don't have the files
export const TEAM_FOUNDERS: TeamMember[] = [
  {
    name: "袁新凯",
    enName: "Think Yuan",
    title: "不恭文化创始人 / CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "任伟",
    enName: "Ray Ren",
    title: "联合创始人 / 制作业务GM",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "毛思宁",
    enName: "Sining Mao",
    title: "联合创始人 / 新媒体业务GM",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "陈林茂",
    enName: "Yubai Chen",
    title: "深圳公司创始人 / 合伙人",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
  }
];

export const TEAM_CORE: TeamMember[] = [
  {
    name: "周珊珊",
    enName: "Zero Chow",
    title: "创意总监",
    desc: "资深导演，多年创意内容策划执行经验，不恭文化内容创新的中坚力量。",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "李杰",
    enName: "Jeff Lee",
    title: "制作总监 / 布谷制作主理人",
    desc: "不恭文化内容制作带头人，精通全流程制作管理。",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "金梦琴",
    enName: "Mengqin Jin",
    title: "设计总监",
    desc: "资深设计师，统筹众多品牌营销的视觉设计方案。",
    image: "https://images.unsplash.com/photo-1598550874175-4d7112ee750e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "孙明伟",
    enName: "Mingwei Sun",
    title: "项目总监",
    desc: "资深导演，多年商业项目、纪录片执行经验。",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "方坚乐",
    enName: "Ale Fang",
    title: "后期制作GM",
    desc: "资深剪辑师，能驾驭多种类型项目的制作统筹。",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "宋语然",
    enName: "Yuran Song",
    title: "视效总监",
    desc: "资深特效师，对影片视觉效果把控有极其丰富的经验。",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
  }
];

export const BUSINESS_AREAS = [
  {
    title: "内容制作",
    desc: "依托专业院校资源优势，在宣传片、广告、纪录片领域提供全流程制作。",
    icon: <Video className="w-8 h-8 text-red-500" />
  },
  {
    title: "新媒体代运营",
    desc: "帮助品牌在新媒体平台建立传播阵地，提高品牌声量。",
    icon: <Share2 className="w-8 h-8 text-red-500" />
  },
  {
    title: "招聘宣传",
    desc: "“预热+直播+空中宣讲”创新模式，头部招聘宣传内容服务商。",
    icon: <Building2 className="w-8 h-8 text-red-500" />
  },
  {
    title: "AIGC内容研发",
    desc: "独有AI内容生产体系，建立AIGC内容研发实验室，打造爆款标签。",
    icon: <Cpu className="w-8 h-8 text-red-500" />
  }
];

export const CONTACTS: LocationContact[] = [
  {
    city: "北京",
    contactName: "安俊达",
    phone: "13125538868",
    email: "ajd@bvtcc.com"
  },
  {
    city: "深圳 / 南京",
    contactName: "陈逾白",
    phone: "18955928370",
    email: "bai@bvtcc.com"
  },
  {
    city: "海南",
    contactName: "蔡怡",
    phone: "13907576727",
    email: "cai@bvtcc.com"
  }
];

export const PARTNERS_LIST = [
  "泰康", "招联", "中国人寿", "光大", "平安",
  "传媒大学", "北京联合大学", "深规院", "方正集团",
  "赛迪研究院", "人民中国", "北京中学", "北京朝阳医院",
  "百度", "腾讯", "字节跳动", "美团外卖", "伊利",
  "猎聘", "BOSS直聘", "腾讯视频", "腾讯新闻", "天猫",
  "奔驰", "极狐", "马自达", "汉兰达", "比亚迪", "林肯",
  "亚辉龙", "TW", "元気森林", "百丽", "TCL", "飞鹤"
];

export const QUALIFICATIONS_LIST = [
  "国家高新技术企业",
  "中国广告行业优秀服务商",
  "广播电视节目制作经营许可证",
  "营业性演出许可证",
  "ISO9001 质量管理体系认证",
  "环境管理体系认证",
  "职业健康安全管理体系认证",
  "信息管理技术认证"
];