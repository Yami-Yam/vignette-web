import menucomp from 'public/images/comp/menucomp.png'
import Image from 'next/image'
const MenuComp = () => {
  return (
    <div className="sm:mx-auto sm:max-w-7xl sm:px-6 ">
      <div className="py-8 sm:relative sm:mt-4 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="hidden sm:block">
          <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-100 transition duration-100 dark:bg-zinc-800 lg:left-80 lg:right-0 lg:w-full"></div>
          <svg
            className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200 transition duration-100 dark:text-neutral-600"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="392"
              fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
            ></rect>
          </svg>
        </div>
        <div className="relative -mr-40 px-12 pb-8 sm:mx-auto">
          <div className="hidden w-full rounded-[17px] shadow-2xl ring-opacity-5 lg:inline-flex lg:h-full lg:w-auto lg:max-w-none">
            <Image
              className=""
              priority
              src={menucomp}
              alt=""
              layout="fixed"
              width={1043}
              height={643}
              quality={90}
            />
          </div>
          <div className=" inline-flex w-full rounded-[17px] shadow-2xl ring-opacity-5 lg:hidden">
            <Image
              className=""
              priority
              src={menucomp}
              alt=""
              width={1043}
              height={643}
              quality={90}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuComp