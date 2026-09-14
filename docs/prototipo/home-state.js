
const CX = 320, CY = 280;
const NODES = [
  { label: 'Marketplaces', icon: 'store', x: 320, y: 70 },
  { label: 'Loja própria', icon: 'shopping-bag', x: 497, y: 132 },
  { label: 'Precificação', icon: 'tag', x: 570, y: 280 },
  { label: 'Estoque', icon: 'boxes', x: 497, y: 428 },
  { label: 'Logística', icon: 'truck', x: 320, y: 490 },
  { label: 'ERP', icon: 'database', x: 143, y: 428 },
  { label: 'Financeiro', icon: 'wallet', x: 70, y: 280 },
  { label: 'Dados', icon: 'bar-chart-3', x: 143, y: 132 },
].map((n, i) => ({ ...n, len: Math.round(Math.hypot(n.x - CX, n.y - CY)), delay: (0.15 + i * 0.12).toFixed(2) + 's' }));

const SLIDES = [
  ['Margem', 'O faturamento sobe e o lucro não aparece.', 'Precificação por SKU com taxa, frete, imposto e ads dentro da conta. Margem real, por canal, toda semana.'],
  ['Anúncios', 'Foto ruim, ficha incompleta, anúncio que ninguém vê.', 'Mídia de produto, ficha técnica e catálogo produzidos por SKU, no padrão de cada canal, com meta de posição.'],
  ['Ads', 'Verba que some sem retorno claro.', 'Campanha por objetivo, ACOS meta e revisão semanal.'],
  ['Canais', 'Dependência de um marketplace só.', 'Expansão planejada para Amazon, Shopee, TikTok Shop e loja própria, com estoque e preço integrados.'],
  ['Estoque', 'Capital parado num canto e ruptura no outro.', 'Curva ABC, reposição com previsão de venda e giro acompanhado.'],
  ['Caixa', 'Vende muito e não sabe se sobra.', 'Fluxo de caixa semanal e DRE por canal.'],
  ['Sistema', 'Planilha, ERP e marketplace que não conversam.', 'ERP integrado, automações e um painel só.'],
  ['Burocracia', 'Empresa, imposto e marca travando a operação.', 'Abertura, regime tributário e registro no INPI conduzidos com contador e advogados parceiros.'],
];
const pad = n => String(n).padStart(2, '0');
const MENUS = {
  sol: { heading: 'Soluções', links: [
    { icon: 'message-square', title: 'Mentoria para Marketplaces', sub: 'Acompanhamento individual para vender mais e organizar a operação. A gente orienta, você executa.', href: 'Em breve.dc.html' },
    { icon: 'shopping-bag', title: 'Criação de E-commerce', sub: 'Loja própria em Shopify, WooCommerce, NuvemShop ou Tray, integrada ao seu ERP.', href: 'Em breve.dc.html' },
    { icon: 'layout-dashboard', title: 'Gestão de E-commerce', badge: '360', sub: 'Marketing, ads, operação e processos da sua loja própria, com acompanhamento contínuo. Sob medida com a sua necessidade.', href: 'Em breve.dc.html' },
    { icon: 'pen-tool', title: 'Construção de Marca', sub: 'Branding, identidade visual, logo e registro no INPI.', href: 'Em breve.dc.html' },
  ] },
  can: { heading: 'Canais', links: [
    { img: 'assets/marketplaces/mercado-livre-mark-mono-dark.svg', title: 'Mercado Livre', sub: 'Catálogo, reputação, Full e Ads.', href: 'Em breve.dc.html' },
    { img: 'assets/marketplaces/shopee-mark.svg', title: 'Shopee', sub: 'Taxas, frete e estrutura de anúncios.', href: 'Em breve.dc.html' },
    { img: 'assets/marketplaces/amazon-mark.svg', title: 'Amazon', sub: 'FBA, Buy Box e catálogo.', href: 'Em breve.dc.html' },
    { img: 'assets/marketplaces/tiktok-mono.svg', title: 'TikTok Shop', sub: 'Conteúdo, lives e afiliados.', href: 'Em breve.dc.html' },
    { icon: 'store', title: 'Loja própria', sub: 'Tráfego, conversão e integração com marketplaces.', href: 'Em breve.dc.html' },
  ] },
  fer: { heading: 'Ferramentas', links: [
    { featured: true, title: 'Metri Hub', sub: 'Ferramenta de gestão e diagnóstico de e-commerce', href: 'https://metrihub.com.br' },
    { icon: 'calculator', title: 'Calculadora de Preços', sub: 'Margem real por marketplace. Grátis, sem cadastro.', href: 'Em breve.dc.html' },
  ] },
};
const NAV = [
  { key: 'sol', label: 'Soluções', href: 'Em breve.dc.html' },
  { key: 'can', label: 'Canais', href: 'Em breve.dc.html' },
  { key: 'fer', label: 'Ferramentas', href: 'Em breve.dc.html' },
  { label: 'Blog', href: 'Em breve.dc.html' },
  { label: 'Contato', href: '#diagnostico' },
];
const POSTS = [
  ['Margem', 'Como saber quanto realmente sobra por venda no Mercado Livre', '08 set 2026', '7 min', 'Etiquetas'],
  ['Loja própria', 'Shopify, NuvemShop ou Tray: o que pesa na escolha de quem já vende em marketplace', '01 set 2026', '9 min', 'Tela de checkout'],
  ['ERP', 'Migrar de sistema sem parar a operação: o checklist que usamos', '25 ago 2026', '6 min', 'Estoque'],
  ['Anúncios', 'Por que um anúncio bom não aparece, e o que revisar toda semana', '18 ago 2026', '5 min', 'Tela de anúncio'],
  ['Caixa', 'DRE por canal: o relatório que muda a conversa sobre crescimento', '11 ago 2026', '8 min', 'Mesa de operação'],
  ['Estoque', 'Curva ABC na prática: reposição com previsão de venda', '04 ago 2026', '6 min', 'Prateleiras'],
];
const COOKIE_KEY = 'eh-cookie-consent';
const COOKIE_TTL_MS = 365 * 24 * 60 * 60 * 1000;
const CAL_WEEK = [
  { wd: 'DOM', d: 13 },
  { wd: 'SEG', d: 14 },
  { wd: 'TER', d: 15 },
  { wd: 'QUA', d: 16 },
  { wd: 'QUI', d: 17, selected: true },
  { wd: 'SEX', d: 18 },
  { wd: 'SAB', d: 19 },
];
const CAL_SLOTS = ['09:00', '10:00', '11:30', '14:00', '15:30', '16:30'];
const CAL_SELECTED_SLOT = '11:30';

const LEADS_KEY = 'escalahub_leads';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

class Component extends DCLogic {
  state = { active: null, hover: null, touch: null, bump: false, slide: 0, fade: false, menu: null, barOpen: true, cookieVisible: false, modalOpen: false, leadBlog: { v: '', status: 'idle', msg: '' } };
  setLead(k, patch) { this.setState(s => ({ [k]: Object.assign({}, s[k], patch) })); }
  leadChange(k, e) {
    const v = e.target.value;
    this.setState(s => ({ [k]: Object.assign({}, s[k], { v: v, status: s[k].status === 'idle' ? 'idle' : 'idle', msg: '' }) }));
  }
  leadBlur(k) {
    const f = this.state[k];
    if (f.v && !EMAIL_RE.test(f.v.trim())) this.setLead(k, { status: 'error', msg: 'Digite um e-mail válido.' });
  }
  leadSubmit(k, origem) {
    const f = this.state[k];
    const email = (f.v || '').trim();
    if (f.status === 'sending') return;
    if (!EMAIL_RE.test(email)) { this.setLead(k, { status: 'error', msg: 'Digite um e-mail válido.' }); return; }
    let list = [];
    try { list = JSON.parse(localStorage.getItem(LEADS_KEY) || '[]') || []; } catch (e) { list = []; }
    if (list.some(l => l && l.email === email && l.origem === origem)) { this.setLead(k, { status: 'dup', msg: 'Esse e-mail já está na lista.' }); return; }
    this.setLead(k, { status: 'sending', msg: '' });
    setTimeout(() => {
      try {
        list.push({ email: email, origem: origem, data: new Date().toISOString() });
        localStorage.setItem(LEADS_KEY, JSON.stringify(list));
      } catch (e) {}
      this.setLead(k, { status: 'success', msg: '' });
    }, 600);
  }
  leadReset(k) { this.setState({ [k]: { v: '', status: 'idle', msg: '' } }); }
  leadVals(k, origem, prefix) {
    const f = this.state[k];
    const out = {};
    out[prefix + 'Value'] = f.v;
    out[prefix + 'Change'] = e => this.leadChange(k, e);
    out[prefix + 'Blur'] = () => this.leadBlur(k);
    out[prefix + 'Key'] = e => { if (e.key === 'Enter') { e.preventDefault(); this.leadSubmit(k, origem); } };
    out[prefix + 'Submit'] = () => this.leadSubmit(k, origem);
    out[prefix + 'Sending'] = f.status === 'sending';
    out[prefix + 'Done'] = f.status === 'success';
    out[prefix + 'FormVisible'] = f.status !== 'success';
    out[prefix + 'Border'] = f.status === 'error' ? '#E5484D' : '#2A2A2E';
    out[prefix + 'Msg'] = f.msg;
    out[prefix + 'MsgColor'] = f.status === 'error' ? '#E5484D' : '#5C5B57';
    out[prefix + 'BtnOpacity'] = f.status === 'sending' ? 0.7 : 1;
    out[prefix + 'Reset'] = () => this.leadReset(k);
    return out;
  }
  closeBar = () => { try { sessionStorage.setItem('eh-bar-closed', '1'); } catch (e) {} this.setState({ barOpen: false }); };
  openModal = () => this.setState({ modalOpen: true, calLoaded: false });
  closeModal = () => this.setState({ modalOpen: false });
  calOnLoad = () => this.setState({ calLoaded: true });
  openMob = () => this.setState({ mobOpen: true });
  closeMob = () => this.setState({ mobOpen: false });
  openModalMob = () => this.setState({ mobOpen: false, modalOpen: true, calLoaded: false });
  onEsc = e => { if (e.key !== 'Escape') return; if (this.state.modalOpen) this.setState({ modalOpen: false }); else if (this.state.mobOpen) this.setState({ mobOpen: false }); };
  stopClick = e => e.stopPropagation();
  acceptCookies = () => { try { localStorage.setItem(COOKIE_KEY, JSON.stringify({ choice: 'accepted', ts: Date.now() })); } catch (e) {} this.setState({ cookieVisible: false }); };
  essentialCookies = () => { try { localStorage.setItem(COOKIE_KEY, JSON.stringify({ choice: 'essential', ts: Date.now() })); } catch (e) {} this.setState({ cookieVisible: false }); };
  openMenu(k) { clearTimeout(this.menuT); if (this.state.menu !== k) this.setState({ menu: k }); }
  leaveNav = () => { clearTimeout(this.menuT); this.menuT = setTimeout(() => this.setState({ menu: null }), 120); };
  keepMenu = () => clearTimeout(this.menuT);
  parallaxRef = React.createRef();
  ringRef = React.createRef();
  reduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  angle = 0; speed = 0; hovering = false; autoIdx = -1;
  progressRef = React.createRef();
  mockRef = React.createRef();
  seen = new WeakSet();

  componentDidMount() {
    document.addEventListener('keydown', this.onEsc);
    try { if (sessionStorage.getItem('eh-bar-closed')) this.setState({ barOpen: false }); } catch (e) {}
    try {
      const rec = JSON.parse(localStorage.getItem(COOKIE_KEY) || 'null');
      if (!rec || (Date.now() - rec.ts) > COOKIE_TTL_MS) this.cookieTimer = setTimeout(() => this.setState({ cookieVisible: true }), 1000);
    } catch (e) { this.cookieTimer = setTimeout(() => this.setState({ cookieVisible: true }), 1000); }
    this.io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.style.opacity = '1';
        e.target.style.transform = 'none';
        this.io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    this.observeAll();
    this.nodeTimer = setInterval(() => {
      if (this.state.hover !== null || this.state.touch !== null) return;
      this.autoIdx = (this.autoIdx + 1) % NODES.length;
      this.setState({ active: this.autoIdx }); this.bump();
      clearTimeout(this.autoOff);
      this.autoOff = setTimeout(() => this.setState({ active: null }), 1200);
    }, 2500);
    if (!this.reduced) {
      let last = performance.now();
      const tick = t => {
        const dt = Math.min(0.1, (t - last) / 1000); last = t;
        this.speed *= Math.max(0, 1 - dt * 3); // decai até parar quando o mouse fica parado
        if (Math.abs(this.speed) < 0.05) this.speed = 0;
        this.angle = (this.angle + this.speed * dt) % 360;
        const el = this.ringRef.current; if (el) el.style.setProperty('--eh-a', this.angle.toFixed(3) + 'deg');
        this.raf = requestAnimationFrame(tick);
      };
      this.raf = requestAnimationFrame(tick);
    }
    this.startAuto();
    this.onScroll = () => {
      const el = this.progressRef.current; if (!el) return;
      const sec = el.closest('section'); if (!sec) return;
      const r = sec.getBoundingClientRect(), vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height * 0.9)));
      el.style.width = (p * 100).toFixed(1) + '%';
    };
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onScroll);
    this.onScroll();
  }
  componentDidUpdate() { this.observeAll(); }
  componentWillUnmount() {
    clearInterval(this.nodeTimer); clearInterval(this.autoTimer); clearTimeout(this.fadeT); clearTimeout(this.cookieTimer);
    clearTimeout(this.autoOff); clearTimeout(this.touchOff); clearTimeout(this.bumpT); cancelAnimationFrame(this.raf);
    this.io && this.io.disconnect();
    window.removeEventListener('scroll', this.onScroll); window.removeEventListener('resize', this.onScroll);
  }
  observeAll() {
    if (!this.io) return;
    document.querySelectorAll('[data-reveal]').forEach(el => {
      if (this.seen.has(el)) return;
      this.seen.add(el);
      const r = el.getBoundingClientRect();
      if (r.top > window.innerHeight * 0.9) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        el.style.transition = 'opacity .6s cubic-bezier(.2,.8,.2,1), transform .6s cubic-bezier(.2,.8,.2,1)';
        this.io.observe(el);
      }
    });
  }
  startAuto() {
    clearInterval(this.autoTimer);
    if (this.props.autoplay === false) return;
    this.autoTimer = setInterval(() => this.go(this.state.slide + 1), 5000);
  }
  go(i) {
    const n = (i + SLIDES.length) % SLIDES.length;
    this.setState({ fade: true });
    clearTimeout(this.fadeT);
    this.fadeT = setTimeout(() => this.setState({ slide: n, fade: false }), 220);
  }
  manual(i) { this.go(i); this.startAuto(); }
  onHeroSectionMove = e => {
    if (this.reduced) return;
    const dx = this.lastMX === undefined ? 0 : e.clientX - this.lastMX;
    this.lastMX = e.clientX;
    this.speed = Math.max(-40, Math.min(40, this.speed + dx * 0.6));
  };
  onHeroMove = e => {
    const el = this.parallaxRef.current; if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5, dy = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `translate(${(dx * 14).toFixed(1)}px, ${(dy * 14).toFixed(1)}px)`;
  };
  onMockMove = e => {
    const el = this.mockRef.current; if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5, dy = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `translate(${(dx * -18).toFixed(1)}px, ${(dy * -18).toFixed(1)}px)`;
  };
  onMockLeave = () => { const el = this.mockRef.current; if (el) el.style.transform = 'translate(0px, 0px)'; };
  onHeroEnter = () => { this.hovering = true; };
  onHeroLeave = () => { this.hovering = false; const el = this.parallaxRef.current; if (el) el.style.transform = 'translate(0px, 0px)'; };
  bump() {
    if (this.reduced) return;
    clearTimeout(this.bumpT);
    this.setState({ bump: true });
    this.bumpT = setTimeout(() => this.setState({ bump: false }), 150);
  }
  setHover(i) {
    if (i !== null) { clearTimeout(this.autoOff); this.bump(); this.setState({ hover: i, active: null }); }
    else this.setState({ hover: null });
  }
  tapNode(i) {
    clearTimeout(this.touchOff); clearTimeout(this.autoOff); this.bump();
    this.setState({ touch: i, active: null });
    this.touchOff = setTimeout(() => this.setState({ touch: null }), 1500);
  }

  renderVals() {
    const { active, hover, touch, bump, slide, fade, menu } = this.state;
    const m = menu ? MENUS[menu] : null;
    const hi = hover !== null ? hover : touch !== null ? touch : active;
    const dim = hover !== null || touch !== null;
    const cur = SLIDES[slide];
    return Object.assign({}, {
      navPosition: (this.props.stickyNav ?? true) ? 'sticky' : 'relative',
      barOpen: this.state.barOpen,
      closeBar: this.closeBar,
      cookieVisible: this.state.cookieVisible,
      acceptCookies: this.acceptCookies,
      essentialCookies: this.essentialCookies,
      modalOpen: this.state.modalOpen,
      calLoading: !this.state.calLoaded,
      mobOpen: !!this.state.mobOpen,
      openMob: this.openMob,
      closeMob: this.closeMob,
      openModalMob: this.openModalMob,
      mobGroups: Object.keys(MENUS).map(k => ({ heading: MENUS[k].heading, links: MENUS[k].links.map(l => ({ title: l.title, href: l.href })) })).concat([{ heading: 'Empresa', links: [{ title: 'Blog', href: 'Em breve.dc.html' }, { title: 'Sobre', href: 'Em breve.dc.html' }, { title: 'WhatsApp (11) 99795-7457', href: 'https://wa.me/5511997957457' }] }]),
      calOnLoad: this.calOnLoad,
      openModal: this.openModal,
      closeModal: this.closeModal,
      stopClick: this.stopClick,
      weekDays: CAL_WEEK.map(w => ({ wd: w.wd, d: w.d, bg: w.selected ? '#FFB11B' : 'transparent', color: w.selected ? '#0A0A0B' : '#F4F2EE', border: w.selected ? '#FFB11B' : '#2A2A2E' })),
      timeSlots: CAL_SLOTS.map(s => ({ label: s, bg: s === CAL_SELECTED_SLOT ? '#FFB11B' : 'transparent', color: s === CAL_SELECTED_SLOT ? '#0A0A0B' : '#F4F2EE', border: s === CAL_SELECTED_SLOT ? '#FFB11B' : '#2A2A2E' })),
      leaveNav: this.leaveNav,
      keepMenu: this.keepMenu,
      menuOpen: !!m,
      menu: m ? { heading: m.heading, links: m.links.map(l => ({ ...l, featured: !!l.featured, regular: !l.featured, hasBadge: !!l.badge, badge: l.badge || '', hasImg: !!l.img, imgEl: l.img ? React.createElement('img', { src: l.img, alt: '', style: { width: 20, height: 20, display: 'block', objectFit: 'contain', filter: /-mono(-dark|-light)?\.svg$/.test(l.img) ? 'none' : 'brightness(0) invert(.96)' } }) : null, hasIcon: !l.img && !l.featured })) } : { heading: '', links: [] },
      navItems: NAV.map(it => {
        const on = it.key && menu === it.key;
        return { ...it, hasMenu: !!it.key, bg: on ? '#1C1C1F' : 'transparent', rot: on ? '180deg' : '0deg',
          enter: it.key ? () => this.openMenu(it.key) : () => this.leaveNav(),
          click: it.key ? e => { e.preventDefault(); clearTimeout(this.menuT); this.setState({ menu: on ? null : it.key }); } : undefined };
      }),
      parallaxRef: this.parallaxRef,
      progressRef: this.progressRef,
      onHeroMove: this.onHeroMove,
      onHeroEnter: this.onHeroEnter,
      onHeroSectionMove: this.onHeroSectionMove,
      ringRef: this.ringRef,
      onHeroLeave: this.onHeroLeave,
      mockRef: this.mockRef,
      onMockMove: this.onMockMove,
      onMockLeave: this.onMockLeave,
      nodes: NODES.map((n, i) => {
        const on = i === hi;
        return { ...n,
          bg: on ? '#FFB11B' : '#0A0A0B',
          color: on ? '#0A0A0B' : '#F4F2EE',
          border: on ? '#FFB11B' : '#2A2A2E',
          glow: on ? '0 0 24px rgba(255,177,27,.3)' : 'none',
          iconColor: on ? '#0A0A0B' : '#9C9A94',
          scale: on && !this.reduced ? 1.15 : 1,
          opacity: dim && !on ? 0.55 : 1,
          lineColor: on ? '#FFB11B' : 'rgba(47,85,212,.7)',
          lineW: on ? 2 : 1,
          pulse: on && !this.reduced,
          path: 'M' + n.x + ' ' + n.y + ' L320 280',
          enter: () => this.setHover(i),
          leave: () => this.setHover(null),
          tap: () => this.tapNode(i),
        };
      }),
      core: {
        border: hi !== null ? '#FFB11B' : '#2F55D4',
        shadow: hi !== null ? '0 0 0 8px rgba(255,177,27,.12), 0 0 48px rgba(255,177,27,.35)' : '0 0 0 8px rgba(47,85,212,.12), 0 0 24px rgba(47,85,212,.35)',
        scale: bump ? 1.06 : 1,
      },
      tabs: SLIDES.map((s, i) => ({
        label: s[0],
        color: i === slide ? '#F4F2EE' : '#9C9A94',
        line: i === slide ? '#FFB11B' : 'transparent',
        dot: i === slide ? '#FFB11B' : '#2A2A2E',
        dotW: i === slide ? 24 : 8,
        select: () => this.manual(i),
      })),
      counter: pad(slide + 1) + ' / ' + pad(SLIDES.length),
      posts: POSTS.map(([category, title, date, read, photo]) => ({ category, title, date, read, photo })),
      slide: { pain: cur[1], turn: cur[2] },
      slideOpacity: fade ? 0 : 1,
      prev: () => this.manual(slide - 1),
      next: () => this.manual(slide + 1),
    });
  }
}
