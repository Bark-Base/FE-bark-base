import { useState } from "react";
import "./Accordion.css";

export default function Accordion({heading, copy}) {

const [hidden, setHidden] = useState(true)

  return (
    <>
      <button className="accordion-title" onClick={() => setHidden(!hidden)}><span>{heading}</span><span>{hidden ? '-' : '+'}</span></button>
      { hidden && <div className="accordion-panel">{copy}</div>
      }
      
    </>
  );
}
