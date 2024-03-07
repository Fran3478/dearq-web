import SocialButtons from "./SocialButtons";
import ContactButtons from "./ContactButtons";
import SubscribeButton from "./SubscribeButton";
import Logo from "./Logo";


const Footer = () => {


    return (
        <div className="mt-auto min-w-screen w-full bg-[#4E5152] text-white">
            <div className="overflow-hidden flex flex-col py-[1rem] sm:grid sm:grid-cols-8 sm:grid-flow-row lg:grid-cols-12">
                <div className="w-fit mx-auto sm:col-span-4 sm:px-[1rem] sm:row-span-2 lg:col-span-5 xl:col-span-6">
                    <div className="mb-[1rem]">
                        <SocialButtons />
                    </div>
                    <div className="">
                        <ContactButtons />
                    </div>
                </div>
                <div className="sm:col-start-5 sm:col-span-4 sm:row-span-1 sm:row-start-1 sm:mx-auto lg:col-span-5 lg:col-start-8 xl:col-span-6 xl:col-start-7">
                    <SubscribeButton />
                </div>
                <div className="sm:m-auto sm:col-span-2 sm:col-start-7 sm:row-span-1 sm:row-start-2 md:mt-[1rem] lg:col-span-3 lg:col-start-10 lg:ml-auto lg:justify-self-end">
                    <Logo />
                </div>
            </div>
        </div>
    )
}

export default Footer