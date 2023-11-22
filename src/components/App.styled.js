import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledAppContainer = styled.div`
  margin-right: auto;
  margin-left: auto;


  .title {
    margin-bottom: 20px;
    text-align: center;
  }

  .header {
    background-color: lightblue;
    margin-bottom: 20px;
    padding: 10px;
  }

  .navigation {
    display: flex;
    justify-content: center;
    gap: 100px;
  }
`;
export const StyledNavLink = styled(NavLink)`
  color: grey;
  display: inline-block;
  font-size: 16px;
  font-weight:500;
  text-decoration: none;
  
  transition: all 0.3s;

  &.active {
    color: blue;
  }
`;
export const StyledUserMenu = styled.div`
  display: flex;
  justify-content: flex-end;

  .email {
    color: blue;
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
  }

  .logout {
    color: tomato;
    border-radius: 10px;
    border: 1px solid white;
    display: inline-block;
    font-size: 14px;
    text-decoration: none;
    margin-right: 15px;
    margin-left: 15px;
    font-weight: 550;
    transition: all 0.3s;
    cursor: pointer;
  }
`;

export const StyledHomePage = styled.div`
  .home-title {
    margin-top: 50px;
    color: black;
    display: block;
    font-size: 40px;
    font-weight: 500;
    text-decoration: none;
    text-align: center;
    margin-bottom: 40px;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
  }

  .link {
    padding: 10px;
    border: 1px solid blue;
    border-radius: 10px;
    font-weight: 600;
    color: white;
    background-color:blue;
    
  }
`;

export const StyledLoginPage = styled.div`
width:300px;
margin-right:auto;
margin-left:auto;

  .form {
    margin-bottom: 20px;
  }

  .label {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
  }

  .input {
    border: 1px solid #ccc;
    width: 278px;
    border-radius: 5px;
    outline: inherit;
    padding: 10px;
    font-size: 15px;
  }

  .input:focus {
    border: 1px solid rgb(108, 177, 108);
  }

  .login {
    width: 278px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid blue;
    background-color: blue;
    font-size: 18px;
    color: aliceblue;
    cursor: pointer;
  }
`;

export const StyledSignUp = styled.div`
  width: 290px;
  margin-right: auto;
  margin-left: auto;

  .form {
    margin-bottom: 20px;
  }

  .label {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
  }

  .input {
    border: 1px solid #ccc;
    width: 278px;
    border-radius: 5px;
    outline: inherit;
    padding: 10px;
    font-size: 15px;
  }

  .input:focus {
    border: 1px solid rgb(108, 177, 108);
  }

  .login {
    width: 278px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid blue;
    background-color: blue;
    font-size: 18px;
    color: aliceblue;
    cursor: pointer;
  }
`;