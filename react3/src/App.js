import Header from "./components/Header";
import Footer from "./components/Footer";
import AllRoutes from "./components/AllRoutes";

let App =() => {
  return (
    <>
    <Header />
      <div className="container" style={{minHeight : "700px"}}>
          <AllRoutes />
      </div>
    <Footer />
    </>
  );
}

export default App;
