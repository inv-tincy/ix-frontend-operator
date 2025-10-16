// app/home/page.tsx
'use client';

import { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Container
} from '@mui/material';
import Grid from '@mui/material/Grid';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedUser');
    if (storedUser) setUser(JSON.parse(storedUser));
    else router.push('/login');
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('loggedUser');
    router.push('/login');
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#f5f6fa' }}>
      {/* Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight={600}>
            Interview Platform
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Content Section */}
      <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
        <Box textAlign="center" mb={5}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Hi {user?.name || 'User'} 👋
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Welcome to your dashboard. Here’s your profile summary:
          </Typography>
        </Box>

        {/* Info Cards */}
        <Grid container spacing={3} justifyContent="center">
          {/* Email */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 3,
                boxShadow: 3,
                transition: '0.3s',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
              }}
            >
              <CardContent sx={{ textAlign: 'center', py: 3 }}>
                <Typography variant="h6" gutterBottom>
                  📧 Email
                </Typography>
                <Typography color="text.secondary">{user?.email || '-'}</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* City */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 3,
                boxShadow: 3,
                transition: '0.3s',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
              }}
            >
              <CardContent sx={{ textAlign: 'center', py: 3 }}>
                <Typography variant="h6" gutterBottom>
                  🏙️ City
                </Typography>
                <Typography color="text.secondary">{user?.address?.city || '-'}</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Phone */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 3,
                boxShadow: 3,
                transition: '0.3s',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
              }}
            >
              <CardContent sx={{ textAlign: 'center', py: 3 }}>
                <Typography variant="h6" gutterBottom>
                  📞 Phone
                </Typography>
                <Typography color="text.secondary">{user?.phone || '-'}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
