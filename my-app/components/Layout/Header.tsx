"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0.8rem",
        backgroundColor: "#625d5d",
      }}
    >
      <Link href="/">
        <Image
          src="/VodafoneLogo.png"
          alt="Vodafone Logo"
          width={80}
          height={40}
          className="hover:pointer"
        />
      </Link>
        <Link href="/Mobile" className="p-4 hover:text-red-600">Mobile</Link>
        <Link href="/FiksTV" className="p-4 hover:text-red-600">Fiks & TV</Link>
        <Link href="/ShtëpiaJonë" className="p-4 hover:text-red-600">Shtëpia Jonë</Link>
        <Link href="/eShop" className="p-4 hover:text-red-600">eShop</Link>
        <Link href="/MyVodafoneApp" className="p-4 hover:text-red-600">My Vodafone App</Link>

        <Link href="/Login" className="ml-170 hover:text-red-600">Login</Link>
       <Link href="/Signup" className="ml-10 hover:text-red-600">Signup</Link>
    </header>
  );
}