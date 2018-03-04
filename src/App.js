import React from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],   
      error: null,
      newBlog: null,
      username: '',
      password: '',
      user: null
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )
  } 

  addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      content: this.state.newBlog,
      date: new Date(),
      important: Math.random() > 0.5
    }

    blogService
      .create(blogObject)
      .then(newBlog => {
        this.setState({
          blogs: this.state.blogs.concat(newBlog),
          newBlog: ''
        })
      })
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>blogs</h2>

        <Notification message={this.state.error} />

        <h2>Kirjaudu</h2>

        <form onSubmit={this.login}>
          <div>
            käyttäjätunnus
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            salasana
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <button type="submit">kirjaudu</button>
        </form>

        <h2>Luo uusi blog</h2>

        <form onSubmit={this.addBlog}>
          <input
            value={this.state.newBlog}
            onChange={this.handleNoteChange}
          />
        <button type="submit">tallenna</button>
        </form>


        {this.state.blogs.map(blog => 
          <Blog key={blog._id} blog={blog}/>
        )}
      </div>
    );
  }
}

export default App;
