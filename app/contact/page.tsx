"use client";
import { FC, useEffect, useState } from "react";
import Navbar from "../../components/header";
import Footer from "../../components/Footer";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {useSession , signIn, signOut} from 'next-auth/react'
import { WavyBackground } from "../../components/ui/wavy-background";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Link from "next/link";
import WhatsAppIcon from "@/components/WhatsAppIcon";
interface ConnectProps {}

const Connect: FC<ConnectProps> = () => {

  
  const {data:session , status} = useSession()
// console.log(session)
  const [isSubtting, setIsSubtting] = useState(false);
  const [sucessmsg, setSucessmsg] = useState(false);
  //react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const Submission = async (data: FieldValues) => {
    const local='http://localhost:3000/'
    const domain = "https://protfolio-with-next-js.vercel.app/";
    const res = await fetch(`${domain}/api/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(data),
    });
    let respone = await res.json();
    setIsSubtting(true);

    toast.success("Message send successfully ");
    reset();


  };
 

  return (
    <>
      <Navbar />
      <main className="p-8 mt-40 lg:mt-22">
        <WavyBackground
          // backgroundFill={bgFill}
          waveWidth={50}
          className="mx-auto pb-4 max-w-[800px]"
        >
          <p className="text-2xl md:text-4xl lg:text-7xl font-bold inter-var text-center">
            Brief Intro
          </p>
          <div className="text-base md:text-lg mt-4 font-normal inter-var text-center">
            <p>Hello there! I&apos;m Dipak Khade</p>
            <p>
              I am fascinated by the possibilities it offers in building
              real-time communication applications, and I&apos;m always eager to
              dive deeper into its intricacies.
            </p>

            <p>
              With a focus on creating scalable websites, I bring a blend of
              creativity and technical prowess to every project. Whether
              it&apos;s optimizing performance, ensuring a seamless user
              experience, or diving into the world of WebSockets for real-time
              updates, I thrive on turning ideas into interactive digital
              experiences.
            </p>
          </div>

      

        <div className="ml-12 md:ml-96 mt-4">
          <div className=" hover:cursor-pointer flex text-xl mb-4 hover:text-blue-500">
            <FiMail />
            <p className="text-sm ml-4">dipakhade214@gmail.com</p>
          </div>
          <div>
            <ul className="flex mt-4 space-x-5 items-center md:mt-0 lg:mb-6 text-sm font-medium sm:mb-0 mb-6">
              <li>
                <Link href={"https://github.com/DipakKhade"} target="_blank">
                  <FaGithub className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </Link>
              </li>

              <li>
                <Link
                  href={"https://twitter.com/dipakKhade272"}
                  target="_blank"
                >
                  <FaXTwitter className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </Link>
              </li>

              <li>
                <Link
                  href={"https://www.linkedin.com/in/dipak-khade-715389252/"}
                  target="_blank"
                >
                  <FaLinkedin className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </Link>
              </li>

              <li>
                <Link
                  href={
                    "https://instagram.com/dipakkhade272?igshid=OGQ5ZDc2ODk2ZA=="
                  }
                  target="_blank"
                >
                  <FaInstagram className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md mt-6">

          <form onSubmit={handleSubmit(Submission)} className="space-y-8">
          <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium"
              >
                Your Name
              </label>
              <input
                {...register("subject")}
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-black/40 dark:bg-opacity-75"
               
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
              >
                Your email
              </label>

              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="text"
                id="email"
                name="email"
                className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-black/40 dark:bg-opacity-75"
                placeholder=""
                required
              />
            </div>
           
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium  "
              >
                Your Message
              </label>
              <textarea
                {...register("message")}
                id="message"
                name="message"
                className="block p-2.5 w-full text-sm rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-black/40 dark:bg-opacity-75"
                placeholder="Leave a message..."
              ></textarea>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center bg-blue-500 dark:bg-gray-800 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300  disabled:bg-gray-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
        </WavyBackground>

       

        <WhatsAppIcon/>
       
      </main>
     

      <Footer />


    </>
  );
};

export default Connect;
