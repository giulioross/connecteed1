import React from "react";
import "./Comingsoon.css";
import Footer from "./Footer";

const Comingsoon: React.FC = () => {
  return (
    <>
      <div className="comingsoon-bg">
        <div className="comingsoon-center">
          <h1 className="comingsoon-title">Coming soon</h1>
          <p className="comingsoon-desc">
            Pagina in fase di progettazione.<br />
            Stiamo lavorando per voi.
          </p>
          <a href="/" className="comingsoon-btn">Torna alla home</a>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Comingsoon;