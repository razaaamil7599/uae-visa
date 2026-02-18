// setdetails();


var i ;

function settingupdata(){
  
    var apn = localStorage.getItem('apn');

       
for( var i = 0 ;i<visadata.length;i++){
    if(visadata[i].Application_No==apn){
      // alert("allah hukhber");
      // setdetails(i);

        
        // document.querySelector();


    }
  }
    
}


function setdetails(i){


  document.querySelector("#d1").innerHTML=`
  <div class="col-3">
        <div class="col-3-1">رقم التأشيرة</div>
        <div class="col-3-2">${visadata[i].Visa_no}</div>
        <div class="col-3-3">Visa No.</div>
    </div>
    <div class="col-3">
        <div class="col-3-1">صالحة اعتباراً من</div>
        <div class="col-3-2">${visadata[i].Valid_From}</div>
        <div class="col-3-3">Valid From</div>
    </div>
    <div class="col-3">
        <div class="col-3-1">صالحة لغاية</div>
        <div class="col-3-2">${visadata[i].Valid_till}</div>
        <div class="col-3-3">Valid Until</div>
    </div>
    <div id="hidelblDurationofStay" class="col-3">
        <div class="col-3-1">مدة الإقامة</div>
        <div class="col-3-2"> يوم ${visadata[i].validy_days} Days </div>
        <div class="col-3-3">Duration of Stay</div>
    </div>`;



  




  document.querySelector("#d7862").innerHTML=`
  <div class="col-3">
      <div class="col-3-1">مكان الإصدار</div>
      <div class="col-3-2">الممثلية السعودية في مومباي -  Saudi Mission In Mumbai</div>
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
      <div class="col-3-2">عمل - Work</div>
      <div class="col-3-3">Visa Type</div>
  </div>
  <div class="col-3">
      <div class="col-3-1">الاسم</div>
      <div class="col-3-2">${visadata[i].Name}</div>
      <div class="col-3-3">Name</div>
  </div>
  <div class="col-3">
      <div class="col-3-1">الجنسية</div>
      <div class="col-3-2">الهند - India</div>
      <div class="col-3-3">Nationality</div>
  </div>
  <div class="col-3">
      <div class="col-3-1">تاريخ الميلاد</div>
      <div class="col-3-2">${visadata[i].Birth_Date}</div>
      <div class="col-3-3">Birth Date</div>
  </div>
  <div class="col-3">
      <div class="col-3-1">رقم الجواز</div>
      <div class="col-3-2">${visadata[i].Passport_No}</div>
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
  <div id="hidelblRefNo" class="col-3">
      <div class="col-3-1">رقم المستند</div>
      <div class="col-3-2">${visadata[i].Ref_no}</div>
      <div class="col-3-3">Ref. No.</div>
  </div>
  <div id="hidelblRefDate" class="col-3">
      <div class="col-3-1">التاريخ</div>
      <div class="col-3-2">${visadata[i].Ref_Date}</div>
      <div class="col-3-3">Ref. Date</div>
  </div>
  <div id="hidelblAgencyName" class="col-3" style="display: none;">
      <div class="col-3-1">اسم الجهة</div>
      <div class="col-3-2">${visadata[i].agencyname}</div>
      <div class="col-3-3">Agency Name</div>
  </div>
  <div id="hidelblIdNo" class="col-3" style="display: none;">
      <div class="col-3-1">رقم الهوية</div>
      <div class="col-3-2">1032630244</div>
      <div class="col-3-3">ID No.</div>
  </div>
  <div id="hidelblOccupation" class="col-3">
      <div class="col-3-1">المهنة</div>
      <div class="col-3-2">${visadata[i].Occupation}</div>
      <div class="col-3-3">Occupation</div>
  </div>
  <div id="hidelblEmployername" class="col-3">
      <div class="col-3-1">اسم صاحب العمل</div>
      <div class="col-3-2">يوسف عبدالله سعيد العرابي</div>
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
document.querySelector("#apn786").innerHTML=`<span class="evisa-data-barcode-number">${visadata[i].Application_No}</span>`;
document.querySelector(".evisa-mrz-1").innerText=`${visadata[i].PSScode1}`;
document.querySelector(".evisa-mrz-2").innerText=`${visadata[i].PSScode2}`;

document.querySelector(".evisa-img").src=visadata[i].imagesrc;
document.querySelector(".evisa-qr-img").src=visadata[i].barcode_image;

 
}


//   document.querySelector("#d1").innerHTML=` <div class="evis-content-top-img">
//   <img class="evisa-img"  style="height: 178.43px; width: 178.43px;" alt="visa image" src="Visa platform_files/media/ra.jpg">
// </div>
// <div id="d2" class="evis-content-top-details">

//   <div class="col-3">
//       <div class="col-3-1">رقم التأشيرة</div>
//       <div class="col-3-2">${visadata[i].Visa_no}</div>
//       <div class="col-3-3">Visa No.</div>
//   </div>
//   <div class="col-3">
//       <div class="col-3-1">صالحة اعتباراً من</div>
//       <div class="col-3-2">${visadata[i].Valid_From}</div>
//       <div class="col-3-3">Valid From</div>
//   </div>
//   <div class="col-3">
//       <div class="col-3-1">صالحة لغاية</div>
//       <div class="col-3-2">${visadata[i].Valid_till}</div>
//       <div class="col-3-3">Valid Until</div>
//   </div>
//   <div id="hidelblDurationofStay" class="col-3">
//       <div class="col-3-1">مدة الإقامة</div>
//       <div class="col-3-2"> يوم ${visadata[i].validy_days} Days </div>
//       <div class="col-3-3">Duration of Stay</div>
//   </div>`;
