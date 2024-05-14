function SearchForm({ onSearch, data }) {
  return (
    <form className="maz-w-md w-full">
      <div className="grid md:grid-cols-12">
        <div className="relative z-0 w-full mb-5 col-span-2 group px-1">
          <input type="text" placeholder="LHR" />
        </div>
        <div className="relative z-0 w-full mb-5 col-span-2 group px-1">
          <input type="text" placeholder="CDG" />
        </div>
        <div className="relative z-0 w-full mb-5 col-span-2 group px-1">
          <input type="date" placeholder="" />
        </div>
        <div className="relative z-0 w-full mb-5 group px-1">
          <select name="" id="" className="w-full">
            {[...Array(32).keys()].map((_, index) => (
              <option key={index} value={index}>
                {index === 0 ? "Day" : index}
              </option>
            ))}
          </select>
        </div>
        <div className="relative z-0 w-full mb-5 group px-1">
          <select name="" id="" className="w-full">
            {[...Array(32).keys()].map((_, index) => (
              <option key={index} value={index}>
                {index === 0 ? "Day" : index}
              </option>
            ))}
          </select>
        </div>
        <div className="relative z-0 w-full mb-5 flex items-center col-span-2 group px-1">
          <select name="" id="" className="w-full">
            <option value="">Any Time</option>
          </select>{" "}
          +
        </div>
        <div className="relative z-0 w-full mb-5 group px-1">
          <select name="" id="" className="w-full">
            <option value="">ADT</option>
          </select>
        </div>
        <div className="relative flex items-center z-0 w-full mb-5 group px-1">
          <select name="" id="" className="w-full">
            {[...Array(10).keys()].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>{" "}
          +
        </div>
      </div>
      <hr className="h-px  bg-[#9FA7FA] border-0 dark:bg-gray-700" />
      <div className="flex justify-between align-middle text-sm py-2 h-12 font-bold">
        <div className="inline-block align-middle">
          <input
            type="checkbox"
            className="lg:h-4 md:h-3 w-4"
            name=""
            id="checkbox-1"
          />
          <label htmlFor="checkbox-1">Extra Options</label>
        </div>
        <div className="flex align-middle ">
          <div className="flex align-middle mb-4 mx-1">
            <input
              id="radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="radio-style"
            />
            <label htmlFor="radio-1" className="ms-2 text-sm font-medium  ">
              Environment
            </label>
          </div>
          <div className="flex align-middle mb-4 mx-1">
            <input
              checked
              id="radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="radio-style"
            />
            <label htmlFor="radio-2" className="ms-2 text-sm font-medium  ">
              Dummy
            </label>
          </div>
          <div className="flex align-middle mb-4 mx-1">
            <input
              checked
              id="radio-3"
              type="radio"
              value=""
              name="default-radio"
              className="radio-style"
            />
            <label htmlFor="radio-3" className="ms-2 text-sm font-medium  ">
              PDT
            </label>
          </div>
        </div>
        <div className="inline-block align-middle">
          <button
            onClick={() => onSearch()}
            className="btn hover:bg-slate-600 bg-[#312E81] text-white py-2 rounded uppercase"
            type="button">
            Search
          </button>
        </div>
      </div>
      <hr className="h-px  bg-[#9FA7FA] border-0 dark:bg-gray-700" />
      {data ? <p className="text-xs">Data parsed Successfully</p> : data === undefined && <p className="text-xs">Data parsed Successfully</p>}
    </form>
  );
}

export default SearchForm;
