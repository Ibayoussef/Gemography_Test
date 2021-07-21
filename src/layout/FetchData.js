import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRepos } from "../actions/repos";
function FetchData({ fetchRepos }) {
  useEffect(() => {
    fetchRepos(1);
  }, [fetchRepos]);

  return <div />;
}

const mapStateToProps = (state) => {
  return {
    repos: state.repos,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepos: () => dispatch(fetchRepos()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FetchData);
