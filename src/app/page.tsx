import { IoSearch } from "react-icons/io5";
import { FaStar, FaRegStar } from "react-icons/fa6";
import Image from "next/image";
import { IoMdInformation } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const data = [
  {
    id: 1,
    companyName: "Eastern",
    user: "Sarah Eastern",
    status: "Active",
    role: "distributor",
  },
  {
    id: 2,
    companyName: "Eastern",
    user: "Sarah Eastern",
    status: "Active",
    role: "distributor",
  },
  {
    id: 3,
    companyName: "Eastern",
    user: "Sarah Eastern",
    status: "Active",
    role: "distributor",
  },
  {
    id: 4,
    companyName: "Eastern",
    user: "Sarah Eastern",
    status: "Active",
    role: "shop representative",
  },
  {
    id: 5,
    companyName: "Eastern",
    user: "Sarah Eastern",
    status: "Active",
    role: "shop representative",
  },
  {
    id: 6,
    companyName: "Eastern",
    user: "Sarah Eastern",
    status: "Active",
    role: "shop representative",
  },
];

export default function Home() {
  return (
    <div className="pl-[110px] pr-[30px] py-[30px] bg-[#36719314] flex-1">
      <div className="bg-white rounded-xl w-full min-h-[700px] px-[103px] py-[37px]">
        <div className="flex justify-between">
          <h1 className=" font-montserrat font-semibold text-[22px] text-main">Admin Panel</h1>
          <div className="flex gap-[8px]">
            <div className="w-[280px] h-[38px] bg-[#E7E7E7] rounded-[10px] px-[20px] flex items-center">
              <IoSearch size={24} color="#7E7E7E" />
              <input
                type="text"
                placeholder="Search"
                className="placeholder-[#B5B7C0] bg-transparent text-[14px] font-outfit w-full outline-none ml-[8px]"
              />
            </div>
            <div className="w-[280px] h-[38px] bg-[#E7E7E7] rounded-[10px] px-[20px] flex items-center">
              <span className="placeholder-[#B5B7C0] text-[14px] font-outfit mr-2">Sort by :</span>
              <select name="select" className="flex-1 bg-[#E7E7E7] h-full text-[14px] font-outfit">
                <option value="value1">
                  Newest
                </option>
                <option value="value2">Oldest</option>
              </select>
            </div>
          </div>
        </div>
        <table className="w-full mt-8 font-outfit text-main">
          <thead>
            <tr className="h-[48px] bg-[#FBFBFB] text-left">
              <th className="pl-3 w-10">
                <FaStar size={15} color="#D9D9D9" />
              </th>
              <th className=" pl-3 w-[18%]">Company Name</th>
              <th className=" pl-3 w-[23%]">User</th>
              <th className=" pl-3 w-[13%]">Status</th>
              <th className=" pl-3 w-[23%]">Role</th>
              <th className=" pl-3 w-[13%]">Actions</th>
            </tr>
          </thead>
          <tbody className="border-[2px] border-[#DFE1E6] font-montserrat text-sm">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="py-[4px] pl-3 border-x-[2px] border-[#DFE1E6]">
                  <FaRegStar size={15} color="#D9D9D9" />
                </td>
                <td className="py-[4px] pl-3 border-x-[2px] border-[#DFE1E6]">{item.companyName}</td>
                <td className="py-[4px] pl-3  flex gap-2 items-center">
                  <Image
                    src="/avatar_duken.png"
                    alt=""
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] rounded-full"
                  />
                  <span className="  text-[#2F65DD]">{item.user}</span>
                </td>
                <td className="py-[4px] pl-3 border-x-[2px] border-[#DFE1E6]">
                  <div className="py-[2px] px-2 bg-[#ECFFEE] rounded w-fit">
                    <span className=" font-montserrat font-bold text-sm text-[#00B112] uppercase">{item.status}</span>
                  </div>
                </td>
                <td className="py-[4px] pl-3 border-x-[2px] border-[#DFE1E6]">
                  <div
                    className="py-[2px] px-2 rounded w-fit"
                    style={{ backgroundColor: item.role === "distributor" ? "#367193" : "#FFC350" }}
                  >
                    <span className=" font-montserrat font-bold text-sm text-white uppercase">{item.role}</span>
                  </div>
                </td>
                <td className="py-[4px] pl-3 flex gap-1 overflow-hidden">
                  <div className="w-[25px] h-[25px] rounded-full flex items-center justify-center border-[2px] border-[#08A1FB] overflow-hidden">
                    <IoMdInformation size={20} color="#08A1FB" />
                  </div>
                  <div className="w-[25px] h-[25px] bg-[#7E869E40] rounded-full flex items-center justify-center overflow-hidden">
                    <IoCloseSharp size={15} color="#222222" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
