import { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [data, setData] = useState({
        data : null
    })

    
    const getFetch = async () => {
        const resp = await fetch(url)
        .then(response => response.json())
        .then(data => setData(data));

    }
    const { slip } = data
    console.log("data state: ", slip)

    useEffect(() => {
        getFetch()
    },[])

    return {
        slip
    }
}