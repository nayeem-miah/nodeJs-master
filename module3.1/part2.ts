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
//     { $addFields: { course: "level2", eduTech: "programmming hero", hobbes: "codding" } },

//     // stage 3
//     // { $project: { name: 1, email: 1, gender: 1, course: 1 , eduTech: 1,  hobbes : 1} },

//     // stage 4
//     // {$out: "course-students"}
//     { $merge: "person" }
// ])

