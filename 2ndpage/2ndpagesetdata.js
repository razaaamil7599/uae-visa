init2npage();

function init2npage(){
    var apn  = revievedata("AppNo");
    findvisa(apn);
}
 

function setdata(UserVisaData2){
    


    // let da1 = convertDateFormat(UserVisaData2.Valid_From);
    // let afterdate = afterdays(da1);
    // alert(afterdate);

    document.querySelector("#r786").innerHTML=`
    <div class="evisa-content-top">
    
    <div class="evis-content-top-img">
    <img class="evisa-img" id="img786" style="height: 134.43px; width: 134.43px;" alt="visa image" src="ra.jpg">
    
    </div>
<div class="evis-content-top-details">
    <div class="col-3">
    <div class="col-3-1">رقم التأشيرة</div>
    <div class="col-3-2">${UserVisaData2.Visa_no}</div>
    <div class="col-3-3">Visa No.</div>
    </div>
    <div class="col-3">
    <div class="col-3-1"> الديانة </div>
    <div class="col-3-2">${UserVisaData2.religion}</div>
    <div class="col-3-3">Religion</div>
    </div>
    <div class="col-3">
    <div class="col-3-1"> تاريخ انتهاء الجواز </div>
    <div class="col-3-2">${convertDateFormat(UserVisaData2.PssEXpDate)}</div>
    <div class="col-3-3">Passport Expiry Date</div>
    </div>
    
    </div>
    </div>`;
    // alert(i);
    
    
    
    document.querySelector("#img786").src=UserVisaData2.imagesrc;
    document.querySelector("#dob").textContent=convertDateFormat(UserVisaData2.Birth_Date);
    //   alert(UserVisaData2.imagesrc);
    
      document.querySelector("#psscode").innerText=UserVisaData2.PSScode1;
    
}

function revievedata(data){
    const urlParams = new URLSearchParams(window.location.search);
    const data1 = urlParams.get(data);
    return data1;
}
function findvisa(apn1){
   
    firebase.firestore().collection("visa")
    .where("Application_No", "==", apn1)
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) { // Check if no documents were found
        alert("Wrong Credentials"); // Inform user of invalid credentials
      } else {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());

          setdata(doc.data()); // Pass the entire document data
        });
      }
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
      alert("Error " + error);
    });
    


    // for(var b = 0 ; b<visadata.length;b++){
    //     if(visadata[b].Application_No==apn){
    //         // alert("visa id found "+b);
    //         return b;}}

}

function convertDateFormat(dateString) {
    const parts = dateString.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  function afterdays(dateString,days){

        // Parse the date string into a Date object using the specified format
        const dateParts = dateString.split('/');
        const day = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]) - 1; // Months are 0-based in JavaScript
        const year = parseInt(dateParts[2]);
        const date = new Date(year, month, day);
      
        // Add 90 months to the date
        date.setMonth(date.getMonth() + days);
      
        // Return the modified date as a string in the original format
        const modifiedDay = date.getDate().toString().padStart(2, '0');
        const modifiedMonth = (date.getMonth() + 1).toString().padStart(2, '0');
        const modifiedYear = date.getFullYear().toString();
        return `${modifiedDay}/${modifiedMonth}/${modifiedYear}`;
      
     
  }