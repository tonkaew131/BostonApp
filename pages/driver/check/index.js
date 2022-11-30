function CheckListCard(props) {
    return (<div className="w-[95%] h-[15%] bg-white text-black m-auto rounded-lg flex">
        <div className="h-[90%] w-auto">
            {props.icon}
        </div>
        <p className="text-primaryMain text-xl">{props.name}</p>

    </div>);
}

const checkList = [
    {
        name: '1. เข้างาน / 5. เลิกงาน',
        svg: (<div className="w-full h-full"><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M13.55 42 4 32.45l9.6-9.6 2.1 2.1-6 6h32.45v3H9.7l5.95 5.95Zm20.9-16.85-2.1-2.1 5.95-5.95H5.85v-3H38.3l-6-6L34.4 6l9.6 9.6Z" />
        </svg></div>),

        name: '3. ตรวจสภาพรถ',
        svg: (<div>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-auto">
            <path d="M18.9 35.7L7.70001 24.5L9.85001 22.35L18.9 31.4L38.1 12.2L40.25 14.35L18.9 35.7Z" fill="black"/>
            </svg>
        </div>),
    }
];
export default function DriverCheck() {
    return (<div className="w-screen h-screen bg-primaryBase">
        <p className="text-center text-3xl pt-4 text-primaryMain">ตรวจสภาพรถ</p>
        <div className="py-5">
            <svg className="m-auto scale-150" width="245" height="33" viewBox="0 0 245 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="69.5" cy="16.5" r="16.5" fill="#D9D9D9" />
                <path d="M66.9034 21V20.233L69.7841 17.0795C70.1222 16.7102 70.4006 16.3892 70.6193 16.1165C70.8381 15.8409 71 15.5824 71.1051 15.3409C71.2131 15.0966 71.267 14.8409 71.267 14.5739C71.267 14.267 71.1932 14.0014 71.0455 13.777C70.9006 13.5526 70.7017 13.3793 70.4489 13.2571C70.196 13.1349 69.9119 13.0739 69.5966 13.0739C69.2614 13.0739 68.9688 13.1435 68.7188 13.2827C68.4716 13.419 68.2798 13.6108 68.1435 13.858C68.0099 14.1051 67.9432 14.3949 67.9432 14.7273H66.9375C66.9375 14.2159 67.0554 13.767 67.2912 13.3807C67.527 12.9943 67.848 12.6932 68.2543 12.4773C68.6634 12.2614 69.1222 12.1534 69.6307 12.1534C70.142 12.1534 70.5952 12.2614 70.9901 12.4773C71.3849 12.6932 71.6946 12.9844 71.919 13.3509C72.1435 13.7173 72.2557 14.125 72.2557 14.5739C72.2557 14.8949 72.1974 15.2088 72.081 15.5156C71.9673 15.8196 71.7685 16.1591 71.4844 16.5341C71.2031 16.9062 70.8125 17.3608 70.3125 17.8977L68.3523 19.9943V20.0625H72.4091V21H66.9034Z" fill="black" />
                <circle cx="175.5" cy="16.5" r="16.5" fill="#D9D9D9" />
                <path d="M172.699 19.2102V18.3409L176.534 12.2727H177.165V13.6193H176.739L173.841 18.2045V18.2727H179.006V19.2102H172.699ZM176.807 21V18.946V18.5412V12.2727H177.812V21H176.807Z" fill="black" />
                <circle cx="122.5" cy="16.5" r="16.5" fill="#D9D9D9" />
                <path d="M122.852 21.1193C122.29 21.1193 121.788 21.0227 121.348 20.8295C120.911 20.6364 120.563 20.3679 120.304 20.0241C120.048 19.6776 119.909 19.2756 119.886 18.8182H120.96C120.983 19.0994 121.08 19.3423 121.25 19.5469C121.42 19.7486 121.643 19.9048 121.919 20.0156C122.195 20.1264 122.5 20.1818 122.835 20.1818C123.21 20.1818 123.543 20.1165 123.832 19.9858C124.122 19.8551 124.349 19.6733 124.514 19.4403C124.679 19.2074 124.761 18.9375 124.761 18.6307C124.761 18.3097 124.682 18.027 124.523 17.7827C124.364 17.5355 124.131 17.3423 123.824 17.2031C123.517 17.0639 123.142 16.9943 122.699 16.9943H122V16.0568H122.699C123.045 16.0568 123.349 15.9943 123.611 15.8693C123.875 15.7443 124.081 15.5682 124.229 15.3409C124.379 15.1136 124.455 14.8466 124.455 14.5398C124.455 14.2443 124.389 13.9872 124.259 13.7685C124.128 13.5497 123.943 13.3793 123.705 13.2571C123.469 13.1349 123.19 13.0739 122.869 13.0739C122.568 13.0739 122.284 13.1293 122.017 13.2401C121.753 13.348 121.537 13.5057 121.369 13.7131C121.202 13.9176 121.111 14.1648 121.097 14.4545H120.074C120.091 13.9972 120.229 13.5966 120.487 13.2528C120.746 12.9062 121.084 12.6364 121.501 12.4432C121.922 12.25 122.384 12.1534 122.886 12.1534C123.426 12.1534 123.889 12.2628 124.276 12.4815C124.662 12.6974 124.959 12.983 125.166 13.3381C125.374 13.6932 125.477 14.0767 125.477 14.4886C125.477 14.9801 125.348 15.3991 125.089 15.7457C124.834 16.0923 124.486 16.3324 124.045 16.4659V16.5341C124.597 16.625 125.027 16.8594 125.337 17.2372C125.646 17.6122 125.801 18.0767 125.801 18.6307C125.801 19.1051 125.672 19.5312 125.413 19.9091C125.158 20.2841 124.808 20.5795 124.365 20.7955C123.922 21.0114 123.418 21.1193 122.852 21.1193Z" fill="black" />
                <circle cx="16.5" cy="16.5" r="16.5" fill="#00BDF8" />
                <path d="M17.9716 12.2727V21H16.9148V13.3807H16.8636L14.733 14.7955V13.7216L16.9148 12.2727H17.9716Z" fill="white" />
                <circle cx="228.5" cy="16.5" r="16.5" fill="#D9D9D9" />
                <path d="M228.631 21.1193C228.131 21.1193 227.68 21.0199 227.28 20.821C226.879 20.6222 226.558 20.3494 226.317 20.0028C226.075 19.6562 225.943 19.2614 225.92 18.8182H226.943C226.983 19.2131 227.162 19.5398 227.48 19.7983C227.801 20.054 228.185 20.1818 228.631 20.1818C228.989 20.1818 229.307 20.098 229.585 19.9304C229.866 19.7628 230.087 19.5327 230.246 19.2401C230.408 18.9446 230.489 18.6108 230.489 18.2386C230.489 17.858 230.405 17.5185 230.237 17.2202C230.072 16.919 229.845 16.6818 229.555 16.5085C229.266 16.3352 228.935 16.2472 228.562 16.2443C228.295 16.2415 228.021 16.2827 227.74 16.3679C227.459 16.4503 227.227 16.5568 227.045 16.6875L226.057 16.5682L226.585 12.2727H231.119V13.2102H227.472L227.165 15.7841H227.216C227.395 15.642 227.619 15.5241 227.889 15.4304C228.159 15.3366 228.44 15.2898 228.733 15.2898C229.267 15.2898 229.743 15.4176 230.161 15.6733C230.581 15.9261 230.911 16.2727 231.149 16.7131C231.391 17.1534 231.511 17.6562 231.511 18.2216C231.511 18.7784 231.386 19.2756 231.136 19.7131C230.889 20.1477 230.548 20.4915 230.114 20.7443C229.679 20.9943 229.185 21.1193 228.631 21.1193Z" fill="black" />
                <line x1="33" y1="16.5" x2="53" y2="16.5" stroke="white" />
                <line x1="86" y1="16.5" x2="106" y2="16.5" stroke="white" />
                <line x1="192" y1="16.5" x2="212" y2="16.5" stroke="white" />
                <line x1="139" y1="16.5" x2="159" y2="16.5" stroke="white" />
            </svg>
        </div>

        <div>

        </div>
        {checkList.map((e, idx) => {
            return <CheckListCard key={idx} name={e.name} icon={e.svg} />
        })}
    </div>);
}