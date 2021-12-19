import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import "./Publisher.css";
interface IPublisherProps {
  publishers: any[];
}

const Publisher = (props: IPublisherProps) => {
  const { publishers } = props;

  const [publishersList, setPublishersList] = useState([] as any);

  useEffect(() => {
    setPublishersList(publishers);
  }, [publishers]);

  const onSerach = (value: any) => {
    const filterList = publishers.filter(
      (publisher: any) => publisher.toLowerCase().indexOf(value) > -1
    );

    setPublishersList(filterList);
  };

  const onSerachClear = () => {
    setPublishersList(publishers);
  };

  return (
    <div className="publisher-list">
      <Search onSearch={onSerach} onSearchClear={onSerachClear} />
      <div className="publishers-grid">
        {" "}
        {publishersList &&
          publishersList.map((publisher: any) => {
            return (
              <div className="publisher-tile">
                <Link
                  className="publisher-link"
                  to={`/${publisher
                    .replace(/[^a-zA-Z0-9-. ]+/i, "")
                    .replace(/[^a-zA-Z0-9-. ]+/i, "")}`}
                  title={publisher
                    .replace(/[^a-zA-Z0-9-. ]+/i, "")
                    .replace(/[^a-zA-Z0-9-. ]+/i, "")}
                >
                  {publisher
                    .replace(/[^a-zA-Z0-9-. ]+/i, "")
                    .replace(/[^a-zA-Z0-9-. ]+/i, "")}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Publisher;
