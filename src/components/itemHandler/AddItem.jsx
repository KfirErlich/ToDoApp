
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainNavigation from '../../navigation/MainNavigation'

function AddItem({onAddItem}) {
  const [taskName, setTaskName] = useState('')
  const [priority, setPriority] = useState('High')
  const [category, setCategory] = useState('Home')

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTaskName = taskName.trim()
    if(!trimmedTaskName) return;

    const newTask = {
      name: trimmedTaskName,
      priority,
      category,
    }

    onAddItem(newTask)

    setTaskName('')
    setPriority('High')
    setCategory('Home')
  }

  return (
    <>
      <MainNavigation/>
      <div className="min-h-screen flex justify-center items-center bg-gray-300 p-4">
        <div className="flex gap-2">
          <form className="bg-white p-6 rounded-lg size-120" onSubmit={handleSubmit}>
            <div className="border-b border-white/10 pb-12">
              <h2 className="text-base/7 font-semibold text-black">Add New Task</h2>
              <p className="mt-1 text-sm/6 text-black">Create a new task with priority and category.</p>
              
              <div className="mt-10 grid grid-cols-1 gap-y-8 ">
                <div className="sm:col-span-4">
                  <label htmlFor="taskName" className="block text-sm/6 font-medium text-black">
                    Task Name
                  </label>
                  <div className="mt-2">
                    <input 
                      id="taskName" 
                      type="text" 
                      name="taskName" 
                      autoComplete="taskName" 
                      value={taskName}
                      onChange={(e) => setTaskName(e.target.value)}
                      placeholder="Enter task name..."
                      className="block w-full rounded-md border bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-black focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" 
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="priority" className="block text-sm/6 font-medium text-black">
                    Priority
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select 
                      id="priority" 
                      name="priority" 
                      autoComplete="task-priority" 
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                      className="col-start-1 border row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-black outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    >
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="category" className="block text-sm/6 font-medium text-black">
                    Category
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select 
                      id="category" 
                      name="category" 
                      autoComplete="task-category" 
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="col-start-1 border row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-black outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    >
                      <option>Home</option>
                      <option>Health</option>
                      <option>Hobby</option>
                      <option>Study</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                {taskName && <Link to="/" 
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    Add Task
                </Link> }
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddItem;

