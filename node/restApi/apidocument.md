Page 1
=> List of city (Get) https://restapi-jboq.onrender.com/location
 http://localhost:7001/location

=> List of restaurant (Get) http://localhost:7001/RestaurantData
https://restapi-jboq.onrender.com/RestaurantData

=> Restaurant on the basis of city (Get) http://localhost:7001/RestaurantData?stateId=2
https://restapi-jboq.onrender.com/RestaurantData?stateId=2

=> List of QuickSearch (Get) https://restapi-jboq.onrender.com
http://localhost:3000/quickSearch

Page 2
=> List of restaurants on basis of meal (Get)
 http://localhost:7001/RestaurantData?mealId=5 
 https://restapi-jboq.onrender.com/RestaurantData?mealId=5
http://localhost:7001/RestaurantData?mealId=5&stateId=2 
https://restapi-jboq.onrender.com/RestaurantData?mealId=5&stateId=2
=> Filter on basis of cuisine (Get) http://localhost:3000/filter/1?cuisineId=2
 => Filter on basis of cost (Get) http://localhost:3000/filter/1?lcost=1000&hcost=1500 
 => sort on basis of cost (Get) http://localhost:3000/filter/1?lcost=700&hcost=1200&sort=-1

Page 3
=> Details of the restaurants (Get) http://localhost:7001/details/2 
=> Menu of the restaurant (Get) http://localhost:7001/menu/3

Page 4
=> Menu details (selected items) (post)http://localhost:7001/menuItem
 =>Place order (post) http://localhost:7001/placeOrder

{

"name": "jack",
"email": "jack@gmail.com",
"address": "Hno 23,Sector 1",
"phone": 7334567891,
"cost": 500,
"menuItem": [3, 4, 2 ]
}

Page 5
=> List of order placed (get) http://localhost:7001/Orders
 => List of order placed of particular user (get) http://localhost:7001/Orders?email=rahul@gmail.com
 => Update order status (put) http://localhost:7001/updateOrder/64121dbc3a69b4c94ef99c0a

{ "status": "TAX_SUCCESS", "bank_name": "SBI", "date": "02/20/2023" }

========================

Delete orders (delete) http://localhost:8080/deleteOrder/63e8cd06fdedce30bb5fb59c

CRUD C - Create - POST R - Read - GET U - Update - PUT D - Delete - DELETE
payment api
https://paytm-m64c.onrender.com

