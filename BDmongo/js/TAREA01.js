//USANDO LA BASE DE DATOS
use('proyecto_gym');

//CREANDO SEGUNDA COLLECION
db.createCollection("devoluciones");

//LISTAR LOS DATOS
use('proyecto_gym');
db.devoluciones.find();
db.ventas.find();

//INSERTAR DATOS A LAS COLECCION (VENTAS)
use('proyecto_gym');
db.ventas.insertOne({"idVenta": 1111,"idCliente": 1010, "Fecha venta": "25/08/2001",
"pagoNeto": 85000, "estado": "pagado"});

db.ventas.insertOne({"idVenta": 2222,"idCliente": 2020, "Fecha venta": "12/09/2002",
"pagoNeto": 95000, "estado": "por cancelar"});

db.ventas.insertOne({"idVenta": 3333,"idCliente": 3030, "Fecha venta": "20/10/2021",
"pagoNeto": 85000, "estado": "pagado"});

db.ventas.insertOne({"idVenta": 4444,"idCliente": 4040, "Fecha venta": "23/05/2012",
"pagoNeto": 85000, "estado": "pagado"});

//INSERTAR DATOS A LAS COLECCION (devoluciones)
use('proyecto_gym');
db.devoluciones.insertOne({"idDevoluVenta": 9999,"idVenta": 1212, "Idproducto": 2323,
"motivo": "caducado", "estado": true, "Fecha devolucion": "23/05/2012"});

db.devoluciones.insertOne({"idDevoluVenta": 8888,"idVenta": 1313, "Idproducto": 2424,
"motivo": "roto", "estado": true, "Fecha devolucion": "03/6/2002"});

db.devoluciones.insertOne({"idDevoluVenta": 7777,"idVenta": 1414, "Idproducto": 2525,
"motivo": "no lo necesito", "estado": false, "Fecha devolucion": "13/08/2013"});

db.devoluciones.insertOne({"idDevoluVenta": 6666,"idVenta": 1515, "Idproducto": 2626,
"motivo": "caducado", "estado": true, "Fecha devolucion": "11/02/2022"});


//MODIFICAR DATOS DE LAS COLEECION (VENTAS)
use('proyecto_gym');
db.ventas.updateOne({"idVenta": 1111},{$set: {"estado": "perdido"}});
db.ventas.updateOne({"idVenta": 4444},{$set: {"pagoNeto": 60000}});

//MODIFICAR DATOS DE LAS COLEECION (DEVOLUCIONES)
use('proyecto_gym');
db.devoluciones.updateOne({"idDevoluVenta": 9999},{$set: {"motivo": "mal estado"}});
db.devoluciones.updateOne({"idDevoluVenta": 7777},{$set: {"estado": true}});

//CONSULTAR TODOS LOS ELEMENTOS
use('proyecto_gym');
db.ventas.find();
db.devoluciones.find();

//TODOS LOS DOCUMENTOS ORGANIZADOS POR UN ELEMENTO
use('proyecto_gym');
db.ventas.find().sort({"idVenta":1});

//CONTAR LOS ELEMENTOS
use('proyecto_gym');
db.ventas.count();

//ELIMINAR DOS REGISTROS VENTAS
use('proyecto_gym');
db.ventas.deleteOne({"idVenta": 1111});
db.ventas.deleteOne({"idVenta": 4444});

//ELIMINAR DOS REGISTROS DEVOLUCIONES
use('proyecto_gym');
db.devoluciones.deleteOne({"idDevoluVenta": 8888});
db.devoluciones.deleteOne({"idDevoluVenta": 7777});

