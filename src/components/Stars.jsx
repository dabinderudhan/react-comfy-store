import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  /*
  // array.form approach
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= index + 1 - 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  */

  // for loop approach
  const tempStars = [];
  for (let i = 1; i <= 5; i++) {
    stars >= i
      ? tempStars.push(<BsStarFill />)
      : stars >= i - 0.5
      ? tempStars.push(<BsStarHalf />)
      : tempStars.push(<BsStar />);
  }
  const displayStars = tempStars.map((star, index) => {
    return <span key={index}>{star}</span>;
  });

  return (
    <Wrapper>
      <div className="stars">{displayStars}</div>
      <div className="reviews">({reviews} customer reviews)</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;

export default Stars;
