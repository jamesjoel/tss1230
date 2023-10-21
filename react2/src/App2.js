import react, {useState, useMemo} from 'react'

const App2 = () => {

    let [count, setCount] = useState(0);
    let [item, setItem] = useState(0);

    let incCount = ()=>{
        setCount(count+1);
    }
    let incItem = ()=>{
        setItem(item+1);
    }

    let demo = useMemo(()=>{
        console.log("***************************");
        return count*10;
    }, [count]);


  return (
    <>
        <br />
        <br />
        <button onClick={incCount}>Increse Count</button>
        <button onClick={incItem}>Increse Item</button>
        <br />
        <h1>Count ---- {count}</h1>
        <h1>Item ---- {item}</h1>
        <br />
        <h2>Demo Function --- {demo}</h2>
    </>
  )
}

export default App2