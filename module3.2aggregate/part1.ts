//  mongodb Query and Projection Operators
// db.person.find({})
// db.person.find({age: {$gt: 40}})
// db.person.find({age: {$gte: 40}})
// db.person.find({age: {$lt: 30}});
// db.person.find({age: {$lte: 30}}).sort({age: 1})

// conditional data finding--------------
// db.person.find(
//     {
//         gender: { $eq: "Female" },
//         age: { $lte: 30, $gte: 18 },
//         // age: { $in: [18, 20, 22, 24, 26, 28, 30] },
//         // profession: "UX Designer",
//         profession: { $eq: "UX Designer" },
//     })
//     .sort({ age: 1 });


//    and or using ---------------------------
// db.person.find({age: {$ne: 18} , age : {$let: 30}}) // Error : duplicated identifier
// db.person.find({ age: { $ne: 18, $lte: 30 } })  // write way


// Explicit $and ---------------------------
// db.person.find({
//     $and: [
//         { gender: "Female" },
//         { age: { $ne: 17, } },
//         { age: { $lte: 30 } }
//     ]
// }).sort({ age: 1 })
//     .project({ name: 1, email: 1, age: 1, gender: 1, profession: 1 });



// Explicit $or: [{}] ----------------------------
// db.person.find({
//     $or: [
//         { profession: "UX Designer" },
//         { profession: "Software Engineer" },
//         { profession: "Mechanic" }

//     ]
// }).sort({ age: 1 })
//     .project({ name: 1, email: 1, age: 1, gender: 1, profession: 1 });





// elements query operators -----------------
// db.person.find({ age: { $exists: true } });
// db.person.find({ age: { $exists: false } });
// db.person.find({unknown : {$exists: true}})

// db.person.find({
//     gender: { $type: "string" }
// });
// db.person.find({age: {$type: "number"}});


// $size: -Selects documents if the array field is a specified size.
// db.services.find({facility : {$size: 4}}).project({facility: 1})


// $all ---> Matches arrays that contain all elements specified in the query.
// db.services.find({
//     facility: {
//         $all: [
//             "good", "nice", "interesting"
//         ]
//     }
// })

// finding array of object
// db.services.find({
//     "facility.name": "Instant Car Services"
// }).project({facility: 1})

// ---------------------------------------------
// $elemMatch---->Selects documents if element in the array field matches all the specified $elemMatch conditions.

// db.services.find({
//     facility: {
//         $elemMatch: {
//             "name": "Instant Car Services",
//             "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//         },
//     }
// }).project({ facility: 1 })


// updated db -----------------------
// db.person.findOne({_id: ObjectId("6869cf6b724ed299ead6e26c")})  // find one

// db.todos.updateOne(
//     { _id: ObjectId("680880133720df90fe3acbc4") },
//     {
//         $addToSet: {
//           language: { $each: ["nodejs", "nodejs"] }
//         }a
//     }
// )
// db.todos.updateOne(
//     { _id: ObjectId("680880133720df90fe3acbc4") },
//     {
//         $set: {
//             language:  ["nodejs", "nodejs"]
//         }
//     }
// )



// db.todos.updateOne(
//     { _id: ObjectId("680880133720df90fe3acbc4") },
//     {
//       $unset: {user: "" }
//     }

// )



// db.todos.updateOne(
//     {
//         _id: ObjectId("680880133720df90fe3acbc4")

//     }, {
//     $pop: { language: 1 }
// })

// db.todos.updateOne(
//     {
//         _id: ObjectId("680880133720df90fe3acbc4")

//     }, {
//     $pop: { language: -1 }
// })


// $pull: {}
// $pullAll: {}
// $push: {};



// changing object value
// db.person.updateOne(
//     { _id: ObjectId("680880133720df90fe3acbc4") }
//     , {
//         $set: {
//             "address.city": "city name",
//             "address.country" : "country name"
//         }
//     })



