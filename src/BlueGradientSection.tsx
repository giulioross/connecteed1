import React, { useEffect, useRef, useState } from "react";
import "./BlueGradientSection.css";

export default function BlueGradientSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`blue-section ${visible ? "fade-in" : ""}`}
    >
      <p className="blue-gradient-text">
        Elevare le connessioni, ridefinire l&apos;eccellenza,
        creare soluzioni di lusso per menti <br />ambiziose:
        rompere gli schemi, ancora una volta.
      </p>
    </section>
  );
}
