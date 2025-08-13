import React, { useEffect } from 'react';
import ToDoList from './ToDoList'
import AddItem from './itemHandler/AddItem'
import { userToDoList } from '../hooks/userToDoList'
import { Link } from 'react-router-dom';

function ToDo() {
	const { todoList, addMessage, addItem, deleteItem, updateItem} = userToDoList([])

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
				<Link to='/addItem' className= "text-black text-xl font-bold border-2 border-blue-200 px-4 py-2 ounded hover:bg-blue-400 hover:border-white transition-colors">
					+ Add Item
				</Link>
			</div>
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
