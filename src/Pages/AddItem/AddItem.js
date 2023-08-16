import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "./AddItem.css";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `https://infinity-electronics-gadget-server.onrender.com/products`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Product added succesfully!");
        navigate("/items");
        console.log(result);
      });
  };
  return (
    <div className="container container-details mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-8 col-12 mx-auto">
          <div className="w-75 mx-auto form-details p-3">
            <h2 className="text-primary my-3 text-center">Please Add a Item</h2>
            <form
              className="d-flex flex-column"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                required
                className="mb-2 rounded-3 border-0 p-2"
                placeholder="Category"
                {...register("catagory")}
              />
              <input
                required
                className="mb-2  rounded-3 border-0 p-2"
                placeholder="Name"
                {...register("name")}
              />
              <input
                required
                type="email"
                className="mb-2  rounded-3 border-0 p-2"
                value={user?.email}
                {...register("email")}
              />
              <input
                required
                className="mb-2  rounded-3 border-0 p-2"
                placeholder="Supplier"
                {...register("supplier")}
              />
              <input
                required
                className="mb-2  rounded-3 border-0 p-2"
                placeholder="Quantity"
                type="number"
                {...register("quantity")}
              />
              <textarea
                required
                className="mb-2  rounded-3 border-0 p-2"
                placeholder="Description"
                {...register("desc")}
              />
              <input
                required
                className="mb-2 rounded-3 border-0 p-2"
                placeholder="Price"
                type="number"
                {...register("price")}
              />
              <input
                required
                className="mb-2  rounded-3 border-0 p-2"
                placeholder="Photo URL"
                type="text"
                {...register("img")}
              />
              <input
                className="mb-2 py-2 bg-primary text-white  rounded-3 border-0 p-2"
                type="submit"
                value="Add A Item"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
