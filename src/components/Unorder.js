import React from "react";
import { Link } from "react-router-dom";

export default function Unorder() {
  return (
    <section className="listedFour">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/deposit">Deposit</Link>
        </li>
        <li>
          <Link to="/fees">Fees</Link>
        </li>
        <li>
          <Link to="/merchant">Merchant</Link>
        </li>
      </ul>
    </section>
  );
}
