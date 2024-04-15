import Header from '@/components/header/header';
import 'primeicons/primeicons.css';
import SideBar from '@/components/sidebar/sidebar';
// import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import "primereact/resources/primereact.min.css";   
// import "primereact/resources/themes/lara-light-indigo/theme.css";

import Main from '@/components/main/main';

export default function App() {

  return (
    <div className="flex h-screen w-screen flex-col pr-4 pb-4 overflow-hidden">
      <Header />
      <div className="h-full w-full flex flex-row items-center">
        <SideBar/>
        <Main/>
      </div>
    </div>
  )
}

