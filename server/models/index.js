const {Sequelize,DataTypes} =require("sequelize")

const sequelize = new Sequelize('nodesql', 'root', 'password', {
  host: 'localhost',
  dialect:'mysql',
  logging:false
});

sequelize.authenticate().then(()=>{
console.log("connection successfull")
}).catch(()=>{
  console.log(error)
})


const db={};
db.Sequelize=Sequelize
db.sequelize=sequelize

db.users=require("./user")(sequelize,DataTypes)
db.posts=require("./post")(sequelize,DataTypes)

db.users.hasOne(db.posts,{sourceKey: 'id',foreignKey:"user_id"});
db.posts.belongsTo(db.users,{foreignKey:"user_id"})

db.sequelize.sync({alter:true}).then(()=>{
  console.log("database got synced")
})
module.exports=db