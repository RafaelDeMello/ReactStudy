import { useEffect, useState } from "react";

export function Count() {
  const [count, setCount] = useState(0);
  const [buttonColor, setButtonColor] = useState("#0000ff");
  const [backgroundGradient, setBackgroundGradient] = useState("");
  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
    .padStart(6, "0");
  };
  const handleClick = () => {
    setCount((prev) => prev + 1);

    const color1 = getRandomColor();
    const color2 = getRandomColor();

    setButtonColor(color1);
    setBackgroundGradient(`linear-gradient(135deg, ${color1}, ${color2})`);
  };

  useEffect(() => {
  document.body.style.background = backgroundGradient;
  document.body.style.backgroundSize = "400% 400%";
  document.body.style.animation = "gradientMove 10s ease infinite";
}, [backgroundGradient]);

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
        style={{
          backgroundColor: buttonColor,
          padding: "10px 20px",
          borderRadius: "100px",
        }}
      >
        {count}
      </button>
    </div>
  );
}
