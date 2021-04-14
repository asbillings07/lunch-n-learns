import { useState, useMemo } from 'react'

export const useHover = () => {
    const [isHovered, setIsHovered] = useState(false)

    // adds an event to component for mouseover
    // onEnter can be any dom event that enters the element area
    // onLeave can be any dom event that leaves the element area
    const bind = useMemo(() => {
        return {
            onMouseOver: () => setIsHovered(true),
            onMouseLeave: () => setIsHovered(false)
        }
    }, [])

    return { bind, isHovered }
}