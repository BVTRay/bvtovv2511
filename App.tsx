import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { SectionId } from './types';
import { TEAM_FOUNDERS, TEAM_CORE, BUSINESS_AREAS, PARTNERS_LIST, QUALIFICATIONS_LIST, CONTACTS } from './constants';
import { Award, CheckCircle, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-brand-dark text-white font-sans overflow-x-hidden">
      {/* Global Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[#050505]"></div>
         {/* Animated Blobs */}
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-red-900/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
         <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
         <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-purple-900/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
         
         {/* Noise Texture Overlay */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* P1: Hero */}
        <Hero />

        {/* P2: About - Enterprise Profile */}
        <Section id={SectionId.ABOUT} className="bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-gradient mb-2">
                <span className="text-red-700">企业</span>简介
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-red-800 to-transparent"></div>
              <div className="text-gray-300 leading-relaxed space-y-6 text-lg text-justify font-light">
                <p>
                  不恭文化成立于2017年，是一家专注于<span className="text-white font-medium">媒介融合探索</span>的综合内容服务商。
                </p>
                <p>
                  公司致力于在新的媒介环境下，依托与<span className="text-red-500 font-medium">中国传媒大学</span>的行业研究成果优势合作，运用中央广播电视总台、新华通讯社等央媒渠道资源，助力企业客户搭建融媒体架构，增强企业客户的内容生产力。
                </p>
                <p>
                  我们创建客户与目标受众间新的沟通方式，最终打造客户在内容生态下的话语体系。
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-red-900/20 blur-3xl rounded-full group-hover:bg-red-900/30 transition-all duration-500"></div>
              <div className="glass-card p-8 md:p-12 rounded-2xl relative z-10 border-l-4 border-l-red-800">
                 <h3 className="text-2xl font-bold mb-8 font-serif">我们的足迹</h3>
                 <div className="flex flex-col gap-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                    <div className="flex items-center gap-6 relative">
                      <div className="w-6 h-6 bg-black rounded-full border-2 border-red-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                         <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-xl text-white font-serif">2017 <span className="text-sm text-gray-400 font-sans ml-2">北京总部成立</span></span>
                    </div>
                    <div className="flex items-center gap-6 relative">
                      <div className="w-6 h-6 bg-black rounded-full border-2 border-red-700 flex items-center justify-center z-10">
                         <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                      </div>
                      <span className="text-xl text-white font-serif">2019 <span className="text-sm text-gray-400 font-sans ml-2">拓展深圳市场</span></span>
                    </div>
                    <div className="flex items-center gap-6 relative">
                      <div className="w-6 h-6 bg-black rounded-full border-2 border-red-900 flex items-center justify-center z-10">
                         <div className="w-2 h-2 bg-red-900 rounded-full"></div>
                      </div>
                      <span className="text-xl text-white font-serif">2024 <span className="text-sm text-gray-400 font-sans ml-2">组建南京团队</span></span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </Section>

        {/* P3: Qualifications */}
        <Section id={SectionId.QUALIFICATIONS} className="bg-white/[0.02]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-gradient">资质简介</h2>
            <p className="text-red-500 tracking-[0.3em] uppercase text-xs md:text-sm font-medium">Qualifications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {QUALIFICATIONS_LIST.map((qual, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-300 group min-h-[160px]">
                <Award className="w-8 h-8 text-red-600 mb-4 group-hover:text-red-400 transition-colors" />
                <span className="text-gray-200 font-light tracking-wide">{qual}</span>
              </div>
            ))}
          </div>

          <div className="glass-card p-10 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <Award size={200} />
            </div>
            <div className="flex flex-col md:flex-row gap-12 items-center justify-between relative z-10">
              <div className="space-y-6 md:w-2/3">
                <h3 className="text-2xl font-bold text-white font-serif border-b border-white/10 pb-4 inline-block">专业立身</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  公司成立以来以专业为立身之本，被评为<span className="text-white">国家高新技术企业</span>、中国广告行业优秀服务商。
                  先后获得广播电视节目制作经营许可证、营业性演出许可证。
                  通过国家ISO90001质量管理体系认证、环境管理体系认证、职业健康安全管理体系认证和信息管理技术认证。
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                 <CheckCircle className="w-24 h-24 text-red-500/80 drop-shadow-[0_0_20px_rgba(220,20,60,0.3)]" />
              </div>
            </div>
          </div>
        </Section>
        
        {/* P5 & P6: Core Team */}
        <Section id={SectionId.TEAM} className="bg-transparent">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-gradient">核心团队</h2>
            <p className="text-red-500 tracking-[0.3em] uppercase text-xs md:text-sm font-medium">Core Team</p>
          </div>

          {/* Founders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {TEAM_FOUNDERS.map((member, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[16/10] shadow-2xl">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[20%] contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-1 font-serif">{member.name} <span className="text-sm font-sans font-light text-red-400 ml-2 tracking-wider uppercase">{member.enName}</span></h3>
                  <p className="text-gray-300 font-medium tracking-wide">{member.title}</p>
                  <div className="h-[2px] w-12 bg-red-600 mt-4 transform translate-x-[-100%] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Directors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_CORE.map((member, idx) => (
              <div key={idx} className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-red-500/50 transition-colors shadow-lg">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h4 className="text-xl font-bold text-white mb-1 font-serif">{member.name}</h4>
                <p className="text-xs text-red-500 uppercase tracking-widest mb-3">{member.enName}</p>
                <p className="text-sm font-bold text-gray-300 mb-4">{member.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{member.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* P7: Business */}
        <Section id={SectionId.BUSINESS} className="bg-white/[0.02]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-gradient">业务简介</h2>
            <p className="text-red-500 tracking-[0.3em] uppercase text-xs md:text-sm font-medium">Main Business</p>
          </div>

          <div className="max-w-4xl mx-auto text-gray-400 text-center mb-16 space-y-4 text-lg font-light">
            <p>不恭文化主要创始人均来自<span className="text-white font-normal">中国传媒大学</span>。依托专业院校的资源优势，以专业和高效在业内享有卓越口碑。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {BUSINESS_AREAS.map((item, idx) => (
              <div key={idx} className="glass-card p-10 rounded-2xl relative overflow-hidden group hover:border-red-900/30 transition-colors">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 80, strokeWidth: 1 })}
                </div>
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 bg-white/5 rounded-lg text-red-500">
                     {item.icon}
                   </div>
                   <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors font-serif">{item.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed font-light relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Business Details highlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-2xl border-t-4 border-t-blue-900/50">
                 <h4 className="text-xl font-bold mb-4 text-white font-serif">新媒体创新</h4>
                 <p className="text-gray-400 text-sm font-light leading-relaxed">不恭文化是业内第一批涉足企业新媒体代运营业务的团队，早在2019年便入围巨量引擎全国品牌服务商TOP10。借助强大内容生成能力的优势，不恭文化帮助品牌在新媒体平台建立传播阵地。</p>
              </div>
              <div className="glass-card p-8 rounded-2xl border-t-4 border-t-purple-900/50">
                 <h4 className="text-xl font-bold mb-4 text-white font-serif">AI 实验室</h4>
                 <p className="text-gray-400 text-sm font-light leading-relaxed">人工智能时代来临，公司紧跟时代步伐建立AIGC内容研发实验室，现已具备独有的AI内容生产体系，多次用于企业对外宣传，成为爆款标签。</p>
              </div>
          </div>
        </Section>

        {/* P4: Partners */}
        <Section id={SectionId.PARTNERS} className="bg-transparent">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-gradient">服务品牌</h2>
            <p className="text-red-500 tracking-[0.3em] uppercase text-xs md:text-sm font-medium">Partners</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {PARTNERS_LIST.map((partner, idx) => (
              <div 
                key={idx} 
                className="px-6 py-3 glass-card rounded-full text-sm text-gray-400 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-default tracking-wide"
              >
                {partner}
              </div>
            ))}
          </div>
        </Section>

        {/* P8: Contact */}
        <Section id={SectionId.CONTACT} className="bg-black/40">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-gradient">联系方式</h2>
            <p className="text-red-500 tracking-[0.3em] uppercase text-xs md:text-sm font-medium">Contact Us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CONTACTS.map((contact, idx) => (
              <div key={idx} className="glass-card p-10 rounded-2xl text-center group hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-transparent hover:border-t-red-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                       <MapPin className="text-gray-300 group-hover:text-red-500 w-8 h-8 transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-serif">{contact.city}</h3>
                  <p className="text-lg font-medium text-gray-300 mb-6">{contact.contactName}</p>
                  
                  <div className="space-y-4 text-sm text-gray-400 font-light">
                    <div className="flex items-center justify-center gap-3">
                      <Phone size={16} className="text-red-500" />
                      <span className="tracking-wider">{contact.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Mail size={16} className="text-red-500" />
                      <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">{contact.email}</a>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                     <div className="w-28 h-28 bg-white mx-auto p-1 rounded-lg shadow-lg transform group-hover:scale-105 transition-transform">
                        {/* Placeholder QR Code */}
                        <div className="w-full h-full bg-brand-dark flex items-center justify-center">
                            <ExternalLink className="text-white w-8 h-8 opacity-50" />
                        </div>
                     </div>
                     <p className="mt-3 text-[10px] uppercase tracking-widest text-gray-500">WeChat</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <footer className="py-12 bg-black border-t border-white/5 text-center text-gray-600 text-xs font-light tracking-wider relative z-10">
          <p className="mb-2 uppercase">&copy; {new Date().getFullYear()} Bugong Culture. All rights reserved.</p>
          <p>京ICP备XXXXXXXX号</p>
        </footer>
      </div>
    </div>
  );
};

export default App;