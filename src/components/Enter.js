import React from "react";

export default function Enter() {
  return (
    <section className="summ">
      <section className="much">
        <h3>Enter Amount</h3>
        <p>How much do you want to deposit ?</p>

        <section className="convertHolder">
          <section className="convert">
            <div>
              <p>NGN</p>
              <input type="text" placeholder="Enter Amount" />
            </div>

            <div className="to">=</div>

            <div>
              <p>USD</p>
              <input type="text" placeholder="Enter Amount" />
            </div>
          </section>
          <section className="calc">
            <section className="in">
              <div className="control">
                <div className="circle">
                  <img src="/turn.png"></img>
                </div>
              </div>
              <p>Include fees into calculation</p>
            </section>
          </section>
          <div className="mini">
            <p>Maximum is 1,000,000 and minimum is 5,000</p>
          </div>

          <section className="maxi">
            <div className="pro">Proceed with deposit</div>
          </section>
        </section>
      </section>
    </section>
  );
}
