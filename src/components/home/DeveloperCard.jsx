import PropTypes from "prop-types"

const DeveloperCard = ({name, role, image}) => {
    return(
        <>
            <section className={`w-[280px] mx-2 relative`}>
                <div className="z-50 absolute top-[20px] left-[20px]">
                    <h1 className="text-white text-[26px] font-bold">{name}</h1>
                    <h2 className="text-white text-[22px] font-semibold">{role}</h2>
                </div>
                <img src={image} alt="" className="w-full rounded-3xl shadow-xl"/>
            </section>
        </>
    )
}

DeveloperCard.propTypes = {
    name : PropTypes.string,
    role : PropTypes.string,
    image : PropTypes.string,
}

export default DeveloperCard