import { useState } from "react";

export function Count() {
  const [count, setCount] = useState(0);
  const [buttonColor, setButtonColor] = useState("#0000ff");
  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  const handleClick = () => {
    setCount((prev) => prev + 1);
    setButtonColor(getRandomColor());
  };

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
          setCount(count + 1);
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
