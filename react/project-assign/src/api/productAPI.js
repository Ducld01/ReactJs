import {axiosCient,axiosCient2} from './axiosCient';
import axios from 'axios'

const ProductAPI = {
    getAll(){
        const url = `/products`;
        return axiosCient.get(url);
    },
    get(id){
        const url = `/product/${id}`;
        return axiosCient.get(url);
    },
    async add(product, token, id){
        return axios.post(`http://localhost:5000/api/product/create/${id}`, product,
        {
            headers: {
                'ContentType': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => response.json)
        .catch(err => console.log(err))
    },
    async  remove(id , token, userid){
        return axios.delete(`http://localhost:5000/api/product/${id}/${userid}`,
        {
            headers: {
                'ContentType': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => response.json)
        .catch(err => console.log(err))
    },
    async update(id, product, token, iduser){
        return axios.put(`http://localhost:5000/api/product/${id}/${iduser}`, product,
        {
            headers: {
                'ContentType': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => response.json)
        .catch(err => console.log(err))
    },
    
}
export default ProductAPI;