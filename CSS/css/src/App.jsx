import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  // CSS inline dinâmico e x pro if ternário
  const x = 20;
  // CSS classe dinâmica y pro if ternário
  const y = true;
  return (
    <div className="App">
      {/* CSS global */}
      <h1>CSS no React</h1>
      <MyComponent />
      {/* o CSS do componente vaza, tomar cuidado com nome de classes */}
      <p>O CSS do componente vazou pro app.jsx</p>
      {/* CSS inline são passados por um objeto, por isso duplo parênteses*/}
      <p
        style={{
          color: "blue",
          padding: "25px",
          borderBottom: "1px dotted blue",
        }}
      >
        Este elemento tem estilos inline
      </p>
      {/* CSS inline dinâmico com if ternário */}
      <h2
        style={
          x > 20
            ? { color: "purple", borderBottom: "1px solid purple" }
            : { color: "orange", borderBottom: "1px solid orange" }
        }
      >
        CSS dinâmico com if ternário
      </h2>
      {/* classe dinâmica com if ternário */}
      <h3 className={y ? "redTitle" : "yellowTitle"}>
        Este estilo veio de uma classe dinâmica com if ternário
      </h3>
      {/* CSS modules, mesmo que coloque a classe title em outro componente 
      ele não irá pegar, pois e gerado um id para a class title */}
      <Title />
    </div>
  );
}

export default App;
