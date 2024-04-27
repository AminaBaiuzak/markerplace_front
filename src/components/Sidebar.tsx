"use client";

import { IoPersonOutline, IoListSharp, IoBarChartOutline, IoCubeOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useParams } from "next/navigation";

export default function Sidebar() {
  const [pageName, setPageName] = useState<"Profile" | "Statistics" | "Orders" | "My Stock">("My Stock");
  const pathname = usePathname();
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (pathname === `/distributor/${id}` || pathname === `/`) setPageName("Profile");
    if (pathname === "/statistics") setPageName("Statistics");
    if (pathname === "/orders") setPageName("Orders");
    if (pathname === "/my-stock") setPageName("My Stock");
  }, [pathname]);
  return (
    <div
      className="w-[81px] h-full bg-white hover:w-[300px] *:hover:w-[250px] transition-all duration-500 absolute overflow-hidden pl-5 pr-4 py-8 z-20"
      style={pathname === "/login" || pathname === "/registration" ? { display: "none" } : {}}
    >
      <div
        className="w-[46px] h-[46px] pl-[10px] pr-2 rounded-lg cursor-pointer transition-all duration-500 flex items-center mb-2 overflow-hidden"
        style={{ backgroundColor: pageName === "Profile" ? "#367193" : "transparent" }}
        onClick={() => {
          setPageName("Profile");
          router.push("/distributor/1");
        }}
      >
        <IoPersonOutline size={26} color={pageName === "Profile" ? "white" : "#9197B3"} className="overflow-visible" />
        <span
          className="ml-4 font-montserrat font-medium text-sm overflow-hidden flex-1"
          style={{ color: pageName === "Profile" ? "white" : "#9197B3" }}
        >
          Profile
        </span>
        {pageName === "Profile" ? <></> : <FaAngleRight size={13} color="#9197B3" />}
      </div>
      <div
        className="w-[46px] h-[46px] pl-[10px] pr-2 rounded-lg cursor-pointer transition-all duration-500 flex items-center mb-2 overflow-hidden"
        style={{
          backgroundColor: pageName === "Statistics" ? "#367193" : "transparent",
          display: pathname === "/" ? "none" : "flex",
        }}
        onClick={() => setPageName("Statistics")}
      >
        <IoBarChartOutline
          size={26}
          color={pageName === "Statistics" ? "white" : "#9197B3"}
          className="overflow-visible"
        />
        <span
          className="ml-4 font-montserrat font-medium text-sm overflow-hidden flex-1"
          style={{ color: pageName === "Statistics" ? "white" : "#9197B3" }}
        >
          Statistics
        </span>
        {pageName === "Statistics" ? <></> : <FaAngleRight size={13} color="#9197B3" />}
      </div>
      <div
        className="w-[46px] h-[46px] pl-[10px] pr-2 rounded-lg cursor-pointer transition-all duration-500 flex items-center mb-2 overflow-hidden"
        style={{
          backgroundColor: pageName === "Orders" ? "#367193" : "transparent",
          display: pathname === "/" ? "none" : "flex",
        }}
        onClick={() => setPageName("Orders")}
      >
        <IoListSharp size={26} color={pageName === "Orders" ? "white" : "#9197B3"} className="overflow-visible" />
        <span
          className="ml-4 font-montserrat font-medium text-sm overflow-hidden flex-1"
          style={{ color: pageName === "Orders" ? "white" : "#9197B3" }}
        >
          Orders
        </span>
        {pageName === "Orders" ? <></> : <FaAngleRight size={13} color="#9197B3" />}
      </div>
      <div
        className="w-[46px] h-[46px] pl-[10px] pr-2 rounded-lg cursor-pointer transition-all duration-500 flex items-center mb-2 overflow-hidden"
        style={{
          backgroundColor: pageName === "My Stock" ? "#367193" : "transparent",
          display: pathname === "/" ? "none" : "flex",
        }}
        onClick={() => setPageName("My Stock")}
      >
        <IoCubeOutline size={26} color={pageName === "My Stock" ? "white" : "#9197B3"} className="overflow-visible" />
        <span
          className="ml-4 font-montserrat font-medium text-sm text-nowrap overflow-hidden flex-1"
          style={{ color: pageName === "My Stock" ? "white" : "#9197B3" }}
        >
          My Stock
        </span>
        {pageName === "My Stock" ? <></> : <FaAngleRight size={13} color="#9197B3" />}
      </div>
    </div>
  );
}
