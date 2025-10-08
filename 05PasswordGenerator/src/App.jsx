import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [password, setPassword] = useState(" ")
  const [length, setLength] = useState(0)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numberAllowed) str += "0123456789"
      if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

      for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)
    },
    [length, numberAllowed, charAllowed],
  )

  const copyText = useCallback(
    () => {
      passwordRef.current?.select()
      // passwordRef.current?.setSelectionRange(0,5)
      window.navigator.clipboard.writeText(password)
    },
    [password],
  )
  

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])


  return (
    <>
      <div>
        <input type="text"
          placeholder='enter password'
          value={password}
          readOnly
          ref={passwordRef}
        />

        <button onClick={copyText}>Copy</button>
      </div>
      <div>
        <div>
          <input className='p-3'
            type="range"
            min={5}
            max={20}
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label htmlFor="">Length : {length}</label>
        </div>
        <div>
          <input type="checkbox" aria-label=''
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label >Numbers</label>
        </div>
        <div>
          <input type="checkbox"
            onChange={() => {
              setcharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="">Characters</label>
        </div>

      </div>

    </>
  )
}

export default App
