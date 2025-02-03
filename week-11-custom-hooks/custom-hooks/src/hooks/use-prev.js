import { useEffect, useRef } from "react"

export const usePrev = (value) => {
    const ref=useRef(); //ref to store a value when u update the value woh kabhi re-render nahi hoga

    
// it returns first and the effect will called later
    useEffect(()=> {
        ref.current=value;
    }, [value]);

    return ref.current;
}
