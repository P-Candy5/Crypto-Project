import React from "react";
import Dashpart from "../components/Dashpart";
import Search from "../components/Search";
import Ring from "../components/Ring";

import Coming from "../components/coming";

export default function Merchant() {
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
            <Coming />
          </section>
        </section>
      </section>
    </main>
  );
}
