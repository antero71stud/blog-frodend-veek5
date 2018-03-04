import React from 'react'
const Blog = ( {blog} ) => {

  return (
    <li className="blog">
      <div>
        {blog.title} {blog.author}
      </div>  
    </li>
    )
  }

export default Blog