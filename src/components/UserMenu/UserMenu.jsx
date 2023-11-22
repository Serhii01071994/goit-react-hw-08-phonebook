import { StyledUserMenu } from 'components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth.selectors';
import { logOutThunk } from 'redux/authReducer';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUserData);
  const onLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
      <StyledUserMenu>
          
      <p className='email'>{user.email}</p>
      <button className='logout' onClick={onLogOut}>
        Log Out
      </button>
    </StyledUserMenu>
  );
};
