import { useGlobalContex } from "./Context"
import { FaBars } from "react-icons/fa"

const Home = () => {
  const { openSidebar,openModal} = useGlobalContex()
  // console.log(openModal,openSidebar)
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">open-Modal</button>
    </main>
  )
}
export default Home