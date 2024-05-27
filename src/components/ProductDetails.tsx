import { useNavigate } from 'react-router-dom'
import { formatCurrency } from "../helpers";
import { Product } from "../types";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

type ProductDetailsProps = {
   product: Product;
};

function ProductDetails({ product }: ProductDetailsProps) {

   const navigate = useNavigate()

   const isAvailable = product.availability;
   return (
      <div className="w-full p-3 hover:bg-gray-100 text-xl rounded-t-md border-b-2 grid grid-cols-4 items-center">
         <div className='w-25% max-w-[25%]'>
            <p >{product.name}</p>
         </div>
         <div>
            <p>{formatCurrency(product.price)}</p>
         </div>
         <button
            className={
               isAvailable
                  ? "p-2 rounded-md text-blue-700 hover:bg-blue-200 duration-300 mx-auto"
                  : "p-2 rounded-md text-red-700 hover:bg-red-200 duration-300 mx-auto"
            }
         >
            {product.availability ? "Disponible" : "No Disponible"}
         </button>
         <div className="flex gap-2 ml-auto">
            <button
             onClick={()=> navigate(`/products/${product.id}/edit`)}
            >
               <PencilSquareIcon className="size-9 p-1 text-blue-600 rounded hover:bg-blue-200 duration-300"/>
            </button>
            <button>
               <TrashIcon className="size-9 p-1 text-red-600 rounded hover:bg-red-200 duration-300"/>
            </button>
         </div>
      </div>
   );
}

export default ProductDetails;
