import React, { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

// INTERNAL IMPORTS
import { Loader } from "../Components";
import { CreateThree } from ".";
import { useStateContext } from "../../context";

const categories = ["Agricultural", "Commercial", "Residential", "Flat"];

const CreateTwo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]); // Track added properties
  const [file, setFile] = useState(null);
  const [displayImg, setDisplayImg] = useState(null);
  const [fileName, setFileName] = useState("Upload Image");

  const { currentAccount, createPropertyFunction } = useStateContext();

  const [form, setForm] = useState({
    propertyTitle: "",
    description: "",
    category: "",
    price: "",
    images: "",
    propertyAddress: "",
  });

  const handleFormFieldChange = (fileName, e) => {
    setForm({ ...form, [fileName]: e.target.value });
  };

  // Handle image upload to Pinata
  const uploadToPinata = async () => {
    setFileName("Image Uploading...");
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            Authorization: `Bearer ${process.env.PINATA_API_KEY}`,
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

        console.log("Image uploaded to Pinata: ", ImgHash);
        setForm({ ...form, images: ImgHash });
        setFileName("Image Uploaded");
      } catch (error) {
        alert("Unable to upload image to Pinata");
      }
    }
  };

  const retrieveFile = (event) => {
    const data = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);

    reader.onloadend = () => {
      setFile(event.target.files[0]);
      if (event.target.files && event.target.files[0]) {
        setDisplayImg(URL.createObjectURL(event.target.files[0]));
      }
    };
    event.preventDefault();
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const {
      propertyTitle,
      description,
      category,
      price,
      images,
      propertyAddress,
    } = form;

    if (images || propertyTitle || price || category || description) {
      await createPropertyFunction({
        ...form,
        price: ethers?.utils?.parseUnits(form?.price, 18),
      });

      // Add the newly created property to the list
      setProperties([
        ...properties,
        {
          ...form,
          price: parseFloat(form.price),
          images: displayImg || images,
        },
      ]);

      setIsLoading(false);
    } else {
      console.log("Provide all details.");
    }
  };

  return (
    <>
      <div className="creat-collection-area pt--80">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
              <div className="collection-single-wized banner">
                <label className="title required">Property image</label>
                <div className="create-collection-input logo-image">
                  <div className="logo-c-image logo">
                    <img
                      id="rbtinput1"
                      src={displayImg || "/profile/profile-01.jpg"}
                      alt="Profile-NFT"
                    />
                    <label htmlFor="fatima" title="No File Chosen">
                      <span className="text-center color-white">
                        <i className="feather-edit"></i>
                      </span>
                    </label>
                  </div>
                  <div className="button-area">
                    <div className="brows-file-wrapper">
                      <input
                        name="fatima"
                        id="fatima"
                        type="file"
                        onChange={retrieveFile}
                      />
                    </div>
                  </div>
                </div>
                {file && (
                  <a
                    onClick={() => uploadToPinata()}
                    className="btn btn-primary-alta btn-large"
                  >
                    {fileName}
                  </a>
                )}
              </div>
            </div>

            <div className="col-lg-7">
              <div className="create-collection-form-wrapper">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="collection-single-wized">
                      <label htmlFor="name" className="title required">
                        Property Title
                      </label>
                      <div className="create-collection-input">
                        <input
                          id="name"
                          className="name"
                          type="text"
                          required
                          placeholder="propertyTitle"
                          onChange={(e) =>
                            handleFormFieldChange("propertyTitle", e)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="collection-single-wized">
                      <label className="title">Category</label>
                      <div className="create-collection-input">
                        <div className="nice-select mb--30" tabIndex="0">
                          <span className="current">Add Category</span>
                          <ul className="list">
                            {categories.map((el, i) => (
                              <li
                                key={i + 1}
                                onClick={() =>
                                  setForm({ ...form, category: el })
                                }
                                className="option"
                              >
                                {el}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="collection-single-wized">
                      <label htmlFor="description" className="title">
                        Description
                      </label>
                      <div className="create-collection-input">
                        <textarea
                          id="description"
                          className="text-area"
                          placeholder="description"
                          onChange={(e) =>
                            handleFormFieldChange("description", e)
                          }
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="collection-single-wized">
                      <label htmlFor="earning" className="title">
                        Price
                      </label>
                      <div className="create-collection-input">
                        <input
                          id="earning"
                          className="url"
                          type="number"
                          placeholder="price"
                          onChange={(e) => handleFormFieldChange("price", e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="collection-single-wized">
                      <label htmlFor="wallet" className="title">
                        Property Address
                      </label>
                      <div className="create-collection-input">
                        <input
                          id="wallet"
                          className="url"
                          type="text"
                          placeholder="propertyAddress"
                          onChange={(e) =>
                            handleFormFieldChange("propertyAddress", e)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="button-wrapper">
                      <a
                        onClick={() => handleSubmit()}
                        className="btn btn-primary btn-large"
                      >
                        {isLoading ? <Loader /> : "Create"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Display Property List */}
          <div className="col-lg-12">
            <h3>Property List</h3>
            <div className="property-list">
              {properties.map((property, index) => (
                <div key={index} className="property-item">
                  <img src={property.images || displayImg} alt="Property" />
                  <p>
                    <strong>Title:</strong> {property.propertyTitle}
                  </p>
                  <p>
                    <strong>Price:</strong> {property.price}
                  </p>
                  <p>
                    <strong>Category:</strong> {property.category}
                  </p>
                  <p>
                    <strong>Description:</strong> {property.description}
                  </p>
                  <button
                    className="deleteButton"
                    onClick={() => {
                      const updatedProperties = properties.filter(
                        (_, i) => i !== index
                      );
                      setProperties(updatedProperties);
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CreateThree data={form} />
    </>
  );
};

export default CreateTwo;
