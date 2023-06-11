import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import useAuth from "../../../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const CheckOut = ({ classPrice, id }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [selectClass,setSelectClass]=useState({});
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
const [success,setSuccess]=useState(false)
useEffect(()=>{
  fetch(`http://localhost:5000/selectedClass/${id}`)
  .then(res=>res.json())
  .then(data=>{
    
    setSelectClass(data[0])
  })
},[id])
// console.log(selectClass);
  useEffect(() => {
    if (classPrice > 0) {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ classPrice: classPrice }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true);

    const { paymentIntent, error: err } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      }
    );

    if (err) {
      setCardError(err?.message);
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
 
      const payment = {
        date: new Date(),
        classId: id,
        classPrice,
        studentName: user?.displayName,
        studentEmail: user?.email,
        instructorEmail:selectClass?.instructorEmail,
        className:selectClass?.name,
        classImg:selectClass?.classImg,
        transactionId: paymentIntent.id,
        status: "paid",
      };

      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertResult.insertedId) {
            setSuccess(true)
            toast.success("Payement Successfull");
          }
          // console.log(data);
        });
    }
  };

  return (
    <>
      <form className="w-1/2 space-y-10 mx-auto" onSubmit={handleSubmit}>
        <CardElement
          className="mb-10"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary bg-blue-600 btn-sm mt-10 w-28 "
          type="submit"
          disabled={!stripe || !clientSecret || processing ||success}
        >
          {processing ? (
            <ImSpinner9 className="m-auto animate-spin" size={24}></ImSpinner9>
          ) : (
            "Pay Now"
          )}
        </button>
        <div className="text-center">
          {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
          {transactionId && (
            <p className="text-green-900 ml-8">
              Your transactionId: {transactionId}
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default CheckOut;

