import React from "react";
import { useEffect, useState } from "react";

function LifeCycle() {
  //3.소멸
  const UnmountTest = () => {
    useEffect(() => {
      console.log("Mount!");
      return () => {
        console.log("UnMount!!");
      };
    }, []);
    return <div>Unmount Testing Component</div>;
  };
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //1.탄생
  useEffect(() => {
    console.log("Mount!");
  }, []);

  //2.업데이트(리랜더링)
  //   useEffect(() => {
  //     console.log("update!");
  //   });

  useEffect(() => {
    console.log(`only count is update ${count}`);
    if (count > 3) {
      alert("count가 5를 넘어 1로초기화합니다.");
      setCount(1);
    }
  }, [count]);
  //   useEffect(() => {...}, { text });//text만 리랜더링될때 작동

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);
  return (
    <div>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>증가</button>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button onClick={toggle}>ON/OFF</button>
        {isVisible && <UnmountTest />}
      </div>
    </div>
  );
}

export default LifeCycle;
