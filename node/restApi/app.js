const express= require("express");
const app = express();
const mongo =require("mongodb");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser=require("body-parser");
dotenv.config();
let db;
const MongoClient = mongo.MongoClient;
app.use(cors());
const MONGO_URL = process.env.MONGO_URL;
app.use(bodyParser.json());

const PORT = process.env.PORT;
MongoClient.connect(MONGO_URL,(err, client)=>
{
    console.log("Mongo is connected");
 
    if (err)
     console.log("Error while connecting");

     db =client.db("Restaurant-app");
     app.listen(PORT,()=>
     {
        console.log(`Server started on port ${PORT}`);
     })

});
app.get("/" ,(req,res)=>
{
res.send("Hi there!!!! 😊😂❤️");
})

app.get("/location",(req,res) =>
{
    db.collection("location").find().toArray((err,result)=>
    {
        if(err) throw err;
        res.send(result);

    })
});
// app.get("/RestaurantData", (req,res) =>
// {

//     let query ={}
//     let stateId = Number(req.query.stateId);
//     let mealId = Number(req.query.mealId);
//     if(stateId&&mealId)
//     {
//         query= {state_id:stateId,"mealType.mealType_Id":mealId}
//     }


//     else if(stateId)
//     {
//         query ={state_id :stateId}

//     }
//     else if(mealId)
//     {
//         query ={ "mealType.mealType_Id":mealId}
//     }
//     else 
//     {
//         query={}

//     }
//     db.collection("RestaurantData").find(query).toArray((err,result)=>
//     {
//         res.send(result);

//     });


// });
//  restaurant endpoint
app.get("/RestaurantData", (req, res)  => 
{
 
  let query ={}
  let stateId = Number(req.query.stateId);
  let mealId =Number(req.query.mealId);
  if(stateId &&mealId )
{
query = { state_id : stateId,"mealTypes.mealtype_id" : mealId };
}

else if(stateId)
{
query = {state_id : stateId };
}
else if(mealId)
{
query ={"mealTypes.mealtype_id" : mealId }
}
else
{
query ={}

}


db.collection("RestaurantData").find(query).toArray((err,result)=>
{
res.send(result )
} );

});


//api restaurant details on Restaurant id

app.get("/detailsrestaurantid/:restaurantid" ,(req,res)=>
{
  let restaurantid =Number(req.params.restaurantid);
 db.collection("RestaurantData").find({restaurant_id : restaurantid}).toArray((err,result) =>
  {
    if(err)
    throw err;
    res.send(result);

  });

});

app.get("/MealType", (req, res)  => {
    db.collection("MealType").find().toArray((err,result)=>
    {
      if(err) throw err;
      res.send(result);
  
    })
  
  });
//Place Order
app.post("/placeOrder",(req,res)=>
{
  console.log(req.body);

  db.collection("Orders").insertOne(req.body,(err,result)=>
  {
    if(err) throw err;
    res.send("success")
  })
});
//Menu details(selected items)

//Menu based on user selected items

app.post("/menuItem", (req, res) => {
    if (Array.isArray(req.body)) {
      db.collection("RestaurantMenu")
        .find({ menu_id: { $in: req.body } })
        .toArray((err, result) => {
          if (err) throw err;
          res.send(result);
        });
    } else {
      res.send("Invalid input");
    }
  });
  app.get("/Orders", (req, res)  => 
{
let email =req.query.email;
let query={}
if(email)
{
  query ={email}
}

  

  db.collection("Orders").find(query).toArray((err,result)=>
  {
    if(err) throw err;
    res.send(result);

  })


 
});


//Update order
app.put("/updateOrder/:id",(req,res)=>
{

  let oid = mongo.ObjectId(req.params.id);
  console.log(req.body);

  db.collection("Orders").updateOne({ _id : oid },{$set:{
    status:req.body.status,
    bank_name:req.body.bank_name,
    date:req.body.date,
  }},(err,result)=>
  {
    if(err) throw err;
    res.send("Order Updated")
  })
})
app.get("/data", (req, res) => {
  res.send(data);
});

//delete order
app.delete("/deleteOrders/:id", (req, res)  => 
{

let oid = mongo.ObjectId(req.params.id);


  

  db.collection("Orders").deleteOne({ _id : oid }, (err,result) =>
  {
    if(err) throw err;
    res.send("Order deleted");
console.log(result);
  });


 
});
// //Place Order
// app.post("/placeOrder",(req,res)=>
// {
//   console.log(req.body);

//   db.collection("Orders").insertOne(req.body,(err,result)=>
//   {
//     if(err) throw err;
//     res.send("success")
//   })
// });
app.get("/RestaurantMenu/:menuid", (req, res)  => {

    let menuid= Number(req.params.menuid);
    
    if(menuid)
    {
      db.collection("RestaurantMenu").find( {restaurant_id : menuid}).toArray((err,result)=>
      {
        if(err) throw err;
        res.send(result);
    
      })
      
    }
    
    
    });
    app.get("/RestaurantData", (req, res)  => 
{

  

  db.collection("RestaurantData").find().toArray((err,result)=>
  {
    if(err) throw err;
    res.send(result);

  })


 
});