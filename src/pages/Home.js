import React from "react";
import { useSelector } from "react-redux";
import RepoInfo from "../components/RepoInfo";
import { Container, Row, Col, Image } from "react-bootstrap";
function Home() {
  const repos = useSelector((state) => state.repos);
  console.log(repos[0]);
  return (
    <Container>
      {repos.map((repo) => (
        <Row>
          <Col md={2}>
            <Image width={"100%"} src={repo.owner.avatar_url} />
          </Col>
          <Col>
            <RepoInfo repo={repo} />
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Home;
