import PropTypes from 'prop-types'
const ButtonHover = ({color, text, textColor, borderColor, onBtnHover}) => {
    


    return (
        <div>
           <button className='btn btn-hover'  style = {{ backgroundColor: color, color : textColor, border: borderColor}}  >
               {text}
            </button>
            
        </div>
    )
}

ButtonHover.defaultProps = {
    color: 'steelblue',
}

ButtonHover.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default ButtonHover
