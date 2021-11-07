import React, { useEffect } from 'react'
import { useHistory } from 'react-router';


const H = () => {
    let history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('token')){
            
        }
        else{
            history.push('/login')
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <div className="container" style={{marginTop: "50px"}}>
          <div className="container" style={{background: "black", width: "100%" , height:"300px", padding:"30px"}}>
              <h3 style={{color:"lightblue", textAlign:"center", marginTop:"50px"}}  >Your are Authorised person</h3>
          </div>

            </div>
        </div>
    )
}

export default H
