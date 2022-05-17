import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";
import React, { useEffect, useState } from "react";

const Row = ({ rowId, title, fetchUrl }) => {
  // Handle State
  const [movies, setMovies] = useState([]);

  // fetching data
  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(fetchUrl);
      const data = await res.json();
      setMovies(data?.results);
    };
    getMovies();
  }, []);

  //  Slider Left
  const slideLeft = () => {
    let slider = document.querySelector("#slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  //   Slider Right
  const slideRight = () => {
    let slider = document.querySelector("#slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies && movies.map((item, id) => <Movie key={id} item={item} />)}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
