import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";
import EditarProductos from "./components/EditarProductos";

//redux
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container" mt-5>
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route exact path="/productos/editar/:id" component={EditarProductos} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
