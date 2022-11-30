import { useState } from "react";
import DriverAccident from "../../../components/DriverAccident";
import DriverNavBar from "../../../components/DriverNavBar";



export default function DriverMap() {
    const [accidentMenu, setAccidentMenu] = useState(false);

    function toggleMenu() {
        setAccidentMenu(!accidentMenu);

        console.log(accidentMenu);
    }

    return (
        <div className="w-screen h-screen bg-primaryBase">
            <div className="w-full h-[90%]">
                <iframe
                                                              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d61997.53670482409!2d100.49550318505099!3d13.788152872827336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x30e29ecde3aee521%3A0x9f43939a2caf2963!2sSiam%20Paragon%2C%20Rama%20I%20Road%2C%20Pathum%20Wan%2C%20Bangkok!3m2!1d13.746241099999999!2d100.5347402!4m5!1s0x30e29b73a5a2880d%3A0xda92a156e9f2b465!2sKmutnb%2C%201518%20Phibun%20Songkhram%20Rd%2C%20Wong%20Sawang%2C%20Bang%20Sue%2C%20Bangkok%2010800!3m2!1d13.8191481!2d100.5142331!5e0!3m2!1sen!2sth!4v1669738845598!5m2!1sen!2sth"
                    className="w-full h-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="z-50 fixed w-full h-full">
                <div className="absolute bg-red-500 rounded-full right-8 top-8" onClick={() => toggleMenu()}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="white">
                        <path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" />
                    </svg>
                </div>
            </div>
            <DriverNavBar className='absolute w-full bottom-0 z-50' index={1}/>
        </div>
    );
}