// src/UseEffectTest.jsx
import { useEffect, useState } from "react";

const UseEffectTest = () => {
    const [toggleOne, setToggleOne] = useState(false);
    const [toggleTwo, setToggleTwo] = useState(false);
    const [count, setCount] = useState(0);

    function handleToggleOne () {
        setToggleOne(!toggleOne);
    }

    function handleToggleTwo () {
        setToggleTwo(!toggleTwo);
    }

    function handleAddCount () {
        setCount(count + 1);
    }

    useEffect(() => {
    console.log("UseEffect1 Ran");
    }, []);

    useEffect(() => {
        console.log("UseEffect2 Ran");
        if (toggleTwo){
            console.log("toggleTwo slice of state is true so this code runs");
        }
    }, [toggleTwo])

    useEffect(() => {
        const myInterval = setInterval(() => {
            console.log(`UseEffect3 with interval number ${count} is running`);}, 1000);

            return () => {
                console.log(`UseEffect3 cleanup ran.\n setInterval number ${count} is being cleared out`);
                clearInterval(myInterval);
            };
        }, [count]);

    return (
      <div>
        {console.log("rendered or re-rendered")}
        <h1>UseEffectTest Component</h1>

        <button onClick={handleToggleOne}>
            ToggleOne (current: {toggleOne.toString()})
        </button>

        <button onClick={handleToggleTwo}>
            ToggleTwo (current: {toggleTwo.toString()})
        </button>

        <button onClick={handleAddCount}>
            Count (current: {count})
        </button>
      </div>
    );
  };

  export default UseEffectTest;
