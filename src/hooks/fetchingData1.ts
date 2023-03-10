import { useEffect, useState } from "react";

export function Fetching(url:string){
    const [data, setdata]=useState<any>()
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
setdata(data)
        })
    },[url]);

    return data;
}

