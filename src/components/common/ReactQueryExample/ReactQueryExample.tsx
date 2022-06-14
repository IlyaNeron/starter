import { useQuery, useQueryClient } from 'react-query'

import { postApi } from 'services/api/app'

export const ReactQueryExample = () => {
  useQueryClient()
  const { status, data, error, isFetching } = useQuery('posts', postApi.getAllPosts)

  if (status === 'loading') {
    return <div>Loading posts...</div>
  }

  if (status === 'error') {
    console.error(error)
    return <div>Something went wrong...</div>
  }

  return (
    <>
      <div>
        {data.map((post: any) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>

      {isFetching && <div>Background updating...</div>}
    </>
  )
}
