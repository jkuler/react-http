import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import axios from 'axios';


class Blog extends Component {
  state = {
    posts: []
  }

  // async componentDidMount() {
  //   const { data: response } = await axios.get(
  //     'https://jsonplaceholder.typicode.com/posts',
  //   );
  //   this.setState({ posts: response });
  // }
 componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res => {
            const posts = res.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
              return {
                ...post, 
                author: 'Josue'
              }
            })
            this.setState({posts: updatedPosts});
          })
 }

  render() {

    const posts = this.state.posts.map(post => {
      return <Post key={post.id} title={post.title} author={post.author} />;
    });

    return (

      <div>
        <section className='Posts'>
          { posts }
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
