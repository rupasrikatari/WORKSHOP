import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 16px;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 600;
  color: #2d3748;
`;

export const Message = styled.p`
  color: #4a5568;
  margin-top: 8px;
`;

export const Button = styled.button`
  margin-top: 16px;
  padding: 8px 24px;
  background-color: #3182ce;
  color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #2b6cb0;
  }
`;
