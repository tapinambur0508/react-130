import { useState } from "react";

import CatInfo from "./components/CatInfo/CatInfo";
import TagManager from "./components/TagManager/TagManager";

function App() {
  const votes = 10;
  const canReset = true;

  const [dislikes, setDislikes] = useState<number>(0);

  const handleDislike = () => {
    setDislikes((prevDislikes) => prevDislikes + 1);
  };

  return (
    <>
      <h1>State</h1>

      {/* <CatInfo
        name="Whiskers"
        email="whiskers@cat.com"
        age={5}
        isAvailable={true}
        dislikes={dislikes}
        onDislikeClick={handleDislike} />

      <CatInfo
        name="Luna"
        email="luna@cat.com"
        age={2}
        isAvailable={true}
        dislikes={dislikes}
        onDislikeClick={handleDislike} /> */}

      <TagManager />

      {canReset && <button>Reset</button>}
      {votes ? <p>Vote Options</p> : <p>Notification</p>}
    </>
  );
}

export default App;
