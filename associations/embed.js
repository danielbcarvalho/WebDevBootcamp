var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/blog_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

//post - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
})

var Post = mongoose.model("Post", postSchema);

//user - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
})
var User = mongoose.model("User", userSchema);



var newUser = new User({
    email: "aline@hotmail.com",
    name: "Aline Carvalho"
})

newUser.posts.push({
    title: "How to bre polyjuice potion",
    content: "just kidding motherfucker. Go to hell"
})

newUser.save((err, user) => {
    if(err){
        console.log("log error", );
    } else {
        console.log("log user", user);
    }

})

var newPost = new Post({
    title: "Refflections on Apples",
    content: "They are delicius"
}) 

newPost.save((err, post) => {
    if(err){
        console.log("log...error post", );
    } else{
        console.log("log...post", );
    }
})

User.findOne({name: "Aline Carvalho"}, (err, user) => {
    if(err){
        console.log("log...", err);
    }else{
        user.posts.push({
            title: "3 things that I really hate",
            content: " Mess up, Mess up, Mess up."
        })
        user.save((err, user) => {
            if(err){
                console.log("log...", err);
            }else{
                console.log("log...", user);
            }
        });
    }
})