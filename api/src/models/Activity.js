const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4,35]
            }
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1, // Valor mínimo permitido
                max: 5, // Valor máximo permitido
            }
        },
        duration: {
            type: DataTypes.TIME,
            allowNull: false
        },
        season: {
            type: DataTypes.ENUM('Summer', 'Autum', 'Winter', 'Spring'),
            allowNull: false
        }
    },
    { 
        timestamps: false 
    });
};
