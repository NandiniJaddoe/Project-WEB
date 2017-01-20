// Een deel van de code van http://codepen.io/SaschaSigl/pen/woGYKJ
(function() {

  /*Variabelen voor de shuffler*/
  $(document).ready(function() {
    var text = document.getElementById('text');
    var text1 = document.getElementById('text1');
    var text2 = document.getElementById('text2');

    var Text = new WordShuffler(text,{
      textColor : '#000',
      timeOffset : 1,
    });

    var Text2 = new WordShuffler(text1,{
      textColor : '#000',
      timeOffset : 1,
    });

    var Text3 = new WordShuffler(text2,{
      textColor : '#000',
      timeOffset : 1,
    });
  });

})();
