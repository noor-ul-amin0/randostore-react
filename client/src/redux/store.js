import { configureStore } from '@reduxjs/toolkit'
import rootReducer  from './index'
export default configureStore({reducer:rootReducer })