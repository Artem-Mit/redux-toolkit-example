import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../features/postSlice';
import PostItem from './PostItem';


const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts)
  return (
    <div>
      <button
        type='submit'
        className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
        onClick={() => dispatch(getPosts())}
      >
        Get posts (async)
      </button>
      {posts.length > 0 ?
        posts?.map((post) => (
          <PostItem key={post.id} post={post} />
        )) : <p className='my-5 font-medium'>Still empty</p>}
    </div>
  )
}

export default Posts
