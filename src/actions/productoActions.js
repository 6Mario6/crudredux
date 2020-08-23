import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';
import clienteAxios from '../config/axios';

export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());
        try{
            await clienteAxios.post('/productos', producto);

            dispatch(agregarProductoExito(producto));
        } catch (error){
            console.log(error);
            dispatch(agregarProductoError(true));
        }
    }
}

const agregarProducto =() =>({
    type:AGREGAR_PRODUCTO,
    payload: true
});

const agregarProductoExito = producto =>({
    type:AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = estado =>({
    type:AGREGAR_PRODUCTO_ERROR,
    payload: estado
})