import React from 'react'

const BlogForm = ({ onSubmit, handleChange, subject, author, url}) => {
  return (
    <div>
      <h2>Luo uusi blogi</h2>

      <form onSubmit={onSubmit}>
        Otsikko
        <input
          value={subject}
          onChange={handleChange}
        />
        <br />
        Author
        <input
          value={author}
          onChange={handleChange}
        />
        <br />
        Url
        <input
          value={url}
          onChange={handleChange}
        />

        <button type="submit">tallenna</button>
      </form>
    </div>
  )
}

export default BlogForm