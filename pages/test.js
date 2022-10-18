import useSWR from 'swr'

export default function Profile () {

    const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('/api/post', fetcher)

  console.log(data)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // render data
  return <div>hello</div>
}