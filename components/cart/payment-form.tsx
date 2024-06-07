'use client'

import { useCartStore } from "@/lib/client-store";
import { AddressElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { Button } from "../ui/button";
import { useState } from "react";
import {createPaymentIntent} from '@/server/actions/create-payment-intent'

export default function PaymentForm({totalPrice}: {totalPrice:number}){
    const stripe = useStripe();
    const elements = useElements();
    const { cart, setCheckoutProgress} = useCartStore()
    const [isLoading, setIsLoading] = useState(false);
    const [error, setErrorMessage] = useState("")

    const handleSubmit = async(e: React.FormEvent) =>{
        e.preventDefault();
        setIsLoading(true);
        if(!stripe || !elements){
            setIsLoading(false);
            return;
        }
        const {error: submitError} = await elements.submit();
        if(submitError){
            setErrorMessage(submitError.message!)
            setIsLoading(false);
        }
        const {data} = await createPaymentIntent({
            amount: totalPrice * 100,
            currency:'usd',
            cart: cart.map((item) => ({
                quantity: item.variant.quantity,
                productID: item.id,
                title: item.name,
                price: item.price,
                image: item.image
            }))
        })
        if(data?.error){
            setErrorMessage(data.error)
            setIsLoading(false)
            return
        }
        if(data?.success){
            const {error} = await stripe.confirmPayment({
                elements,
                clientSecret: data.success.clientSecretID!,
                redirect: 'if_required',
                confirmParams: {
                    return_url: "http://localhost:3000/success",
                    receipt_email: data.success.user as string
                }
            })
            if(error){
                setErrorMessage(error.message!)
                setIsLoading(false)
                return
            }else{
                setIsLoading(false);
                console.log('Save the order')
            }
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <AddressElement options={{mode:'shipping'}} />
            <Button disabled={!stripe || !elements}>
                <span>Pay now</span>
            </Button>
        </form>
    )
}