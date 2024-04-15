import MainTabs from "../main_tabs/mainTabs";
export default function Main(){
  

    return(
        <div className="w-full h-90p bg-black rounded-3xl main px-8 flex flex-col">
            <div className="flex w-full h-24 flex-row items-center justify-between">
                <div className="flex flex-row gap-4 items-center w-fit h-full">
                    <h1 className="text-white font-bold text-4xl">Tesla</h1>
                    <span className="text-zinc-500 font-bold text-xl">TSLA</span>
                </div>

                <div className="flex flex-row items-center h-full w-fit gap-8">
                    <button className="bg-primary-400 w-48 h-8 text-white rounded-2xl"><i className="pi pi-external-link flex items-center justify-center gap-4 ">Investor Relations</i></button>
                    <button className="bg-primary-400 rounded-full w-8 h-8 flex items-center justify-center"><i className="pi pi-star"/></button>
                </div>
            </div>

            <div className="h-full w-full">
                <MainTabs/>
            </div>

        </div>
    )
}