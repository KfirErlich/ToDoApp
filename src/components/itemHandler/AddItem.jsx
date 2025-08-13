
import React, { useState } from 'react';

function AddItem({onAddItem}) {
  const [addItem, setAddItem] = useState('')

  const handleSubmit = () => {
    onAddItem(addItem)
    setAddItem('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

    return (
      <div className="flex justify-center items-center bg-gray-100 p-4">
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Add To-Do Item" 
            className="input input-info"
            value={addItem}
            onChange={ (e) => setAddItem(e.target.value)}
            onKeyDown={handleKeyDown}
            required 
          />
          <button 
          className="btn Add-item px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          onClick= {handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    );
}

export default AddItem;

