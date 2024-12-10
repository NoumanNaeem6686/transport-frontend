"use client";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export function CheckOut({ totalCost }: any) {
    const service = "testing"
    const [loading, setLoading] = useState(false)

    const handlePayment = async () => {
        setLoading(true)
        try {
            const stripe = await stripePromise;

            if (!stripe) {
                throw new Error("Stripe.js not loaded");
            }

            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/create-checkout-session`, {
                serviceName: service,
                price: totalCost,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const session = response.data;
            console.log("🚀 ~ handlePayment ~ session:", response)

            if (session.id) {
                await stripe.redirectToCheckout({ sessionId: session.id });
            } else {
                console.error("Failed to create checkout session:", session);
            }
        } catch (error) {
            console.error("Payment error:", error);
        } finally {
            setLoading(false)
        }
    };

    return (


        <div className="flex items-center justify-end w-full">
            <button
                onClick={handlePayment}
                className="gap-2.5 self-stretch hover:scale-105 transition-all duration-250 px-9 py-3.5 my-auto sm:w-48 text-white rounded-full bg-sky-800 border-solid mt-6 max-md:px-5">

                {
                    loading ? "Booking..." : " Pay with Klarna"
                }

            </button>
        </div>

    );
}
