import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BagSummary from "../Components/BagSummary";
import BagItem from "../Components/BagItems";
import { useSelector } from "react-redux";
const Bag=()=>{

  const bagItems=useSelector(store=>store.bag);
  const items=useSelector(store=>store.items);
  const finalItems= items.filter(item=>{
    const itemsIndex=bagItems.indexOf(item.id);
    return itemsIndex>=0;
  })


    return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {
            finalItems.map((item)=> (<BagItem key={item.id} item={item} />))
          }
          
        </div>
        <div className="bag-summary">
          <BagSummary />
        </div>

      </div>
    </main>
    )
}

export default Bag;