import React, { useMemo, useState } from "react";
import OceyolotHeader from "./OceyolotHeader.jsx";

export default function Home() {
  const IMG_MODELO =
    "https://images.unsplash.com/photo-1520975867597-0f7fdb0e1bb3?auto=format&fit=crop&w=900&q=80";
  const IMG_BOLSA =
    "https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&w=900&q=80";

  const productos = useMemo(
    () => [
      { id: 1, titulo: "Producto 1: Tueste Medio", gramos: "500 g", precio: "$240" },
      { id: 2, titulo: "Producto 2: Tueste Oscuro", gramos: "250 g", precio: "$155" },
      { id: 3, titulo: "Producto 3: Descafeinado", gramos: "500 g", precio: "$260" },
    ],
    []
  );

  const [active, setActive] = useState(0);

  const prev = () => setActive((v) => (v - 1 + productos.length) % productos.length);
  const next = () => setActive((v) => (v + 1) % productos.length);

  const visibles = useMemo(() => {
    const a = productos[active];
    const b = productos[(active + 1) % productos.length];
    const c = productos[(active + 2) % productos.length];
    return [a, b, c];
  }, [active, productos]);

  return (
    <div className="oy-page" id="inicio">
      <div className="oy-bgRing" aria-hidden="true" />
      <div className="oy-grain" aria-hidden="true" />

      {/* ✅ HEADER separado */}
      <OceyolotHeader />

      <main className="oy-main">
        <section className="oy-hero">
          <div className="oy-left oy-reveal" style={{ animationDelay: "80ms" }}>
            <div className="oy-photoWrap">
              <div className="oy-arch" aria-hidden="true" />
              <img className="oy-photo" src={IMG_MODELO} alt="Persona con café" />

              <div className="oy-float oy-floatTop">
                <span className="oy-floatIcon">🏷️</span>
                <span>20% de descuento en tu primera bolsa</span>
              </div>

              <div className="oy-float oy-floatLeft">
                <span className="oy-floatIcon">🚚</span>
                <span>Envío a todo México</span>
              </div>

              <div className="oy-float oy-floatBottom">
                <span className="oy-floatIcon">⭐</span>
                <span>Tueste fresco, aroma real</span>
              </div>
            </div>
          </div>

          <div className="oy-right oy-reveal" style={{ animationDelay: "140ms" }}>
            <h1 className="oy-title">
              No es solo <span className="oy-titleDark">café</span>,
              <br />
              es un <span className="oy-titleDark">ritual</span>.
            </h1>

            <p className="oy-sub">
              Oceyolot selecciona granos con cariño y los tuesta para que tu día huela a cacao,
              pan tostado y calma. ☕️
            </p>

            <div className="oy-cta">
              <button className="oy-btnPrimary">
                Comprar ahora <span className="oy-arrow">→</span>
              </button>
              <button className="oy-btnGhost">Conocer más</button>
            </div>

            <div className="oy-stats">
              <div className="oy-stat">
                <div className="oy-statNum">48h</div>
                <div className="oy-statLbl">Del tueste a tu puerta</div>
              </div>
              <div className="oy-stat">
                <div className="oy-statNum">4</div>
                <div className="oy-statLbl">Perfiles de sabor</div>
              </div>
              <div className="oy-stat">
                <div className="oy-statNum">100%</div>
                <div className="oy-statLbl">Aroma que abraza</div>
              </div>
            </div>
          </div>
        </section>

        <section className="oy-bottom oy-reveal" id="nuevos" style={{ animationDelay: "220ms" }}>
          <div className="oy-newLabel">
            <div className="oy-newTitle">
              Nuevos
              <br />
              productos
            </div>
            <div className="oy-newControls">
              <button className="oy-roundBtn" onClick={prev} aria-label="Anterior">
                ←
              </button>
              <button className="oy-roundBtn oy-roundBtnDark" onClick={next} aria-label="Siguiente">
                →
              </button>
            </div>
          </div>

          <div className="oy-cards">
            {visibles.map((p, idx) => (
              <div className="oy-card" key={p.id} style={{ animationDelay: `${240 + idx * 70}ms` }}>
                <div className="oy-cardText">
                  <div className="oy-cardTitle">{p.titulo}</div>
                  <div className="oy-cardMeta">{p.gramos}</div>
                  <div className="oy-cardPrice">{p.precio}</div>
                </div>

                <div className="oy-bagWrap">
                  <img className="oy-bag" src={IMG_BOLSA} alt="Bolsa de café" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Secciones ancla para el menú */}
        <div id="granos" style={{ height: 1 }} />
        <div id="merch" style={{ height: 1 }} />
      </main>

      <style>{`
        :root{
          /* Ahora más negro + café oscuro + dorado + blancos */
          --bg0:#050405;
          --bg1:#120907;
          --bg2:#24140d;
          --bg3:#3a2317;

          --gold:#d7b56a;
          --gold2:#f3d28a;
          --gold3:#b89243;

          --texto:#fff7ee;
          --muted: rgba(255,247,238,.78);

          --glass: rgba(255,255,255,.05);
          --stroke: rgba(255,255,255,.12);
          --shadow: 0 18px 55px rgba(0,0,0,.55);
          --shadow2: 0 14px 30px rgba(0,0,0,.28);
        }

        *{ box-sizing:border-box; }
        body{ margin:0; background: var(--bg0); }

        .oy-page{
          min-height:100vh;
          background:
            radial-gradient(1100px 700px at 18% 12%, rgba(243,210,138,.10), rgba(0,0,0,0) 60%),
            radial-gradient(900px 700px at 88% 6%, rgba(215,181,106,.08), rgba(0,0,0,0) 55%),
            linear-gradient(180deg, var(--bg1) 0%, var(--bg2) 56%, #0a0606 100%);
          color: var(--texto);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          position: relative;
          overflow:hidden;
        }

        .oy-bgRing{
          position:absolute;
          right:-260px;
          top:-220px;
          width: 920px;
          height: 920px;
          border-radius: 999px;
          border: 1px solid rgba(215,181,106,.14);
          box-shadow:
            inset 0 0 0 1px rgba(215,181,106,.06),
            0 0 0 140px rgba(215,181,106,.02);
          pointer-events:none;
          animation: ringFloat 8s ease-in-out infinite;
        }
        .oy-bgRing::after{
          content:"";
          position:absolute;
          inset: 120px;
          border-radius: 999px;
          border: 1px solid rgba(243,210,138,.08);
        }

        .oy-grain{
          position:absolute;
          inset:0;
          background-image: radial-gradient(rgba(255,255,255,.030) 1px, rgba(0,0,0,0) 1px);
          background-size: 18px 18px;
          opacity:.28;
          pointer-events:none;
          mix-blend-mode: overlay;
        }

        .oy-main{
          width: min(1160px, 92vw);
          margin: 0 auto;
          padding: 18px 0 44px;
        }

        .oy-hero{
          display:grid;
          grid-template-columns: 1.05fr 1.15fr;
          align-items:center;
          gap: 28px;
          padding: 22px 0 18px;
        }

        .oy-photoWrap{
          position:relative;
          width: min(520px, 100%);
          height: 420px;
          margin: 0 auto;
          transform-style: preserve-3d;
        }
        .oy-arch{
          position:absolute;
          inset: 32px 74px 32px 74px;
          background:
            radial-gradient(360px 260px at 40% 30%, rgba(243,210,138,.12), rgba(0,0,0,0) 65%),
            linear-gradient(180deg, rgba(5,4,5,.96), rgba(18,9,7,.96));
          border-radius: 999px 999px 22px 22px;
          box-shadow: var(--shadow);
          border: 1px solid rgba(255,255,255,.08);
          animation: archBreath 6.2s ease-in-out infinite;
        }
        .oy-photo{
          position:absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%) translateZ(6px);
          height: 420px;
          width: auto;
          object-fit: cover;
          border-radius: 18px;
          filter: drop-shadow(0 20px 34px rgba(0,0,0,.40));
          animation: photoFloat 5.2s ease-in-out infinite;
        }

        .oy-float{
          position:absolute;
          display:flex;
          align-items:center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 12px;
          background: rgba(255,247,238,.94);
          color: rgba(10,6,6,.95);
          font-size: 12px;
          box-shadow: 0 18px 30px rgba(0,0,0,.22);
          border: 1px solid rgba(10,6,6,.10);
          white-space: nowrap;
          animation: popIn .7s ease both, floaty 3.2s ease-in-out infinite;
        }
        .oy-floatIcon{
          width: 20px; height: 20px;
          display:grid; place-items:center;
          border-radius: 8px;
          background: rgba(58,35,23,.10);
        }
        .oy-floatTop{ top: 84px; left: 58%; transform: translateX(-10%); animation-delay: .25s, .25s; }
        .oy-floatLeft{ top: 196px; left: -6px; animation-delay: .33s, .33s; }
        .oy-floatBottom{ bottom: 74px; left: 58%; transform: translateX(-10%); animation-delay: .40s, .40s; }

        .oy-title{
          margin: 0 0 14px;
          font-size: clamp(34px, 4.3vw, 54px);
          line-height: 1.02;
          letter-spacing: -.6px;
          color: rgba(255,247,238,.94);
          font-weight: 950;
          text-shadow: 0 18px 30px rgba(0,0,0,.28);
        }
        .oy-titleDark{
          background: linear-gradient(90deg, var(--gold3), var(--gold2), var(--gold));
          -webkit-background-clip:text;
          background-clip:text;
          color: transparent;
          filter: drop-shadow(0 10px 16px rgba(0,0,0,.42));
        }
        .oy-sub{
          margin: 0 0 18px;
          font-size: 14px;
          color: var(--muted);
          line-height: 1.55;
          max-width: 520px;
        }

        .oy-cta{
          display:flex;
          gap: 12px;
          align-items:center;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .oy-btnPrimary{
          border: 0;
          cursor:pointer;
          padding: 12px 16px;
          border-radius: 14px;
          background:
            radial-gradient(circle at 20% 20%, rgba(243,210,138,.28), rgba(0,0,0,0) 55%),
            linear-gradient(135deg, rgba(215,181,106,.58), rgba(10,6,6,.95));
          color: rgba(255,255,255,.95);
          font-weight: 950;
          font-size: 13px;
          box-shadow: 0 18px 40px rgba(0,0,0,.34);
          display:flex;
          align-items:center;
          gap: 10px;
          transition: transform .18s ease, filter .18s ease;
        }
        .oy-btnPrimary:hover{
          transform: translateY(-1px) scale(1.01);
          filter: brightness(1.06);
        }
        .oy-arrow{
          width: 24px;
          height: 24px;
          border-radius: 999px;
          background: rgba(255,255,255,.14);
          display:grid;
          place-items:center;
          font-weight: 950;
          transition: transform .18s ease;
        }
        .oy-btnPrimary:hover .oy-arrow{ transform: translateX(2px); }

        .oy-btnGhost{
          border: 0;
          cursor:pointer;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255,255,255,.04);
          color: rgba(255,247,238,.90);
          font-weight: 900;
          border: 1px solid rgba(215,181,106,.18);
          transition: transform .18s ease, background .18s ease, border-color .18s ease;
        }
        .oy-btnGhost:hover{
          transform: translateY(-1px);
          background: rgba(255,255,255,.07);
          border-color: rgba(243,210,138,.28);
        }

        .oy-stats{
          display:flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 6px;
        }
        .oy-stat{
          flex: 1 1 160px;
          border-radius: 16px;
          border: 1px solid rgba(215,181,106,.16);
          background: rgba(255,255,255,.03);
          padding: 12px 12px;
          box-shadow: 0 16px 30px rgba(0,0,0,.18);
          animation: liftIn .7s ease both;
        }
        .oy-stat:nth-child(1){ animation-delay: .18s; }
        .oy-stat:nth-child(2){ animation-delay: .26s; }
        .oy-stat:nth-child(3){ animation-delay: .34s; }

        .oy-statNum{
          font-size: 18px;
          font-weight: 950;
          background: linear-gradient(90deg, var(--gold3), var(--gold2), var(--gold));
          -webkit-background-clip:text;
          background-clip:text;
          color: transparent;
        }
        .oy-statLbl{
          font-size: 12px;
          color: rgba(255,247,238,.72);
        }

        .oy-bottom{
          display:grid;
          grid-template-columns: 240px 1fr;
          gap: 18px;
          align-items: end;
          margin-top: 10px;
        }

        .oy-newLabel{
          display:flex;
          flex-direction: column;
          gap: 14px;
          padding: 10px 0;
        }
        .oy-newTitle{
          font-weight: 950;
          color: rgba(255,247,238,.90);
          font-size: 26px;
          line-height: 1.0;
        }

        .oy-newControls{ display:flex; gap: 10px; }
        .oy-roundBtn{
          width: 40px;
          height: 40px;
          border-radius: 14px;
          border: 1px solid rgba(215,181,106,.18);
          background: rgba(0,0,0,.18);
          color: rgba(243,210,138,.92);
          cursor:pointer;
          font-weight: 950;
          box-shadow: 0 12px 24px rgba(0,0,0,.18);
          transition: transform .18s ease, background .18s ease, border-color .18s ease;
        }
        .oy-roundBtn:hover{
          transform: translateY(-1px);
          background: rgba(0,0,0,.28);
          border-color: rgba(243,210,138,.30);
        }
        .oy-roundBtnDark{
          background: rgba(5,4,5,.70);
          border: 1px solid rgba(215,181,106,.14);
        }

        .oy-cards{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          align-items: stretch;
        }

        .oy-card{
          border-radius: 18px;
          background:
            radial-gradient(240px 140px at 18% 20%, rgba(243,210,138,.08), rgba(0,0,0,0) 60%),
            rgba(255,255,255,.04);
          border: 1px solid rgba(215,181,106,.16);
          box-shadow: 0 18px 35px rgba(0,0,0,.22);
          padding: 14px 14px 14px 16px;
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 14px;
          min-height: 124px;
          backdrop-filter: blur(7px);
          animation: cardIn .7s ease both;
          transition: transform .18s ease, background .18s ease, border-color .18s ease;
        }
        .oy-card:hover{
          transform: translateY(-2px);
          border-color: rgba(243,210,138,.22);
          background:
            radial-gradient(240px 140px at 18% 20%, rgba(243,210,138,.12), rgba(0,0,0,0) 60%),
            rgba(255,255,255,.05);
        }

        .oy-cardText{
          display:flex;
          flex-direction: column;
          gap: 6px;
          color: rgba(255,247,238,.88);
        }
        .oy-cardTitle{ font-weight: 950; font-size: 14px; }
        .oy-cardMeta{ font-size: 12px; opacity:.82; }
        .oy-cardPrice{
          font-size: 14px;
          font-weight: 950;
          background: linear-gradient(90deg, var(--gold3), var(--gold2), var(--gold));
          -webkit-background-clip:text;
          background-clip:text;
          color: transparent;
        }

        .oy-bagWrap{
          width: 96px;
          height: 96px;
          border-radius: 16px;
          background:
            radial-gradient(circle at 30% 30%, rgba(243,210,138,.12), rgba(0,0,0,0) 60%),
            rgba(0,0,0,.22);
          border: 1px solid rgba(215,181,106,.14);
          display:grid;
          place-items:center;
          overflow:hidden;
        }
        .oy-bag{
          width: 120px;
          height: 120px;
          object-fit: cover;
          transform: rotate(-6deg) translateY(6px);
          filter: drop-shadow(0 12px 18px rgba(0,0,0,.22));
          animation: bagWiggle 4.6s ease-in-out infinite;
        }

        .oy-reveal{ animation: reveal .75s ease both; }

        @keyframes reveal{
          from{ opacity:0; transform: translateY(10px); filter: blur(2px); }
          to{ opacity:1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes popIn{
          from{ opacity:0; transform: translateY(8px) scale(.98); }
          to{ opacity:1; transform: translateY(0) scale(1); }
        }
        @keyframes liftIn{
          from{ opacity:0; transform: translateY(10px); }
          to{ opacity:1; transform: translateY(0); }
        }
        @keyframes cardIn{
          from{ opacity:0; transform: translateY(10px) scale(.99); }
          to{ opacity:1; transform: translateY(0) scale(1); }
        }
        @keyframes floaty{
          0%,100%{ transform: translateY(0); }
          50%{ transform: translateY(-6px); }
        }
        @keyframes photoFloat{
          0%,100%{ transform: translateX(-50%) translateY(0); }
          50%{ transform: translateX(-50%) translateY(-6px); }
        }
        @keyframes archBreath{
          0%,100%{ filter: brightness(1); }
          50%{ filter: brightness(1.06); }
        }
        @keyframes bagWiggle{
          0%,100%{ transform: rotate(-6deg) translateY(6px); }
          50%{ transform: rotate(-4deg) translateY(4px); }
        }
        @keyframes ringFloat{
          0%,100%{ transform: translate(140px, -120px) rotate(0deg); }
          50%{ transform: translate(140px, -132px) rotate(1.2deg); }
        }

        @media (max-width: 980px){
          .oy-hero{ grid-template-columns: 1fr; }
          .oy-photoWrap{ height: 380px; }
          .oy-photo{ height: 380px; }
          .oy-bottom{ grid-template-columns: 1fr; }
          .oy-cards{ grid-template-columns: 1fr; }
          .oy-newLabel{ flex-direction: row; justify-content: space-between; align-items: end; }
        }
        @media (max-width: 520px){
          .oy-floatLeft{ left: 0; }
          .oy-floatTop, .oy-floatBottom{ left: 52%; }
        }

        @media (prefers-reduced-motion: reduce){
          *{ animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
}
