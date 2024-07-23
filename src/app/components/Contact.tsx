import React, { useRef, useState } from "react";
import LetterPullup from "./Ui/LetterAnimation/LetterPullUp";
import emailjs from "@emailjs/browser";
import Button from "./Ui/Button";
import Image from "next/image";
import GsapAnimation from "./Ui/GsapAnimation/GsapAnimation";
import toast from "react-hot-toast";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formRef.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_KEY,
        }
      );
      toast.success("Email Sent Successfully");
      formRef.current!.reset();
    } catch (error) {
      toast.error("Falied to send email");
    }
  };
  return (
    <div className="pt-10 pb-10">
      <div className="px-20">
        <div className=" mx-auto">
          <div className="text-7xl flex  font-Lora items-center justify-center pb-5 text-[#46f5d5]">
            <LetterPullup words="Contact" delay={0.7} />
          </div>
          <GsapAnimation />
          <div className="flex flex-col items-center lg:flex-row lg:justify-between pt-10">
            {/* Image */}
            <div className="gs_reveal reveal_left flex justify-center mb-10 lg:mb-0">
              <Image
                src="/contact.png"
                className="xl:w-[500px] xl:h-[500px] lg:w-[500px] lg:h-[500px] md:w-[450px] md:h-[450px] sm:w-[300px] sm:h-[300px] w-[300px] h-[300px]"
                width={500}
                height={500}
                alt="contact"
              />
            </div>
            {/* form */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="gs_reveal reveal_right w-full max-w-md lg:max-w-lg"
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="pb-3">
                  <h3 className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-1xl font-Lora font-medium text-white">
                    Let's work,
                    <span className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-1xl font-Lora font-medium text-white">
                      together!
                    </span>
                  </h3>
                </div>
                <div className="">
                  <div className="flex flex-col xl:flex-row lg:flex-row gap-2 md:w-[450px] sm:w-[450px] xl:w-full w-[300px]">
                    <input
                      name="user_name"
                      required
                      type="text"
                      placeholder="Name"
                      className="h-12 w-full border border-gray-300 text-white text-[14px] bg-transparent p-1"
                    />
                    <input
                      name="user_lastname"
                      required
                      type="text"
                      placeholder="Last name"
                      className="h-12 w-full border border-gray-300 text-white text-[14px] bg-transparent p-1"
                    />
                  </div>
                  <div className="pt-3  w-full">
                    <input
                      name="user_email"
                      required
                      type="email"
                      placeholder="Email"
                      className="h-12 w-full border border-gray-300 text-white text-[14px] bg-transparent p-1"
                    />
                  </div>
                  <div className="pt-3 w-full">
                    <input
                      name="user_phoneno"
                      required
                      type="number"
                      placeholder="Phone No"
                      className="h-12 w-full border border-gray-300 text-white text-[14px] bg-transparent p-1"
                    />
                  </div>
                  <div className="pt-3 w-full">
                    <textarea
                      name="user_message"
                      required
                      cols={20}
                      rows={10}
                      className="p-1 border border-gray-300 text-white text-[14px] bg-transparent w-full"
                      placeholder="Send Me a Message..."
                    ></textarea>
                  </div>
                </div>
                <div className="pt-3 w-full flex justify-center lg:justify-start">
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
