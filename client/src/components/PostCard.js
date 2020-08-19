import React from "react";
import { Button, Card, Icon, Label, Image } from "semantic-ui-react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import relativeTime from "dayjs/plugin/relativeTime";

const PostCard = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) => {
  dayjs.extend(relativeTime); // extend dayjs with relativeTime plugin for using .fromNow() method
  
  const likePost = () => {
    console.log('like post!')
  }
  const commentPost = () => {
    console.log('comment on post!')
  }
  return (
    <Card fluent="true">
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {dayjs(createdAt).fromNow()}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as="div" labelPosition="right">
          <Button color="teal" basic onClick={likePost}>
            <Icon name="heart" />
          </Button>
          <Label  basic color="teal" pointing="left">
           {likeCount}
          </Label>
        </Button>
        <Button as="div" labelPosition="right">
          <Button color="blue" basic onClick={commentPost}>
            <Icon name="comments" />
          </Button>
          <Label  basic color="blue" pointing="left">
           {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
