import { Link } from "react-router-dom";

export default function NewProduct() {
   return (
      <>
         <div className="flex items-end justify-between">
            <h2 className="text-zinc-500 text-5xl font-bold">Nuevo Producto</h2>
            <Link
               to="/"
               className="text-white text-lg bg-emerald-600 py-3 px-5 rounded-md hover:bg-emerald-700 duration-150"
            >
               Ver Productos
            </Link>
         </div>
         <form className="mt-10">
            <div className="mb-5">
               <label htmlFor="name" className="text-2xl text-zinc-700">
                  Nombre
               </label>
               <input
                  type="text"
                  id="name"
                  placeholder="Ingrese el nombre del producto"
                  className="block p-3 border bg-gray-100 mt-2 rounded-md w-full placeholder:text-xl placeholder:text-zinc-500 outline-none"
               />
            </div>
            <div className="mb-5">
               <label htmlFor="price" className="text-2xl text-zinc-700 mt-10">
                  Precio
               </label>
               <input
                  type="number"
                  id="price"
                  placeholder="Ingrese el precio del producto"
                  className="block p-3 border bg-gray-100 mt-2 rounded-md w-full placeholder:text-xl placeholder:text-zinc-500 outline-none"
               />
            </div>
            <input 
              type="submit" 
              className="text-white bg-indigo-600 w-full p-3 rounded-md text-xl uppercase font-bold cursor-pointer hover:bg-indigo-700 duration-200"
              value="Crear Producto"
            />
         </form>
      </>
   );
}
