import productosReducer from '../reducers/productosReducer';
import {
    AGREGAR_PRODUCTO, 
    AGREGAR_PRODUCTO_EXITO, 
    AGREGAR_PRODUCTO_ERROR
} from '../types';
import clienteAxios from '../config/axios';

const agregarProducto = () =>({
    type: AGREGAR_PRODUCTO
})

//crear nuevos productos
export function crearNuevoProductoAction(producto){
    return async (dispatch) =>{
        dispatch(agregarProducto());

        try{
            //inserta en la API o BD
            await clienteAxios.post('/productos', producto);
            //si todo sale bien, actualizar el state
            dispatch(agregarProductoExito(producto))
        }catch(error){
            console.log(error);
            //si hay error
            dispatch(agregarProductoError(true))
        }
    }
}
//si el producto se guarda ern la base de datos
const agregarProductoExito = producto =>({
    type: AGREGAR_PRODUCTO_EXITO,
    payload:producto
})

//validar Error
const agregarProductoError = (estado) =>({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})