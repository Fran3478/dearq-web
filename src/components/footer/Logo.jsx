import logo from "../../assets/svg/dearq-logo.svg"

const Logo = () => {

    return (
        <div className="flex w-fit m-auto">
            <p className="w-fit mx-auto text-white font-tt-commons-pro-expanded-bold font-bold text-2xl pr-4">DEArq</p>
            <img className="w-7 pointer-events-none m-auto" src={logo} alt="logodearq" />
        </div>
    )
}

export default Logo