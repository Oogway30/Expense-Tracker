import NavBar from "../components-app/NavBar"
import { IoAlertCircleOutline } from "react-icons/io5";

const ErrorPage = () => {
  return (
    <>
    <NavBar/>
    <main
        className="flex flex-1 items-center justify-center py-12 px-4 mt-20 sm:px-6 lg:px-8"
      >
        <div className="w-full max-w-md text-center">
          <div
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#3CB371]"
          >
            <IoAlertCircleOutline className="text-5xl text-primary" />
          </div>
          <h2
            className="mt-6 text-3xl font-extrabold text-white-800 dark:text-white"
          >
            Oops! Something went wrong.
          </h2>
          <p className="mt-2 text-base text-gray-400 dark:text-gray-400">
            We encountered an unexpected issue. Please try again or contact
            support if the problem persists.
          </p>
          <div className="mt-8">
            <a
              className="inline-flex items-center justify-center rounded-lg bg-[#3CB371] px-5 py-3 text-base font-semibold text-background-dark shadow-sm transition-all hover:bg-[#2c8655] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark"
              href="/dashboard"
            >
              Go Back Home
            </a>
          </div>
        </div>
      </main>
              </>
  )
}

export default ErrorPage
