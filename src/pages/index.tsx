import { MdOutlineLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { HiBuildingOffice2 } from "react-icons/hi2";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="py-4 bg-gray-200 flex justify-center items-center">
        Navbar Area
      </div>

      {/* Main */}
      <div className="flex-grow flex flex-col bg-[#00549B] bg-cover bg-center bg-no-repeat px-6 relative">
        <div className="flex justify-center md:flex-nowrap md:justify-center lg:justify-end">
          <div className="mr-4 mb-4 md:mb-0">
            <Image
              src="https://storage.googleapis.com/gc-bricams-dev-gcs-public-01/promo/id/2.png"
              alt="background photo"
              width={65}
              height={65}
              layout="responsive"
              className="px-10"
            />
          </div>
          <div className="m-4 md:m-16 mb-3 max-w-lg w-full md:w-auto lg:mb-10 lg:-ml-40 lg:mr-18">
            <div className="inline-flex h-auto w-auto min-w-[460px] flex-col items-center justify-start gap-4 overflow-hidden rounded-2xl bg-white p-6 shadow lg:h-auto lg:w-auto">
              {/* Form atau content lainnya dapat dimasukkan di sini */}
              <div className="w-full">
                <form action="" className="space-y-5">
                  <div className="flex justify-center">
                    <span className="text-center font-sans font-bold text-2xl tracking-wide">
                      Masuk
                    </span>
                  </div>
                  <div className="relative">
                    <div className="flex items-center">
                      <HiBuildingOffice2
                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        size={20}
                        color="#000"
                      />
                      <input
                        type="text"
                        className="pl-10 block border-2 py-1 rounded-lg px-2"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="block border-2 py-1 rounded-lg px-2"
                      placeholder="email"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col lg:flex-row xl:px-[120px] px-[64px] py-[20px] font-bold text-[#06549C] mx-auto justify-between">
        <div className="flex items-center text-md">
          <span className="mr-2 font-semibold">Hubungi Kami:</span>
          <MdOutlineLocalPhone size={18} />
          <p className="ml-1 mr-2">+62 21 5758965</p>
          <CiMail size={18} className="mr-2" />
          <p className="font-bold text-sm">cash_mgt@bri.co.id</p>
        </div>
        <div className="flex items-center">
          <h4 className="mr-2">Terdaftar & Diawasi Oleh :</h4>
          <div className="flex space-x-2">
            <Image
              src="https://bricams.bri.co.id/_next/image?url=%2Fimg%2Fojk.png&w=96&q=75"
              alt="OJK Photo"
              width={60}
              height={45}
            />
            <Image
              src="https://bricams.bri.co.id/_next/image?url=%2Fimg%2Flps.png&w=96&q=75"
              alt="LPS Photo"
              width={60}
              height={45}
            />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex w-full flex-col px-[64px] lg:flex-row xl:px-[120px] bg-[#06549C] mx-auto py-2 justify-between text-white">
        <span className="text-center mb-2 text-sm">
          @ 2024 PT.Bank Rakyat Indonesia (Persero) Tbk. | All Rights Reserved.
        </span>
        <span className="text-center text-sm">
          Privasi ● Syarat & Ketentuan
        </span>
      </div>
    </div>
  );
}
