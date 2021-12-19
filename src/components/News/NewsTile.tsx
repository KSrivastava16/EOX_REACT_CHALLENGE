import React from "react";
import "./NewsTile.css";
export interface INewsTile {
  ID: number;
  TITLE: string;
  URL: string;
  PUBLISHER: string;
  CATEGORY: string;
  HOSTNAME: string;
  TIMESTAMP: any;
}

export interface INewsTileProps {
  newsData: INewsTile;
}

const NewsTile = (props: INewsTileProps) => {
  const { newsData } = props;

  return (
    <div className="news-tile">
      <h6 className="news-tile-title">{newsData.TITLE}</h6>
      <small className="publisher-name">
        {new Date(newsData.TIMESTAMP).toDateString()}
        {"  "}
        {new Date(newsData.TIMESTAMP).toTimeString()}
      </small>
      <a href={newsData.URL} className="news-more-link">
        {" "}
        Learn More
      </a>
    </div>
  );
};

export default NewsTile;
