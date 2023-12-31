import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth/next";
import { signOut } from "next-auth/react";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Button } from "@/components/ui/button";
import { UserNav } from "./Profile";

const Navbar = async () => {
  const session = await getServerSession(options);
  return (
    <nav className="flex justify-between px-5 py-2 items-center border-b-2">
      <div className=" flex logo items-center justify-center">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="50" height="50" viewBox="0 0 487.000000 446.000000"
          preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,446.000000) scale(0.100000,-0.100000)"
            fill="#EA550C" stroke="none">
            <path d="M2270 4065 l0 -225 60 0 60 0 0 165 0 165 35 0 35 0 0 -165 0 -165 60 0 60 0 0 225 0 225 -155 0 -155 0 0 -225z" />
            <path d="M1165 4084 c-13 -24 -16 -40 -9 -49 222 -320 332 -562 381 -840 19
                    -110 13 -352 -12 -465 -28 -127 -85 -286 -150 -414 l-61 -123 29 -42 29 -42
                    53 30 c220 124 527 221 797 250 384 43 821 -47 1175 -240 40 -21 74 -39 76
                    -39 2 0 16 18 31 40 l27 41 -65 132 c-105 213 -161 415 -173 625 -17 302 97
                    640 337 1000 l69 102 -20 35 c-12 19 -24 35 -29 35 -4 0 -70 -27 -146 -61
                    -421 -185 -708 -279 -939 -310 -288 -38 -626 48 -1216 307 -80 35 -150 64
                    -155 64 -5 0 -18 -16 -29 -36z m686 -348 c275 -89 484 -122 674 -105 201 17
                    467 91 768 213 124 50 167 64 167 52 0 -2 -20 -40 -45 -85 -146 -259 -235
                    -560 -235 -794 0 -190 42 -402 118 -595 26 -68 36 -102 27 -102 -7 0 -37 11
                    -67 24 -287 127 -683 194 -988 167 -229 -21 -507 -89 -697 -172 -29 -13 -55
                    -21 -57 -18 -3 3 12 50 34 105 77 197 113 379 112 574 0 259 -78 537 -222 795
                    -28 49 -48 94 -46 101 3 8 57 -9 163 -53 87 -35 219 -83 294 -107z"/>
            <path d="M2092 3317 l-152 -162 42 -37 43 -37 127 133 c70 73 138 147 153 164 l26 31 -38 35 c-21 20 -40 36 -43 36 -3 0 -74 -73 -158 -163z" />
            <path d="M2600 3362 c-13 -15 -125 -133 -249 -262 -124 -130 -239 -250 -256 -269 l-30 -33 39 -34 c22 -19 42 -34 46 -34 7 0 553 567 558 580 1 4 -17 23 -41 43 l-44 36 -23 -27z" />
            <path d="M2572 2900 c-84 -88 -152 -163 -152 -168 0 -4 17 -25 38 -45 l38 -37 115 122 c63 68 133 142 154 166 l38 43 -39 40 -40 39 -152 -160z" />
            <path d="M2345 2285 c-5 -2 -29 -9 -51 -14 l-41 -11 -6 -66 c-2 -36 -6 -67 -8
                -68 -2 -2 -326 -135 -719 -296 -393 -161 -718 -295 -722 -299 -6 -6 2 -51 17
                -98 3 -9 17 -7 51 8 26 11 50 16 54 12 4 -4 33 -84 64 -178 82 -243 138 -352
                232 -453 86 -93 189 -165 349 -244 106 -53 333 -146 500 -206 l80 -28 3 -76 3
                -76 54 -36 c54 -36 55 -36 55 -13 0 67 90 2040 96 2090 3 31 4 57 2 56 -1 0
                -7 -2 -13 -4z m-123 -366 c-34 -815 -65 -1445 -70 -1450 -11 -11 -262 84 -262
                99 0 7 10 16 23 21 12 5 34 14 49 20 l27 10 -21 51 c-11 27 -24 50 -29 50 -5
                0 -54 -18 -109 -40 -55 -22 -109 -40 -120 -40 -26 0 -160 67 -160 80 0 13 33
                28 220 100 91 35 167 64 169 66 5 4 -30 94 -39 99 -4 2 -116 -38 -249 -90
                -133 -52 -244 -95 -247 -95 -12 0 -144 134 -144 146 0 7 60 36 133 64 398 156
                543 213 551 220 10 10 -23 100 -37 100 -6 0 -166 -61 -357 -135 -190 -74 -350
                -135 -356 -135 -10 0 -74 146 -74 168 0 12 -15 5 460 189 206 79 379 148 384
                153 10 10 -22 100 -35 100 -8 0 -372 -139 -704 -269 -71 -28 -135 -51 -142
                -51 -11 0 -53 110 -53 140 0 12 152 78 588 257 323 132 592 240 597 238 6 -1
                9 -29 7 -66z"/>
            <path d="M2495 2252 c3 -21 24 -442 45 -937 22 -495 43 -966 46 -1047 l7 -146
              53 35 53 35 3 76 3 76 93 33 c282 100 554 223 677 306 89 60 182 153 235 234
              54 82 96 179 165 378 27 77 52 144 56 149 7 8 21 6 93 -16 12 -4 38 94 28 103
              -4 4 -329 139 -723 300 l-716 293 -6 64 c-4 36 -8 67 -11 69 -2 2 -27 10 -55
              18 l-51 13 5 -36z m739 -506 c440 -180 586 -243 586 -256 0 -29 -42 -140 -52
              -140 -6 0 -196 72 -423 160 -227 88 -416 160 -421 160 -14 0 -48 -90 -38 -100
              5 -5 196 -80 424 -168 228 -88 416 -166 418 -172 6 -16 -60 -170 -72 -170 -5
              0 -165 61 -356 135 -190 74 -350 135 -355 135 -13 0 -49 -89 -40 -98 3 -4 158
              -66 343 -139 190 -74 338 -138 340 -145 3 -13 -100 -122 -131 -139 -10 -6 -94
              22 -258 86 -134 52 -246 91 -249 87 -11 -13 -43 -92 -39 -95 2 -2 78 -32 169
              -67 190 -73 220 -87 220 -101 0 -5 -36 -27 -80 -48 l-80 -39 -110 44 c-60 24
              -114 44 -119 44 -8 0 -41 -76 -41 -96 0 -5 19 -17 43 -25 71 -26 60 -39 -80
              -91 -71 -25 -131 -43 -134 -40 -4 4 -12 129 -18 277 -7 149 -21 461 -32 695
              -21 477 -23 553 -10 548 5 -1 272 -111 595 -242z"/>
          </g>
        </svg>
        <h3 className="mx-2 text-black">Skillpedia</h3>
      </div>
      <div className="flex items-center">
        {/* <Link
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
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Register</span>
        </Link> */}
        {session?.user ? (
          <div className="flex items-center">
            <p className="mx-3 text-">Welcome, {session?.user.name}</p>
            {/* <Link
              href="/api/auth/signout"
              className="mx-2 py-3 px-6 bg-stone-300 text-blue rounded"
            >
              Signout
            </Link> */}
            <UserNav />
          </div>
        ) : (
          <Button asChild >
            <Link
              href="/api/auth/signin"
              className="mx-2 py-3 px-6"
            >
              Login
            </Link>

          </Button>

        )}
      </div>
    </nav>
  );
};

export default Navbar;
