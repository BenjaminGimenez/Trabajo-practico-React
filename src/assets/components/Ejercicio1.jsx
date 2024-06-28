import PropTypes from 'prop-types';

const Ejercicio1 = ({message}) => {

  return (
    <h1>Hello {message}!! 😎</h1>
  )
}

Ejercicio1.propTypes = {
    message: PropTypes.string.isRequired,
}
export default Ejercicio1