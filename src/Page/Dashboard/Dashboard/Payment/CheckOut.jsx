import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const CheckOut = ({singleClass,price}) => {
    // console.log(singleClass);
const stripe = useStripe();
const elements = useElements();
const { user } = useAuth();
const [axiosSecure]=useAxiosSecure();
const [clientSecret, setClientSecret] = useState('');
const [cardError, setCardError] = useState('');
const [processing, setProcessing] = useState(false);
const [transactionId, setTransactionId] = useState('');

const id=(singleClass[0]?._id);

useEffect(() => {
    if (price > 0) {
        axios.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
    }
}, [price])

const handleSubmit=async(event)=>{
    event.preventDefault();

    if (!stripe || !elements) {
        return
    }

    const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error)
            setCardError(error.message);
            
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }
        // setProcessing(true)

        // const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        //     clientSecret,
        //     {
        //         payment_method: {
        //             card: card,
        //             billing_details: {
        //                 email: user?.email || 'unknown',
        //                 name: user?.displayName || 'anonymous'
        //             },
        //         },
        //     },
        // );
        // if (confirmError) {
        //     console.log(confirmError);
           
        // }
        // console.log('payment intent', paymentIntent)
        // setProcessing(false)

        // if (paymentIntent.status === 'succeeded'){
        //     setTransactionId(paymentIntent.id);
        //     // save payment information to the server
        //     const payment = {
        //         email: user?.email,
        //         transactionId: paymentIntent.id,
        //         price,
        //         date: new Date(),
        //        id:id,
        //         status: 'service pending',
        //        className:(singleClass[0].name)
        //     }
        //        axiosSecure.post('/payments', payment)
        //        .then(res => {
        //         console.log(res.data);
        //         if (res.data.result.insertedId) {
        //             // display confirm
        //             toast.success('Payment Success')
        //         }
        //     })
        // }


}


    return (
        <>
        <form className="w-2/3 m-8" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={processing}>
                PayMent
            </button>
        </form>
        {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
    </>
    );
};

export default CheckOut;
// !stripe || !clientSecret || 