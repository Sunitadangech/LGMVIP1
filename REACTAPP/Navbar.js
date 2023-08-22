import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandName = styled.h2`
  margin: 0;
`;

const Navbar = ({ onGetUsersClick, loading }) => {
  return (
    <NavContainer>
      <BrandName>Brand Name</BrandName>
      <button onClick={onGetUsersClick} disabled={loading}>
        {loading ? 'Loading...' : 'Get Users'}
      </button>
    </NavContainer>
  );
};

export default Navbar;
