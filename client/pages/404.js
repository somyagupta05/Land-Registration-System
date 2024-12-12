import React, { useState, useEffect } from "react";
import Web3 from "web3";

// INTERNAL IMPORT
import { Header, Footer, Copyright } from "../PageComponents/Components";

const PageNotFound = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [userAccount, setUserAccount] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [transactionStatus, setTransactionStatus] = useState(""); // For tracking transaction status

  // Check if MetaMask is installed
  const checkMetaMask = () => {
    if (window.ethereum) {
      setWeb3(new Web3(window.ethereum)); // Initialize web3 with MetaMask provider
      return true;
    }
    return false;
  };

  // Connect to MetaMask
  const connectMetaMask = async () => {
    if (checkMetaMask()) {
      try {
        // Request account access if needed (this will trigger MetaMask to open)
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setUserAccount(accounts[0]); // Set the connected account
        setIsConnected(true); // Set connected status
        console.log("Connected to MetaMask:", accounts[0]);

        // You can also listen for account changes (in case the user switches accounts)
        window.ethereum.on("accountsChanged", (accounts) => {
          setUserAccount(accounts[0]);
        });

        // You can listen for network changes (in case the user switches network)
        window.ethereum.on("chainChanged", (chainId) => {
          console.log("Network changed to:", chainId);
        });
      } catch (error) {
        console.error("User denied MetaMask connection");
        alert("Please connect to MetaMask to continue.");
      }
    } else {
      alert("MetaMask is not installed. Please install it to proceed.");
    }
  };

  // Handle transaction (Example: Sending ether)
  const handleTransaction = async () => {
    if (!web3)
      return alert("Web3 is not available. Connect to MetaMask first.");
    if (!userAccount) return alert("Please connect to your MetaMask wallet.");

    try {
      const transactionParameters = {
        to: "0x11D09A6A83161A8bDdaE5ad78D4e0421Edf3B9E1", // Replace with the recipient address
        from: userAccount, // The sender address
        value: web3.utils.toHex(web3.utils.toWei("0.1", "ether")), // Transaction value (e.g., 0.1 Ether)
      };

      // Use ethereum.request to send the transaction through MetaMask
      const result = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });

      console.log("Transaction Result:", result);
      setTransactionStatus("Transaction Successful!"); // Set the status to success
    } catch (error) {
      console.error("Transaction failed", error);
      setTransactionStatus("Transaction Failed. Please try again."); // Set the status to failed
    }
  };

  return (
    <div className="template-color-1 nft-body-connect">
      <Header />
      <div className="rn-not-found-area rn-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-not-found-wrapper">
                {/* Terms and Conditions Section */}
                <div className="terms-conditions">
                  <h1>TERMS AND CONDITIONS</h1>
                  <p>
                    When buying property through [Your Website Name], users must
                    carefully read and agree to the Terms and Conditions set
                    forth to ensure a secure and informed transaction process.
                    The Website serves as a platform to connect buyers and
                    sellers, providing access to detailed property listings and
                    relevant information. Users are responsible for conducting
                    due diligence, including inspections and legal
                    verifications, prior to making a purchase. While the Website
                    strives to maintain accurate and current property data, it
                    does not guarantee sale completion or endorse third-party
                    services. Buyers must understand their responsibilities and
                    accept the outlined payment terms, fees, and potential risks
                    associated with property transactions.
                  </p>
                </div>

                {/* Checkbox Section */}
                <form>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      className="form-check-input"
                      required
                    />
                    <label htmlFor="terms" className="form-check-label">
                      I agree to the Terms and Conditions
                    </label>
                  </div>

                  {/* MetaMask Connect Button */}
                  {!isConnected ? (
                    <button
                      type="button"
                      className="btn btn-primary btn-large"
                      onClick={connectMetaMask}
                    >
                      Connect MetaMask
                    </button>
                  ) : (
                    <>
                      <div>
                        <p>Connected to: {userAccount}</p>
                        <button
                          type="button"
                          className="btn btn-success btn-large"
                          onClick={handleTransaction}
                        >
                          Proceed with Transaction
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Status Modal */}
      {transactionStatus && (
        <div
          className="modal fade show"
          id="transactionModal"
          tabIndex="-1"
          aria-labelledby="transactionModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="transactionModalLabel">
                  Transaction Status
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>{transactionStatus}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <Copyright />
    </div>
  );
};

export default PageNotFound;
