import { useState } from "react";

function Buttons({ buttons }) {
  const [active, isActive] = useState(1);
  return (
    <div className="text-center">
      {buttons.map((data,i) => (<button type="button" key={i} className={`btn btn-blue ${active === i && "bg-[#2E3791] text-white"}`}  onClick={()=> isActive(i)}>{data.name}</button>))}
    </div>
  );
}

export default Buttons;
