import React from "react";

// INTERNAL IMPORT
import { BlogDetailOne, BlogDetailTwo } from "../PageComponents/BlogDetail"; // Make sure this path is correct
import { Header, Footer, Copyright } from "../PageComponents/Components"; // Ensure this path is correct as well

const BlogDetail = () => {
  return (
    <div className="template-color-1 nft-body-connect">
      <Header />
      <BlogDetailOne />
      <BlogDetailTwo />
      <Footer />
      <Copyright />
    </div>
  );
};

export default BlogDetail;
