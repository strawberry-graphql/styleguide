"use client";

import { useEffect, useState } from "react";

export const GlowEffect = () => {
  const [rotation, setRotation] = useState(0);

  // on mouse move update the rotation
  const handleMouseMove = (e: MouseEvent) => {
    const { clientY } = e;
    const { innerWidth, innerHeight } = window;

    const y = clientY - innerHeight / 2;

    setRotation(-(y / innerHeight) * 20);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <svg
        width="1440"
        height="940"
        viewBox="0 0 1440 940"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <g opacity="0.2">
          <path
            d="M235.836 419.277C361.95 349.597 531.959 354.812 554.784 396.123C516.635 431.696 446.277 513.593 470.034 556.591C499.731 610.34 685.133 429.63 744.281 536.683C803.429 643.736 367.129 802.464 247.524 811.147L-26.7232 831.055C-201.903 843.772 -86.5846 813.684 -139.621 626.72C-192.657 439.756 109.721 488.956 235.836 419.277Z"
            fill="#F7393D"
          />
          <path
            d="M235.836 419.277C361.95 349.597 531.959 354.812 554.784 396.123C516.635 431.696 446.277 513.593 470.034 556.591C499.731 610.34 685.133 429.63 744.281 536.683C803.429 643.736 367.129 802.464 247.524 811.147L-26.7232 831.055C-201.903 843.772 -86.5846 813.684 -139.621 626.72C-192.657 439.756 109.721 488.956 235.836 419.277Z"
            stroke="black"
          />
        </g>
        <g opacity="0.2">
          <path
            d="M949.713 239.714C949.713 150.755 1065.98 60.4378 1129.21 60.4378C1146.21 91.6754 1196.66 154.15 1262.47 154.15C1344.74 154.15 1252.95 0 1416.81 0C1580.67 0 1484.12 283.175 1416.81 350.404L1262.47 504.554C1163.89 603.02 1203.32 531.717 949.713 504.554C696.109 477.391 949.713 328.673 949.713 239.714Z"
            fill="#F7393D"
          />
          <path
            d="M949.713 239.714C949.713 150.755 1065.98 60.4378 1129.21 60.4378C1146.21 91.6754 1196.66 154.15 1262.47 154.15C1344.74 154.15 1252.95 0 1416.81 0C1580.67 0 1484.12 283.175 1416.81 350.404L1262.47 504.554C1163.89 603.02 1203.32 531.717 949.713 504.554C696.109 477.391 949.713 328.673 949.713 239.714Z"
            stroke="black"
          />
        </g>
      </svg>

      <div className="absolute inset-0 backdrop-blur-[200px]"></div>
    </div>
  );
};
