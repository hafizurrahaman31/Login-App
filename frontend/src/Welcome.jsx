function Welcome(){

    const username = localStorage.getItem("username")

    return(

        <div style={{textAlign:"center",marginTop:"100px"}}>

            <h1>Welcome, {username}!</h1>

        </div>

    )

}

export default Welcome