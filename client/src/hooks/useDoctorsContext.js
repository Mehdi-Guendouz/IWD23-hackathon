import { DoctorsContext } from "../context/DoctorsContext"
import { useContext } from "react"

export const useDoctorsContext = () => {
  const context = useContext(DoctorsContext)

  if(!context) {
    throw Error('Error')
  }

  return context
}