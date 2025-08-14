import {initialState, formReducer} from '../hooks/form-hook'
import React, { useReducer } from 'react';

const ItemForm = ({addItem, handleAddItemModal}) => {
    const [state, dispatch] = useReducer(formReducer, initialState)

    const handleSubmitNew = (e) => {
		e.preventDefault()
		const { taskName } = state
		const name = taskName.trim()
		if (!name) return

		addItem(name)
		dispatch({type: 'RESET_FORM'})
		handleAddItemModal()
	}

    return (
        <form onSubmit={handleSubmitNew} className="space-y-4">
					<div>
						<label htmlFor="taskName" className="label-style">Task Name</label>
						<input id="taskName" value={state.taskName} onChange={(e) => dispatch({type: "SET_TASK_NAME", payload: e.target.value})} className="input-select" placeholder="Enter task name" />
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div>
							<label htmlFor="priority" className="label-style">Priority</label>
							<select id="priority" value={state.priority} onChange={(e) => dispatch({type: "SET_PRIORITY", payload: e.target.value})} className="input-select">
								<option>High</option>
								<option>Medium</option>
								<option>Low</option>
							</select>
						</div>
						<div>
							<label htmlFor="category" className="label-style">Category</label>
							<select id="category" value={state.category} onChange={(e) => dispatch({type: "SET_CATEGORY", payload: e.target.value})} className="input-select">
								<option>Home</option>
								<option>Health</option>
								<option>Hobby</option>
								<option>Study</option>
							</select>
						</div>
					</div>
					<div className="flex justify-end gap-2 pt-2">
						<button type="button" className="btn" onClick={() => setIsAddOpen(false)}>Cancel</button>
						<button type="submit" className="btn btn-primary" disabled={!state.taskName.trim()}>Add</button>
					</div>
				</form>
    )

}

export default ItemForm