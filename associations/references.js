var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/blog_demo_2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));

var Post = require("./models/post");
var User = require("./models/users");

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Dylan"
// })

Post.create({
    title: "How to sing a beautiful song pt. 4",
    content: "Buffalo Soldier..."
}, (err, post) => {
    User.findOne({ email: "bob@gmail.com" }, (err, foundUser) => {
        if(err) console.log("log...", err);
        else {
            foundUser.posts.push(post);
            foundUser.save((err, data) => {
                if("err") console.log("log...", err);
                    else console.log("log...", data);
            })
        }
    })
})
User.find({email: "bob@gmail.com"}, (err, foundUser) => console.log("log...user final", foundUser))

// // Find User
// //Find all posts for that user
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
//     if(err) console.log("log...", err);
//         else console.log("log...", user);
// })