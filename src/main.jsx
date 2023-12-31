import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home';
import AddProducts from './pages/AddProducts';
import BrandsProducts from './pages/BrandsProducts';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './Providers/AuthProvider';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import PrivateRoutes from './privateRaouts/PrivateRoutes';
import UpdateProduct from './pages/UpdateProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproducts",
        element: <PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>,
      },
      {
        path: "/brandProducts/:brand",
        loader: ({params}) => fetch(`https://brand-shop-server-lap4jd2li-hifzur-rahmans-projects.vercel.app/product/${params.brand}`),
        element: <BrandsProducts></BrandsProducts>,
      },
      {
        path: "/details/:id",
        loader: ({params}) => fetch(`https://brand-shop-server-lap4jd2li-hifzur-rahmans-projects.vercel.app/singleproduct/${params.id}`),
        element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>
      },
      {
        path: "/singleproduct/:id",
        loader: ({params}) => fetch(`https://brand-shop-server-lap4jd2li-hifzur-rahmans-projects.vercel.app/singleproduct/${params.id}`),
        element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>
      },
      {
        path: "/cart",
        loader: () => fetch('https://brand-shop-server-lap4jd2li-hifzur-rahmans-projects.vercel.app/cart'),
        element: <PrivateRoutes><Cart></Cart></PrivateRoutes>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
