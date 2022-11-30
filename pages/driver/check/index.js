function CheckListCard(props) {
    return (<div className="w-[95%] h-[15%] bg-white text-black m-auto rounded-lg">
        <div>
            {props.icon}
        </div>
        <p className="text-primaryMain text-xl">{props.name}</p>

    </div>);
}

const checkList = [
    {
        name: '1. เข้างาน / 5. เลิกงาน',
        svg: (<div></div>)
    }
];
export default function DriverCheck() {
    return (<div className="w-screen h-screen bg-primaryBase">
        <p className="text-center text-3xl pt-4 text-primaryMain">ตรวจสภาพรถ</p>
        {checkList.map((e, idx) => {
            return <CheckListCard key={idx} name={e.name} icon={e.svg}/>
        })}
    </div>);
}