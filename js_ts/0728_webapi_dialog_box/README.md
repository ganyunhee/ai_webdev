
webAPI의 dialog box인 **alert(), confirm()** 메소드는 window나 document 없이 바로 사용할 수 있는 이유 찾아보기

`alert(), confirm()`
- 브라우저의 window 객체에서 built-in 즉, 기본적으로 제공하는 또는 속해 있는 JavaScript 메소드이기 때문에 `document` 없이 바로 사용할 수 있는 함수들이다


```
alert(message)
```

```
confirm(message)
```

- JavaScript에서 브라우저 환경에서 실행되는 코드는 기본적으로 전역 컨텍스트에서 동작한다. 이 컨텍스트에서는 window 객체가 전역 객체로서 사용된다. 따라서 브라우저 환경에서 실행되는 JavaScript 코드에서는 window 객체의 메소드나 속성을 바로 사용할 수 있다.

- `alert()`와 `confirm()` 함수는 window 객체의 메소드로, 기본적으로 브라우저 창에 모달 대화 상자를 표시한다. 모달 대화 상자는 사용자의 확인이나 취소와 같은 반응이 있을 때까지 다른 창의 상호작용을 막는다. 이러한 함수들은 전역 객체인 window에 속해 있으므로, 별도의 window나 document 객체를 지정하지 않고도 어디서든 사용할 수 있다.

ref.
- https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
- https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm