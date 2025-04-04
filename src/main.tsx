import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Root from './Root'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Reviews from './pages/Reviews'
import MetroidDread from './pages/components/MetroidDread'
import Doom2016 from './pages/components/Doom2016'
import DoomEternal from './pages/components/DoomEternal'
import RedDeadRedemption2 from './pages/components/RedDeadRedemption2'
import Sonic2006 from './pages/components/Sonic2006'
import SonicBoom from './pages/components/SonicBoom'
import StardewValley from './pages/components/StardewValley'
import TheLastOfUs2 from './pages/components/TheLastOfUs2'

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
        element: <Reviews />,
        children: [
          {
            path: "/reviews/MetroidDread",
            element: <MetroidDread/>
          },
          {
            path: "/reviews/Doom2016",
            element: <Doom2016/>
          },
          {
            path: "/reviews/DoomEternal",
            element: <DoomEternal />
          },
          {
            path: "/reviews/RedDeadRedemption2",
            element: <RedDeadRedemption2/>
          },
          {
            path: "/reviews/Sonic2006",
            element: <Sonic2006/>
          },
          {
            path: "/reviews/SonicBoom",
            element: <SonicBoom/>
          },
          {
            path: "/reviews/StardewValley",
            element: <StardewValley/>
          },
          {
            path: "/reviews/TheLastOfUs2",
            element: <TheLastOfUs2/>
          },
          {
            path: "/reviews/Warframe",
            element: <TheLastOfUs2/>
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
