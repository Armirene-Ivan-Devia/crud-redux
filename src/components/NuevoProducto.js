import React, {useState} from "react";
//Actions de redux
import {crearNuevoProductoAction} from '../actions/productoActions';
import { useDispatch, useSelector } from "react-redux";

const NuevoProducto = () => {
    //state del componente
    const [nombre, guardarNombre] = useState ('');
    const [precio, guardarPrecio] = useState (0);

    //utilizar useDispatch y te crea una funcion
    const dispatch = useDispatch();
    //mandar a llamar el actin de productoAction
    const agregarProducto = producto => dispatch( crearNuevoProductoAction (producto));
    //cuando el usuario haga submit
    const submitNuevoProducto = e =>{
        e.preventDefault();

        //validar formulario
        if(nombre.trim()=== '' || precio <= 0){
            return;
        }
        //si no hay errores

        //crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        });
    }
    return (  
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        <form 
                            onSubmit={submitNuevoProducto}>

                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio producto"
                                    name="precio"
                                    value={precio}
                                    onChange={e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase
                                d-block w-100">
                                    Agregar
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NuevoProducto;