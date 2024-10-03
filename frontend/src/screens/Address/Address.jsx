import React, { useState } from "react";
import { addAddress } from "../../services/AddressService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg from "../../productImages/addProduct.jpg";
// import SideBar from "../../components/SideBar";
import BuyerSidebar from "../../components/BuyerSidebar";

export default function Address() {
  // const [userId, setUserId] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(null);

  const userId = sessionStorage.getItem("userId");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addressDTO = {
        userId,
        addressLine1,
        addressLine2,
        city,
        state,
        zipCode,
        country,
      };
      await addAddress(addressDTO);
      toast.success("Address added successfully!");
    } catch (error) {
      setError("Failed to add address.");
      toast.error("Failed to add address.");
    }
  };

  const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const countries = ["India"];

  return (
    <div
    className="container-fluid custom-container"
    style={{
      backgroundImage: `url(${bg})`,
    }}
  >
      <BuyerSidebar>
        <h2 className="mb-1">Add Address</h2>
        <hr />
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="userId"
                  placeholder="Enter User ID"
                  value={userId}
                  // onChange={(e) => setUserId(e.target.value)}
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "lightgray",
                  }}
                  hidden
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="addressLine1">Address Line 1</label>
                <input
                  type="text"
                  className="form-control"
                  id="addressLine1"
                  placeholder="Enter Address Line 1"
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "lightgray",
                  }}
                  required
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="addressLine2">Address Line 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="addressLine2"
                  placeholder="Enter Address Line 2 (optional)"
                  value={addressLine2}
                  onChange={(e) => setAddressLine2(e.target.value)}
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "lightgray",
                  }}
                />
              </div>

              <div className="d-flex justify-content-between mt-3">
                <div className="form-group" style={{ width: "45%" }}>
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "lightgray",
                    }}
                    required
                  />
                </div>
                <div className="form-group" style={{ width: "45%" }}>
                  <label htmlFor="zipCode">Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipCode"
                    placeholder="Enter Zip Code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "lightgray",
                    }}
                    required
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div className="mb-3 text-left" style={{ width: "45%" }}>
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select
                    id="state"
                    className="form-select"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "lightgray",
                    }}
                    required
                  >
                    <option value="">Select State</option>
                    {statesOfIndia.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3" style={{ width: "45%" }}>
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select
                    id="country"
                    className="form-select"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "lightgray",
                    }}
                    required
                  >
                    <option value="">Select Country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <br />
                <button
                  type="submit"
                  className="button-blue mt-5"
                  style={{ borderRadius: "100px",width:'350px' }}
                >
                  Add Address
                </button>
                {error && <div className="alert alert-danger">{error}</div>}
              </div>
            </form>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 d-grid">
            <Link
              to="/cart"
              className="button-gold mt-4">
              View Shopping Cart
            </Link>
            <br />
            <Link
              to="/home"
              className="btn btn-danger mt-1"
              style={{ borderRadius: "100px" }}
            >
              Cancel
            </Link>
          </div>
          <div className="col-4"></div>
        </div>
      </BuyerSidebar>
    </div>
  );
}
