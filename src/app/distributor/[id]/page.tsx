import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="pl-[110px] pr-[76px] pt-[30px] pb-[80px] bg-[#36719314] flex-1 flex">
      <div className="bg-white w-[50%] h-full rounded-lg pl-[30px] pr-[50px] border border-[#EBEBEE] shadow-md  pt-[13px]">
        <div className=" rounded-full w-[104px] h-[104px] flex justify-center items-center bg-[#FFA78D] overflow-hidden">
          <Image
            src="/profile_avatar.png"
            alt=""
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
            quality={100}
          />
        </div>
        <div className="bg-[#367193] w-[104px] rounded-xl text-center px-[8px] flex items-center py-[3px] mt-[-10px] relative">
          <span className=" uppercase font-montserrat text-xs font-bold text-white ">distributor</span>
        </div>
        <div className=" border border-[#00000026] rounded-[4px] shadow-sm pr-[8px] mt-[9px] font-outfit font-medium text-sm relative">
          <div className="py-[10px] flex flex-col justify-center pl-[8px]">
            <p className="text-[#1F1F1FB2]">Your company name</p>
            <p className="text-main">Arsen Inc.</p>
          </div>
          <div className="h-[1px] bg-gradient-to-r from-[#D9D9D9] to-white"></div>
          <div className="py-[10px] flex flex-col justify-center pl-[8px]">
            <p className="text-[#1F1F1FB2]">Your name</p>
            <p className="text-main">Arsen</p>
          </div>
          <div className="h-[1px] bg-gradient-to-r from-[#D9D9D9] to-white"></div>
          <div className="py-[10px] flex flex-col justify-center pl-[8px]">
            <p className="text-[#1F1F1FB2]">Email</p>
            <p className="text-main">duken@mail.com</p>
          </div>
          <div className="h-[1px] bg-gradient-to-r from-[#D9D9D9] to-white"></div>
          <div className="py-[10px] flex flex-col justify-center pl-[8px]">
            <p className="text-[#1F1F1FB2]">Company BIN</p>
            <p className="text-main">123456789123</p>
          </div>
          <div className="h-[1px] bg-gradient-to-r from-[#D9D9D9] to-white"></div>
          <div className="py-[10px] flex flex-col justify-center pl-[8px]">
            <p className="text-[#1F1F1FB2]">Phone</p>
            <p className="text-main">+7 777 77 77</p>
          </div>
          <button className="text-[#1F1F1FCC] bg-[#F0EFFA] rounded-[50px] px-[20px] py-[3px] absolute top-[10px] right-[8px]">
            Edit
          </button>
        </div>
        <Image src="/contributors.png" alt="" width={1900} height={0} className="w-[100%] mt-[25px]" />
        <Image src="/profilelist.png" alt="" width={1900} height={0} className="w-[100%] mt-[9px]" />
      </div>
      <div className="flex-1 rounded-lg overflow-hidden shadow-md">
        <Image src="/profile_right.png" alt="" width={1900} height={1900} className="w-[100%] h-[100%]" />
      </div>
    </div>
  );
}
