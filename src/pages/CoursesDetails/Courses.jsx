import React from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom"; // Added Link import
import { cardsData } from "../../data/data";
import { courseData as defaultCourseData } from "../../data/CoursesData";
import { ArrowDown } from "lucide-react";
import {
  Container,
  NotificationBar,
  NotificationTitle,
  NotificationText,
  MainSection,
  BackButton,
  BannerImage,
  ContentWrapper,
  LeftContent,
  CourseTitle,
  CourseSubtitle,
  SpeakerSection,
  SpeakerImage,
  SpeakerInfo,
  SpeakerName,
  SpeakerRole,
  ScheduleSection,
  ScheduleDay,
  ScheduleDate,
  ScheduleTime,
  EventCard,
  EventTitle,
  EventDetailItem,
  EventDetailLabel,
  EventDetailText,
  DisclaimerText,
  RegistrationButton,
  AlumniSection,
  AlumniTitle,
  AlumniGrid,
  AlumniCard,
  AlumniImage,
  AlumniName,
  AlumniDate,
  CompanyTransition,
  CompanyLogo,
  CompanyName,
  TransitionArrow,
  AlumniRole,
  HikeTag,
  Description,
  LearningSection,
  LearningTitle,
  LearningList,
  LearningItem,
  SpeakerBio,
  SpeakerExperience,
  ExperienceItem,
  UpcomingEventsSection,
  UpcomingEventsHeader,
  UpcomingEventsTitle,
  ExploreButton,
  UpcomingCardsGrid,
  UpcomingCardWrapper,
  UpcomingCardImage,
  UpcomingCardContent,
  UpcomingCardTitle,
  UpcomingCardDetails,
  UpcomingDetailText,
} from "./Courses.styles";

const Courses = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  // Try to get data from location state, if not available, fetch from cardsData
  const cardData =
    location.state?.cardData || cardsData.find((card) => card.id === Number(id));
  const courseData = location.state?.courseData || defaultCourseData;
  const relatedCourses = cardsData
    .filter((card) => card.id !== Number(id))
    .slice(0, 3);

  if (!cardData) {
    return <div>Course not found</div>;
  }

  return (
    <Container>
      <MainSection>
        <NotificationBar>
          <NotificationTitle>{courseData.notification.title}</NotificationTitle>
          <NotificationText>{courseData.notification.message}</NotificationText>
        </NotificationBar>

        <BackButton onClick={() => navigate("/")}>← Back to Courses</BackButton>
        <BannerImage src={cardData.image} alt={cardData.title} />

        <ContentWrapper>
          <LeftContent>
            <CourseTitle>{cardData.title}</CourseTitle>
            <CourseSubtitle>{courseData.course.subtitle}</CourseSubtitle>

            <Description>
              <h2>About this Masterclass</h2>
              <p>{courseData.description.about}</p>
            </Description>

            <LearningSection>
              <LearningTitle>What You Will Learn From This Session</LearningTitle>
              <LearningList>
                {courseData.description.learnings.map((learning, index) => (
                  <LearningItem key={index}>{learning}</LearningItem>
                ))}
              </LearningList>
            </LearningSection>

            <SpeakerBio>
              <h2>{courseData.description.speaker.title}</h2>
              <SpeakerExperience>
                {courseData.description.speaker.experience.map((exp, index) => (
                  <ExperienceItem key={index}>{exp}</ExperienceItem>
                ))}
              </SpeakerExperience>
            </SpeakerBio>

            <SpeakerSection>
              <SpeakerImage
                src={courseData.speaker.image}
                alt={courseData.speaker.name}
              />
              <SpeakerInfo>
                <SpeakerName>by {courseData.speaker.name}</SpeakerName>
                <SpeakerRole>
                  {courseData.speaker.role} {courseData.speaker.location}{" "}
                  {courseData.speaker.flag}
                </SpeakerRole>
              </SpeakerInfo>
            </SpeakerSection>

            <ScheduleSection>
              <ScheduleDay>{courseData.schedule.day}</ScheduleDay>
              <ScheduleDate>
                {courseData.schedule.date}
                <sup>th</sup> {courseData.schedule.month}
              </ScheduleDate>
              <ScheduleTime>{courseData.schedule.time}</ScheduleTime>
            </ScheduleSection>

            <DisclaimerText>{courseData.disclaimer}</DisclaimerText>
          </LeftContent>

          <EventCard>
            <EventTitle>{courseData.course.title}</EventTitle>
            <EventDetailItem>
              <EventDetailLabel>STARTS ON:</EventDetailLabel>
              <EventDetailText>{cardData.startTime}</EventDetailText>
            </EventDetailItem>
            <EventDetailItem>
              <EventDetailLabel>ENDS ON:</EventDetailLabel>
              <EventDetailText>{cardData.endTime}</EventDetailText>
            </EventDetailItem>
            <EventDetailItem>
              <EventDetailLabel>REGISTRATIONS:</EventDetailLabel>
              <EventDetailText>{cardData.registrations}</EventDetailText>
            </EventDetailItem>
            <EventDetailItem>
              <EventDetailLabel>VENUE:</EventDetailLabel>
              <EventDetailText>{courseData.eventDetails.venue}</EventDetailText>
            </EventDetailItem>
            <RegistrationButton>Register Now</RegistrationButton>
          </EventCard>
        </ContentWrapper>

        <AlumniSection>
          <AlumniTitle>{courseData.alumni.title}</AlumniTitle>
          <AlumniGrid>
            {courseData.alumni.profiles.map((profile) => (
              <AlumniCard key={profile.id}>
                <AlumniImage src={profile.image} alt={profile.name} />
                <AlumniName>{profile.name}</AlumniName>
                <AlumniDate>{profile.joinDate}</AlumniDate>

                <CompanyTransition>
                  <div>
                    <CompanyName>Pre Scaler</CompanyName>
                    <CompanyLogo
                      src={profile.preScaler.logo}
                      alt={profile.preScaler.company}
                    />
                    <CompanyName>{profile.preScaler.company}</CompanyName>
                  </div>

                  <TransitionArrow>
                    <ArrowDown size={20} />
                  </TransitionArrow>

                  <div>
                    <CompanyName>Post Scaler</CompanyName>
                    <CompanyLogo
                      src={profile.postScaler.logo}
                      alt={profile.postScaler.company}
                    />
                    <CompanyName>{profile.postScaler.company}</CompanyName>
                  </div>
                </CompanyTransition>

                <AlumniRole>{profile.postScaler.role}</AlumniRole>
                {profile.postScaler.hike && (
                  <HikeTag>{profile.postScaler.hike} hike</HikeTag>
                )}
              </AlumniCard>
            ))}
          </AlumniGrid>
        </AlumniSection>

        <UpcomingEventsSection>
          <UpcomingEventsHeader>
            <UpcomingEventsTitle>Upcoming Events</UpcomingEventsTitle>
            <ExploreButton onClick={() => navigate("/")}>Explore all</ExploreButton>
          </UpcomingEventsHeader>

          <UpcomingCardsGrid>
            {relatedCourses.map((card) => (
              <Link
                key={card.id}
                to={`/courses/${card.id}`}
                state={{ cardData: card, courseData: defaultCourseData }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <UpcomingCardWrapper>
                  <UpcomingCardImage src={card.image} alt={card.title} />
                  <UpcomingCardContent>
                    <UpcomingCardTitle>{card.title}</UpcomingCardTitle>
                    <UpcomingCardDetails>
                      <UpcomingDetailText>Start time: {card.startTime}</UpcomingDetailText>
                      <UpcomingDetailText>End time: {card.endTime}</UpcomingDetailText>
                      <UpcomingDetailText>
                        {card.registrations} people have registered
                      </UpcomingDetailText>
                    </UpcomingCardDetails>
                    <RegistrationButton>Register Now</RegistrationButton>
                  </UpcomingCardContent>
                </UpcomingCardWrapper>
              </Link>
            ))}
          </UpcomingCardsGrid>
        </UpcomingEventsSection>
      </MainSection>
    </Container>
  );
};

export default Courses;
