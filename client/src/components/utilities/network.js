import { useState } from 'react'

function useFetch() {
    const [loading, setLoading] = useState(undefined)
    const [result, setResult] = useState(undefined)
    const [error, setError] = useState(undefined)

    function doFetch (url) { // console.log('doFetch to ', url)
        setLoading(true)
        setResult(undefined)
        setError(undefined)

        fetch(url)
            .then(res => { // console.log("res is present", res)
                return res.text()
            })
            .then(data => { // console.log("data is present", data)
                setResult(data)
            })
            .catch(e => { // console.log("e is present", e)
                setError(e)
            })
            .finally(() => setLoading(false))
    }

    return { doFetch, loading, result, error }
}

export default useFetch