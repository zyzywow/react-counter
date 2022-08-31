//redux (state변화를 지켜보고 있다가 상태가 변하면 rendering)
// 화면전체가 변하지않고 건드는 컴퍼넌트만 변화가능 ex)좋아요버튼같은 실시간반영변화가능
import { useState } from "react";
export default function Counter() {
  // let num = 0;
  // react에서 상태의 변화가 일어나야지만 화면을 다시 그린다.
  // Hook - 화면을 바로바로다시그리고싶으면 Hook써야함.
  // const [num, setNum] = useState(100); ---------1번방법
  const numState = useState(100); // 배열을 리턴한다. 1번요소는 기본값(100같은), 두번째요소는 상태를 바꿔주는 함수
  const num = numState[0];
  const setNum = numState[1]; // 2번방법 -------잘안쓰고 1번이더편함

  // 구조분해 할당.. useState()--------1번방법의 설명
  // 배열또는 객체를 분해해서 변수에 할당하기..
  const animal = ["tiger", "lion"];
  const [a, b] = animal;
  console.log(a, "===", b);

  // name설정 num의 상태변화를 일으킬거라 set같은name붙여줌, 이름짓는거임
  function increase() {
    // console.log(num);
    setNum(num + 1);
  }
  function decrease() {
    // console.log(num);
    setNum(num - 1);
  }
  return (
    <>
      <h1>{num}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
}
