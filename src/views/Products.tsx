import { Link } from "react-router-dom"

function Products() {
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
    </>
  )
}

export default Products
