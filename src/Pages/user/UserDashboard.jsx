import {
  AppBar, Toolbar, Typography, Button, Container, Box, Grid, Card,
  CardContent, CardActions, Avatar, Paper, List, ListItem, ListItemText,
  Divider, InputAdornment, TextField, MenuItem, Select, Chip
} from '@mui/material';
import { Work as WorkIcon, Search, LocationOn, Business, Logout } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [jobTypeFilter, setJobTypeFilter] = useState('all');

  const jobs = [
    {
      id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote',
      type: 'Full-time', description: 'Skilled Frontend Developer needed for React projects.',
      posted: '2d ago'
    },
    {
      id: 2, title: 'Backend Developer', company: 'Code Masters', location: 'New York, NY',
      type: 'Contract', description: 'Node.js developer for API development.',
      posted: '1d ago'
    },
    {
      id: 3, title: 'UI/UX Designer', company: 'Design Studio', location: 'San Francisco, CA',
      type: 'Part-time', description: 'Create beautiful user interfaces for web apps.',
      posted: '3d ago'
    },
  ];

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://source.unsplash.com/100x100/?portrait',
    applied: 3,
    saved: 2
  };

  const handleFilter = () => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = locationFilter === 'all' || job.location === locationFilter;
      const matchesType = jobTypeFilter === 'all' || job.type === jobTypeFilter;
      return matchesSearch && matchesLocation && matchesType;
    });
  };

  const filteredJobs = handleFilter();

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing tokens/sessions)
    navigate('/');
  };

  return (
    <Box sx={{ bgcolor: '#fafafa', minHeight: '100vh' }}>
      {/* Modern AppBar */}
      <AppBar position="static" sx={{ 
        backdropFilter: 'blur(12px)',
        background: 'rgba(255, 255, 255, 0.92)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <WorkIcon sx={{ 
              fontSize: '2rem',
              color: 'primary.main',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            }} />
            <Typography variant="h5" sx={{ 
              fontWeight: 800,
              background: 'linear-gradient(45deg, #1976d2, #4CAF50)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              CareerConnect
            </Typography>
          </Box>
          <Button
            startIcon={<Logout />}
            onClick={handleLogout}
            sx={{
              fontWeight: 600,
              textTransform: 'none',
              color: 'primary.main',
              '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.1)' }
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Rest of the component remains the same */}
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Profile Section */}
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <Paper sx={{ 
                p: 3, 
                borderRadius: 4,
                backdropFilter: 'blur(16px)',
                background: 'rgba(255, 255, 255, 0.8)',
              }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Avatar
                    alt={user.name}
                    src={user.avatarUrl}
                    sx={{ 
                      width: 100, 
                      height: 100, 
                      mb: 2,
                      border: '2px solid #1976d2'
                    }}
                  />
                  <Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                </Box>
                <Divider sx={{ my: 3 }} />
                <List>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText 
                      primary="Applied Jobs" 
                      secondary={user.applied}
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText 
                      primary="Saved Jobs" 
                      secondary={user.saved}
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                  </ListItem>
                </List>
              </Paper>
            </motion.div>
          </Grid>

          {/* Job Listings Section */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 800 }}>
              Job Opportunities
            </Typography>

            {/* Filter Controls */}
            <Box sx={{ 
              mb: 4,
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap'
            }}>
              <TextField
                placeholder="Search jobs..."
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                sx={{ flexGrow: 1, minWidth: 200 }}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                size="small"
                sx={{ minWidth: 150 }}
                startAdornment={<LocationOn sx={{ mr: 1 }} />}
              >
                <MenuItem value="all">All Locations</MenuItem>
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="New York, NY">New York</MenuItem>
                <MenuItem value="San Francisco, CA">San Francisco</MenuItem>
              </Select>
              <Select
                value={jobTypeFilter}
                onChange={(e) => setJobTypeFilter(e.target.value)}
                size="small"
                sx={{ minWidth: 150 }}
                startAdornment={<Business sx={{ mr: 1 }} />}
              >
                <MenuItem value="all">All Types</MenuItem>
                <MenuItem value="Full-time">Full-time</MenuItem>
                <MenuItem value="Part-time">Part-time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
              </Select>
            </Box>

            {/* Job Cards */}
            <AnimatePresence>
              <Grid container spacing={3}>
                {filteredJobs.map((job, index) => (
                  <Grid item xs={12} key={job.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card sx={{ 
                        borderRadius: 3,
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s',
                        '&:hover': { transform: 'translateY(-5px)' }
                      }}>
                        <CardContent>
                          <Box sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between',
                            mb: 2
                          }}>
                            <div>
                              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                {job.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {job.company} • {job.location}
                              </Typography>
                            </div>
                            <Chip 
                              label={job.type} 
                              color="primary" 
                              size="small"
                              sx={{ alignSelf: 'start' }}
                            />
                          </Box>
                          <Typography variant="body1" sx={{ mb: 2 }}>
                            {job.description}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Posted {job.posted}
                          </Typography>
                        </CardContent>
                        <CardActions sx={{ px: 2, pb: 2 }}>
                          <Button
                            variant="contained"
                            size="small"
                            sx={{ 
                              borderRadius: 2,
                              textTransform: 'none',
                              background: 'linear-gradient(45deg, #1976d2, #4CAF50)'
                            }}
                          >
                            Apply Now
                          </Button>
                          <Button
                            variant="outlined"
                            size="small"
                            sx={{ 
                              borderRadius: 2,
                              textTransform: 'none',
                              borderColor: 'divider'
                            }}
                          >
                            Save Job
                          </Button>
                        </CardActions>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </AnimatePresence>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          mt: 8,
          py: 3,
          px: 2,
          backgroundColor: 'background.paper',
          borderTop: '1px solid rgba(0, 0, 0, 0.12)',
          textAlign: 'center'
        }}
      >
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} CareerConnect. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default UserDashboard;