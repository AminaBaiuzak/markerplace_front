"use client";

import FormInput from "@/components/FormInput";
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter();
  return (
    <div className="flex-1 flex">
      <div className="w-[45%] h-[100%] bg-[url('/auth_back.png')] bg-cover bg-center pl-11 pr-14 flex flex-col gap-[15px] pt-[10%] pb-[15%] justify-center">
        <p className="font-outfit font-semibold text-[22px] text-white">
          Register today and start enjoying the benefits
        </p>
        <div className="border-b-[3px] border-[#367193]"></div>
        <p className="font-outfit font-semibold text-[22px] text-white">
          Registration is free and gives you access to personalized offers and updates tailored to your business needs.
        </p>
        <div className="border-b-[3px] border-[#367193]"></div>
        <p className="font-outfit font-semibold text-[26px] text-white">Join our community today!</p>
      </div>
      <div className="h-[100%] flex-1 flex-col gap-[15px] pt-[10%] pb-[15%] flex items-center  shadow-md">
        <div>
          <p className="text-main font-outfit text-[24px] uppercase w-fit">Welcome to Duken</p>
          <p className="text-main font-outfit w-fit">
            Don't have an account yet?{" "}
            <a href="/registration" className="text-[#367193] underline">
              Sign up
            </a>
          </p>
        </div>
        <FormInput label="E-mail" id="e_mail" type="email" />
        <FormInput label="Password" id="password" type="password" />
        <div className="border-b border-black w-[50%]"></div>
        <button
          onClick={() => router.replace("/")}
          className="bg-[#367193] uppercase w-[50%] rounded-lg text-white font-montserrat font-semibold px-5 py-3"
        >
          Login
        </button>
      </div>
    </div>
  );
}
