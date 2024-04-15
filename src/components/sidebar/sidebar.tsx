'use client'
import { useEffect, useLayoutEffect, useState } from "react"
import { Carousel } from 'primereact/carousel';

interface starred{
    ticker: string,
    img: string
}

export default function SideBar(){

    const [starred, setStarred ] = useState<starred[]>([])

    useLayoutEffect(()=>{
        if(localStorage.getItem('starred')){
            var starred = localStorage.getItem('starred')
            // @ts-ignore
            setStarred(JSON.parse(starred))
        }

    },[])

    const starredTemplate = (stock:starred) =>{
        return(
            <h1 className=" w-full h-full flex items-center justify-center cursor-pointer">{stock.img}</h1>
        )
    }


    return(
        <div className="text-white flex flex-col h-full w-16 items-center gap-4 pt-28 relative px-12">
            <div className="w-full flex flex-col items-center h-76 gap-4">
                <span className="text-gray-400">Menu</span>

                <ul className="flex flex-col list-none gap-4 w-full h-fit">
                    <li className="w-full flex justify-center h-10 items-center cursor-pointer"><i className="pi pi-home text-2xl"/></li>
                    <li className="w-full flex justify-center h-10 items-center cursor-pointer"><i className="pi pi-filter text-2xl"/></li>
                    <li className="w-full flex justify-center h-10 items-center cursor-pointer"><i className="pi pi-chart-line text-2xl"/></li>
                    <li className="w-full flex justify-center h-10 items-center cursor-pointer"><i className="pi pi-calendar text-2xl"/></li>
                </ul>
            </div>

            <div className="w-24 flex flex-col items-center h-96">
                <span className="text-gray-400  bg-primary-500">Starred</span>
                <Carousel value={starred} numVisible={6} numScroll={6} orientation="vertical" showIndicators={false} itemTemplate={starredTemplate} data-side='sidebar' className="w-full"/>
            </div>

            <div className="absolute bottom-4 rounded-full bg-primary-400 w-10 h-10 flex items-center justify-center">
                <button>?</button>
            </div>
        </div>
    )
}