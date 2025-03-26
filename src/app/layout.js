import { AuthProvider } from '@/context/AuthContext';
import { Geist, Geist_Mono } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import SessionWrapper from './components/SessionWrapper';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import './globals.css';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Course Pilot',
  description: 'AI-Powered Course Management System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
        <AuthProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Navbar></Navbar>
            {children}
            <ToastContainer></ToastContainer>
            <Footer></Footer>
          </body>
        </AuthProvider>
      </SessionWrapper>
    </html>
  );
}
