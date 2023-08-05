import axios from 'axios';
import axiosInstance from './auth';

export const addUser = async (user) => {
    let resp = await axiosInstance.post(`/register`, user);
    // if (resp.status == 201) {
    //     resp = 201
    //     let usr = JSON.stringify(user);
    //     localStorage.setItem("userdetails", usr)
    // }
    return resp
};

export const LoginUser = async (user) => {

    const response = await axiosInstance.post('/login', user);
    if (response?.data.resp == true) {
        let obj = {
            id: `${String(response?.data.usr._id)}`,
            fname: `${String(response?.data.usr.fname)}`,
            lname: `${String(response?.data.usr.lname)}`,
            email: `${String(response?.data.usr.email)}`,
            token: `${String(response?.data.token)}`
        }

        console.log("response from controller", response)
        localStorage.setItem("userdetails", JSON.stringify(obj))
    }

    return response;
};

export const addTask = async (user) => {
    let resp = await axiosInstance.post(`/addtask`, user);
    return resp
};


export const viewTasks = async (userId, email, page) => {
    const userdata = localStorage.getItem('userdetails');
    const token = JSON.parse(userdata);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token.token}`;
    let resp = await axiosInstance.get(`/viewtasks`, { params: { id: userId, email: email, page: page } });
    if (resp?.status == 500) {
        localStorage.removeItem("userdetails");
        window.location.href = '/'
    }
    return resp
};


export const deleteTask = async (id) => {
    let resp = await axiosInstance.post(`/deletetask`, { id: id });
    if (resp.status == 500) {
        return resp.status
    }
    return resp
};


export const updateTask = async (task) => {
    let resp = await axiosInstance.post(`/updatetask`, task);
    if (resp.status == 500) {
        return
    }
    return resp
};
