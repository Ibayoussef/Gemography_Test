import React from "react";
import { Row, Col } from "react-bootstrap";
import Moment from "react-moment";
function RepoInfo({ repo }) {
  return (
    <>
      <Row>{repo.name}</Row>
      <Row>{repo.description}</Row>
      <Row>
        <Col>Stars: {repo.stargazers_count}</Col>
        <Col>Issues:{repo.open_issues_count}</Col>
        <Col>
          Submitted <Moment fromNow>{repo.created_at}</Moment> by{" "}
          {repo.owner.login}
        </Col>
      </Row>
    </>
  );
}

export default RepoInfo;
