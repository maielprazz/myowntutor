'use strict';

module.exports = (sequelize, Datatypes)=>{
    return sequelize.define('user', {
        id:{
            type: Datatypes.UUID,
            primaryKey: true
        },
        first_name:{
            type: Datatypes.STRING,
            isAlphanumeric: true,
            required:true,
            Allownull: true
        },
        last_name:{
            type: Datatypes.STRING,
            required:true,
            Allownull: true
        },
        username:{
            type: Datatypes.STRING,
            required: true,
            Allownull: true,
            len: [8,20]
        },
        password:{
            type: Datatypes.STRING,
            required: true,
            Allownull: true,
            len: [8,20]
        },
        email:{
            type: Datatypes.STRING,
            required: true,
            allowNull: true,
            len: [6,100],
            isEmail: true
        },
        // permission_id:{
        //     //Foreign Key permission table 
        //     type: Datatypes.INTEGER,
        //     required:true,
        //     allowNull:false
        // },
        updated_at:{type: Datatypes.DATE},
        deleted_at:{type: Datatypes.DATE}
    },
    {
        underscored: true,
        paranoid: true
    })
}