import {useState} from 'react'
import './App.css'
import Form from './Components/Form'

function App() {
  const [turno, setTurno] = useState({
    form: false
  })

console.log(turno)
  return (
    <>
      <h1>Animal Favorito</h1>
      <Form/>
    </>
  )
}

export default App