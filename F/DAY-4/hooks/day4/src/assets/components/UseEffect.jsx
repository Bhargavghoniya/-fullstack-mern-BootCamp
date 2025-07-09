import React, { useEffect ,useState} from "react";

function UseEffect() {

    let[count, setCount] = useState(0);
    
    useEffect(() => {
        alert("Component mounted!");
    },[count]); 

    const addvalue = () => {
        setCount(count + 1);
        console.log("count is: " + count);
    }

    return(
        <div>
            <h1>UseEffect Component</h1>
            <div>
                <h1>counter : {count}</h1>
                <div>
                    <button onClick={addvalue}>click</button>
                </div>
            </div>
        </div>
    )
}
export default UseEffect;