import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPublisherData } from "../../redux/action";
import { connect } from "react-redux";
import NewsTile, { INewsTile } from "./NewsTile";
import "./NewsPublisher.css";
import Search from "../Search";

interface INewsPublisherprops {
  publisherData: any;
  getPublisherData: (val: any) => void;
}

const NewsPublisher = (props: INewsPublisherprops) => {
  const [publisherData, setPublisherData] = useState([]);
  const params = useParams();

  //@ts-ignore
  useEffect(() => {
    function getData() {
      props.getPublisherData(params.publisher);
    }
    getData();
  }, []);

  useEffect(() => {
    setPublisherData(props.publisherData);
  }, [props.publisherData]);

  const onSerach = (value: any) => {
    const filterList = props.publisherData.filter(
      (publisher: any) => publisher.TITLE.toLowerCase().indexOf(value) > -1
    );
    setPublisherData(filterList);
  };

  const onSerachClear = () => {
    setPublisherData(props.publisherData);
  };

  return (
    <div className="news-publisher">
      <h4 className="publisher-title">
        Articles from Publisher : {params.publisher}
      </h4>
      <Search onSearch={onSerach} onSearchClear={onSerachClear} />
      <div className="publisher-news-tile">
        {publisherData &&
          publisherData.map((news: INewsTile) => {
            return <NewsTile newsData={news} />;
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    publisherData: state.publisherData,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getPublisherData: (payload: any) => dispatch(getPublisherData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPublisher);
