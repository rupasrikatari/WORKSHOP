import React from "react"
import { Link } from "react-router-dom"
import { cardsData } from "../../data/data"
import { courseData } from "../../data/CoursesData"
import {useState,useEffect} from "react"

import {getEvents} from "../../services/api"
import {
  CardsContainer,
  CardWrapper,
  CardImage,
  CardContent,
  CardTitle,
  CardDetails,
  DetailText,
  ViewButton,
} from "./Cards.styles"

const Cards = () => {
     
  const [events, setEvents] = useState([]);

  // Fetch events using the API function
  const fetchEvents = async () => {
    try {
      console.log("fetching....")
      const data = await getEvents(); 
      // console.log(data)
      setEvents(data); 
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <CardsContainer>
      {events.map((event) => (
        <CardWrapper key={event._id}>
          <Link
            to={`/courses/${event._id}`}
            state={{ cardData: event }}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardImage src={event.image} alt={event.title} />
            <CardContent>
              <CardTitle>{event.title}</CardTitle>
              <CardDetails>
                <DetailText>Starts: {new Date(event.startTime).toLocaleString()}</DetailText>
                <DetailText>Ends: {new Date(event.endTime).toLocaleString()}</DetailText>
              </CardDetails>
              <ViewButton>Register Now</ViewButton>
            </CardContent>
          </Link>
        </CardWrapper>
      ))}
    </CardsContainer>
  );
}

export default Cards

