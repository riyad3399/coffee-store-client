import { FaPen, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, allCoffee, setAllCoffee }) => {
  const {
    _id,
    coffeeName,
    quantity,
    category,
    photo,
  } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your coffee has been deleted.",
                "success"
              )
              const remaining = allCoffee.filter((cof) => cof._id !== _id);
              setAllCoffee(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mt-4">
      <div className="card card-side shadow-xl bg-banner h-full">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex w-full justify-between items-center">
          <div className="text-white">
            <p className="text-lg font-semibold">Name:{coffeeName}</p>
            <p className="text-lg font-semibold">Price: {quantity}</p>
            <p className="text-lg font-semibold">Category: {category}</p>
          </div>
          <div className="card-actions pr-6">
            <div className="btn-group btn-group-vertical space-y-4">
              <button className="btn btn-warning">
                <FaEye />{" "}
              </button>
              <Link to={`/updatedCoffee/${_id}`}>
                <button className="btn">
                  <FaPen />{" "}
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-error"
              >
                <FaTrash />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
