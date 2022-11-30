import Link from "next/link";
import DriverNavBar from "../../../components/DriverNavBar"

export default function DriverHome() {
    return (
        <div className="bg-white w-screen h-screen">
            <div className="bg-primaryMain w-full h-20 absolute top-0 flex justify-center ">
                <Link href="/driver/contact" className="flex ml-4">
                    <svg className="my-auto mr-4" width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.235 35.9734V44C31.727 44 39.4488 36.278 39.4488 26.786C39.4488 17.2945 31.727 9.57252 22.235 9.57252H15.9157L19.8122 5.67601L14.1368 0L0.551041 13.5856L14.1366 27.1708L19.812 21.4952L15.9157 17.5989H22.235C27.301 17.5989 31.4222 21.7202 31.4222 26.786C31.4222 31.8515 27.301 35.9734 22.235 35.9734Z" fill="white" />
                    </svg>
                </Link>

                <svg className="align-middle mr-4 my-auto" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22.5" cy="22.5" r="22.5" fill="#D9D9D9" />
                    <g clip-path="url(#clip0_0_1)">
                        <path d="M23.0192 4.99995C22.4448 4.99995 21.8775 5.0855 21.3343 5.22155C21.0166 5.30208 20.7102 5.40784 20.4039 5.5318C20.2862 5.58003 20.1658 5.61028 20.0496 5.66476C20.0014 5.68721 19.9645 5.72991 19.9167 5.7534C19.6285 5.89605 19.3464 6.06122 19.0747 6.24093C19.0364 6.26561 18.9795 6.25992 18.9417 6.28525C18.8618 6.34005 18.7984 6.40466 18.7201 6.46246C18.4976 6.62216 18.264 6.76881 18.0552 6.95007C17.8649 7.12125 17.7015 7.3364 17.5234 7.52617C16.9205 8.14439 16.3979 8.7985 15.9721 9.56507C15.2411 10.8463 14.6954 12.2889 14.4653 13.7755C14.3543 13.7521 14.2524 13.7437 14.155 13.7755C13.4103 14.018 13.2267 15.4327 13.7118 16.9222C13.9964 17.7963 14.47 18.4844 14.9528 18.8723C15.6013 21.3937 16.9748 23.4956 18.7644 24.8117V26.274L17.3461 27.6923L14.5096 29.1105C12.2158 30.2466 9.93083 31.3868 7.63975 32.5229C6.37022 33.2887 5.87897 34.7921 5.99995 36.2019C6.05904 37.0897 5.73831 38.2257 6.62044 38.8172C7.4585 39.2483 8.45838 38.9675 9.36834 39.0384C12.0299 39.037 14.6846 39.0384 17.3461 39.0384C21.1315 39.0398 24.9069 39.0384 28.6923 39.0384C32.0493 39.0384 35.3964 39.0441 38.7535 39.0384C39.8427 38.9618 40.1448 37.8116 40.0384 36.911C40.0583 35.5892 40.1363 34.1085 39.108 33.0987C38.2684 32.2449 37.0742 31.9073 36.0502 31.3259C34.5455 30.5813 33.0322 29.8551 31.5288 29.1105L28.6923 27.6923L27.274 26.274V24.8117C29.0638 23.4956 30.4367 21.3937 31.0863 18.8723C31.5685 18.4843 32.0422 17.7961 32.3259 16.9222C32.8109 15.4327 32.628 14.018 31.8834 13.7755C31.7855 13.7437 31.6848 13.7521 31.5728 13.7755C31.343 12.2889 30.797 10.8463 30.0666 9.56507C29.6411 8.7985 29.1177 8.14439 28.515 7.52617C28.3363 7.3364 28.1732 7.12125 27.9831 6.95007C27.9746 6.94227 27.9477 6.95787 27.9392 6.95007C27.3832 6.45381 26.7663 6.07224 26.1224 5.7534C25.9593 5.67367 25.8004 5.59946 25.6345 5.5318C25.5153 5.48356 25.4005 5.44066 25.2799 5.39883C24.9182 5.27335 24.5481 5.15268 24.1708 5.08859C24.1425 5.08376 24.1112 5.09305 24.0829 5.08859C23.7297 5.03307 23.3808 4.99605 23.0192 4.99995Z" fill="#34495E" />
                        <path d="M6 37.6202C6.03747 38.0457 6.17943 38.4711 6.62049 38.7547C7.45855 39.1802 8.45843 38.8967 9.36839 39.0385H17.3462H28.6923H38.7535C39.5704 38.8967 39.9477 38.3293 40.0385 37.6202H6Z" fill="#2C3E50" />
                    </g>
                    <defs>
                        <clipPath id="clip0_0_1">
                            <rect width="34.0385" height="34.0385" fill="white" transform="translate(6 5)" />
                        </clipPath>
                    </defs>
                </svg>



                {/* config here */}
                <p className="text-3xl text-white my-auto">อธิชา เล็กสรรเสริญ</p>
                
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-6 w-10 my-auto">
                    <g clip-path="url(#clip0_78_2)">
                        <path d="M53.364 40.908C51.356 37.112 44.383 32.996 44.076 32.816C43.18 32.306 42.245 32.036 41.37 32.036C40.069 32.036 39.004 32.632 38.359 33.716C37.339 34.936 36.074 36.362 35.767 36.583C33.391 38.195 31.531 38.012 29.473 35.954L17.987 24.467C15.942 22.422 15.754 20.539 17.355 18.176C17.579 17.867 19.005 16.601 20.225 15.58C21.003 15.117 21.537 14.429 21.771 13.585C22.082 12.462 21.853 11.141 21.119 9.854C20.946 9.558 16.828 2.584 13.034 0.576998C12.326 0.201998 11.528 0.0039978 10.728 0.0039978C9.41003 0.0039978 8.17003 0.517998 7.23803 1.449L4.70003 3.986C0.686029 7.999 -0.766971 12.548 0.379029 17.506C1.33503 21.638 4.12103 26.035 8.66103 30.574L23.366 45.279C29.112 51.025 34.59 53.939 39.648 53.939C39.648 53.939 39.648 53.939 39.649 53.939C43.369 53.939 46.837 52.358 49.954 49.241L52.491 46.704C54.033 45.163 54.383 42.833 53.364 40.908Z" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_78_2">
                            <rect width="53.942" height="53.942" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div className="flex">
                <div className="mt-32 ml-8">
                    <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                        <g clip-path="url(#clip0_4_393)">
                            <circle cx="30" cy="29" r="39" fill="#D9D9D9" />
                            <path d="M29.5 -0.000107596C28.5044 -0.000107596 27.5211 0.148194 26.5795 0.384007C26.0289 0.523591 25.4979 0.706909 24.9669 0.921767C24.7628 1.00538 24.5541 1.05781 24.3528 1.15224C24.2692 1.19115 24.2053 1.26517 24.1224 1.30588C23.6229 1.55314 23.1339 1.83944 22.6629 2.15093C22.5966 2.19371 22.498 2.18385 22.4323 2.22776C22.2939 2.32275 22.184 2.43472 22.0483 2.53493C21.6626 2.81173 21.2577 3.06593 20.8959 3.3801C20.566 3.67682 20.2828 4.04975 19.974 4.37868C18.929 5.45026 18.0231 6.58405 17.2851 7.91278C16.0181 10.1336 15.0721 12.634 14.6733 15.2108C14.4809 15.1703 14.3043 15.1558 14.1355 15.2108C12.8446 15.6312 12.5265 18.0834 13.3672 20.6651C13.8606 22.1802 14.6815 23.373 15.5183 24.0453C16.6425 28.4158 19.0231 32.059 22.125 34.3403V36.8749L19.6667 39.3332L14.75 41.7916C10.7742 43.7607 6.81356 45.7372 2.84237 47.7063C0.641841 49.0338 -0.209652 51.6396 4.37388e-05 54.0832C0.102468 55.6221 -0.45347 57.5913 1.07556 58.6164C2.52819 59.3637 4.26132 58.877 5.83859 58.9999C10.4519 58.9974 15.0534 58.9999 19.6667 58.9999C26.228 59.0023 32.7721 58.9999 39.3334 58.9999C45.1523 58.9999 50.9539 59.0097 56.7728 58.9999C58.6608 58.8671 59.1844 56.8734 59 55.3124C59.0345 53.0212 59.1697 50.4547 57.3874 48.7044C55.932 47.2245 53.8621 46.6394 52.0872 45.6315C49.4789 44.3409 46.8559 43.0822 44.25 41.7916L39.3334 39.3332L36.875 36.8749V34.3403C39.9775 32.059 42.3571 28.4158 43.483 24.0453C44.3189 23.3727 45.14 22.18 45.6316 20.6651C46.4724 18.0834 46.1553 15.6312 44.8646 15.2108C44.695 15.1558 44.5205 15.1703 44.3263 15.2108C43.928 12.634 42.9815 10.1336 41.7155 7.91278C40.978 6.58405 40.0709 5.45026 39.0261 4.37868C38.7163 4.04975 38.4336 3.67682 38.1042 3.3801C38.0895 3.36658 38.0428 3.39362 38.028 3.3801C37.0643 2.51993 35.995 1.85854 34.8789 1.30588C34.5962 1.16767 34.3208 1.03905 34.0332 0.921767C33.8267 0.838159 33.6276 0.763795 33.4186 0.691299C32.7918 0.473785 32.1501 0.26463 31.4962 0.153538C31.447 0.145168 31.393 0.161277 31.3438 0.153538C30.7317 0.0573092 30.1269 -0.00686801 29.5 -0.000107596V-0.000107596Z" fill="#34495E" />
                            <path d="M0 56.5417C0.0649467 57.2792 0.311004 58.0165 1.07552 58.5082C2.52815 59.2457 4.26127 58.7542 5.83854 59H19.6667H39.3333H56.7727C58.1887 58.7542 58.8427 57.7708 59 56.5417H0Z" fill="#2C3E50" />
                        </g>
                        <defs>
                            <clipPath id="clip0_4_393">
                                <rect width="59" height="59" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>


                <div className=" bg-black text-white w-56 h-32 rounded-md mt-32 ml-10 pt-5 pl-5">
                    <p className="mb-5 underline">อธิชา เล็กสรรเสริญ</p>
                    <p className="">ของส่งตรงเวลามากครับ</p>
                </div>
            </div>

            <div className="flex justify-end mr-8">
                <div className=" bg-black text-white w-32 h-24 rounded-md mt-32 ml-10 pt-5 pl-5">
                    <p className="underline">คุณ</p>
                    <p className="">ขอบคุณครับ</p>
                </div>
            </div>

            <div className="absolute bottom-28 right-1/2 left-1/2">
                <div className="flex justify-center ">
                    <div className="bg-messege_box w-16 h-16 rounded-md pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className="m-auto">
                            <path d="M24 34.7q3.6 0 6.05-2.45 2.45-2.45 2.45-6.1 0-3.6-2.45-6.025Q27.6 17.7 24 17.7q-3.65 0-6.075 2.425Q15.5 22.55 15.5 26.15q0 3.65 2.425 6.1Q20.35 34.7 24 34.7Zm0-3q-2.4 0-3.95-1.575-1.55-1.575-1.55-3.975 0-2.35 1.55-3.9Q21.6 20.7 24 20.7q2.35 0 3.925 1.55 1.575 1.55 1.575 3.9 0 2.4-1.575 3.975Q26.35 31.7 24 31.7ZM7 42q-1.2 0-2.1-.9Q4 40.2 4 39V13.35q0-1.15.9-2.075.9-.925 2.1-.925h7.35L18 6h12l3.65 4.35H41q1.15 0 2.075.925Q44 12.2 44 13.35V39q0 1.2-.925 2.1-.925.9-2.075.9Zm34-3V13.35h-8.75L28.6 9h-9.2l-3.65 4.35H7V39ZM24 26.2Z" />
                        </svg>
                    </div>

                    <div className=" h-16 bg-messege_box rounded-md mx-4">
                        <form>
                            <input type="text" className="bg-messege_box w-60 px-4 h-16 rounded-md text-black" placeholder="type something">

                            </input>
                        </form>
                    </div>

                    <div className="bg-messege_box w-16 h-16 rounded-md pt-4">
                        <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-auto">
                            <path d="M39.4038 0.345005C39.3988 0.342341 39.3972 0.338376 39.3938 0.335774C39.3839 0.329145 39.3739 0.327844 39.3639 0.321215C39.2756 0.260439 39.1708 0.220788 39.0676 0.177173C39.0343 0.163977 39.0093 0.141488 38.9744 0.129593C38.9694 0.128292 38.966 0.128292 38.9628 0.126929C38.9262 0.115034 38.8962 0.0939076 38.8595 0.0833136C38.7214 0.0423623 38.5749 0.0291042 38.4267 0.0185722C38.3818 0.0159082 38.3385 4.80605e-05 38.2935 4.80605e-05C38.1004 -0.00125296 37.9057 0.0238382 37.7159 0.0780475L1.09668 10.6514C0.515786 10.8192 0.0996057 11.229 0.0147156 11.7153C-0.0668195 12.2017 0.194483 12.6841 0.69883 12.9696L11.7695 19.2489L13.3325 27.9415C13.429 28.4702 13.9167 28.901 14.5692 29.0346C14.7057 29.0623 14.8455 29.0755 14.9821 29.0755C15.4964 29.0755 15.9941 28.8852 16.312 28.5469L20.2403 24.3902L30.5419 31.4056C30.8499 31.6145 31.2344 31.7241 31.6272 31.7241C31.8136 31.7241 32 31.699 32.1831 31.6488C32.7424 31.4902 33.1568 31.1056 33.2633 30.6404L39.973 1.58866C40.0829 1.11286 39.8499 0.644984 39.4038 0.345005ZM18.7356 21.5658L18.6157 21.7033L16.0607 24.4087L15.0936 19.0295L29.5365 9.08918L18.7356 21.5658Z" fill="black" />
                        </svg>

                    </div>
                </div>

            </div>

            <DriverNavBar className="absolute bottom-0 w-full" />
        </div>
    );
}

// primary 