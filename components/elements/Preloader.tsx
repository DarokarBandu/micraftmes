"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 1. Force a minimum 2-second delay
    const minDelayPromise = new Promise(resolve => setTimeout(resolve, 2000));

    // 2. Resolve when window is fully loaded
    const windowLoadPromise = new Promise(resolve => {
      if (document.readyState === "complete") {
        resolve(true);
      } else {
        window.addEventListener("load", () => resolve(true));
      }
    });

    // When both conditions are met (at least 2 seconds passed AND window is loaded)
    Promise.all([minDelayPromise, windowLoadPromise]).then(() => {
      setIsFading(true);
      // 500ms fade out transition
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    });
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className={`mes-premium-preloader ${isFading ? "fade-out" : ""}`}>
        <div className="mes-preloader-inner">

          {/* Animated High-Tech MES Loader */}
          <div className="mes-loader-container">
            <div className="mes-outer-ring"></div>
            <div className="mes-inner-ring"></div>
            <div className="mes-hexagon"></div>
          </div>

          {/* Loading Subtext */}
          <div className="mes-loading-text">
            Initializing System<span>...</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .mes-premium-preloader {
          position: fixed;
          inset: 0;
          background: #070C14;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999999;
          opacity: 1;
          transition: opacity 0.5s ease-in-out;
        }

        .mes-premium-preloader.fade-out {
          opacity: 0;
          pointer-events: none;
        }
        
        .mes-preloader-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
          padding: 0 20px;
          text-align: center;
        }

        /* Container for the Geometric Animation */
        .mes-loader-container {
          position: relative;
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Outer HUD Ring */
        .mes-outer-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 3px solid transparent;
          border-top: 3px solid rgba(255, 210, 93, 0.2);
          border-right: 3px solid rgba(255, 210, 93, 0.2);
          border-bottom: 3px solid #FFD25D;
          border-left: 3px solid #FFD25D;
          animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }

        /* Inner Dashed Ring */
        .mes-inner-ring {
          position: absolute;
          width: 65%;
          height: 65%;
          border-radius: 50%;
          border: 2px dashed rgba(255, 255, 255, 0.3);
          animation: spin-reverse 4s linear infinite;
        }

        /* Central Data Core (Hexagon) */
        .mes-hexagon {
          width: 26px;
          height: 30px;
          background-color: #FFD25D;
          position: relative;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          animation: pulse-hex 1.5s ease-in-out infinite;
          /* Filter is used for glow on clip-path elements */
          filter: drop-shadow(0 0 8px rgba(255, 210, 93, 0.8));
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes pulse-hex {
          0%, 100% { transform: scale(0.85); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 1; filter: drop-shadow(0 0 15px rgba(255, 210, 93, 1)); }
        }

        /* High-Tech Text */
        .mes-loading-text {
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
          letter-spacing: 3px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          text-transform: uppercase;
        }

        .mes-loading-text span {
          color: #FFD25D;
          animation: blink 1.5s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @media (max-width: 768px) {
          .mes-loader-container {
            width: 75px;
            height: 75px;
          }
          .mes-hexagon {
            width: 22px;
            height: 26px;
          }
          .mes-loading-text {
            font-size: 11px;
            letter-spacing: 2px;
          }
        }
      `}} />
    </>
  );
}
