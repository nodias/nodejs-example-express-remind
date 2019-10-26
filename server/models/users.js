'use strict';
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        }
    });
    users.associate = function (models) {
        // associations can be defined here
    };
    return users;
};