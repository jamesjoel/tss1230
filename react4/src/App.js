import React, { useContext, createContext } from 'react'

const Data = createContext();
// now Data is Component but its name is <Data.Provider>

const App = () => {
    let name = "Rohit";
    let city = "indore";

    let obj = {name, city};

  return (
    <>
        <Data.Provider value={obj}>

            <h4>App</h4>
            <BoxA />
        </Data.Provider>
    </>
  )
}

const BoxA = ()=>{
    let obj = useContext(Data);
    return(
        <>
            <h1>Box A</h1>
            <p>{obj.city}</p>
            <BoxB />
        </>
    )
}

const BoxB = ()=>{
    return(
        <>
        <h1>Box B</h1>
        <BoxC />
        </>
    )
}

const BoxC = ()=>{
    
    return(
        <>
            <h1>Box C</h1>
            <BoxD />
        </>
    )
}

const BoxD = ()=>{
   let y = useContext(Data);
    return(
        <>
            <h1>Box D</h1>
            <p>{y.name}</p>
        </>
    )
}

export default App