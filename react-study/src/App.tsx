import { Count } from "./components/count";
import { Lists } from "./components/lists";

export function App() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Count />
      </div>
      <div>
        <Lists />
      </div>
    </>
  );
}
