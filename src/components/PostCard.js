import React, { useContext } from 'react';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import idea from './idea.png';
import moment from 'moment';
import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';


function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes }
}) {
  const { user } = useContext(AuthContext);

  return (
    <Card fluid color='teal'>
      <Card.Content textAlign = "left">
        <Image
          floated='right'
          size='mini'
          src={idea}
        />
        <Card.Header style={{color: "#4f8a8b"}}>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
        <Card.Description style={{fontWeight: "bold"}}>
          {body}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikeButton user={user} post={{ id, likes, likeCount }} />
        <Button labelPosition='right' as={Link} to={`/posts/${id}`}>
          <Button color='instagram'>
            <Icon name='comments' />
          </Button>
          <Label basic color='instagram' pointing='left'>
          {commentCount}
          </Label>
        </Button>
        {user && user.username === username && (
          <DeleteButton postId={id} />
        )}
      </Card.Content>
    </Card>
  )
}

export default PostCard;
