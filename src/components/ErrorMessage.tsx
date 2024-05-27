import { PropsWithChildren } from "react";

function ErrorMessage({ children }: PropsWithChildren) {
   return (
      <>
         <div className="text-white text-lg bg-red-600 p-3 w-full font-semibold uppercase mt-5 rounded text-center">
            {children}
         </div>
      </>
   );
}

export default ErrorMessage;
