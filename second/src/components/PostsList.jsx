import Post from './Post';
import NewPost from './NewPost'


export default function PostsList() {
  return <>
    <NewPost />
    <ul>
      <li>{<Post />}</li>
      <li>{<Post />}</li>
    </ul>
  </>

}