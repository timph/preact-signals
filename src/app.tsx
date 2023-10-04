import { useEffect } from 'preact/hooks'
import { effect } from '@preact/signals'
import preactLogo from './assets/preact.svg'
import './app.css'
import { count, countUp, countDown, double } from './state'
import ShowDoubleCount from './ShowCountDown'
import ShowToDo from './ShowToDo'
export function App() {

  const dispose = effect(() => console.log('Count value change: ', {count: count.value, double: double.value }));
  useEffect(() => dispose)

  return (
    <>
      <div>
        <a href="https://preactjs.com/guide/v10/signals" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>

      <h1>🚀🚀🚀 @preact/signals = 🐐</h1>

      <h3>No more memo(), useState() - use <b>signal</b>!</h3>

      <div class="card">
        <button onClick={countUp}>
          Count up {count.value.count}
        </button>
        <button onClick={countDown}>
          Count down
        </button>
        <ShowDoubleCount />
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>

      <ShowToDo />

      <p class="read-the-docs">
        Click on the Preact logos to learn more about Preact/Signals
      </p>
    </>
  )
}
