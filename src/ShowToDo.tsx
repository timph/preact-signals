// import { memo } from 'preact/compat'
import { count, checkTodo, completedTodoCount } from './state'

export default function ShowDoubleCount() {
  return (
    <>
      <ol style={{ textAlign: 'left'}}>
      {count && count.value.todos && count.value.todos.map((todo, idx) => (
        <li><input type="checkbox" checked={todo.clear} onClick={() => checkTodo(idx)}/> {todo.item}</li>
      ))}
      </ol>
      <p>Completed: {completedTodoCount}</p>
    </>
  )
}
// No need with Signal
// export default memo(ShowDoubleCount)