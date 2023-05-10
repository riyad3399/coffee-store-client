import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatedCoffee = () => {
  const coffee = useLoaderData();
  const {
    _id,
    coffeeName,
    quantity,
    supplier,
    taste,
    category,
    details,
    photo,
  } = coffee;

  const handleUpdatedCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const coffeeName = form.coffeeName.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      coffeeName,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="bg-orange-50 p-24 w-4/5 mx-auto bg-banner2">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-semibold mb-3">Updated a Coffee</h1>
        <p className="text-xl">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleUpdatedCoffee}>
        {/* form row */}
        <div className="md:flex mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Coffee Name
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="coffeeName"
                defaultValue={coffeeName}
                placeholder="coffee name"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <label className="label">
              <span className="label-text font-semibold text-lg">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="coffee quantity"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="md:flex mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="coffee supplier"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <label className="label">
              <span className="label-text font-semibold text-lg">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="coffee taste"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="md:flex mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="coffee category"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-5">
            <label className="label">
              <span className="label-text font-semibold text-lg">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="coffee details"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="mb-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Photo URL
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="photo URL"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Updated Coffee"
          className="btn btn-block bg-orange-300 hover:bg-orange-400 mt-5"
        />
      </form>
    </div>
  );
};

export default UpdatedCoffee;
