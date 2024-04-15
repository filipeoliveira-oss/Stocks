'use client'

import { SymbolOverview } from "react-ts-tradingview-widgets";
import { CompanyProfile } from "react-ts-tradingview-widgets";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
export default function Dashboard(){
    return(
        <div className="flex flex-col h-full w-full">
            <div className="flex flex-row w-full h-full">
                <div className="block flex-row h-full w-1/2 items-center justify-center  overflow-hidden">
                    <SymbolOverview colorTheme="dark"
                        chartType="candlesticks"
                        downColor="#ff0000"
                        borderDownColor="#ff0000"
                        wickDownColor="#ff0000"
                        dateFormat="dd MMM 'yy"
                        width='100%'
                        height='100%'
                        symbols={
                            [
                                ["Petrobras", "PETR4"]
                            ]
                        }
                        showFloatingTooltip
                        scalePosition="left"
                        scaleMode="Normal"
                        // autosize
                        isTransparent
                        
                        />
                </div>

                <div className="bg-primary-400 h-full " style={{width:'1px'}}></div>
                
                <div className="flex flex-col h-full w-1/2">
                    <div className="block h-1/2 w-full  overflow-hidden">
                        <CompanyProfile 
                            colorTheme="dark" 
                            height='100%'
                            width="100%"
                            symbol="PETR4"
                            // autosize
                            isTransparent
                        />
                    </div>
                    
                    <div className="bg-primary-400 w-full " style={{height:'1px'}}></div>
                    
                    <div className="block h-1/2 w-full overflow-hidden">
                        <TechnicalAnalysis 
                            colorTheme="dark" 
                            width="100%"
                            height={'110%'}
                            // autosize
                            symbol="PETR4"
                            isTransparent
                        />
                    </div>

                </div>
            </div>
           
        </div>
    )
}