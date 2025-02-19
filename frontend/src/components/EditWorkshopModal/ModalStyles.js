import styled from "styled-components";

export const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 15px;
  background: #4CAF50;
  color: white;
  text-align: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ModalBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-top: 1px solid #ccc;
  background: #f9f9f9;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const ModalContent = styled.div`
  background: white;
  width: 400px;
  max-width: 90%;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Button = styled.button`
  padding: clamp(0.4rem, 1vw, 0.75rem) clamp(0.8rem, 2vw, 1.25rem);
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  font-size: clamp(0.875rem, 1vw, 1rem);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.4s ease, height 0.4s ease;
  }

  &:hover:before {
    width: 300%;
    height: 300%;
  }

  ${props => {
    switch(props.variant) {
      case 'outline':
        return `
          background: transparent;
          border: 2px solid #6366f1;
          color: #4f46e5;
          &:hover {
            background: rgba(99, 102, 241, 0.1);
          }
        `;
      case 'destructive':
        return `
          background: linear-gradient(135deg, #dc2626, #ef4444);
          color: white;
          &:hover {
            background: linear-gradient(135deg, #b91c1c, #dc2626);
          }
        `;
      case 'small':
        return `
          padding: 0.25rem 0.75rem;
          font-size: clamp(0.75rem, 0.9vw, 0.875rem);
        `;
      default:
        return `
          background: linear-gradient(135deg, #16a34a, #22c55e);
          color: white;
          &:hover {
            background: linear-gradient(135deg, #15803d, #16a34a);
          }
        `;
    }
  }}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;


// Styled input field
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4CAF50;
  }
`;

// Styled label
export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;


