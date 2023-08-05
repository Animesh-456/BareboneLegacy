import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { viewTasks, deleteTask } from '../api/endpoints'
import common from '../helpers/common'
import Modal from './Modal'
import { updateTask } from '../api/endpoints'
import { useNavigate } from 'react-router-dom';

const Dash = () => {
  const history = useNavigate();

  const addtaskpage = () => {
    window.location.href = '/add'
  };


  const handlelogout = () => {
    localStorage.removeItem("userdetails");
    window.location.href = '/'

  }



  const [task, settask] = useState([])

  useEffect(() => {
    const userdata = localStorage.getItem('userdetails');
    const usr = JSON.parse(userdata);
    console.log("local data ", usr)
    viewTasks(usr?.token, usr?.email, page).then(d => {
      settask(d.data);
      console.log("task data is ", d.data)
    })
  }, [])


  const handledelete = (id) => {
    console.log("del", id)
    deleteTask(id).then(d => {
      window.location.reload()
    }).catch(err => {
      console.log(err)
    })

  }

  const [edit, setedit] = useState({
    task_id: "",
    title: "",
    description: ""
  })

  const seteditprof = common(setedit)
  const [editarr, seteditarr] = useState([]);

  const handleedit = (a, b, c) => {
    seteditarr(a)

    setedit((prevEdit) => ({
      ...prevEdit,
      task_id: a
    }));

    setedit((prevEdit) => ({
      ...prevEdit,
      title: b
    }));

    setedit((prevEdit) => ({
      ...prevEdit,
      description: c
    }));
  }

  const handleSubmit = () => {
    console.log("edit values", edit)
    updateTask(edit).then(d => {
      seteditarr([]);
      window.location.reload();
    }).catch(err => {
      console.log(err)
      return
    })
  }

  const [page, setpage] = useState(1);

  const numbersArray = Array.from({ length: task?.totalPages }, (_, index) => index + 1);

  useEffect(() => {
    const userdata = localStorage.getItem('userdetails');
    const usr = JSON.parse(userdata);
    console.log("local data ", usr)
    viewTasks(usr?.token, usr?.email, page).then(d => {
      settask(d.data);
      console.log("task data is ", d.data)
    })
  }, [page])

  const handlePrevPage = () => {
    setpage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setpage((prevPage) => Math.min(prevPage + 1, task?.totalPages));
  };

  const handlePageclick = (i) => {
    setpage(i)
  }

  return (
    <div className='mx-20 px-20 py-10'>
      <h1 className='font-bold text-2xl justify-center align-middle flex'>Todo Lists</h1>

      <button
        type="submit"
        onClick={addtaskpage}
        className="block w-1/9 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add task
      </button>

      <div className="hidden sm:flex sm:flex-col sm:items-end">
        <button
          onClick={handlelogout}
          type="submit"
          className="block w-20 rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Logout
        </button>
      </div>


      <hr />
      <ul role="list" className="divide-y divide-gray-100">
        {task?.todos?.map((tk) => (
          <li key={tk?._id} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{tk?.title}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{tk?.description}</p>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <button
                onClick={() => handledelete(tk?._id)}
                className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Delete task
              </button>
              <br />
              <button
                type="submit"
                onClick={() => handleedit(tk?._id, tk?.title, tk?.description)}
                className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Edit task
              </button>

              {editarr.includes(tk?._id) ? (
                <>
                  <div>
                    <div class='flex items-center justify-center mx-auto mt-10'>
                      <form >
                        <div className="space-y-8">


                          <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-3xl font-semibold leading-7 text-gray-900">Add Task</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Add task here</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">

                              <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                  Title
                                </label>
                                <div className="mt-2">
                                  <input
                                    value={edit?.title}
                                    onChange={seteditprof('title')}
                                    className="px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>

                              <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                  Description
                                </label>
                                <div className="mt-2">
                                  <textarea
                                    type='text'
                                    value={edit?.description}
                                    onChange={seteditprof('description')}
                                    className="px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                          <a onClick={() => seteditarr([])} type="button" className="cursor-pointer text-sm font-semibold leading-6 text-blue-900">
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
                        {/* <ToastContainer
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
                    /> */}
                      </form>


                    </div>

                  </div>
                </>
              ) : (<></>)}


            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">

        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">

          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">

              {page != 1 && task?.totalPages != 0 ? (
                <a
                  href="#"
                  onClick={handlePrevPage} disabled={page === 1}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              ) : (<></>)}


              {numbersArray.map((number) => (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageclick(number);
                  }}
                  aria-current="page"
                  className={`relative z-10 inline-flex items-center ${page == number ? "bg-indigo-600" : ""} px-4 py-2 text-sm font-semibold ${page == number ? "text-white" : "text-indigo-600"} focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  {number}
                </a>
              ))}

              {page != task?.totalPages && task?.totalPages != 0 ? (
                <a
                  href="#"
                  onClick={handleNextPage} disabled={page === task?.totalPages}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              ) : (<></>)}

            </nav>







          </div>
        </div>
      </div>
    </div>


  )
}

export default Dash
