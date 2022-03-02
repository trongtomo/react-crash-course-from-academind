import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import AllMeetings from "./pages/AllMeetings";
import Favorites from "./pages/Favorites";
import NewMeeting from "./pages/NewMeetings";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetings />} />
        <Route path="/new-meetup" element={<NewMeeting />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
