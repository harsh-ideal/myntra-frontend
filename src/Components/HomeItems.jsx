import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../Store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
const HomeItems=({item})=>{

    const bagItems=useSelector(store=>store.bag);
    const elemenFound=bagItems.indexOf(item.id)<0;

    const dispatch=useDispatch();


    const handleAddToBag=()=>{
        dispatch(bagAction.addTobag(item.id))
    }

    const handleRemove=()=>{
        dispatch(bagAction.removeFrombag(item.id))
    }

    return(
        <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elemenFound ?  (<button className="btn btn-add-bag btn-success" onClick={handleAddToBag}><GrAddCircle />Add to Bag</button>):(<button className="btn btn-add-bag btn-danger" onClick={handleRemove}><AiFillDelete/>Remove</button>)}
     
      
    </div>
    )
}
 export default HomeItems; 