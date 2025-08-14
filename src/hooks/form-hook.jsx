
export const initialState = {
    taskName: '',
    priority: 'High',
    category: 'Home'
}

const taskReducerActions = {
    SET_TASK_NAME: (state, action) => ({ ...state, taskName: action.payload }),
    SET_PRIORITY: (state, action) => ({ ...state, priority: action.payload }),
    SET_CATEGORY: (state, action) => ({ ...state, category: action.payload }),
    RESET_FORM: () => initialState,
  };

export const formReducer = (state, action) => {
    const taskActionHandler = taskReducerActions[action.type]

    return taskActionHandler ? taskActionHandler(state,action) : state
}