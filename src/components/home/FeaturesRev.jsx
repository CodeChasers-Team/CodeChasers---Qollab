import PropTypes from "prop-types"

const FeaturesRev = ({title, desc, image}) =>{
    return(
        <>
            <section className="px-[32px] my-10">
                <div className="flex flex-row p-4">
                    <div className="w-1/2">
                        <img src={image} alt="" className="border rounded-xl shadow-lg"/>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-start p-4 pl-16 -text-primary-700">
                        <div className="-bg-primary-400 p-3 rounded-md mb-2">
                            <h4 className="font-semibold text-[12px] text-white">
                                ABOUT APP
                            </h4>
                        </div>
                        <h3 className="font-semibold text-[32px] mb-2">
                        {title}
                        </h3>
                        <p className="font-regular text-[22px]">
                        {desc}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

FeaturesRev.propTypes = {
    title : PropTypes.string,
    desc : PropTypes.string,
    image : PropTypes.string,
}


export default FeaturesRev