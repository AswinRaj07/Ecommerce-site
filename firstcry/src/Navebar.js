import React from 'react'
import Header from './Header'
import Navebarlogout from './Navebarlogout'

function Navebar({auth}) {
    if(auth==0){
        return <Header/>  
    }else if(auth==1){
        return<Navebarlogout/>
    }
}

export default Navebar
