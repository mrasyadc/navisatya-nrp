import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import Table from "../components/Table";
import { useFocus } from "../hooks/useFocus";
import { useKeyPress } from "../hooks/useKeyPress";
const { studentsData } = require("../data/students.json");
import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";

export default function Home() {
  const [inputRef, setFocus] = useFocus();
  const altPressed = useKeyPress("Alt");
  const kPressed = useKeyPress("k");
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState(studentsData);

  useEffect(() => {
    if (altPressed && kPressed) {
      setFocus();
    }
  }, [kPressed, altPressed]);

  useEffect(() => {
    const results = studentsData.filter((student) => {
      return (
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.nrp.includes(searchTerm)
      );
    });
    setStudents(results);
  }, [searchTerm]);

  const onSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={true} />
      <div>
        <Head>
          <title>Navisatya NRP Finder</title>
          <meta
            name="description"
            content="NRP Finder App for Sistem Informasi ITS 2019 a.k.a Navisatya"
          />
        </Head>

        <main className="mt-20">
          <div className="text-center">
            <Image
              src="/ms-icon-310x310.png"
              width="100px"
              height="100px"
              alt="logo navisatya"
            />
          </div>

          <h1 className="text-5xl font-bold text-center">
            Navisatya <span className="underline">Student ID</span> Finder
          </h1>

          <p className="text-center mt-5">
            App and Design by {` `}
            <Link href={"https://github.com/mrasyadc"}>
              <a className="text-gray-600 hover:text-black">
                Muhammad Rasyad C
              </a>
            </Link>
            <br />
            Data preprocessed by {` `}
            <Link href={"https://github.com/farrelarrizal"}>
              <a className="text-gray-600 hover:text-black">Farrel Arrizal, </a>
            </Link>
            <Link href={"https://github.com/nicolaswonoadi"}>
              <a className="text-gray-600 hover:text-black">
                Alexander Nicolas Wonoadi,{" "}
              </a>
            </Link>
            <Link href={"https://github.com/evanradith"}>
              <a className="text-gray-600 hover:text-black">Evan Raditya</a>
            </Link>
          </p>

          <p className="text-center mt-5">
            Start searching by pressing{" "}
            <kbd className="bg-gray-100 p-1 rounded">Alt</kbd>+
            <kbd className="bg-gray-100 p-1 rounded">k</kbd>
          </p>

          <div className="mt-5">
            <div className="flex justify-center items-center">
              <input
                value={searchTerm}
                onChange={(e) => onSearch(e)}
                ref={inputRef}
                type="text"
                placeholder="Enter student id / name here"
                className="pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:border-blue-700 focus:ring-blue-700 placeholder:italic hover:border-black placeholder:text-slate-400 border-gray-200"
                name="search"
              />
              <svg
                className="w-4 h-4 fill-current text-gray-500 -ml-8 z-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
          </div>

          <div className="mt-5 flex justify-center">
            <Table students={students}></Table>
          </div>
        </main>
      </div>
    </>
  );
}
