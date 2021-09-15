const fs = require('fs');

const crearArchivo = async (base=5, hasta=10) =>{

    try{

        let salida='';

        for(let i=1; i<=hasta ;i++){
            salida+=`${base} x ${i} = ${base*i}\n`;
        } 

        if(listar){
            console.log('====================='.green);
            console.log(`Tabla del ${base}`);
            console.log('====================='.green);
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            return `tabla-${base}`;
        }catch(err){
            throw err;
        }
}

module.exports = {
    crearArchivo
}