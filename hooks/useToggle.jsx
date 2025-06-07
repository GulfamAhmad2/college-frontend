import { useCallback, useState } from "react"

export function useToggle(){
    const [isOpen, setIsOpen] = useState(false)
    const toggle = useCallback((value)=>{
        setIsOpen(value);
    },[])
    return [isOpen, toggle ]
}