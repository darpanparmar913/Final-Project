import { collection, addDoc, getDocs, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../MyFireStore/MyFireStore";




export const productLive = (data) => {

    // console.log(data,'hhj');
    return {
        type: 'ADD_PRODUCT',
        payload: data
    }

}
export const getdata = (data) => {

    // console.log(data,'hhj');
    return {
        type: 'ALL_PRODUCT',
        payload: data
    }

}

export const singleProduct = (data) =>{
    return{
        type: 'SINGLE_PRODUCT',
        payload: data
    }
}

export const DeleteProduct = (id) =>{
    return{
        type: 'DELETE_PRODUCT',
        payload: id
    }
}

export const productLiveacync = (data) => {

    return async dispatch => {
        await addDoc(collection(db, "products"), data);

        console.log(data, skfijsiji);
        dispatch(productLive(data));
    }

}

export const getProductacync = () => {

    return async dispatch => {

        let Allproduct = [];

        let firestoreproduct = await getDocs(collection(db, "products"));
        firestoreproduct.forEach((doc) => {
            let d = { ...doc.data(), id: doc.id };
            Allproduct = [...Allproduct, d];

        });

        dispatch(getdata(Allproduct));

    }

}

export const ProductEditasync = (id) => {

    // console.log(id,"idddddddddd");

    return async dispatch => {

        let productdata = [];

        const docsnap = await getDoc(doc(db, "products", `${id}`));
        const d = {...docsnap.data(), id: id}
        
        // productdata = [...productdata, d]

        console.log(d, "jjjjjjjjjjjjjjjjjjjj");

        dispatch(singleProduct(d));
    }

}

export const updateProductasync = (data,id) => {

    // console.log(id,"idddddddddd");
    console.log("data",data);

    return async dispatch => {

        await updateDoc(doc(db, "products", `${id}`),data);

        // dispatch(getProductacync());
    }

}

export const ProductDeleteasync = (id) =>{

    return async dispatch =>{

        await deleteDoc(doc(db, "products", `${id}`));
        dispatch(DeleteProduct(id));

    }

}