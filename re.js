// //--------------CRUD Operations for Tag---------------------------//
// //post/tag request
// app.post("/tag", async function (req, res) {
//   try {
//     const tag = await Tag.create(req.body);
//     res.status(201).send(tag);
//   } catch (err) {
//     return res.status(400).send(err.message);
//   }
// });

// //Get all request
// app.get("/tag", async function (req, res) {
//   try {
//     const tag = await Tag.find().lean().exec();
//     return res.status(201).send(tag);
//   } catch (err) {
//     return res.status(400).send(err.message);
//   }
// });

// //Get by id request
// app.get("/tag/:id", async function (req, res) {
//   try {
//     const tag = await Tag.findById(req.params.id).lean().exec();
//     return res.status(201).send(tag);
//   } catch (err) {
//     return res.status(400).send(err.message);
//   }
// });

// //Patch or update request
// app.patch("/tag/:id", async function (req, res) {
//   try {
//     const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     return res.status(201).send(tag);
//   } catch (err) {
//     return res.status(400).send(err.message);
//   }
// });

// //Delete by Id Request
// app.delete("/tag/:id", async function (req, res) {
//   try {
//     const tag = await Tag.findByIdAndDelete(req.params.id);
//     return res.status(201).send(tag);
//   } catch (err) {
//     return res.status(400).send(err.message);
//   }
// });
