import { render, screen } from '@testing-library/react';
import App from './App';

// 테스트 만들기
test('renders learn react link', () => {
  render(<App />) // App component를 렌더링(테스트)해 본
    const linkElement = screen.getByText("This is TDD")
    // 기대하는 결과
    expect(linkElement).toBeInTheDocument()
});
