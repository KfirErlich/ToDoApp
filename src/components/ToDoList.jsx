
import { useState } from 'react'
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import EditItem from './itemHandler/EditItem';

const priorityColorMapping = {
    'High' : 'bg-red-500 hover:bg-gray-50 px-6 py-4',
    'Medium' : 'bg-yellow-500 hover:bg-gray-50 px-6 py-4',
    'Low': 'bg-green-500 hover:bg-gray-50 px-6 py-4'
}


function ToDoList({list, onDelete, onUpdate}) {
    const [editingIndex, setEditingIndex] = useState(null)

    const startEdit = (index) => {
        setEditingIndex(index)
    }

    const cancelEdit = () => {
        setEditingIndex(null)
    }
    return(
        <div className="bg-white rounded-lg shadow-lg">
            <ul className="divide-y divide-gray-200 rounded-lg">
                {list.map((todo, index) => (
                    <li key={index} className="bg-red-500 hover:bg-red-400 px-6 py-4">
                        <div className="flex justify-between space-x-4">
                            <div className="flex items-center space-x-4">
                                {editingIndex === index ? (
                                    <EditItem
                                        initialValue={todo}
                                        onSave={(newText) => { onUpdate(index, newText); setEditingIndex(null); }}
                                        onCancel={cancelEdit}
                                    />
                                ) : (
                                    <>
                                        <input type="checkbox" className="checkbox bg-gray-200 checked:border-blue-500 checked:bg-blue-400 checked:text-blue-800" />
                                        <span className="text-xl font-medium text-gray-900">{todo}</span>
                                    </>
                                )}
                            </div>
                            <div className="flex space-x-2">
                                <button
                                className="btn-icon"
                                onClick={() => startEdit(index)}
                                >
                                    <PencilSquareIcon className="btn-icon-size"/>
                                </button>
                                <button 
                                className="btn-icon"
                                onClick={() => onDelete(index)}
                                >
                                    <TrashIcon className="btn-icon-size" />
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList

