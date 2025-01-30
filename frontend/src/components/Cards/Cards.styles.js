import styled from "styled-components";

// Media query breakpoints
const breakpoints = {
  mobile: "320px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px"
};

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.25rem;
    padding: 1.25rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (min-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
`;

export const CardWrapper = styled.div`
  background: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    border-radius: 8px;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  // Touch device active state
  @media (hover: none) {
    &:active {
      transform: scale(0.98);
    }
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;

  @media (min-width: ${breakpoints.mobile}) {
    height: 180px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    height: 200px;
  }
`;

export const CardContent = styled.div`
  padding: 1rem;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 1.25rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #333;
  line-height: 1.4;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  margin-bottom: 0.75rem;

  @media (min-width: ${breakpoints.mobile}) {
    gap: 0.2rem;
    margin-bottom: 1rem;
  }
`;

export const DetailText = styled.p`
  font-size: 0.8125rem;
  color: #666;
  line-height: 1.5;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.875rem;
  }
`;

export const ViewButton = styled.button`
  width: 100%;
  padding: 0.625rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 0.75rem;
    font-size: 1rem;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #1d4ed8;
    }
  }

  // Touch device active state
  @media (hover: none) {
    &:active {
      background-color: #1e40af;
    }
  }
`;