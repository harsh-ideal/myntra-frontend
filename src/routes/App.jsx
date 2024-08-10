import Header from "../Components/Header";
import HomeItems from "../Components/HomeItems";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../Components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinnner from "../Components/LoadingSpinner";
function App() {

  const fetchStatus=useSelector((store)=>store.fetchStatus);

  return (
    <>
    <Header />
    <FetchItems />
    {
      fetchStatus.currentlyFetching ? <LoadingSpinnner />:<Outlet />
    }
    <Footer />
    </>
  )
}

export default App
