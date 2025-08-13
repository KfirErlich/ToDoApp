import { useState,useRef,useEffect } from 'react';

export const userToDoList = (initList= []) => {
    const [todoList, setTodoList] = useState(initList)
    const [addMessage, setAddMessage] = useState('')

    const messageTimerRef = useRef(null)

    const showTransientMessage = (messageText, durationMs = 2000) => {
        if (messageTimerRef.current) {
            clearTimeout(messageTimerRef.current)
            messageTimerRef.current = null
        }
        setAddMessage(messageText)
        messageTimerRef.current = setTimeout(() => {
            setAddMessage('')
            messageTimerRef.current = null
        }, durationMs)
    }

    useEffect(() => {
        return () => {
            if (messageTimerRef.current) {
                clearTimeout(messageTimerRef.current)
            }
        }
    }, [])

    // Persist list changes safely
    useEffect(() => {
        try {
            localStorage.setItem('todoList', JSON.stringify(todoList))
        } catch (err) {
            console.warn('Failed to persist todoList to localStorage', err)
        }
    }, [todoList])

    const addItem = (itemText) =>{
        const trimmed = itemText.trim()
        if (trimmed !== '') {
            setTodoList(prevList => [...prevList, trimmed]);
            showTransientMessage(`The task "${trimmed}" was added to the list!`)
        }
    }

    const deleteItem = (indexToDelete) => {
        const deletedItem = todoList[indexToDelete]
        setTodoList(prevList => prevList.filter((_, index) => index !== indexToDelete));
        showTransientMessage(`The task "${deletedItem}" was deleted from the list!`)
        
    }

    const updateItem = (indexToUpdate, newText) => {
        const trimmedText = newText.trim();
        const oldText = todoList[indexToUpdate]
        if (!trimmedText || oldText === trimmedText) {
            return;
        }
        setTodoList(prevList =>
            prevList.map((item, index) => (index === indexToUpdate ? trimmedText : item))
        );
        showTransientMessage(`The task "${oldText}" was updated to "${trimmedText}"`)
    }

    return {
        todoList,
        addMessage,
        addItem,
        deleteItem,
        updateItem
    }
}