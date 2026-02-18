
function change_SearchType() {

    $("#SearchingType").on('change', function () {
        //$(".home-tabs-enquire .nav-tabs a").on('click', function () {

        var e = $(this).val();//.attr('data-value');

        if (e == '1') { //ApplicationNumber
            $('#lblAppNo').text(Common.ApplicationNumber);
            $('#lblSponserId').text(Common.SponserID);
            $('#ApplicationNumber').attr('placeholder', Common.ApplicationNumber);
            $('#SponserID').attr('placeholder', Common.SponserID);
            $('.SponserIdDesc').show();
            $('.SelectDesc').show();
            $('#desc').attr('data-original-title', Home.ApplicationNumberDescription);
            //document.getElementById('desc').title = Home.ApplicationNumberDescription;

      
         
        }
        else if (e == '2') { //VisaNumber
            $('#lblAppNo').text(Common.VisaNumber);
            $('#lblSponserId').text(Common.SponserID);
            $('#ApplicationNumber').attr('placeholder', Common.VisaNumber);
            $('#SponserID').attr('placeholder', Common.SponserID);
            $('.SponserIdDesc').show();
            $('.SelectDesc').show();
            $('#desc').attr('data-original-title', Home.VisaDocumentNumberDescription);
   
        }
        else if (e == '3') { //Enjaz Application
            $('#lblAppNo').text(Common.ApplicationNumber);
            $('#lblSponserId').text(Home.PassportNumber);
            $('#ApplicationNumber').attr('placeholder', Common.ApplicationNumber);
            $('#SponserID').attr('placeholder', Home.PassportNumber);
            $('.SponserIdDesc').hide();
            $('.SelectDesc').show();
            $('#desc').attr('data-original-title', Home.VisaApplicationNumberDescription);

        }
        else if (e == '4') { //InvitationLetter
            $('#lblAppNo').text(Home.InvitationLetterNumber);
            $('#lblSponserId').text(Home.InvitationLetterSponserID);
            $('#ApplicationNumber').attr('placeholder', Home.InvitationLetterNumber);
            $('#SponserID').attr('placeholder', Home.InvitationLetterSponserID);
            $('.SponserIdDesc').hide();
        }
        else if (e == '5') { //HajRequest
            $('#lblAppNo').text(Common.ApplicationNumber);
            $('#lblSponserId').text(Common.SponserID);
            $('#ApplicationNumber').attr('placeholder', Common.ApplicationNumber);
            $('#SponserID').attr('placeholder', Common.SponserID);
            $('.SponserIdDesc').hide();
        }
        else 
            $('.SelectDesc').hide();
        
       
      
    });

    $("#SearchingType").trigger('change');
}