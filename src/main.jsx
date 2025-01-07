import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Index from './components/Index.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Index/>}/>

      <Route path='*' element={<div className='text-center flex flex-col text-5xl py-40 '>
        <span className='text-red-500 pt-20'>404!</span>
        <span className='text-black text-3xl'>Page is not found</span>
      </div>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router}/>
    </NextUIProvider>
  </StrictMode>
)
