import React, { useState, useReducer } from 'react';
import ToDoList from './ToDoList'
import { userToDoList } from '../hooks/userToDoList'
import Modal from '../UI/Modal'
import ItemForm from './ItemForm'

function ToDo() {
	const { todoList, addMessage, addItem, deleteItem, updateItem} = userToDoList([])
	const [isAddItemOpen, setIsAddItemOpen] = useState(false)

	const handleAddItemModal = () => {
		setIsAddItemOpen(() => !isAddItemOpen)
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
				<button onClick={() => setIsAddItemOpen(true)} className="add-item">
					+ Add Item
				</button>
			</div>

			<Modal isOpen={isAddItemOpen} onClose={() => setIsAddItemOpen(false)}>
				<ItemForm addItem={addItem} handleAddItemModal={handleAddItemModal}/>
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
