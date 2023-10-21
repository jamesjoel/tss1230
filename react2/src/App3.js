import react, {useState, useMemo, useCallback} from 'react'

const App3 = () => {

    let [count, setCount] = useState(0);
    let [item, setItem] = useState(0);

    let newCount = useCallback(()=>{
      
        setCount(count+1);
      
    },[count]);
    let incItem = ()=>{
        setItem(item+1);
    }
   
    // let hello = ()=>{
    //     console.log("############");
    //     return "rohit";
    // }

    // let helloMemo = useMemo(()=>{
    //   console.log("##########################");
    //   return "rohit";
    // },[count]);


    let test = ()=>{
      console.log("*************");
      return "Indore";
    }



  return (
    <>
        <br />
        <br />
        <button onClick={newCount}>Increse Count</button>
        <button onClick={incItem}>Increse Item</button>
        <br />
        <h1>Count ---- {count}</h1>
        <h1>Item ---- {item}</h1>
        <br />
        {/* <h1>{helloMemo}</h1> */}
        <h2>{test()}</h2>
        
    </>
  )
}

export default App3