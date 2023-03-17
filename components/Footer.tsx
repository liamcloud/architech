import Link from "next/link";
import { AiOutlineInstagram } from 'react-icons/ai';


export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
      <div className="text-gray-500">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition hover:text-gray-300 underline-offset-2"
        >
          Architech © 2023 - All rights reserved
        </a>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link
          href="https://instagram.com/architech"
          className="group"
          aria-label="TaxPal on Twitter"
        >
          <AiOutlineInstagram className="h-6 w-6 fill-gray-500 group-hover:fill-gray-300"/>
        </Link>
      </div>
    </footer>
  );
}
