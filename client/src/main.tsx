import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { PostsProvider } from './context/posts/PostsContext.tsx';
import { UsersProvider } from "./context/users/UsersContext.tsx";

const root = document.getElementById("root");
if (root) ReactDOM.createRoot(root).render(<UsersProvider><PostsProvider><App /></PostsProvider></UsersProvider>);
