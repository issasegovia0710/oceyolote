import React, { useEffect, useMemo, useState } from "react";

export default function OceyolotHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = useMemo(
    () => [
      { href: "#inicio", label: "Inicio" },
      { href: "#granos", label: "Granos" },
      { href: "#nuevos", label: "Nuevos" },
      { href: "#merch", label: "Merch" },
    ],
    []
  );

  return (
    <header className={`oyh-header ${scrolled ? "isScrolled" : ""}`}>
      <div className="oyh-inner">
        {/* Brand */}
        <a className="oyh-brand" href="#inicio" aria-label="Oceyolot - Inicio">
          <div className="oyh-logo" aria-hidden="true" />
          <div className="oyh-brandText">
            <div className="oyh-brandName">Oceyolot</div>
            <div className="oyh-brandSub">Café artesanal para rituales diarios</div>
          </div>
        </a>

        {/* Links */}
        <nav className="oyh-nav" aria-label="Navegación principal">
          {links.map((l) => (
            <a className="oyh-link" key={l.href} href={l.href}>
              <span className="oyh-linkGlow" aria-hidden="true" />
              {l.label}
            </a>
          ))}

          <button className="oyh-more" type="button" aria-label="Más opciones">
            <span className="oyh-moreText">Más</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>

        {/* Icons */}
        <div className="oyh-actions">
          <button className="oyh-iconBtn" title="Buscar" aria-label="Buscar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21l-4.3-4.3m1.3-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button className="oyh-iconBtn" title="Carrito" aria-label="Carrito">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6h15l-1.5 9h-12L6 6z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path d="M6 6L5 3H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="9" cy="20" r="1.5" fill="currentColor" />
              <circle cx="18" cy="20" r="1.5" fill="currentColor" />
            </svg>
          </button>

          <button className="oyh-iconBtn" title="Menú" aria-label="Menú">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        :root{
          --oy-bg0:#070505;
          --oy-bg1:#0d0706;
          --oy-coffee:#24140d;
          --oy-coffee2:#3a2317;
          --oy-ink:#050405;

          --oy-gold:#d7b56a;
          --oy-gold2:#f3d28a;
          --oy-gold3:#b89243;

          --oy-white:#fff7ee;
          --oy-white2: rgba(255,247,238,.86);

          --oy-glass: rgba(255,255,255,.03);
          --oy-stroke: rgba(255,255,255,.10);
          --oy-stroke2: rgba(215,181,106,.25);
          --oy-shadow: 0 18px 55px rgba(0,0,0,.55);
        }

        *{ box-sizing:border-box; }

        .oyh-header{
          position: sticky;
          top: 0;
          z-index: 50;

          /* Transparente: sin fondo sólido */
          background: rgba(0,0,0,0);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          padding: 14px 0;
          transition: background .25s ease, border-color .25s ease, transform .25s ease;
        }

        /* Un toquecito al hacer scroll (sigue siendo transparente, solo “glass”) */
        .oyh-header.isScrolled{
          background: linear-gradient(180deg, rgba(5,4,5,.55), rgba(5,4,5,.18));
          border-bottom: 1px solid rgba(215,181,106,.10);
        }

        .oyh-inner{
          width: min(1160px, 92vw);
          margin: 0 auto;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 16px;
        }

        /* Brand */
        .oyh-brand{
          display:flex;
          align-items:center;
          gap: 10px;
          text-decoration:none;
          min-width: 230px;
        }

        .oyh-logo{
          width: 40px;
          height: 40px;
          border-radius: 14px;
          background:
            radial-gradient(circle at 28% 30%, rgba(243,210,138,.35), rgba(0,0,0,0) 60%),
            radial-gradient(circle at 80% 70%, rgba(215,181,106,.22), rgba(0,0,0,0) 62%),
            linear-gradient(135deg, rgba(215,181,106,.55), rgba(18,10,8,.95));
          border: 1px solid rgba(215,181,106,.18);
          box-shadow: 0 16px 34px rgba(0,0,0,.38);
          position: relative;
          overflow:hidden;
        }

        .oyh-logo::after{
          content:"";
          position:absolute;
          inset:-30%;
          background: conic-gradient(from 180deg, rgba(215,181,106,0), rgba(243,210,138,.22), rgba(215,181,106,0));
          animation: oyhSpin 5.8s linear infinite;
          opacity: .8;
        }

        .oyh-brandText{ display:flex; flex-direction: column; gap: 2px; }

        .oyh-brandName{
          font-weight: 950;
          letter-spacing: .3px;
          line-height: 1.0;

          /* Dorado animado */
          background: linear-gradient(90deg, var(--oy-gold3), var(--oy-gold2), var(--oy-gold));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;

          filter: drop-shadow(0 10px 16px rgba(0,0,0,.55));
          animation: oyhGold 3.2s ease-in-out infinite;
        }

        .oyh-brandSub{
          font-size: 12px;
          color: rgba(255,247,238,.74);
        }

        /* Nav */
        .oyh-nav{
          display:flex;
          align-items:center;
          gap: 12px;
        }

        .oyh-link{
          position: relative;
          text-decoration:none;
          font-size: 13px;
          font-weight: 800;
          color: rgba(215,181,106,.92);
          padding: 9px 12px;
          border-radius: 999px;
          border: 1px solid rgba(215,181,106,.18);
          background: rgba(0,0,0,.18);
          box-shadow: 0 12px 26px rgba(0,0,0,.22);
          overflow:hidden;
          transition: transform .18s ease, background .18s ease, border-color .18s ease;
        }

        .oyh-link:hover{
          transform: translateY(-1px);
          background: rgba(0,0,0,.28);
          border-color: rgba(243,210,138,.32);
        }

        .oyh-linkGlow{
          position:absolute;
          inset:-2px;
          background:
            radial-gradient(120px 50px at 20% 30%, rgba(243,210,138,.20), rgba(0,0,0,0) 60%),
            radial-gradient(90px 40px at 80% 70%, rgba(215,181,106,.14), rgba(0,0,0,0) 60%);
          opacity:.9;
          pointer-events:none;
          animation: oyhGlow 4.2s ease-in-out infinite;
        }

        .oyh-more{
          display:flex;
          align-items:center;
          gap: 6px;
          border: 1px solid rgba(215,181,106,.18);
          background: rgba(0,0,0,.18);
          color: rgba(215,181,106,.92);
          padding: 9px 12px;
          border-radius: 999px;
          cursor:pointer;
          font-weight: 900;
          box-shadow: 0 12px 26px rgba(0,0,0,.22);
          transition: transform .18s ease, background .18s ease, border-color .18s ease;
        }

        .oyh-more:hover{
          transform: translateY(-1px);
          background: rgba(0,0,0,.28);
          border-color: rgba(243,210,138,.32);
        }

        /* Actions */
        .oyh-actions{
          display:flex;
          align-items:center;
          gap: 10px;
          min-width: 160px;
          justify-content:flex-end;
        }

        .oyh-iconBtn{
          width: 40px;
          height: 40px;
          border-radius: 999px;
          border: 1px solid rgba(215,181,106,.18);
          background: rgba(0,0,0,.18);
          color: rgba(243,210,138,.92);
          display:grid;
          place-items:center;
          cursor:pointer;
          box-shadow: 0 12px 26px rgba(0,0,0,.22);
          transition: transform .18s ease, background .18s ease, border-color .18s ease;
        }

        .oyh-iconBtn:hover{
          transform: translateY(-1px) scale(1.02);
          background: rgba(0,0,0,.28);
          border-color: rgba(243,210,138,.32);
        }

        /* Animations */
        @keyframes oyhGold{
          0%,100%{ filter: drop-shadow(0 10px 16px rgba(0,0,0,.55)); }
          50%{ filter: drop-shadow(0 10px 20px rgba(243,210,138,.18)) drop-shadow(0 10px 16px rgba(0,0,0,.55)); }
        }

        @keyframes oyhGlow{
          0%,100%{ transform: translateX(0); opacity:.85; }
          50%{ transform: translateX(6px); opacity:1; }
        }

        @keyframes oyhSpin{
          0%{ transform: rotate(0deg); }
          100%{ transform: rotate(360deg); }
        }

        /* Responsive */
        @media (max-width: 980px){
          .oyh-nav{ display:none; } /* como tu imagen: solo marca + iconos */
        }

        @media (prefers-reduced-motion: reduce){
          *{ animation: none !important; transition: none !important; }
        }
      `}</style>
    </header>
  );
}
