"use client"

import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { cardsData as initialData } from "../../data/data"
import EditWorkshopModal from "../EditWorkshopModal/EditWorkshopModal"

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
  ModalOverlay,
  ModalContent,
  Modal,ModalHeader,ModalBody,Label,Input,ModalFooter
} from "./admin.styles"
import { deleteEvent, getEvents, getTotalEvents } from "../../services/api"



const AdminDashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setEditModal]=useState(false);
  const [selectedWorkshopId, setSelectedWorkshopId] = useState(null);

  const [stats, setStats] = useState({
    totalWorkshops: 0,
    activeUsers: 0,
    upcomingEvents: 0,
  })

  const [loading, setLoading] = useState(false)
  const [viewMode, setViewMode] = useState("card") // 'table' or 'card'


  const [workshops, setWorkshops] = useState([]);

  // Fetch workshops using the API function
  const fetchworkshops = async () => {
    try {
      console.log("fetching....")
      const data = await getEvents(); 
      // console.log(data)
      setWorkshops(data); 
    } catch (error) {
      console.error("Failed to fetch workshops:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchworkshops();
  }, []);


  useEffect(() => {
    const fetchTotalEvents = async () => {
      try {
        console.log("Fetching total workshops...");
        const data = await getTotalEvents();
        console.log("Total workshops:", data.total);
        
        setStats((prevStats) => ({
          ...prevStats,
          totalWorkshops: data.total, // Update only totalWorkshops
        }));
      } catch (error) {
        console.error("Error fetching total workshops:", error);
      }
    };

    fetchTotalEvents();
  }, []);



  const handleCreateWorkshop = () => {
    navigate("/register")
  }

  const handleEditWorkshop = (id) => {
    console.log("Clicked...")
    setEditModal(true);

    // navigate("/register", { state: { workshopId: id, action: "edit" } })
  }




  const handleDeleteWorkshop = (workshopId) => {
    console.log("clicked...")
    setSelectedWorkshopId(workshopId);
    setShowModal(true); // Show modal before deleting
  };

  const handleConfirmDelete = async () => {
    if (!selectedWorkshopId) return;
    try {
      await deleteEvent(selectedWorkshopId); // Call the API to delete from the backend
      // setWorkshops((prevWorkshops) =>
      //   prevWorkshops.filter((w) => w._id !== selectedWorkshopId)
      // );
      console.log("Workshop deleted successfully");
    } catch (error) {
      console.error("Error deleting workshop:", error);
    }
    setShowModal(false);
  };

  const renderModal = () =>
    showModal && (
      <ModalOverlay>
        <ModalContent>
          <h3>Are you sure you want to delete this workshop?</h3>
          <ButtonGroup>
            <Button onClick={handleConfirmDelete} color="#F44336">
              Yes, Delete
            </Button>
            <Button onClick={() => setShowModal(false)}>Cancel</Button>
          </ButtonGroup>
        </ModalContent>
      </ModalOverlay>
    );




    
  const renderEditModal = () =>
    showEditModal && (
      <Modal>
            <ModalHeader>Edit Workshop</ModalHeader>
            <ModalBody>
              <Label>Title</Label>
              <Input name="title"   />
      
              <Label>Start Time</Label>
              <Input type="datetime-local" name="startTime"   />
      
              <Label>End Time</Label>
              <Input type="datetime-local" name="endTime" />
      
              <Label>Venue</Label>
              <Input name="venue"  />
      
              <Label>Registrations</Label>
              <Input type="number" name="registrations"   />
            </ModalBody>
            <ModalFooter>
              <Button >Save Changes</Button>
              <Button variant="destructive" >Cancel</Button>
            </ModalFooter>
          </Modal>
    );



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
            <Button onClick={() => handleDeleteWorkshop(workshop._id)} color="#F44336">
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
      {renderModal()}
      {/* {renderEditModal()} */}
    </Container>
  )
}

export default AdminDashboard

