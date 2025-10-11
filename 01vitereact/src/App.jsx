import { useState } from "react"
import Chai from "./chai"
import NavForm from "./components/NavForm.jsx"

function App() {
  const [name, setName] = useState(null)
  const handleNameSubmit=(nameVal)=> { 
      setName(nameVal)
  }
  
  return (
    <>
  <NavForm onSubmitName={handleNameSubmit} />
  <h3>Hello {name || "unknown"}</h3>
    </>
    

  )
}

export default App
