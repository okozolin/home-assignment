import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { PostsProvider } from './context/posts/PostsContext.tsx';

const root = document.getElementById("root");
if (root) ReactDOM.createRoot(root).render(<PostsProvider><App /></PostsProvider>);
