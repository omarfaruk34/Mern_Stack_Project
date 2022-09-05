import React from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import "./Payment.css";

export default function Payment() {
  const { orderId } = useParams();
  const [payment, setPayment] = React.useState([]);
  const [matchOrder, setMatchOrder] = React.useState([]);
  React.useEffect(() => {
    fetch(`http://localhost:8000/orders`)
      .then((res) => res.json())
      .then((data) => {
        setMatchOrder(data.find((py) => py._id === orderId));
      });
    console.log(matchOrder);
    // setMatchOrder(payment.filter(py => console.log(py)))
  }, []);
  const stripePromise = loadStripe(
    "pk_test_51LU4MfI6LK4d8noQhtbMPAY7mJmaeuLWHHtmyhlYzqWe3Bo3lFEoOTuTGYHFakq37TCGpt8gMSEv413C52mxV6Jt00dxjuvR5r"
  );
  return (
    <div className="container">
      <div className="row ms-3 ">
        {/* <div className="col-lg-7 pb-5 pe-lg-5">
           <div className="row">
            <div className="col-12 p-5">
              <img
                src="https://www.freepnglogos.com/uploads/honda-car-png/honda-car-upcoming-new-honda-cars-india-new-honda-3.png"
                alt=""
              />
            </div>
            <div className="row m-0 bg-light">
              <div className="col-md-4 col-6 ps-30 pe-0 my-4">
                <p className="text-muted">Mileage</p>
                <p className="h5">
                  25000<span class="ps-1">Km</span>
                </p>
              </div>
              <div className="col-md-4 col-6  ps-30 my-4">
                <p className="text-muted">Transmission</p>
                <p className="h5 m-0">Manual</p>
              </div>
              <div className="col-md-4 col-6 ps-30 my-4">
                <p className="text-muted">Drive unit</p>
                <p className="h5 m-0">Front</p>
              </div>
              <div className="col-md-4 col-6 ps-30 my-4">
                <p className="text-muted">Body</p>
                <p className="h5 m-0">Coupe</p>
              </div>
              <div className="col-md-4 col-6 ps-30 my-4">
                <p className="text-muted">Color</p>
                <p className="h5 m-0">White</p>
              </div>
              <div className="col-md-4 col-6 ps-30 my-4">
                <p className="text-muted">Daily UI</p>
                <p className="h5 m-0">#002</p>
              </div>
            </div>
          </div> 
        </div> */}
        <div className="col-lg-8  p-0 ps-lg-4">
          <div className="row m-0">
            <div className="col-12 px-4">
              <div className="d-flex align-items-end mt-4 mb-2">
                <p className="font4 m-0">
                  <span className="pe-1">ZAZ</span>
                  <span className="pe-1">966</span>
                  <span className="pe-1">B</span>
                </p>
                <p className="ps-3 textmuted">1L</p>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <p className="textmuted">Qty</p>
                <p className="fs-14 fw-bold">1</p>
              </div>
              {/* <div className="d-flex justify-content-between mb-2">
                <p className="textmuted">Subtotal</p>
                <p className="fs-14 fw-bold">
                  <span className="fas fa-dollar-sign pe-1"></span>1,450
                </p>
              </div> */}
              <div className="d-flex justify-content-between mb-2">
                <p className="textmuted">Shipping</p>
                <p className="fs-14 fw-bold">Free</p>
              </div>
              {/* <div className="d-flex justify-content-between mb-2">
                <p className="textmuted">Promo code</p>
                <p className="fs-14 fw-bold">
                  -<span className="fas fa-dollar-sign px-1"></span>100
                </p>
              </div> */}
              <div className="d-flex justify-content-between mb-3">
                <p className="textmuted fw-bold">Total</p>
                <div className="d-flex align-text-top ">
                  <span className="fas fa-dollar-sign mt-1 pe-1 fs-14 "></span>
                  <span className="h4">1,350</span>
                </div>
              </div>
            </div>
            <div className="col-12 px-0">
              <div className="row bg-light m-0">
                <div className="col-12 px-4 my-4">
                  <p className="fw-bold">Payment detail</p>
                </div>
                <div className="col-12 px-4">
                  <div className="d-flex  mb-4">
                    <span className="">
                      <p className="text-muted">Card number</p>
                      <input
                        className="form-control1"
                        type="text"
                        value="4485 6888 2359 1498"
                        placeholder="1234 5678 9012 3456"
                      />
                    </span>
                    <div className=" w-100 d-flex flex-column align-items-end">
                      <p className="text-muted">Expires</p>
                      <input
                        className="form-control2"
                        type="text"
                        value="01/2020"
                        placeholder="MM/YYYY"
                      />
                    </div>
                  </div>
                  <div className="d-flex mb-5">
                    <span className="me-5">
                      <p className="text-muted">Cardholder name</p>
                      <input
                        className="form-control1"
                        type="text"
                        value="David J.Frias"
                        placeholder="Name"
                      />
                    </span>
                    <div className="w-100 d-flex flex-column align-items-end">
                      <p className="text-muted">CVC</p>
                      <input
                        className="form-control3"
                        type="text"
                        value="630"
                        placeholder="XXX"
                      />
                    </div>


                  </div>
                </div>
              </div>
              <div className="row m-0">
                <div className="col-12  mb-4 p-0">
                  {/* <div className="btn btn-primary">
                    Purchase<span class="fas fa-arrow-right ps-2"></span>
                  </div> */}
                  <Elements stripe={stripePromise}>
                    <CheckoutForm payment={matchOrder} />
                  </Elements>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* {matchOrder?.price && ( */}
      {/* <Elements stripe={stripePromise}>
        <CheckoutForm payment={matchOrder} />
      </Elements> */}
      {/* )} */}
    </div>
  );
}
