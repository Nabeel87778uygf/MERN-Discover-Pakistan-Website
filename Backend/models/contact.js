import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Contact = sequelize.define("Contact", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    status: {
        type: DataTypes.ENUM("New", "Read"),
        defaultValue: "New",
    },

}, {
    tableName: "contacts",
    freezeTableName: true,
    timestamps: true,
});

export default Contact;