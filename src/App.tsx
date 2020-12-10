import React, { useReducer, useState } from 'react';
import Todo from './Todo'
import logo from './logo.svg';
import './App.css';
import { displayPartsToString, setTokenSourceMapRange, toEditorSettings } from 'typescript';
import { domainToASCII } from 'url';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELELTE_TODO: 'delete-todo'
}

function reducer(todos: any, action:any){
  switch (action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo:any) => {
        if (todo.id === action.payload.id){
          return { ...todo, complete: !todo.complete}
        }
        return todo
      })
    case ACTIONS.DELELTE_TODO: 
        return todos.filter((todo:any) => todo.id !== action.payload.id)
    default: 
      return todos
  }
}

function newTodo(name: any){
  return { id: Date.now(), name: name, complete: false}
}

const App: React.FC = () => {

  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e: any) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name} })
    setName('')
  }

  console.log(todos)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map((todo:any) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
      
    </>

  )
}

export default App;
