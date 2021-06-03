import "../stylesheet/App.scss";
import CardPreview from "./CardPreview.js";
import Form from "./Form.js";

function Main() {
  return (
    <>
      <main className="main">
        <CardPreview />
        <Form />
      </main>
    </>
  );
}

export default Main;
