import './App.css';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Listado from './Components/Listado';
import Productos from './Components/Producto';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carrito:[],
      total:0,
      productosLista:[
        {codigo:1,descripcion:"Protesis 1", precio:0, url:'https://www.cbmwales.co.uk/wp-content/uploads/2017/05/1-cropped-.jpg'},
        {codigo:2,descripcion:"Protesis 2", precio:0, url:'https://studio.cults3d.com/pp0UGC2VNB4kfazcrN7c_vsLfvg=/516x516/https://files.cults3d.com/uploaders/15381432/illustration-file/cfce5151-6f82-4117-bb50-04cbe8ba3769/Pata-Pastor.png'},
        {codigo:3,descripcion:"Protesis 3", precio:0, url:'https://img1.yeggi.com/page_images_cache/3398083_dog-prosthesis-protesis-para-perros-by-sertroyer'},
        {codigo:4,descripcion:"Protesis 4", precio:0, url:'https://img1.yeggi.com/page_images_cache/1190888_dog-prosthetic-by-3designer27'},
        {codigo:5,descripcion:"Protesis 5", precio:0, url:'https://img1.yeggi.com/page_images_cache/593168_dog-leg-by-jonipilo'},
        {codigo:6,descripcion:"Protesis 6", precio:0, url:'https://img1.yeggi.com/page_images_cache/3785424_cat-prosthetic-leg-by-ouji58'},
      ],
    };
  }
  
  
  agregar=(producto)=>{

      let existe= this.state.carrito.find(e=>e.codigo===producto.codigo);
      let temp_lista= this.state.carrito;
      let producto_temporal;

      if(existe!==undefined){
        
        producto_temporal={
          cantidad:existe.cantidad+1,
          codigo:producto.codigo,
          descripcion:producto.descripcion,
          precio:producto.precio
        }
        
        temp_lista= this.state.carrito.filter(e=>e.codigo!==producto.codigo)
        console.log(temp_lista)
      }
      else{

        producto_temporal={
          cantidad:1,
          codigo:producto.codigo,
          descripcion:producto.descripcion,
          precio:producto.precio
        }
      }
     
      this.setState({
        carrito:[...temp_lista,producto_temporal],
        total:this.state.total+producto.precio
      })
     
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Archivo cargado exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
      
  }
 
  eliminar=(p,index)=>{
     
    let temporal;

      if(p.cantidad===1){
        temporal = this.state.carrito.filter((p,i)=>i!==index)
      }
      else{
        const producto_temporal={
          cantidad:p.cantidad-1,
          codigo:p.codigo,
          descripcion:p.descripcion,
          precio:p.precio
        }

        temporal = this.state.carrito.filter((p,i)=>i!==index)
        temporal=[...temporal,producto_temporal]

      }

  
     this.setState({
      carrito:temporal,
      total:this.state.total-p.precio
    })

    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Preparando archivo para su descarga',
      showConfirmButton: false,
      timer: 1500
    })
  }

  
  
  render() {
    var arregloSort= this.state.carrito.sort((x,y) => x.codigo-y.codigo);
    return (
      <div className="App">
        <Header/>
        <div className="App-celdas">
          
          <Productos
            ProductosLista={this.state.productosLista}
            agregar={this.agregar}

          />

          <Listado
            lista={arregloSort}
            eliminar={this.eliminar}
            total={this.state.total}
            eliminarCarrito={this.eliminarCarrito}
            
          />
          

          
          <title>
      <body> 
      <a href = "https://lumiere-a.akamaihd.net/v1/images/stitch_16x9_9ac13651.png" download = "Protesis" target = "_Explorer.exe">
      <button type= "button">Descargar</button>
      </a>
      </body>

  </title>

        </div>
      </div>
    )
  }
}

export default App;