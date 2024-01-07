const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
let arr = [
  {
    id: 1,
    name: "virendra",
    comment: "Marry Christmas",
  },
  {
    id: 2,
    name: "Naman",
    comment: " Wish you Marry Christmas",
  },
  {
    id: 3,
    name: "Jyoti",
    comment: " Hey Marry Christmas",
  },
  {
    id: 4,
    name: "Jatin",
    comment: "Marry Christmas friends",
  },
];

// Step 1--------------

app.get("/comment", (req, res) => {
  res.render("comment", { arr });
});

// step 2 -----------------
app.get("/comment/new", (req, res) => {
  res.render("new", { arr });
});

//  step 3 ----------------
app.post("/comment", (req, res) => {
  let { name, comment } = req.body;
  arr.push({ name, comment, id: arr.length + 1 });
  res.redirect("/comment");
});

// step 4 //

app.get("/comment/:idno", (req, res) => {
  let { idno } = req.params;
  foundcomment = arr.find((comment) => {
    return comment.id === parseInt(idno);
  });
  res.render("show", { foundcomment });
});

//  step 5 // edit

app.get("/comment/:idno/edit", (req, res) => {
  let { idno } = req.params;
  foundcomment = arr.find((comment) => {
    return comment.id === parseInt(idno);
  });
  res.render("edit", { foundcomment });
});

// step 6

app.patch("/comment/:idno", (req, res) => {
  let { idno } = req.params;
  foundcomment = arr.find((comment) => {return comment.id === parseInt(idno); 
  })
  let { comment } = req.body;
  foundcomment.comment = comment;
  res.redirect("/comment");
});

app.delete("/comment/:idno", (req, res) => {
  let { idno } = req.params;
  let newComment = arr.filter((comment) => {return comment.id != idno;
  })
  arr= newComment;
  res.redirect("/comment");
});
app.listen("8080", () => {
  console.log("server connected at port No. 8080");
});
