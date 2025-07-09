# MongoDB Query & Update Operators Guide

A complete reference for MongoDB queries and update operations with examples.

---

## 🔍 Basic Query Operators

### `$gt`, `$gte`, `$lt`, `$lte`

Find documents based on range conditions:

```js
// Find people older than 40
db.person.find({ age: { $gt: 40 } })

// Find people aged 40 or more
db.person.find({ age: { $gte: 40 } })

// Find people younger than 30
db.person.find({ age: { $lt: 30 } })

// Find people 30 or younger and sort by age ascending
db.person.find({ age: { $lte: 30 } }).sort({ age: 1 })
```

### `$eq`, `$in`, `$ne`

```js
// Gender is Female and profession is UX Designer
db.person.find({
  gender: { $eq: "Female" },
  age: { $gte: 18, $lte: 30 },
  profession: { $eq: "UX Designer" }
}).sort({ age: 1 })

// Age not equal to 18 and less than or equal to 30
db.person.find({ age: { $ne: 18, $lte: 30 } })
```

---

## 🧠 Logical Operators

### `$and`

```js
db.person.find({
  $and: [
    { gender: "Female" },
    { age: { $ne: 17 } },
    { age: { $lte: 30 } }
  ]
}).sort({ age: 1 }).project({ name: 1, email: 1, age: 1, gender: 1, profession: 1 })
```

### `$or`

```js
db.person.find({
  $or: [
    { profession: "UX Designer" },
    { profession: "Software Engineer" },
    { profession: "Mechanic" }
  ]
}).sort({ age: 1 }).project({ name: 1, email: 1, age: 1, gender: 1, profession: 1 })
```

---

## 🧩 Element Operators

### `$exists` & `$type`

```js
// Find documents where age exists
db.person.find({ age: { $exists: true } })

// Find documents where unknown field exists
db.person.find({ unknown: { $exists: true } })

// Find gender of type string
db.person.find({ gender: { $type: "string" } })

// Find age of type number
db.person.find({ age: { $type: "number" } })
```

---

## 🧮 Array Operators

### `$size`

```js
// Find documents where facility array has 4 items
db.services.find({ facility: { $size: 4 } }).project({ facility: 1 })
```

### `$all`

```js
// Match all given values in array
db.services.find({ facility: { $all: ["good", "nice", "interesting"] } })
```

### Find Nested Array/Object

```js
// Match object inside array
db.services.find({ "facility.name": "Instant Car Services" }).project({ facility: 1 })
```

### `$elemMatch`

```js
// Match multiple conditions in one array object
db.services.find({
  facility: {
    $elemMatch: {
      name: "Instant Car Services",
      details: "Fuga numquam nulla nam, facere..."
    }
  }
}).project({ facility: 1 })
```

---

## ✍️ Update Operators

### `$set`

```js
// Set or overwrite fields
db.todos.updateOne(
  { _id: ObjectId("680880133720df90fe3acbc4") },
  { $set: { language: ["nodejs", "express"] } }
)
```

### `$unset`

```js
// Remove a field
db.todos.updateOne(
  { _id: ObjectId("680880133720df90fe3acbc4") },
  { $unset: { user: "" } }
)
```

### `$addToSet`

```js
// Add value if not already in array
db.todos.updateOne(
  { _id: ObjectId("680880133720df90fe3acbc4") },
  { $addToSet: { language: { $each: ["nodejs"] } } }
)
```

### `$pop`

```js
// Remove last element from array
db.todos.updateOne(
  { _id: ObjectId("680880133720df90fe3acbc4") },
  { $pop: { language: 1 } }
)

// Remove first element from array
db.todos.updateOne(
  { _id: ObjectId("680880133720df90fe3acbc4") },
  { $pop: { language: -1 } }
)
```

### `$pull` & `$pullAll`

```js
// Remove specific value from array
db.todos.updateOne(
  { _id: ObjectId("680880133720df90fe3acbc4") },
  { $pull: { language: "nodejs" } }
)

// Remove multiple specific values
db.todos.updateOne(
  { _id: ObjectId("680880133720df90fe3acbc4") },
  { $pullAll: { language: ["nodejs", "express"] } }
)
```

### Update Nested Object Fields

```js
// Update nested fields in a document
db.person.updateOne(
  { _id: ObjectId("680880133720df90fe3acbc4") },
  {
    $set: {
      "address.city": "city name",
      "address.country": "country name"
    }
  }
)



নিচে আপনার MongoDB Aggregation Pipeline এবং অন্যান্য গুরুত্বপূর্ণ অপারেটর নিয়ে একটি সুন্দরভাবে সাজানো `README.md` ফাইল দেওয়া হলো:

---

````md
# 📊 MongoDB Aggregation & Advanced Query Operators

This project demonstrates key MongoDB aggregation operators with real examples.

---

## 📁 Collection Used
- `person`
- `productOrders`
- `test`

---

## 🔍 Aggregation Stages & Examples

### 1. `$match`
Filter documents.

```js
{ $match: { gender: "Male", age: { $lt: 30 } } }
````

---

### 2. `$project`

Include specific fields.

```js
{ $project: { name: 1, email: 1, gender: 1 } }
```

---

### 3. `$addFields`

Add new fields dynamically.

```js
{ $addFields: { course: "level2", eduTech: "programming hero", hobbes: "coding" } }
```

---

### 4. `$merge` / `$out`

Save aggregation result in a collection.

```js
{ $merge: "person" } // or use `$out: "course-students"`
```

---

### 5. `$group`

Group and aggregate data.

```js
{
  $group: {
    _id: null,
    totalAge: { $sum: "$age" },
    avg: { $avg: "$age" },
    max: { $max: "$age" },
    min: { $min: "$age" }
  }
}
```

---

### 6. `$unwind`

Deconstruct arrays.

```js
{ $unwind: "$friends" }
```

---

### 7. `$bucket`

Group documents by a range.

```js
{
  $bucket: {
    groupBy: "$age",
    boundaries: [20, 30, 40],
    default: "40+",
    output: {
      count: { $sum: 1 },
      people: { $push: "$$ROOT" }
    }
  }
}
```

---

### 8. `$facet`

Multiple pipelines in parallel.

```js
{
  $facet: {
    skillsCount: [
      { $unwind: "$skills" },
      { $group: { _id: "$skills", count: { $sum: 1 } } }
    ],
    friendsCount: [
      { $unwind: "$friends" },
      { $group: { _id: "$friends", count: { $sum: 1 } } }
    ]
  }
}
```

---

### 9. `$lookup`

Join collections.

```js
{
  $lookup: {
    from: "test",
    localField: "userId",
    foreignField: "_id",
    as: "user"
  }
}
```

---

## 🔁 Embed vs Referencing

* **Embedded Document:**
  Store related data in same document.

```js
{
  name: "John",
  address: {
    city: "Dhaka",
    zip: 1207
  }
}
```

* **Referenced Document:**
  Store reference ID to join later.

```js
{
  name: "John",
  addressId: ObjectId("...")
}
```

---

## 🔎 Text Indexing & Search

* **Create Text Index:**

```js
db.person.createIndex({ name: "text", bio: "text" })
```

* **Text Search:**

```js
db.person.find({ $text: { $search: "Virgil" } })
```

---

## ✅ Summary Table

| Operator      | Description                   |
| ------------- | ----------------------------- |
| `$match`      | Filter documents              |
| `$project`    | Select specific fields        |
| `$addFields`  | Add new fields                |
| `$group`      | Aggregate values              |
| `$unwind`     | Flatten arrays                |
| `$bucket`     | Group by range                |
| `$facet`      | Multiple aggregations at once |
| `$lookup`     | Join another collection       |
| `$merge/$out` | Export result to collection   |
| `$text`       | Perform full-text search      |
