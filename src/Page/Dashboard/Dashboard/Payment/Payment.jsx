
import {  useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
const {id,price}=useParams();
const classPrice =parseFloat(price);
    return (
        <div>
        <SectionTitle  header="Make Payment"></SectionTitle>
        <Elements stripe={stripePromise}>
            <CheckOut classPrice={classPrice} id={id}></CheckOut>
        </Elements>
    </div>
    );
};

export default Payment;