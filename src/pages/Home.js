import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Grid } from 'semantic-ui-react'
import Loading from '../components/Loading';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import { AuthContext } from '../context/auth';
import Header2 from '../components/Header2';
import PostForm from '../components/PostForm';

function Home() {
  const {user} = useContext(AuthContext);
  let posts = ''
  const { loading, data } = useQuery(FETCH_POSTS_QUERY)

  if (data) {
    posts = { data: data.getPosts }
  }
  return (
    <Grid stackable columns={3}>
      <Grid.Row centered>
        {user ? <Header2 user={user.username} /> : <Header />}
      </Grid.Row>
      <Grid.Row>
        {
          user && (
            <Grid.Column>
              <PostForm />
            </Grid.Column>
          )
        }
        {loading ? (
          <Loading />
        ) : (       
          posts.data &&
          posts.data.map(post => (
            <Grid.Column key={post.id} style={{ marginBottom: 20 }} textAlign="center">
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  )
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`

export default Home
