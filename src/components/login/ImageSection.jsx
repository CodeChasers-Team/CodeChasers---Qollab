import PropTypes from "prop-types"

const ImageSection = ({url}) =>{
    return(
        <>
            <section className="w-full h-screen">
                <img src={url} alt="" className="w-screen h-screen rounded-lg"/>
            </section>
        </>
    )
}

ImageSection.propTypes = {
    url : PropTypes.string
}

export default ImageSection