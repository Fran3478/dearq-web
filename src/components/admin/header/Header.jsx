import UserButton from "../../buttons/UserButton";

const Header = () => {
  return (
    <div className="flex fixed w-full h-16 justify-between border-b shadow-sm bg-[#f9fafb]">
      <div className="flex mx-4 my-2 relative">
        <p className="sm:text-lg sm:mt-auto mb-auto relative">
          <span className="text-[#4E5152] font-lastica font-bold">DEA</span>
          <span className="text-white font-segoe font-normal">rq</span>
          <span className="absolute sm:top-0 sm:-right-3 -z-10 sm:w-9 sm:h-8 bg-[url('/assets/dearq-logo-single.svg')] bg-contain bg-no-repeat"></span>
        </p>
      </div>
      <div className="mx-4 my-2">
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
