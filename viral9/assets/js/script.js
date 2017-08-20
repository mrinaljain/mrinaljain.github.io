//Javascript
var FIREFOX = /Firefox/i.test(navigator.userAgent);


$(window).on('resize', function () {
  if ($(window).width() < 760) {
    //alert('sssssss');
    //    $('.second-menu-it').addClass('container');
    $('.contents').show();
    $('.contents').css('padding-right', '0');
    $('.wrapper').css('width', '100%');
    $('.queueBtn').show();
  }
});

$(document).ready(function () {
  if (FIREFOX) {
    $("span.caret").css({
      position: 'absolute',
      right: 0
    });
  }
  //  $("html").niceScroll({
  //    cursorcolor: "#3e23d9",
  //    cursorborder: "3px solid #3e23d9",
  //    horizrailenabled: false
  //  });
  $(".queueScroll").niceScroll({
    cursorcolor: "#3e23d9",
    cursorborder: "3px solid #3e23d9"
  });
  $('.scroll').niceScroll({
    cursorcolor: "rgba(62, 35, 217, 0.65)",
    cursorborder: "1px solid rgba(62, 35, 217, 0.65)"
  });
  $('.catScroll').niceScroll({
    cursorcolor: "rgba(62, 35, 217, 0.65)",
    cursorborder: "1px solid rgba(62, 35, 217, 0.65)"
  });
  $('.thumb').on('mouseover', function () {
    $(this).find('.getLinkButton').fadeIn(100);
    $(this).addClass('thumb-active');
    $(this).find('.twoButtons').fadeIn(300);
  });
  $('.thumb').on('mouseleave', function () {
    $(this).find('.getLinkButton').fadeOut();
    $(this).removeClass('thumb-active');
    $(this).find('.twoButtons').fadeOut();
  });
  $('.heartButton').on('click', function () {
    if ($(this).hasClass('fa-heart')) {
      $(this).removeClass('fa-heart');
      $(this).addClass('fa-heart-o');
    } else {
      $(this).removeClass('fa-heart-o');
      $(this).addClass('fa-heart');
    }
  });
  $('.queuelist').on('mouseenter', '.wrapper', function () {
    $(this).addClass('wrapper-active');
    $(this).find('.queueBtn').fadeIn();
    $(this).find('.icon').addClass('icon-overlay');
  });
  $('.queuelist').on('mouseleave', '.wrapper', function () {
    if ($(this).find('.selected').hasClass('select')) {
      return;
    } else {
      $(this).removeClass('wrapper-active');
      $(this).find('.queueBtn').fadeOut();
      $(this).find('.icon').removeClass('icon-overlay');
    }
  });
  $('.addtoque').on('click', function () {
    var lol = $(this).closest('.gal-detail');
    var cardimage = lol.find('img.thumb-img').attr('src');
    var cardcontent = lol.find('h5').text();
    var newcard = '<div class ="wrapper"><div class="icon" style="background-image:url(' + cardimage + ')"><i class ="fa fa-check selected" aria-hidden="true"></i></div><div class="contents"><p>' + cardcontent + '</p><a href = "#" class ="queueBtn deleteQueue">' + 'DELETE' + '</a><a href = "#" class ="queueBtn postQueue pull-right ">' + 'POST NOW' + '</a></div></div>';

    $("#queuecards").append(newcard);
    $('').fadeIn();
    $('.footerQueue').fadeIn();
    swal("Added to Queue", "", "success");
  });
  $('.wrapper').on('click', '.icon', function () {
    $(this).find(".selected").toggleClass('select');
    $(this).find('.icon').addClass('icon-overlay');
  });
  $('.wrapper').on('click', '.deleteQueue', function () {
    $(this).closest('.wrapper').remove();
    swal("Removed from Queue", "", "error");
  });
  $('.button-menu-mobile').on('click', function () {
    //alert('llll');
    $('.contents').toggleClass('content-short');
    $('.wrapper').toggleClass('wrapper-short');
  });
  $('.minQueue').on('click', function () {
    $(this).closest('.queuePannel').slideUp();
    $('.usage-details').slideDown();
    $('#openQueue').delay(1000).fadeIn(1000);
    //alert('llllll');
  });
  $('#openQueue').on('click', function () {
    $(this).hide();
    $('.usage-details').slideUp();
    $('.queuePannel').slideDown();
  });
  $('#openfilter').on('click', function () {
    //$(this).hide();
    $('.side-menu.left').toggleClass('side-menu-active');
    //$('.queuePannel').slideDown();
  });
  $('.scheduleLeft').on('mouseenter', '.card-image', function () {
    //alert('lll');
    $(this).addClass('icon-overlay');
    $(this).find('.selectcard').fadeIn();
  });
  $('.scheduleLeft').on('mouseleave', '.card-image', function () {
    //alert('lll');
    $(this).removeClass('icon-overlay');
    $(this).find('.selectcard').hide();
  });
  $('.scheduleLeft').on('click', '.card', function () {
    $(this).find('.card-image').toggleClass('icon-overlay');
    $(this).find('.selectcard').fadeToggle();
  });
  $('.dateTime').on('click', function () {
    //alert('llllllll');
    $(this).find('.dateTimeValue').text('To Be Scheduled');
    $(this).siblings('.customTime').fadeIn(1000);
    $(this).siblings('.postbtn').hide();
    $(this).siblings('.deselect').hide();
  });
  $('.myfeed-campaigns').on('mouseenter', '.gal-detail', function () {
    //alert('llllll');
    $(this).addClass('bx-shadow');
    $(this).find('.threeButtons').fadeIn();
    //$(this).css('position', 'absolute');
  });
  $('.myfeed-campaigns').on('mouseleave', '.gal-detail', function () {
    //alert('llllll');
    $(this).removeClass('bx-shadow');
    $(this).find('.threeButtons').fadeOut();
    //$(this).css('position', 'relative');
  });
  $(".tag.addtags").on('click', function () {
    $("#panel-modal-tags").slideDown();
  });
  $("#dropdownMenu7").on('click', function () {
    $('.advertiserDropdownMenu').slideToggle();
  });
  $('.rankone').on('click', function () {
    $(this).text(function (i, text) {
      return text === "Overall" ? "My Rank" : "Overall";
    });
  });
  $('.articleShort').on('click', '.crossButton', function () {
    var that = $(this);
    swal({
        title: "Are you sure?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes!",
        cancelButtonText: "No!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function (isConfirm) {
        if (isConfirm) {
          that.closest(".col-lg-6").remove();
          swal("Deleted!", "", "success");
        } else {
          swal("Cancelled", "", "error");
        }
      });
  });
  $('#checkbox1').click(function () {
    var extentionlist = $(".extentionlist").find("input");
    if ($(this).prop("checked") === true) {
      extentionlist.attr("disabled", true);


    } else if ($(this).prop("checked") === false) {

      extentionlist.removeAttr("disabled");
    }
  });
  $('#panel-modal-tags').on('click', '.savetag', function () {
    var activtags = $('.tags-list div .tag').hasClass('.tag-active');
  });
  $('.getLinkButton').on('click', function () {
    $(this).addClass('hinge');
    var post = $(this).siblings('h5');
    post.addClass('editableh5');
    post.attr('contenteditable', 'false');
    post.select();
    //post.css('background-color', 'black');
    $(this).siblings('.coplspan').addClass('coplspan-active');
    $(this).siblings('.coplspan').find('.copylink').fadeIn();
    $(this).siblings('.campaigns_getLink_area').fadeIn();

  });
  $('.copylink').on('click', function () {
    $(this).parent().siblings('.getLinkButton').show();
    $(this).fadeOut();
    $(this).parent().siblings('.campaigns_getLink_area').hide();
    $(this).parent().siblings('.editableh5').removeClass('editableh5');
  });
  $('.postNow_storycaption').on('click', '.editcaption', function () {
    $(this).siblings('h3').attr('contenteditable', 'true');
    //alert('dddd');
  });
  $('.storytitle').on('click', '.editcaption', function () {
    $(this).siblings('h2').attr('contenteditable', 'true');
    //alert('dddd');
  });
  $('.postNow_modalheader').on('click', '.closepostmodal', function () {
    $(this).closest('.postNow_modalWrapper').slideUp();
    $('.modal-backdrop').remove();
  });
  $('.drop').on('click', function () {
    $('.dropadv').slideUp();
    $(this).siblings('.dropadv').slideToggle();
  });
  $('.profiledrop').on('click', function () {
    $('.notifybox').slideUp();
    $('.dropadv').slideUp();
    $(this).find('.profiledropadv').slideToggle();
  });
  //  $('.moredrop').on('click', function () {
  //    $('.notifybox').slideUp();
  //    $('.dropadv').slideUp();
  //    $('.moredropadv').slideToggle();
  //  });
  //  $('.postNow_modalCard').on('click', '.postnow', function () {
  //    $(this).closest('.postNow_modalCard').slideToggle();
  //    $('.modal-backdrop').remove();
  //
  //  });
  $('.tag').on('click', function () {
    $(this).toggleClass('tag-active');
  });
  $('.remainingTags').on('click', function () {
    $('.ShowMoreTags').css('display', 'block');
  });
  $('.closetagmodal').on('click', function () {
    $(this).closest('.modal').slideUp();
  });
  $(".dropdown-menu li").on('click', function () {
    $(this).closest('.dropdown-menu').slideUp();
    var setvalue = $(this).text();
    $(this).parent('.dropdown-menu').siblings('button').html(setvalue + ' <span class="caret pull-right"></span>');
  });
  $('.open-sedenav').on('click', function () {
    //alert('sss');
    $('.overlay').fadeToggle();
    $('.side-nav').toggleClass('side-nav-visible');
  });
  $('#notify').on('click', function () {
    $(this).find('span').fadeOut();
    $('.notifybox').slideToggle();
  });
  $('.editname').on('click', function () {
    var editName = $(this).siblings('span').find('p');
    editName.attr('contenteditable', 'true');
    editName.css({
      'textDecoration': "underline"
    });
  });
  $('.campaignFilter').on('click', 'a', function () {
    $(this).siblings('a').removeClass("current");
    $(this).addClass("current");
  });
  $('.unactive').on('click', 'a', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).parent().siblings('.active').removeClass("active");
    $(this).parent().addClass("active");
  });
  $('.viewQue').on('click', function (e) {
    //$('.queuePannel').toggleClass('queuePannelShow');
    e.preventDefault();
    $('.queuePannel').removeClass('hidden-xs hidden-sm');
  });
});
