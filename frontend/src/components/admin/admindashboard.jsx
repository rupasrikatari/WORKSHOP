"use client"

import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { cardsData as initialData } from "../../data/data"
import {
  Container,
  Header,
  Title,
  ButtonGroup,
  Button,
  StatsGrid,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  StatValue,
  Table,
  Thead,
  Th,
  Td,
  LoadingText,
  VenueTag,
  TargetUsersContainer,
  TargetUserTag,
  Grid,
  CardImage,
  CardInfo,
  CardActions,
  WorkshopCard,
} from "./admin.styles"

const AdminDashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [stats, setStats] = useState({
    totalWorkshops: 0,
    activeUsers: 0,
    upcomingEvents: 0,
  })

  const [workshops, setWorkshops] = useState(() => {
    const savedWorkshops = localStorage.getItem("workshops")
    return savedWorkshops ? JSON.parse(savedWorkshops) : initialData
  })

  const [loading, setLoading] = useState(false)
  const [viewMode, setViewMode] = useState("card") // 'table' or 'card'

  useEffect(() => {
    if (location.state?.newWorkshop && location.state?.action === "create") {
      const newWorkshop = {
        ...location.state.newWorkshop,
        _id: Date.now().toString(),
        status: "Upcoming",
      }

      const updatedWorkshops = [...workshops, newWorkshop]
      setWorkshops(updatedWorkshops)
      localStorage.setItem("workshops", JSON.stringify(updatedWorkshops))
      updateStats(updatedWorkshops)
      window.history.replaceState({}, document.title)
    }
  }, [location.state, workshops])

  const updateStats = (workshopsData) => {
    const now = new Date()
    const upcomingCount = workshopsData.filter((w) => new Date(w.startDateTime) > now).length

    setStats({
      totalWorkshops: workshopsData.length,
      activeUsers: workshopsData.reduce((acc, workshop) => acc + (workshop.targetingUsers?.length || 0), 0),
      upcomingEvents: upcomingCount,
    })
  }

  useEffect(() => {
    updateStats(workshops)
  }, [workshops]) // Removed updateStats from dependencies

  const handleCreateWorkshop = () => {
    navigate("/register")
  }

  const handleEditWorkshop = (id) => {
    navigate("/register", { state: { workshopId: id, action: "edit" } })
  }

  const handleDeleteWorkshop = (workshopId) => {
    const updatedWorkshops = workshops.filter((w) => w._id !== workshopId)
    setWorkshops(updatedWorkshops)
    localStorage.setItem("workshops", JSON.stringify(updatedWorkshops))
  }

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    })
  }

  const renderCardView = () => (
    <Grid>
      {workshops.map((workshop) => (
        <WorkshopCard key={workshop.id || workshop._id}>
          <CardImage src={workshop.image || "/placeholder.svg"} alt={workshop.title} />
          <CardContent>
            <CardTitle>{workshop.title}</CardTitle>
            <CardInfo>Start: {new Date(workshop.startTime || workshop.startDateTime).toLocaleString()}</CardInfo>
            <CardInfo>End: {new Date(workshop.endTime || workshop.endDateTime).toLocaleString()}</CardInfo>
            <CardInfo>Registrations: {workshop.registrations || 0}</CardInfo>
          </CardContent>
          <CardActions>
            <Button onClick={() => handleEditWorkshop(workshop.id || workshop._id)} color="#4CAF50">
              <FontAwesomeIcon icon={faEdit} /> Edit
            </Button>
            <Button onClick={() => handleDeleteWorkshop(workshop.id || workshop._id)} color="#F44336">
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </CardActions>
        </WorkshopCard>
      ))}
    </Grid>
  )

  const renderTableView = () => (
    <Table>
      <Thead>
        <tr>
          <Th>Topic</Th>
          <Th>Start Time</Th>
          <Th>End Time</Th>
          <Th>Venue</Th>
          <Th>Target Users</Th>
          <Th>Actions</Th>
        </tr>
      </Thead>
      <tbody>
        {workshops.map((workshop) => (
          <tr key={workshop.id || workshop._id}>
            <Td>{workshop.title || workshop.topic}</Td>
            <Td>{formatDateTime(workshop.startTime || workshop.startDateTime)}</Td>
            <Td>{formatDateTime(workshop.endTime || workshop.endDateTime)}</Td>
            <Td>
              <VenueTag mode={workshop.venue?.mode || "online"}>
                {workshop.venue?.mode || "online"}
                {workshop.venue?.address && ` - ${workshop.venue.address}`}
              </VenueTag>
            </Td>
            <Td>
              <TargetUsersContainer>
                {(workshop.targetingUsers || []).map((user, index) => (
                  <TargetUserTag key={index}>{user}</TargetUserTag>
                ))}
              </TargetUsersContainer>
            </Td>
            <Td>
              <ButtonGroup>
                <Button variant="small" onClick={() => handleEditWorkshop(workshop.id || workshop._id)}>
                  Edit
                </Button>
                <Button variant="small" onClick={() => handleDeleteWorkshop(workshop.id || workshop._id)}>
                  Delete
                </Button>
              </ButtonGroup>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  )

  return (
    <Container>
      <Header>
        <Title>Admin Dashboard</Title>
        <ButtonGroup>
          <Button onClick={handleCreateWorkshop}>Create Workshop</Button>
          <Button onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}>
            {viewMode === "table" ? "Card View" : "Table View"}
          </Button>
          <Button variant="destructive" onClick={() => navigate("/logout")}>
            Logout
          </Button>
        </ButtonGroup>
      </Header>

      <StatsGrid>
        <Card>
          <CardHeader>
            <CardTitle>Total Workshops</CardTitle>
          </CardHeader>
          <CardContent>
            <StatValue>{stats.totalWorkshops}</StatValue>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <StatValue>{stats.activeUsers}</StatValue>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <StatValue>{stats.upcomingEvents}</StatValue>
          </CardContent>
        </Card>
      </StatsGrid>

      <Card>
        <CardHeader>
          <CardTitle>Workshop Management</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <LoadingText>Loading workshops...</LoadingText>
          ) : viewMode === "table" ? (
            renderTableView()
          ) : (
            renderCardView()
          )}
        </CardContent>
      </Card>
    </Container>
  )
}

export default AdminDashboard

