import FirstcardImage from "./Screenshot.png"

const WorkDesplay = () => {
  return (
<div classNameName="flex gap-4 mt-10 align-middle justify-center w-full">
    <h1 className=" text-lg font-bold text-center  mt-10">templates</h1>


<div className="max-width: 768px; mt-6  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={FirstcardImage} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bag App</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Introducing our premier bags selling app, designed to streamline your shopping experience and keep you ahead of the fashion curve. Browse through our extensive collection of high-quality bags, from chic to practical, and everything in between. With user-friendly navigation and secure payment options, finding the perfect bag has never been easier. Download our app now and accessorize your life with style and convenience.</p>
        <a href="https://bagapp.vercel.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            click to see demo
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>




<div className="max-width: 768px; mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={FirstcardImage} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">food develivery app</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Introducing our premier bags selling app, designed to streamline your shopping experience and keep you ahead of the fashion curve. Browse through our extensive collection of high-quality bags, from chic to practical, and everything in between. With user-friendly navigation and secure payment options, finding the perfect bag has never been easier. Download our app now and accessorize your life with style and convenience.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</div>



  )
}
export default WorkDesplay