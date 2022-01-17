import React, { PureComponent } from 'react'
import AppLayout from './components/AppLayout'
import MainPage from './components/MainPage';

class CoinApp extends PureComponent {
    render(){
        return(
            <AppLayout>
                <MainPage/>            
            </AppLayout>
        );
    }
}

/*
가상 서버 구성하기에 사용될 json데이터 
{
    "transactions" : [
        {
            "id" : 1,
            "code" : "BTX",
            "name" : "비트코인(BTX)",
            "totalPrice" : 12392130000,
            "currentPrice" : 1020000
        }
        {
            "id" : 2,
            "code" : "RTX",
            "name" : "리플(RTX)",
            "totalPrice" : 1230000,
            "currentPrice" : 20000
        }
    ]
} 
*/