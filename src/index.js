import * as $ from "jquery";
import Post from "@models/Post";
import xml from "./assets/data.xml";
import WebpackLogo from "./assets/webpack-logo";
import "./styles/style";

const post = new Post("Webpack Post Title");

$("pre").html(post.toString());