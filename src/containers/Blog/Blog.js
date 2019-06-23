import React, { Component } from 'react';
import  { Route, NavLink } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

// import axios from 'axios';
import axios from '../../axios'


class Blog extends Component {
 

  // async componentDidMount() {
  //   const { data: response } = await axios.get(
  //     'https://jsonplaceholder.typicode.com/posts',
  //   );
  //   this.setState({ posts: response });
  // }


  render() {
   

    return (

      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink 
                    to="/" 
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                      color: '#432Fe1', textDecoration: 'underline'
                    }}>Home</NavLink></li>
              <li><NavLink to={ {
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              } }>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home 1</h1>} /> */}
        <Route path="/" exact component={ Posts } />
        <Route path="/new-post"  component={ NewPost } />
      </div>
    );
  }
}

export default Blog;
