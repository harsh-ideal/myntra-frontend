import { useSelector } from "react-redux";

const BagSummary=()=>{
  const bagItemIds=useSelector(store=>store.bag);
  const items=useSelector(store=>store.items);
  const finalItems= items.filter(item=>{
    const itemsIndex=bagItemIds.indexOf(item.id);
    return itemsIndex >= 0;
  })
  let totalItem=bagItemIds.length;
  const Convenience_Fees=99;
  let totalMRP=0;
  let totalDiscount=0;

  finalItems.forEach((bagItem) =>{
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  })


  let finalPayment=totalMRP-totalDiscount+Convenience_Fees;
    
 return(
    <>
    <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr />
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </>
 )   
}

export default BagSummary;