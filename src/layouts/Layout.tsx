import { Outlet } from "react-router-dom";

function layout() {
   return (
      <>
         <header className="bg-slate-800">
            <div className="mx-auto max-w-6xl py-8">
               <h1 className="text-5xl font-extrabold text-white">
                    Administrador de Productos
               </h1>
            </div>
            <nav>
                
            </nav>
         </header>
         <main className="mt-10 max-w-6xl mx-auto bg-white shadow-md p-10">
            <Outlet />
         </main>
      </>
   );
}

export default layout;
