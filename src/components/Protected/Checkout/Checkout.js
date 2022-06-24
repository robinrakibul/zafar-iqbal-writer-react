import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const Checkout = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`https://independent-service-server.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: product.title,
            serviceId: product._id,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        fetch(`https://independent-service-server.herokuapp.com/order`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {
                    alert('Order successfully added')
                }
                else (
                    alert('Order failed, try again later')
                )
            })
    }
    return (
        <div>
            <h1 className='text-center text-3xl mt-5 font-bold'>Checkout</h1>
            <div className='text-center'><small className='text-red-500'>We will contact you for the payment process manually</small></div>
            <div className='flex flex-col text-center mt-5 mb-5'>
                <h1>Product ID: {id}</h1>
                <div className='w-50 mx-auto rounded'>
                    <h2 className='container mt-2 mb-2'>Please Order: {product.name}</h2>
                    <form onSubmit={handlePlaceOrder}>
                        <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='Your Name' required readOnly disabled />
                        <br />
                        <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='Your Email' required />
                        <br />
                        <input className='w-100 mb-2' type="text" value={product.title} name="service" placeholder='Service' required readOnly />
                        <br />
                        <input className='w-100 mb-2' type="text" value={product.price} name="service" placeholder='Price' required readOnly />
                        <br />
                        <input className='w-100 mb-2' type="text" name="address" placeholder='Home Address' autoComplete='off' required />
                        <br />
                        <input className='w-100 mb-2' type="number" name="phone" placeholder='Phone Number' required />
                        <br />

                        <input className='bg-green-400 text-white px-5 py-2 rounded hover:bg-blue-800 duration-500' type="submit" value="Place Order" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;