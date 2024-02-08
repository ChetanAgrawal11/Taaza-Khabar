import React from "react";

const Newsitem = (props) => {
  let { newstitle, newsdesc, imageUrl, newsUrl, author, date } = props;
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{newstitle}...</h5>
          <p className="card-text"> {newsdesc}...</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read more
          </a>
          <p class="card-text">
            <small class="text-body-secondary">
              Published by {author} on {date}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
