
const storedData = localStorage.getItem("VisaStampdata");
const UserVisaData = JSON.parse(storedData);
// alert("this ")




// setdetails();

  function getdate(){
    const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // Month starts at 0
const day = today.getDate();
return ` ${day}/${month}/${year}`;

  }
  // Example usage
  
  
  
  setdetails();


function setdetails(){

   

   

    try{
       


    // var msg = `'Visa has been issued, No.${UserVisaData.Visa_no} `;
    
    // ShowMessage('Visa platform',msg , 'green');
    
    //   var imgpath = "fisrtpagevisafiles/media/profile/"+UserVisaData.imagesrc;
    //   var qrimgpath = "fisrtpagevisafiles/media/qrcode/"+UserVisaData.qrimagsrc;
    // alert("shpiw"+UserVisaData.Passport_No);
    document.querySelector("#pss").innerText=UserVisaData.Passport_No||'111';
//     document.querySelector("#api").innerText=UserVisaData.Application_No||'222';
    document.querySelector("#exp").innerText=convertDateFormat(UserVisaData.Valid_till)||'333';
//     document.querySelector("#namee").innerText=UserVisaData.Name||'444';
    document.querySelector("#name").innerText=UserVisaData.Name||'IRSHAD ALI';
    document.querySelector("#ocu").innerText=UserVisaData.Occupation||'555';
    document.querySelector("#dob").innerText=convertDateFormat(UserVisaData.Birth_Date)||'666';
//     document.querySelector("#spon").innerText=UserVisaData.visaType||'Work';
//     document.querySelector("#placeB").innerText=UserVisaData.birthplace||'Work';
    document.querySelector("#apino").innerText=  "Application Number: "+UserVisaData.Application_No||'E795959008';
    document.querySelector("#apdate").innerText=  "Application Date: "+(UserVisaData.applDate||'2025/07/18');
    document.querySelector("#Purpose").innerText=UserVisaData.visaType||'Work';
    document.querySelector("#POB").innerText=UserVisaData.POB||'MORADABAD,UP';
    document.querySelector("#place").innerText=UserVisaData.place||'MORADABAD,UP';
    document.querySelector("#sponname").innerText=UserVisaData.Sponsor||`مجموعة بن لادن السعودية
 `;
//     // document.querySelector("#warn").display.style=none;
//     document.querySelector("#nameU").innerText=UserVisaData.nameU||'';
    document.querySelector("#NoEntry").innerText=("Single -  "+UserVisaData.validy_days+" Day")||'';
    
    document.querySelector(".requestphoto2").src=UserVisaData.imagesrc;
    // document.querySelector("#image786").src=UserVisaData.linebarcode_image ||getQRcode(UserVisaData.Application_No) ;
 
  



    




}catch(error){
    alert("none" +error);
    console.log("error"+error);

}
 
}



function convertDateFormat(dateString) {
  const parts = dateString.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

//   document.querySelector("#d1").innerHTML=` <div class="evis-content-top-img">
//   <img class="evisa-img"  style="height: 178.43px; width: 178.43px;" alt="visa image" src="fisrtpagevisafiles/media/ra.jpg">
// </div>
// <div id="d2" class="evis-content-top-details">

//   <div class="col-3">
//       <div class="col-3-1">رقم التأشيرة</div>
//       <div class="col-3-2">${UserVisaData.Visa_no}</div>
//       <div class="col-3-3">Visa No.</div>
//   </div>
//   <div class="col-3">
//       <div class="col-3-1">صالحة اعتباراً من</div>
//       <div class="col-3-2">${UserVisaData.Valid_From}</div>
//       <div class="col-3-3">Valid From</div>
//   </div>
//   <div class="col-3">
//       <div class="col-3-1">صالحة لغاية</div>
//       <div class="col-3-2">${UserVisaData.Valid_till}</div>
//       <div class="col-3-3">Valid Until</div>
//   </div>
//   <div id="hidelblDurationofStay" class="col-3">
//       <div class="col-3-1">مدة الإقامة</div>
//       <div class="col-3-2"> يوم ${UserVisaData.validy_days} Days </div>
//       <div class="col-3-3">Duration of Stay</div>
//   </div>`;





function getQRcode(apn){
    var fullpath = window.location.href;

    // var path = fullpath.replace("1stpage/Visa platform.html","2ndpage/2ndpage");
    var path = fullpath.replace("1stpage/visa%20platform","2ndpage/2ndpage");
//   const url = path+".html?AppNo=" + encodeURIComponent(apn); // Encode data for URL  
  const qrimgsrc = `https://api.qrserver.com/v1/create-qr-code/?data=${path}&size=150x150`;
   return `${qrimgsrc}`;

}

function convertDateFormat(dateString) {
    const parts = dateString.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }































  

// function recieveDATA1(data){
    
//     const urlParams = new URLSearchParams(window.location.search);
//     const data1 = urlParams.get(data);
//     return data1;
// }