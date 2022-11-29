import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

export default function CustomerHome() {
    const router = useRouter();
    const { trackingId } = router.query;

    const [id, setId] = useState();

    useEffect(() => {
        setId(trackingId);
    }, [trackingId]);

    return (
        <div className="bg-primaryBase w-screen h-screen text-white">
            <div className="h-[8%] w-full bg-primaryMain flex items-center text-2xl relative">
                <Link href="/">
                    <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#ffffff"><path d="M18 36 6.05 24.05 18 12.1l2.15 2.15-8.35 8.35H39V14h3v11.55H11.85l8.3 8.3Z" /></svg>

                </Link>
                <p className="m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">ลูกค้า</p>
            </div>
            <p className="text-center text-1xl py-3">รหัสติดตาม: {id}</p>
            <div className="w-[95%] m-auto h-[63%]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.327711346534!2d100.51212221454449!3d13.819349890303757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b73a5a2880d%3A0xda92a156e9f2b465!2sKmutnb!5e0!3m2!1sen!2sth!4v1669735048987!5m2!1sen!2sth"
                    allowfullscreen=""
                    className="w-full h-full rounded-lg"
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="bg-white text-black w-[95%] m-auto mb-0 rounded-lg mt-2">
                <div className="flex items-center">
                    <div className="w-full ml-5 m-auto py-3">
                        <p>ข้อมูลคนขับมูล</p>
                        <p>ชื่อ-นามสกุล</p>
                        <p>เบอร์โทร</p>
                        <p>ทะเบียนรถ</p>
                    </div>
                    <svg className="mr-10" width="71" height="68" viewBox="0 0 71 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_72)">
                            <path d="M35.5 -0.000109526C34.3019 -0.000109526 33.1185 0.170814 31.9855 0.442599C31.3228 0.603475 30.6838 0.814757 30.0448 1.06239C29.7993 1.15875 29.5481 1.21919 29.3058 1.32802C29.2053 1.37287 29.1283 1.45818 29.0286 1.5051C28.4275 1.79008 27.8391 2.12005 27.2723 2.47906C27.1924 2.52836 27.0738 2.517 26.9948 2.5676C26.8282 2.67708 26.696 2.80614 26.5327 2.92162C26.0685 3.24066 25.5813 3.53362 25.1458 3.89572C24.7488 4.23771 24.408 4.66752 24.0365 5.04662C22.7789 6.28167 21.6887 7.58841 20.8006 9.11982C19.2759 11.6795 18.1375 14.5612 17.6577 17.5311C17.4261 17.4844 17.2136 17.4677 17.0104 17.5311C15.457 18.0156 15.0742 20.8419 16.0859 23.8175C16.6797 25.5636 17.6675 26.9384 18.6745 27.7133C20.0273 32.7504 22.8922 36.9494 26.625 39.5787V42.4999L23.6667 45.3332L17.75 48.1666C12.9655 50.4361 8.19931 52.7141 3.42042 54.9836C0.772324 56.5135 -0.252354 59.5169 -7.88644e-06 62.3332C0.123248 64.1069 -0.545761 66.3764 1.29426 67.5579C3.04234 68.4192 5.12797 67.8582 7.02603 67.9999C12.5776 67.997 18.1151 67.9999 23.6667 67.9999C31.5625 68.0027 39.4375 67.9999 47.3333 67.9999C54.3357 67.9999 61.3174 68.0112 68.3197 67.9999C70.5917 67.8469 71.2219 65.549 71 63.7499C71.0414 61.1092 71.2041 58.1512 69.0593 56.1339C67.308 54.4282 64.8171 53.7539 62.6812 52.5922C59.5424 51.1047 56.3858 49.6541 53.25 48.1666L47.3333 45.3332L44.375 42.4999V39.5787C48.1084 36.9494 50.9721 32.7504 52.327 27.7133C53.3328 26.9381 54.3209 25.5634 54.9126 23.8175C55.9243 20.8419 55.5427 18.0156 53.9896 17.5311C53.7854 17.4677 53.5754 17.4844 53.3417 17.5311C52.8624 14.5612 51.7235 11.6795 50.2 9.11982C49.3125 7.58841 48.2208 6.28167 46.9635 5.04662C46.5908 4.66752 46.2506 4.23771 45.8542 3.89572C45.8364 3.88014 45.7802 3.91131 45.7625 3.89572C44.6028 2.90434 43.3159 2.14206 41.9728 1.5051C41.6326 1.34581 41.3013 1.19757 40.9552 1.06239C40.7067 0.966029 40.467 0.88032 40.2156 0.796765C39.4612 0.546072 38.6891 0.305012 37.9022 0.176974C37.843 0.167326 37.7779 0.185893 37.7187 0.176974C36.9821 0.0660658 36.2544 -0.00790119 35.5 -0.000109526Z" fill="#34495E" />
                            <path d="M0 65.1667C0.0781562 66.0167 0.374259 66.8665 1.29427 67.4331C3.04235 68.2831 5.12797 67.7167 7.02604 68H23.6667H47.3333H68.3197C70.0238 67.7167 70.8107 66.5834 71 65.1667H0Z" fill="#2C3E50" />
                        </g>
                        <defs>
                            <clipPath id="clip0_8_72">
                                <rect width="71" height="68" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <p className="text-center">คะแนน</p>
                <svg className="m-auto" width="175" height="35" viewBox="0 0 175 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 1.61804L20.9535 12.2467L21.0657 12.5922H21.429L32.6046 12.5922L23.5634 19.1611L23.2695 19.3746L23.3817 19.7201L26.8352 30.3488L17.7939 23.7799L17.5 23.5664L17.2061 23.7799L8.16481 30.3488L11.6183 19.7201L11.7305 19.3746L11.4366 19.1611L2.39535 12.5922L13.571 12.5922H13.9343L14.0465 12.2467L17.5 1.61804Z" fill="#FFDA16" stroke="#E0BD04" />
                    <path d="M52.5 1.61804L55.9535 12.2467L56.0657 12.5922H56.429L67.6046 12.5922L58.5634 19.1611L58.2695 19.3746L58.3817 19.7201L61.8352 30.3488L52.7939 23.7799L52.5 23.5664L52.2061 23.7799L43.1648 30.3488L46.6183 19.7201L46.7305 19.3746L46.4366 19.1611L37.3954 12.5922L48.571 12.5922H48.9343L49.0465 12.2467L52.5 1.61804Z" fill="#FFDA16" stroke="#E0BD04" />
                    <path d="M87.5 1.61804L90.9535 12.2467L91.0657 12.5922H91.429L102.605 12.5922L93.5634 19.1611L93.2695 19.3746L93.3817 19.7201L96.8352 30.3488L87.7939 23.7799L87.5 23.5664L87.2061 23.7799L78.1648 30.3488L81.6183 19.7201L81.7305 19.3746L81.4366 19.1611L72.3954 12.5922L83.571 12.5922H83.9343L84.0465 12.2467L87.5 1.61804Z" fill="#FFDA16" stroke="#E0BD04" />
                    <path d="M122.5 1.61804L125.953 12.2467L126.066 12.5922H126.429L137.605 12.5922L128.563 19.1611L128.269 19.3746L128.382 19.7201L131.835 30.3488L122.794 23.7799L122.5 23.5664L122.206 23.7799L113.165 30.3488L116.618 19.7201L116.731 19.3746L116.437 19.1611L107.395 12.5922L118.571 12.5922H118.934L119.047 12.2467L122.5 1.61804Z" fill="#FFDA16" stroke="#E0BD04" />
                    <path d="M157.5 1.61804L160.953 12.2467L161.066 12.5922H161.429L172.605 12.5922L163.563 19.1611L163.269 19.3746L163.382 19.7201L166.835 30.3488L157.794 23.7799L157.5 23.5664L157.206 23.7799L148.165 30.3488L151.618 19.7201L151.731 19.3746L151.437 19.1611L142.395 12.5922L153.571 12.5922H153.934L154.047 12.2467L157.5 1.61804Z" fill="#FFDA16" stroke="#E0BD04" />
                </svg>

            </div>
        </div>
    );
}