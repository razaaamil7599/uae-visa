function getdata(){
    var mofadata;
    setpage(mofadata);
}

getdata();

function setpage(mofadata){
console.log("setting page..");
console.log("data has come");
console.log(mofadata);
let ht = document.getElementById('mofadetails');


ht.innerHTML=`<div id='mofadetails' class="evis-content-top-details">
<div class="col-2">
    <div class="col-2-1">Passport Number</div>
    <div class="col-2-2">786786</div>
</div>
<div class="col-2">
    <div class="col-2-1">Passport Type</div>
    <div class="col-2-2">
        Normal
    </div>
</div>
<div class="col-2">
    <div class="col-2-1">Gender</div>
    <div class="col-2-2">
        Male
    </div>
</div>
<div class="col-2">
    <div class="col-2-1">Date of Expiry</div>
    <div class="col-2-2">22/10/2033</div>
</div>
<div class="evisa-sep-sml">
    <img src="./Visa platform_files/media/tickbar.png" alt="-">
</div>
<div class="col-2">
    <div class="col-2-1">Saudi Mission in</div>
    <div class="col-2-2">
        Mumbai
    </div>
</div>
<div class="col-2">
    <div class="col-2-1">Visa Type</div>
    <div class="col-2-2">
Business Visit                                                </div>
</div>
<div class="col-2">
    <div class="col-2-1">Number of Entries</div>
    <div class="col-2-2">
        Single - 30 Day 

    </div>
</div>
<div class="col-2">
    <div class="col-2-1"> Sponsor Name</div>
    <div class="col-2-2">NESMA TRADING</div>
</div>
<div class="col-2">
    <div class="col-2-1"> Arabic Name</div>
    <div class="col-2-2">   </div>
</div>
<div class="col-2">
    <div class="col-2-1"> Name</div>
    <div class="col-2-2">FARDEEN   RAFIQUE</div>
</div>
<div class="col-2">
    <div class="col-2-1">Occupation</div>
    <div class="col-2-2">MOSQUE CLEANER</div>

</div>
<div class="col-2">
    <div class="col-2-1">Date of Birth</div>
    <div class="col-2-2">30/05/2003</div>
</div>
<div class="col-2">
    <div class="col-2-1"> Place of Birth</div>
    <div class="col-2-2"> SOLAPUR</div>
</div>
<div class="col-2">
    <div class="col-2-1">Current Nationality</div>
    <div class="col-2-2">
        India
    </div>
</div>
<div class="col-2">
    <div class="col-2-1">Purpose</div>
    <div class="col-2-2">work</div>
</div>
</div>`
    
}