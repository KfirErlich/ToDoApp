import React, { useState } from 'react';

function EditItem({ initialValue, onSave, onCancel }) {
  const [value, setValue] = useState(initialValue || '');
  const [error,setError] = useState('')

  const handleSave = () => {
    const trimmed = value.trim();
    if (!trimmed) {
        setError('Item cannot be Empty')
        return;
    }
    setError('')
    onSave(trimmed);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') onCancel();
  };

  return (
    <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <input
        type="text"
        className="input input-sm bg-gray-200 text-black text-xl"
        value={value}
        onChange={(e) => {
            setValue(e.target.value)
            if(e.target.value.trim()){
                setError('')
            }
        }}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <button className="btn btn-sm hover:bg-green-500" onClick={handleSave}>Save</button>
      <button className="btn btn-sm hover:bg-red-500 " onClick={onCancel}>Cancel</button>
      </div>
      {error && <p className= "text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default EditItem; 