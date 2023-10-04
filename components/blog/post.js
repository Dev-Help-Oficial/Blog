import React from "react";

function PostContent({ content }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
}

export default PostContent;
