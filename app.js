const express=require('express');
const app=express();
//const port=3500;
//configuracion del puerto con dos opciones:una para el deploy y otra para trabajar en local
app.set('port',process.env.PORT || 3500)

//conectar a MongoDB Atlas
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://formulario:formulario@cluster0.moegbpv.mongodb.net/TPFINAL")
            .then(()=>console.log('MongoDB Atlas conectada'))
            .catch((e)=>console.log(e))

//para usar el contenido estatico de la carpeta public
app.use(express.static('public'));

//para usar ejs
app.set('view engine','ejs');         //indica el motor de plantillas
app.set('views',__dirname+'/views');  //indica la ruta de las vistas

//llamado a las rutas
app.use('/',require('./rutas/rutas'));

//inicio del servidor
app.listen(app.get('port'),function(){
    console.log(`Escuchando en el puerto ${app.get('port')}`)
}) 