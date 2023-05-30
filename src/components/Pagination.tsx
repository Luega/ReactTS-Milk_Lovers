import React from "react";

type Props = {
  totalCards: number;
  cardsPerPage: number;
  setCurrentPage: (number: number) => void;
};

const Pagination = ({ totalCards, cardsPerPage, setCurrentPage }: Props) => {
  let pages: number[] = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            className="p-2"
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
