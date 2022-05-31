import React from "react";
import Switch from "@mui/material/Switch";

export default function Enter() {
  const [isOn, setIsOn] = React.useState(false);
  let cont = "";
  if (isOn) {
    cont = <p>it is on</p>;
  }
  return (
    <section className="summ">
      <section className="much">
        <h3>Enter Amount</h3>
        <p>How much do you want to deposit ?</p>
        {/* {cont} */}
        {/* {isOn && <p>it is on</p>} */}
        {isOn ? (
          <p style={{ height: 30 }}>it is on</p>
        ) : (
          <p style={{ height: 30 }}> </p>
        )}

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
            <section className="in flex align-center">
              {/* <div className="control"> */}
              {/* <div className="circle"> */}
              {/* <img src="/turn.png"></img> */}
              <Switch checked={isOn} onChange={() => setIsOn(!isOn)} />
              {/* </div> */}
              {/* </div> */}
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
