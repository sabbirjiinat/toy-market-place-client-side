import { useEffect } from "react"

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Electronic Toy`
    },[title])
}

export default UseTitle;