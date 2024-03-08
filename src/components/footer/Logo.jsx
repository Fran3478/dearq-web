import logo from "../../assets/svg/dearq-logo.svg"

const Logo = () => {

    return (
        <div className="">
            <img className="w-9 pointer-events-none m-auto" src={logo} alt="logodearq" />
            <p className="w-fit mx-auto text-white font-tt-commons-pro-expanded-bold font-bold text-2xl">DEArq</p>
        </div>
    )
}

export default Logo