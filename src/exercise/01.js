// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

// import * as React from 'react'

// function Counter({initialCount = 0, step = 1}) {
//   const [count, setCount] = React.useReducer(countReducer, initialCount)

//   function countReducer(state, newState) {
//     return newState
//   }

//   const increment = () => setCount(count + step)
//   return <button onClick={increment}>{count}</button>
// }

// function App() {
//   return <Counter />
// }

// export default App

//Extra credit 1
// import * as React from 'react'

// function Counter({initialCount = 0, step = 1}) {
//   const [count, setCount] = React.useReducer(countReducer, initialCount)

//   function countReducer(state, step) {
//     return state + step
//   }

//   const increment = () => setCount(step)
//   return <button onClick={increment}>{count}</button>
// }

// function App() {
//   return <Counter />
// }

// export default App

//Extra credit 2
// import * as React from 'react'

// function Counter({initialCount = 0, step = 1}) {
//   const [state, setState] = React.useReducer(countReducer, {
//     count: initialCount,
//   })

//   function countReducer(state, newState) {
//     return {...state, ...newState}
//   }

//   const {count} = state
//   const increment = () => setState({count: count + step})
//   return <button onClick={increment}>{count}</button>
// }

// function App() {
//   return <Counter />
// }

// export default App

//Extra credit 3
// import * as React from 'react'

// function Counter({initialCount = 0, step = 1}) {
//   const [state, setState] = React.useReducer(countReducer, {
//     count: initialCount,
//   })

//   function countReducer(state, newState) {
//     return {
//       ...state,
//       ...(typeof newState === 'function' ? newState(state) : newState),
//     }
//   }

//   const {count} = state
//   const increment = () =>
//     setState(currentState => ({count: currentState.count + step}))
//   return <button onClick={increment}>{count}</button>
// }

// function App() {
//   return <Counter />
// }

// export default App

//Extra credit 4
import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  function countReducer(state, newState) {
    return (
      newState.type === 'INCREMENT' && {
        ...state,
        count: state.count + newState.step,
      }
    )
  }
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
