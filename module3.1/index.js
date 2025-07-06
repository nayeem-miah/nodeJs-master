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




