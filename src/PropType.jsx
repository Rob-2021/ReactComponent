import PropTypes from 'prop-types'

export const PropType = ({title, valor="115"})=>{
    return(
        <>
        <h2>{title}</h2>
        <p>{valor}</p>
        <p>Buen dia clase</p>
        </>
    )
}

PropType.propTypes = {
    title: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired
}

// PropType.defaultProps = {
//     title: 'Default title',
//     valor: 0
// }