import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { MoviePreview } from '../pages/MoviePreview';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<h1>TODO</h1>} />
      <Route path="/movie/new" element={<h1>TODO</h1>} />
      <Route path="/movie/:id" element={<MoviePreview />} />
    </Routes>
  );
}
