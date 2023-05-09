const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('activity', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    difficulty: {
        type: DataTypes.INTEGER,
        validate: {
        max: 5,
        min: 1
        }
    },

    duration: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    
    season: {
        type: DataTypes.ENUM('Summer', 'Autum', 'Winter', 'Spring'),
        allowNull: false,
    },
    },
    {
        timestamps: false
    });
};