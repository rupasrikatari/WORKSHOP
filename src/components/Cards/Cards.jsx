import React from "react"
import { Link } from "react-router-dom"
import { cardsData } from "../../data/data"
import { courseData } from "../../data/CoursesData"
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
  return (
    <CardsContainer>
      {cardsData.map((card) => (
        <CardWrapper key={card.id}>
          <Link
            to={`/courses/${card.id}`}
            state={{ cardData: card, courseData: courseData }}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardImage src={card.image} alt={card.title} />
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <CardDetails>
                <DetailText>Starts: {card.startTime}</DetailText>
                <DetailText>Ends: {card.endTime}</DetailText>
                <DetailText>{card.registrations} registrations</DetailText>
              </CardDetails>
              <ViewButton>Register Now</ViewButton>
            </CardContent>
          </Link>
        </CardWrapper>
      ))}
    </CardsContainer>
  )
}

export default Cards

