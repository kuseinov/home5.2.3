import "./App.css";
import Bloks from "./components/Bloks";
import UserInfo from "./components/UserInfo";
import Card from "./components/СardLayout ";

const blocks = [
  {
    id: "b2",
    block: "green",
  },
  {
    id: "b3",
    block: "color",
  },
  {
    id: "b4",
    block: `${Math.random()}`,
  },
  {
    id: "b5",
    block: "green",
  },
  {
    id: "b7",
    block: `${Math.random()}`,
  },
  {
    id: "b8",
    block: "yellow",
  },
];

const users = [
  {
    id: "#0001",
    username: "Phineas",
    wallpaper: "rgb(0, 81, 119)",
    userInfo: "phin • 20 yrs co-founder & dev @ giggl",
    profilePic:
      "https://cdn.discordapp.com/avatars/94490510688792576/55294160686d30f11d19d21045d3f35a",
  },
  {
    id: "#1999",
    username: "Dustin",
    wallpaper: "rgb(0, 0, 0)",
    userInfo:
      "22y - Software Engineer passionate about networking and infrastructure",
    profilePic:
      "https://cdn.discordapp.com/avatars/156114103033790464/8bd12e1bdc5bf93249eeffb783587823",
  },
  {
    id: "#3020",
    username: "pxseu",
    wallpaper: "rgb(126, 97, 59)",
    userInfo:
      "penniless, invented dogecoin, times person of the year zero years in a row",
    profilePic:
      "https://cdn.discordapp.com/avatars/94490510688792576/55294160686d30f11d19d21045d3f35a",
  },
  {
    id: "#6577",
    username: "🗕🗗🗙",
    wallpaper: "rgb(24, 25, 28)",
    userInfo: "👶 7 years ago 💔2 years ago",
    profilePic:
      "https://cdn.discordapp.com/avatars/937051733773938689/679321173067da9d28dc7ce7f6351323",
  },
  {
    id: "#0002",
    username: "stealthwave",
    wallpaper: "rgb(66, 66, 112",
    userInfo: "follow me on twitter ☺",
    profilePic:
      "https://cdn.discordapp.com/avatars/94490510688792576/55294160686d30f11d19d21045d3f35a",
  },
  {
    id: "#0023",
    username: "Atzu",
    wallpaper: "rgb(66, 81, 78)",
    userInfo: "Dev for streamers.",
    profilePic:
      "https://cdn.discordapp.com/avatars/94490510688792576/55294160686d30f11d19d21045d3f35a",
  },
  {
    id: "#0016",
    username: "Voltages",
    wallpaper: "rgb(0, 81, 119)",
    userInfo: "Information technology specialist.",
    profilePic:
      "https://cdn.discordapp.com/avatars/94490510688792576/55294160686d30f11d19d21045d3f35a",
  },
];

function App() {
  return (
    <div className="App">
      {/* <Bloks block={blocks} /> 5.2  */}
      
   
      {users.map((item) => {
        return (
          <userInfo>
          <Card
            wallpaper={item.wallpaper}
            profilePic={item.profilePic}
            username={item.username}
            id={item.id}
            userInfo={item.userInfo}
          />
          </userInfo>

        );
      })}
    </div>
  );
}

export default App;
