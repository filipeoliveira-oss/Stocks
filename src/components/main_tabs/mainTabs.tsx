import { TabView, TabPanel } from 'primereact/tabview';
import Dashboard from './dashboard';

export default function MainTabs(){
    return(
        <div className="w-full h-full">
            <TabView className='w-full h-full'  panelContainerStyle={{backgroundColor:'transparent'}}>

                <TabPanel header='Dashboard' leftIcon='pi pi-objects-column mr-2' contentClassName='w-full h-full' contentStyle={{width:'100%', height:'70vh'}} headerStyle={{backgroundColor:'transparent'}}>
                    <Dashboard/>
                </TabPanel>

                <TabPanel header='Financials' leftIcon='pi pi-dollar mr-2'  contentClassName='w-full h-full' contentStyle={{width:'100%', height:'70vh'}} headerStyle={{backgroundColor:'transparent'}}>
                    Financials
                </TabPanel>

                <TabPanel header='KPIs' leftIcon='pi pi-key mr-2' contentClassName='w-full h-full' contentStyle={{width:'100%', height:'70vh'}} headerStyle={{ backgroundColor:'transparent'}}>
                    KPIs
                </TabPanel>

                <TabPanel header='Ratios' leftIcon='pi pi-chart-pie mr-2' contentClassName='w-full h-full' contentStyle={{width:'100%', height:'70vh'}} headerStyle={{backgroundColor:'transparent'}}>
                    Ratios
                </TabPanel>

                <TabPanel header='Transcripts' leftIcon='pi pi-file mr-2' contentClassName='w-full h-full' contentStyle={{width:'100%', height:'70vh'}} headerStyle={{backgroundColor:'transparent'}}>
                    Transcripts
                </TabPanel>

                <TabPanel header='Price' leftIcon='pi pi-chart-line mr-2' contentClassName='w-full h-full' contentStyle={{width:'100%', height:'70vh'}} headerStyle={{backgroundColor:'transparent'}}>
                    Price
                </TabPanel>

            </TabView>
        </div>
    )
}