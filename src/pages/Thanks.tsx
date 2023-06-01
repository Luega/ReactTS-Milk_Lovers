import React from "react";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <main>
      <section className="pt-10 flex flex-col items-center">
        <h1 className="my__TextColorRegularDark mb-4 text-3xl font-bold">
          Order accepted
        </h1>
        <h2 className="text-xl font-thin">Thank you for choosing us and...</h2>
        <img
          className="my-2 rounded"
          src="https://picsum.photos/300/300"
          alt=""
        />
        <h2 className="text-xl font-thin">...good drink</h2>
        <Link
          className="my__button my__buttonBlue my-10 cursor-pointer italic text-3xl"
          to={"/store"}
        >
          Look some more
        </Link>
      </section>
    </main>
  );
};

export default Thanks;
