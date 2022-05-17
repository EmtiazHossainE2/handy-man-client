import { useEffect, useState } from "react"

const useServiceDetail = (serviceId) => {
    const [detail, setDetail] = useState({})
    
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setDetail(data)
            })
    }, [serviceId])
    return [detail, setDetail]
}

export default useServiceDetail