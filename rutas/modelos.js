const mongoose=require('mongoose')

//crear el data schema
const formSchema={
    nombre:String,
    apellido:String,
    mail:String,
    modalidad:String,
    fecha:String,
    tecnologia1:String,
    tecnologia2:String,
    tecnologia3:String,
    tecnologia4:String,
    tecnologia5:String,
    tecnologia6:String,
    tecnologia7:String,
    tecnologia8:String,
    comentarios:String
}
//crear el modelo
const formModel=mongoose.model('formModel',formSchema)
//exportar el modelo
module.exports=formModel
