import React from 'react'
import Notes from './Notes';

export const Home = (props) => {
    const {showAlert} = props
    return (
        <div >
            <div className="container">
          <div className="container" style={{background: "black", width: "100%" , height:"300px", padding:"30px"}}>
              <h3 style={{color:"lightblue", textAlign:"center", marginTop:"50px"}}  >Your are Authorised person</h3>
          </div>

            </div>
        </div>
    )
}

export default Home;