import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

const Payment = () => {
 const {id}=useParams()
// console.log(id);
 const [singleClass,setSingleClass]=useState({});
 const [price,setPrice]=useState({})
 useEffect(()=>{
     fetch(`http://localhost:5000/pay/${id}`)
     .then((res) => res.json())
      .then((data) => {
        setSingleClass(data);
        setPrice(singleClass[0]?.price)
      })
 },[id])

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

    return (
        <div>
        <SectionTitle  header="Make Payment"></SectionTitle>
        
        <Elements stripe={stripePromise}>
            <CheckOut singleClass={singleClass} price={price}></CheckOut>
        </Elements>
    </div>
    );
};

export default Payment;