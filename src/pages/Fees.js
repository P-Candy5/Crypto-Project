import React from "react";
import Dashpart from "../components/Dashpart";
import Search from "../components/Search";
import Ring from "../components/Ring";
import Wallet from "../components/Wallet";

export default function Fees() {
  return (
    <main>
      <section className="twofr">
        <section>
          <Dashpart />
        </section>
        <section className="whiter">
          <section className="bars">
            <Search />

            <Ring />
          </section>
          <section className="trance">
            <Wallet />
          </section>
        </section>
      </section>
    </main>
  );
}
