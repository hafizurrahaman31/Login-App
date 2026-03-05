import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate()

  const handleLogin = async (e) => {

    e.preventDefault()

    try{

      const res = await axios.post("https://login-backend-lism.onrender.com",{
        username,
        password
      })

      if(res.status === 200){

        localStorage.setItem("username", username)

        navigate("/welcome")

      }

    }
    catch(err){

      setError("Invalid credentials")

    }

  }

  return(

    <div style={{textAlign:"center",marginTop:"100px"}} className="container">

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />

        <br/><br/>

        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button type="submit">Login</button>

      </form>

      {error && <p style={{color:"red"}}>{error}</p>}

    </div>

  )

}

export default Login