import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Powder from '../Pata-Pastor.rar'

const Listado = (props) => {
    return ( 
        <div className="App-listado">
          <h4>Mi Carrito</h4>
        {
                    
            props.lista.length===0   
            ? <p>No hay productos</p>
            : 
             <div>

                <div>
                  <p>Total:${(props.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </p>
               </div>
              
             <Table striped bordered hover style={{verticalAlign: 'middle'}}>
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Descargas</th>
                <th>Num Archivos</th>
                <th></th>

              </tr>
            </thead>
              <tbody >
            {
              props.lista.map((x,index)=>
                <tr key={index}>
                    <td>{x.cantidad}</td>
                    <td>{x.codigo}</td>
                    <td>{x.descripcion}</td>
                    <td>{(x.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                    <td>{(x.cantidad*x.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                    <td><Button onClick={()=>props.eliminar(x,index)}variant="danger">Eliminar</Button></td>
                    <a href={Powder} 
                    download="Protesis.rar">
                    <Button>Descarga</Button>
</a>

                </tr>
              )
            }
              </tbody>
            </Table>
            
            </div> 
          }

          </div>
     );
}
 
export default Listado;