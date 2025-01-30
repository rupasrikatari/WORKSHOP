import styled, { css } from "styled-components"

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  background: linear-gradient(135deg, #eef2ff, #c7d2fe);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
  font-size: 32px;
  color: #1a1a1a;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 700;
`

export const Subtitle = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 48px;
  text-align: center;
`

export const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  position: relative;
  padding: 0 12px;
`

export const StepConnector = styled.div`
  flex-grow: 1;
  height: 3px;
  background: ${(props) => (props.completed ? "#6366f1" : "#d1d5db")};
  margin: 0 8px;
  transition: background 0.3s ease;
`

export const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;

  .step-title {
    position: absolute;
    top: 100%;
    margin-top: 8px;
    font-size: 14px;
    color: ${(props) => (props.completed || props.active ? "#4f46e5" : "#6b7280")};
    font-weight: ${(props) => (props.completed || props.active ? "600" : "400")};
  }

  svg {
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 50%;
    background: ${(props) => (props.completed ? "#6366f1" : props.active ? "#6366f1" : "#e5e7eb")};
    color: ${(props) => (props.completed || props.active ? "white" : "#9ca3af")};
    transition: all 0.3s ease;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const FormSection = styled.div`
  background: white;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
  }
`

export const Button = styled.button`
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;

  ${(props) =>
    props.variant === "outline"
      ? css`
          background: white;
          border: 1px solid #6366f1;
          color: #6366f1;
          &:hover {
            background: #6366f1;
            color: white;
          }
        `
      : css`
          background: #6366f1;
          color: white;
          &:hover {
            background: #4f46e5;
          }
        `}
`

export const ErrorMessage = styled.span`
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`

// Responsive Styling
export const ResponsiveContainer = styled.div`
  @media (max-width: 768px) {
    padding: 20px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    ${Title} {
      font-size: 24px;
    }

    ${Subtitle} {
      font-size: 14px;
    }

    ${Button} {
      font-size: 14px;
      padding: 10px 16px;
    }
  }
`

export const StepNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#6366f1" : "#e5e7eb")};
  color: ${(props) => (props.active ? "white" : "#6b7280")};
  font-size: 14px;
  font-weight: 600;
  margin-right: 8px;
`

export const FormSectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  margin-bottom: 16px;
`

export const InputWrapper = styled.div`
  position: relative;
`

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  color: #9ca3af;
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s ease;
  min-height: 100px;
  resize: vertical;

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`

