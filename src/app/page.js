import { Button, Container, Stack, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Stack spacing={2} alignItems="flex-start">
        <Typography variant="h3" component="h1">
          Next.js + MUI Ready
        </Typography>
        <Typography color="text.secondary">
          This project includes Next.js and Material UI dependencies.
        </Typography>
        <Button variant="contained">Get Started</Button>
      </Stack>
    </Container>
  );
}
