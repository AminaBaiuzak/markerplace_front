"use client";
import Link from "next/link";
import Logout from "./Logout";
import { usePathname, useRouter } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header className="h-[116px] flex font-montserrat items-center border-b border-[#6A7188]">
      <Link href={""} className="text-4xl font-bold text-[#438DB8] absolute ml-32">
        Duken
      </Link>
      <div className=" flex-[5] flex justify-center items-center gap-6 text-lg  font-semibold text-[#666666]">
        <Link href={""}>Home</Link>
        <Link href={""}>Products </Link>
        <Link href={""}>About us</Link>
        <Link href={""}>Contact us</Link>
      </div>
      <div
        className={`${
          pathname === "/login" || pathname === "/registration" ? "hidden" : "flex"
        } flex-1 mr-6 justify-end`}
      >
        <div
          className="w-[47px] h-[38px] border border-[#B4B4B4] rounded items-center justify-center flex cursor-pointer"
          onClick={() => router.replace("/login")}
        >
          <Logout width={24} height={24} />
        </div>
      </div>
    </header>
  );
}
