import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import MovieNew from '../pages/MovieNew';
import { MoviePreview } from '../pages/MoviePreview';
import Profile from '../pages/Profile';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/movie/new" element={<MovieNew />} />
      <Route path="/movie/:id" element={<MoviePreview />} />
    </Routes>
  );
}
