import React from 'react'
import { ACTIONS } from './App'

type Props ={ 
    todo: any, 
    dispatch: any
}

const Todo: React.FC<Props> = (props) => {
    return (
        <div>
            <span style={{ color: props.todo.complete ? '#aaa' : '#000' }}>
                {props.todo.name}
            </span>
            <button onClick={ () => props.dispatch({ type: ACTIONS.TOGGLE_TODO, payload: {id: props.todo.id} } )}>Toggle</button>
            <button onClick={ () => props.dispatch({ type: ACTIONS.DELELTE_TODO, payload: {id: props.todo.id} } )}>Delete</button>
        </div>
    )
}

export default Todo