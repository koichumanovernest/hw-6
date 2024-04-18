
import { useState } from "react"
import { Button } from "../UI/button/Button"
import css from "../UI/button/Button.module.css"


export const Onclose = () => {
  const [onClose, setOnclose]= useState(false)

  const onCloose = ( ) => {
    setOnclose(true)
  }
  const onCloose1 = ( ) => {
    setOnclose(false)
  }
  return (
    <div>
      
      {onClose ? <Button  onClick={onCloose1} className={css.button2}>close</Button> : <Button onClick={onCloose} className={css.button2}>opne</Button>}
    </div>
  )
}
