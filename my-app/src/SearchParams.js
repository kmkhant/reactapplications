import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./components/Result";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    setUserLoaded(false);
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    // console.log(json);

    setPets(json.pets);
    setUserLoaded(true);
  }

  return (
    <div>
      {userLoaded ? (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              requestPets();
            }}
            className="bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4"
          >
            <label
              htmlFor="location"
              className="text-gray-700 text-sm font-bold mb-2 mx-4"
            >
              Location
              <input
                type="text"
                id="location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                placeholder="Location"
                className="shadow appearance-none border border-gray-500 rounded mx-4 px-3 py-1 text-center text-gray-700 leading-tight focus:shadow-outline "
              />
            </label>
            <label
              htmlFor="animal"
              className="text-gray-700 text-sm font-bold mb-2 mx-4"
            >
              Animal
              <select
                id="animal"
                value={animal}
                onChange={(e) => setAnimal(e.target.value)}
                onBlur={(e) => setAnimal(e.target.value)}
                className="text-gray-700 text-sm mb-2 mx-4"
              >
                {ANIMALS.map((animal) => (
                  <option value={animal} key={animal}>
                    {animal}
                  </option>
                ))}
              </select>
            </label>
            <label
              htmlFor="breed"
              className="text-gray-700 text-sm font-bold mb-2"
            >
              Breed
              <select
                id="breed"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                onBlur={(e) => setBreed(e.target.value)}
                className="text-gray-700 text-sm mb-2 mx-4 px-4"
              >
                {breeds.map((breed) => (
                  <option value={breed} key={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </label>
            <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-4 border border-red-500 hover:border-transparent rounded">
              Submit
            </button>
          </form>
          <Results pets={pets} />
        </div>
      ) : (
        <p>loading ... </p>
      )}
    </div>
  );
};

export default SearchParams;
