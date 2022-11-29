import DriverNavBar from "../../../components/DriverNavBar"
export default function DriverHome() {
    return (
        <div className="bg-messegeBox w-screen h-screen">

            <div className="bg-primaryMain w-full h-20 absolute top-0 flex justify-center "> 
            <svg className="my-auto mr-10" width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.235 35.9734V44C31.727 44 39.4488 36.278 39.4488 26.786C39.4488 17.2945 31.727 9.57252 22.235 9.57252H15.9157L19.8122 5.67601L14.1368 0L0.551041 13.5856L14.1366 27.1708L19.812 21.4952L15.9157 17.5989H22.235C27.301 17.5989 31.4222 21.7202 31.4222 26.786C31.4222 31.8515 27.301 35.9734 22.235 35.9734Z" fill="white"/>
</svg>

            <svg className="align-middle mr-10 my-auto" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="22.5" cy="22.5" r="22.5" fill="#D9D9D9"/>
<g clip-path="url(#clip0_0_1)">
<path d="M23.0192 4.99995C22.4448 4.99995 21.8775 5.0855 21.3343 5.22155C21.0166 5.30208 20.7102 5.40784 20.4039 5.5318C20.2862 5.58003 20.1658 5.61028 20.0496 5.66476C20.0014 5.68721 19.9645 5.72991 19.9167 5.7534C19.6285 5.89605 19.3464 6.06122 19.0747 6.24093C19.0364 6.26561 18.9795 6.25992 18.9417 6.28525C18.8618 6.34005 18.7984 6.40466 18.7201 6.46246C18.4976 6.62216 18.264 6.76881 18.0552 6.95007C17.8649 7.12125 17.7015 7.3364 17.5234 7.52617C16.9205 8.14439 16.3979 8.7985 15.9721 9.56507C15.2411 10.8463 14.6954 12.2889 14.4653 13.7755C14.3543 13.7521 14.2524 13.7437 14.155 13.7755C13.4103 14.018 13.2267 15.4327 13.7118 16.9222C13.9964 17.7963 14.47 18.4844 14.9528 18.8723C15.6013 21.3937 16.9748 23.4956 18.7644 24.8117V26.274L17.3461 27.6923L14.5096 29.1105C12.2158 30.2466 9.93083 31.3868 7.63975 32.5229C6.37022 33.2887 5.87897 34.7921 5.99995 36.2019C6.05904 37.0897 5.73831 38.2257 6.62044 38.8172C7.4585 39.2483 8.45838 38.9675 9.36834 39.0384C12.0299 39.037 14.6846 39.0384 17.3461 39.0384C21.1315 39.0398 24.9069 39.0384 28.6923 39.0384C32.0493 39.0384 35.3964 39.0441 38.7535 39.0384C39.8427 38.9618 40.1448 37.8116 40.0384 36.911C40.0583 35.5892 40.1363 34.1085 39.108 33.0987C38.2684 32.2449 37.0742 31.9073 36.0502 31.3259C34.5455 30.5813 33.0322 29.8551 31.5288 29.1105L28.6923 27.6923L27.274 26.274V24.8117C29.0638 23.4956 30.4367 21.3937 31.0863 18.8723C31.5685 18.4843 32.0422 17.7961 32.3259 16.9222C32.8109 15.4327 32.628 14.018 31.8834 13.7755C31.7855 13.7437 31.6848 13.7521 31.5728 13.7755C31.343 12.2889 30.797 10.8463 30.0666 9.56507C29.6411 8.7985 29.1177 8.14439 28.515 7.52617C28.3363 7.3364 28.1732 7.12125 27.9831 6.95007C27.9746 6.94227 27.9477 6.95787 27.9392 6.95007C27.3832 6.45381 26.7663 6.07224 26.1224 5.7534C25.9593 5.67367 25.8004 5.59946 25.6345 5.5318C25.5153 5.48356 25.4005 5.44066 25.2799 5.39883C24.9182 5.27335 24.5481 5.15268 24.1708 5.08859C24.1425 5.08376 24.1112 5.09305 24.0829 5.08859C23.7297 5.03307 23.3808 4.99605 23.0192 4.99995Z" fill="#34495E"/>
<path d="M6 37.6202C6.03747 38.0457 6.17943 38.4711 6.62049 38.7547C7.45855 39.1802 8.45843 38.8967 9.36839 39.0385H17.3462H28.6923H38.7535C39.5704 38.8967 39.9477 38.3293 40.0385 37.6202H6Z" fill="#2C3E50"/>
</g>            
<defs>
<clipPath id="clip0_0_1">
<rect width="34.0385" height="34.0385" fill="white" transform="translate(6 5)"/>
</clipPath>
</defs>
</svg>
    
            <p className="text-3xl text-white my-auto">อธิชา เล็กสรรเสริญ</p>

            </div>
            <DriverNavBar className="absolute bottom-0 w-full"/>
        </div>
    );
}

// primary 