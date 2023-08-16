import { render, screen, fireEvent } from "@testing-library/react";
// fireEvent는 이벤트 발생시킴
import App from "./App02";

test("the counter starts at 0", () => {
  render(<App />);
  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로)
  const counterElement = screen.getByTestId("counter");
  // id가 counter인 엘레멘트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
  // 통과 안되면 h3가 다른 내용ㅇㄹ 가지고 렌더링됨 -- 잘못된 출력
});

// 증가, 마이너스 버튼에 각각 올바른  텍스트가 표기되어 있는지 테스트
test("minus button has correct text", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(minusButtonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toHaveTextContent("+");
});

test("When the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement); // fireEvent 객체가 클 메소에 요소를 전달받 클릭 이벤트를 실험한다
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("When the - button is pressed, the counter changes to -1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});

//온오프가 파란색인지 테스트하기
test("on/off button has blue color", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  // 버튼의 스타일을 검사한다
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

//온오프 버튼 클릭했을 때 증가, 감소 버튼이 차단되어지는 테스트하기
test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
});