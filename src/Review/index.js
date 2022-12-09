import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ReviewItemComponent from "./review-item";
import "./pagination.css";

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

const  reviews_sample = [
  {
    user: "PaginatedDreamscape",
    parkCode: "acad",
    rating: 8,
    dateReviewed: today,
    review: "I had a great time! It was a bit rainy on the first couple of days, but after that it was really nice."
  },
  {
    user: "InescapableOribit",
    parkCode: "acad",
    rating: 9,
    dateReviewed: today,
    review: "It was great. I enjoyed looking at the ocean."
  },
  {
    user: "AffablePanda123",
    parkCode: "acad",
    rating: 9,
    dateReviewed: today,
    review: "Good view, good people, good park"
  },
  {
    user: "thunk_buster",
    parkCode: "acad",
    rating: 6,
    dateReviewed: today,
    review: "The entry fee was a bit higher than expect, but worth it"
  },
  {
    user: "ejt",
    parkCode: "acad",
    rating: 8,
    dateReviewed: today,
    review: "Good"
  },
  {
    user: "Eminem",
    parkCode: "acad",
    rating: 8,
    dateReviewed: today,
    review: "I had a great time! It was a bit rainy on the first couple of days, but after that it was really nice."
  },
  {
    user: "MioMama",
    parkCode: "acad",
    rating: 9,
    dateReviewed: today,
    review: "It was great. I enjoyed looking at the ocean."
  },
  {
    user: "GlassHandle",
    parkCode: "acad",
    rating: 9,
    dateReviewed: today,
    review: "Good view, good people, good park"
  },
  {
    user: "ineffible_909",
    parkCode: "acad",
    rating: 6,
    dateReviewed: today,
    review: "The entry fee was a bit higher than expect, but worth it"
  },
  {
    user: "xxtwicexx",
    parkCode: "acad",
    rating: 8,
    dateReviewed: today,
    review: "Good"
  },
  {
    user: "candyslandys",
    parkCode: "acad",
    rating: 8,
    dateReviewed: today,
    review: "I had a great time! It was a bit rainy on the first couple of days, but after that it was really nice."
  },
  {
    user: "muscular_octopus_8",
    parkCode: "acad",
    rating: 9,
    dateReviewed: today,
    review: "It was great. I enjoyed looking at the ocean."
  },
  {
    user: "calpo",
    parkCode: "acad",
    rating: 9,
    dateReviewed: today,
    review: "Good view, good people, good park"
  },
  {
    user: "monks_a_million",
    parkCode: "acad",
    rating: 6,
    dateReviewed: today,
    review: "The entry fee was a bit higher than expect, but worth it"
  },
  {
    user: "gladness",
    parkCode: "acad",
    rating: 8,
    dateReviewed: today,
    review: "Good"
  },
  {
    user: "Piscuante",
    parkCode: "acad",
    rating: 8,
    dateReviewed: today,
    review: "I had a great time! It was a bit rainy on the first couple of days, but after that it was really nice."
  },
  {
    user: "Pease&Carrots",
    parkCode: "acad",
    rating: 9,
    dateReviewed: today,
    review: "It was great. I enjoyed looking at the ocean."
  },
  {
    user: "ClickBait",
    parkCode: "acad",
    rating: 9,
    dateReviewed: today,
    review: "Good view, good people, good park"
  },
  {
    user: "9909hihi",
    parkCode: "acad",
    rating: 6,
    dateReviewed: today,
    review: "The entry fee was a bit higher than expect, but worth it"
  },
  {
    user: "Robert",
    parkCode: "acad",
    rating: 8,
    dateReviewed: today,
    review: "Good"
  }
];

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

  const reviewsPerPage = 5;
  const [reviewOffset, setReviewOffset] = useState(0);

  const endOffset = reviewOffset + reviewsPerPage;
  const currentReviews = reviews_sample.slice(reviewOffset, endOffset);
  const pageCount = Math.ceil(reviews_sample.length / reviewsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * reviewsPerPage) % reviews_sample.length;
    setReviewOffset(newOffset);
  };

  return(
    <>
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
    </>
  );
}

export default ReviewsListComponent;