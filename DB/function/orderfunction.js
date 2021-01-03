const Order = require('../model/order')
// 使用者參數: food_id[],set_id[],user_id[],state[],date
exports.orderinsertsingle = function (id) {
    console.log(id);
    //console.log(price);
    Order.food_id.push(id)
};
/*
exports.deletesingle = function (id) {
    console.log(id);
    //console.log(price);
    Order.food_id.pop(id);
};
*/
exports.OrderSearchByUserId = function (id,res){ // 此ID為user的ObjID
    Order.find({}) 
    .then((response) =>{
        res.json(response)
    })
    .catch(function(error){ 
        console.log(error); // Failure 
    }); 
};
exports.MakingOrderShowAll = function (res){ // 此ID為user的ObjID
    Order.find({state: {$eq:2} }) 
    .then((response) =>{
        res.json(response)
    })
    .catch(function(error){ 
        console.log(error); // Failure 
    }); 
};
exports.FindOrderWithDate = function(res,start,finish){ 
    Order.find({CreatedAt:{$gte: ISODate(start),$lt: ISODate(finish)}})
    .then((response) =>{
        res.json(response)
    })
    .catch(function(error){ 
        console.log(error); // Failure 
    }); 
}


exports.orderstore = function (userid,foodarrayid/*,setarrayid*/) {
   var new_order = new Order({
    user_id:userid,
    $addToSet: {food_id:foodarrayid},
    state: 2
    });

   new_order.save(function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            console.log("inserted");
        }
    });
};