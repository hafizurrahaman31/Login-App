import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Welcome(){

  const navigate = useNavigate()
  const username = localStorage.getItem("username")

  useEffect(() => {

    if(!username){
      navigate("/login")
    }

  }, [])

  return(
    <div className="container" style={{textAlign:"center",marginTop:"100px"}}>
      <h1>Welcome, {username}!</h1>
    </div>
  )
}

export default Welcome