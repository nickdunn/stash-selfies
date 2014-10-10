(function() {

  var config = {
      insertBefore : [
        '.tip'
      ],
      bodySelector : 'textarea[name="text"]',
      buttonHTML   : (
        '<button id="totallyAwesomeSelfieButton" type="button" class="button">' +
          '<span id="totallyAwesomeSelfieIcon" class="octicon octicon-device-camera"></span>' +
          'Take selfie!' +
        '</button>'
      ),
      placeVideo     : function (video) { $('.comment-form-footer').append(video); },
      preVideoStart  : function () { $('.comment-form-footer').addClass('expandSome'); },
      postVideoStart : function () {
        $('.comment-form-footer')
          .removeClass('expandSome')
          .addClass('expand');
      },
      postVideoStop : function () { $('.comment-form-footer').removeClass('expand'); }

    }
    , client = new GitHubSelfies(config);

  client.setupSelfieStream();

  // if the user submits a comment, we need to add everything to the next one
  // var trySetupAgain = function() {
  //   if (client.setupComplete && $('#totallyAwesomeSelfieButton').length === 0) {
  //     client.setupSelfieStream();
  //   }
  // };
  // setInterval(trySetupAgain, 500);

  // github hides instead of deleting dom elements when you submit
  // var cleanup = function() {
  //   $('#totallyAwesomeSelfieButton').remove();
  //   $('#selfieVideo').remove();
  //   $('#selfieCanvas').remove();
  // };

  // $('[name="comment_and_open"]').on('click', cleanup);
  // $('[name="comment_and_close"]').on('click', cleanup);
})();
