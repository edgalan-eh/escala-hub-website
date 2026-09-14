/* @ds-bundle: {"format":4,"namespace":"EscalaHubDesignSystem_209bdb","components":[{"name":"CaseCard","sourcePath":"components/cards/CaseCard.jsx"},{"name":"HubCard","sourcePath":"components/cards/HubCard.jsx"},{"name":"MaterialCard","sourcePath":"components/cards/MaterialCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"MARKETPLACES","sourcePath":"components/core/MarketplaceChip.jsx"},{"name":"MarketplaceChip","sourcePath":"components/core/MarketplaceChip.jsx"},{"name":"StatTile","sourcePath":"components/core/StatTile.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"CHECK_CSS","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FIELD_CSS","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/cards/CaseCard.jsx":"af2b2306e262","components/cards/HubCard.jsx":"da4a1aa8ed27","components/cards/MaterialCard.jsx":"9108a7c82943","components/core/Badge.jsx":"624c2e30110a","components/core/Button.jsx":"66286b207b64","components/core/Eyebrow.jsx":"c25e9bb71120","components/core/Icon.jsx":"3417e2988ea1","components/core/MarketplaceChip.jsx":"a1df04b8a4c2","components/core/StatTile.jsx":"5c4e9f6fddd1","components/core/Tag.jsx":"e32c3fa14a69","components/core/styleUtil.js":"434c52917489","components/feedback/Dialog.jsx":"440effe84e9c","components/feedback/Toast.jsx":"946422f60954","components/feedback/Tooltip.jsx":"7112f914f215","components/forms/Checkbox.jsx":"cb2f710efe96","components/forms/Input.jsx":"e0bd3fb70768","components/forms/Radio.jsx":"e4ccfaf57fb5","components/forms/Select.jsx":"0c25d518016c","components/forms/Switch.jsx":"fdaa5bdb682c","components/navigation/Footer.jsx":"5d7f98871ac3","components/navigation/Nav.jsx":"e4c9e1740132","components/navigation/Tabs.jsx":"2b5333d45227","ui_kits/website/Home.jsx":"1645cf3a3af8","ui_kits/website/LandingML.jsx":"574feb9f2769","ui_kits/website/Materials.jsx":"3a46f6428574","ui_kits/website/Results.jsx":"61ababe1c161","ui_kits/website/Schedule.jsx":"8cd3e05680ac","ui_kits/website/Shared.jsx":"f57b1174038d"},"inlinedExternals":[],"unexposedExports":[{"name":"injectCss","sourcePath":"components/core/styleUtil.js"},{"name":"loadLucide","sourcePath":"components/core/Icon.jsx"}]} */

(() => {

const __ds_ns = (window.EscalaHubDesignSystem_209bdb = window.EscalaHubDesignSystem_209bdb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    bg: 'var(--surface-2)',
    fg: 'var(--muted)',
    border: 'var(--border)'
  },
  amber: {
    bg: 'var(--amber-soft)',
    fg: 'var(--amber)',
    border: 'rgba(255,177,27,.35)'
  },
  up: {
    bg: 'rgba(61,220,151,.12)',
    fg: 'var(--up)',
    border: 'rgba(61,220,151,.35)'
  },
  navy: {
    bg: 'rgba(47,85,212,.18)',
    fg: '#8FA3E8',
    border: 'rgba(47,85,212,.5)'
  },
  soon: {
    bg: 'rgba(47,85,212,.18)',
    fg: '#8FA3E8',
    border: 'rgba(47,85,212,.5)'
  },
  fake: {
    bg: 'transparent',
    fg: 'var(--amber)',
    border: 'var(--amber)',
    dashed: true
  }
};
function Badge({
  tone = 'neutral',
  children,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  const text = children ?? (tone === 'fake' ? '[FAKE]' : tone === 'soon' ? 'em breve' : null);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 8px',
      borderRadius: 4,
      background: t.bg,
      color: t.fg,
      border: '1px ' + (t.dashed ? 'dashed' : 'solid') + ' ' + t.border,
      font: '500 11px/1 var(--font-mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), text);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const colors = {
  amber: 'var(--amber)',
  muted: 'var(--muted)',
  navy: 'var(--navy-light)',
  ink: 'var(--ink)'
};
function Eyebrow({
  n,
  children,
  color = 'amber',
  as: Tag = 'div',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      font: '500 12px/1.2 var(--font-mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: colors[color] || color,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, rest), n != null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, String(n).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2014")), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE_SRC = 'https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js';
let pending;
function loadLucide() {
  if (typeof window === 'undefined') return Promise.resolve(null);
  if (window.lucide) return Promise.resolve(window.lucide);
  if (!pending) pending = new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = LUCIDE_SRC;
    s.onload = () => res(window.lucide);
    s.onerror = rej;
    document.head.appendChild(s);
  });
  return pending;
}
const pascal = n => n.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('');
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.5,
  style,
  ...rest
}) {
  const [, tick] = React.useState(0);
  const lib = typeof window !== 'undefined' && window.lucide;
  React.useEffect(() => {
    if (!lib) loadLucide().then(() => tick(t => t + 1)).catch(() => {});
  }, [lib]);
  const node = lib && lib.icons && lib.icons[pascal(name)];
  const kids = Array.isArray(node) ? Array.isArray(node[2]) ? node[2] : node.filter(n => Array.isArray(n) && typeof n[0] === 'string') : null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      flex: 'none',
      ...style
    }
  }, rest), kids ? kids.map(([tag, attrs], i) => React.createElement(tag, {
    ...attrs,
    key: i
  })) : null);
}
Object.assign(__ds_scope, { loadLucide, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/MarketplaceChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MARKETPLACES = {
  ml: {
    label: 'Mercado Livre',
    bg: 'var(--mp-ml)',
    fg: 'var(--mp-ml-ink)'
  },
  shopee: {
    label: 'Shopee',
    bg: 'var(--mp-shopee)',
    fg: '#fff'
  },
  amazon: {
    label: 'Amazon',
    bg: 'var(--mp-amazon)',
    fg: '#fff'
  },
  tiktok: {
    label: 'TikTok Shop',
    bg: 'var(--mp-tiktok)',
    fg: 'var(--mp-tiktok-fg)',
    ring: true
  }
};
function MarketplaceChip({
  marketplace,
  variant = 'solid',
  size = 'md',
  label,
  onPaper,
  style,
  ...rest
}) {
  const m = MARKETPLACES[marketplace] || {
    label: marketplace,
    bg: 'var(--surface-2)',
    fg: 'var(--text)'
  };
  const h = size === 'sm' ? 24 : 32;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    height: h,
    padding: '0 ' + (size === 'sm' ? 10 : 14) + 'px',
    borderRadius: 'var(--radius)',
    font: '500 ' + (size === 'sm' ? 12 : 13) + 'px/1 var(--font-body)',
    whiteSpace: 'nowrap',
    border: '1px solid transparent',
    ...style
  };
  if (variant === 'solid') return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      background: m.bg,
      color: m.fg,
      borderColor: m.ring ? 'var(--border-strong)' : 'transparent'
    }
  }, rest), label || m.label);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      background: onPaper ? '#fff' : 'var(--surface)',
      color: onPaper ? 'var(--ink)' : 'var(--text)',
      borderColor: onPaper ? 'var(--border-on-paper)' : 'var(--border)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: m.bg,
      boxShadow: m.ring ? '0 0 0 1px var(--border-strong)' : 'none'
    }
  }), label || m.label);
}
Object.assign(__ds_scope, { MARKETPLACES, MarketplaceChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MarketplaceChip.jsx", error: String((e && e.message) || e) }); }

// components/core/StatTile.jsx
try { (() => {
function StatTile({
  value,
  label,
  delta,
  note,
  size = 'md',
  accent,
  bare,
  onPaper,
  style
}) {
  const fs = size === 'lg' ? 72 : size === 'sm' ? 40 : 56;
  const fg = onPaper ? 'var(--ink)' : 'var(--text)';
  const mutedFg = onPaper ? 'var(--muted-on-paper)' : 'var(--muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bare ? 'transparent' : onPaper ? '#fff' : 'var(--surface)',
      border: bare ? 0 : '1px solid ' + (onPaper ? 'var(--border-on-paper)' : 'var(--border)'),
      borderRadius: 'var(--radius-lg)',
      padding: bare ? 0 : 24,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 ' + fs + 'px/1 var(--font-display)',
      letterSpacing: '-0.02em',
      fontVariantNumeric: 'tabular-nums',
      color: accent ? 'var(--amber)' : fg,
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, value), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1 var(--font-mono)',
      color: 'var(--up)',
      letterSpacing: '0.04em'
    }
  }, "\u2191 ", delta)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      font: '500 12px/1.4 var(--font-mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: mutedFg
    }
  }, label), note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      font: '400 14px/1.5 var(--font-body)',
      color: mutedFg
    }
  }, note));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/core/styleUtil.js
try { (() => {
function injectCss(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
Object.assign(__ds_scope, { injectCss });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/styleUtil.js", error: String((e && e.message) || e) }); }

// components/cards/CaseCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss('eh-casecard', '.eh-case{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:28px;display:flex;flex-direction:column;gap:20px;min-width:0;transition:border-color var(--dur) var(--ease),background var(--dur) var(--ease)}.eh-case[href]:hover{border-color:var(--border-strong);background:var(--surface-2)}');
function CaseCard({
  value,
  delta,
  segment,
  marketplace,
  period,
  fake = true,
  description,
  href,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : 'article';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "eh-case",
    href: href,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MarketplaceChip, {
    marketplace: marketplace,
    variant: "dot",
    size: "sm"
  }), fake && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "fake"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 56px/1 var(--font-display)',
      letterSpacing: '-0.02em',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--text)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, value), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1 var(--font-mono)',
      color: 'var(--up)'
    }
  }, "\u2191 ", delta)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      font: '600 18px/1.3 var(--font-display)',
      letterSpacing: '-0.01em',
      color: 'var(--text)'
    }
  }, segment), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      font: '400 15px/1.5 var(--font-body)',
      color: 'var(--muted)'
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      font: '500 12px/1.2 var(--font-mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      borderTop: '1px solid var(--border)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", null, period), href && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text)'
    }
  }, "ver case \u2192")));
}
Object.assign(__ds_scope, { CaseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CaseCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/HubCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss('eh-hubcard', '.eh-hub{display:flex;flex-direction:column;gap:16px;padding:28px;border-radius:var(--radius-lg);border:1px solid var(--border);background:var(--surface);color:var(--text);text-decoration:none;min-width:0;transition:border-color var(--dur) var(--ease),background var(--dur) var(--ease)}.eh-hub:hover{border-color:var(--border-strong);background:var(--surface-2);color:var(--text)}.eh-hub .eh-hub-arrow{display:inline-block;transition:transform var(--dur) var(--ease)}.eh-hub:hover .eh-hub-arrow{transform:translateX(4px)}.eh-hub-software{background:var(--navy);border-color:var(--navy-soft)}.eh-hub-software:hover{background:#13224A;border-color:var(--navy-light)}');
function HubCard({
  icon = 'box',
  title,
  line,
  href = '#',
  linkLabel = 'Saiba mais',
  variant = 'default',
  soon,
  style,
  ...rest
}) {
  const software = variant === 'software';
  return /*#__PURE__*/React.createElement("a", _extends({
    className: 'eh-hub' + (software ? ' eh-hub-software' : ''),
    href: href,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius)',
      border: '1px solid ' + (software ? 'rgba(143,163,232,.35)' : 'var(--border)'),
      display: 'grid',
      placeItems: 'center',
      color: software ? '#8FA3E8' : 'var(--text)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), soon && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "soon"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 22px/1.2 var(--font-display)',
      letterSpacing: '-0.02em'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      font: '400 15px/1.5 var(--font-body)',
      color: software ? '#B5C2EE' : 'var(--muted)'
    }
  }, line)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      font: '500 14px/1 var(--font-body)',
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      color: software ? '#8FA3E8' : 'var(--text)'
    }
  }, linkLabel, " ", /*#__PURE__*/React.createElement("span", {
    className: "eh-hub-arrow",
    "aria-hidden": "true"
  }, "\u2192")));
}
Object.assign(__ds_scope, { HubCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/HubCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/MaterialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss('eh-matcard', '.eh-mat{display:flex;flex-direction:column;border-radius:var(--radius-lg);border:1px solid var(--border);background:var(--surface);color:var(--text);text-decoration:none;overflow:hidden;min-width:0;transition:border-color var(--dur) var(--ease),background var(--dur) var(--ease)}.eh-mat:hover{border-color:var(--border-strong);background:var(--surface-2);color:var(--text)}.eh-mat .eh-mat-arrow{display:inline-block;transition:transform var(--dur) var(--ease)}.eh-mat:hover .eh-mat-arrow{transform:translateX(4px)}');
const kinds = {
  Blog: 'neutral',
  Calculadora: 'amber',
  Curso: 'navy'
};
function MaterialCard({
  kind = 'Blog',
  title,
  meta,
  href = '#',
  image,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    className: "eh-mat",
    href: href,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/9',
      background: image ? 'url(' + image + ') center/cover' : 'linear-gradient(160deg,var(--surface-2),var(--ink))',
      borderBottom: '1px solid var(--border)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      top: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: kinds[kind] || 'neutral'
  }, kind))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 18px/1.3 var(--font-display)',
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 'auto',
      font: '500 12px/1.2 var(--font-mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, meta), /*#__PURE__*/React.createElement("span", {
    className: "eh-mat-arrow",
    "aria-hidden": "true",
    style: {
      color: 'var(--text)'
    }
  }, "\u2192"))));
}
Object.assign(__ds_scope, { MaterialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/MaterialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss('eh-button', '.eh-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;border-radius:var(--radius);border:1px solid transparent;font-family:var(--font-body);font-weight:500;cursor:pointer;text-decoration:none;white-space:nowrap;transition:background var(--dur) var(--ease),border-color var(--dur) var(--ease),color var(--dur) var(--ease);outline:none}.eh-btn:focus-visible{box-shadow:0 0 0 2px var(--ink),0 0 0 4px var(--amber)}.eh-btn .eh-btn-arrow{display:inline-block;transition:transform var(--dur) var(--ease)}.eh-btn:hover .eh-btn-arrow{transform:translateX(4px)}.eh-btn-primary{background:var(--amber);color:var(--ink)}.eh-btn-primary:hover{background:var(--amber-deep);color:var(--ink)}.eh-btn-primary:active{filter:brightness(.94)}.eh-btn-secondary{background:transparent;color:var(--text);border-color:var(--border)}.eh-btn-secondary:hover{background:var(--surface-2);border-color:var(--border-strong);color:var(--text)}.eh-btn-secondary.eh-on-paper{color:var(--ink);border-color:var(--border-on-paper)}.eh-btn-secondary.eh-on-paper:hover{background:var(--paper-2);color:var(--ink)}.eh-btn-ghost{background:transparent;color:var(--muted)}.eh-btn-ghost:hover{color:var(--text);background:var(--surface-2)}.eh-btn-ghost.eh-on-paper{color:var(--muted-on-paper)}.eh-btn-ghost.eh-on-paper:hover{color:var(--ink);background:var(--paper-2)}.eh-btn-sm{height:36px;padding:0 14px;font-size:14px}.eh-btn-md{height:44px;padding:0 18px;font-size:15px}.eh-btn-lg{height:52px;padding:0 24px;font-size:16px}.eh-btn[disabled],.eh-btn.eh-disabled{opacity:.4;pointer-events:none}.eh-btn-full{width:100%}');
function Button({
  variant = 'primary',
  size = 'md',
  arrow,
  href,
  children,
  disabled,
  fullWidth,
  onPaper,
  icon,
  className = '',
  ...rest
}) {
  const showArrow = arrow ?? variant === 'primary';
  const cls = ['eh-btn', 'eh-btn-' + variant, 'eh-btn-' + size, fullWidth ? 'eh-btn-full' : '', onPaper ? 'eh-on-paper' : '', disabled ? 'eh-disabled' : '', className].join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon, children, showArrow && /*#__PURE__*/React.createElement("span", {
    className: "eh-btn-arrow",
    "aria-hidden": "true"
  }, "\u2192"));
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href,
    "aria-disabled": disabled || undefined
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss('eh-tag', '.eh-tag{display:inline-flex;align-items:center;height:32px;padding:0 14px;border-radius:var(--radius-pill);border:1px solid var(--border);background:transparent;color:var(--muted);font:500 13px/1 var(--font-body);cursor:pointer;transition:all var(--dur) var(--ease);white-space:nowrap}.eh-tag:hover{border-color:var(--border-strong);color:var(--text);background:var(--surface-2)}.eh-tag.eh-tag-active{background:var(--text);color:var(--ink);border-color:var(--text)}.eh-tag.eh-tag-active:hover{background:var(--text)}.eh-tag.eh-on-paper{border-color:var(--border-on-paper);color:var(--muted-on-paper)}.eh-tag.eh-on-paper:hover{color:var(--ink);background:var(--paper-2)}.eh-tag.eh-on-paper.eh-tag-active{background:var(--ink);color:var(--paper);border-color:var(--ink)}.eh-tag[disabled]{opacity:.4;pointer-events:none}');
function Tag({
  active,
  onPaper,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: ['eh-tag', active ? 'eh-tag-active' : '', onPaper ? 'eh-on-paper' : '', className].join(' '),
    "aria-pressed": !!active
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
__ds_scope.injectCss('eh-dialog', '.eh-dlg-bg{position:fixed;inset:0;background:var(--overlay);display:grid;place-items:center;padding:24px;z-index:100;animation:eh-fade var(--dur) var(--ease)}.eh-dlg{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-xl);box-shadow:var(--shadow-pop);width:100%;max-width:520px;padding:32px;position:relative;animation:eh-rise var(--dur) var(--ease)}.eh-dlg-x{position:absolute;top:16px;right:16px;width:36px;height:36px;border-radius:var(--radius);border:1px solid transparent;background:none;color:var(--muted);cursor:pointer;display:grid;place-items:center}.eh-dlg-x:hover{color:var(--text);background:var(--surface-2)}@keyframes eh-fade{from{opacity:0}}@keyframes eh-rise{from{opacity:0;transform:translateY(8px)}}');
function Dialog({
  open,
  onClose,
  eyebrow,
  title,
  children,
  actions,
  inline,
  style
}) {
  React.useEffect(() => {
    if (!open || inline) return;
    const k = e => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, inline, onClose]);
  if (!open) return null;
  const panel = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": !inline,
    "aria-label": typeof title === 'string' ? title : undefined,
    className: "eh-dlg",
    style: style
  }, onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "eh-dlg-x",
    "aria-label": "Fechar",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.2 var(--font-mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--amber)',
      marginBottom: 12
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '600 28px/1.2 var(--font-display)',
      letterSpacing: '-0.02em',
      color: 'var(--text)',
      paddingRight: 40
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      font: '400 16px/1.6 var(--font-body)',
      color: 'var(--muted)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 12,
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }
  }, actions));
  if (inline) return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--overlay)',
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      borderRadius: 'var(--radius-lg)'
    }
  }, panel);
  return /*#__PURE__*/React.createElement("div", {
    className: "eh-dlg-bg",
    onClick: e => e.target === e.currentTarget && onClose && onClose()
  }, panel);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  neutral: {
    icon: 'info',
    color: 'var(--text)'
  },
  success: {
    icon: 'check',
    color: 'var(--up)'
  },
  error: {
    icon: 'alert-triangle',
    color: 'var(--down)'
  },
  amber: {
    icon: 'zap',
    color: 'var(--amber)'
  }
};
function Toast({
  tone = 'neutral',
  title,
  message,
  onClose,
  action,
  style
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-pop)',
      padding: '14px 16px',
      maxWidth: 420,
      color: 'var(--text)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 15px/1.4 var(--font-body)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.5 var(--font-body)',
      color: 'var(--muted)'
    }
  }, message), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Fechar",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      color: 'var(--muted)',
      cursor: 'pointer',
      padding: 2,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
function ToastStack({
  children,
  position = 'bottom-right'
}) {
  const pos = {
    'bottom-right': {
      bottom: 24,
      right: 24
    },
    'bottom-left': {
      bottom: 24,
      left: 24
    },
    'top-right': {
      top: 88,
      right: 24
    }
  }[position];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      zIndex: 90,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...pos
    }
  }, children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  side = 'top',
  always
}) {
  const [on, setOn] = React.useState(false);
  const show = on || always;
  const pos = side === 'bottom' ? {
    top: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : side === 'right' ? {
    left: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)'
  } : {
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    onFocus: () => setOn(true),
    onBlur: () => setOn(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      background: 'var(--text)',
      color: 'var(--ink)',
      font: '500 12px/1.3 var(--font-body)',
      padding: '6px 10px',
      borderRadius: 6,
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      opacity: show ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease)',
      zIndex: 20
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CHECK_CSS = '.eh-check{display:inline-flex;align-items:flex-start;gap:12px;cursor:pointer;font:400 15px/1.4 var(--font-body);color:var(--text);position:relative}.eh-check input{position:absolute;opacity:0;width:0;height:0}.eh-check .eh-box{width:20px;height:20px;flex:none;border-radius:5px;border:1px solid var(--border-strong);background:var(--surface-2);display:grid;place-items:center;transition:all var(--dur-fast) var(--ease);margin-top:1px}.eh-check.eh-radio .eh-box{border-radius:50%}.eh-check:hover .eh-box{border-color:var(--muted)}.eh-check input:focus-visible+.eh-box{box-shadow:0 0 0 3px var(--amber-soft);border-color:var(--amber)}.eh-check input:checked+.eh-box{background:var(--amber);border-color:var(--amber)}.eh-check .eh-box svg{opacity:0;transform:scale(.6);transition:all var(--dur-fast) var(--ease)}.eh-check input:checked+.eh-box svg{opacity:1;transform:scale(1)}.eh-check.eh-radio .eh-box::after{content:"";width:8px;height:8px;border-radius:50%;background:var(--ink);opacity:0;transform:scale(.4);transition:all var(--dur-fast) var(--ease)}.eh-check.eh-radio input:checked+.eh-box::after{opacity:1;transform:scale(1)}.eh-check .eh-check-desc{display:block;font:400 13px/1.4 var(--font-body);color:var(--muted);margin-top:2px}.eh-check.eh-disabled{opacity:.4;pointer-events:none}.eh-check.eh-on-paper{color:var(--ink)}.eh-check.eh-on-paper .eh-box{background:#fff;border-color:var(--border-on-paper)}.eh-check.eh-on-paper .eh-check-desc{color:var(--muted-on-paper)}';
__ds_scope.injectCss('eh-check', CHECK_CSS);
function Checkbox({
  label,
  description,
  onPaper,
  disabled,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['eh-check', onPaper ? 'eh-on-paper' : '', disabled ? 'eh-disabled' : '', className].join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "eh-box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ink)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("span", null, label, description && /*#__PURE__*/React.createElement("span", {
    className: "eh-check-desc"
  }, description)));
}
Object.assign(__ds_scope, { CHECK_CSS, Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELD_CSS = '.eh-field{display:flex;flex-direction:column;gap:8px;min-width:0}.eh-field-label{font:500 12px/1.2 var(--font-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}.eh-field-hint{font:400 13px/1.4 var(--font-body);color:var(--muted)}.eh-field-error{font:400 13px/1.4 var(--font-body);color:var(--down)}.eh-ctl{display:flex;align-items:center;background:var(--surface-2);border:1px solid var(--border);border-radius:var(--radius);transition:border-color var(--dur) var(--ease),box-shadow var(--dur) var(--ease);color:var(--text)}.eh-ctl:hover{border-color:var(--border-strong)}.eh-ctl:focus-within{border-color:var(--amber);box-shadow:0 0 0 3px var(--amber-soft)}.eh-ctl.eh-invalid{border-color:var(--down)}.eh-ctl input,.eh-ctl select,.eh-ctl textarea{flex:1;min-width:0;width:100%;background:transparent;border:0;outline:0;color:var(--text);font:400 15px/1.4 var(--font-body);padding:0 14px;height:44px;appearance:none;-webkit-appearance:none}.eh-ctl textarea{height:auto;min-height:112px;padding:12px 14px;resize:vertical}.eh-ctl input::placeholder,.eh-ctl textarea::placeholder{color:var(--dim)}.eh-ctl select option{background:var(--surface-2);color:var(--text)}.eh-ctl-prefix{padding-left:14px;font:500 14px/1 var(--font-mono);color:var(--muted)}.eh-ctl-prefix+input{padding-left:8px}.eh-ctl-suffix{padding-right:14px;color:var(--muted);display:flex;align-items:center}.eh-field.eh-on-paper .eh-field-label{color:var(--muted-on-paper)}.eh-field.eh-on-paper .eh-ctl{background:#fff;border-color:var(--border-on-paper);color:var(--ink)}.eh-field.eh-on-paper .eh-ctl input,.eh-field.eh-on-paper .eh-ctl select,.eh-field.eh-on-paper .eh-ctl textarea{color:var(--ink)}.eh-field.eh-disabled{opacity:.4;pointer-events:none}';
__ds_scope.injectCss('eh-field', FIELD_CSS);
let uid = 0;
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  multiline,
  onPaper,
  disabled,
  id,
  style,
  className = '',
  ...rest
}) {
  const [auto] = React.useState(() => 'eh-in-' + ++uid);
  const iid = id || auto;
  const Ctl = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    className: ['eh-field', onPaper ? 'eh-on-paper' : '', disabled ? 'eh-disabled' : '', className].join(' '),
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "eh-field-label",
    htmlFor: iid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: 'eh-ctl' + (error ? ' eh-invalid' : '')
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "eh-ctl-prefix"
  }, prefix), /*#__PURE__*/React.createElement(Ctl, _extends({
    id: iid,
    disabled: disabled,
    "aria-invalid": !!error || undefined
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    className: "eh-ctl-suffix"
  }, suffix)), error ? /*#__PURE__*/React.createElement("div", {
    className: "eh-field-error"
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    className: "eh-field-hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { FIELD_CSS, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss('eh-check', __ds_scope.CHECK_CSS);
function Radio({
  label,
  description,
  onPaper,
  disabled,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['eh-check eh-radio', onPaper ? 'eh-on-paper' : '', disabled ? 'eh-disabled' : '', className].join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "eh-box",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, label, description && /*#__PURE__*/React.createElement("span", {
    className: "eh-check-desc"
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss('eh-field', __ds_scope.FIELD_CSS);
let uid = 0;
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  onPaper,
  disabled,
  id,
  style,
  className = '',
  ...rest
}) {
  const [auto] = React.useState(() => 'eh-sel-' + ++uid);
  const sid = id || auto;
  return /*#__PURE__*/React.createElement("div", {
    className: ['eh-field', onPaper ? 'eh-on-paper' : '', disabled ? 'eh-disabled' : '', className].join(' '),
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "eh-field-label",
    htmlFor: sid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: 'eh-ctl' + (error ? ' eh-invalid' : '')
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: sid,
    disabled: disabled
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    className: "eh-ctl-suffix",
    "aria-hidden": "true",
    style: {
      pointerEvents: 'none',
      marginLeft: -34
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })))), error ? /*#__PURE__*/React.createElement("div", {
    className: "eh-field-error"
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    className: "eh-field-hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss('eh-switch', '.eh-sw{display:inline-flex;align-items:center;gap:12px;cursor:pointer;font:400 15px/1.4 var(--font-body);color:var(--text);position:relative}.eh-sw input{position:absolute;opacity:0;width:0;height:0}.eh-sw .eh-track{width:40px;height:24px;border-radius:999px;background:var(--surface-2);border:1px solid var(--border-strong);position:relative;transition:all var(--dur) var(--ease);flex:none}.eh-sw .eh-track::after{content:"";position:absolute;top:3px;left:3px;width:16px;height:16px;border-radius:50%;background:var(--muted);transition:all var(--dur) var(--ease)}.eh-sw input:checked+.eh-track{background:var(--amber);border-color:var(--amber)}.eh-sw input:checked+.eh-track::after{left:19px;background:var(--ink)}.eh-sw input:focus-visible+.eh-track{box-shadow:0 0 0 3px var(--amber-soft)}.eh-sw.eh-disabled{opacity:.4;pointer-events:none}.eh-sw.eh-on-paper{color:var(--ink)}.eh-sw.eh-on-paper .eh-track{background:#fff;border-color:var(--border-on-paper)}');
function Switch({
  label,
  onPaper,
  disabled,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['eh-sw', onPaper ? 'eh-on-paper' : '', disabled ? 'eh-disabled' : '', className].join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "eh-track",
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss('eh-footer', '.eh-foot{border-top:1px solid var(--border);background:var(--ink);color:var(--muted)}.eh-foot-in{max-width:var(--container);margin:0 auto;padding:64px var(--gutter) 40px;display:grid;grid-template-columns:2fr repeat(3,1fr);gap:32px}.eh-foot h4{margin:0 0 14px;font:500 12px/1.2 var(--font-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--text)}.eh-foot ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}.eh-foot a{color:var(--muted);font:400 15px/1.4 var(--font-body);text-decoration:none}.eh-foot a:hover{color:var(--text)}.eh-foot-legal{max-width:var(--container);margin:0 auto;padding:20px var(--gutter);border-top:1px solid var(--border);display:flex;justify-content:space-between;gap:16px;font:500 12px/1.4 var(--font-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--dim);flex-wrap:wrap}@media (max-width:820px){.eh-foot-in{grid-template-columns:1fr 1fr}}');
function Footer({
  logoSrc = 'assets/logo/logo-escalahub-dark.svg',
  tagline = 'Hub de crescimento para quem vende online.',
  columns = [],
  legal = '© Escala Hub. Todos os direitos reservados.',
  meta = 'São Paulo · BR',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: "eh-foot",
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "eh-foot-in"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Escala Hub",
    style: {
      height: 26,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      font: '400 15px/1.5 var(--font-body)',
      maxWidth: 280
    }
  }, tagline)), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("h4", null, c.title), /*#__PURE__*/React.createElement("ul", null, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href
  }, l.label))))))), /*#__PURE__*/React.createElement("div", {
    className: "eh-foot-legal"
  }, /*#__PURE__*/React.createElement("span", null, legal), /*#__PURE__*/React.createElement("span", null, meta)));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss('eh-nav', '.eh-nav{position:sticky;top:0;z-index:50;height:var(--nav-h);background:var(--nav-bg);-webkit-backdrop-filter:blur(var(--blur-nav));backdrop-filter:blur(var(--blur-nav));border-bottom:1px solid var(--border)}.eh-nav-in{max-width:var(--container);margin:0 auto;padding:0 var(--gutter);height:100%;display:flex;align-items:center;justify-content:space-between;gap:24px}.eh-nav-links{display:flex;gap:4px;align-items:center}.eh-nav-link{font:500 15px/1 var(--font-body);color:var(--muted);padding:10px 14px;border-radius:var(--radius);text-decoration:none;transition:color var(--dur) var(--ease),background var(--dur) var(--ease)}.eh-nav-link:hover{color:var(--text);background:var(--surface-2)}.eh-nav-link.eh-active{color:var(--text)}@media (max-width:820px){.eh-nav-links{display:none}}');
function Nav({
  logoSrc = 'assets/logo/logo-escalahub-dark.svg',
  logoHref = '/',
  links = [{
    label: 'Consultoria',
    href: '#'
  }, {
    label: 'Resultados',
    href: '#'
  }, {
    label: 'Materiais',
    href: '#'
  }, {
    label: 'Sobre',
    href: '#'
  }],
  cta = {
    label: 'Agendar diagnóstico',
    href: '#agendar'
  },
  onNavigate,
  style,
  ...rest
}) {
  const go = (e, l) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(l);
    }
  };
  return /*#__PURE__*/React.createElement("header", _extends({
    className: "eh-nav",
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "eh-nav-in"
  }, /*#__PURE__*/React.createElement("a", {
    href: logoHref,
    onClick: e => go(e, {
      label: 'Início',
      href: logoHref
    }),
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Escala Hub",
    style: {
      height: 26,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "eh-nav-links",
    "aria-label": "Principal"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    className: 'eh-nav-link' + (l.active ? ' eh-active' : ''),
    href: l.href,
    onClick: e => go(e, l),
    "aria-current": l.active ? 'page' : undefined
  }, l.label))), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    href: cta.href,
    onClick: e => go(e, cta)
  }, cta.label)));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss('eh-tabs', '.eh-tabs{display:flex;gap:4px;border-bottom:1px solid var(--border)}.eh-tab{appearance:none;background:none;border:0;border-bottom:2px solid transparent;margin-bottom:-1px;padding:12px 16px;font:500 15px/1 var(--font-body);color:var(--muted);cursor:pointer;transition:color var(--dur) var(--ease),border-color var(--dur) var(--ease)}.eh-tab:hover{color:var(--text)}.eh-tab[aria-selected=true]{color:var(--text);border-bottom-color:var(--amber)}.eh-tabs.eh-mono .eh-tab{font:500 12px/1 var(--font-mono);letter-spacing:.08em;text-transform:uppercase}.eh-tabs.eh-on-paper{border-bottom-color:var(--border-on-paper)}.eh-tabs.eh-on-paper .eh-tab{color:var(--muted-on-paper)}.eh-tabs.eh-on-paper .eh-tab:hover,.eh-tabs.eh-on-paper .eh-tab[aria-selected=true]{color:var(--ink)}');
function Tabs({
  items = [],
  value,
  onChange,
  mono,
  onPaper,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: ['eh-tabs', mono ? 'eh-mono' : '', onPaper ? 'eh-on-paper' : '', className].join(' ')
  }, rest), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    role: "tab",
    type: "button",
    className: "eh-tab",
    "aria-selected": it.id === value,
    onClick: () => onChange && onChange(it.id)
  }, it.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '96px 0 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Consultoria para marketplaces"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      font: '700 64px/1.05 var(--font-display)',
      letterSpacing: '-0.02em',
      textWrap: 'pretty'
    }
  }, "Venda mais nos marketplaces. Com m\xE9todo, n\xE3o com sorte."), /*#__PURE__*/React.createElement(Lead, null, "Consultoria mensal para quem j\xE1 vende no Mercado Livre, Shopee, Amazon e TikTok Shop e quer margem, n\xE3o s\xF3 faturamento."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('agendar')
  }, "Agendar diagn\xF3stico gratuito"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 16
    })
  }, "Falar no WhatsApp")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 40,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginRight: 8
    }
  }, "Atuamos em"), /*#__PURE__*/React.createElement(MarketplaceChip, {
    marketplace: "ml",
    variant: "dot",
    size: "sm"
  }), /*#__PURE__*/React.createElement(MarketplaceChip, {
    marketplace: "shopee",
    variant: "dot",
    size: "sm"
  }), /*#__PURE__*/React.createElement(MarketplaceChip, {
    marketplace: "amazon",
    variant: "dot",
    size: "sm"
  }), /*#__PURE__*/React.createElement(MarketplaceChip, {
    marketplace: "tiktok",
    variant: "dot",
    size: "sm"
  }))), /*#__PURE__*/React.createElement(Photo, {
    label: "galp\xE3o \xB7 expedi\xE7\xE3o",
    h: 520
  }))), /*#__PURE__*/React.createElement(Section, {
    alt: true,
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    bare: true,
    value: "R$ 1,2M",
    label: "GMV gerido / m\xEAs",
    accent: true
  }), /*#__PURE__*/React.createElement(StatTile, {
    bare: true,
    value: "+38%",
    label: "vendas m\xE9dias em 90 dias",
    delta: "mediana"
  }), /*#__PURE__*/React.createElement(StatTile, {
    bare: true,
    value: "47",
    label: "sellers acompanhados"
  }), /*#__PURE__*/React.createElement(StatTile, {
    bare: true,
    value: "4",
    label: "marketplaces"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Eyebrow, {
    n: 1
  }, "Dores"), /*#__PURE__*/React.createElement(H2, null, "Voc\xEA j\xE1 vende. A pergunta \xE9 quanto est\xE1 deixando na mesa."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 56
    }
  }, [['percent', 'Tarifa come a margem', 'Paga 23% ao marketplace e não sabe qual anúncio dá lucro de verdade.'], ['megaphone', 'Ads sem retorno', 'Investe R$ 5k/mês em ads e o ROAS não passa de 2.'], ['boxes', 'Estoque parado ou faltando', 'Full lotado de SKU que não gira e ruptura no que vende.']].map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amber)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '20px 0 8px',
      font: '600 22px/1.2 var(--font-display)',
      letterSpacing: '-0.02em'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 15px/1.5 var(--font-body)',
      color: 'var(--muted)'
    }
  }, d))))), /*#__PURE__*/React.createElement(Section, {
    alt: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    n: 2
  }, "M\xE9todo"), /*#__PURE__*/React.createElement(H2, null, "Diagn\xF3stico, plano de 90 dias, acompanhamento semanal."), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '40px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, [['Semana 1', 'Diagnóstico', 'Auditoria de anúncios, tarifas, margem por SKU e reputação.'], ['Semana 2', 'Plano de 90 dias', 'Metas por marketplace, prioridade por impacto em margem.'], ['Semanal', 'Acompanhamento', 'Reunião de 45 min, painel atualizado, decisões com número.'], ['Dia 90', 'Revisão', 'O que deu, o que não deu, e o próximo ciclo.']].map(([w, t, d], i) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'grid',
      gridTemplateColumns: '110px 1fr',
      gap: 24,
      padding: '20px 0',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1.6 var(--font-mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--amber)'
    }
  }, w), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 18px/1.3 var(--font-display)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.5 var(--font-body)',
      color: 'var(--muted)',
      marginTop: 4
    }
  }, d)))))), /*#__PURE__*/React.createElement(Mockup, {
    h: 480
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    n: 3
  }, "Resultados"), /*#__PURE__*/React.createElement(H2, null, "N\xFAmeros de quem operou com a gente.")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    arrow: true,
    onClick: () => go('resultados')
  }, "Ver todos os cases")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 56
    }
  }, CASES.slice(0, 3).map(c => /*#__PURE__*/React.createElement(CaseCard, _extends({
    key: c.segment
  }, c))))), /*#__PURE__*/React.createElement(Section, {
    alt: true
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    n: 4
  }, "O hub"), /*#__PURE__*/React.createElement(H2, null, "Tr\xEAs frentes. Uma opera\xE7\xE3o."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(HubCard, {
    icon: "trending-up",
    title: "Consultoria",
    line: "Acompanhamento mensal para vender com margem nos 4 marketplaces.",
    linkLabel: "Ver consultoria",
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('lp');
    }
  }), /*#__PURE__*/React.createElement(HubCard, {
    icon: "layout-dashboard",
    title: "Metri Hub",
    line: "Software de gest\xE3o para e-commerce. Estoque, margem e ads em um painel.",
    variant: "software",
    soon: true,
    linkLabel: "Entrar na lista",
    href: "#",
    onClick: e => e.preventDefault()
  }), /*#__PURE__*/React.createElement(HubCard, {
    icon: "pen-tool",
    title: "GLN Studio",
    line: "Design e dev: fotos de produto, p\xE1ginas de marca, integra\xE7\xF5es.",
    linkLabel: "Ver studio",
    href: "#",
    onClick: e => e.preventDefault()
  }))), /*#__PURE__*/React.createElement(Section, {
    paper: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    n: 5,
    color: "navy"
  }, "Materiais"), /*#__PURE__*/React.createElement(H2, {
    paper: true
  }, "Aprenda antes de contratar."), /*#__PURE__*/React.createElement(Lead, {
    paper: true
  }, "Blog, calculadora de margem e cursos. Tudo gr\xE1tis.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onPaper: true,
    arrow: true,
    onClick: () => go('materiais')
  }, "Ver materiais")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 56
    }
  }, [['Calculadora', 'Calculadora de margem no Mercado Livre', 'grátis · 2 min'], ['Blog', 'Tarifa clássico vs premium: quando compensa', '8 min · tarifas'], ['Curso', 'Ads no Mercado Livre do zero', '6 aulas']].map(([k, t, m]) => /*#__PURE__*/React.createElement(MaterialCard, {
    key: t,
    kind: k,
    title: t,
    meta: m,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('materiais');
    },
    style: {
      background: '#fff',
      borderColor: 'var(--border-on-paper)',
      color: 'var(--ink)'
    }
  })))), /*#__PURE__*/React.createElement(FinalCta, {
    go: go
  }));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LandingML.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LandingML({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '96px 0 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(MarketplaceChip, {
    marketplace: "ml"
  }), /*#__PURE__*/React.createElement(Eyebrow, null, "Consultoria especializada")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      font: '700 64px/1.05 var(--font-display)',
      letterSpacing: '-0.02em',
      textWrap: 'pretty'
    }
  }, "Mercado Livre: mais margem por an\xFAncio em 90 dias."), /*#__PURE__*/React.createElement(Lead, null, "Para sellers de R$ 30k a R$ 2M/m\xEAs. Tarifas, cat\xE1logo, ads e reputa\xE7\xE3o tratados com n\xFAmero, toda semana."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('agendar')
  }, "Agendar diagn\xF3stico gratuito"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 16
    })
  }, "Falar no WhatsApp"))), /*#__PURE__*/React.createElement(Photo, {
    label: "tela do Mercado Livre aberta",
    h: 480
  }))), /*#__PURE__*/React.createElement(Section, {
    alt: true,
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    bare: true,
    value: "23%",
    label: "tarifa m\xE9dia que o seller paga"
  }), /*#__PURE__*/React.createElement(StatTile, {
    bare: true,
    value: "+38%",
    label: "vendas em 90 dias (mediana)",
    delta: "cases ML",
    accent: true
  }), /*#__PURE__*/React.createElement(StatTile, {
    bare: true,
    value: "5,4",
    label: "ROAS m\xE9dio ap\xF3s 120 dias"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Eyebrow, {
    n: 1
  }, "Dores no Mercado Livre"), /*#__PURE__*/React.createElement(H2, null, "O que trava quem j\xE1 vende bem."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 24,
      marginTop: 56
    }
  }, [['Clássico ou premium?', 'Metade do catálogo no tipo de anúncio errado. Paga tarifa a mais ou perde conversão.'], ['Catálogo perdendo', 'Está no catálogo, mas não ganha. Preço, frete e reputação fora do ponto.'], ['Full sem giro', 'Estoque no Full que não vende e cobra armazenagem todo mês.'], ['Ads no automático', 'Campanha única, sem segmentar por margem. ROAS 2 e caindo.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'grid',
      gridTemplateColumns: '24px 1fr',
      gap: 16,
      padding: '24px 0',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amber)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-circle",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 20px/1.2 var(--font-display)',
      letterSpacing: '-0.02em'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      font: '400 15px/1.5 var(--font-body)',
      color: 'var(--muted)'
    }
  }, d)))))), /*#__PURE__*/React.createElement(Section, {
    alt: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Mockup, {
    h: 440
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    n: 2
  }, "O que fazemos"), /*#__PURE__*/React.createElement(H2, null, "Cada SKU com margem conhecida."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '32px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, ['Auditoria de tarifas e tipo de anúncio por SKU', 'Estratégia de catálogo: preço para ganhar, sem queimar margem', 'Ads segmentados por margem e por objetivo', 'Rotina de reputação: prazo, reclamação, cancelamento', 'Painel semanal com margem real, não faturamento'].map(s => /*#__PURE__*/React.createElement("li", {
    key: s,
    style: {
      display: 'flex',
      gap: 12,
      font: '400 16px/1.5 var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--up)',
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  })), s)))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Eyebrow, {
    n: 3
  }, "Resultados no Mercado Livre"), /*#__PURE__*/React.createElement(H2, null, "Sellers do ML que operaram com a gente."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 56
    }
  }, CASES.filter(c => c.marketplace === 'ml').concat(CASES[2]).map(c => /*#__PURE__*/React.createElement(CaseCard, _extends({
    key: c.segment
  }, c))))), /*#__PURE__*/React.createElement(FinalCta, {
    go: go
  }));
}
window.LandingML = LandingML;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LandingML.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Materials.jsx
try { (() => {
const MATS = [['Calculadora', 'Calculadora de margem no Mercado Livre', 'grátis · 2 min'], ['Blog', 'Tarifa clássico vs premium: quando compensa', '8 min · tarifas'], ['Curso', 'Ads no Mercado Livre do zero', '6 aulas'], ['Blog', 'Shopee: como sair da nota 7 em 30 dias', '6 min · reputação'], ['Blog', 'Amazon FBA no Brasil: quando faz sentido', '11 min · logística'], ['Curso', 'TikTok Shop para quem nunca fez live', '4 aulas'], ['Calculadora', 'Custo real do Full por SKU', 'grátis · 3 min'], ['Blog', 'Precificação para ganhar catálogo sem queimar margem', '9 min · preço'], ['Curso', 'Planilha de margem por SKU (aula única)', '1 aula']];
function Materials({
  go
}) {
  const [f, setF] = React.useState('Todos');
  const [fat, setFat] = React.useState('80000');
  const [tar, setTar] = React.useState('16');
  const [prem, setPrem] = React.useState(false);
  const fatN = Number(fat.replace(/\D/g, '')) || 0;
  const t = (Number(tar) || 0) + (prem ? 4 : 0);
  const tarifa = fatN * t / 100;
  const liq = fatN - tarifa;
  const fmt = n => 'R$ ' + Math.round(n).toLocaleString('pt-BR');
  const list = f === 'Todos' ? MATS : MATS.filter(m => m[0] === f);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '96px 0 64px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Materiais"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      font: '700 64px/1.05 var(--font-display)',
      letterSpacing: '-0.02em',
      maxWidth: 800
    }
  }, "Aprenda antes de contratar."), /*#__PURE__*/React.createElement(Lead, null, "Blog, calculadoras e cursos feitos por quem opera. Tudo gr\xE1tis."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 48,
      flexWrap: 'wrap'
    }
  }, ['Todos', 'Blog', 'Calculadora', 'Curso'].map(k => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    active: f === k,
    onClick: () => setF(k)
  }, k)))), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '0 0 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, list.map(([k, t, m]) => /*#__PURE__*/React.createElement(MaterialCard, {
    key: t,
    kind: k,
    title: t,
    meta: m,
    href: "#",
    onClick: e => e.preventDefault()
  })))), /*#__PURE__*/React.createElement(Section, {
    paper: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "navy"
  }, "Calculadora r\xE1pida"), /*#__PURE__*/React.createElement(H2, {
    paper: true
  }, "Quanto sobra depois da tarifa?"), /*#__PURE__*/React.createElement(Lead, {
    paper: true
  }, "Estimativa simples. A completa considera frete, Full, ads e imposto por SKU."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Input, {
    onPaper: true,
    label: "Faturamento mensal",
    prefix: "R$",
    value: fat,
    onChange: e => setFat(e.target.value)
  }), /*#__PURE__*/React.createElement(Select, {
    onPaper: true,
    label: "Tarifa do an\xFAncio",
    value: tar,
    onChange: e => setTar(e.target.value),
    options: [{
      value: '12',
      label: 'Clássico · 12%'
    }, {
      value: '16',
      label: 'Clássico · 16%'
    }, {
      value: '19',
      label: 'Premium · 19%'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    onPaper: true,
    label: "Parcelado sem juros (+4pp)",
    checked: prem,
    onChange: e => setPrem(e.target.checked)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy)',
      borderRadius: 16,
      padding: 32,
      color: 'var(--text)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#8FA3E8"
  }, "Resultado"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    bare: true,
    value: fmt(tarifa),
    label: 'tarifa · ' + t + '%',
    accent: true
  }), /*#__PURE__*/React.createElement(StatTile, {
    bare: true,
    value: fmt(liq),
    label: "l\xEDquido antes de frete e imposto"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      font: '400 15px/1.5 var(--font-body)',
      color: '#B5C2EE'
    }
  }, "Quer a margem real por SKU? Fazemos isso no diagn\xF3stico gratuito."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('agendar')
  }, "Agendar diagn\xF3stico gratuito"))))), /*#__PURE__*/React.createElement(FinalCta, {
    go: go
  }));
}
window.Materials = Materials;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Materials.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Results.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Results({
  go
}) {
  const [tab, setTab] = React.useState('todos');
  const list = tab === 'todos' ? CASES : CASES.filter(c => c.marketplace === tab);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '96px 0 64px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Resultados"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      font: '700 64px/1.05 var(--font-display)',
      letterSpacing: '-0.02em',
      maxWidth: 800
    }
  }, "N\xFAmero, segmento, prazo. Sem adjetivo."), /*#__PURE__*/React.createElement(Lead, null, "Cases marcados com [FAKE] s\xE3o ilustrativos at\xE9 publicarmos os dados reais dos clientes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "47",
    label: "sellers acompanhados"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "+38%",
    label: "vendas em 90 dias \xB7 mediana",
    accent: true
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "R$ 1,2M",
    label: "GMV gerido / m\xEAs"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "11 \u2192 19%",
    label: "margem m\xE9dia",
    size: "sm",
    note: "em 90 dias"
  }))), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '0 0 120px'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'todos',
      label: 'Todos'
    }, {
      id: 'ml',
      label: 'Mercado Livre'
    }, {
      id: 'shopee',
      label: 'Shopee'
    }, {
      id: 'amazon',
      label: 'Amazon'
    }, {
      id: 'tiktok',
      label: 'TikTok Shop'
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 40
    }
  }, list.map(c => /*#__PURE__*/React.createElement(CaseCard, _extends({
    key: c.segment
  }, c, {
    href: "#",
    onClick: e => e.preventDefault()
  }))))), /*#__PURE__*/React.createElement(FinalCta, {
    go: go
  }));
}
window.Results = Results;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Results.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Schedule.jsx
try { (() => {
function Schedule({
  go
}) {
  const [open, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const [mps, setMps] = React.useState({
    ml: true,
    shopee: false,
    amazon: false,
    tiktok: false
  });
  const submit = e => {
    e.preventDefault();
    setOpen(true);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '96px 0 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Diagn\xF3stico gratuito \xB7 30 min"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      font: '700 56px/1.05 var(--font-display)',
      letterSpacing: '-0.02em'
    }
  }, "Traga sua conta. Sa\xEDmos com tr\xEAs n\xFAmeros."), /*#__PURE__*/React.createElement(Lead, null, "Margem real, tarifa efetiva e ROAS. Ao vivo, na sua tela, sem slide."), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '40px 0 0'
    }
  }, [['01', 'Você preenche', '2 minutos. Só o essencial.'], ['02', 'Escolhemos o horário', 'Confirmação no WhatsApp em até 1 dia útil.'], ['03', 'Diagnóstico ao vivo', 'Google Meet, 30 min, com sua conta aberta.']].map(([n, t, d]) => /*#__PURE__*/React.createElement("li", {
    key: n,
    style: {
      display: 'grid',
      gridTemplateColumns: '48px 1fr',
      gap: 16,
      padding: '18px 0',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1.6 var(--font-mono)',
      letterSpacing: '0.08em',
      color: 'var(--amber)'
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 18px/1.3 var(--font-display)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.5 var(--font-body)',
      color: 'var(--muted)',
      marginTop: 4
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    bare: true,
    size: "sm",
    value: "47",
    label: "sellers atendidos"
  }), /*#__PURE__*/React.createElement(StatTile, {
    bare: true,
    size: "sm",
    value: "1 dia",
    label: "para confirmar"
  }))), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome",
    placeholder: "Seu nome",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "WhatsApp",
    prefix: "+55",
    placeholder: "11 99999-9999",
    required: true
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Loja ou conta principal",
    placeholder: "link ou nome da loja"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Faturamento mensal",
    prefix: "R$",
    placeholder: "80.000",
    hint: "M\xE9dia dos \xFAltimos 3 meses"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Tempo vendendo online",
    placeholder: "Escolha",
    options: ['Menos de 1 ano', '1 a 3 anos', 'Mais de 3 anos']
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.2 var(--font-mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: 12
    }
  }, "Onde voc\xEA vende"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, [['ml', 'Mercado Livre'], ['shopee', 'Shopee'], ['amazon', 'Amazon'], ['tiktok', 'TikTok Shop']].map(([k, l]) => /*#__PURE__*/React.createElement(Checkbox, {
    key: k,
    label: l,
    checked: mps[k],
    onChange: e => setMps({
      ...mps,
      [k]: e.target.checked
    })
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.2 var(--font-mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: 12
    }
  }, "Maior dor hoje"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "dor",
    label: "Margem baixa",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "dor",
    label: "Ads sem retorno"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "dor",
    label: "Estoque e log\xEDstica"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "dor",
    label: "Reputa\xE7\xE3o"
  }))), /*#__PURE__*/React.createElement(Input, {
    label: "Contexto",
    multiline: true,
    placeholder: "Conte em 2 linhas onde est\xE1 travando."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Posso receber a confirma\xE7\xE3o no WhatsApp.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true
  }, "Agendar diagn\xF3stico gratuito"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 13px/1.5 var(--font-body)',
      color: 'var(--muted)',
      textAlign: 'center'
    }
  }, "Sem compromisso. Sem fidelidade. Dados usados s\xF3 para o diagn\xF3stico.")))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: () => setOpen(false),
    eyebrow: "Diagn\xF3stico",
    title: "Pedido enviado.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setOpen(false)
    }, "Voltar ao site"), /*#__PURE__*/React.createElement(Button, {
      arrow: false,
      onClick: () => {
        setOpen(false);
        setToast(true);
        setTimeout(() => setToast(false), 4000);
      }
    }, "Ok"))
  }, "Confirmamos o hor\xE1rio no seu WhatsApp em at\xE9 1 dia \xFAtil. Enquanto isso, abra a calculadora de margem nos materiais."), toast && /*#__PURE__*/React.createElement(ToastStack, null, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Pedido enviado.",
    message: "Retornamos em at\xE9 1 dia \xFAtil.",
    onClose: () => setToast(false)
  })));
}
window.Schedule = Schedule;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Schedule.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
const DS = window.EscalaHubDesignSystem_209bdb;
const {
  Button,
  Icon,
  Eyebrow,
  StatTile,
  MarketplaceChip,
  Badge,
  Tag,
  CaseCard,
  HubCard,
  MaterialCard,
  Nav,
  Footer,
  Tabs,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Dialog,
  Toast,
  ToastStack,
  Tooltip
} = DS;
const LOGO = '../../assets/logo/logo-escalahub-dark.svg';
const LOGO_LIGHT = '../../assets/logo/logo-escalahub-light.svg';
function Section({
  children,
  alt,
  paper,
  style,
  id,
  tight
}) {
  const bg = paper ? 'var(--paper)' : alt ? 'var(--surface)' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    className: paper ? 'paper' : '',
    style: {
      background: bg,
      color: paper ? 'var(--ink)' : 'var(--text)',
      padding: (tight ? 64 : 120) + 'px 0',
      borderTop: alt && !paper ? '1px solid var(--border)' : 0,
      borderBottom: alt && !paper ? '1px solid var(--border)' : 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 24px'
    }
  }, children));
}
function H2({
  children,
  paper,
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 0',
      font: '700 44px/1.1 var(--font-display)',
      letterSpacing: '-0.02em',
      color: paper ? 'var(--ink)' : 'var(--text)',
      maxWidth: 760,
      textWrap: 'pretty',
      ...style
    }
  }, children);
}
function Lead({
  children,
  paper,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      font: '400 18px/1.6 var(--font-body)',
      color: paper ? 'var(--muted-on-paper)' : 'var(--muted)',
      maxWidth: 640,
      textWrap: 'pretty',
      ...style
    }
  }, children);
}
function Photo({
  label,
  h = 320,
  amber = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: 12,
      border: '1px solid var(--border)',
      background: 'linear-gradient(160deg,#1C1C1F 0%,#0A0A0B 75%)',
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, amber && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -60,
      top: -60,
      width: 240,
      height: 240,
      borderRadius: '50%',
      background: 'radial-gradient(circle,rgba(255,177,27,.45),transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,transparent 40%,rgba(10,10,11,.72))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 14,
      font: '500 12px/1.2 var(--font-mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, "foto \xB7 ", label));
}
function Mockup({
  h = 360,
  style
}) {
  const bars = [42, 55, 48, 70, 64, 82, 78, 96];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: 16,
      background: 'var(--navy)',
      border: '1px solid var(--navy-soft)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../assets/logo/logo-escalahub-on-navy.svg',
    alt: "",
    style: {
      height: 20
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "soon"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 12
    }
  }, [['R$ 185.190', 'faturamento', '+25%'], ['R$ 12.380', 'vendas hoje', '+42%'], ['19,4%', 'margem', '+8pp']].map(([v, l, d]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: 'rgba(255,255,255,.04)',
      border: '1px solid rgba(143,163,232,.25)',
      borderRadius: 8,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 22px/1 var(--font-display)',
      letterSpacing: '-0.02em',
      color: '#F4F2EE'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 8,
      font: '500 11px/1 var(--font-mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: '#8FA3E8'
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--up)'
    }
  }, "\u2191 ", d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
      borderTop: '1px solid rgba(143,163,232,.2)',
      paddingTop: 16
    }
  }, bars.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: b + '%',
      background: i === bars.length - 1 ? 'var(--amber)' : 'rgba(47,85,212,.6)',
      borderRadius: 3
    }
  }))));
}
const CASES = [{
  value: '+38%',
  segment: 'Autopeças · R$ 80k/mês',
  marketplace: 'ml',
  period: '90 dias',
  description: 'Reprecificação e catálogo. Margem de 11% para 19%.'
}, {
  value: 'R$ 420k',
  delta: '2,1x',
  segment: 'Casa e jardim · R$ 200k/mês',
  marketplace: 'shopee',
  period: '6 meses',
  description: 'Full + campanhas. Ticket médio subiu 34%.'
}, {
  value: '-31%',
  segment: 'Eletrônicos · R$ 500k/mês',
  marketplace: 'amazon',
  period: '120 dias',
  description: 'Custo de ads por venda. ROAS de 3,1 para 5,4.'
}, {
  value: '4,8x',
  segment: 'Beleza · R$ 40k/mês',
  marketplace: 'tiktok',
  period: '60 dias',
  description: 'Lives semanais e afiliados. Do zero a R$ 190k.'
}, {
  value: '+62%',
  segment: 'Pet · R$ 120k/mês',
  marketplace: 'ml',
  period: '90 dias',
  description: 'Kits e anúncios premium. Recompra de 18% para 29%.'
}, {
  value: '9,2',
  segment: 'Moda · R$ 60k/mês',
  marketplace: 'shopee',
  period: '30 dias',
  description: 'Nota de loja de 7,4 para 9,2. Devoluções -40%.'
}];
const FOOT_COLS = [{
  title: 'Hub',
  links: [{
    label: 'Consultoria',
    href: '#'
  }, {
    label: 'Metri Hub',
    href: '#'
  }, {
    label: 'GLN Studio',
    href: '#'
  }]
}, {
  title: 'Marketplaces',
  links: [{
    label: 'Mercado Livre',
    href: '#'
  }, {
    label: 'Shopee',
    href: '#'
  }, {
    label: 'Amazon',
    href: '#'
  }, {
    label: 'TikTok Shop',
    href: '#'
  }]
}, {
  title: 'Materiais',
  links: [{
    label: 'Blog',
    href: '#'
  }, {
    label: 'Calculadora',
    href: '#'
  }, {
    label: 'Cursos',
    href: '#'
  }]
}];
function FinalCta({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    alt: true,
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Diagn\xF3stico gratuito \xB7 30 min"), /*#__PURE__*/React.createElement(H2, {
    style: {
      fontSize: 36
    }
  }, "Descubra quanto est\xE1 deixando na mesa."), /*#__PURE__*/React.createElement(Lead, {
    style: {
      marginTop: 12
    }
  }, "Olhamos seus an\xFAncios, tarifas e margem ao vivo. Sem compromisso.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('agendar')
  }, "Agendar diagn\xF3stico gratuito"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 16
    })
  }, "Falar no WhatsApp"))));
}
Object.assign(window, {
  DS,
  Button,
  Icon,
  Eyebrow,
  StatTile,
  MarketplaceChip,
  Badge,
  Tag,
  CaseCard,
  HubCard,
  MaterialCard,
  Nav,
  Footer,
  Tabs,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Dialog,
  Toast,
  ToastStack,
  Tooltip,
  LOGO,
  LOGO_LIGHT,
  Section,
  H2,
  Lead,
  Photo,
  Mockup,
  CASES,
  FOOT_COLS,
  FinalCta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CaseCard = __ds_scope.CaseCard;

__ds_ns.HubCard = __ds_scope.HubCard;

__ds_ns.MaterialCard = __ds_scope.MaterialCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.MARKETPLACES = __ds_scope.MARKETPLACES;

__ds_ns.MarketplaceChip = __ds_scope.MarketplaceChip;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.CHECK_CSS = __ds_scope.CHECK_CSS;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FIELD_CSS = __ds_scope.FIELD_CSS;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
