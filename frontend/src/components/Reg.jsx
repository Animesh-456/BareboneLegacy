import React, { useState, useEffect } from 'react';
import common from '../helpers/common'
import { regschema } from '../validation/loginschema'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addUser } from '../api/endpoints';
const Reg = () => {

    const handleSubmit = () => {
        const { error } = regschema.validate(formData)
        if (error) {
            toast.warning(error.message)
            return
        }

        addUser(formData).then(d => {
            if (d.status == 201) {
                toast.success("Registration Successful!")
                window.location.href = '/'
            } else {
                toast.error("Error Occured!")
                return
            }
        })
    }




    let editstate = JSON.parse(localStorage.getItem("usereditprofile"))

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    });

    const setprofile = common(setFormData)


    console.log("For rdit profile console", formData)


    return (
        <div class='flex items-center justify-center mx-auto mt-10'>
            <form >
                <div className="space-y-8">


                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-3xl font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        name='fname'
                                        value={formData?.fname}
                                        onChange={setprofile('fname')}
                                        className="px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={formData?.lname}
                                        onChange={setprofile('lname')}
                                        className="px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={formData?.email}
                                        onChange={setprofile('email')}
                                        className="px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        type='password'
                                        value={formData?.password}
                                        onChange={setprofile('password')}
                                        className="px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <a href='/dash' type="button" className="text-sm font-semibold leading-6 text-blue-900">
                        Cancel
                    </a>
                    <a
                        onClick={handleSubmit}
                        //type="submit"
                        className="cursor-pointer rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        Save Changes
                    </a>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </form>


        </div>
    )
}

export default Reg
