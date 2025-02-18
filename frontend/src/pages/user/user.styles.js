import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #f4f4f9;
  }
`;

// Responsive Grid Layout
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  padding: 24px;
  justify-content: center;
  max-width: 1300px;
  margin: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Modern Card Design
export const Card = styled.div`
  border: none;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  text-align: center;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

// Image Styling with Better Visibility
export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 3px solid #eee;
`;

// Card Content with Proper Spacing
export const CardContent = styled.div`
  padding: 18px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Title with Enhanced Readability
export const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
`;

// Card Info with Better Visibility
export const CardInfo = styled.p`
  margin: 5px 0;
  font-size: 1.1rem;
  color: #555;
  font-weight: 500;
`;

// Actions Section for Buttons
export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-top: 1px solid #eee;
  background: #fafafa;
`;

// Styled Button with Hover Effect
export const Button = styled.button`
  background: ${(props) => props.color || "#007BFF"};
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px 14px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);

  &:hover {
    background: ${(props) => props.hoverColor || "#0056b3"};
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;
