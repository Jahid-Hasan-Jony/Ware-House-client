import { useEffect, useState } from "react"

const useLoadItemsData = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch()
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
}

export default useLoadItemsData