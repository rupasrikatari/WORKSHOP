import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2.5rem;
  background: #f7f8fa; /* Light background color */
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #2d2d2d;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  color: #666;
  margin-bottom: 3rem;
  font-size: 0.95rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FormSectionTitle = styled.h2`
  font-size: 1.25rem;
  color: #2d2d2d;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; // Reduced from 1.5rem
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem; // Reduced from 0.5rem
`;


export const Label = styled.label`
  font-weight: 500;
  color: #2d2d2d;
  font-size: 0.95rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Icon = styled.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #1f2937;
  background-color: white;

  &::placeholder {
    color: #9ca3af;
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  min-height: 100px;
  resize: vertical;
  color: #1f2937;

  &::placeholder {
    color: #9ca3af;
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;



export const ErrorMessage = styled.span`
  color: #dc2626;
  font-size: 0.875rem;
`;

export const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
  padding: 0 1rem;
`;

export const ProgressStep = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  ${props => props.active === 'true' && `
    font-weight: bold;
    color: #0066cc;
  `}
  
  .step-title {
    margin-left: 8px;
  }
`;

export const StepNumber = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  ${props => props.active === 'true' ? `
    background-color: #0066cc;
    color: white;
  ` : `
    background-color: #e0e0e0;
    color: #666;
  `}
`;

export const StepConnector = styled.div`
  flex: 1;
  height: 2px;
  background-color: ${props => props.completed === 'true' ? '#0066cc' : '#e0e0e0'};
  margin: 0 8px;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  transition: all 0.2s;
  cursor: pointer;
  
  ${(props) =>
    props.variant === "outline"
      ? `
      background-color: white;
      border: 1px solid #d1d5db;
      color: #374151;
      
      &:hover:not(:disabled) {
        background-color: #f3f4f6;
      }
    `
      : `
      background-color: #4f46e5;
      border: 1px solid transparent;
      color: white;
      
      &:hover:not(:disabled) {
        background-color: #4338ca;
      }
    `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const SmallButton = styled(Button)`
  padding: 0.55rem 0.5rem;
  font-size: 0.75rem;
  
  ${(props) =>
    props.color === "green" &&
    `
    background-color:hsl(129, 80.40%, 50.00%);
    border-color: #10B981;
    color: white;
    
    &:hover:not(:disabled) {
      background-color:hsl(161, 93.50%, 30.40%);
    }
  `}
  
  ${(props) =>
    props.color === "red" &&
    `
    background-color: #EF4444;
    border-color: #EF4444;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #DC2626;
    }
  `}
  
  ${(props) =>
    props.variant === "icon" &&
    `
    padding: 0.25rem;
    margin-left: 0.5rem;
  `}
`
export const AddButton = styled.button`
  padding: 0.55rem 0.7rem;
  font-size: 0.75rem;
  background-color:hsl(156, 100.00%, 60.00%);
  border: none;
  color: white;
  border-radius: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 1px rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
  width: fit-content; // Make button width fit content
  min-width: 100px; // Set minimum width
  justify-content: center; // Center the content

  &:hover {
    background-color:hsl(108, 91.60%, 53.50%);
    transform: translateY(-1px);
    box-shadow: 
      0 4px 6px rgba(0, 0, 0, 0.15),
      inset 0 1px rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 
      0 1px 2px rgba(0, 0, 0, 0.1),
      inset 0 1px rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 10px;
    height: 10px;
  }
`;

export const RemoveButton = styled.button`
  padding: 0.65rem;
  font-size: 0.75rem;
  background-color: #EF4444;
  border: 1px solid #EF4444;
  color: white;
  border-radius: 0.375rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  margin-left: 0.35rem; // Reduced from 0.5rem

  &:hover {
    background-color: #DC2626;
  }

  svg {
    width: 10px;
    height: 10px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem; // Reduced from 1rem
  margin-top: 1.5rem; // Reduced from 2rem
`;

export const OptionalText = styled.span`
  font-size: 0.75rem;
  color: #6B7280;
  font-weight: normal;
  margin-left: 0.5rem;
`;