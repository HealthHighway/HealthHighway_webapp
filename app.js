require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const session = require('express-session');
const axios = require("axios");
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");
const fetch = require('node-fetch');
const qs = require("qs");
const algoliasearch = require("algoliasearch");
const app = express();

const server = http.createServer(app);
const io = require("socket.io")(server);

const baseUrl = "https://api.healthhighway.co.in"

app.use(express.static(__dirname+"/public"));
app.set('view engine', "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'Healthhighway2020Secretforthisyear',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly : false, path : "/", maxAge : 12342424 }
}))




io.on('connection', (socket) => {
    socket.on('givedata', async(msg) => {
        console.log(msg);
        var options = {
            "amount": msg.private_session.PRICE*100 ,
            "currency": "INR",
            "receipt": "Health Highway",
            "payment_capture": 1
        };
        try{
            const {data} = await axios({
                method : 'post',
                url : 'https://api.razorpay.com/v1/orders',
                timeout : 6000,
                headers : {
                    "Authorization" : "Basic cnpwX3Rlc3RfMFl4N3lYNGZROHdqcmY6T0FpYUM3YkRYeWxpcHE1dDFkdWc2RVEy",
                    "Content-Type" : "application/json"
                },
                data : {
                    ...options
                }
            });
            console.log(data);
            socket.emit('welcome', {paymentData : data, sessionInfo : msg});
        }catch(err){
            console.log(err);
        }
       
    })
})

app.get("/", (req, res) => {
    console.log(req.session);
    if(req.session.HH_user)
    {
        if(req.session.HH_user._id)
        {
            res.render("index-dup", { _id : req.session.HH_user._id });
            console.log("Hey you are logged in");
        }
        else
        {
            res.render("index-dup", { _id : "" });
            console.log("You are not logged in");
        }
    }
    else
    {
        res.render("index-dup", { _id : "" });
        console.log("You are not logged in");
    }
})


app.get("/calendar", (req, res) => {
    res.render("calendar");
})

// app.get("/Group-Yoga-Classes/search", (req, res) => {
//      console.log(req.query.q);
//      let query = req.query.q;
//      const client = algoliasearch('PF77W5ATP0', '7cf45f6f20bc5ed3cace55bcb04ab8fa');
//      const index = client.initIndex('healthhighway');
//      index
//         .search(query)
//         .then(({ hits }) => {
//             console.log(hits);
//             if(req.session.HH_user)
//             {
//                 if(req.session.HH_user._id)
//                 {
//                     res.render("group_sessions-landing", {sessions : hits, _id : req.session.HH_user._id });
//                 }
//                 else
//                 {
//                     res.render("group_sessions-landing", { _id : "", sessions : hits });
//                 }
//             }
//             else
//             {
//                 res.render("group_sessions-landing", { _id : "", sessions : hits });
//             }
//         })
//         .catch(err => {
//             console.log(err);
//             res.redirect("/Group-Yoga-Classes")
//         });
//     //  res.send("hello")
// })

app.get("/Group-Yoga-Classes", (req, res) => {
    if(req.session.HH_user)
    {
        if(req.session.HH_user._id)
        {
            res.render("group_sessions-landing", { _id : req.session.HH_user._id });
        }
        else
        {
            res.render("group_sessions-landing", { _id : "" });
        }
    }
    else
    {
        res.render("group_sessions-landing", { _id : "" });
    }
    // fetch(baseUrl+"/admin/get-all-group-sessions", {
    //     method : "GET"
    // }).then(async (response) => {
    //     console.log(response.status)
    //     const data = await response.json();
    //     console.log(data);
    //     if(req.session.HH_user)
    //     {
    //         if(req.session.HH_user._id)
    //         {
    //             res.render("group_sessions-landing", {sessions : data, _id : req.session.HH_user._id });
    //         }
    //         else
    //         {
    //             res.render("group_sessions-landing", { _id : "", sessions : data });
    //         }
    //     }
    //     else
    //     {
    //         res.render("group_sessions-landing", { _id : "", sessions : data });
    //     }
    // })
    // .catch(err => {
    //     res.redirect("/")
    //     console.log(err);
    // })
})

let setCache = function (req, res, next) {
    res.set('Cache-control', `no-store`);
    next()
}

app.get("/Group-Yoga-Classes/:id", setCache, (req, res) => {
    console.log('called again')
    fetch(baseUrl+"/admin/get-particular-group/"+req.params.id, {
        method : "GET"
    }).then(async (response) => {
        console.log(response.status)
        const data = await response.json();
        // console.log(data);
        if(req.session.HH_user)
        {
            if(req.session.HH_user._id)
            {
                res.render("detailed_sessions", {session : data, FSTA : 1 , FSA : req.session.HH_user.FSA , _id : req.session.HH_user._id, GROUP : req.session.HH_user.GROUP });
            }
            else
            {
                res.render("detailed_sessions", { _id : "", session : data, FSTA : 1 , FSA : 0 , GROUP : [] });
            }
        }
        else
        {
            res.render("detailed_sessions", { _id : "", session : data, FSTA : 1 , FSA : 0 , GROUP : []});
        }
    })
    .catch(err => {
        res.redirect("/");
        console.log(err);
    })
})

app.get("/1-on-1-Pricing-Plan", (req, res) => {
    // callback, promises, await 
    fetch(baseUrl+"/admin/get-all-group-sessions", {
        method : "GET"
    }).then(async (response) => {
        console.log(response.status)
        const data = await response.json();
        console.log(data);
        if(req.session.HH_user)
        {
            if(req.session.HH_user._id)
            {
                res.render("pricing", {sessions : data, _id : req.session.HH_user._id });
            }
            else
            {
                res.render("pricing", { _id : "", sessions : data });
            }
        }
        else
        {
            res.render("pricing", { _id : "", sessions : data});
        }
    })
    .catch(err => {
        res.redirect("/")
        console.log(err);
    })
})

app.get("/checkout/:noc", setCache, (req, res) => {
    let priceMap = {
        "1" : "150",
        "16" : "2149",
        "20" : "2449",
        "24" : "2849"
    }
    if(priceMap[req.params.noc] == null){
        res.redirect("/1-on-1-Pricing-Plan")   
    }
    else
    {
        if(req.session.HH_user)
        {
            if(req.session.HH_user._id)
            {
                res.render("checkout", { price : priceMap[req.params.noc], _id : req.session.HH_user._id, noc : req.params.noc });
            }
            else
            {
                res.render("checkout", { _id : "", price : priceMap[req.params.noc], noc : req.params.noc });
            }
        }
        else{
            res.render("checkout", { _id : "", price : priceMap[req.params.noc], noc : req.params.noc });
        } 
    }
})

app.get("/edit-profile", setCache, async (req, res) => {
    if(req.session.HH_user)
    {
        if(req.session.HH_user._id)
        {
            try
            {
                let response = await fetch(baseUrl+"/user/get-user/"+req.session.HH_user._id, {
                    method : "GET"
                });
                if(response.status == 200){
                    const user = await response.json();
                    console.log(user);
                    res.render("editprofile", { _id : req.session.HH_user._id, BIO : user.BIO?user.BIO:{} });
                }
                else{
                    req.session.HH_user = null;
                    res.redirect("/")
                }
            }catch(err){
                console.error(err);
                req.session.HH_user = null;
                res.redirect("/")
            }
        }
        else
        {
            req.session.HH_user = null;
            res.redirect("/")
        }
    }
    else
    {
        req.session.HH_user = null;
        res.redirect("/")
    }
    
})

app.post("/edit-profile", async (req, res) => {
    console.log(req.body);
    var resp;
    console.log(req.body);
    await fetch(baseUrl+"/user/update-user-bio/"+req.session.HH_user._id, {
        method: "POST",
        body: qs.stringify({
            ...req.body
        }),
        headers: { 
            "Content-type": "application/x-www-form-urlencoded"
        } 
    }).then(async (response) => {
        console.log(response.status);
    }).catch(err => {
        console.log(err)
    })
    res.contentType = "application/json; charset=utf-8";
    res.send("sent");
})


app.post("/phoneauth", async (req, res) => {
    console.log(req.body);
    var resp;
    console.log(req.body);
    await fetch(baseUrl+"/user/create-user-with-phone-auth", {
            method: "POST",
            body: qs.stringify({
                PHONE_NUMBER : req.body.phoneNumber
            }),
            headers: { 
                "Content-type": "application/x-www-form-urlencoded"
            } 
    }).then(async (response) => {
        console.log(response.status);
        if(response.status == 200)
        {
            const r1 = await response.json();
            console.log(r1);
            resp={"verified" : true, "name_present" : r1.user.NAME?(r1.user.NAME.length>0?true:false):false};
            if(r1.user.NAME && r1.user.NAME.length>0){
                req.session.HH_user = {
                    PHONE_NUMBER : req.body.phoneNumber,
                    NAME : r1.user.NAME,
                    _id : r1.user._id,
                    GROUP : [...r1.user.GROUP],
                    FSA : r1.user.FSA
                }
            }
            else
            {
                req.session.HH_user = {
                    PHONE_NUMBER : req.body.phoneNumber
                }
            }
        }
        else
        {
            console.log("nulling at /phoneauth");
            req.session.HH_user = null;
            resp={"verified" : false, "name_present" : false};
        }
    }).catch(err => {
        console.log("nulling at /phoenauth catch");
        req.session.HH_user = null;
        resp={"verified" : false, "name_present" : r1.user.name?(r1.user.name.length>0?true:false):false};
        console.log(err);
    })
    res.contentType = "application/json; charset=utf-8";
    res.send(resp);
})

app.post("/add-name-with-phone-number", async (req, res) => {
    console.log(req.body);
    var resp;
    await fetch(baseUrl+"/user/add-name-with-phone-number", {
            method: "POST",
            body: qs.stringify({
                PHONE_NUMBER : req.session.HH_user.PHONE_NUMBER, 
                NAME : req.body.name,
            }),
            headers: { 
                "Content-type": "application/x-www-form-urlencoded"
            } 
    }).then(async (response) => {
        console.log(response.status);
        if(response.status == 200)
        {
            const r1 = await response.json();
            console.log(r1);
            resp={"verified" : true};
            req.session.HH_user = {
                PHONE_NUMBER : req.session.HH_user.PHONE_NUMBER,
                NAME : req.body.name,
                _id : r1.user._id,
                GROUP : [...r1.user.GROUP],
                FSA : r1.user.FSA
            }
        }
        else
        {
            console.log("nulling at /phoneauth");
            resp={"verified" : false};
            req.session.HH_user = null;
        }
    }).catch(err => {
        console.log("nulling at /phoenauth catch");
        req.session.HH_user = null;
        resp={"verified" : false};
        console.log(err);
    })
    res.contentType = "application/json; charset=utf-8";
    res.send(resp);
})

app.post("/oauth", async (req, res) => {
    console.log(req.body);
    var resp;
    console.log(req.body);
    await fetch(baseUrl+"/user/create-user-with-oauth", {
            method: "POST",
            body: qs.stringify({
                EMAIL : req.body.email,
                NAME : req.body.name,
            }),
            headers: { 
                "Content-type": "application/x-www-form-urlencoded"
            } 
    }).then(async (response) => {
        console.log(response.status);
        if(response.status == 200)
        {
            const r1 = await response.json();
            console.log(r1);
            resp={"verified" : true};
            req.session.HH_user = {
                _id : r1.user._id,
                GROUP : [...r1.user.GROUP],
                FSA : r1.user.FSA
            }
        }
        else
        {
            console.log("nulling at /phoneauth");
            resp={"verified" : false};
        }
    }).catch(err => {
        console.log("nulling at /phoenauth catch");
        req.session.HH_user = null;
        resp={"verified" : false};
        console.log(err);
    })
    res.contentType = "application/json; charset=utf-8";
    res.send(resp);
})

app.post("/create-group", async (req, res) => {
    console.log(req.body);
    let resp;
    let { USERID, GRPID, STARTING_DATE_FOR_USER, END_DATE_FOR_USER } = req.body;
    await fetch(baseUrl+"/data/create-group", {
        method : "POST",
        timeout : 5000,
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            USERID, GRPID, STARTING_DATE : STARTING_DATE_FOR_USER, END_DATE : END_DATE_FOR_USER
        })
    }).then(async (response) => {
        console.log(response.status);
        if(response.status == 200)
        {
            const r1 = await response.json();
            console.log(r1);
            resp={"verified" : true};
            req.session.HH_user = {
                _id : r1.user._id,
                GROUP : [...r1.user.GROUP],
                FSA : r1.user.FSA
            }
        }
        else
        {
            console.log("nulling at /phoneauth");
            req.session.HH_user = null;
            resp={"verified" : false};
        }
    }).catch(err => {
        console.log("nulling at /phoenauth catch");
        req.session.HH_user = null;
        resp={"verified" : false};
        console.log(err);
    })
    res.contentType = "application/json; charset=utf-8";
    res.send(resp);
})

app.post("/create-private/:USERID", async (req, res) => {
    console.log(req.body);
    let resp;
    await fetch(baseUrl+"/data/create-private/"+req.params.USERID, {
        method : "POST",
        timeout : 5000,
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            ...req.body
        })
    }).then(async (response) => {
        console.log(response.status);
        if(response.status == 200)
        {
            const r1 = await response.json();
            console.log(r1);
            resp={"verified" : true};
        }
        else
        {
            console.log("nulling at /phoneauth");
            req.session.HH_user = null;
            resp={"verified" : false};
        }
    }).catch(err => {
        console.log("nulling at /phoenauth catch");
        req.session.HH_user = null;
        resp={"verified" : false};
        console.log(err);
    })
    res.contentType = "application/json; charset=utf-8";
    res.send(resp);
})

app.get("/my-profile", setCache, async (req, res) => {
    if(req.session.HH_user)
    {
        if(req.session.HH_user._id)
        {
            try
            {
                let sess_response = await fetch(baseUrl+"/data/flood-sessions/", {
                    method: "POST",
                    body: qs.stringify({
                        USERID : req.session.HH_user._id
                    }),
                    headers: { 
                        "Content-type": "application/x-www-form-urlencoded"
                    } 
                });
                let user_response = await fetch(baseUrl+"/user/get-user/"+req.session.HH_user._id, {
                    method : "GET"
                });
                let sess_res = await sess_response.json();
                let user_res = await user_response.json();
                console.log(user_res);
                console.log(sess_res);
                res.render("dashboard", {PRIVATE : sess_res.PRIVATE, GROUP : sess_res.expanded_group, PHONE_NUMBER : user_res.PHONE_NUMBER?user_res.PHONE_NUMBER:"", NAME : user_res.NAME?user_res.NAME:"", EMAIL : user_res.EMAIL?user_res.EMAIL:"", _id : req.session.HH_user._id, PHOTO : user_res.PHOTO?user_res.PHOTO:"", BIO : user_res.BIO?user_res.BIO:{} });
            }catch(err){
                console.error(err);
                req.session.HH_user = null;
                res.redirect("/")
            }
        }
        else
        {
            req.session.HH_user = null;
            res.redirect("/")
        }
    }
    else
    {
        req.session.HH_user = null;
        res.redirect("/")
    }
})

// app.get("/profile", (req, res) => {
//     res.render("dashboard", { _id : "" });
// })

// app.get("/payment-success", (req, res) => {
//     res.render("payment-success");
// })

app.get("/terms-and-conditions", (req, res) => {
    res.render("tnc");
})

app.get("/privacy-policy", (req, res) => {
    res.render("policy")
})

app.get("/live-class/:VIDEO_CHANNEL", setCache, (req,res) => {
    if(req.session.HH_user)
    {
        if(req.session.HH_user._id)
        {
            res.render("video", {room : req.params.VIDEO_CHANNEL});
        }
        else
        {
            req.session.HH_user = null;
            res.redirect("/")
        }
    }
    else
    {
        req.session.HH_user = null;
        res.redirect("/")
    }
})

app.get("/logout", (req,res) => {
    req.session.HH_user = null;
    res.redirect("/");
})

app.get("*", (req,res) => {
    res.redirect("/");
})



var port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`listening at ${port}`)
});

