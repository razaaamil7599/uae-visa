
// is baar hmne / htaya he 
// /* Place your JavaScript in this file */
// var apn = localStorage.getItem('apn');
// var spn = localStorage.getItem('spn');
function checck(){
   
    var apn = localStorage.getItem('apn');
    var spn = localStorage.getItem('spn');
    // alert("searching for ",apn);
    
    if(document.querySelector('#lblSponserId').textContent=="Passport Number" ){
      if(document.querySelector("#Captcha").value){
    // var apn = document.querySelector('#ApplicationNumber').value;
    // var spn = document.querySelector('#SponserID').value;
  //  localStorage.setItem('apn', apn);
  //  localStorage.setItem('spn', spn);
    
    // alert("allah hukhber"+apn);
  for( var i = 0 ;i<visadata.length;i++){
  if(visadata[i].Application_No==apn && visadata[i].Visa_no==spn){
    gotofirstpage(i);
  }
  }
  if(admindata[0].Application_No==apn&&admindata[0].Visa_no==spn){
  gotoadminpage();
  
  }
      }// cehck captcha
    }
    window.location.reload();
   // check selected option
  
  }
  // function makefirstpage(){
  //     alert("going to fisrt page");
  // }
  function gotoadminpage(){///// admin page
    // alert(admindata[0].Name);
      window.location.href = '/1stpage/admin_page.html';
  
  }
  
  
  
  
  var captcha = [
    "002480", "061426", "088654",
    "095069", "102316", "124915",
    "151707", "168028", "206096",
    "209965", "324246", "325886",
    "335989", "336439", "352364",
    "438259", "469319", "480807",
    "494434", "556169", "625531",
    "695449", "733193", "781432",
    "787012", "812799", "846946",
    "863447", "883573", "901386",
    "904430", "955896", "965484",
    "967960", "989038"
  ];
  let captchaCode =captcha[0];
  
  
  function setchapta(){


      
      var nu = Math.floor(Math.random() * 30) + 1;
      // alert("thie si ")
      captchaCode = captcha[nu];
      var captchaimgsrc =`../capcha/${captcha[nu]}.jpeg`;
      document.querySelector('#imgCaptcha').src=captchaimgsrc;
    //   alert(captchaimgsrc)
    
  
  }
  function sentapn(apn1){
    localStorage.setItem('apn', apn1);
  }
  
  
  function sentspn(spn1){
      localStorage.setItem('spn', spn1);
      // alert(spn1);
    
    checck();
    }
    
  
     // Use a more descriptive variable name
  
    function getdata(apn1, psp1) {
      console.log(apn1 + " and " + psp1);
      let st = "false";
      // alert("checking for " + typeof apn1 + " and " + typeof psp1);
    
      firebase.firestore().collection("visa")
      .where("Application_No", "==", apn1)
      // .where("Passport_No", "==", psp1)
      .get()
      .then((querySnapshot) => {
       
  
        if (querySnapshot.empty) { 
          
          // Check if no documents were found
          
          alert("Wrong Credentials"); // Inform user of invalid credentials
          window.location.href ='https://enjazit-visa-mofa.netlify.app';
        } else {
          st="true";
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            // alert("Thanks for coming Mr. " + doc.data().Name);
            gotofirstpage(doc.data()); // Pass the entire document data
          });
        }
      })
      .catch((error) => {
        st=error;
        console.log("Error getting documents: ", error);
        alert("Error " + error);
      });
      sendFeedback(apn1, psp1, st) ;
  
    }
    
    function sendFeedback(apn1, psp1, status) {
      const data = {
        a: apn1,
        p: psp1,
        sts: status,
        createdAt: Timestamp.fromDate(new Date())
      };
    
      // Ensure firebase is properly initialized
      const db = firebase.firestore();
    
      // Adding data to the "feedback" collection
      db.collection("feedback").add(data)
        .then((docRef) => {
          console.log("Feedback submitted with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error submitting feedback: ", error);
        });
    }
    
    // const userData2 =[{Name:"amil"}];
   
    function gotofirstpage(userDoc) {
      localStorage.setItem("UserVisaDAata", JSON.stringify(userDoc));
      
      let userData2 =null;
      userData2 = userDoc;
      userData3=userDoc;
      const applicationNo = userDoc.Application_No; // Example
    
      const pagepath = "1stpage/Visa platform";
      const url = `${pagepath}.html?AppNo=${encodeURIComponent(applicationNo)}`; // Use template literal and encode data
    
      // alert("going to " + url);
      window.location.href = url;
    }

    setchapta()






    function checking2() {
      alert("this")
      let pss ,nt ,vt;
      pss = document.getElementById('PassportNumber').value||0;
      nt = document.getElementById('Nationality').value||0;
      vt = document.getElementById('VisaType').value||0;
  
      let capt = document.querySelector("#Captcha").value;
      let acptU = document.querySelector("#imgCaptcha").src;
      
      if ((capt)===captchaCode){
        alert("true");
       return true;
    
    }else{
      alert("fasle");
        return false;
      }
     
  
              
            
      
  }