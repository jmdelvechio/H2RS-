import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, ArrowRight, Users, Code, Cpu, BarChart, ChevronRight, Mail, Linkedin, MapPin, MessageCircle, Globe } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('pt'); // Estado do idioma atual: 'pt', 'en', 'es'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // DICIONÁRIO DE TRADUÇÕES (PT, EN, ES)
  const translations = {
    pt: {
      nav: {
        about: 'Sobre', leadership: 'Liderança', services: 'Serviços', diffs: 'Diferenciais', contact: 'Contato', cta: 'Falar com Consultor'
      },
      hero: {
        badge: 'Consultoria Estratégica',
        title1: 'Transformação',
        title2: 'Digital & Humana',
        desc: 'Apoiamos grandes empresas a conectar tecnologia, estratégia de RH e governança para escalar resultados e impulsionar o futuro do trabalho.',
        btnServices: 'Conheça Nossos Serviços',
        btnContact: 'Falar com Consultor',
        cardTitle: 'Skills-Based Organization',
        cardDesc: 'Implementamos estratégias focadas em acelerar competências e maximizar o ROI humano.'
      },
      about: {
        title: 'Sobre a H2RS',
        desc: <>Somos uma consultoria especializada em transformação digital e humana. A sigla <strong>H2RS</strong> reflete nossa missão de conectar o <strong>H</strong>umano (Human/HR) com <strong>R</strong>ecursos e <strong>S</strong>oluções Estratégicas através da tecnologia.</>,
        stat1: 'Anos de Experiência',
        stat2: 'Grandes Projetos',
        stat3: 'Visão Tech & People'
      },
      founders: {
        title: 'Nossa Liderança',
        desc: 'Conheça o time de especialistas que impulsiona a transformação executiva e o sucesso sustentável corporativo.',
        team: [
          {
            name: "Amanda Celebroni",
            role: "Co-Founder & Co-CEO",
            bio: "Com mais de 15 anos de atuação global em Governança de TI e Qualidade (ex-Novartis), lidera estratégias de mitigação de riscos e garantia da qualidade em implementações corporativas complexas.",
            linkedin: "https://www.linkedin.com/in/amanda-celebroni-8b462893/",
            image: "/amanda.jpg" // You can replace this with the exact filename if different
          },
          {
            name: "Marcelo Martins Ramos",
            role: "Co-Founder & Co-CEO",
            bio: "Executivo sênior com mais de 20 anos em Transformação de RH e Tecnologia (ex-IBM, Degreed e Santander). Especialista em ecossistemas Cloud, IA organizacional e estratégias de capital humano C-Level.",
            linkedin: "https://www.linkedin.com/in/mmramos2406/",
            image: "/marcelo.jpeg" 
          },
          {
            name: "João \nDel Vechio",
            role: "Co-Founder & COO",
            bio: "Líder global em Transformação e enablement de RH, adoção e Customer Success com mais de 15 anos de mercado (ex-Degreed, Vale, Smurfit WestRock). Experiente em gerenciar inovações e transformar a jornada do colaborador escalando inteligência artificial.",
            linkedin: "https://www.linkedin.com/in/joaovechio/",
            image: "/joao.jpg"
          }
        ]
      },
      servicesSection: {
        title: 'Nossas Soluções',
        desc: 'Atuamos de ponta a ponta, desde a estratégia até a implementação tecnológica focando sempre no impacto de negócio.',
        items: [
          {
            title: "Transformação de RH",
            desc: "Estratégia completa de RH, gestão de mudanças e roadmap para transformação digital de pessoas voltado para resultados.",
            points: ["Estratégia Executiva de RH", "Gestão de Mudanças Escalável", "Roadmap Digital"]
          },
          {
            title: "Tecnologia & Learning",
            desc: "Apoio consultivo estratégico na seleção de tecnologias (Tech Selection) e aceleração de ecossistemas de aprendizagem.",
            points: ["Tech Selection Independente", "Ecossistemas de Aprendizagem", "Gestão de Qualidade QA"]
          },
          {
            title: "Gestão & Projetos",
            desc: "Gerenciamento de programas complexos e globais, com governança rígida e gestão de riscos para grandes enterprise.",
            points: ["PMO Complexo e Global", "Governança Corporativa e Riscos", "Gestão de Projetos Ágil"]
          },
          {
            title: "Skills & Liderança",
            desc: "Transformação profunda para uma Skills Based Organization e programas de certificação voltados para liderança.",
            points: ["Skills Based Strategy Maker", "Capacitação de C-Level", "Certificação de Conhecimento"]
          }
        ]
      },
      diffs: {
        title: 'Por que a H2RS?',
        items: [
          {
            title: "Equipe de Elite (+50 anos)",
            desc: "Nossa equipe soma muita bagagem em transformação de RH, learning, implementação de sistemas (HCM, LMS, ERP) e gestão de mudanças. Trazemos a experiência prática de líderes que atuaram em gigantes como Novartis, Vale, Santander, IBM e Degreed."
          },
          {
            title: "Ecossistema Tecnológico Real",
            desc: "Dominamos as principais plataformas do mercado e aplicamos Inteligência Artificial em processos complexos. Utilizamos metodologias globais (Lean Six Sigma, COBIT, ITIL, SCRUM) para entregar robustez a empresas enterprise."
          },
          {
            title: "Visão 360",
            desc: "Não olhamos apenas para o código ou para o processo. Unimos essas vertentes como ferramentas de expansão de capital humano e de negócios."
          },
          {
            title: "Independência Analítica",
            desc: "Apoiamos processos de aquisição SaaS e tecnologias isentos de viés comercial, focando no ROI e na escalabilidade da sua corporação."
          },
          {
            title: "Engenharia de Risco",
            desc: "Desenho e liderança de roadmaps globais premissados pela eliminação de gargalos e proteção à marca em go-lives complexos."
          }
        ]
      },
      contact: {
        title: 'Vamos iniciar?',
        desc: 'Converse com nossos especialistas para diagnosticar os desafios estratégicos do seu capital humano.',
        name: 'Nome Completo',
        company: 'Empresa',
        email: 'Email Corporativo',
        message: 'Como podemos expandir seu negócio?',
        messagePlaceholder: 'Descreva brevemente seu contexto...',
        btn: 'Enviar Solicitação'
      },
      footer: {
        desc: 'Consultoria estratégica guiando as maiores enterprises na nova era digital e no desenvolvimento humano de ponta.',
        servicesTitle: 'Serviços Principais',
        contactTitle: 'Linha Direta',
        rights: 'Todos os direitos reservados.',
        privacy: 'Privacidade',
        terms: 'Termos de Serviço'
      },
      whatsappMsg: 'Olá! Sou executivo(a) e gostaria de agendar uma reunião de diagnóstico com a H2RS.'
    },
    en: {
      nav: { about: 'About', leadership: 'Leadership', services: 'Services', diffs: 'Why Us', contact: 'Contact', cta: 'Consult an Expert' },
      hero: {
        badge: 'Strategic Consulting', title1: 'Digital & Human', title2: 'Transformation',
        desc: 'We support large enterprises in connecting technology, HR strategy, and governance to scale results and build the future of work.',
        btnServices: 'Discover Our Services', btnContact: 'Talk on WhatsApp',
        cardTitle: 'Skills-Based Organization', cardDesc: 'We implement strategies focused on accelerating competencies and maximizing human ROI.'
      },
      about: {
        title: 'About H2RS',
        desc: <>We are a consulting firm specialized in digital and human transformation. <strong>H2RS</strong> connects <strong>H</strong>uman (HR) with <strong>R</strong>esources and Strategic <strong>S</strong>olutions via robust technology.</>,
        stat1: 'Years Experience', stat2: 'Enterprise Projects', stat3: 'Tech/People Vision'
      },
      founders: {
        title: 'Our Leadership',
        desc: 'Meet the team of elite experts driving executive transformation and sustainable corporate success.',
        team: [
          {
            name: "Amanda Celebroni",
            role: "Co-Founder & Co-CEO",
            bio: "With over 15 years of global IT Governance and Quality experience (ex-Novartis), leads risk mitigation and quality assurance strategies in complex enterprise implementations.",
            linkedin: "https://www.linkedin.com/in/amanda-celebroni-8b462893/",
            image: "/amanda.jpg"
          },
          {
            name: "Marcelo Martins Ramos",
            role: "Co-Founder & Co-CEO",
            bio: "Senior executive with 20+ years in HR Transformation and Technology (ex-IBM, Degreed, Santander). Specialist in Cloud ecosystems, organizational AI, and C-Level human capital strategies.",
            linkedin: "https://www.linkedin.com/in/mmramos2406/",
            image: "/marcelo.png"
          },
          {
            name: "João \nDel Vechio",
            role: "Co-Founder & COO",
            bio: "Global HR transformation and enablement, adoption and Customer Success leader with 15+ years of experience (ex-Degreed, Vale). Focused on enterprise innovation and scaling employee journey transformation through Artificial Intelligence.",
            linkedin: "https://www.linkedin.com/in/joaovechio/",
            image: "/joao.jpg"
          }
        ]
      },
      servicesSection: {
        title: 'Core Solutions', desc: 'End-to-end operation, from boardroom strategy to complex global technological deployments.',
        items: [
          { title: "HR Transformation", desc: "Comprehensive HR strategy, scalable change management, and digital turnaround roadmaps.", points: ["Executive HR Strategy", "Scalable Change Mgt", "Digital Turnaround"] },
          { title: "Tech & Learning Strategy", desc: "Consultative technological selection (Tech Selection) and corporate learning ecosystem acceleration.", points: ["Independent Tech Selection", "Enterprise Ecosystems", "QA Management"] },
          { title: "Complex PMO & Gov", desc: "Global program management with rigorous governance and robust risk mitigation.", points: ["Global PMO", "Corporate Governance", "Agile Deployment"] },
          { title: "Skills & Executive Training", desc: "Deep transformation to a Skills Based Organization and intensive C-Level capability building.", points: ["Skills Strategy", "C-Level Training", "Knowledge Transfer"] }
        ]
      },
      diffs: {
        title: 'Why choose H2RS?',
        items: [
          { title: "Elite Command Team", desc: "Drawn from global giants (Novartis, Vale, IBM). 50+ years combined executive transformation." },
          { title: "True Tech Ecosystems", desc: "Mastery of top-tier platforms (Workday, SAP) paired with Six Sigma, SCRUM, and AI integration." },
          { title: "360-Degree Executive Vision", desc: "Aligning human capital tech with measurable business expansion." },
          { title: "Unbiased SaaS Acquisition", desc: "100% independent vendor selection focused explicitly on enterprise ROI." },
          { title: "Surgical Risk Engineering", desc: "Flawless go-live execution for highly-sensitive, global matrixed environments." }
        ]
      },
      contact: { title: "Ready to scale?", desc: 'Engage our senior partners to diagnose your strategic challenges.', name: 'Full Name', company: 'Company', email: 'Corporate Email', message: 'How can we unlock your growth?', messagePlaceholder: 'Briefly layout your current scenario...', btn: 'Request Consultation' },
      footer: { desc: 'Strategic consulting guiding top enterprises through complex human and digital evolutions.', servicesTitle: 'Key Solutions', contactTitle: 'Direct Line', rights: 'All rights reserved.', privacy: 'Privacy Policy', terms: 'Terms of Use' },
      whatsappMsg: 'Hello, I am reaching out to schedule an executive consultation with H2RS.'
    },
    es: {
      nav: { about: 'Nosotros', leadership: 'Liderazgo', services: 'Soluciones', diffs: 'Por qué Elegirnos', contact: 'Contacto', cta: 'Consultar Experto' },
      hero: {
        badge: 'Consultoría Estratégica', title1: 'Transformación', title2: 'Digital y Humana',
        desc: 'Potenciamos a grandes empresas conectando tecnología, estrategia de RRHH y gobernanza para escalar resultados y moldear el futuro del trabajo.',
        btnServices: 'Ver Soluciones', btnContact: 'Hablar por WhatsApp',
        cardTitle: 'Organización Basada en Skills', cardDesc: 'Estrategias orientadas a acelerar competencias corporativas y maximizar el ROI humano.'
      },
      about: {
        title: 'Sobre H2RS', desc: <>Somos consultores expertos en transformación. <strong>H2RS</strong> conecta lo <strong>H</strong>umano con <strong>R</strong>ecursos y <strong>S</strong>oluciones pivotales tecnológicamente.</>,
        stat1: 'Años de Experiencia', stat2: 'Proyectos Enterprise', stat3: 'Visión Integral'
      },
      founders: {
        title: 'Nuestro Liderazgo',
        desc: 'Conozca al equipo de expertos que impulsa la transformación ejecutiva y el éxito empresarial sostenible.',
        team: [
          {
            name: "Amanda Celebroni",
            role: "Co-Founder & Co-CEO",
            bio: "Con más de 15 años de experiencia global en Gobierno y Calidad de TI (ex-Novartis), lidera estrategias de mitigación de riesgos y aseguramiento de calidad en implementaciones complejas.",
            linkedin: "https://www.linkedin.com/in/amanda-celebroni-8b462893/",
            image: "/amanda.jpg"
          },
          {
            name: "Marcelo Martins Ramos",
            role: "Co-Founder & Co-CEO",
            bio: "Ejecutivo sénior con más de 20 años en Transformación de RRHH y Tecnología (ex-IBM, Degreed Santander). Especialista en ecosistemas Cloud, IA organizacional y estrategias C-Level.",
            linkedin: "https://www.linkedin.com/in/mmramos2406/",
            image: "/marcelo.png"
          },
          {
            name: "João \nDel Vechio",
            role: "Co-Founder & COO",
            bio: "Líder global en Transformación y enablement de HHRR, adopción y Customer Success con más de 15 años de experiencia (ex-Degreed, Vale). Enfocado en escalar la innovación y transformar la experiencia del empleado usando IA.",
            linkedin: "https://www.linkedin.com/in/joaovechio/",
            image: "/joao.jpg"
          }
        ]
      },
      servicesSection: {
        title: 'Soluciones Core', desc: 'Despliegues end-to-end: desde la estrategia directiva hasta implementaciones globales hiper-complejas.',
        items: [
          { title: "Transformación de RRHH", desc: "Estrategia de RRHH de alto nivel, gestión del cambio escalable y roadmaps de transformación.", points: ["Estrategia Nivel-C", "Change Management", "Roadmaps Digitales"] },
          { title: "Tech Strategy", desc: "Selección de tecnologías imparcial (Tech Selection) y aceleración de ecosistemas de aprendizaje corporativo.", points: ["Tech Selection Imparcial", "Ecosistemas SaaS", "Gestión de QA"] },
          { title: "PMO Global & Governance", desc: "Gestión de programas internacionales, gobernanza estricta y control de riesgo quirúrgico.", points: ["PMO Complejo", "Gobernanza Operativa", "Control de Riesgos"] },
          { title: "Skills y Liderazgo", desc: "Migración a una Organización Basada en Skills e incubación de líderes ejecutivos.", points: ["Estrategia de Skills", "Entrenamiento Directivo", "Certificaciones"] }
        ]
      },
      diffs: {
        title: '¿Por Qué H2RS?',
        items: [
          { title: "Élite Ejecutiva", desc: "Más de 50 años en posiciones directivas de transformación global (Novartis, Vale, IBM)." },
          { title: "Ecosistemas Reales SaaS", desc: "Dominio de líderes (Workday, SAP) aplicando Lean Six Sigma e IA estructural." },
          { title: "Visión Corporativa 360", desc: "Alineamos sistemas de talento humano directamente a parámetros de expansión comercial." },
          { title: "Independencia Vendor-Neutral", desc: "Asesoría SaaS centrada en maximizar la escalabilidad organizativa, sin sesgo de ventas." },
          { title: "Ingeniería de Riesgo", desc: "Liderazgo en roadmaps globales con foco obsesivo en protección de marca y adopción limpia." }
        ]
      },
      contact: { title: '¿Comenzamos?', desc: 'Agende una sesión diagnóstico con nuestros directores.', name: 'Nombre Completo', company: 'Compañía', email: 'Correo Corporativo', message: '¿Cómo escalamos su operación?', messagePlaceholder: 'Contexto de negocio...', btn: 'Enviar Solicitud' },
      footer: { desc: 'Consultoría estratégica que guía a corporaciones globales a través de la evolución digital y talento.', servicesTitle: 'Servicios de Impacto', contactTitle: 'Línea de Contacto', rights: 'Todos los derechos reservados.', privacy: 'Privacidad', terms: 'Términos' },
      whatsappMsg: 'Hola, soy ejecutivo y quisiera agendar un diagnóstico con los consultores de H2RS.'
    }
  };

  const t = translations[lang];

  const whatsappNumber = "5511988931802";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.whatsappMsg)}`;

  const serviceIcons = [
    <Users className="w-8 h-8 text-blue-600" />,
    <Cpu className="w-8 h-8 text-blue-600" />,
    <BarChart className="w-8 h-8 text-blue-600" />,
    <Code className="w-8 h-8 text-blue-600" />
  ];

  return (
    <div className="font-sans text-slate-800 bg-white">
      
      {/* NAVBAR (Google Inspired Floating Pill) */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${scrolled ? 'top-4' : 'top-6'}`}>
        <div className="max-w-[1400px] mx-auto px-6 h-36 flex justify-between items-center relative">
          
          {/* Logo on Left for Mobile, Hidden on Desktop */}
          <a href="#" className="flex md:hidden items-center z-10 w-36" title="Início">
            <img src="/logo-h2rs.png" alt="H2RS Logo" className="h-[120px] w-auto object-contain" />
          </a>
          
          {/* Left spacer for Desktop symmetry relative to Logo */}
          <div className="hidden md:block w-40"></div>

          {/* Center Glass Pill - Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2 px-6 lg:px-10 h-14 bg-white/70 backdrop-blur-2xl rounded-full border border-white/50 shadow-[0_4px_30px_rgb(0,0,0,0.06)] backdrop-saturate-[180%]">
            <a href="#sobre" className="text-[13px] font-bold tracking-wide text-slate-900 hover:text-blue-600 uppercase transition-colors px-3 py-2 rounded-full hover:bg-slate-100/50">{t.nav.about}</a>
            <a href="#lideranca" className="text-[13px] font-bold tracking-wide text-slate-900 hover:text-blue-600 uppercase transition-colors px-3 py-2 rounded-full hover:bg-slate-100/50">{t.nav.leadership}</a>
            <a href="#servicos" className="text-[13px] font-bold tracking-wide text-slate-900 hover:text-blue-600 uppercase transition-colors px-3 py-2 rounded-full hover:bg-slate-100/50">{t.nav.services}</a>
            <a href="#diferenciais" className="text-[13px] font-bold tracking-wide text-slate-900 hover:text-blue-600 uppercase transition-colors px-3 py-2 rounded-full hover:bg-slate-100/50">{t.nav.diffs}</a>
            <a href="#contato" className="text-[13px] font-bold tracking-wide text-slate-900 hover:text-blue-600 uppercase transition-colors px-3 py-2 rounded-full hover:bg-slate-100/50">{t.nav.contact}</a>
            
            {/* Divider */}
            <div className="w-px h-5 bg-slate-300 mx-2"></div>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2 text-[11px] font-black tracking-widest pl-2">
              <button onClick={() => setLang('pt')} className={`transition-all hover:text-pink-500 ${lang === 'pt' ? 'text-blue-600' : 'text-slate-400'}`}>PT</button>
              <button onClick={() => setLang('en')} className={`transition-all hover:text-pink-500 ${lang === 'en' ? 'text-blue-600' : 'text-slate-400'}`}>EN</button>
              <button onClick={() => setLang('es')} className={`transition-all hover:text-pink-500 ${lang === 'es' ? 'text-blue-600' : 'text-slate-400'}`}>ES</button>
            </div>
          </div>

          {/* Separated Logo on Right (Google Layout) */}
          <a href="#" className="hidden md:flex items-center justify-end z-10 hover:opacity-80 transition-opacity w-48" title="Início">
            <img src="/logo-h2rs.png" alt="H2RS Logo" className="h-[120px] lg:h-36 w-auto object-contain" />
          </a>

          {/* Mobile Menu Button - Right */}
          <div className="md:hidden flex items-center space-x-3 z-20">
            <button className="p-3 bg-white/70 backdrop-blur-2xl rounded-full shadow-[0_4px_30px_rgb(0,0,0,0.06)] border border-white/50 text-slate-900" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full mt-4 px-4 z-50">
             <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-8 flex flex-col space-y-5 shadow-[0_20px_40px_rgb(0,0,0,0.1)] border border-white/50">
                <a href="#sobre" className="text-slate-900 font-bold text-lg" onClick={toggleMenu}>{t.nav.about}</a>
                <a href="#lideranca" className="text-slate-900 font-bold text-lg" onClick={toggleMenu}>{t.nav.leadership}</a>
                <a href="#servicos" className="text-slate-900 font-bold text-lg" onClick={toggleMenu}>{t.nav.services}</a>
                <a href="#diferenciais" className="text-slate-900 font-bold text-lg" onClick={toggleMenu}>{t.nav.diffs}</a>
                <a href="#contato" className="text-slate-900 font-bold text-lg" onClick={toggleMenu}>{t.nav.contact}</a>
                <div className="pt-6 mt-2 border-t border-slate-100 flex space-x-6 text-sm">
                  <button onClick={() => {setLang('pt'); toggleMenu();}} className={lang === 'pt' ? 'text-blue-600 font-black' : 'text-slate-500 font-bold'}>PT</button>
                  <button onClick={() => {setLang('en'); toggleMenu();}} className={lang === 'en' ? 'text-blue-600 font-black' : 'text-slate-500 font-bold'}>EN</button>
                  <button onClick={() => {setLang('es'); toggleMenu();}} className={lang === 'es' ? 'text-blue-600 font-black' : 'text-slate-500 font-bold'}>ES</button>
                </div>
             </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION (Google Aesthetic: White Bg, Massive Text, Fluid Vector Shape) */}
      <section className="relative pt-32 pb-20 md:pt-60 md:pb-40 overflow-hidden bg-white">
        
        {/* Right Abstract Vector Decor */}
        <div className="absolute top-0 right-0 w-full md:w-[65%] h-full opacity-[0.4] md:opacity-[0.85] pointer-events-none origin-top-right transform translate-x-20 -translate-y-20 scale-125 md:scale-100">
           <svg viewBox="0 0 800 800" className="w-full h-full object-cover">
             {/* Deep Blue Shape */}
             <path fill="#2E5BFF" d="M400,0 C650,50 800,200 800,400 C800,600 650,750 400,800 C150,800 0,650 0,400 C0,150 150,0 400,0 Z" opacity="0.9" style={{ transform: 'scale(1.2) translate(100px, -50px)' }}/>
             {/* Pink Shape */}
             <path fill="#eec6ce" d="M500,100 C700,150 750,300 700,500 C650,700 450,750 250,600 C50,450 100,200 300,150 C400,125 450,100 500,100 Z" opacity="0.95" style={{ transform: 'scale(1.4) translate(150px, 80px)' }}/>
           </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 lg:col-span-7">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[0.95] text-slate-900 mb-8 font-sans">
              <span className="block">{t.hero.title1}</span>
              <span className="text-[#F18EA4]">{t.hero.title2}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl leading-[1.6] font-medium">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="#servicos" className="px-10 py-5 rounded-full font-bold tracking-wide text-center transition-all bg-[#0d34c1] text-white hover:bg-[#204cef] hover:shadow-xl hover:-translate-y-0.5 text-lg">
                {t.hero.btnServices}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION (Clean Typography) */}
      <section id="sobre" className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-10 text-slate-900 tracking-tight">{t.about.title}</h2>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              {t.about.desc}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-10 border-t border-slate-200 pt-10 md:pt-16">
            <div>
              <h3 className="text-6xl font-black text-[#2E5BFF] mb-4 tracking-tighter">+15</h3>
              <p className="text-slate-500 font-bold uppercase tracking-wider text-sm">{t.about.stat1}</p>
            </div>
            <div>
              <h3 className="text-6xl font-black text-[#2E5BFF] mb-4 tracking-tighter">Top</h3>
              <p className="text-slate-500 font-bold uppercase tracking-wider text-sm">{t.about.stat2}</p>
            </div>
            <div>
              <h3 className="text-6xl font-black text-[#2E5BFF] mb-4 tracking-tighter">360º</h3>
              <p className="text-slate-500 font-bold uppercase tracking-wider text-sm">{t.about.stat3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS SECTION (Google Aesthetic cards) */}
      <section id="lideranca" className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900">{t.founders.title}</h2>
            <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
              {t.founders.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.founders.team.map((founder, index) => (
              <div key={index} className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col group">
                <div className="aspect-[3/4] md:aspect-[4/5] w-full bg-slate-100 relative overflow-hidden">
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  {/* Subtle gradient overlay at bottom of image to ensure smooth transition */}
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/5 to-transparent"></div>
                </div>
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-black mb-1 text-slate-900 tracking-tight whitespace-pre-line">{founder.name}</h3>
                  <p className="text-slate-500 font-bold uppercase tracking-wider text-xs mb-4">{founder.role}</p>
                  <p className="text-slate-600 leading-relaxed text-sm font-light mb-6 flex-grow">
                    {founder.bio}
                  </p>
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-auto">
                    <Linkedin className="w-6 h-6 text-[#2E5BFF] hover:text-[#0d34c1] transition-colors" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION (Soft pill cards) */}
      <section id="servicos" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-slate-900">{t.servicesSection.title}</h2>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              {t.servicesSection.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.servicesSection.items.map((service, index) => (
              <div key={index} className="bg-white p-8 md:p-14 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 group">
                <div className="w-16 h-16 rounded-[1.25rem] bg-slate-50 flex items-center justify-center mb-8 transition-all duration-500">
                  {React.cloneElement(serviceIcons[index], { className: "w-8 h-8 text-slate-400 group-hover:text-[#2E5BFF] transition-colors" })}
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-slate-900 tracking-tight">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                  {service.desc}
                </p>
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  {service.points.map((point, i) => (
                    <div key={i} className="flex items-center text-sm font-semibold text-slate-700">
                      <ChevronRight className="w-4 h-4 text-[#F18EA4] mr-2" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS SECTION */}
      <section id="diferenciais" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight text-slate-900">{t.diffs.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <div className="bg-[#f0f3fa] p-8 md:p-14 rounded-[2rem]">
              <h4 className="font-black text-2xl md:text-3xl mb-4 text-slate-900 tracking-tight">{t.diffs.items[0].title}</h4>
              <p className="text-slate-600 text-lg leading-relaxed font-light">{t.diffs.items[0].desc}</p>
            </div>
            <div className="bg-[#fcf3f5] p-8 md:p-14 rounded-[2rem]">
              <h4 className="font-black text-2xl md:text-3xl mb-4 text-slate-900 tracking-tight">{t.diffs.items[1].title}</h4>
              <p className="text-slate-600 text-lg leading-relaxed font-light">{t.diffs.items[1].desc}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 md:p-8 rounded-[2rem] border border-slate-200">
              <h4 className="font-black text-xl mb-3 text-slate-900">{t.diffs.items[2].title}</h4>
              <p className="text-slate-600 text-base font-light">{t.diffs.items[2].desc}</p>
            </div>
            <div className="p-6 md:p-8 rounded-[2rem] border border-slate-200">
              <h4 className="font-black text-xl mb-3 text-slate-900">{t.diffs.items[3].title}</h4>
              <p className="text-slate-600 text-base font-light">{t.diffs.items[3].desc}</p>
            </div>
            <div className="p-6 md:p-8 rounded-[2rem] border border-slate-200">
              <h4 className="font-black text-xl mb-3 text-slate-900">{t.diffs.items[4].title}</h4>
              <p className="text-slate-600 text-base font-light">{t.diffs.items[4].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contato" className="py-20 md:py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900">{t.contact.title}</h2>
            <p className="text-xl text-slate-600 font-light">
              {t.contact.desc}
            </p>
          </div>

          <form action="https://formsubmit.co/marcelo.martins@h2rsconsulting.com" method="POST" className="space-y-6 bg-white p-6 sm:p-10 md:p-14 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100">
            <input type="hidden" name="_subject" value="Novo Contato (Executivo) via Site H2RS!" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t.contact.name}</label>
                <input type="text" name="nome" required className="w-full px-5 py-4 bg-slate-50 rounded-xl focus:bg-white border border-transparent focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t.contact.company}</label>
                <input type="text" name="empresa" required className="w-full px-5 py-4 bg-slate-50 rounded-xl focus:bg-white border border-transparent focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t.contact.email}</label>
              <input type="email" name="email" required className="w-full px-5 py-4 bg-slate-50 rounded-xl focus:bg-white border border-transparent focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t.contact.message}</label>
              <textarea rows="4" name="mensagem" required className="w-full px-5 py-4 bg-slate-50 rounded-xl focus:bg-white border border-transparent focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none font-medium" placeholder={t.contact.messagePlaceholder}></textarea>
            </div>
            <button type="submit" className="w-full py-5 mt-4 rounded-full text-white font-bold text-lg hover:shadow-lg transition-all bg-[#0d34c1] hover:bg-[#204cef] hover:-translate-y-0.5 mt-8">
              {t.contact.btn}
            </button>
          </form>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgb(37,211,102,0.5)] transition-all hover:-translate-y-1 z-50 flex items-center justify-center group"
        title="WhatsApp Executivo"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.031 0C5.385 0 0 5.384 0 12.031c0 2.658.85 5.158 2.38 7.26l-1.558 5.688 5.824-1.528A11.97 11.97 0 0012.031 24c6.646 0 12.03-5.385 12.03-12.03S18.677 0 12.031 0zm0 21.968c-2.193 0-4.34-.589-6.22-1.704l-.446-.265-4.237 1.112 1.132-4.133-.29-.462A9.914 9.914 0 012.064 12.03c0-5.498 4.475-9.973 9.967-9.973 5.492 0 9.967 4.475 9.967 9.973 0 5.497-4.475 9.973-9.967 9.973zm5.474-7.462c-.3-.15-1.776-.877-2.05-.978-.275-.1-.475-.15-.675.15-.2.3-.775.978-.95 1.178-.175.2-.35.225-.65.075-1.393-.7-2.616-1.59-3.6-2.625-.494-.52-.865-1.1-1.1-1.725-.075-.2 0-.3.15-.45.138-.138.3-.35.45-.525.15-.175.2-.3.3-.5s-.05-.375-.125-.525c-.075-.15-.675-1.625-.925-2.225-.243-.585-.49-.505-.675-.515-.175-.01-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.115 3.228 5.122 4.525 2.158.932 2.964.93 3.615.828.735-.116 2.375-.975 2.7-1.925.325-.95.325-1.75.225-1.925-.1-.175-.375-.275-.675-.425z"/>
        </svg>
      </a>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 md:gap-12 mb-12 border-b border-slate-800 pb-12 md:pb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="inline-block hover:opacity-90 transition-opacity">
              <img src="/h2rs_favicon.png" alt="H2RS Logo" className="h-16 w-auto object-contain mb-6 bg-white rounded-lg p-3" />
            </a>
            <p className="text-sm max-w-sm mb-6 leading-relaxed font-light text-slate-500">
              {t.footer.desc}
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.031 0C5.385 0 0 5.384 0 12.031c0 2.658.85 5.158 2.38 7.26l-1.558 5.688 5.824-1.528A11.97 11.97 0 0012.031 24c6.646 0 12.03-5.385 12.03-12.03S18.677 0 12.031 0zm0 21.968c-2.193 0-4.34-.589-6.22-1.704l-.446-.265-4.237 1.112 1.132-4.133-.29-.462A9.914 9.914 0 012.064 12.03c0-5.498 4.475-9.973 9.967-9.973 5.492 0 9.967 4.475 9.967 9.973 0 5.497-4.475 9.973-9.967 9.973zm5.474-7.462c-.3-.15-1.776-.877-2.05-.978-.275-.1-.475-.15-.675.15-.2.3-.775.978-.95 1.178-.175.2-.35.225-.65.075-1.393-.7-2.616-1.59-3.6-2.625-.494-.52-.865-1.1-1.1-1.725-.075-.2 0-.3.15-.45.138-.138.3-.35.45-.525.15-.175.2-.3.3-.5s-.05-.375-.125-.525c-.075-.15-.675-1.625-.925-2.225-.243-.585-.49-.505-.675-.515-.175-.01-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.115 3.228 5.122 4.525 2.158.932 2.964.93 3.615.828.735-.116 2.375-.975 2.7-1.925.325-.95.325-1.75.225-1.925-.1-.175-.375-.275-.675-.425z"/></svg>
              </a>
              <a href="mailto:marcelo.martins@h2rsconsulting.com" className="text-slate-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-6">{t.footer.servicesTitle}</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#servicos" className="hover:text-white transition-colors text-slate-500">{t.servicesSection.items[0].title}</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors text-slate-500">{t.servicesSection.items[1].title}</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors text-slate-500">{t.servicesSection.items[2].title}</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors text-slate-500">{t.servicesSection.items[3].title}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-6">{t.footer.contactTitle}</h4>
            <ul className="space-y-4 text-sm font-light text-slate-500">
              <li className="flex items-start"><MessageCircle className="w-4 h-4 mr-3 mt-0.5 shrink-0" /> <span>+55 11 98893-1802</span></li>
              <li className="flex items-start"><Mail className="w-4 h-4 mr-3 mt-0.5 shrink-0" /> <span className="break-all">marcelo.martins@h2rsconsulting.com</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs font-light text-slate-600">
          <p>&copy; {new Date().getFullYear()} H2RS Consultoria. {t.footer.rights}</p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
