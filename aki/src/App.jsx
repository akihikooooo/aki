import React from "react";


function Debug() {
  return (
    <div>
      <div className="w-5 h-5 bg-bg" />
      <div className="w-5 h-5 bg-muted" />
      <div className="w-5 h-5 bg-font" />
      <div className="w-5 h-5 bg-light" />
    </div>
  );
}

function Header() {
  return (
    <div className="w-full h-full bg-bg flex items-center p-2 rounded-3xl">
      <img src="./img/pfp.jpeg" alt="pfp" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full" />
      <div id="details" className="flex flex-col justify-center ml-2 text-font">
        <h1 className="font-black text-lg sm:text-2xl">Akihiko Tanaka</h1>
        <p id="bio">Escape the toxicity.</p>
      </div>
    </div>
  );
}

function Social(props) {
  return (
    <div className="flex items-center p-2 rounded-3xl">
      <img src={props.img} alt={props.alt} className="w-7" />
      <div id="details" className="flex flex-col justify-center ml-1 text-font">
        <h1 className="font-black text-md">{props.name}</h1>
      </div>
    </div>
  );
}

function BioD(props) {
  return (
    <div className="flex items-center justify-between border-y-2 border-muted">
      <h1 className="font-black text-lg uppercase">{props.bio}:</h1>
      <p className="text-md text-right ml-2">{props.value}</p>
    </div>
  );
}

function Obsession(props) {
  return (
    <div className="text-center uppercase">
      <p className="text-md">
        {(props.type === "music" || props.type === "song") && "🎧"}
        {(props.type === "manga" || props.type === "book" || props.type === "manhua" || props.type === "manhwa") && "📖"}
        {props.type === "game" && "🎮"}
        {props.type === "anime" && "📺"}
        {props.type === "movie" && "🎬"}
        {props.type === "person" && "👤"}
        {props.type === "artist" && "👤🎶"}
        {props.type === "album" && "💿🎶"}
        {props.title}
      </p>
    </div>
  );
}
function Games(props) {
  return (
    <div className="text-left uppercase">
      <p className="text-md">
        {(props.activity === "active") && "🎮"}
        {(props.activity === "inactive") && "❌"}
        {props.title}
        {(props.id !== "") && <p className="text-xs">ID: {props.id}</p>}
      </p>
    </div>
  );
}

let twelve = new Date(1747238400 * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

export default function App() {
  return (
    <div className=" flex items-center  bg-light font-Montserrat overflow-hidden">
      <div
        className="min-h-screen w-full max-w-7xl
        grid gap-3 p-3 
        border-font border-2 
        sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        lg:m-32 md:m-16 sm:m-8 m-4"
      >
        <div id="header-profile" className="lg:col-span-1 md:col-span-2 sm:col-span-1 
        row-span-1 bg-bg rounded-3xl p-4">
          <Header />
        </div>
        <div id="socials"
          className="md:col-span-2 row-span-1 
          bg-bg rounded-3xl p-4"
        >
          <div className="flex h-full flex-col">
            <h1 className="font-black lg:text-2xl">⊹ Socials & Connections ⊹</h1>
            <div className="grid md:grid-cols-2 w-full">
              <Social img="./img/discord.png" alt="discord" name="@akihikooo" />
              <Social
                img="./img/instagram.png"
                alt="instagram"
                name="@akihikoooooooooo0"
              />
            </div>
          </div>
        </div>
        <div id="call"
          className="col-span-1 row-span-1 bg-bg rounded-3xl p-4">
          <h1 className="text-md font-black">Names to call me:</h1>
          <div className="grid grid-cols-2 gap-1">
            <p className="text-center">Akiera</p>
            <p className="text-center">Aki</p>
            <p className="text-center">Akihiko</p>
            <p className="text-center">Kizen</p>
            <p className="text-center">Xeno <i>(Tze-noh)</i></p>
          </div>
        </div>
        <div id="obsession" className="col-span-1 row-span-2 bg-bg rounded-3xl p-4">
          <h1 className="text-md font-black">Current Obsession:</h1>
          <div className="">
            <Obsession type="song" title="Backburner | NIKI"/>
            <Obsession type="artist" title="Lady Gaga"/>
            <Obsession type="album" title="MAYHEM | Lady Gaga"/>
            <Obsession type="person" title="Mydei | Honkai Star Rail"/>
            <Obsession type="person" title="Dan Heng | Honkai Star Rail"/>
            <Obsession type="person" title="Caelus | Honkai Star Rail"/>
          </div>
        </div>
        <div id="bio" 
        className="col-span-1 row-span-4 bg-bg rounded-3xl p-4">
          <div className="flex h-full flex-col">
            <h1 className="font-black text-xl text-center">⊹ Bio ⊹</h1>
            <p className="text-center">My 00:00 is your {twelve}</p>
            <div className="grid grid-cols-1 gap-1">
              <BioD bio="Birthdate" value="May 15" />
              <BioD bio="Pronouns" value="He/Him, She/Her, They/Them" />
              <BioD bio="Language" value="English, Filipino" />
              <BioD bio="MBTI" value="INTP-T" />
            </div>
          </div>
        </div>
        <div id="games"
        className="col-span-1 row-span-2 bg-bg rounded-3xl p-4">
          <h1 className="text-md font-black">Games I play:</h1>
          <div className="grid grid-cols-1 gap-1">
            <Games activity="inactive" title="Genshin Impact" id=""/>
            <Games activity="inactive" title="Roblox" id="kiiiiizenn"/>
            <Games activity="active" title="Honkai Star Rail" id="839062833 (Asia)"/>
            <Games activity="active" title="Mobile Legends: Bang Bang" id="723128711 (10339)"/>
            <Games activity="active" title="Minecraft" id="Ahnjiwon6091"/>
            </div>
          </div>
        {/* <div id="projects" className="lg:col-span-1 sm:col-span-1 row-span-1 bg-bg rounded-3xl p-4 flex items-center">
          <h1 className="text-md font-black text-center">⊹ Projects ⊹</h1>
          <div className="grid grid-cols-1 gap-1">
            <p className="text-center">Until the Last Sunset</p>
          </div>
          </div> */}
        <div id="later" className="lg:col-span-2 sm:col-span-1 row-span-1 bg-bg rounded-3xl p-4 flex items-center">
          <img src="./img/sprite.png" className="h-24" alt="sprite"/>
          <h1 className="text-md font-black text-center">⊹ Infos will be added later, I'm too lazy to develop ⊹</h1>
          </div>
        <div className="md:col-span-2 sm:col-span-1 row-span-1 rounded-3xl p-4 flex items-center justify-center">
          <h1 className="text-md font-black text-center">⊹ Created by Akihiko ⊹</h1>
        </div>
      </div>
    </div>
  );
}
