import Post from "./Post";
import WebpackLogo from "./assets/webpack-logo.png";
import "./styles/style.css";

const post = new Post("Webpack Post Title");
console.log("Post to string:", post.toString());