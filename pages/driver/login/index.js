import Image from "next/image";
import Link from "next/link";

import IconImage from "../../../public/icon.png";
import ReturnImage from '../../../public/return.png';

export default function DriverLogin() {
    return (
        <div className="bg-primaryBase w-screen h-screen text-2xl">
            <Image
                src={IconImage}
                alt="Icon"
                className="w-[30%] absolute left-1/2 top-[15%]  -translate-x-1/2 -translate-y-1/2"
            ></Image>

            <div className="w-[90%] bg-primaryMain rounded-2xl m-auto py-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text-center text-4xl mb-4">สำหรับคนขับ</p>
                <div>
                    <p className="ml-[10%] mb-[2%] text-white">รหัสบัตรประชาชน</p>
                    <input
                        className="bg-white text-black rounded-full px-5 py-3 m-auto flex w-[85%]"
                        placeholder="1122334455123"
                    ></input>
                </div>
                <div className="mt-2">
                    <p className="ml-[10%] mb-[2%] text-white">เบอร์โทร</p>
                    <input
                        className="bg-white text-black rounded-full px-5 py-3 m-auto flex w-[85%]"
                        placeholder="123-456-7890"
                    ></input>
                </div>
                <br />
                <Link href="/driver/home">
                <button className="text-white bg-black rounded-full px-10 py-3 m-auto flex">
                    เข้าสู่ระบบ
                </button>
                </Link>
            </div>
            <Link href="/">
                <Image src={ReturnImage} alt="Return" className="absolute bottom-12 right-12 w-[10%]"></Image>
            </Link>
        </div>
    );
}
