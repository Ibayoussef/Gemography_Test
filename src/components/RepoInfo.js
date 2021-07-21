import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Moment from "react-moment";
function RepoInfo({ repo }) {
  return (
    <Container className="repos-info">
      <Row>
        <h1>{repo.name}</h1>
      </Row>
      <Row>
        <p>{repo.description}</p>
      </Row>
      <Row>
        <Col md={2}>Stars: {repo.stargazers_count}</Col>
        <Col md={2}>Issues: {repo.open_issues_count}</Col>
        <Col>
          <p>
            {" "}
            Submitted <Moment fromNow>{repo.created_at}</Moment> by{" "}
            {repo.owner.login}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default RepoInfo;
