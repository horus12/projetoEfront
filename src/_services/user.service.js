import {authHeader, getRole} from '../_helpers';
import {urlCart} from "./cart.service";
export const url = "http://localhost:8081/";
export const userService = {
    login,
    logout,
    register,
    createProduct
};


function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({cpf: username, senha: password})
    };

    return fetch(`${url}/Login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('user1', JSON.stringify(user));
            console.log(user)
            return user;
        });
}

function logout() {
    localStorage.removeItem('user1');
}




function register(user,type) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    if(type === true){
        return fetch(`${url}/provider`, requestOptions).then(handleResponse);
    }else{
        return fetch(`${url}/user`, requestOptions).then(handleResponse);
    }

}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function createProduct(product) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };
    let v = JSON.parse(getRole())
    console.log(v.role)

    return fetch(`${urlCart}/catalog/${v.id}`, requestOptions)
        .then(handleResponse)
        .then(user => {

            return user;
        });
}