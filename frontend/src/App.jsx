import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./Login"
import Welcome from "./Welcome"
import "./App.css"

function App(){

  return(

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login/>} />

        <Route path="/welcome" element={<Welcome/>} />

      </Routes>

    </BrowserRouter>

  )

}

export default App