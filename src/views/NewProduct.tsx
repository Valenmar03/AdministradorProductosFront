import {
   Link,
   Form,
   useActionData,
   ActionFunctionArgs,
   redirect
} from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { addProduct } from "../services/ProductService";
import ProductForm from "../components/ProductForm";

export async function action({ request }: ActionFunctionArgs) {
   const data = Object.fromEntries(await request.formData());
   let error = "";
   if (Object.values(data).includes("") || Object.values(data)[1] === '0') {
      error = "Todos los campos son obligatorios";
   }
   if (error.length > 0) {
      return {
         error,
         name: Object.values(data)[0],
         price: Object.values(data)[1]
      };
   }

   await addProduct(data)
   return redirect('/');
}

export default function NewProduct() {
   const res = useActionData() as {};

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
         {res && (Object.values(res)[0] === 'Todos los campos son obligatorios' && <ErrorMessage>{Object.values(res)}</ErrorMessage>)}
         <Form className="mt-10" method="POST">
            <ProductForm
               res={res}
            />
            <input
               type="submit"
               className="text-white bg-indigo-600 w-full p-3 rounded-md text-xl uppercase font-bold cursor-pointer hover:bg-indigo-700 duration-200"
               value="Crear Producto"
            />
         </Form>
      </>
   );
}
