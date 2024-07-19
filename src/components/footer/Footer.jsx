import Social from "./Social";
import Contact from "./Contact";
import Subscribe from "./Subscribe";
import Logo from "./Logo";


const Footer = () => {

    return (
        <footer className="xxs:h-[22.5rem] xs:h-[19.5rem] sm:h-[13.5rem] md:h-[11.5rem] lg:h-[7rem] 2xl:h-[6.5rem] min-w-screen w-full bg-[#4E5152] text-white flex justify-center p-[1rem] xxs:px-[2rem] md:p-[1rem]">
            <div className="flex flex-col gap-[1.8rem] md:gap-[1rem] m-auto grow">
                <div className="md:flex md:gap-[1.8rem] md:mx-[1.8rem] justify-between">
                    <div className="grow md:w-fit md:m-auto">
                        <Subscribe />
                    </div>
                    <div className="hidden ml:block w-[2px] self-stretch bg-gradient-to-tr from-transparent via-neutral-400 to-transparent opacity-25"></div>
                    <div className="hidden md:block md:m-auto md:grow md:w-fit">
                        <Contact/>
                    </div>
                    <div className="hidden ml:block w-[2px] self-stretch bg-gradient-to-tr from-transparent via-neutral-400 to-transparent opacity-25"></div>
                    <div className="hidden md:block md:m-auto md:grow md:w-fit">
                        <Social/>
                    </div>
                    <div className="hidden lg:block w-[2px] self-stretch bg-gradient-to-tr from-transparent via-neutral-400 to-transparent opacity-25"></div>
                    <div className="hidden lg:block lg:m-auto lg:grow lg:w-fit">
                        <Logo />
                    </div>
                    
                    {/* <div className="md:flex md:w-[50%] xl:w-[60%]">
                        
                    </div> */}
                </div>
                <div className="my-auto xs:flex xs:gap-[1.8rem] md:hidden">
                    <div className="mr-auto">
                        <Contact />
                    </div>
                    <div className="hidden xs:block md:hidden w-[2px] self-stretch bg-gradient-to-tr from-transparent via-neutral-400 to-transparent opacity-25"></div>
                    <div className="m-auto hidden xs:block md:hidden">
                        <Social/>
                    </div>
                    <div className="hidden sm:block md:hidden w-[2px] self-stretch bg-gradient-to-tr from-transparent via-neutral-400 to-transparent opacity-25"></div>
                    <div className="hidden sm:block md:hidden m-auto">
                        <Logo />
                    </div>
                </div>
                <div className="m-auto xs:hidden">
                    <Social />
                </div>
                <div className="sm:hidden md:block lg:hidden h-[2px] self-stretch bg-gradient-to-tr from-transparent via-neutral-400 to-transparent opacity-25"></div>
                <div className="m-auto sm:hidden md:block lg:hidden">
                    <Logo />
                </div>
            </div>
        </footer>
    )
}

export default Footer