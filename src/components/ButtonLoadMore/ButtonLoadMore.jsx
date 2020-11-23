import React from "react";

const ButtonLoadMore = ({ loadMore }) => {
  return (
    <div className='divBttn'>
      <button className="loadMoreBttn" onClick={loadMore}>
        Load More
      </button>
    </div>
  );
};

export default ButtonLoadMore;
