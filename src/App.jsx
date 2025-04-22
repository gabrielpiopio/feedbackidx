import { useState } from "react"
import { Cardinicial } from "../components/Cardinicial"
import { CardFinal } from "../components/CardFinal"

export function App() {
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  submited === false ? (
    <Cardinicial setNotaAvaliacao={setNotaAvaliacao} notaAvaliacao={notaAvaliacao} setSubmited={setSubmited} />
    ) : (
      <CardFinal notaAvaliacao={notaAvaliacao} />







    
  )
}