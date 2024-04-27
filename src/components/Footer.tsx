import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-32 pt-16 pb-24 flex gap-8 border-t border-[#00000021]">
      <div className=" flex-1 flex-col justify-between flex">
        <p className=" text-main font-montserrat font-bold">Duken</p>
        <p className=" text-main font-outfit text-[#21212180]">
          © Copyright 2024 Duken Group,
          <br />
          Inc. All rights reserved. All registered  trademarks herein are the property of  their respective owners. 
        </p>
      </div>
      <div className=" flex-1 border-t border-[#14172133]">
        <p className=" text-main font-montserrat font-bold mt-4">Contact</p>
        <p className=" text-main font-outfit mt-8">Phone: 555-555-5555</p>
        <p className=" text-main font-outfit mt-2">Email: info@mydomain.com</p>
      </div>
      <div className=" flex-1 border-t border-[#14172133]">
        <p className=" text-main font-montserrat font-bold mt-4">Address</p>
        <p className=" text-main font-outfit mt-8">1234 Street, New York, NY 10002</p>
      </div>
      <div className=" flex-1 border-t border-[#14172133]">
        <p className=" text-main font-montserrat font-bold mt-4">Network</p>
        <div className="mt-8 flex gap-3">
          <Image src="/facebook.png" alt="" width={35} height={35} className="w-[35px] h-[35px]" />
          <Image src="/insta.png" alt="" width={35} height={35} className="w-[35px] h-[35px]" />
        </div>
      </div>
    </footer>
  );
}
