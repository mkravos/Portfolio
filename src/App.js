import './App.css';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import FeaturedProjects from './components/FeaturedProjects';

export default function App() {
  return (
    <div>
      <Welcome />
      <Profile />
      <FeaturedProjects />
    </div>
  );
}
