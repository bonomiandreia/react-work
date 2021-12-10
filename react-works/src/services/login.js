import api from '../api';


const loginService = (login) => {
    return api.post('users/auth', login)
}


export default loginService;