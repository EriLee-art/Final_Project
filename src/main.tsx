import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Root from './Root'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Reviews from './pages/Reviews'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/reviews",
        element: <Reviews/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
