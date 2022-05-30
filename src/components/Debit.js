import React from "react";

export default function Debit({ peer, wallet }) {
  return (
    // <section >
    <section className="ptop">
      <section className="tral">
        <div className="seablue">
          <img src="/bluecircle.svg"></img>
        </div>
        <div className="text">
          <p className="dark">{peer}</p>
          <p className="green">{wallet}</p>
        </div>
      </section>
    </section>
    // </section>
  );
}
