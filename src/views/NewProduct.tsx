import {
   Link,
   Form,
   useActionData,
   ActionFunctionArgs,
} from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

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
   return data;
}

export default function NewProduct() {
   const data = useActionData() as {};
   console.log(data)

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
         {data && (Object.values(data)[0] === 'Todos los campos son obligatorios' && <ErrorMessage>{Object.values(data)}</ErrorMessage>)}
         <Form className="mt-10" method="POST">
            <div className="mb-5">
               <label htmlFor="name" className="text-2xl text-zinc-700">
                  Nombre
               </label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ingrese el nombre del producto"
                  className={`block p-3 border bg-gray-100 mt-2 
                  rounded-md w-full placeholder:text-lg text-lg
                  placeholder:text-zinc-500 outline-none
                  ${data && (Object.values(data)[1] === '' && 'border-l-8 border-l-red-600')}`}
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
                  className={`block p-3 border bg-gray-100 mt-2 
                  rounded-md w-full placeholder:text-lg text-lg
                  placeholder:text-zinc-500 outline-none
                  ${data && ((Object.values(data)[2] === '' || Object.values(data)[2] === '0') && 'border-l-8 border-l-red-600')}`}
               />
            </div>
            <input
               type="submit"
               className="text-white bg-indigo-600 w-full p-3 rounded-md text-xl uppercase font-bold cursor-pointer hover:bg-indigo-700 duration-200"
               value="Crear Producto"
            />
         </Form>
      </>
   );
}
