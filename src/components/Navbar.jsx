import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <>
            <section className="flex w-full h-fit px-[24px] py-[22px] justify-between sticky top-0 z-10 bg-white border-b-[1px] border-[#1864B5] ">
                <div>
                    <img src="../assets/Qollab.png" alt="" className="w-[100px]"/>
                </div>
                <div>
                    <ul className="flex flex-row">
                        <li className="font-regular text-[#1864B5] text-[20px] mx-[20px]">
                            <Link>Home</Link>
                        </li>
                        <li className="font-regular text-[#1864B5] text-[20px] mx-[20px]">
                            <Link>Analytics</Link>
                        </li>
                        <li className="font-regular text-[#1864B5] text-[20px] mx-[20px]">
                            <Link>Room</Link>
                        </li>
                        <li className="font-regular text-[#1864B5] text-[20px] mx-[20px]">
                            <Link>History</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="bg-[#1864B5] font-medium py-1 px-4 rounded-xl -text-primary-100">
                        Login
                    </button>
                </div>
            </section>
        </>
    )
}

export default Navbar