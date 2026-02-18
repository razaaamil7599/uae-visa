
const storedData = localStorage.getItem("UserVisaDAata");
const UserVisaData = JSON.parse(storedData);
// alert("this ")




setdetails();

  function getdate(){
    const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // Month starts at 0
const day = today.getDate();
return ` ${day}/${month}/${year}`;

  }
  // Example usage
  
  
  
function settingupdata(){
  
  
//   var apn = localStorage.getItem('apn');
var apn = recieveDATA1("AppNo");  

for( var i = 0 ;i<visadata.length;i++){
    if(UserVisaData.Application_No==apn){
        // 
      // alert("allah hukhber");
    //   setdetails(i);
      // document.querySelector();

      
    }
  }
  
}


function setdetails(){

   

   

    try{
       


    var msg = `'Visa has been issued, No.${UserVisaData.Visa_no} `;
    
    ShowMessage('Visa platform',msg , 'green');
    
    //   var imgpath = "fisrtpagevisafiles/media/profile/"+UserVisaData.imagesrc;
    //   var qrimgpath = "fisrtpagevisafiles/media/qrcode/"+UserVisaData.qrimagsrc;
    
    document.querySelector(".evisa-img").src=UserVisaData.imagesrc;
    document.querySelector(".evisa-qr-img").src=UserVisaData.barcode_image ||getQRcode(UserVisaData.Application_No) ;
 
  

  document.querySelector("#d1").innerHTML=`
  <div class="col-3">
        <div class="col-3-1">رقم التأشيرة</div>
        <div class="col-3-2">${UserVisaData.Visa_no}</div>
        <div class="col-3-3">Visa No.</div>
    </div>
    <div class="col-3">
        <div class="col-3-1">صالحة اعتباراً من</div>
        <div class="col-3-2">${convertDateFormat(UserVisaData.Valid_From)}</div>
        <div class="col-3-3">Valid From</div>
    </div>
    <div class="col-3">
        <div class="col-3-1">صالحة لغاية</div>
        <div class="col-3-2">${convertDateFormat(UserVisaData.Valid_till)}</div>
        <div class="col-3-3">Valid Until</div>
    </div>
    <div id="hidelblDurationofStay" class="col-3">
        <div class="col-3-1">مدة الإقامة</div>
        <div class="col-3-2"> يوم ${UserVisaData.validy_days} Days </div>
        <div class="col-3-3">Duration of Stay</div>
    </div>`;



  let ref = null;
  if(UserVisaData.Ref_no!=null){
    ref=`  <div id="hidelblRefDate" class="col-3">
      <div class="col-3-1">رقم المستند</div>
      <div class="col-3-2">${UserVisaData.Ref_no}</div>
      <div class="col-3-3">Ref. No.</div>
  </div>`
  }else{
    ref=``;
  }

    


  document.querySelector("#d7862").innerHTML=`
  <div class="col-3">
      <div class="col-3-1">مكان الإصدار</div>
      <div class="col-3-2">الممثلية السعودية في ${UserVisaData.placeArabic} -  Saudi Mission In ${UserVisaData.place} </div>
      <div class="col-3-3">Place of issue</div>
  </div>
  <div id="hidelblprpose" class="col-3" style="display: none;">
      <div class="col-3-1">الغرض</div>
      <div class="col-3-2"> WORK</div>
      <div class="col-3-3">Purpose</div>
  </div>
  <div id="hidelblEntries" class="col-3" style="display: none;">
      <div class="col-3-1">عدد مرات الدخول</div>
      <div class="col-3-2">سفرة واحدة - Single</div>
      <div class="col-3-3">Entry Type</div>
  </div>
  <div class="col-3">
      <div class="col-3-1">نوع التأشيرة</div>
      <div class="col-3-2">${UserVisaData.visaType}</div>
      <div class="col-3-3">Visa Type</div>
  </div>
  <div class="col-3">
      <div class="col-3-1">الاسم</div>
      <div class="col-3-2">${UserVisaData.Name}</div>
      <div class="col-3-3">Name</div>
  </div>
  <div class="col-3">
      <div class="col-3-1">الجنسية</div>
      <div class="col-3-2">الهند - India</div>
      <div class="col-3-3">Nationality</div>
  </div>
  <div class="col-3">
      <div class="col-3-1">تاريخ الميلاد</div>
      <div class="col-3-2">${convertDateFormat(UserVisaData.Birth_Date)}</div>
      <div class="col-3-3">Birth Date</div>
  </div>
  <div class="col-3">
      <div class="col-3-1">رقم الجواز</div>
      <div class="col-3-2">${UserVisaData.Passport_No}</div>
      <div class="col-3-3">Passport No.</div>
  </div>
  <div id="hidelblIdNoE" class="col-3" style="display: none;">
      <div class="col-3-1">رقم الإقامة</div>
      <div class="col-3-2">1032630244</div>
      <div class="col-3-3">ID No.</div>
  </div>
  <div id="hidelblRelationship" class="col-3" style="display: none;">
      <div class="col-3-1">صلة القرابة</div>
      <div class="col-3-2"></div>
      <div class="col-3-3">Relationship</div>
  </div>
  <div id="hidelblSponsorName" class="col-3" style="display: none;">
      <div class="col-3-1">اسم العائل</div>
      <div class="col-3-2">يوسف عبدالله سعيد العرابي</div>
      <div class="col-3-3">Sponsor name</div>
  </div>
  ${ref}

  <div id="hidelblRefDate" class="col-3">
      <div class="col-3-1">التاريخ</div>
      <div class="col-3-2">${convertDateFormat(UserVisaData.Valid_From)}</div>
      <div class="col-3-3">Ref. Date</div>
  </div>
  <div id="hidelblAgencyName" class="col-3" style="display: none;">
      <div class="col-3-1">اسم الجهة</div>
      <div class="col-3-2">${UserVisaData.agencyname}</div>
      <div class="col-3-3">Agency Name</div>
  </div>
  <div id="hidelblIdNo" class="col-3" style="display: none;">
      <div class="col-3-1">رقم الهوية</div>
      <div class="col-3-2">1032630244</div>
      <div class="col-3-3">ID No.</div>
  </div>
  <div id="hidelblOccupation" class="col-3">
      <div class="col-3-1">المهنة</div>
      <div class="col-3-2">${UserVisaData.Occupation}</div>
      <div class="col-3-3">Occupation</div>
  </div>
  <div id="hidelblEmployername" class="col-3">
      <div class="col-3-1">اسم صاحب العمل</div>
      <div class="col-3-2">${UserVisaData.Employer_name}</div>
      <div class="col-3-3">Employer name</div>
  </div>
  <div id="hidelblCarNo" class="col-3" style="display: none;">
      <div class="col-3-1">رقم السيارة</div>
      <div class="col-3-2">NOT CONFORM</div>
      <div class="col-3-3">Car No.</div>
  </div>
  <div class="col-3">
      <div class="col-3-1">الرسوم</div>
      <div class="col-3-2">بدون رسوم - Free</div>
      <div class="col-3-3">Visa Fees</div>
  </div>


`;
document.querySelector("#apn786").innerHTML=`<span class="evisa-data-barcode-number">${UserVisaData.Application_No}</span>`;
document.querySelector(".evisa-mrz-1").innerText=`${UserVisaData.PSScode1}`;

document.querySelector(".evisa-mrz-2").innerText=``;


const fing = document.querySelector("#finger");
if (UserVisaData.finger === "YES") {
    fing.style.display = "block";
} else {
    fing.style.display = "none";
    
    
}

}catch(error){
    alert("none" +error);
    console.log("error"+error);

}
 
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