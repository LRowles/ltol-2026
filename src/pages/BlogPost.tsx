import { useParams } from "react-router-dom";
import { blogPosts } from "@/data/blog-posts";
import BlogPostTemplate from "@/components/templates/BlogPostTemplate";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
};

export default BlogPost;
