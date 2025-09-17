export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f58a06]">
      <div className="relative w-[1100px] h-[260px] rounded-xl shadow-2xl bg-white flex">
        <div className="absolute -top-3 left-[246px] w-7 h-7 bg-[#f58a06] rounded-full"></div>
        <div className="absolute -bottom-3 left-[246px] w-7 h-7 bg-[#f58a06] rounded-full"></div>

        <div className="w-[260px] flex flex-col items-center justify-start py-8 px-8">
          <img
            src="/qr.png"
            alt="QR Code"
            className="mt-6 w-[160px] h-[160px] object-cover shadow-sm"
          />
        </div>

        <div className="h-full flex items-stretch">
          <div className="w-[1px] border-r-2 border-dashed border-gray-200" />
        </div>

        <div className="flex-1 p-8 pr-[96px] flex flex-col justify-between relative">
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Mumbai, India</span>
              <span className="text-[72px] font-extrabold text-gray-200 leading-none">BOM</span>
              <div className="mt-1 text-xs text-gray-500">
                <div>Wed, July 27<sup>th</sup></div>
                <div>1:00 AM</div>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="w-[300px] border-t border-gray-200 relative">
                <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-black text-lg">✈</span>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-sm text-gray-500">Amsterdam, Netherlands</span>
              <span className="text-[72px] font-extrabold text-gray-200 leading-none">AMS</span>
              <div className="mt-1 text-xs text-gray-500 text-right">
                <div>Thu, July 27<sup>th</sup></div>
                <div>8:30 AM</div>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-end justify-between mt-6">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Passenger</span>
              <span className="font-semibold text-gray-700">Nikita Sharma</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Seat</span>
              <span className="font-semibold text-gray-700">4A</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Terminal</span>
              <span className="font-semibold text-gray-700">D</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Gate</span>
              <span className="font-semibold text-gray-700">32</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Boarding</span>
              <span className="font-semibold text-gray-700">12:40 PM</span>
            </div>
          </div>
        </div>

        <div
          className="absolute right-0 top-0 h-full w-16 bg-[#18357f] rounded-tr-xl rounded-br-xl flex items-center justify-center z-20"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center justify-center h-full gap-3 px-1">
            <div
              className="[writing-mode:vertical-rl] [text-orientation:mixed] text-white text-xs tracking-wider leading-snug"
              style={{ WebkitTextOrientation: 'mixed' }}
            >
              Boarding Pass
            </div>

            <div className="w-2 h-2 bg-[#f3c21d] rounded-full" />

            <div className="flex flex-col items-center mt-1">
              <div className="text-white font-extrabold text-[12px] leading-none">JET</div>
              <div className="text-white font-extrabold text-[12px] leading-none">AIRWAYS</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}