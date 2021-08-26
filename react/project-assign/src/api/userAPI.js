import {axiosCient} from './axiosCient';

const userAPI = {
    add(user){
        const url = `/signup`;
        return axiosCient.post(url,user);
    }
    
}
export default userAPI;