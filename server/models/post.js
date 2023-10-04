const users= require("./user")
module.exports=(sequelize,DataTypes)=>{
    const posts=sequelize.define("posts",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        postText:{
            type:DataTypes.STRING,
            allowNull:false
        }
        ,user_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        }

    },{ timestamps: false })

    return posts

}