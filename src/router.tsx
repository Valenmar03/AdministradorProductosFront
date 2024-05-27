import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { loader as productLoader} from './views/Products'
import NewProduct, { action as newProductAction} from './views/NewProduct'
import EditProduct from './views/EditProduct'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <Products/>,
                loader: productLoader
            },
            {
                path: '/product/new',
                element: <NewProduct/>,
                action: newProductAction
            },
            {
                path: '/products/:id/edit',
                element: <EditProduct/>
            }
        ]
    }
]) 