import React, { useState, useEffect } from 'react'
import { Container, Form, TextInput, SubmitInput, UnorderedList, ListItem, TodoText, TodoDelete,  } from './styledComponents'
import "./App.css"

function App(){

  // 할 일 목록 관리 할 때 CRUD 사용
  const [ todo, setTodo ] = useState([])

  const [ todoId, setTodoId ] = useState(0)

  /* 할일이 단순히 문자열이 안 되는 이유
      - 삭제나 수정을 할 때 구분할 방법이 없다.
  */
  const handleSubmit = (todoText) => {
    setTodo([ ...todo, {
      todoText: todoText,
      todoId: todoId,
      todoDone: false
    } ])
    setTodoId(todoId + 1)
  }

  const handleToggle = (todoId) => {
    setTodo(
      todo.map((item, index) => {
        return item.todoId === todoId ? { ...item, todoDone: !item.todoDone } : item
      })
    )
  }

  // filter의 기능
  // 콜백함수가 true를 반환하는 요소만 남겨진 배열을 만든다
  const handleDelete = (todoId) => {
    setTodo(
      todo.filter((item) => {
        // 할일의 id 중에 내가 선택한 아이디 filter
        return item.todoId !== todoId
      })
    )
  }

  //useEffect 사용 1
  //component가 만들어지는 순간마다 local storge 읽어들이기
  useEffect(() => {
    const defaultTodo = JSON.parse(localStorage.getItem("todo"));

    if(!defaultTodo) return;

    setTodo(defaultTodo)

    if(defaultTodo.length !== 0) {
      setTodo (
        defaultTodo[defaultTodo.length - 1].todoId + 1
      )
    }
  }, [])


  //useEffect 사용 2
  // todo가 갱신될 때마다 local storage에 저장

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }, [todo])

  return (
    <Container>
    <Form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit(e.target.todo.value)
      e.target.todo.value = ""
    }}>
      <TextInput type="text" placeholder='할일 쓰기' name="todo" />
      <SubmitInput type="submit" value="추가" />
    </Form>
    <UnorderedList>
      {todo.map((item, index) => (
        <ListItem key={index}>
            <TodoText onClick={() => {
              alert(item.todoDone)
              handleToggle(item.todoId)
            }} style={ item.todoDone ? {textDecoration: 'line-through'} : {} }>{item.todoText}</TodoText>
            <TodoDelete onClick={() => {
              handleDelete(item.todoId)
            }}>X</TodoDelete>
          </ListItem>
      ))}
    </UnorderedList>
    </Container>
  );
}

// 파일에서 react component를 내보낼 때 사용하는 export문
export default App