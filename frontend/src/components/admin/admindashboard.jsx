// AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  StatusBadge,
  LoadingText,
  VenueTag,
  TargetUsersContainer,
  TargetUserTag
} from './admin.styles';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [stats, setStats] = useState({
    totalWorkshops: 0,
    activeUsers: 0,
    upcomingEvents: 0,
  });
  
  const [workshops, setWorkshops] = useState(() => {
    // Initialize with data from localStorage if available
    const savedWorkshops = localStorage.getItem('workshops');
    return savedWorkshops ? JSON.parse(savedWorkshops) : [];
  });
  
  const [loading, setLoading] = useState(false);

  // Handle new workshop data from Register component
  useEffect(() => {
    if (location.state?.newWorkshop && location.state?.action === 'create') {
      const newWorkshop = {
        ...location.state.newWorkshop,
        _id: Date.now().toString(),
        status: 'Upcoming'
      };

      const updatedWorkshops = [...workshops, newWorkshop];
      setWorkshops(updatedWorkshops);
      
      // Update localStorage
      localStorage.setItem('workshops', JSON.stringify(updatedWorkshops));
      
      // Update stats
      setStats(prevStats => ({
        ...prevStats,
        totalWorkshops: prevStats.totalWorkshops + 1,
        upcomingEvents: prevStats.upcomingEvents + 1
      }));

      // Clear location state
      window.history.replaceState({}, document.title);
    }
  }, [location.state, workshops]);

  // Initialize/update stats whenever workshops change
  useEffect(() => {
    const now = new Date();
    const upcomingCount = workshops.filter(w => new Date(w.startDateTime) > now).length;
    
    setStats({
      totalWorkshops: workshops.length,
      activeUsers: workshops.reduce((acc, workshop) => acc + (workshop.targetingUsers?.length || 0), 0),
      upcomingEvents: upcomingCount
    });
  }, [workshops]);

  const handleCreateWorkshop = () => {
    navigate('/register');
  };

  const handleDeleteWorkshop = (workshopId) => {
    const updatedWorkshops = workshops.filter(w => w._id !== workshopId);
    setWorkshops(updatedWorkshops);
    localStorage.setItem('workshops', JSON.stringify(updatedWorkshops));
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
  };

  return (
    <Container>
      <Header>
        <Title>Admin Dashboard</Title>
        <ButtonGroup>
          <Button onClick={handleCreateWorkshop}>
            Create Workshop
          </Button>
          <Button variant="destructive" onClick={() => navigate('/logout')}>
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
          ) : workshops.length === 0 ? (
            <LoadingText>No workshops created yet</LoadingText>
          ) : (
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
                  <tr key={workshop._id}>
                    <Td>{workshop.topic}</Td>
                    <Td>{formatDateTime(workshop.startDateTime)}</Td>
                    <Td>{formatDateTime(workshop.endDateTime)}</Td>
                    <Td>
                      <VenueTag mode={workshop.venue.mode}>
                        {workshop.venue.mode}
                        {workshop.venue.address && ` - ${workshop.venue.address}`}
                      </VenueTag>
                    </Td>
                    <Td>
                      <TargetUsersContainer>
                        {workshop.targetingUsers.map((user, index) => (
                          <TargetUserTag key={index}>
                            {user}
                          </TargetUserTag>
                        ))}
                      </TargetUsersContainer>
                    </Td>
                    <Td>
                      <ButtonGroup>
                        <Button
                          variant="small"
                          onClick={() => navigate(`/workshop/${workshop._id}`)}
                        >
                          View
                        </Button>
                        <Button
                          variant="small"
                          
                          onClick={() => handleDeleteWorkshop(workshop._id)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default AdminDashboard;