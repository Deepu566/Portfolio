import Sidebar from "./Pages/Sidebar";
import Profile from "./Pages/Profile";
import AboutMe from "./Pages/AboutMe";
import Skill from "./Pages/Skill";
import Resume from "./Pages/Resume";
import GetinTouch from "./Pages/GetinTouch";
import Navbar from "./Component/Navbar";


function App() {

  return (
    <div className="flex">
      <div className="App h-screen w-[20%] max-sm:hidden">
        <Sidebar />
      </div>
      <div className="w-[80%]  max-sm:w-full">
        <Navbar />
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
