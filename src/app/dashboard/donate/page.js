'use client';
import '../../globals.css';
import Image from "next/image";

export default function Donate(){
    return(
        <div className="container">
        <div className="row mt-4">
        <div className="text-center">
            <h1>Support Our Chapter!</h1>
        </div>
        </div>
            <div className="row text-center">
                <div className="col-6">
                    <h2>Venmo</h2>
                    <Image src="/images/slg_venmo.png" alt="Venmo QR Code"width={370} height={370}/>
                    <a href="https://venmo.com/u/cwru_gammas" target="_blank"><h4>@cwru_gammas</h4></a>
                </div>
                <div className="col-6">
                <h2>Zelle</h2>
                <Image src="/images/slg_zelle.png" alt="Zelle QR Code"width={370} height={370}/>
                <h4>gjh68@case.edu</h4>
                </div>
            </div>            
        </div>
        
        
    )
}