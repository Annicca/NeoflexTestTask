import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Accecouares } from './pages/Accecouares';
import { Bag } from './pages/Bag';
import { Layout } from './components/layout/Layout';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <div>Страница не найдена</div>,
      children: [
        {
          path: '',
          index: true,
          element: <Accecouares />
        },
        {
          path: 'bag',
          element: <Bag />
        }
      ]
    },
    
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
