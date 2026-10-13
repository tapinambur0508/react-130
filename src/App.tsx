import "./App.css";

// function App() {
//   const username1 = "Mary";
//   const username2 = "Dave";

//   return (
//     <>
//       <h1 className="counter">Hello World</h1>

//       {/* <img src="https://cats.com/image1.png"></img> */}
//       <img src="https://cats.com/image1.png" />
//       <input />
//       <br />

//       <p>
//         <strong>{username1}</strong>
//       </p>

//       <p>
//         <strong>{username2}</strong>
//       </p>

//       <p>
//         1 + 1 = {1 + 1}
//       </p>

//       <p>
//         {"Hello, React".toUpperCase()}
//       </p>

//       {0}
//       {""}
//       {false}
//       {null}
//       {undefined}
//     </>
//   )
// }

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CatInfo from "./components/CatInfo/CatInfo";

import CATS from "./cats.json";

function App() {
  return (
    <>
      <Header />

      <main>
        <h1>Cats store</h1>

        {CATS.map((cat) => (
          <CatInfo key={cat.id} cat={cat} />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;
