import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductacync, productLiveacync } from '../Services/ProductAction/ProductAction';
import { useNavigate } from 'react-router';

function ProductLive() {

    const navigate = useNavigate()

    const [inputValue, setInputValue] = useState({
        product: '',
        category: '',
        qty: '',
        price: '',
        image: '',
        describtion: ''
    })

    
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(productLiveacync(inputValue));
        console.log(productLiveacync, "qty input");
        setInputValue({
            product: '',
            category: '',
            qty: '',
            price: '',
            image: '',
            describtion: ''
        })
        navigate('/view')
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputValue({ ...inputValue, [name]: value })
    }

    const getData = () =>{
        dispatch(getProductacync())
    }

    useEffect(() =>{

        getData();

    },[])
    return (
        <>
            <div className="container mt-5">

                <form onSubmit={handleSubmit}>
                    <div class="mb-3 col-5">
                        <label class="form-label">Add Product</label>
                        <input type="text" class="form-control" placeholder='Enter Product' name='product' onChange={handleChange} />
                    </div>
                    <div class="mb-3 col-5">
                        <label class="form-label">Category</label>
                        <input type="text" class="form-control" placeholder='Enter Product Category' name='category' onChange={handleChange} />
                    </div>
                    <div class="mb-3 col-5">
                        <label class="form-label">QTY</label>
                        <input type="qty" class="form-control" placeholder='Give qty' name='qty' onChange={handleChange} />
                    </div>
                    <div class="mb-3 col-5">
                        <label class="form-label">Price</label>
                        <input type="price" class="form-control" placeholder='Enter Price' name='price' onChange={handleChange} />
                    </div>
                    <div class="mb-3 col-5">
                        <label class="form-label">Product Image</label>
                        <input type="text" class="form-control" placeholder='Enter Image' value={inputValue.image} name='image' onChange={handleChange} />
                    </div>
                    <div class="mb-3 col-5">
                        <label class="form-label">Describtion</label>
                        <input type="text" class="form-control" placeholder='Optional' name='describtion' onChange={handleChange} />
                    </div>

                    <button type="submit" class="btn btn-success">Live</button>
                </form>
            </div>

        </>
    )
}

export default ProductLive