import axios from "axios";
import { useState, useEffect } from "react";

import Timer from "./components/Timer/Timer";
import Sidebar from "./components/Sidebar/Sidebar";

import type { Character } from "./types/character";

function App() {
  const [_character, setCharacter] = useState<Character | null>(null);
  const [counter, _setCounter] = useState<number>(() => {
    const item = localStorage.getItem("my-counter");

    if (item === null) {
      return 1;
    }

    return JSON.parse(item) as number;
  });
  // const [isTimerVisible, setIsTimerVisible] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    async function fetchCharacter() {
      try {
        const { data } = await axios.get<Character>(
          `https://swapi.info/api/people/${counter}`,
        );
        setCharacter(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCharacter();
  }, [counter]);

  useEffect(() => {
    localStorage.setItem("my-counter", JSON.stringify(counter));
  }, [counter]);

  return (
    <>
      <h1>Effects</h1>

      {/* <button onClick={() => setCounter(prevCounter => prevCounter > 1 ? prevCounter - 1 : prevCounter)}>-</button>
      <span>{counter}</span>
      <button onClick={() => setCounter(prevCounter => prevCounter < 20 ? prevCounter + 1 : prevCounter)}>+</button>
      <pre>{JSON.stringify(character, null, 2)}</pre>

      <button onClick={() => setIsTimerVisible(prevIsTimerVisible => !prevIsTimerVisible)}>Toggle</button>
      {isTimerVisible && <Timer />} */}

      <button onClick={() => setIsSidebarOpen(true)}>OPEN SIDEBAR</button>
      {isSidebarOpen && (
        <Sidebar onClose={() => setIsSidebarOpen(false)}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            repellat quos molestiae sint reprehenderit iste eaque inventore
            architecto suscipit reiciendis consequatur labore quia asperiores
            ducimus excepturi amet, fuga quam! Recusandae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            impedit suscipit corrupti delectus laboriosam. Quaerat aperiam
            ducimus repellat, eius laudantium recusandae ipsa beatae! Rerum
            accusamus dolorem dolor consectetur, similique atque.
          </p>
          <button>Click</button>
          <table>
            <tbody>
              <tr>
                <td>1</td>
              </tr>
            </tbody>
          </table>
          <Timer />
        </Sidebar>
      )}
    </>
  );
}

export default App;
