import React from "react";
import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "https://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <div className="flex justify-center mx-16 sm:mx-32">
      <img
        src={hero}
        alt={name}
        className="inline object-cover w-16 h-16 mr-2 rounded-full my-16 sm:w-32 sm:h-32 sm:my-8"
      />
      <div className="flex-col justify-center w-full mx-4 mt-12 sm:mt-16">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
      <Link to={`/details/${id}`} className="pet">
        <button className="inline bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white my-16 py-1 px-4 border border-red-500 hover:border-transparent rounded sm:mt-20 sm:my-14">
          Details
        </button>
      </Link>
    </div>
  );
};

export default Pet;
