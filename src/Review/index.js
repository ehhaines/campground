import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ReviewItemComponent from "./review-item";
import { findReviewsByParkThunk } from "./reviews-thunks";
import "./pagination.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import CreateReview from "./create-review";
import CurrentUser from "../Profile/current-user";

// const sampleUser = "sample_user_2";

function Reviews({ currentReviews }) {
  return (
    <>
      {currentReviews &&
        currentReviews.map(review =>
          <ReviewItemComponent 
          key={review.user}
          review={review}/>
        )}
    </>
  );
}

const ReviewsListComponent = () => {

  const params = useParams();
  const thisPark = params.park;

  const {reviews, reviewsLoading} = useSelector((state) => state.reviews)
  const {currentUser} = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findReviewsByParkThunk(thisPark));
  }, []);

  const reviewsPerPage = 5;
  const [reviewOffset, setReviewOffset] = useState(0);

  const endOffset = reviewOffset + reviewsPerPage;
  const currentReviews = reviews.slice(reviewOffset, endOffset);
  const pageCount = Math.ceil(reviews.length / reviewsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * reviewsPerPage) % reviews.length;
    setReviewOffset(newOffset);
  };

  return(
    <div>
      <ul className="list-group">
        <Reviews currentReviews={currentReviews} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeClassName="active"
        />
      </ul>
      <br></br><br></br>
      <div className="text-dark h5">{currentUser && <span>Submit a review!</span>}{!currentUser && <span>You must log in to submit a review!</span>}</div>
      {currentUser && <div>
        {reviews.filter(rev => rev.user === currentUser.username).length === 0 && <CreateReview className="w-75"/>}
        {reviews.filter(rev => rev.user === currentUser.username).length > 0 && <div className="text-secondary h5 mt-3">...You've already reviewed this park!</div>}
      </div>}
    </div>
  );
}

export default ReviewsListComponent;