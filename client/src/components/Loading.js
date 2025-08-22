import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid #1a1a1a;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;
`;

const LoadingText = styled.h2`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>Chargement...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
