import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import IconImage from '../public/icon.png'

export default function Home() {
  const [trackingId, setTrackingId] = useState('1234578');
  console.log(trackingId);

  return (
    <div className="bg-primaryBase w-screen h-screen text-2xl">
      <Image src={IconImage} alt='Icon' className="w-[40%] absolute left-1/2 top-[15%]  -translate-x-1/2 -translate-y-1/2"></Image>

      <div className="w-[90%] bg-primaryMain rounded-2xl m-auto py-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="ml-[10%] mb-[2%] text-white">รหัสติดตาม</p>
        <input onChange={(e) => setTrackingId(e.target.value)}
          className="bg-white text-black rounded-full px-5 py-3 m-auto flex w-[85%]" placeholder="1234-5678"></input>
        <br />
        <Link href={trackingId ? `customer/index?trackingId=${trackingId}` : '#'}>
          <button className="text-white bg-black rounded-full px-10 py-3 m-auto flex">
            ตรวจสอบ
          </button>
        </Link>
      </div>
      <Link href='driver/login'>
        <button className="text-black bg-white rounded-full px-5 py-3 absolute bottom-12 right-12">
          สำหรับคนขับ
        </button>
      </Link>
    </div>
  );
}
