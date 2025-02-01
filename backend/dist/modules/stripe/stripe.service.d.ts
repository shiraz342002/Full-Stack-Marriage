import Stripe from 'stripe';
export declare class StripeService {
    private stripe;
    constructor();
    createPaymentIntent(amount: number, currency: string): Promise<Stripe.Response<Stripe.PaymentIntent>>;
}
