'use client'
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <nav className="flex justify-between p-5">
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
      <div>
        <Link href="/register" className="mx-2">
          Register
        </Link>
        {
          session?.user ? (
            <Link href="/api/auth/signout" className="mx-2">
              Signout
            </Link>)
            :
            (<Link href="/api/auth/signin" className="mx-2">
              Login
            </Link>
            )
        }

      </div>
    </nav>
  );
};

export default Navbar;