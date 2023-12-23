import React, { useState } from "react";

export default React.memo(function MemoComponent() {
  console.log("Render React Memo Component");
  const [memo, setMemo] = useState("");
  const [memoCount, setMemoCount] = useState(0);
  const handleClick = () => {
    setMemoCount(() => memoCount + 1);
    setMemo("Memo Component has been updated");
  };
  return (
    <>
      <h3>Memo Component</h3>
      <p>
        lore {memo} {memoCount} times
      </p>
      <button onClick={handleClick}>Click me - Memo</button>
    </>
  );
});
