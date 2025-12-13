import React, { useState, useRef, type FormEvent } from "react";

export const WaitlistHero: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API delay
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      fireConfetti();
    }, 1500);
  };

  // --- Confetti Logic ---
  const fireConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      color: string;
      size: number;
    }> = [];
    const colors = ["#0079da", "#10b981", "#fbbf24", "#f472b6", "#fff"];

    // Resize canvas to cover the button area mostly
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const createParticle = () => {
      return {
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 12, // Random spread X
        vy: (Math.random() - 2) * 10, // Upward velocity
        life: 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 4 + 2,
      };
    };

    // Create batch of particles
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      if (particles.length === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.5; // Gravity
        p.life -= 2;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life / 100);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  };

  // Color tokens
  const colors = {
    textMain: "#ffffff",
    textSecondary: "#94a3b8",
    bluePrimary: "#0079da",
    success: "#10b981", // emerald-500
    inputBg: "#27272a",
    baseBg: "#09090b",
    inputShadow: "rgba(255, 255, 255, 0.1)",
  };

  return (
    <div
      className="w-full min-h-screen bg-black flex items-center justify-center"
      style={{ fontFamily: 'Host Grotesk, sans-serif' }}
    >
      {/* Animation & Responsive Styles */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 60s linear infinite;
        }
        @keyframes bounce-in {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes success-pulse {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.1); }
          70% { transform: scale(0.95); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes success-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); }
          50% { box-shadow: 0 0 60px rgba(16, 185, 129, 0.8), 0 0 100px rgba(16, 185, 129, 0.4); }
        }
        @keyframes checkmark-draw {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes celebration-ring {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
        }
        .animate-success-pulse {
          animation: success-pulse 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-success-glow {
          animation: success-glow 2s ease-in-out infinite;
        }
        .animate-checkmark {
          stroke-dasharray: 24;
          stroke-dashoffset: 24;
          animation: checkmark-draw 0.4s ease-out 0.3s forwards;
        }
        .animate-ring {
          animation: celebration-ring 0.8s ease-out forwards;
        }
        /* Custom 3D classes to replace plugins */
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-x-0 {
          transform: rotateX(0deg);
        }
        .rotate-x-90 {
          transform: rotateX(90deg);
        }
        .-rotate-x-90 {
          transform: rotateX(-90deg);
        }

        /* --- MOBILE VERSION --- */
        @media (max-width: 480px) {
          .waitlist-hero-mobile {
            min-height: 100vh;
            padding: 0;
            background: #09090b;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-right: 1030px; /* Sposta il contenuto verso sinistra su mobile */
          }
          .waitlist-hero-mobile .main-content {
            width: 100%;
            max-width: 100vw;
            padding: 0 12px;
            box-sizing: border-box;
            margin: 0;
          }
          .waitlist-hero-mobile h2 {
            font-size: 32px !important;
            margin-bottom: 12px !important;
            line-height: 1.15 !important;
            letter-spacing: -1px !important;
          }
          .waitlist-hero-mobile p {
            font-size: 16px !important;
            margin-bottom: 20px !important;
          }
          .waitlist-hero-mobile .success-canvas {
            width: 220px !important;
            height: 220px !important;
            left: 50% !important;
            top: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
          .waitlist-hero-mobile .success-state {
            height: 48px !important;
            max-width: 90vw !important;
            border-radius: 20px !important;
            font-size: 16px !important;
          }
        }
      `}</style>

      {/* Main Container */}
      <div
        className="waitlist-hero-mobile relative flex items-center justify-center w-full h-screen bg-transparent overflow-hidden"
        style={{
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          position: "relative",
          zIndex: 1,
        }}
      >

      
        {/* Background Decorative Layer */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center"
          style={{
            perspective: "1200px",
            transform: "perspective(1200px) rotateX(15deg)",
            transformOrigin: "center bottom",
            opacity: 1,
            zIndex: 0, // immagini rotanti sotto tutto
          }}
        >
          {/* Image 3 (Back) - spins clockwise */}
          <div className="absolute inset-0 animate-spin-slow">
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                width: "2000px",
                height: "2000px",
                transform: "translate(-50%, -50%) rotate(279.05deg)",
                zIndex: 0,
              }}
            >
              <img
                src="https://framerusercontent.com/images/oqZEqzDEgSLygmUDuZAYNh2XQ9U.png?scale-down-to-2048"
                alt=""
                className="w-full h-full object-cover opacity-50"
              />
            </div>
          </div>

          {/* Image 2 (Middle) - spins counter-clockwise */}
          <div className="absolute inset-0 animate-spin-slow-reverse">
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                width: "1000px",
                height: "1000px",
                transform: "translate(-50%, -50%) rotate(304.42deg)",
                zIndex: 1,
              }}
            >
              <img
                src="https://framerusercontent.com/images/UbucGYsHDAUHfaGZNjwyCzViw8.png?scale-down-to-1024"
                alt=""
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>

          {/* Image 1 (Front) - spins clockwise */}
          <div className="absolute inset-0 animate-spin-slow">
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                width: "800px",
                height: "800px",
                transform: "translate(-50%, -50%) rotate(48.33deg)",
                zIndex: 2,
              }}
            >
               <img
                src="https://framerusercontent.com/images/Ans5PAxtJfg3CwxlrPMSshx2Pqc.png"
                alt=""
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${colors.baseBg} 10%, rgba(9, 9, 11, 0.8) 40%, transparent 100%)`,
            zIndex: 0, // overlay sotto il contenuto
          }}
        />

        {/* Content Container */}
        <div
          className="main-content w-full flex flex-col items-center justify-center"
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* ICONA CENTRALE */}
          <div
            style={{
              width: "100%",
              maxWidth: 700,
              margin: "0 auto",
              background: "transparent",
              borderRadius: 32,
              boxShadow: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="success-state"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 520,
                margin: "0 auto",
                height: 62,
              }}
            >
              <canvas
                ref={canvasRef}
                className="success-canvas"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 600,
                  height: 600,
                  pointerEvents: "none",
                  zIndex: 50,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: status === "success" ? "flex" : "none",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 32,
                  background: "#10b981",
                  transition: "opacity 0.5s, transform 0.5s",
                  opacity: status === "success" ? 1 : 0,
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 20,
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      padding: 8,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                        style={{
                          strokeDasharray: 24,
                          strokeDashoffset: status === "success" ? 0 : 24,
                          transition: "stroke-dashoffset 0.4s ease-out 0.3s",
                        }}
                      />
                    </svg>
                  </div>
                  <span>You're on the list!</span>
                </div>
              </div>
            </div>
            <h2
              style={{
                color: "#fff",
                fontWeight: 800,
                fontSize: 64,
                textAlign: "center",
                marginBottom: 16,
                lineHeight: "1.1",
                letterSpacing: "-2px",
              }}
            >
              Aggiungi valore alla tua azienda
            </h2>
            <p
              style={{
                color: "#94a3b8",
                fontSize: 22,
                textAlign: "center",
                marginBottom: 32,
                fontWeight: 500,
              }}
            >
              Contattaci, sarai servito
            </p>

            
          </div>
        </div>
      </div>
    </div>
  );
};