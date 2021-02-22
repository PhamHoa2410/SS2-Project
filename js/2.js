 // [+/- num product ]*/
   
    $(function(){
        $('.btn-num-product-up').click(function (e) {
        var numProduct = Number($(this).prev().val()); // lấy giá trị của thàng truoc no va chuyen ve dang so
        $(this).prev().val(numProduct + 1); //tang gia tri thang input  
    });
    $('.btn-num-product-down').click(function (e) {
        var numProduct = Number($(this).next().val());
        if (numProduct > 0) {
            $(this).next().val(numProduct - 1);
        }
    });

      let emailRgx = /^([a-zA-Z0-9]{3,20})+@+([a-z-]{3,10})\.([a-z]{3,5})$/;
      let namesrex = /^([a-zA-Z-0-9]{3,20})$/;
      let passworkrex = /^([a-zA-Z-0-9]{6,99})$/;
      $('#namesignup').change(function () {
        if (!namesrex.test($('#namesignup').val())) {
          $('.fullname .help-block').css('opacity', 1);
          $('.fullname .help-block').css('visibility', 'visible');
          $('.fullname .fas.fa-check').css('opacity', 0);

        } else {
          $('.fullname .help-block').css('opacity', 0);
          $('.fullname .help-block').css('visibility', 'hiden');
          $('.fullname .fas.fa-check').css('opacity', 1);
        }
      });
      $('#username').change(function () {
        if (!namesrex.test($('#username').val())) {
          $('.username .help-block').css('opacity', 1);
          $('.username .help-block').css('visibility', 'visible');
          $('.username .fas.fa-check').css('opacity', 0);

        } else {
          $('.username .help-block').css('opacity', 0);
          $('.username .help-block').css('visibility', 'hiden');
          $('.username .fas.fa-check').css('opacity', 1);
        }
      });
      $('#emailsignup').change(function () {
        if (!emailRgx.test($('#emailsignup').val())) {
          $('.email-signup .help-block').css('opacity', 1);
          $('.email-signup .help-block').css('visibility', 'visible');
          $('.email-signup .fas.fa-check').css('opacity', 0);

        } else {
          $('.email-signup .help-block').css('opacity', 0);
          $('.email-signup .help-block').css('visibility', 'hiden');
          $('.email-signup .fas.fa-check').css('opacity', 1);
        }
      });
      $('#password').change(function () {
        if (!passworkrex.test($('#password').val())) {
          $('.password .help-block').css('opacity', 1);
          $('.password .help-block').css('visibility', 'visible');
          $('.password .fas.fa-check').css('opacity', 0);

        } else {
          $('.password .help-block').css('opacity', 0);
          $('.password .help-block').css('visibility', 'hiden');
          $('.password .fas.fa-check').css('opacity', 1);
        }
      });

      $('#confirm').change(function () {
        if (!passworkrex.test($('#password').val())) {

        } else if ($('#password').val() != $('#confirm').val()) {
          $('.confirm .help-block').css('opacity', 1);
          $('.confirm .help-block').css('visibility', 'visible');
          $('.confirm .fas.fa-check').css('opacity', 0);

        } else {
          $('.confirm .help-block').css('opacity', 0);
          $('.confirm .help-block').css('visibility', 'hiden');
          $('.confirm .fas.fa-check').css('opacity', 1);

        }
      });
      $('#submitsingup').prop('disabled', 'true');
      $('#checkbox').click(function () {
        if ($('#checkbox').prop('checked') == false) {
          $('#submitsingup').attr('disabled', 'true');
        } else if ($('#checkbox').prop('checked') == true) {
          $('#submitsingup').removeAttr('disabled');

        }
      });
      $('#submitsingup').click(function () {

        if ($('#password').val() != $('#confirm').val()) {
          return false;
        }
      });
    
    })



















    