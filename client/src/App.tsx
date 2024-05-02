import {useEffect, useState} from "react";
import {Header, PostEditor} from "./components";
import { PostData } from "./types";
import usePosts from "./hooks/usePosts";
import { PostItem } from "./components/PostItem";


function App() {
  // const [users, setUsers] = useState<UserData[]>([]);
  // const [posts, setPosts] = useState<PostData[]>([]);
  const [isPostEditorOpen, setIsPostEditorOpen] = useState(false);
  const { posts, loadPosts } = usePosts();

  const openEditor = () => setIsPostEditorOpen(true);
  const closeEditor = () => setIsPostEditorOpen(false);

    useEffect(() => {
        loadPosts()
    }, []);

  return (
    <>
      <Header openPostEditor={openEditor} />
      <div className="posts-wrapper">
          {posts && posts.length &&
              posts.map((post: PostData) => (
              // <div key={post.id}>{post.id} {post.content}</div>
              <PostItem key={post.id} post={post} />
          ))}
      </div>
        {isPostEditorOpen && <PostEditor closeEditor={closeEditor}/>}
    </>
  );
}

export default App;
