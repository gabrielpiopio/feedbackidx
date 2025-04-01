import {useState} from "react"
import illustrationThankYou from "../images/illustration-thank-you.svg"
import iconStar from "/images/icon-star.svg"

export function App() {
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)
  const [rateNote, setRateNote] = useState(0)

  function handleSubmit() {
    if (notaAvaliacao !== 0) {
      setSubmited(true)
      return
    }
    alert("Please, choose a rate button!")
  }

  function handAlterarNotaAvaliacao(nota) {
    setNotaAvaliacao(nota)

    console.log(nota)
  }

  function handleChangeRate(value) {
    setRateNote(value)
  }

  return (
      submited === false ? (
        <div className="bg-gradient-dark mx-6 p-6 rounded-2xl text-white font-overpass max-wd-103">
          <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
            <img src={iconStar} alt="icon star" />
          </div>
          <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>
    
          <p className="text-light-grey text-sm leading-1 mb-6">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    
          <div className="flex justify-between mb-6">
            <input type="button" value={1} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => handAlterarNotaAvaliacao(1)}/>
            <input type="button" value={2} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => handAlterarNotaAvaliacao(2)}/>
            <input type="button" value={3} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => handAlterarNotaAvaliacao(3)}/>
            <input type="button" value={4} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => handAlterarNotaAvaliacao(4)}/>
            <input type="button" value={5} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => handAlterarNotaAvaliacao(5)}/>
          </div>
        
          <button className="bg-orange w-full py-3 uppercase text-sm rounded-3xl tracking-1 font-bold hover:bg-white hover:text-orange hover:cursor-pointer" onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div className="bg-gradient-dark text-white mx-6 p-6 rounded-2xl font-overpass max-w-103">
          <img className="mx-auto mb-6" src="{illustrationThankYou}" alt="illustration Thank You" />

          <p className="text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl mb-6">You selcted {notaAvaliacao} out of 5</p>

          <h1 className="text-2xl font-bold mb-2.5 text-center">Thank you!</h1>
          <p className="text-light-grey text-sm leading-1 text-center">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>

        </div>
      )
  )
}
