import React from "react";
import { assets } from "../assets/assets";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="w-[90%]">
      <div className="w-[100%] mr-5 lg:w-[50%] ml-[max(5vw,25px)] my-12 text-[#6d6d6d] text-xl border rounded-md p-5 mb-16">
        <form
          className="gap-7 lg:gap-5 flex flex-col"
          onSubmit={onSubmitHandler}
        >
          <div>
            <p>Upload Image</p>
            <label htmlFor="image">
              <img
                className="w-[150px] border rounded-sm cursor-pointer"
                src={image ? URL.createObjectURL(image) : assets.uploadimg}
                alt=""
              />
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </div>
          <div>
            <p>Product Name</p>
            <input
              onChange={onChangeHandler}
              value={data.name}
              className="p-2.5 border rounded-sm lg:w-[550px] w-[100%]"
              type="text"
              name="name"
              id="name"
              placeholder="Type Here"
              required
            />
          </div>
          <div>
            <p>Product Description</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description}
              className="p-2.5 border rounded-sm lg:w-[550px] w-[100%]"
              name="description"
              rows="6"
              placeholder="Write Content Here"
              required
            ></textarea>
          </div>
          <div className="flex flex-col gap-7 lg:flex-row lg:gap-[110px]">
            <div>
              <p>Product Category</p>
              <select
                onChange={onChangeHandler}
                value={data.category}
                className="border rounded-sm p-2.5 w-[100%]"
                name="category"
                id="category"
                required
              >
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Desserts">Desserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div>
              <p>Product Price</p>
              <input
                onChange={onChangeHandler}
                value={data.price}
                className="border rounded-sm p-2.5 w-[100%]"
                type="number"
                name="price"
                id="price"
                placeholder="Type Here"
                required
              />
            </div>
          </div>
          <button
            className="max-w-[120px] border-none p-2.5 bg-black text-white cursor-pointer rounded-md"
            type="submit"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
