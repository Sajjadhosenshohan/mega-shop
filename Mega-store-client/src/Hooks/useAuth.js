import { useContext } from "react"
import { Context } from "../Provider/AuthProvider"

const useAuth = () => {
  const all = useContext(Context)
  return all;
}

export default useAuth
