import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Grid } from "semantic-ui-react";

import { FETCH_POSTS_QUERY } from "../utils/graphql";
import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  if (loading) {
    return <h1>loading posts...</h1>;
  }
  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {user && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
        {data.getPosts &&
          data.getPosts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
              <PostCard post={post}></PostCard>
            </Grid.Column>
          ))}
      </Grid.Row>
    </Grid>
  );
};

export default Home;
