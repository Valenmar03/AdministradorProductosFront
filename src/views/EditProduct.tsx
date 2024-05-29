import {
   Link,
   Form,
   useActionData,
   ActionFunctionArgs,
   redirect,
   LoaderFunctionArgs,
   useLoaderData,
} from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { getProductsById, updateProduct } from "../services/ProductService";
import { Product } from "../types";
import ProductForm from "../components/ProductForm";

export async function loader({ params }: LoaderFunctionArgs) {
   if (params.id) {
      const product = await getProductsById(+params.id);
      if (!product) {
         throw new Response("", {
            status: 404,
            statusText: "Product not found",
         });
      }
      return product;
   }
}

export async function action({ request, params }: ActionFunctionArgs) {
   const data = Object.fromEntries(await request.formData());
   let error = "";
   if (Object.values(data).includes("") || Object.values(data)[1] === "0") {
      error = "Todos los campos son obligatorios";
   }
   if (error.length > 0) {
      return {
         error,
         name: Object.values(data)[0],
         price: Object.values(data)[1],
      };
   }

   if (params.id !== undefined) {
      await updateProduct(data, +params.id);
      return redirect("/");
   }
}

const availabilityOptions = [
   { name: "Disponible", value: true },
   { name: "No Disponible", value: false },
];

export default function EditProduct() {
   const res = useActionData() as {};
   const product = useLoaderData() as Product;

   return (
      <>
         <div className="flex items-end justify-between">
            <h2 className="text-zinc-500 text-5xl font-bold">
               Editar Producto
            </h2>
            <Link
               to="/"
               className="text-white text-lg bg-emerald-600 py-3 px-5 rounded-md hover:bg-emerald-700 duration-150"
            >
               Ver Productos
            </Link>
         </div>
         {res &&
            Object.values(res)[0] === "Todos los campos son obligatorios" && (
               <ErrorMessage>{Object.values(res)}</ErrorMessage>
            )}
         <Form className="mt-10" method="POST">
            <ProductForm
               product={product}
               res={res}
            />
            <div className="mb-4">
               <label
                  className="text-2xl text-zinc-700 mt-10"
                  htmlFor="availability"
               >
                  Disponibilidad
               </label>
               <select
                  id="availability"
                  className={`block p-3 border bg-gray-100 mt-2 
                  rounded-md w-full placeholder:text-lg text-lg
                  placeholder:text-zinc-500 outline-none`}
                  name="availability"
                  defaultValue={product?.availability.toString()}
               >
                  {availabilityOptions.map((option) => (
                     <option key={option.name} value={option.value.toString()}>
                        {option.name}
                     </option>
                  ))}
               </select>
            </div>
            <input
               type="submit"
               className="text-white bg-indigo-600 w-full p-3 rounded-md text-xl uppercase font-bold cursor-pointer hover:bg-indigo-700 duration-200"
               value="Guardar Cambios"
            />
         </Form>
      </>
   );
}
