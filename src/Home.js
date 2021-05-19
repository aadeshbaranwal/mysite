import Index from "./components/Index";
import Header from "./navigation/Header";
import Sidebar from "./navigation/SideBar";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
      }}
    >
      <div style={{ width: "19%" }}>
        <Sidebar />
      </div>
      <div style={{ width: "80%" }}>
        <Header />
        <Index />
      </div>
    </div>
  );
}
