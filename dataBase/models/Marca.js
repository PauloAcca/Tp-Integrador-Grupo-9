module.exports=(sequelize, dataTypes)=>{
    let alias= 'Marca';
    let cols={
        idMarca:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            unique:true,
            allowNull:false,
        },
        nombreMarca: {
            type: dataTypes.STRING,
            allowNull:false,
        },
    }
    let config={
        tableName:'marcas', //No hace falta si la tabla es el plural del nombbre del archivo
        timestamps: false, //Son columnas de actualizacion de las tablas, sino las tenemos se pone false
    }

    const Marca = sequelize.define(alias, cols, config);


    Marca.associate = function(models){
        Marca.hasMany(models.Producto,{
            as:"productos",
            foreignKey:'idMarca',
            timestamps: false
        })
}
    return Marca;
};
