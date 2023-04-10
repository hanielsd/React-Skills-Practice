import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
import { ReactQueryDevtools } from 'react-query/devtools'

import App from './App'
import './index.css'

import { store } from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
)
