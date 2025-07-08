// db.person.aggregate([
//     // stage 1
//     {
//         $match: {
//             gender: "Male",
//             age: { $lt: 30 }
//         }
//     },
//     // stage 2
//     { $project: { name: 1, age: 1, gender: 1, email: 1 } }

// ])

// db.person.aggregate([
//     // stage 1
//     { $match: { gender: "Male" } },

//     // stage 2
//     { $addFields: { course: "level2", eduTech: "programming hero", hobbes: "codding" } },

//     // stage 3
//     // { $project: { name: 1, email: 1, gender: 1, course: 1 , eduTech: 1,  hobbes : 1} },

//     // stage 4
//     // {$out: "course-students"}
//     { $merge: "person" }
// ])
// ------------------> db.getCollection("course-student").find({})


// -----------------------$group----------
// db.person.aggregate([
//     // stage 1
//     {
//         $group: {
//             _id: null,
//             totalAge: { $sum: "$age" },
//             maxage: { $max: "$age" },
//             minAge: { $min: "$age" },
//             avg: { $avg: "$age" }

//         }
//     },
//     //stage 2
//     {
//         $project: {
//             totalAge: 1,
//             maxage: 1,
//             minAge: 1,
//             averagAge: "$avg",
//             ageRange: { $subtract: ["$maxage", "$minAge"] }
//         }
//     }
// ])


// ------------------------------------------
// db.person.aggregate([
//     // stage 1
//     { $unwind: "$friends" },
//     // stage 2
//     { $group: { _id: "$friends", count: { $sum: 1 } } }

// ]);



// db.person.aggregate([
//     //stage 1
//     {
//         $unwind: "$profession"
//     },
//     {
//         $group: {
//             _id: "$age", professionPerAge: {
//                 $push: "$profession"
//             }
//         }
//     }

// ])

// $bucket using
// -----------------------------------------------
// db.person.aggregate([
//     // stage 1
//     {
//         $bucket: {
//             groupBy: "$age",
//             boundaries: [20, 30, 40],
//             default: "40 er upore age gula",
//             output: {
//                 count: { $sum: 1 },
//                 // name : {$push: "$name"},
//                 name: { $push: "$$ROOT" },
//             }
//         }
//     },
//     // stage 2
//     {
//         $sort: {
//             count: -1
//         }
//     },
//     //  stage 3
//     { $project: { count: 1 } },
//     // stage 4
//     {
//         $limit: 2
//     }

// ])


// ----------------------------------
// db.person.aggregate([
//     {
//         $facet: {
//             // pipline 1
//             "friendsCount": [
//                 // stage1
//                 {
//                     $unwind: "$friends"
//                 },
//                 // stage 2
//                 { $group: { _id: "$friends", count: { $sum: 1 } } }
//             ],
//             //  pipline 2
//             "eductionCount": [
//                 // stage 1
//                 {
//                     $unwind: "$eduction"
//                 },
//                 // stage2

//                 { $group: { _id: "$eduction", count: { $sum: 1 } } }
//             ],

//             // pipline3
//             "skillsCount": [
//                 // stage 1
//                 { $unwind: "$skills" },
//                 // stage2
//                 { $group: { _id: "$skills", count: { $sum: 1 } } }
//             ]
//         }
//     }
// ])

// -------------------------
// db.productOrders.aggregate([
//     {
//         $lookup: {
//             from: "test",
//             localField: "userId",
//             foreignField: "_id",
//             as: "user"
//         }
//     }
// ])
// embed vs referencing





//  indexing ---------------> text searchings
// db.test.find({
//     $text: { $search: "Virgil" }
// })














