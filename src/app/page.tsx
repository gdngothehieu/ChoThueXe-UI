"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Dropdown } from "flowbite-react";
import Form from "./components/Form";
import Commitment from "./components/Commitment";
import GoogleApp from "./components/GoogleMap";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container mx-auto">
      <div
        className="h-100 overflow-hidden  justify-center"
        style={{ background: "#edf2f7" }}
      >
        <div
          className="bg-cover bg-center  text-white py-24 px-10 object-fill "
          style={{
            backgroundImage: "url(./hinhxe/xe4cho3.jpg)",
            height: "400px",
          }}
        >
          <div className="md:w-1/2">
            <p className="font-bold text-xl uppercase">Cho thuê xe</p>
            <p className="text-3xl font-bold mb-10">0939 208 128</p>

            <a
              href="#"
              className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
            >
              Xem ngay
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-pink-800">
        Ưu điểm của dịch vụ thuê xe hoa, xe cưới
      </h1>
      <div className="grid grid-cols-3 items-center gap-4">
        <div className="mb-4">
          <Image
            src="/hinhxe/xe7cho.jpg"
            className="h-auto w-full rounded-lg shadow-md shadow-black/20 dark:shadow-white/20"
            alt="Hollywood Sign on The Hill"
            width="1000"
            height="1000"
          />
        </div>
        <div className="mb-4">
          <Image
            src="/hinhxe/xe4cho3.jpg"
            className="h-auto w-full rounded-lg shadow-md shadow-black/20 dark:shadow-white/20"
            alt="Five Lands National Park"
            width="1000"
            height="1000"
          />
        </div>
        <div className="mb-4">
          <Image
            src="/hinhxe/xe4cho4.png"
            className="h-auto w-full rounded-lg shadow-md shadow-black/20 dark:shadow-white/20"
            alt="Los Angeles Skyscrapers"
            width="1000"
            height="1000"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <div className="mb-4">
          <Image
            src="/hinhxe/xe4cho5.jpg"
            className="h-auto w-full rounded-lg shadow-md shadow-black/20 dark:shadow-white/20"
            alt="Hollywood Sign on The Hill"
            width="1000"
            height="1000"
          />
        </div>
        <div className="mb-4">
          <Image
            src="/hinhxe/xe162.jpg"
            className="h-auto w-full rounded-lg shadow-md shadow-black/20 dark:shadow-white/20"
            alt="Five Lands National Park"
            width="1000"
            height="1000"
          />
        </div>
        <div className="mb-4">
          <Image
            src="/hinhxe/xe166.jpg"
            className="h-auto w-full rounded-lg shadow-md shadow-black/20 dark:shadow-white/20"
            alt="Los Angeles Skyscrapers"
            width="1000"
            height="1000"
          />
        </div>
      </div>
      <div className="flex ">
        <Commitment />

        <div
          className="w-1/2 bg-cover bg-center  text-white py-40 px-10 object-fill "
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
          }}
        ></div>
      </div>
      <div className="flex mt-6">
        <Commitment />
        <div
          className="w-1/2 bg-cover bg-center  text-white py-40 px-10 object-fill "
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
          }}
        >
          <Form />
        </div>
      </div>
      <div className="flex mt-6">
        <div
          className="w-1/2 bg-cover bg-center py-40 px-10 object-fill "
          style={{ backgroundImage: "url(./hinhxe/xe4cho3.jpg)" }}
        ></div>
        <div className="w-1/2 bg-cover bg-center  px-10 object-fill ">
          <h1 className="mb-2 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Liên hệ với chúng tôi{" "}
          </h1>
          <p className="mb-2 lg:mb-16 font-light  text-gray-500 dark:text-gray-400 sm:text-xl">
            Công ty
          </p>
          <p className="mb-2 lg:mb-16 font-light  text-gray-500 dark:text-gray-400 sm:text-xl">
            Địa chỉ: 52/5 T Đường Xuân Thới Đông 3, X. XTĐ, H. HM
          </p>
          <p className="mb-2 lg:mb-16 font-light  text-gray-500 dark:text-gray-400 sm:text-xl">
            Mobile: +0939 208 128
          </p>
        </div>
      </div>
      <div className="mt-8" style={{ height: "100px" }}>
        <GoogleApp />
      </div>
    </div>
  );
}
