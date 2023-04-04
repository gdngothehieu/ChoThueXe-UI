import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Dropdown } from "flowbite-react";
const inter = Inter({ subsets: ["latin"] });

export default function Commitment() {
  return (
    <div className="w-1/2  ">
      <p>Chúng tôi cam kết</p>
      <p>Chúng tôi cam kết</p>

      <p>Chúng tôi cam kết</p>
      <p>Chúng tôi cam kết</p>
      <p>Chúng tôi cam kết</p>
      <p>Chúng tôi cam kết</p>
    </div>
  );
}
