import { Count } from "./components/count";
import { Lists } from "./components/lists";

export function App() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Count />
      </div>
      <div style={{ textAlign: "center", border: "1px solid black", marginTop: "20px", padding: "20px", margin: "20px auto", width: "50%" }}>
        <Lists />
      </div>
    </>
  );
}
