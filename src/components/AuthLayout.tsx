import authBgImage from "../../public/images/auth-image.png";
import Image from "next/image";

import brandLogo from "../../public/images/ista-logo.png";

export default function AuthLayout({ children }: { children: any }) {
  return (
    <section className="">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative hidden lg:flex ">
          <div className="fixed w-1/2 top-0">
            <Image
              src={authBgImage}
              alt=""
              className="object-left-top object-cover h-screen"
            />
          </div>
        </div>

        <div className="bg-primary-50">
          <div className=" px-4 py-10 sm:px-6 lg:px-8 sm:py-16">
            <div className="flex justify-center mb-6">
              <Image src={brandLogo} alt="ISTA Logo" className="h-20 w-auto" />
            </div>
            <div className="max-w-md mx-auto bg-white border px-4 py-8 sm:p-8 md:p-12 rounded-box">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
