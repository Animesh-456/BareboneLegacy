import { model } from 'mongoose';
import task from '../schema/taskschema.js';
import { Redis } from 'ioredis';


const addtask = async (emp) => {

    let data = {
        title: emp.title,
        description: emp.description,
        email: emp.email,
        createdAt: new Date()
    }

    let newtask = new task(data);
    await newtask.save();
    return newtask
}

const gettask = async (tsk) => {
    //const redisClient = new Redis();

    // const cachedPage = await redisClient.get(`todos_page_${page}`);
    // if (cachedPage) {
    //     // Data is available in the cache
    //     const { todos, totalPages } = JSON.parse(cachedPage);
    //     return { todos, totalPages };
    // }
    const PAGE_SIZE = 5

    const page = tsk.page;

    const totaltasks = await task.countDocuments({ email: tsk?.email });
    const totalPages = Math.ceil(totaltasks / PAGE_SIZE);


    // Calculate skip value to fetch the correct page of todos from the database
    const skip = (page - 1) * PAGE_SIZE;
    const todos = await task.find({ email: tsk?.email }).skip(skip).limit(PAGE_SIZE).sort({ createdAt: -1 });
    //await redisClient.set(`todos_page_${page}`, JSON.stringify({ todos, totalPages }), "EX", 5); // Cache for 1 minute

    console.log("to find page and tasks", todos, totalPages)

    if (page > totalPages || page < 1) {
        return { todos, totalPages }
    }
    return { todos, totalPages }
}

const deletetask = async (tk) => {
    let response = await task.findByIdAndDelete({ _id: tk });
    return response
}


const updatetask = async (tk) => {
    let result = await task.findByIdAndUpdate({ _id: tk.task_id }, { title: tk.title, description: tk.description }, { new: true })
    return result
}

const taskcontroller = {
    addtask,
    gettask,
    deletetask,
    updatetask
}

export default taskcontroller