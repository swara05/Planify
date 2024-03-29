import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../store/user'
import tasksReducer from '../store/tasks'

export default configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
})
