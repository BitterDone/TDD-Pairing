import { useState } from 'react'

function useFetch () {
  const [loading, setLoading] = useState(undefined)
  const [result, setResult] = useState(undefined)
  const [error, setError] = useState(undefined)

  function doFetch (url) {
    setLoading(true)
    setResult(undefined)
    setError(undefined)

    fetch(url)
      .then(res => {
        return res.text()
      })
      .then(data => {
        setResult(data)
      })
      .catch(e => {
        setError(e)
      })
      .finally(() => setLoading(false))
  }

  return { doFetch, loading, result, error }
}

export default useFetch
