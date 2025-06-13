// src/assets/components/Layout.jsx
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Header/>
      <main style={{ minHeight: '80vh'}}>
        <Outlet/>

      </main>
      <Footer/>
    </div>
  );
}
