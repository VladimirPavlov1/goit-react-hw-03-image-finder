import { BtnLoad } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return <BtnLoad onClick={() => onClick()}>Load More</BtnLoad>;
};


Button.propTypes={
    onClick:PropTypes.func.isRequired
}