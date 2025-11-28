import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { SectionId } from './types';
import { TEAM_FOUNDERS, TEAM_CORE, BUSINESS_AREAS, PARTNERS_LIST, QUALIFICATIONS_LIST, CONTACTS } from './constants';
import { Award, CheckCircle, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-brand-dark text-white font-sans overflow-x-hidden selection:bg-brand-red/30">
      {/* 
        Global Atmospheric Background 
        - Base: Midnight Slate (#08080c)
        - Layer 1: Tech Grid Pattern
        - Layer 2: Ambient Blobs (Red/Indigo/Purple)
        - Layer 3: Vignette
        - Layer 4: Noise Texture
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[#08080c]"></div>
         
         {/* Tech Grid */}
         <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] mask-image-gradient"></div>

         {/* Animated Blobs */}
         <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-brand-red/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
         <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-900/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
         <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-slate-900/40 rounded-full mix-blend-overlay filter blur-[100px] animate-blob animation-delay-4000"></div>
         
         {/* Vignette to focus attention */}
         <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#08080c]/80"></div>
         
         {/* Noise Texture for Film Grain feel */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* P1: Hero */}
        <Hero />

        {/* P2: About - Enterprise Profile */}
        <Section id={SectionId.ABOUT} className="bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-2 tracking-tight">
                <span className="text-white">企业</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">简介</span>
              </h2>
              <div className="h-[1px] w-24 bg-gradient-to-r from-brand-red to-transparent opacity-50"></div>
              <div className="text-gray-400 leading-loose space-y-6 text-lg text-justify font-light tracking-wide">
                <p>
                  不恭文化成立于2017年，是一家专注于<span className="text-white font-normal border-b border-brand-red/30 pb-0.5">媒介融合探索</span>的综合内容服务商。
                </p>
                <p>
                  公司致力于在新的媒介环境下，依托与<span className="text-white font-normal">中国传媒大学</span>的行业研究成果优势合作，运用中央广播电视总台、新华通讯社等央媒渠道资源，助力企业客户搭建融媒体架构，增强企业客户的内容生产力。
                </p>
                <p>
                  我们创建客户与目标受众间新的沟通方式，最终打造客户在内容生态下的话语体系。
                </p>
              </div>
            </div>
            
            <div className="relative group order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-transparent blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
              <div className="glass-card p-8 md:p-12 rounded-3xl relative z-10 border-t border-t-white/10">
                 <h3 className="text-xl font-bold mb-10 font-serif tracking-widest text-white/90">我们的足迹 / MILESTONES</h3>
                 <div className="flex flex-col gap-10 relative border-l border-white/5 ml-3 pl-8">
                    <div className="flex flex-col gap-1 relative group/item">
                      <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full border border-brand-red bg-[#08080c] group-hover/item:bg-brand-red transition-colors duration-300 shadow-[0_0_10px_rgba(172,4,28,0.3)]"></div>
                      <span className="text-2xl text-white font-serif font-bold">2017</span>
                      <span className="text-sm text-gray-500 font-light tracking-wider">北京总部成立</span>
                    </div>
                    <div className="flex flex-col gap-1 relative group/item">
                      <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full border border-gray-600 bg-[#08080c] group-hover/item:border-brand-red group-hover/item:bg-brand-red transition-colors duration-300"></div>
                      <span className="text-2xl text-white font-serif font-bold">2019</span>
                      <span className="text-sm text-gray-500 font-light tracking-wider">拓展深圳市场</span>
                    </div>
                    <div className="flex flex-col gap-1 relative group/item">
                      <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full border border-gray-600 bg-[#08080c] group-hover/item:border-brand-red group-hover/item:bg-brand-red transition-colors duration-300"></div>
                      <span className="text-2xl text-white font-serif font-bold">2024</span>
                      <span className="text-sm text-gray-500 font-light tracking-wider">组建南京团队</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </Section>

        {/* P3: Qualifications */}
        <Section id={SectionId.QUALIFICATIONS}>
          <div className="text-center mb-20 relative">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-white">资质简介</h2>
            <p className="text-brand-red/80 tracking-[0.5em] uppercase text-xs font-medium">Qualifications</p>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] w-px h-10 bg-gradient-to-b from-brand-red to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {QUALIFICATIONS_LIST.map((qual, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center group min-h-[180px] border border-white/5 hover:border-brand-red/30">
                <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-brand-red/10 transition-colors duration-500">
                   <Award className="w-6 h-6 text-gray-300 group-hover:text-brand-red transition-colors" />
                </div>
                <span className="text-gray-300 font-light tracking-wide text-sm group-hover:text-white transition-colors">{qual}</span>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent">
             <div className="bg-[#0a0a0f]/90 backdrop-blur-xl p-10 md:p-16 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-[0.03]">
                  <Award size={300} />
                </div>
                <div className="flex flex-col md:flex-row gap-12 items-center justify-between relative z-10">
                  <div className="space-y-6 md:w-3/4">
                    <h3 className="text-2xl font-bold text-white font-serif inline-flex items-center gap-3">
                       <span className="w-2 h-8 bg-brand-red rounded-sm"></span>
                       专业立身
                    </h3>
                    <p className="text-gray-400 leading-loose font-light text-lg">
                      公司成立以来以专业为立身之本，被评为<span className="text-white border-b border-brand-red/30">国家高新技术企业</span>、中国广告行业优秀服务商。
                      先后获得广播电视节目制作经营许可证、营业性演出许可证。
                      通过国家ISO90001质量管理体系认证、环境管理体系认证、职业健康安全管理体系认证和信息管理技术认证。
                    </p>
                  </div>
                  <div className="md:w-1/4 flex justify-center">
                    <div className="relative">
                       <div className="absolute inset-0 bg-brand-red blur-[40px] opacity-20 animate-pulse-slow"></div>
                       <CheckCircle className="w-20 h-20 text-white relative z-10" strokeWidth={1} />
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </Section>
        
        {/* P5 & P6: Core Team */}
        <Section id={SectionId.TEAM} className="bg-transparent">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-white">核心团队</h2>
            <p className="text-brand-red/80 tracking-[0.5em] uppercase text-xs font-medium">Core Team</p>
          </div>

          {/* Founders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
            {TEAM_FOUNDERS.map((member, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl bg-[#0e0e12] border border-white/5 hover:border-white/10 transition-all duration-500">
                <div className="aspect-[16/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                   <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-white mb-2 font-serif tracking-wide">{member.name}</h3>
                    <p className="text-xs text-brand-red uppercase tracking-[0.2em] mb-2">{member.enName}</p>
                    <p className="text-gray-400 font-light text-sm">{member.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Directors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_CORE.map((member, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl hover:bg-white/[0.04] flex flex-col items-start group border-t border-t-white/5 hover:border-t-brand-red/50">
                <div className="flex items-center gap-5 mb-6">
                   <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 group-hover:border-brand-red/50 transition-colors">
                     <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-white font-serif">{member.name}</h4>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest">{member.enName}</p>
                   </div>
                </div>
                <p className="text-brand-red text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-brand-red pl-3">{member.title}</p>
                <p className="text-sm text-gray-400 leading-relaxed font-light">{member.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* P7: Business */}
        <Section id={SectionId.BUSINESS}>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-white">业务简介</h2>
            <p className="text-brand-red/80 tracking-[0.5em] uppercase text-xs font-medium">Main Business</p>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-20">
             <p className="text-xl md:text-2xl font-serif text-gray-300 leading-relaxed font-light">
               依托<span className="text-white">中国传媒大学</span>专业资源<br/>
               以专业和高效在业内享有<span className="text-brand-red">卓越口碑</span>
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {BUSINESS_AREAS.map((item, idx) => (
              <div key={idx} className="glass-card p-10 rounded-2xl relative overflow-hidden group hover:bg-[#111116] transition-all duration-500 border border-white/5">
                <div className="absolute right-0 top-0 p-6 opacity-[0.03] transform scale-150 group-hover:rotate-12 transition-transform duration-700">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-6 relative z-10">
                   <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-brand-red border border-white/5 group-hover:border-brand-red/30 transition-colors">
                     {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28, strokeWidth: 1.5 })}
                   </div>
                   <div>
                      <h3 className="text-2xl font-bold text-white mb-3 font-serif group-hover:text-brand-red transition-colors">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed font-light text-sm">
                        {item.desc}
                      </p>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-10 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-transparent border border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
                 <h4 className="text-xl font-bold mb-4 text-white font-serif flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    新媒体创新
                 </h4>
                 <p className="text-gray-400 text-sm font-light leading-relaxed">不恭文化是业内第一批涉足企业新媒体代运营业务的团队，早在2019年便入围巨量引擎全国品牌服务商TOP10。</p>
              </div>
              <div className="p-10 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                 <h4 className="text-xl font-bold mb-4 text-white font-serif flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    AI 实验室
                 </h4>
                 <p className="text-gray-400 text-sm font-light leading-relaxed">人工智能时代来临，公司建立AIGC内容研发实验室，现已具备独有的AI内容生产体系，打造爆款标签。</p>
              </div>
          </div>
        </Section>

        {/* P4: Partners */}
        <Section id={SectionId.PARTNERS} className="bg-transparent">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-white">服务品牌</h2>
            <p className="text-brand-red/80 tracking-[0.5em] uppercase text-xs font-medium">Trusted Partners</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-6xl mx-auto px-4">
            {PARTNERS_LIST.map((partner, idx) => (
              <span 
                key={idx} 
                className="text-sm md:text-base text-gray-500 hover:text-white transition-colors duration-300 cursor-default font-light tracking-wide py-2"
              >
                {partner}
              </span>
            ))}
          </div>
        </Section>

        {/* P8: Contact */}
        <Section id={SectionId.CONTACT}>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-white">联系方式</h2>
            <p className="text-brand-red/80 tracking-[0.5em] uppercase text-xs font-medium">Contact Us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTACTS.map((contact, idx) => (
              <div key={idx} className="glass-card p-10 rounded-2xl text-center group transition-all duration-500 hover:bg-[#111116] relative overflow-hidden border-t-2 border-t-transparent hover:border-t-brand-red">
                <div className="relative z-10">
                  <div className="mb-8 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/5">
                       <MapPin className="text-gray-400 group-hover:text-brand-red w-6 h-6 transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-serif tracking-wide">{contact.city}</h3>
                  <p className="text-brand-red font-medium text-sm mb-8 tracking-widest uppercase">{contact.contactName}</p>
                  
                  <div className="space-y-4 text-sm text-gray-400 font-light">
                    <div className="flex items-center justify-center gap-3 hover:text-white transition-colors">
                      <Phone size={14} />
                      <span className="tracking-wider font-mono">{contact.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 hover:text-white transition-colors">
                      <Mail size={14} />
                      <a href={`mailto:${contact.email}`} className="">{contact.email}</a>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                     <div className="w-24 h-24 bg-white mx-auto p-1 rounded-lg">
                        <div className="w-full h-full bg-[#08080c] flex items-center justify-center">
                            <ExternalLink className="text-white w-6 h-6 opacity-30" />
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <footer className="py-16 bg-[#050508] border-t border-white/5 text-center text-gray-600 text-xs font-light tracking-widest relative z-10">
          <div className="container mx-auto px-6 flex flex-col items-center gap-4">
            <p className="opacity-80">Copyright © 2017-2025 不恭文化 All rights reserved.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 opacity-60">
               <span className="hover:text-gray-400 transition-colors cursor-pointer">京ICP备2021008895号-1</span>
               <span className="hidden md:inline w-px h-3 bg-gray-700"></span>
               <span className="hover:text-gray-400 transition-colors cursor-pointer">京公网安备11010502044367号</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;