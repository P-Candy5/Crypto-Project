import React from "react";
import Debit from "./Debit";

export default function Coming() {
  return (
    <section className="summ">
      <section className="much">
        <h3> The deposit coming from?</h3>
        <section className="containerHold">
          <div className="pHold">
            <Debit peer="Wallet App" wallet="(Fastest)" />
            <Debit peer="Bank Account" />
          </div>
        </section>
      </section>
    </section>
  );
}
