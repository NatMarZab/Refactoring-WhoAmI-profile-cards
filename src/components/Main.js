// import "../stylesheet/App.scss";
import Card from "./Card";
import Form from "./Form.js";

function Main() {
  return (
    <>
      <main className="main">
        <Card />
        <Form />
      </main>
    </>
  );
}

export default Main;

// He sustituído <CardPreview /> por <Card />
// porque si no, no aparecía el botón de Reset.