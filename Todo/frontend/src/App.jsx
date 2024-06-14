import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useRecoilValue, RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  // const jobsAtomCount = useRecoilValue();
  return (
    <>
      <button>Home</button>
      <button>My Network ({})</button>
      <button>Jobs ()</button>
      <button>Meassaging</button>
      <button>Notifications</button>
      <button>ME</button>
    </>
  );
}

export default App;
