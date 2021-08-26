import {axiosCient} from './axiosCient';
import axios from 'axios';

const CategoryAPI = {
    getAll(){
        const url = `/categories`;
        return axiosCient.get(url);
    },
    get(id){
        const url = `/category/${id}`;
        return axiosCient.get(url);
    },
    async add(category, token, id){
        return axios.post(`http://localhost:5000/api/category/create/${id}`, category,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => response.json)
        .catch(err => console.log(err))
    },
    async remove(id, token, idUser){
        return axios.delete(`http://localhost:5000/api/category/${id}/${idUser}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
        )        
    },
    async update(id,data, token, idUser){
        return axios.put(`http://localhost:5000/api/category/${id}/${idUser}`, data,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => response.json)
        .catch(err => console.log(err))
    }
}
export default CategoryAPI;