import { Link, useLoaderData } from "react-router-dom"
import { getProducts } from "../services/ProductService"
import ProductDetails from "../components/ProductDetails"
import { Product } from "../types"

export async function loader(){
  const products = await getProducts()
  return products
}

function Products() {

  const products = useLoaderData() as Product[]
  return (
    <>
      <div className="flex items-end justify-between">
        <h2 className="text-zinc-500 text-5xl font-bold">
          Productos
        </h2>
        <Link 
          to="product/new"
          className="text-white text-lg bg-emerald-600 py-3 px-5 rounded-md hover:bg-emerald-700 duration-150"  
        >
          Nuevo Producto
        </Link>
      </div>
      <div className="py-3">
        <div className="w-full p-5 text-xl rounded-t-md border-b-2 border-blue-300 grid grid-cols-4 items-center">
          <p>Producto</p>
          <p>Precio</p>
          <p className="mx-auto">Disponibilidad</p>
          <p className="ml-auto">Acciones</p>
        </div>
        <div className="w-full">
          {
            products.map(product => (
              <ProductDetails
              key={product.id}
              product={product}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Products
