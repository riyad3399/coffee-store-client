import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function App() {
  const loadedCoffee = useLoaderData();
  const [allCoffee, setAllCoffee] = useState(loadedCoffee)

  return (
    <>
      <Link className="btn btn-outline hover:bg-orange-300" to="/addCoffee">
        {" "}
        Add New Coffee <FaArrowRight />
      </Link>

      <h3 className="text-4xl text-center mb-10">Coffee store {allCoffee.length}</h3>
      <div className="grid md:grid-cols-2 gap-8 container mx-auto">
        {allCoffee.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} allCoffee={allCoffee} setAllCoffee={setAllCoffee}></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
