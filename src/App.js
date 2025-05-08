import React from 'react'
import { useGetApiByNameQuery } from './services/api'

const App = () => {

  const {data, error, isLoading, isSuccess, isFetching} = useGetApiByNameQuery()
  
  console.log('Data:', data)
  console.log('Error:', error)
  console.log('Loading:', isLoading)
  console.log('Success:', isSuccess)
  
  return (
    <div>
      <h1>RTK Query</h1>
      {isLoading &&  <h2>Loading...</h2>}
      {isFetching && <h2>Fetching</h2>}
      {error && <h2>Error</h2>}
      {isSuccess &&(
        <div>
          {data?.map(posts =>{
            return(
              <div key = {posts.id}>
                <span>
                  {posts.title}
                </span>
              </div>
            )
          })}
        </div>)}
    </div>
  )
}

export default App