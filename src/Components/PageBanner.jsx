import PropTypes from "prop-types";

function PageBanner({ content, imgPath }) {

    const backgroundImg = {
        backgroundImage:`url(${imgPath})`,
    }
    return (
        <div className = 'banner' style={backgroundImg}>
            <h1>{content}</h1>
        </div>
    );
};

PageBanner.propTypes = {
    imgPath: PropTypes.oneOfType([
        PropTypes.string, 
        PropTypes.object, 
    ]).isRequired,
    content : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([''])
    ])
};

export default PageBanner