import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth/next";
import { signOut } from "next-auth/react";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(options);
  return (
    <nav className="flex justify-between px-5 py-2 items-center border-b-2">
      <div className=" flex logo">
        <svg
          width="25"
          height="30"
          viewBox="0 0 25 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1124 26.9583V19.0351H23.7533V29.5996H0V19.0351H2.64091V26.9583H21.1124Z"
            fill="#BCBBBC"
          />
          <path
            d="M5.28491 24.317H18.4895V21.6761H5.28491V24.317ZM17.1195 2.86102e-05L15.0004 1.57607L22.8811 12.1713L25.0001 10.5952L17.1195 2.86102e-05ZM10.5694 6.24648L20.7159 14.6969L22.406 12.6675L12.2595 4.21713L10.5694 6.24648ZM7.25693 12.1189L19.227 17.6937L20.342 15.2997L8.37186 9.7249L7.25693 12.1189ZM5.54713 18.3063L18.4695 21.0222L19.0126 18.4377L6.09029 15.7218L5.54713 18.3063Z"
            fill="#F48023"
          />
        </svg>
        <h3 className="mx-2">Skillpedia</h3>
      </div>
      <div className="flex items-center">
        <Link
          href="/register"
          className="mx-2 py-3 px-4 text-white bg-orange-500 rounded flex items-center"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-1"
          >
            <path
              d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Register</span>
        </Link>
        {session?.user ? (
          <Link
            href="/api/auth/signout"
            className="mx-2 py-3 px-6 bg-stone-300 text-blue rounded"
          >
            Signout
          </Link>
        ) : (
          <Link
            href="/api/auth/signin"
            className="mx-2 py-3 px-6 bg-stone-300 text-blue rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
