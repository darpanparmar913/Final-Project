import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductDeleteasync, ProductEditasync, getProductacync } from '../Services/ProductAction/ProductAction';
import './productTable.css'
import { useNavigate } from 'react-router';

function ProductTable() {

    const allAdminData = useSelector(state => state.productReducer.products);

    console.log(allAdminData, "qtry");

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const getData = () => {
        dispatch(getProductacync());
    }

    useEffect(() => {
        getData();
    },[])

    const handleEdit = async (id) => {

        await dispatch(ProductEditasync(id))
        navigate(`/editpr/:${id}`);

    }

    const handleDelete = (id) => {

        dispatch(ProductDeleteasync(id));

    }


    return (


        <>

            <div class="container">
                <div class="table-wrapper">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Describtion</th>
                                <th>QTY</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allAdminData.map((val) => {

                                    return (
                                        <tr>
                                            <td>
                                                <div style={{ width: "100px", height: "100px" }}>
                                                    <img src={val.image} alt="" srcset="" style={{width: "100%", height: "100%", objectFit: "contain"}}/>

                                                </div>
                                            </td>
                                            <td>{val.product}</td>
                                            <td>{val.category}</td>
                                            <td>{val.describtion}</td>
                                            <td>{val.qty}</td>
                                            <td>{val.price}</td>
                                            <td>
                                                <button className="edit" type='button' onClick={() => handleEdit(val.id)}><i class="fa-solid fa-pen" ></i></button>
                                                <button className="delete" type='submit' onClick={() => handleDelete(val.id)}><i class="fa-regular fa-trash-can"></i></button>
                                            </td>
                                        </tr>
                                    )

                                })
                            }


                        </tbody>
                    </table>

                </div>
            </div>


        </>

    )
}

export default ProductTable