"use client"

import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams, Link } from "react-router-dom"
import { cardsData } from "../../data/data"
import { courseData as defaultCourseData } from "../../data/CoursesData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import {
  Container,
  NotificationBar,
  NotificationTitle,
  NotificationText,
  MainLayout,
  MainContent,
  BackButton,
  BannerImage,
  ContentWrapper,
  LeftContent,
  RightContent,
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
  RegistrationModal,
  RegistrationForm,
  FormTitle,
  FormInput,
  PhoneInputWrapper,
  CountrySelect,
  StyledPhoneInput,
  TimerWrapper,
  TimerBlock,
  TimerDigit,
  TimerLabel,
  TimerSeparator,
  RegistrationCount,
  TermsText,
  TermsLink,
  LoginLink,
} from "./Courses.styles"

import {getEvents} from "../../services/api"

const Courses = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()

  // State for storing course data
  const [cardData, setCardData] = useState(null)
  const [courseData, setCourseData] = useState(null)

  const [relatedCourses, setRelatedCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
  })
  const [countryCode, setCountryCode] = useState("+91")
  const [timer, setTimer] = useState({
    days: 0,
    hours: 7,
    minutes: 24,
  })

  // Fetch course data
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setIsLoading(true)
        setError(null)

        // First try to get data from location state
        let currentCardData = location.state?.cardData
        let currentCourseData = location.state?.courseData

        // If not in location state, fetch from cardsData
        if (!currentCardData) {
          currentCardData = cardsData.find((card) => card.id === Number(id))
        }

        // If still no card data, set error
        if (!currentCardData) {
          throw new Error("Course not found")
        }

        // Use default course data if none provided in location state
        if (!currentCourseData) {
          currentCourseData = defaultCourseData
        }

        // Get related courses
        const currentRelatedCourses = cardsData.filter((card) => card.id !== Number(id)).slice(0, 3)

        // Update state
        setCardData(currentCardData)
        setCourseData(currentCourseData)
        setRelatedCourses(currentRelatedCourses)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourseData()
  }, [id, location.state])

  // const fetchEvents = async () => {
  //   try {
  //     console.log("fetching....")
  //     const data = await getEvents(); // Calls the API function
  //     console.log(data);
  //     setEvents(data); // Update state with API response
  //     console.log(events)
  //   } catch (error) {
  //     console.error("Failed to fetch events:", error);
  //   }
  // };

  // Fetch data on component mount
  // useEffect(() => {
  //   fetchEvents();
  // }, []);

  // Timer useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        const newMinutes = prevTimer.minutes - 1
        if (newMinutes < 0) {
          const newHours = prevTimer.hours - 1
          if (newHours < 0) {
            const newDays = prevTimer.days - 1
            return {
              days: Math.max(0, newDays),
              hours: newDays < 0 ? 0 : 23,
              minutes: 59,
            }
          }
          return {
            ...prevTimer,
            hours: newHours,
            minutes: 59,
          }
        }
        return {
          ...prevTimer,
          minutes: newMinutes,
        }
      })
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Registration submitted:", formData)
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!cardData || !courseData) return <div>Course not found</div>

  return (
    <Container>
      <NotificationBar>
        <NotificationTitle>{courseData.notification.title}</NotificationTitle>
        <NotificationText>{courseData.notification.message}</NotificationText>
      </NotificationBar>

      <MainLayout>
        <MainContent>
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
                <SpeakerImage src={courseData.speaker.image} alt={courseData.speaker.name} />
                <SpeakerInfo>
                  <SpeakerName>by {courseData.speaker.name}</SpeakerName>
                  <SpeakerRole>
                    {courseData.speaker.role} {courseData.speaker.location} {courseData.speaker.flag}
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
            <RightContent>
              <RegistrationModal>
                <RegistrationForm onSubmit={handleSubmit}>
                  <FormTitle>Register NOW!</FormTitle>

                  <TimerWrapper>
                    <TimerBlock>
                      <TimerDigit>{String(timer.days).padStart(2, "0")}</TimerDigit>
                      <TimerLabel>d</TimerLabel>
                    </TimerBlock>
                    <TimerSeparator>:</TimerSeparator>
                    <TimerBlock>
                      <TimerDigit>{String(timer.hours).padStart(2, "0")}</TimerDigit>
                      <TimerLabel>h</TimerLabel>
                    </TimerBlock>
                    <TimerSeparator>:</TimerSeparator>
                    <TimerBlock>
                      <TimerDigit>{String(timer.minutes).padStart(2, "0")}</TimerDigit>
                      <TimerLabel>m</TimerLabel>
                    </TimerBlock>
                  </TimerWrapper>

                  <LoginLink href="#">Already have an account? Click here</LoginLink>

                  <FormInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />

                  <PhoneInputWrapper>
                    <CountrySelect value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                      <option value="+91">🇮🇳 +91</option>
                    </CountrySelect>
                    <StyledPhoneInput
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </PhoneInputWrapper>

                  <FormInput
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />

                  <RegistrationCount>2746 learners already registered</RegistrationCount>

                  <RegistrationButton type="submit">REGISTER FOR FREE</RegistrationButton>

                  <TermsText>
                    By continuing, you agree to Scaler's <TermsLink href="#">Terms</TermsLink> and{" "}
                    <TermsLink href="#">Privacy Policy</TermsLink>
                  </TermsText>
                </RegistrationForm>
              </RegistrationModal>

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
            </RightContent>
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
                      <CompanyLogo src={profile.preScaler.logo} alt={profile.preScaler.company} />
                      <CompanyName>{profile.preScaler.company}</CompanyName>
                    </div>

                    <TransitionArrow>
                      <FontAwesomeIcon icon={faArrowDown}/>
                    </TransitionArrow>

                    <div>
                      <CompanyName>Post Scaler</CompanyName>
                      <CompanyLogo src={profile.postScaler.logo} alt={profile.postScaler.company} />
                      <CompanyName>{profile.postScaler.company}</CompanyName>
                    </div>
                  </CompanyTransition>

                  <AlumniRole>{profile.postScaler.role}</AlumniRole>
                  {profile.postScaler.hike && <HikeTag>{profile.postScaler.hike} hike</HikeTag>}
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
                        <UpcomingDetailText>{card.registrations} people have registered</UpcomingDetailText>
                      </UpcomingCardDetails>
                      <RegistrationButton>Register Now</RegistrationButton>
                    </UpcomingCardContent>
                  </UpcomingCardWrapper>
                </Link>
              ))}
            </UpcomingCardsGrid>
          </UpcomingEventsSection>
        </MainContent>
      </MainLayout>
    </Container>
  )
}

export default Courses

