import { Product } from "../types"

type ProductFormProps ={
    product?: Product;
    res: {}
}


function ProductForm({product, res} : ProductFormProps) {
  return (
    <>
      <div className="mb-5">
               <label htmlFor="name" className="text-2xl text-zinc-700">
                  Nombre
               </label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ingrese el nombre del producto"
                  defaultValue={product?.name}
                  className={`block p-3 border bg-gray-100 mt-2 
                   rounded-md w-full placeholder:text-lg text-lg
                   placeholder:text-zinc-500 outline-none
                   ${
                      res &&
                      Object.values(res)[1] === "" &&
                      "border-l-8 border-l-red-600"
                   }`}
               />
            </div>
            <div className="mb-5">
               <label htmlFor="price" className="text-2xl text-zinc-700 mt-10">
                  Precio
               </label>
               <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Ingrese el precio del producto"
                  defaultValue={product?.price}
                  className={`block p-3 border bg-gray-100 mt-2 
                   rounded-md w-full placeholder:text-lg text-lg
                   placeholder:text-zinc-500 outline-none
                   ${
                      res &&
                      (Object.values(res)[2] === "" ||
                         Object.values(res)[2] === "0") &&
                      "border-l-8 border-l-red-600"
                   }`}
               />
            </div>
    </>
  )
}

export default ProductForm
