import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';

import { uiActions } from '../../redux/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(store => store.cart.totalQuantity);

  const toggleCart = () => {
    dispatch(uiActions.toggle());
  }
  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
