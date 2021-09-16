import React from 'react'
import StripeCheckout from "react-stripe-checkout"
import Logo from "../../assets/logo.png";
function StripeButtonComponent({price}) {
    const stripePrice =  price *100
    const PKey ="pk_test_51JaIDMITQUdXkSLCfl8oufnEpD1NFEuXeheKliXMD0LZN1blF2DI1XSq1xlcoDj2KYUM7vuOtoAiFNn1fhRYa2E700VKleqwRj"

    const onToken =(token)=>{
            console.log({token});
    }
    return (
        <div>
            <StripeCheckout
            label="Pay Now"
            currency="GHS"
            name ="WAB E-Com"
            billingAddress
            shippingAddress
            image={Logo}
            description={`Total GHS ${price}`}
            amount={stripePrice}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={PKey}
            />
        </div>
    )
}

export default StripeButtonComponent
