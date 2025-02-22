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
  background-color:orange;
  flex-direction: column;
  justify-content:center;
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


export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2.5rem;
  background: #f7f8fa; /* Light background color */
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height:90%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height:100%;
\  max-height: 300px; /* Adjust this height as needed */
  overflow-y: auto;
  padding: 1rem; /* Optional: Adds some spacing */

`;