import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  margin: 10px;
  width: 200px;
`;

const UserCard = ({ user }) => {
  return (
    <CardContainer>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </CardContainer>
  );
};

export default UserCard;
