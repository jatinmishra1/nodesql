const jwt=require("jsonwebtoken")
const Posts=require("./post")
module.exports=(sequelize,DataTypes)=>{
    const users=sequelize.define("users",{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        }

    },{ timestamps: false })
    
    users.getJWTtoken=function(user){
        
        return jwt.sign({id:user.id},"bfwihebfihbr3hfbrj",{
            expiresIn:70000
        })
    }


    
    return users
}