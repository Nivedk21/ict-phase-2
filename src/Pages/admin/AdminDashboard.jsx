import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, Container, Box, Grid, Card,
  CardContent, CardActions, Avatar, Paper, List, ListItem, ListItemText,
  Divider, Chip
} from '@mui/material';
import { Work as WorkIcon, Logout, Person, BusinessCenter } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', status: 'Active' },
  ];

  const jobPostings = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp', status: 'Published' },
    { id: 2, title: 'Backend Developer', company: 'Code Masters', status: 'Draft' },
    { id: 3, title: 'UI/UX Designer', company: 'Design Studio', status: 'Archived' },
  ];

  const handleLogout = () => {
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

      <Container sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 800 }}>
          Admin Dashboard
        </Typography>

        <Grid container spacing={4}>
          {/* User Management Section */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <Paper sx={{ 
                p: 3, 
                borderRadius: 4,
                backdropFilter: 'blur(16px)',
                background: 'rgba(255, 255, 255, 0.8)',
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Person fontSize="large" color="primary" />
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    User Management
                  </Typography>
                </Box>
                <List>
                  {users.map((user) => (
                    <motion.div
                      key={user.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <ListItem sx={{ 
                        p: 2, 
                        mb: 1, 
                        borderRadius: 2,
                        '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.05)' }
                      }}>
                        <ListItemText 
                          primary={user.name} 
                          secondary={user.email}
                          primaryTypographyProps={{ fontWeight: 600 }}
                        />
                        <Chip 
                          label={user.status}
                          color={user.status === 'Active' ? 'success' : 'default'}
                          size="small"
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<Person />}
                  sx={{ 
                    mt: 2,
                    background: 'linear-gradient(45deg, #1976d2, #4CAF50)',
                    borderRadius: 2,
                    textTransform: 'none'
                  }}
                >
                  Add New User
                </Button>
              </Paper>
            </motion.div>
          </Grid>

          {/* Job Postings Section */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
              <Paper sx={{ 
                p: 3, 
                borderRadius: 4,
                backdropFilter: 'blur(16px)',
                background: 'rgba(255, 255, 255, 0.8)',
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <BusinessCenter fontSize="large" color="primary" />
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Job Postings
                  </Typography>
                </Box>
                <AnimatePresence>
                  {jobPostings.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card sx={{ 
                        mb: 2, 
                        borderRadius: 2,
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                        '&:hover': { transform: 'translateY(-3px)' },
                        transition: 'transform 0.3s'
                      }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {job.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {job.company}
                              </Typography>
                            </div>
                            <Chip
                              label={job.status}
                              color={
                                job.status === 'Published' ? 'success' :
                                job.status === 'Draft' ? 'warning' : 'default'
                              }
                              size="small"
                            />
                          </Box>
                        </CardContent>
                        <CardActions sx={{ px: 2, pb: 2 }}>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{ 
                              textTransform: 'none',
                              background: 'linear-gradient(45deg, #1976d2, #4CAF50)'
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            size="small"
                            color="error"
                            variant="outlined"
                            sx={{ textTransform: 'none' }}
                          >
                            Delete
                          </Button>
                        </CardActions>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<BusinessCenter />}
                  sx={{ 
                    mt: 2,
                    background: 'linear-gradient(45deg, #1976d2, #4CAF50)',
                    borderRadius: 2,
                    textTransform: 'none'
                  }}
                >
                  Add New Job
                </Button>
              </Paper>
            </motion.div>
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

export default AdminDashboard;