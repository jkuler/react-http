import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';

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
              <li><a href="/">Home</a></li>
              <li><a href="/">New Post</a></li>
            </ul>
          </nav>
        </header>
        <Posts />
      </div>
    );
  }
}

export default Blog;
