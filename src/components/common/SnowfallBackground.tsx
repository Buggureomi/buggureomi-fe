import { useEffect, useState } from "react";

import { useSnowStore } from "@/store/snowStore";

const SnowfallBackground = () => {
  const snowflakes = Array.from({ length: 50 });
  const [snowColorArray, setSnowColorArray] = useState<string[]>([]);

  const { colorCodeList } = useSnowStore();

  useEffect(() => {
    if (colorCodeList?.length) {
      const colorArr: string[] = ["#FFFFFF"];

      colorCodeList.map((answer) => {
        if (colorArr.includes(answer.colorCode)) return;
        else colorArr.push(answer.colorCode);
      });

      if (colorArr?.length) {
        setSnowColorArray(colorArr);
      }
    }
  }, [colorCodeList]);

  return (
    <>
      {snowflakes.map((_, index) => (
        <div
          key={index}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
            background:
              snowColorArray[Math.floor(Math.random() * snowColorArray.length)],
          }}
        ></div>
      ))}
    </>
  );
};

export default SnowfallBackground;
