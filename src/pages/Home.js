import React, { useState } from "react";
import { useSelector } from "react-redux";
import RepoInfo from "../components/RepoInfo";
import { Container, Row, Col, Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import { fetchRepos } from "../actions/repos";
function Home() {
  const [number, setNumber] = useState(2);
  let dispatch = useDispatch();
  const repos = useSelector((state) => state.repos);
  const fetchNext = () => {
    setNumber(number + 1);
    console.log(number);
    dispatch(fetchRepos(number, repos));
  };
  return (
    <Container>
      <InfiniteScroll
        dataLength={repos.length} //This is important field to render the next data
        next={fetchNext}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {repos.map((repo) => (
          <Row className="repo-row">
            <Col md={2}>
              <Image width={"100%"} src={repo.owner.avatar_url} />
            </Col>
            <Col md={10}>
              <RepoInfo repo={repo} />
            </Col>
          </Row>
        ))}
      </InfiniteScroll>
    </Container>
  );
}

export default Home;
