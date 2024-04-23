import { configureStore } from '@reduxjs/toolkit'
import { pizzaApi } from './pizzaApi'

export const resetStore = () => configureStore({
  reducer: {
    [pizzaApi.reducerPath]: pizzaApi.reducer,
  },
  middleware: getDefault => getDefault().concat(
    pizzaApi.middleware
  ),
})

export const store = resetStore()
