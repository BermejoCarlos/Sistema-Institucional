import { getAdministrators } from "@/api/administrators.api";
import { useStateContext } from "./ContextProvider";

import React from 'react'



export const GetAdministrators = async () => {
    const {data, setData} = useStateContext()
    const res = await getAdministrators();
    console.log(res.data);
    console.log(data);
};

// const deleteTask = async (id) => {
//     try {
//         const res = await deleteTaskRequest(id);
//         if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
//     } catch (error) {
//         console.log(error);
//     }
// };

// const createTask = async (task) => {
//     try {
//         const res = await createTaskRequest(task);
//         console.log(res.data);
//     } catch (error) {
//         console.log(error);
//     }
// };

// const getTask = async (id) => {
//     try {
//         const res = await getTaskRequest(id);
//         return res.data;
//     } catch (error) {
//         console.error(error);
//     }
// };

// const updateTask = async (id, task) => {
//     try {
//         await updateTaskRequest(id, task);
//     } catch (error) { }
// }
