const mongoose = require("mongoose");
const mongoDbUri =
  "mongodb+srv://goFoodAkg:goFood24@cluster0.xpl9p9x.mongodb.net/goFoodMern?retryWrites=true&w=majority&appName=Cluster0";
const mongoodb = () => {
   mongoose.connect(mongoDbUri,async () => {
    console.log("Connection Success");
    const fetched_data =  await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(function (err, data) {
      if (err) console.log(err)
        else{
      global.food_items=data;
       //
        }
      })
        const categorydata= await mongoose.connection.db.collection("food_category");
        categorydata.find({}).toArray(function(err,cateData){
          if(err) console.log(err)
            else
          global.food_Cat=cateData;
        
    });
  });
};

module.exports = mongoodb;
