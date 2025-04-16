import { Geist, Geist_Mono } from "next/font/google";
import './css/vendors/bootstrap.min.css';
import './css/vendors/animate.css';
import './css/vendors/jquery.fancybox.min.css';
import './css/vendors/swiper-bundle.min.css';
import './css/vendors/flaticon/flaticon.css';
import './css/vendors/all.min.css';
import './css/vendors/bootstrap-icons-1.9.1/bootstrap-icons.css';
import './css/main.css';
import Script from "next/script";
import Head from "next/head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RNDwebtech | Professional Web Development, CMS & SEO Services", 
  description: "RNDwebtech delivers cutting-edge web applications, CMS solutions, SEO, and branding services. Partner with experts to grow your digital presence.",
  icons: {
    icon: '/logo-light.png',
    shortcut: '/logo-light.png'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="/js/vendors/jquery-3.6.1.min.js" strategy="beforeInteractive"/>
        
        <Script src="/admin-js/apps.js" strategy="beforeInteractive"/>
        <Script src="/admin-js/bootstrap.min.js" strategy="beforeInteractive"/>
        <Script src="/admin-js/jquery.min.js" strategy="beforeInteractive"/>
        <Script src="/admin-js/config.js" strategy="beforeInteractive"/>

        <Script src="/js/vendors/bootstrap.bundle.min.js" strategy="beforeInteractive"/>
        
        <Script src="/js/vendors/wow.min.js" strategy="beforeInteractive"/>
        
        <Script src="/js/vendors/swiper-bundle.min.js" strategy="beforeInteractive"/>
        
        <Script src="/js/vendors/jquery.fancybox.min.js" strategy="beforeInteractive"/>
        
        <Script src="/js/vendors/particles.min.js" strategy="beforeInteractive"/>
        
        <Script src="/js/vendors/jquery.countTo.js" strategy="beforeInteractive"/>
        
        <Script src="/js/main.js"/>

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} dark-theme vertical dark`}>
        {children}
      </body>
    </html>
  );
}
