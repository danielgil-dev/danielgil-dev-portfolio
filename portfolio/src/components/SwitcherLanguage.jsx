export default function SwitcherLanguage() {
  //Only Spanish && English
  return (
    <div className="flex flex-row justify-center bg-white shadow dark:bg-gray-800 select-none">
      <div className="flex flex-row items-center right-1 ">
        <button className="p-2 flex flex-row items-center border rounded-l-lg border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">
          <span className="ml-1">
            {" "}
            <img
              src="https://img.icons8.com/?size=100&id=ly7tzANRt33n&format=png&color=000000"
              className="w-5 h-5"
            />
          </span>
        </button>

        <button className="p-2 flex flex-row items-center border rounded-r-lg border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ">
          <span className="ml-1">
            {" "}
            <img
              src="https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png"
              className="w-5 h-5"
            />
          </span>
        </button>
      </div>
    </div>
  );
}
