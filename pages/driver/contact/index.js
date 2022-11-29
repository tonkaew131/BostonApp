import DriverNavBar from "../../../components/DriverNavBar";

function ChatBox(props) {
    return (<div className={`flex ${props.index % 2 ? 'bg-gray-500' : 'bg-gray-600'} py-3`}>
        <div className="mx-4">
            <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="39" cy="39" r="39" fill="#D9D9D9" />
                <g clip-path="url(#clip0_0_1)">
                    <path d="M38.5 9.99989C37.5044 9.99989 36.5211 10.1482 35.5795 10.384C35.0289 10.5236 34.4979 10.7069 33.9669 10.9218C33.7628 11.0054 33.5541 11.0578 33.3528 11.1522C33.2692 11.1912 33.2053 11.2652 33.1224 11.3059C32.6229 11.5531 32.1339 11.8394 31.6629 12.1509C31.5966 12.1937 31.498 12.1839 31.4323 12.2278C31.2939 12.3227 31.184 12.4347 31.0483 12.5349C30.6626 12.8117 30.2577 13.0659 29.8959 13.3801C29.566 13.6768 29.2828 14.0498 28.974 14.3787C27.929 15.4503 27.0231 16.584 26.2851 17.9128C25.0181 20.1336 24.0721 22.634 23.6733 25.2108C23.4809 25.1703 23.3043 25.1558 23.1355 25.2108C21.8446 25.6312 21.5265 28.0834 22.3672 30.6651C22.8606 32.1802 23.6815 33.373 24.5183 34.0453C25.6425 38.4158 28.0231 42.059 31.125 44.3404V46.8749L28.6667 49.3332L23.75 51.7916C19.7742 53.7607 15.8136 55.7372 11.8424 57.7063C9.64184 59.0338 8.79035 61.6396 9.00004 64.0832C9.10247 65.6221 8.54653 67.5913 10.0756 68.6164C11.5282 69.3637 13.2613 68.877 14.8386 68.9999C19.4519 68.9974 24.0534 68.9999 28.6667 68.9999C35.228 69.0023 41.7721 68.9999 48.3334 68.9999C54.1523 68.9999 59.9539 69.0097 65.7728 68.9999C67.6608 68.8671 68.1844 66.8734 68 65.3124C68.0345 63.0212 68.1697 60.4547 66.3874 58.7044C64.932 57.2245 62.8621 56.6394 61.0872 55.6315C58.4789 54.3409 55.8559 53.0822 53.25 51.7916L48.3334 49.3332L45.875 46.8749V44.3404C48.9775 42.059 51.3571 38.4158 52.483 34.0453C53.3189 33.3727 54.14 32.18 54.6316 30.6651C55.4724 28.0834 55.1553 25.6312 53.8646 25.2108C53.695 25.1558 53.5205 25.1703 53.3263 25.2108C52.928 22.634 51.9815 20.1336 50.7155 17.9128C49.978 16.584 49.0709 15.4503 48.0261 14.3787C47.7163 14.0498 47.4336 13.6768 47.1042 13.3801C47.0895 13.3666 47.0428 13.3936 47.028 13.3801C46.0643 12.5199 44.995 11.8585 43.8789 11.3059C43.5962 11.1677 43.3208 11.0391 43.0332 10.9218C42.8267 10.8382 42.6276 10.7638 42.4186 10.6913C41.7918 10.4738 41.1501 10.2646 40.4962 10.1535C40.447 10.1452 40.393 10.1613 40.3438 10.1535C39.7317 10.0573 39.1269 9.99313 38.5 9.99989Z" fill="#34495E" />
                    <path d="M9 66.5417C9.06495 67.2792 9.311 68.0165 10.0755 68.5082C11.5281 69.2457 13.2613 68.7542 14.8385 69H28.6667H48.3333H65.7727C67.1887 68.7542 67.8427 67.7708 68 66.5417H9Z" fill="#2C3E50" />
                </g>
                <defs>
                    <clipPath id="clip0_0_1">
                        <rect width="59" height="59" fill="white" transform="translate(9 10)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
        <div className="text-white">
            <p className="">{props.name}</p>
            <p className="text-gray-400">{props.message}</p>
        </div>
    </div>)
}

const chatData = [
    { name: 'อธิชา เล็กสรรเสริญ', chat: 'มึงปาดหน้ารถกูออ' },
    { name: '', chat: '' },
    { name: '', chat: '' },
    { name: '', chat: '' },
]

export default function DriverContact() {
    return (<div className="w-screen h-screen bg-primaryBase">
        <div className="text-white bg-primaryMain py-5">
            <p className="text-xl ml-[10%]">ข้อความ</p>
        </div>
        {chatData.map((e, idx) => {
            return <ChatBox key={e.name} name={e.name} message={e.chat} index={idx}/>
        })}
        <DriverNavBar className='absolute bottom-0 w-full' />
    </div>);
}