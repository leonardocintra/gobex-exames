import Image from "next/image";
import Link from "next/link";
import { GiMicroscope } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image src={"/img/gobex.png"} width={100} height={60} alt="gobex" />
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2021 - {new Date().getFullYear()} | Gobex Exames —
          <a
            href="https://twitter.com/leonardoncintra"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            desenvolvido por @leonardoncintra
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            href={"https://www.instagram.com/gobexexames/"}
            target="_blank"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-7 h-7"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </Link>
        </span>
      </div>
    </footer>
  );
}
