import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../Store/IteamsSlice";
import { fetchStatusAction } from "../Store/fetchStatusSlice";

const FetchItems=()=>{
    const fetchStatus = useSelector(store=>store.fetchStatus);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(fetchStatus.fetchDone) return;

        const controller=new AbortController();
        const signal=controller.signal;

        dispatch(fetchStatusAction.markFetchingStarted());
        fetch("https://myntra-clone-backend-4m2w.onrender.com/items",{signal})
        .then((res) => res.json())
        .then(({items})=>{
            dispatch(fetchStatusAction.markFetchDone());
            dispatch(fetchStatusAction.markFetchingFinished());
            dispatch(itemsAction.addInitialItems(items[0]));
        })
        .catch((err)=>console.log(err));

        return ()=>{
            controller.abort();
        };
    },[fetchStatus]);

    return(
        <>
        </>
    )
}
 export default FetchItems;