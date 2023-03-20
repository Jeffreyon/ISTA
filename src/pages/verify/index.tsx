import React, { useRef, useState } from "react";
import type { ReactElement } from "react";
import AuthLayout from "@/components/AuthLayout";
import Image from "next/image";

import thumbsUpIcon from "../../../public/icons/thumbs-up.svg";
import Link from "next/link";
import useVerificationCode from "@/lib/useVerificationCode";

export default function index() {
  const modalTrigger = useRef<any>(null);
  let [code, inputStates, handleChange, handleKeyDown] = useVerificationCode(6);

  let inputElements = inputStates.map((state: any, ii: number) => {
    return (
      <div key={ii}>
        <input
          type="number"
          value={state.digit}
          className="digit input focus:outline-primary-400 w-full text-3xl font-semibold px-1 text-center placeholder-neutral-300 font-mono"
          onChange={(e) => handleChange(e, ii)}
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // TODO: Verify the user on the server, log code for now
    console.log(code);

    // show a success modal
    modalTrigger.current.click();
  };

  return (
    <>
      <h2 className="text-xl text-center font-bold leading-tight text-black sm:text-4xl">
        Verify your account
      </h2>
      <p className="mt-3 text-base text-gray-600 text-center">
        We've sent you an email with a 6-digit verification code. Enter the code
        below to verify your account and login
      </p>

      <form className="mt-4">
        <div className="space-y-5">
          <div className="grid grid-cols-6 gap-3">{inputElements}</div>

          <div>
            <button
              onClick={handleSubmit}
              className="btn btn-primary w-full disabled:bg-neutral-200"
              disabled={code == null ?? true}
            >
              Continue
            </button>
          </div>
          <div>
            <p className="text-center text-base">
              Didn’t receive an email?{" "}
              <a
                href="#"
                className=" text-primary hover:underline hover:text-primary-700 transition-colors duration-150"
              >
                Resend Code
              </a>
            </p>
          </div>
        </div>
      </form>
      {/* Modal */}
      <>
        <label
          htmlFor="my-modal-5"
          className="hidden"
          ref={modalTrigger}
        ></label>
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <label className="modal modal-bottom sm:modal-middle bg-black bg-opacity-50">
          <div className="modal-box max-w-sm text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-20 h-20 bg-primary-50 rounded-full">
                <Image src={thumbsUpIcon} alt="" className="w-8" />
              </div>
            </div>
            <h3 className="font-bold text-3xl">Success!</h3>
            <p className="py-4 text-neutral-500 text-lg">
              Your account has been verified, You can now proceed to your
              dashboard
            </p>
            <div className="modal-action">
              <Link href="/dashboard" className="btn btn-primary w-full">
                Proceed to Dahboard
              </Link>
            </div>
          </div>
        </label>
      </>
    </>
  );
}

index.getLayout = function (page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
