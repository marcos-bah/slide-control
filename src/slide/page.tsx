import { JSX, SVGProps } from "react"

export default function SlidePage() {
    return (
      <main className="flex flex-col items-center justify-center h-screen px-4 md:px-6 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-md space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Control Slide System</h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Effortlessly manage your slides with our intuitive control system.
          </p>
        </div>
        <div className="mt-12 w-full max-w-3xl">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white shadow-sm dark:bg-gray-800">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center dark:bg-gray-700">
                <PresentationIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium">Slide 1</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white shadow-sm dark:bg-gray-800">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center dark:bg-gray-700">
                <PresentationIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium">Slide 2</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white shadow-sm dark:bg-gray-800">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center dark:bg-gray-700">
                <PresentationIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium">Slide 3</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white shadow-sm dark:bg-gray-800">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center dark:bg-gray-700">
                <PresentationIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium">Slide 4</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white shadow-sm dark:bg-gray-800">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center dark:bg-gray-700">
                <PresentationIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium">Slide 5</span>
            </div>
          </div>
        </div>
      </main>
    )
  }
  
  function PresentationIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h20" />
        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
        <path d="m7 21 5-5 5 5" />
      </svg>
    )
  }