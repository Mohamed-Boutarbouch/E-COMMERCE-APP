import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '@/pages/Home';
import NavigationBar from '@/components/NavigationBar';

export const App = () => {
  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};
