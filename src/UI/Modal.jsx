import React from 'react'

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null

	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) onClose()
	}

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
			onClick={handleOverlayClick}
		>
			<div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4" role="dialog" aria-modal="true">
				<div className="flex justify-between p-2">
                    <h3 className="text-xl px-3 font-bold text-black mb-4">Add New Task</h3>
					<button onClick={onClose} className="btn btn-sm">✕</button>
				</div>
				<div className="px-6 pb-6">
					{children}
				</div>
			</div>
		</div>
	)
}

export default Modal