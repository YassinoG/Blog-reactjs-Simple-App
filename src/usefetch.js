import { useState , useEffect } from "react";
const useFetch = (url) =>
{
    const [data, setData] = useState(null);
    const [IsPending , setIsPending] = useState(true)
    const [error , setError] = useState(null)
    
    useEffect(()=>{
        const abortCont = new AbortController();//associate it with a spacefic fetch request
        setTimeout(()=> {
            fetch(url , {signal : abortCont.signal})
        .then(res => {
            if(!res.ok)
            {
                throw Error("could not fetch the data")
            }
            return res.json();
        })
        .then(data =>{
            //console.log(data)
            setData(data)
            setIsPending(false)//if this is false the div loading won't show up
            setError(null)
        })
            .catch(err=>{//catching any error 
            if(err.name === 'AbortError')
            {
                console.log("fetch aborted")
            } else{
                setError(err.message)
                setIsPending(false)
            }
            
            })
        }, 1000);// 1 sc then we will see our blogs

        return (()=> abortCont.abort());//when we move around home and new blog this function will stop the fetch that's why we call cleanup
    }, [url]);//when ever the url changes the function will rerender itself

    return {data,IsPending,error}
}




export default useFetch