import React, { useState } from "react";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    photo: null,
    orderNo: "",
    ownerName: "",
    type: "agricultural",
    surveyNo: "",
    regNo: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log(formData);
    // Add your logic to save the property (e.g., upload image, save to database)
  };

  return (
    <div className="container">
      <h2>Property Details Entry</h2>
      <form onSubmit={handleSubmit} id="propertyForm">
        <label htmlFor="photo">Photo:</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleFileChange}
          required
        />

        <label htmlFor="orderNo">Order No:</label>
        <input
          type="text"
          name="orderNo"
          value={formData.orderNo}
          onChange={handleChange}
          placeholder="Enter order number"
          required
        />

        <label htmlFor="ownerName">Owner Name:</label>
        <input
          type="text"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          placeholder="Enter owner name"
          required
        />

        <label htmlFor="type">Type:</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="agricultural">Agricultural</option>
          <option value="commercial">Commercial</option>
          <option value="residential">Residential</option>
          <option value="flat">Flat</option>
        </select>

        <label htmlFor="surveyNo">Survey No:</label>
        <input
          type="text"
          name="surveyNo"
          value={formData.surveyNo}
          onChange={handleChange}
          placeholder="Enter survey number"
          required
        />

        <label htmlFor="regNo">Registration No:</label>
        <input
          type="text"
          name="regNo"
          value={formData.regNo}
          onChange={handleChange}
          placeholder="Enter registration number"
          required
        />

        <label htmlFor="price">Expected Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter expected price"
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter a brief description"
          required
        ></textarea>

        <button type="submit" id="addButton">
          Add
        </button>
        <button type="reset" id="clearButton">
          Clear
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
