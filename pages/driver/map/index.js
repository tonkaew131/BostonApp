import { useEffect, useRef, useState } from "react";
import { Geolocation } from '@capacitor/geolocation';

import DriverAccident from "../../../components/DriverAccident";
import DriverNavBar from "../../../components/DriverNavBar";


function distanceTwoPoints(lat1, lon1, lat2, lon2) {
    lat1 = lat1 * Math.PI / 180.0;
    lon1 = lon1 * Math.PI / 180.0;
    lat2 = lat2 * Math.PI / 180.0;
    lon2 = lon2 * Math.PI / 180.0;

    // radius of earth in metres
    const r = 6378100;

    // P
    const rho1 = r * Math.cos(lat1);
    const z1 = r * Math.sin(lat1);
    const x1 = rho1 * Math.cos(lon1);
    const y1 = rho1 * Math.sin(lon1);

    // Q
    const rho2 = r * Math.cos(lat2);
    const z2 = r * Math.sin(lat2);
    const x2 = rho2 * Math.cos(lon2);
    const y2 = rho2 * Math.sin(lon2);

    // Dot product
    const dot = (x1 * x2 + y1 * y2 + z1 * z2);
    const cos_theta = dot / (r * r);
    const theta = Math.acos(cos_theta);

    // Distance in Metres
    return r * theta;
}

export default function DriverMap() {
    const [accidentMenu, setAccidentMenu] = useState(false);
    const [speed, setSpeed] = useState('-');

    const [lastLocation, setLastLocation] = useState({
        lat: 0,
        lon: 0,
        timestamp: 0
    })

    const intervalId = useRef();

    function toggleMenu() {
        setAccidentMenu(!accidentMenu);

        console.log(accidentMenu);
    }

    const checkPermissions = async () => {
        let permissions = await Geolocation.checkPermissions();

        const locationPermission = permissions['location'] == 'granted' ? true : false;
        if (!locationPermission) {
            try {
                await Geolocation.requestPermissions('location');
                permissions = await checkPermissions();

                if (!permissions) return;
                return true;
            } catch (error) {
                return false;
            }
        }

        return true;
    }

    const getSpeed = async () => {
        const coordinates = await getCurrentPosition();
        const distance = distanceTwoPoints(coordinates.coords.latitude, coordinates.coords.longitude, lastLocation.lat, lastLocation.lon);

        const timeSecond = (coordinates.timestamp - lastLocation.timestamp) / 1000;
        const speedMps = distance / timeSecond;
        const speedKph = speedMps * 3600 / 1000;
        console.log('Speed: ', speedKph)

        setSpeed(Math.round(speedKph));
        return coordinates;
    }

    const [watchId, setWatchId] = useState();
    const getCurrentPositionWatch = async () => {
        if (watchId) {
            await Geolocation.clearWatch({id: watchId});
            setWatchId(null);
        }

        const _watchId = await Geolocation.watchPosition({
            enableHighAccuracy: true, timeout: 30000, maximumAge: Infinity
        }, (pos) => { });
        setWatchId(_watchId);

        await Geolocation.clearWatch({id: watchId});
    }

    const getCurrentPosition = async () => {
        const permission = await checkPermissions();
        if (!permission) {
            setSpeed('-');
            return;
        }

        // await getCurrentPositionWatch();
        const coordinates = await Geolocation.getCurrentPosition({
            enableHighAccuracy: true, timeout: 30000, maximumAge: Infinity
        });

        console.log('Getting Geolocation ...', coordinates.timestamp, coordinates.coords.latitude, coordinates.coords.longitude);
        return coordinates;
    };
    getCurrentPosition();

    useEffect(() => {
        checkPermissions();

        console.log('register interval')
        intervalId.current = setInterval(async () => {
            const coordinates = await getSpeed();

            setLastLocation({
                lat: coordinates.coords.latitude,
                lon: coordinates.coords.longitude,
                timestamp: coordinates.timestamp
            });
        }, 5000);

        return () => {
            clearInterval(intervalId.current);
            console.log('unregister interval');
        };
    }, []);

    return (
        <div className="w-screen h-screen bg-primaryBase">
            <div className="w-full h-[90%] relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d61997.53670482409!2d100.49550318505099!3d13.788152872827336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x30e29ecde3aee521%3A0x9f43939a2caf2963!2sSiam%20Paragon%2C%20Rama%20I%20Road%2C%20Pathum%20Wan%2C%20Bangkok!3m2!1d13.746241099999999!2d100.5347402!4m5!1s0x30e29b73a5a2880d%3A0xda92a156e9f2b465!2sKmutnb%2C%201518%20Phibun%20Songkhram%20Rd%2C%20Wong%20Sawang%2C%20Bang%20Sue%2C%20Bangkok%2010800!3m2!1d13.8191481!2d100.5142331!5e0!3m2!1sen!2sth!4v1669738845598!5m2!1sen!2sth"
                    className="w-full h-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="fixed bg-red-500 rounded-full right-8 top-8 z-50 w-min h-min" onClick={() => toggleMenu()}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="white"
                    className="z-50">
                    <path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" />
                </svg>
            </div>

            {/* Speed limit, current speed */}
            <div className="fixed bg-white text-black flex p-2 rounded-full top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl items-center">
                <div className="rounded-full border-2 border-red-500 p-1">60</div>
                <div className="text-center px-2">{speed}<br />
                    <p className="text-sm -mt-2">kph</p>
                </div>
            </div>

            <DriverNavBar className='absolute w-full bottom-0 z-50' index={1} />
            <DriverAccident className={`w-full h-full fixed top-0 left-0 z-50 ${accidentMenu ? 'block' : 'invisible'}`} toggleMenu={() => toggleMenu()} />
        </div>
    );
}