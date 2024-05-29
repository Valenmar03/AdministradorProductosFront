import { ActionFunctionArgs, Link, useLoaderData } from "react-router-dom";
import { getProducts, updateProductAvailability } from "../services/ProductService";
import ProductDetails from "../components/ProductDetails";
import { Product } from "../types";

export async function loader() {
   const products = await getProducts();
   return products;
}
export async function action({request} :ActionFunctionArgs){
   const data = Object.fromEntries(await request.formData());
   await updateProductAvailability(+data.id)
   return null
}

function Products() {
   const products = useLoaderData() as Product[];
   return (
      <>
         <div className="flex items-end justify-between">
            <h2 className="text-zinc-500 text-5xl font-bold">Productos</h2>
            <Link
               to="product/new"
               className="text-white text-lg bg-emerald-600 py-3 px-5 rounded-md hover:bg-emerald-700 duration-150"
            >
               Nuevo Producto
            </Link>
         </div>
         {products.length ? (
            <div className="py-3 mt-2">
               <div className="w-full p-5 text-xl rounded-t-md border-b-2 border-blue-300 grid grid-cols-4 items-center">
                  <p>Producto</p>
                  <p>Precio</p>
                  <p className="mx-auto">Disponibilidad</p>
                  <p className="ml-auto">Acciones</p>
               </div>
               <div className="w-full">
                  {products.map((product) => (
                     <ProductDetails key={product.id} product={product} />
                  ))}
               </div>
            </div>
         ) : (
            <h2 className="w-full mx-auto text-2xl text-center mt-14 text-zinc-800">
               No hay productos aún...
            </h2>
         )}
      </>
   );
}

export default Products;
