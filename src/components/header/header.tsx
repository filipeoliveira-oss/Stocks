import LogoSGV from "../../assets/svg/logo";


export default function Header(){
    return(
        <header className=" text-white flex flex-row justify-between w-full h-14 items-center pl-4">
            <div className="h-full w-64 text-pyellow-500" >
                <LogoSGV /> 
            </div>

            <div className="h-full flex items-center justify-center w-40r relative">
                <i className="absolute left-4 pi pi-search text-zinc-500"></i>
                <input className="bg-transparent border-2 text-white border-zinc-500 rounded-full h-3/4 w-full absolute right-0 outline-none pl-12 text-left" placeholder="Search Companies, ETFs, and Countries"></input>
            </div>

            <div className="h-full w-64 flex flex-row justify-center items-center gap-4">
                <button className="w-48 rounded-full h-3/4 text-black font-bold upgradeAction">Upgrade</button>
                <button className="pi pi-user w-10 rounded-full bg-primary-400 h-3/4 "></button>
            </div>
        </header>        
    )
}