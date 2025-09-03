import { Route, Routes, Navigate } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import LecturesPage from './features/lectures/LecturesPage';

function Home() {
  return <div style={{ padding: 12 }}>Welcome</div>;
}

function Homework() {
  return <div style={{ padding: 12 }}>Homework page</div>;
}

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Navigate to="/lectures" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lectures" element={<LecturesPage />} />
        <Route path="/homework" element={<Homework />} />
      </Route>
    </Routes>
  );
}
