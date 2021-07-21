import React, { useState } from "react";
import { useSelector } from "react-redux";
import RepoInfo from "../components/RepoInfo";
import { Container, Row, Col, Image } from "react-bootstrap";
function Home() {
  const [getStared, setGetStared] = useState(false);
  const { repos } = useSelector((state) => state.repos);
  const { stars } = useSelector((state) => state.stared);
  const handleStared = () => {
    setGetStared(!getStared);
    console.log(getStared);
  };
  console.log(repos[0]);
  return (
    <Container>
      <button onClick={() => handleStared()}>STARED</button>
      {!getStared &&
        repos.map((repo) => (
          <Row>
            <Col md={2}>
              <Image width={"100%"} src={repo.owner.avatar_url} />
            </Col>
            <Col>
              <RepoInfo repo={repo} />
            </Col>
          </Row>
        ))}
      {getStared &&
        stars.map((star) => (
          <Row>
            <Col md={2}>
              <Image width={"100%"} src={star.owner.avatar_url} />
            </Col>
            <Col>
              <RepoInfo repo={star} />
            </Col>
          </Row>
        ))}
    </Container>
  );
}

export default Home;
