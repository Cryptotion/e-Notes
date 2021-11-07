import React from 'react'
import H from './H';
import Notes from './Notes';

export const Home = (props) => {
    const {showAlert} = props
    return (
        <div >
           {/* <Notes showAlert={showAlert}/> */}
           <H/>
        </div>
    )
}

export default Home;