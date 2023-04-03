"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Dropdown } from "flowbite-react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container mx-auto">
      <div
        className="h-400 overflow-hidden  justify-center"
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
        <div className="w-1/2  ">
          <p>Chúng tôi cam kết</p>
          <p>Chúng tôi cam kết</p>

          <p>Chúng tôi cam kết</p>
          <p>Chúng tôi cam kết</p>
          <p>Chúng tôi cam kết</p>
          <p>Chúng tôi cam kết</p>
        </div>
        <div
          className="w-1/2 bg-cover bg-center  text-white py-40 px-10 object-fill "
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
          }}
        ></div>
      </div>
      <div className="flex mt-6">
        <div className="w-1/2  ">
          <p>Chúng tôi cam kết</p>
          <p>Chúng tôi cam kết</p>

          <p>Chúng tôi cam kết</p>
          <p>Chúng tôi cam kết</p>
          <p>Chúng tôi cam kết</p>
          <p>Chúng tôi cam kết</p>
        </div>
        <div
          className="w-1/2 bg-cover bg-center  text-white py-40 px-10 object-fill "
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
          }}
        >
          <form>
            <div className="grid gap-6 mb-6 ">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Họ và Tên
                </label>
                <input
                  type="text"
                  id="full_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Họ và Tên"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Số Điện Thoại
                </label>
                <input
                  type="tel"
                  id="phone_number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Số Điện Thoại"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Địa chỉ"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <Dropdown label="Tỉnh/Thành Phố" dismissOnClick={false}>
                    <Dropdown.Item>Thành Phố Hồ Chí Minh</Dropdown.Item>
                  </Dropdown>
                </div>
                <div>
                  <Dropdown label="Quận/Huyện" dismissOnClick={false}>
                    <Dropdown.Item>Tân Bình</Dropdown.Item>
                  </Dropdown>
                </div>
                <div>
                  <Dropdown label="Phường/Xã" dismissOnClick={false}>
                    <Dropdown.Item>Tân Bình</Dropdown.Item>
                  </Dropdown>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Unique visitors (per month)
                </label>
                <input
                  type="number"
                  id="visitors"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Confirm password
              </label>
              <input
                type="password"
                id="confirm_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
