import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Dropdown } from "flowbite-react";
const inter = Inter({ subsets: ["latin"] });

export default function Form() {
  return (
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
          <div className="mr-10">
            <Dropdown label="Tỉnh/Thành Phố" dismissOnClick={false}>
              <Dropdown.Item>Thành Phố Hồ Chí Minh</Dropdown.Item>
            </Dropdown>
          </div>
          <div className="mr-10">
            <Dropdown label="Quận/Huyện" dismissOnClick={false}>
              <Dropdown.Item>Tân Bình</Dropdown.Item>
            </Dropdown>
          </div>
          <div className="mr-10">
            <Dropdown label="Phường/Xã" dismissOnClick={false}>
              <Dropdown.Item>Tân Bình</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <div>
            <Dropdown
              label="Bạn muốn đặt xe bao nhiêu chỗ"
              dismissOnClick={false}
            >
              <Dropdown.Item>Xe 4 chỗ</Dropdown.Item>
              <Dropdown.Item>Xe 7 chỗ</Dropdown.Item>
              <Dropdown.Item>Xe 16 chỗ</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
