import React, { useState, useEffect, useRef } from 'react';
import ToDoList from './ToDoList'
import AddItem from './itemHandler/AddItem'
import { userToDoList } from '../hooks/userToDoList'

function ToDo() {
	const { todoList, addMessage, addItem, deleteItem, updateItem} = userToDoList([])

	useEffect(() => {
		localStorage.setItem('todoList', JSON.stringify)
	}, [todoList])

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
			<div className="w-full max-w-4xl">
					<AddItem onAddItem={addItem}/>
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
