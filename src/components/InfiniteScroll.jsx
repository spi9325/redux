
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"

export const InfiniteScroll = (allProducts)=>{
    const [val,setVal] = useState([ ... new Array(40)]);
    const [loading,setLoading] = useState(false);
    
    // function handelScroll(e){
    //     let scrollHeight = e.target.scrollHeight;
    //     let scrollTop = e.target.scrollTop
    //     let clientHeight = e.target.clientHeight
        
    //     let remainingScroll = scrollHeight-(scrollTop + clientHeight);
    //     const thresh = 20;
    //     if(remainingScroll < thresh){
    //         console.log("loadmore")
    //     }
    // }
    const listRef = useRef([]);
    useEffect(()=>{
        const observer = new IntersectionObserver(function (entry){
            
                if(entry[0].isIntersecting){
                    setLoading(true)
                    observer.unobserve(entry[0].target)
                    setTimeout(()=>{
                        setVal((prev)=>[...prev,...new Array(10)])
                        setLoading(false)
                    },2000)
                    
                }
        })
        const lastelm=listRef.current.at(-1);
        
        observer.observe(lastelm)
       return () =>{
        observer.disconnect()
       }
    },[val.length])

    return (
        <>
           {/* <div onScroll={handelScroll} className="bg-red-200 w-[500px] h-[500px] text-black overflow-y-auto">
                {
                    allProducts.allProducts.data.map((cur,index)=>(
                        <p key={index} className="">{cur.id}</p>
                    ))
                }
            </div>  */}
           <div  className="bg-red-200 w-[500px] h-[500px] text-black overflow-y-auto">
                {
                    val.map((cur,index)=>{
                        return <p ref={(el)=>listRef.current[index] = el} key={index} className="">{ index}</p>
                    })
                }
                {
                    loading ?"loading....." : null
                }
           </div> 
        </>
    )
}