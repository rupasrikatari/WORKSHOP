import styled from "styled-components"

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f8f9fa, #e9ecef);
  padding: 0 1rem;
  transition: background-color 0.3s ease;
`

export const NotificationBar = styled.div`
  background: linear-gradient(to right, #2563eb, #1d4ed8);
  color: white;
  padding: 0.75rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(37, 99, 235, 0.2);
`

export const NotificationTitle = styled.h3`
  font-weight: 600;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`

export const NotificationText = styled.p`
  opacity: 0.9;
  margin: 0.15rem 0 0;
`

export const MainLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  position: relative;
`

export const MainContent = styled.main`
  width: 100%;
`

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #2563eb;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.25rem 0;
  transition: all 0.3s ease;

  &:hover {
    color: #1d4ed8;
    transform: translateX(-5px);
  }
`

export const BannerImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-top: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const LeftContent = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: sticky;
  top: 2rem;
`

export const CourseTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  background: linear-gradient(120deg, #2563eb 0%, #1d4ed8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const CourseSubtitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #666;
`

export const SpeakerSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`

export const SpeakerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 0.75rem;
  border: 2px solid #2563eb;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const SpeakerInfo = styled.div``

export const SpeakerName = styled.p`
  font-weight: 600;
  margin-bottom: 0.15rem;
  color: #2563eb;
`

export const SpeakerRole = styled.p`
  font-size: 0.875rem;
  color: #666;
`

export const ScheduleSection = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #edf2ff;
    transform: translateX(5px);
  }
`

export const ScheduleDay = styled.p`
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.15rem;
  color: #2563eb;
`

export const ScheduleDate = styled.p`
  font-size: 1rem;
  margin-bottom: 0.15rem;
`

export const ScheduleTime = styled.p`
  font-size: 0.875rem;
  color: #666;
`

export const EventCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: fit-content;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`

export const EventTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2563eb;
`

export const EventDetailItem = styled.div`
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background: #f8f9fa;
  }
`

export const EventDetailLabel = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.15rem;
`

export const EventDetailText = styled.p`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`

export const DisclaimerText = styled.p`
  font-size: 0.875rem;
  color: #666;
  font-style: italic;
  padding: 0.75rem;
  border-left: 3px solid #2563eb;
  background: #f8f9fa;
  margin-top: 0.75rem;
`

export const RegistrationButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(to right, #2563eb, #1d4ed8);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);

    &:before {
      left: 100%;
    }
  }
`

export const AlumniSection = styled.section`
  margin-top: 2rem;
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

export const AlumniTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2563eb;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`

export const AlumniGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`

export const AlumniCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    border-color: #2563eb;
  }
`

export const AlumniImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 0.75rem;
  border: 2px solid #2563eb;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const AlumniName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.15rem;
  color: #2563eb;
`

export const AlumniDate = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.75rem;
`

export const CompanyTransition = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background: #f8f9fa;
  }
`

export const CompanyLogo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const CompanyName = styled.p`
  font-size: 0.875rem;
  color: #666;
  text-align: center;
`

export const TransitionArrow = styled.div`
  color: #2563eb;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`

export const AlumniRole = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`

export const HikeTag = styled.span`
  background: linear-gradient(to right, #22c55e, #16a34a);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(34, 197, 94, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const Description = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #edf2ff;
    transform: translateX(5px);
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #2563eb;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #4a4a4a;
  }
`

export const LearningSection = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #edf2ff;
    transform: translateX(5px);
  }
`

export const LearningTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2563eb;
`

export const LearningList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const LearningItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  position: relative;
  transition: all 0.3s ease;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #2563eb;
    font-weight: bold;
  }

  &:hover {
    background: white;
    border-radius: 6px;
    transform: translateX(5px);
  }
`

export const SpeakerBio = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #edf2ff;
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #2563eb;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
`

export const SpeakerExperience = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

export const ExperienceItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  padding: 0.75rem 1.5rem;
  position: relative;
  font-size: 1rem;
  color: #4a4a4a;
  transition: all 0.3s ease;
  border-radius: 6px;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #2563eb;
    font-weight: bold;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: white;
    transform: translateX(10px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    &:before {
      transform: scale(1.2);
    }
  }
`

export const UpcomingEventsSection = styled.section`
  margin-top: 2rem;
  padding: 1.5rem 0;
  animation: slideUp 0.5s ease-out;

  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`

export const UpcomingEventsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #edf2ff;
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`

export const UpcomingEventsTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #2563eb;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`

export const ExploreButton = styled.button`
  padding: 0.5rem 1.5rem;
  background: linear-gradient(to right, #ff4d4f, #ff7875);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 77, 79, 0.3);

    &:before {
      left: 100%;
    }
  }
`

export const UpcomingCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const UpcomingCardWrapper = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    border-color: #2563eb;
  }
`

export const UpcomingCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const UpcomingCardContent = styled.div`
  padding: 1rem;
  background: linear-gradient(to bottom, white, #f8f9fa);
`

export const UpcomingCardTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;

  &:hover {
    color: #1d4ed8;
  }
`

export const UpcomingCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background: white;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    background: #f8f9fa;
  }
`

export const UpcomingDetailText = styled.p`
  font-size: 0.8rem;
  color: #666;
  transition: color 0.2s ease;
  padding-left: 0.35rem;
  border-left: 2px solid transparent;
  margin-bottom: 0.25rem;
  line-height: 1.4;

  &:hover {
    color: #2563eb;
    border-left-color: #2563eb;
    transform: translateX(2px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const RegistrationModal = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 1rem 0;
  animation: slideDown 0.5s ease-out;

  @keyframes slideDown {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`

export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  text-align: center;
`

export const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`

export const PhoneInputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CountrySelect = styled.select`
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`

export const StyledPhoneInput = styled(FormInput)`
  flex: 1;
`

export const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
`

export const TimerBlock = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
`

export const TimerDigit = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2563eb;
`

export const TimerLabel = styled.span`
  font-size: 0.875rem;
  color: #666;
`

export const TimerSeparator = styled.span`
  color: #2563eb;
  font-size: 1.25rem;
  font-weight: 600;
`

export const RegistrationCount = styled.p`
  font-size: 0.875rem;
  color: #666;
  text-align: center;
`

export const TermsText = styled.p`
  font-size: 0.75rem;
  color: #666;
  text-align: center;
`

export const TermsLink = styled.a`
  color: #2563eb;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

export const LoginLink = styled.a`
  color: #2563eb;
  text-decoration: none;
  text-align: center;
  font-size: 0.875rem;
  
  &:hover {
    text-decoration: underline;
  }
`

