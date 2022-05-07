import { useEffect, useState } from "react"

const useLoadItemsData = (url) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
}

export default useLoadItemsData