"""Gera o símbolo Escala Hub parametrizado (espessura T, raio r) + wordmark em Sora."""
import pathlib
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

W, H = 366.0, 353.35
K = 0.5523  # cubic approx of quarter circle

def polys(T, d=None):
    yA, xB, xE, yF = 235.0, 213.6, 152.6, 205.7
    d = d if d else round(T*0.65, 1)
    S = [(0,0),(T,0),(T,yA-T),(xB,yA-T),(xB,H-T),(W,H-T),(W,H),(xB-T,H),(xB-T,yA),(0,yA)]
    L = [(xE,0),(W,0),(W,yF),(W-T,yF),(W-T,T),(xE,T)]
    D = [(0,H-d),(d,H-d),(d,H),(0,H)]
    return S, L, D

def rounded(pts, r):
    n = len(pts); out = []
    for i in range(n):
        P, V, N = pts[i-1], pts[i], pts[(i+1)%n]
        u1 = (V[0]-P[0], V[1]-P[1]); l1 = (u1[0]**2+u1[1]**2)**.5; u1 = (u1[0]/l1, u1[1]/l1)
        u2 = (N[0]-V[0], N[1]-V[1]); l2 = (u2[0]**2+u2[1]**2)**.5; u2 = (u2[0]/l2, u2[1]/l2)
        rr = min(r, l1/2, l2/2)
        s = (V[0]-u1[0]*rr, V[1]-u1[1]*rr); e = (V[0]+u2[0]*rr, V[1]+u2[1]*rr)
        c1 = (V[0]-u1[0]*rr*(1-K), V[1]-u1[1]*rr*(1-K)); c2 = (V[0]+u2[0]*rr*(1-K), V[1]+u2[1]*rr*(1-K))
        out.append(("M" if i==0 else "L") + f"{s[0]:.2f} {s[1]:.2f}")
        out.append(f"C{c1[0]:.2f} {c1[1]:.2f} {c2[0]:.2f} {c2[1]:.2f} {e[0]:.2f} {e[1]:.2f}")
    return " ".join(out) + " Z"

def symbol_paths(T, r, c_big, c_top, c_dot):
    S, L, D = polys(T)
    return (f'  <path fill="{c_big}" d="{rounded(S, r)}"/>\n'
            f'  <path fill="{c_top}" d="{rounded(L, r)}"/>\n'
            f'  <path fill="{c_dot}" d="{rounded(D, r*0.6)}"/>\n')

_font_cache = {}
def text_paths(text, ttf, size, x0, baseline, tracking_em=-0.03):
    if ttf not in _font_cache: _font_cache[ttf] = TTFont(ttf)
    f = _font_cache[ttf]; gs = f.getGlyphSet(); cmap = f.getBestCmap(); upem = f['head'].unitsPerEm
    hmtx = f['hmtx']; scale = size/upem; x = x0; out=[]
    for ch in text:
        g = cmap[ord(ch)]; pen = SVGPathPen(gs)
        gs[g].draw(TransformPen(pen, (scale,0,0,-scale,x,baseline)))
        d = pen.getCommands()
        if d: out.append(d)
        x += hmtx[g][0]*scale + tracking_em*size
    return out, x

SIZE, GAP = 300, 120
BASE = H/2 + 0.5*0.72*SIZE
X0 = W + GAP

def lockup(T, r, c_big, c_top, c_dot, c_text, c_hub=None):
    body = symbol_paths(T, r, c_big, c_top, c_dot)
    if c_hub is None:
        parts, xe = text_paths("Escala Hub", "fonts/Sora-600.ttf", SIZE, X0, BASE)
        body += "".join(f'  <path fill="{c_text}" d="{d}"/>\n' for d in parts)
    else:
        p1, x1 = text_paths("Escala ", "fonts/Sora-600.ttf", SIZE, X0, BASE)
        p2, xe = text_paths("Hub", "fonts/Sora-400.ttf", SIZE, x1, BASE)
        body += "".join(f'  <path fill="{c_text}" d="{d}"/>\n' for d in p1)
        body += "".join(f'  <path fill="{c_hub}" d="{d}"/>\n' for d in p2)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {xe+10:.0f} {H}">\n{body}</svg>\n'

def symbol_svg(T, r, c_big, c_top, c_dot):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.0f} {H}">\n{symbol_paths(T, r, c_big, c_top, c_dot)}</svg>\n'
