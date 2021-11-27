function inputfocus(){
    if(screen.width < 780) {
        console.log("called inputfocus");
        var cols = document.getElementsByClassName("modal-choose-div");
            for(i = 0; i < cols.length; i++) {
                cols[i].style.pointerEvents = "none";
            }
    }
}
function inputfocussure(){
    var cols = document.getElementsByClassName("modal-choose-div");
    for(i = 0; i < cols.length; i++) {
        cols[i].style.pointerEvents = "none";
    }
}
function inputdefocus(){
    var cols = document.getElementsByClassName("modal-choose-div");
    for(i = 0; i < cols.length; i++) {
        cols[i].style.pointerEvents = "auto";
    }
}
function closemodal(id, isSubmitted){
    if(isSubmitted)
    {
        $('#'+id).modal('hide');
        gtag_report_conversion(window.location.href)
    }
    else
    {
        $('#'+id).modal('hide');
         window.location.reload();
    }
}
function showmodal(id){
    $('#'+id).modal('show');
}

function disableKeys()
{
    document.onkeydown = function (e) {
        return false;
    }
}
function enableKeys()
{
    document.onkeydown = function (e) {
        return true;
    }
}
function saveLanguage(language, isbook)
{
    if(isbook)
    {
         disableKeys();
         window.HHUser={...window.HHUser, language}
         var myElement = document.getElementById('book-modal-service');
         myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }
    else
    {
        disableKeys();
         window.HHUser={...window.HHUser, language}
         var myElement = document.getElementById('modal-service');
         myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }
}
function saveService(type, isbook) 
{
    var myElement;
    window.HHUser=null;
    if(type != "ailment")
    {
        disableKeys();
        if(isbook)
        {
            window.HHUser={problem:type, isbooked:"yes"}
            myElement = document.getElementById('book-modal-name');
            myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var timeLag = (windowWidth > 1500)?1000:800;
            console.log(timeLag);
            setTimeout(() => {
                document.getElementById("fornamebook").focus();
                enableKeys();
            }, timeLag);
            document.getElementById("progress-value-book").style.width="30%";
        }
        else
        {
            window.HHUser={problem:type}
            myElement = document.getElementById('modal-name');
            myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var timeLag = (windowWidth > 1500)?1000:800;
            console.log(timeLag);
            setTimeout(() => {
                document.getElementById("forname").focus();
                enableKeys();
            }, timeLag);
            document.getElementById("progress-value").style.width="30%";
        }
    }
    else
    {
        if(isbook)
        {
            myElement=document.getElementById('book-modal-ailment');
            myElement.style.display = "block";
            document.getElementById("progress-value-book").style.width="15%";
        }
        else
        {
            myElement=document.getElementById('modal-ailment');
            myElement.style.display = "block";
            document.getElementById("progress-value").style.width="15%";
        }
        myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }
}

function goBack(id)
{
    var myElement = document.getElementById(id);
    myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}
function saveAilment(type, isbook)
{
     var myElement;
     if(isbook)
     {
         disableKeys();
         window.HHUser={...window.HHUser,problem:type}
         myElement = document.getElementById('book-modal-name');
         myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
         var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
         var timeLag = (windowWidth > 1500)?1000:800;
         setTimeout(() => {
             document.getElementById("fornamebook").focus();
             enableKeys();
         }, timeLag);
         document.getElementById("progress-value").style.width="30%";
     }
     else
     {
         disableKeys();
         window.HHUser={...window.HHUser,problem:type}
         myElement = document.getElementById('modal-name');
         myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
         var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
         var timeLag = (windowWidth > 1500)?1000:800;
         setTimeout(() => {
             document.getElementById("forname").focus();
             enableKeys();
         }, timeLag);
         document.getElementById("progress-value").style.width="30%";
     }
}

function saveSpecific(isbook)
{
    if(isbook)
    {
         const problem = document.getElementById('forailmentbook').value;
         disableKeys();
         window.HHUser={...window.HHUser,specific:problem}
         var myElement = document.getElementById('book-modal-name');
         myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
         var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
         var timeLag = (windowWidth > 1500)?1000:800;
         setTimeout(() => {
             document.getElementById("fornamebook").focus();
             enableKeys();
         }, timeLag);
         document.getElementById("progress-value-book").style.width="30%";
    }
    else
    {
         const problem = document.getElementById('forailment').value;
         disableKeys();
         window.HHUser={...window.HHUser,specific:problem}
         var myElement = document.getElementById('modal-name');
         myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
         var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
         var timeLag = (windowWidth > 1500)?1000:800;
         setTimeout(() => {
             document.getElementById("forname").focus();
             enableKeys();
         }, timeLag);
         document.getElementById("progress-value").style.width="60%";
         
    }
}

function saveName(isbook)
{
    if(isbook)
    {
         var name = document.getElementById("fornamebook").value;
         if(name.length<=2)
         {
             document.getElementById('valid-name-book').style.display="block";
         }
         else
         {
             disableKeys();
             window.HHUser={...window.HHUser, name}
             var myElement = document.getElementById('book-modal-age');
             myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
             var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
             var timeLag = (windowWidth > 1500)?1000:800;
             setTimeout(() => {
               document.getElementById("foragebook").focus({preventScroll : true});
               enableKeys();
             }, timeLag);
             document.getElementById("progress-value-book").style.width="45%";
         }
    }
    else
    {
         var name = document.getElementById("forname").value;
         if(name.length <=2)
         {
             document.getElementById('valid-name').style.display="block";
         }
         else
         {
             // document.getElementById("forname").blur();
             disableKeys();
             window.HHUser={...window.HHUser, name}
             var myElement = document.getElementById('modal-age');
             myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
             var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
             var timeLag = (windowWidth > 1500)?1000:800;
             setTimeout(() => {
               document.getElementById("forage").focus({preventScroll : true});
               enableKeys();
             }, timeLag);
             document.getElementById("progress-value").style.width="45%";
         }
    }
}

function saveAge(isbook)
{
    if(isbook)
    {
         var age = document.getElementById("foragebook").value;
         if(age.length == 0 || Number(age) < 0 || Number(age) > 100 || isNaN(age))
         {
             document.getElementById('valid-age-book').style.display="block";
         }
         else
         {
             // document.getElementById("forage").blur();
             disableKeys();
             window.HHUser={...window.HHUser, age}
             var myElement = document.getElementById('book-modal-profession');
             myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
             var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
             var timeLag = (windowWidth > 1500)?1000:800;
             setTimeout(() => {
                 document.getElementById("foragebook").blur();
                 document.getElementById("fornamebook").blur();
                //  document.getElementById("forailmentbook").blur();
                 enableKeys();
             }, timeLag);
             document.getElementById("progress-value-book").style.width="60%";
         }
    }
    else
    {
         var age = document.getElementById("forage").value;
         if(age.length == 0 || Number(age) < 0 || Number(age) > 100 || isNaN(age))
         {
             document.getElementById('valid-age').style.display="block";
         }
         else
         {
             // document.getElementById("forage").blur();
             disableKeys();
             window.HHUser={...window.HHUser, age}
             var myElement = document.getElementById('modal-profession');
             myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
             var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
             var timeLag = (windowWidth > 1500)?1000:800;
             setTimeout(() => {
                 document.getElementById("forage").blur();
                 document.getElementById("forname").blur();
                //  document.getElementById("forailment").blur();
                 enableKeys();
             }, timeLag);
             document.getElementById("progress-value").style.width="60%";
         }
    }
}
function saveProfession(profession, isbook)
{
    if(isbook)
    {
         disableKeys();
         window.HHUser={...window.HHUser, profession}
         var myElement = document.getElementById('book-modal-contact');
         myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
         var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
         var timeLag = (windowWidth > 1500)?1000:800;
         setTimeout(() => {
             document.getElementById("forcontactbook").focus();
             enableKeys();
         }, timeLag);
         document.getElementById("progress-value-book").style.width="75%";
    }
    else
    {
        disableKeys();
         window.HHUser={...window.HHUser, profession}
         var myElement = document.getElementById('modal-contact');
         myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
         var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
         var timeLag = (windowWidth > 1500)?1000:800;
         setTimeout(() => {
             document.getElementById("forcontact").focus();
             enableKeys();
         }, timeLag);
         document.getElementById("progress-value").style.width="75%";
    }
}

function saveContact(isbook)
{
    if(isbook)
    {
         var contact = document.getElementById("forcontactbook").value;
         var phoneno = /^[0-9]{10}$/;
         if(!contact.match(phoneno))
         {
             document.getElementById('valid-contact-book').style.display="block";
         }
         else
         {
             disableKeys();
             window.HHUser={...window.HHUser,contact}
             var myElement = document.getElementById('book-modal-sale');
             myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
             var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
             var timeLag = (windowWidth > 1500)?1000:800;
             setTimeout(() => {
                document.getElementById("forcontactbook").blur();
                enableKeys();
             }, timeLag);
             document.getElementById("progress-value-book").style.width="90%";
         }
    }
    else
    {
         var contact = document.getElementById("forcontact").value;
         var phoneno = /^[0-9]{10}$/;
         if(!contact.match(phoneno))
         {
             document.getElementById('valid-contact').style.display="block";
         }
         else
         {
             disableKeys();
            //  document.getElementById("forcontact").blur();
            //  inputfocussure();
             window.HHUser={...window.HHUser,contact}
             var myElement = document.getElementById('modal-sale');
             myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
             var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
             var timeLag = (windowWidth > 1500)?1000:800;
             setTimeout(() => {
                document.getElementById("forcontact").blur();
                enableKeys();
             }, timeLag);
             document.getElementById("progress-value").style.width="90%";
            //  document.getElementById("forname").value="";
            //  document.getElementById("forage").value="";
            //  document.getElementById("forcontact").value="";
            //  document.getElementById("forailment").value="";
            //  document.getElementById("hide-loading").style.display="none";
            //  document.getElementById("show-loading").style.display="block";
            //  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            //  var today  = new Date();    
            //  fetch("https://api.apispreadsheets.com/data/11722/", {
            //      method: "POST",
            //      body: JSON.stringify({"data": {"name":window.HHUser.name,"contact":window.HHUser.contact,"age":window.HHUser.age,"problem":window.HHUser.problem,"profession":window.HHUser.profession,"specific":window.HHUser.specific, "date":today.toLocaleDateString("en-US", options), "time":today.toLocaleTimeString()}}),
            //  }).then(res =>{
            //  if (res.status === 201){
            //      var myElement = document.getElementById("modal-success");
            //      window.HHUser=null;
            //      inputdefocus();
            //      myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            //      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            //      var timeLag = (windowWidth > 1500)?1000:800;
            //      setTimeout(() => {
            //         inputdefocus();
            //      }, timeLag);
            //  }
            //  else{
            //      alert("Some network problem !! Please try later.");
            //      window.HHUser=null;
            //      window.location.reload();
            //  }
            //  })
         }
    }
}

function saveSaleTime(toc, isbook)
{
    if(isbook)
    {
        document.getElementById("progress-value-book").style.width="100%";
        window.HHUser={...window.HHUser,toc};
        inputfocussure();
        document.getElementById("progress-value-book").style.width="100%";
        document.getElementById("fornamebook").value="";
        document.getElementById("foragebook").value="";
        document.getElementById("forcontactbook").value="";
        // document.getElementById("forailmentbook").value="";
        document.getElementById("book-show-loading").style.display="block";
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today  = new Date();    
        fetch("https://api.apispreadsheets.com/data/4623/", {
            method: "POST",
            body: JSON.stringify({"data": {"name":window.HHUser.name,"language":window.HHUser.language,"contact":window.HHUser.contact,"age":window.HHUser.age,"problem":window.HHUser.problem,"profession":window.HHUser.profession,"specific":window.HHUser.specific,"nos":window.HHUser.nos, "nod":window.HHUser.nod, "tos":window.HHUser.time, "toc" : window.HHUser.toc, "date":today.toLocaleDateString("en-US", options), "time":today.toLocaleTimeString()}}),
        }).then(res =>{
        if (res.status === 201){
            var myElement = document.getElementById("book-modal-success");
            window.HHUser=null;
            myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var timeLag = (windowWidth > 1500)?1000:800;
            setTimeout(() => {
            //  document.getElementById("forcontactbook").blur();
            inputdefocus();
            }, timeLag);
        }
        else{
            alert("Some network problem !! Please try later.");
            window.HHUser=null;
            window.location.reload();
        }
        })
    }
    else
    {
        inputfocussure();
        window.HHUser={...window.HHUser,toc}
        document.getElementById("progress-value").style.width="100%";
        document.getElementById("forname").value="";
        document.getElementById("forage").value="";
        document.getElementById("forcontact").value="";
        // document.getElementById("forailment").value="";
        document.getElementById("show-loading").style.display="block";
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today  = new Date();    
        fetch("https://api.apispreadsheets.com/data/11722/", {
            method: "POST",
            body: JSON.stringify({"data": {"name":window.HHUser.name,"language":window.HHUser.language,"contact":window.HHUser.contact,"age":window.HHUser.age,"problem":window.HHUser.problem,"profession":window.HHUser.profession,"specific":window.HHUser.specific, "toc" :  window.HHUser.toc, "date":today.toLocaleDateString("en-US", options), "time":today.toLocaleTimeString()}}),
        }).then(res =>{
            if (res.status === 201){
                var myElement = document.getElementById("modal-success");
                window.HHUser=null;
                inputdefocus();
                myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
                var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                var timeLag = (windowWidth > 1500)?1000:800;
                setTimeout(() => {
                    inputdefocus();
                }, timeLag);
            }
            else{
                alert("Some network problem !! Please try later.");
                window.HHUser=null;
                window.location.reload();
            }
        })
    }
}

function booksession(nos)
{
     window.HHUser={...window.HHUser,nos}
     var myElement = document.getElementById('book-modal-week');
     myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    document.getElementById("progress-value-book").style.width="80%";
}
function weekchose(nod){ 
    window.HHUser={...window.HHUser,nod}
    var myElement = document.getElementById('book-modal-time');
    myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    document.getElementById("progress-value-book").style.width="90%";
}
function timechose(time)
{
     document.getElementById("progress-value-book").style.width="100%";
     window.HHUser={...window.HHUser,time};
     inputfocussure();
     document.getElementById("progress-value-book").style.width="100%";
     document.getElementById("fornamebook").value="";
     document.getElementById("foragebook").value="";
     document.getElementById("forcontactbook").value="";
     document.getElementById("forailmentbook").value="";
     document.getElementById("book-show-loading").style.display="block";
     var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
     var today  = new Date();    
     fetch("https://api.apispreadsheets.com/data/4623/", {
         method: "POST",
         body: JSON.stringify({"data": {"name":window.HHUser.name,"contact":window.HHUser.contact,"age":window.HHUser.age,"problem":window.HHUser.problem,"profession":window.HHUser.profession,"specific":window.HHUser.specific,"nos":window.HHUser.nos, "nod":window.HHUser.nod, "tos":window.HHUser.time, "toc" : window.HHUser.toc, "date":today.toLocaleDateString("en-US", options), "time":today.toLocaleTimeString()}}),
     }).then(res =>{
     if (res.status === 201){
         var myElement = document.getElementById("book-modal-success");
         window.HHUser=null;
         myElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
         var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
         var timeLag = (windowWidth > 1500)?1000:800;
         setTimeout(() => {
        //  document.getElementById("forcontactbook").blur();
         inputdefocus();
         }, timeLag);
     }
     else{
         alert("Some network problem !! Please try later.");
         window.HHUser=null;
         window.location.reload();
     }
     })
 //    alert("congo your session is booked");
}

function directFormSubmit(title){
    var name = document.getElementById("direct-name").value;
    var age = document.getElementById("direct-age").value;
    var contact = document.getElementById("direct-phone").value;
    var phoneno = /^[0-9]{10}$/;
    if(name == "" || age.length == 0 || Number(age) < 0 || Number(age) > 100 || isNaN(age) || !contact.match(phoneno))
    {
        document.getElementById("direct-wrong-para").style.display="block";
    }
    else
    {
        document.getElementById("direct-wrong-para").style.display="none";
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today  = new Date();
        document.getElementById("direct-btn").style.pointerEvents="none";
        document.getElementById("direct-btn").innerText="Submitting..";
        fetch("https://api.apispreadsheets.com/data/11722/", {
         method: "POST",
         body: JSON.stringify({"data": {"name":name,"contact":contact,"age":age,"problem":title,"date":today.toLocaleDateString("en-US", options), "time":today.toLocaleTimeString()}}),
        }).then(res =>{
        if (res.status === 201){
            document.getElementById("direct-btn").innerText="Congratulations!";
            document.getElementById("direct-name").value="";
            document.getElementById("direct-age").value="";
            document.getElementById("direct-phone").value="";
            document.getElementById("direct-success-para").style.display="block";
            setTimeout(() => {
                console.log("reached here")
                gtag_report_conversion(window.location.href);
            }, 1000);
        }
        else{
            alert("Some network problem !! Please try later.");
            window.location.reload();
        }
        })
    }
    console.log(name, age, contact);
}