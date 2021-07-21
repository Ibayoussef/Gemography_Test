import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRepos } from "../actions/repos";
import { fetchStars } from "../actions/mostStared";
function FetchData({ fetchRepos, fetchStars }) {
  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  useEffect(() => {
    fetchStars();
  }, [fetchStars]);

  return <div />;
}

const mapStateToProps = (state) => {
  return {
    repos: state.repos,
    stars: state.stars,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepos: () => dispatch(fetchRepos()),
    fetchStars: () => dispatch(fetchStars()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FetchData);
