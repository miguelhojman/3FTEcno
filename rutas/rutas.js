//aca van las rutas de mi aplicacion que luego seran usadas en app.js
const express=require('express');
const router=express.Router();
//necesito body-parser para poder usar la información del formulario que viaja en la url
const bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
//traigo el modelo que voy a usar en la ruta post para guardar la información del formulario
//y guardarla en la base de datos
const formModel=require('./modelos')

//rutas
router.get('/',function(req,res){
  res.render('inicio.ejs');
});
router.get('/html',function(req,res){
  res.render('html.ejs');
});
router.get('/css',function(req,res){
  res.render('css.ejs');
});
router.get('/javascript',function(req,res){
  res.render('javascript.ejs');
});
router.get('/react',function(req,res){
  res.render('react.ejs');
});
router.get('/node',function(req,res){
  res.render('node.ejs');
});
router.get('/express',function(req,res){
  res.render('express.ejs');
});
router.get('/mongo',function(req,res){
  res.render('mongo.ejs');
});
router.get('/motorPlantillas',function(req,res){
  res.render('motorPlantillas.ejs');
});
router.get('/informacion',function(req,res){
  res.render('informacion.ejs');
});
router.get('/videos',function(req,res){
  res.render('videos.ejs');
});
router.get('/formulario',function(req,res){
  res.render('formulario.ejs');
});
router.get('/formularioCompletado',function(req,res){
  res.render('formularioCompletado.ejs');
});
//ruta post para el formulario 
router.post('/formulario',function(req,res){
  let newUser=new formModel({
      nombre:req.body.nombre,
      apellido:req.body.apellido,
      mail:req.body.mail,
      modalidad:req.body.modalidad,
      fecha:req.body.fecha,
      tecnologia1:req.body.tecnologia1,
      tecnologia2:req.body.tecnologia2,
      tecnologia3:req.body.tecnologia3,
      tecnologia4:req.body.tecnologia4,
      tecnologia5:req.body.tecnologia5,
      tecnologia6:req.body.tecnologia6,
      tecnologia7:req.body.tecnologia7,
      tecnologia8:req.body.tecnologia8,
      comentarios:req.body.comentarios
  })
  newUser.save()
  //saco por la terminal el objeto que se crea con la info del formulario que se guarda en la db
  console.log(newUser) 
  res.redirect('/formularioCompletado')
})
//exporto el modulo
module.exports=router;