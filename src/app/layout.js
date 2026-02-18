export const metadata = {
  title: 'Next + MUI Starter',
  description: 'A minimal Next.js app with Material UI installed.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
