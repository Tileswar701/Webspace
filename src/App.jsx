import './App.css'
import Home from './Pages/pages1/Home'
import About from './Pages/pages1/About'
import Dashboard from './Pages/pages1/Dashboard'
import { Route, createBrowserRouter, RouterProvider } from 'react-router'
import { createRoutesFromElements } from 'react-router'
import RootLayout from './layouts/layout1/RootLayout'
import WorkLayout from './layouts/layout1/WorkLayout'
import San from './user/San'
import Tileswar from './user/Tileswar'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Dashboard' element={<Dashboard />} />
        <Route path='Workspace' element={<WorkLayout />} >
          <Route path='sanb' element={<San />} />
          <Route path='tileswar' element={<Tileswar />} />
        </Route>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </> 
  )
}
export default App
