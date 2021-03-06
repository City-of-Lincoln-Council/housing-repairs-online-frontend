export const fetcher = async (...args) => {
  const res = await fetch(...args)

  if (!res.ok) {
    const error = new Error(await res.json())
    error.status = res.status
    throw error
  }

  return res.json()
}
