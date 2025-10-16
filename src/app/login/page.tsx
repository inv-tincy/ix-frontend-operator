// app/login/page.tsx
'use client';

import { useState } from 'react';
import { Box, Button, Card, CardContent, TextField, Typography, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError('');

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Invalid email');
      const data = await res.json();
      localStorage.setItem('loggedUser', JSON.stringify(data.user));
      router.push('/home');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #74ABE2, #787eb1ff)',
      }}
    >
      <Card
        sx={{
          width: 360,
          p: 3,
          boxShadow: 5,
          borderRadius: 3,
          textAlign: 'center',
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Welcome Back 👋
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            Login using your email to continue
          </Typography>

          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />

          {error && (
            <Typography variant="body2" color="error" mb={2}>
              {error}
            </Typography>
          )}

          <Button
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading || !email}
            onClick={handleLogin}
            sx={{ py: 1.2, borderRadius: 2 }}
          >
            {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Login'}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
