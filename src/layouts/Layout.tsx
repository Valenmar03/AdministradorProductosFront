import { Outlet } from "react-router-dom"

function layout() {
  return (
    <>
      <h1>Desde Layout</h1>
      <Outlet/>
    </>
  )
}

export default layout
