import { useEffect, useState } from "react"

const useServiceDetail = (serviceId) => {
    const [detail, setDetail] = useState({})
    useEffect(() => {
        fetch(`https://safe-hamlet-60048.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setDetail(data)
            })
    }, [serviceId])

    return [detail, setDetail]
}

export default useServiceDetail