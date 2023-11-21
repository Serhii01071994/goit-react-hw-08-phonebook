import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledAppContainer = styled.div`
    width: 400px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-right: auto;
    margin-left: auto;
    background-color: #f5f5f5;


  .title {
    margin-bottom: 20px;
    text-align: center;
  }
`;
export const StyledNavLink = styled(NavLink)`
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  display: inline-block;
  padding: 20px;
  font-size: 22px;
  text-decoration: none;
  margin-right: 15px;

  transition: all 0.3s;

  &.active {
    border: 1px solid white;
    background-color: black;
    color: white;
  }
`;