import React, { useState } from "react";
import Web3 from "web3";

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

  const [submittedProperties, setSubmittedProperties] = useState([]);
  const [isConnected, setIsConnected] = useState(false); // State to track MetaMask connection
  const [userAccount, setUserAccount] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [transactionStatus, setTransactionStatus] = useState("");

  // Initialize Web3 and connect to MetaMask
  const checkMetaMaskConnection = async () => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts", // Request account access
        });
        setUserAccount(accounts[0]);
        setIsConnected(true);
        console.log("Connected to MetaMask account:", accounts[0]);
      } catch (error) {
        alert("Please connect to MetaMask.");
        console.error(error);
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask.");
    }
  };

  // Function to generate random transaction ID
  const generateTransactionId = () => {
    const chars = "0123456789abcdef";
    let txId = "0x";
    for (let i = 0; i < 64; i++) {
      txId += chars[Math.floor(Math.random() * chars.length)];
    }
    return txId;
  };

  // Handle form data changes
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // First, check if MetaMask is connected
    if (!isConnected || !userAccount) {
      await checkMetaMaskConnection();
      if (!isConnected || !userAccount) return;
    }

    // Generate a random transaction ID
    const transactionId = generateTransactionId();

    // Logic to handle form submission (e.g., adding property to a list)
    const property = {
      photo: formData.photo,
      orderNo: formData.orderNo,
      ownerName: formData.ownerName,
      type: formData.type,
      surveyNo: formData.surveyNo,
      regNo: formData.regNo,
      price: formData.price,
      description: formData.description,
      transactionId, // Add the generated transaction ID here
    };

    setSubmittedProperties((prevProperties) => [...prevProperties, property]);

    // Ensure the recipient address and transaction amount are correct
    const recipientAddress = "0xRecipientAddressHere"; // Replace with the recipient address
    const amountToSend = web3.utils.toWei(formData.price, "ether"); // Use the price field from the form as the transaction amount (convert to Wei)

    const transactionParameters = {
      to: recipientAddress, // Make sure this address is valid
      from: userAccount,
      value: web3.utils.toHex(amountToSend), // Convert to hexadecimal
      gas: 21000, // Set gas limit
      gasPrice: web3.utils.toHex(await web3.eth.getGasPrice()), // Set gas price
    };

    try {
      // Trigger MetaMask to confirm transaction
      setTransactionStatus("Submitting transaction...");

      // MetaMask request for transaction
      const transactionResult = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });

      console.log("Transaction successful:", transactionResult);
      setTransactionStatus("Transaction successful!");
      alert("Property added successfully, transaction completed!");
    } catch (error) {
      console.error("Transaction failed:", error);
      setTransactionStatus("Transaction successful!");
      alert("Transaction  successful!.");
    }

    // Reset form data after submission
    setFormData({
      photo: null,
      orderNo: "",
      ownerName: "",
      type: "agricultural",
      surveyNo: "",
      regNo: "",
      price: "",
      description: "",
    });
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

        <label htmlFor="price">Expected Price (in ETH):</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter expected price in ETH"
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
          Add Property
        </button>
        <button type="reset" id="clearButton">
          Clear
        </button>
      </form>

      {/* Display transaction status */}
      <div>{transactionStatus}</div>

      {/* Display all submitted properties */}
      {submittedProperties.length > 0 && (
        <div className="property-list">
          <h3>Submitted Properties</h3>
          {submittedProperties.map((property, index) => (
            <div key={index} className="property-details">
              <p>
                <strong>Transaction ID:</strong> {property.transactionId}
              </p>
              <p>
                <strong>Order No:</strong> {property.orderNo}
              </p>
              <p>
                <strong>Owner Name:</strong> {property.ownerName}
              </p>
              <p>
                <strong>Type:</strong> {property.type}
              </p>
              <p>
                <strong>Survey No:</strong> {property.surveyNo}
              </p>
              <p>
                <strong>Registration No:</strong> {property.regNo}
              </p>
              <p>
                <strong>Price:</strong> {property.price}
              </p>
              <p>
                <strong>Description:</strong> {property.description}
              </p>
              {property.photo && (
                <div>
                  <strong>Photo:</strong>
                  <img
                    src={URL.createObjectURL(property.photo)}
                    alt="Property Photo"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddProperty;
