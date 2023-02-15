import Sidebar from "./Pages/Sidebar";
import Profile from "./Pages/Profile";
import AboutMe from "./Pages/AboutMe";
import Skill from "./Pages/Skill";
import Resume from "./Pages/Resume";
import GetinTouch from "./Pages/GetinTouch";

function App() {

  return (
    <div className="flex">
      <div className="App h-screen w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <Profile />
        <AboutMe />
        <Skill />
        <Resume />
        <GetinTouch />
      </div>
    </div>
  );
}
export default App;
