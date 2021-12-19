import React from "react";
import { connect } from "react-redux";
import { fetchNewsSuccess, fetchNewsFailure } from "../../redux/action";
import { fetchNewsMethod } from "../../redux/method";
import Publisher from "./Publisher";
import "./NewsContainer.css";
interface INewsContainerProps {
  news: any;
  fetchNewsSuccess: (payload: any) => void;
  fetchNewsFailure: (error: any) => void;
  publishers: any;
  error:any;
}

class NewsContainer extends React.Component<INewsContainerProps> {
  state = {};

  componentDidMount() {
    this.newsFetch();
  }

  newsFetch = async () => {
    try {
      const response = await fetchNewsMethod();
      this.props.fetchNewsSuccess(response);
    } catch (error) {
      this.props.fetchNewsFailure(error);
    }
  };

  render() {
    return (
      <div className="news-container">
          {!this.props.error?
        <>
        <h3 className="news-container-title">List Of Publishers</h3>
        <Publisher
          publishers={this.props.publishers !== [] ? this.props.publishers : []}
        
        /></>:<><h3>Error Fetching content</h3></>}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    news: state.news,
    publishers: state.publishers,
    error:state.error
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchNewsSuccess: (payload: any) => dispatch(fetchNewsSuccess(payload)),
    fetchNewsFailure: (error: any) => dispatch(fetchNewsFailure(error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
