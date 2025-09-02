import React, { useState } from "react";

const CircleDot = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-200
        ${active ? "border-blue-500 bg-blue-500" : "border-[#C1C3CE] bg-transparent"}`}
    >
      {/* Optional inner small white dot when active */}
      {active && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
    </div>
  );
};

export default CircleDot;
