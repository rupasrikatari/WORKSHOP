import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 0 1rem;
`;

export const NotificationBar = styled.div`
  background-color: #2563eb;
  color: white;
  padding: 1rem;
  text-align: center;
`;

export const NotificationTitle = styled.h3`
  font-weight: 600;
  margin: 0;
`;

export const NotificationText = styled.p`
  opacity: 0.9;
  margin: 0.25rem 0 0;
`;

export const MainSection = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #2563eb;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CourseTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const CourseSubtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #666;
`;

export const SpeakerSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const SpeakerImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const SpeakerInfo = styled.div``;

export const SpeakerName = styled.p`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const SpeakerRole = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

export const ScheduleSection = styled.div`
  margin-bottom: 1.5rem;
`;

export const ScheduleDay = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const ScheduleDate = styled.p`
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
`;

export const ScheduleTime = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const EventCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

export const EventTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const EventDetailItem = styled.div`
  margin-bottom: 1rem;
`;

export const EventDetailLabel = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

export const EventDetailText = styled.p`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`;

export const DisclaimerText = styled.p`
  font-size: 0.875rem;
  color: #666;
  font-style: italic;
`;

export const RegistrationButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`;

export const AlumniSection = styled.section`
  margin-top: 3rem;
`;

export const AlumniTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const AlumniGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

export const AlumniCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AlumniImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const AlumniName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const AlumniDate = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const CompanyTransition = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const CompanyLogo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

export const CompanyName = styled.p`
  font-size: 0.875rem;
  color: #666;
  text-align: center;
`;

export const TransitionArrow = styled.div`
  color: #2563eb;
`;

export const AlumniRole = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const HikeTag = styled.span`
  background-color: #22c55e;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
`;

export const Description = styled.div`
  margin: 2rem 0;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #4a4a4a;
  }
`;

export const LearningSection = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

export const LearningTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

export const LearningList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LearningItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "\2022";
    position: absolute;
    left: 0;
    color: #2563eb;
    font-weight: bold;
  }
`;

export const SpeakerBio = styled.div`
  margin: 2rem 0;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }
`;

export const SpeakerExperience = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ExperienceItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  font-size: 1rem;
  color: #4a4a4a;

  &:before {
    content: "\2022";
    position: absolute;
    left: 0;
    color: #2563eb;
    font-weight: bold;
  }
`;

export const UpcomingEventsSection = styled.section`
  margin-top: 3rem;
  padding: 2rem 0;
`;

export const UpcomingEventsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const UpcomingEventsTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
`;

export const ExploreButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff7875;
  }
`;

export const UpcomingCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const UpcomingCardWrapper = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const UpcomingCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const UpcomingCardContent = styled.div`
  padding: 1.5rem;
`;

export const UpcomingCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`

export const UpcomingCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

export const UpcomingDetailText = styled.p`
  font-size: 0.875rem;
  color: #666;
`