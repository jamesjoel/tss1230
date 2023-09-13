import React from 'react'
import Demo1 from './components/Demo1'
import User from './components/UserProvider'


const App2 = () => {

    let user = {
        name : "amar",
        age : 25,
        city : "indore"
    }

  return (
    <>
        <User.Provider value={user}>
            <div>App2</div>
            <Demo1 />
        </User.Provider>
    </>

  )
}

export default App2