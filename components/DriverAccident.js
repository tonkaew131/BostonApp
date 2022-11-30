export default function DriverAccident(props) {
    return (
        <div className={`${props.className}`}>
            <div className="bg-black opacity-30 w-full h-full absolute" onClick={() => props.toggleMenu()} />
            <div className="bg-white text-black w-[80%] h-[50%] top-1/2 rounded-md left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                <p className="text-center text-2xl mt-4">รายงานอุบัติเหตุ</p>
                <div className="flex w-full h-[65%] mt-4">
                    <textarea className="w-[95%] h-full mx-auto text-black rounded-sm bg-gray-200"></textarea>
                </div>
                <div className="flex w-full mt-4">
                    <button className="bg-primaryMain text-white px-8 py-3 rounded-full m-auto">รายางาน</button>

                </div>
            </div>
        </div>
    );
}