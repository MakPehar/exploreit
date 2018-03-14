function main(){
    $('#butt').on('click',function(){
      var x = $('.help').val();
      if(x==='Maxwell'){
          window.location.replace('indextwo.html');
      }
    })
}
$(document).ready(main);