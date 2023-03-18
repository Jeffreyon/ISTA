import React from "react";
import type { ReactElement } from "react";
import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";
import Image from "next/image";

import userIcon from "../../../public/icons/user.svg";
import lockIcon from "../../../public/icons/lock.svg";

import { useForm } from "react-hook-form";
import { emailValidationRegex } from "@/lib/tokens.js";

// form fields needed
interface FormInputs {
  email: string;
  password: string;
}

export default function index() {
  // get form hooks
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInputs>();

  // handle the form submission
  const submitHandler = (data: any) => {
    // TODO: Validate user and log them in
    console.log(data);
  };

  return (
    <>
      <h2 className="text-2xl font-bold leading-tight text-black sm:text-4xl">
        Log in
      </h2>
      <p className="mt-2 text-base text-gray-600">
        Don’t have an account?{" "}
        <Link
          href="/sign-up"
          className=" text-primary hover:underline hover:text-primary-700 transition-colors duration-150"
        >
          Sign up
        </Link>
      </p>

      <form className="mt-8" onSubmit={handleSubmit(submitHandler)}>
        <div className="space-y-5">
          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              Your Email
            </label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Image src={userIcon} alt="" />
              </div>

              <input
                {...register("email", {
                  required: "Your email is required",
                  validate: (val) => {
                    if (!emailValidationRegex.test(val))
                      return "This email is invalid";
                  },
                })}
                placeholder="Eg: johndoe@gmail.com"
                className="input w-full pl-10"
              />
            </div>
            <div className="text-sm text-red-500 mt-2">
              {errors.email && <p>{errors.email?.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              {" "}
              Password{" "}
            </label>

            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
              <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                <Image src={lockIcon} alt="" />
              </div>

              <input
                type="password"
                {...register("password", {
                  required: "Your pasword is required",
                })}
                placeholder="Enter your password"
                className="input w-full pl-10"
              />
            </div>
            <div className="text-sm text-red-500 mt-2">
              {errors.password && <p>{errors.password?.message}</p>}
            </div>
          </div>

          <div>
            <a
              href="#"
              title=""
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              {" "}
              Forgot password?{" "}
            </a>
          </div>

          <div>
            <button type="submit" className="btn btn-primary w-full">
              Log in
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

index.getLayout = function (page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
