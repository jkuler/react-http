import React, { Component, Suspense } from 'react';
import  { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';

import asyncComponent from '../../Hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() =>{
  return import('./NewPost/NewPost')
});

const NewPosts = React.lazy(() => import('./NewPost/NewPost'))
// import axios from 'axios';
// import axios from '../../axios'


class Blog extends Component {
 
state = {
      auth: true
    }

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
                    to="/posts" 
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                      color: '#fa923f', textDecoration: 'underline'
                    }}>Posts</NavLink></li>
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
        
        
        <Switch> 
          {/* { this.state.auth ? <Route path="/new-post"  component={ AsyncNewPost } /> : null }  */}
          { this.state.auth ? <Route path="/new-post"  render={()=> (
          <Suspense fallback={<div>Loading...</div>}>
            <NewPosts />
          </Suspense>
          )} /> : null } 
          <Route path="/posts" component={ Posts } /> 
          <Route render={() => <h1>Not Found</h1>} /> 
          {/* <Redirect from="/" to="/posts" />  */}
          {/* <Route path="/" component={ Posts } />   */}
        </Switch>
        
        
      </div>
    );
  }
}

export default Blog;
