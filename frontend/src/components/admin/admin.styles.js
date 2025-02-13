import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  padding: clamp(1rem, 3vw, 2rem);
  max-width: min(95vw, 80rem);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2vw, 1.5rem);
  background: linear-gradient(to bottom, #f9fafb, #f3f4f6);
  min-height: 100vh;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 50%, #60a5fa 100%);
  padding: clamp(0.75rem, 2vw, 1.5rem);
  border-radius: 0.75rem;
  color: white;
  box-shadow: 0 4px 20px rgba(79, 70, 229, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: bold;
  background: linear-gradient(to right, #ffffff, #e2e8f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: clamp(0.5rem, 1vw, 1rem);
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    width: 100%;
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

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
  width: 100%;
`;

export const Card = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

export const CardHeader = styled.div`
  padding: clamp(1rem, 2vw, 1.5rem);
  border-bottom: 2px solid #e2e8f0;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  color: white;
`;

export const CardTitle = styled.h2`
  font-size: clamp(1.125rem, 1.5vw, 1.25rem);
  font-weight: bold;
`;

export const CardContent = styled.div`
  padding: clamp(1rem, 2vw, 1.5rem);
`;

export const StatValue = styled.p`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  color: #1a202c;
  transition: color 0.2s ease;

  &:hover {
    color: #3b82f6;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow-x: auto;
  display: block;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 1024px) {
    display: table;
  }
`;

export const Thead = styled.thead`
  background: linear-gradient(135deg, #1e293b, #334155);
  color: white;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Th = styled.th`
  padding: clamp(0.5rem, 1.5vw, 0.75rem);
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid #e2e8f0;
  white-space: nowrap;
`;

export const Td = styled.td`
  padding: clamp(0.5rem, 1.5vw, 0.75rem);
  border-bottom: 1px solid #e2e8f0;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8fafc;
  }
`;

export const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: clamp(0.75rem, 0.9vw, 0.875rem);
  font-weight: bold;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  ${props => props.status === 'Upcoming' ? `
    background: linear-gradient(135deg, #facc15, #fbbf24);
    color: #92400e;
  ` : `
    background: linear-gradient(135deg, #22c55e, #34d399);
    color: #065f46;
  `}
`;

export const LoadingText = styled.p`
  text-align: center;
  padding: clamp(0.75rem, 2vw, 1rem);
  color: #4a5568;
  font-size: clamp(0.875rem, 1vw, 1rem);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

export const VenueTag = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  font-size: clamp(0.75rem, 0.9vw, 0.875rem);
  text-transform: capitalize;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  ${props => props.mode === 'online' ? `
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    color: white;
  ` : `
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
  `}
`;

export const TargetUsersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.25rem, 0.5vw, 0.5rem);
  padding: 0.5rem;
`;

export const TargetUserTag = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-size: clamp(0.75rem, 0.9vw, 0.875rem);
  background: linear-gradient(135deg, #6b7280, #4b5563);
  color: white;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, #4b5563, #374151);
  }
`;