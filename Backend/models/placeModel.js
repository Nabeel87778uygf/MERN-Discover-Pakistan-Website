import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Place = sequelize.define(
    "Place",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        province: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        rating: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 4.5,
        },

        latitude: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },

        longitude: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
    },
    {
        tableName: "places",
        freezeTableName: true,
        timestamps: true,
    }
);

export default Place;