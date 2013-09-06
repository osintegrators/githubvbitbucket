$(function(){
  var ex1 = $('#cost-compare');
  var costSelects = $('#repos, #contributors');
  var gitCost = $('#git-cost');
  var bitCost = $('#bit-cost');
  var winOverlay = $('#winner');

  costSelects.on('change', updateCost);

  function updateCost(){
    var gitVal = parseInt($('#repos').val());
    var bitVal = parseInt($('#contributors').val());

    winOverlay.removeClass('git-win bit-win tie')
    gitCost.text(gitVal);
    bitCost.text(bitVal);

    if(gitVal == bitVal){
      //tie
      winOverlay.addClass('tie');
    }
    else if(gitVal < bitVal){
      //git better
      winOverlay.addClass('git-win');
    }
    else {
      //bit better
      winOverlay.addClass('bit-win');
    }
  }

  updateCost();

});
