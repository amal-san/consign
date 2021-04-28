import { useRef, useEffect } from "react";

export const isEmpty = (arr) => arr ? (Object.keys(arr).length > 0 ? true : false) :  false

export const usePrevious =  ( value ) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value
    }, [value])
}