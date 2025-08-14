import React, { useEffect, useState } from 'react';
import ToDoList from './ToDoList'
// import AddItem from './itemHandler/AddItem'
import { userToDoList } from '../hooks/userToDoList'
// import { Link } from 'react-router-dom';
import Modal from '../UI/Modal'

function ToDo() {
	const { todoList, addMessage, addItem, deleteItem, updateItem} = userToDoList([])
	const [isAddOpen, setIsAddOpen] = useState(false)
	const [taskName, setTaskName] = useState('')
	const [priority, setPriority] = useState('High')
	const [category, setCategory] = useState('Home')

	const handleSubmitNew = (e) => {
		e.preventDefault()
		const name = taskName.trim()
		if (!name) return
		// Current data model stores strings; save only the task name
		addItem(name)
		setTaskName('')
		setPriority('High')
		setCategory('Home')
		setIsAddOpen(false)
	}

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
			{todoList.length ? (
				<>
					<div className="list-style">
						<ToDoList list={todoList} onDelete={deleteItem} addItem={addItem} onUpdate={updateItem}/>
					</div>
				</>
			) : (
				<div className="list-style">
					<p className="text-5xl text-blue-400">
						There are no list to do. please add an item!
					</p>
				</div>
			)}
			<div className="flex justify-around w-full max-w-4xl">
				<button onClick={() => setIsAddOpen(true)} className="text-black text-xl font-bold border-2 border-blue-200 px-4 py-2 rounded hover:bg-blue-400 hover:border-white transition-colors">
					+ Add Item
				</button>
			</div>

			<Modal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)}>
				<form onSubmit={handleSubmitNew} className="space-y-4">
					<div>
						<label htmlFor="taskName" className="label-style">Task Name</label>
						<input id="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)} className="input-select" placeholder="Enter task name" />
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div>
							<label htmlFor="priority" className="label-style">Priority</label>
							<select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)} className="input-select">
								<option>High</option>
								<option>Medium</option>
								<option>Low</option>
							</select>
						</div>
						<div>
							<label htmlFor="category" className="label-style">Category</label>
							<select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="input-select">
								<option>Home</option>
								<option>Health</option>
								<option>Hobby</option>
								<option>Study</option>
							</select>
						</div>
					</div>
					<div className="flex justify-end gap-2 pt-2">
						<button type="button" className="btn" onClick={() => setIsAddOpen(false)}>Cancel</button>
						<button type="submit" className="btn btn-primary" disabled={!taskName.trim()}>Add</button>
					</div>
				</form>
			</Modal>

			{addMessage && (<div className="toast toast-top">
				<div className={`alert alert-success shadow-lg transition-opacity`}>
					<span>{addMessage || ' '}</span>
				</div>
				
			</div>
			)}
		</div>
	);
}

export default ToDo
