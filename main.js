function main(){
    $('#butt').on('click',function(){
      var x = $('.help').val();
      if(x==='Hello'){
          alert("Hello");
      }
    })
}
$(document).ready(main);