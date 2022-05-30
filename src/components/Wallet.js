import React from "react";
import Debit from "./Debit";

export default function Wallet() {
  return (
    <section className="summ">
      <section className="much">
        <h3>How would you like to deposit?</h3>
        <section className="containerHold">
          <div className="pHold">
            <Debit peer="Peer to Peer" wallet="(Recommended)" />
            <Debit peer="Wallet to Wallet" />
            <Debit peer="Bank Transfer" />
            <Debit peer="Debit Card" />
          </div>
        </section>
      </section>
    </section>
  );
}
