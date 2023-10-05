import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductEditasync, updateProductasync } from '../Services/ProductAction/ProductAction';
import { useNavigate } from 'react-router';


function ProductEdit() {

    const singleEditProduct = useSelector(state => state.productReducer.product);


    const [inputValue, setInputValue] = useState(singleEditProduct);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProductasync(inputValue, inputValue.id));
        console.log(inputValue.id, "ihdd");
        setInputValue({
            product: '',
            category: '',
            qty: '',
            price: '',
            image: '',
            describtion: ''
        })
        navigate('/view');
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputValue({ ...inputValue, [name]: value })
    }

    return (
        <>
            <div className="container mt-5">
                <h1>Edit Product Detailes</h1>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3 col-5">
                        <label class="form-label">Add Product</label>
                        <input type="text" class="form-control" placeholder='Enter Product' name='product' value={inputValue.product} onChange={handleChange} />
                    </div>
                    <div class="mb-3 col-5">
                        <label class="form-label">Category</label>
                        <input type="text" class="form-control" placeholder='Enter Product Category' value={inputValue.category} name='category' onChange={handleChange} />
                    </div>
                    <div class="mb-3 col-5">
                        <label class="form-label">QTY</label>
                        <input type="number" class="form-control" placeholder='Give qty' name='qty' value={inputValue.rate} onChange={handleChange} />
                    </div>
                    <div class="mb-3 col-5">
                        <label class="form-label">Price</label>
                        <input type="number" class="form-control" placeholder='Enter Price' name='price' value={inputValue.price} onChange={handleChange} />
                    </div>
                    <div class="mb-3 col-5">
                        <label class="form-label">Product Image</label>
                        <input type="text" class="form-control" placeholder='Enter Image' value={inputValue.image} name='image' onChange={handleChange} />
                    </div>
                    <div class="mb-3 col-5">
                        <label class="form-label">Describtion</label>
                        <input type="text" class="form-control" placeholder='Optional' value={inputValue.describtion} name='describtion' onChange={handleChange} />
                    </div>

                    <button type="submit" class="btn btn-primary">Live</button>
                </form>
            </div>

        </>
    )
}

export default ProductEdit