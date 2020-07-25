add = function() {
  result = parseInt(jQuery('#operand_1').val()) + parseInt(jQuery('#operand_2').val());

  text = jQuery('#operand_1').val() + "+" +jQuery('#operand_2').val() + "=";
  result= text + result;
  jQuery('#result').html( result);
  result = "<span id='addStyle'>" + result + "</span>";
  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + result + '<br>';

  jQuery('#history').html( new_div_content);
}
divi = function() {
  result = parseInt(jQuery('#operand_1').val()) / parseInt(jQuery('#operand_2').val());
  text = jQuery('#operand_1').val() + "/" +jQuery('#operand_2').val() + "=";
  result= text + result;
  jQuery('#result').html( result);
  result = "<span id='divStyle'>" + result + "</span>";
  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + result + '<br>';

  jQuery('#history').html( new_div_content);


}
mult = function() {
  result = parseInt(jQuery('#operand_1').val()) * parseInt(jQuery('#operand_2').val());
  text = jQuery('#operand_1').val() + "*" +jQuery('#operand_2').val() + "=";
  result= text + result;
  jQuery('#result').html( result);
  result = "<span id='multStyle'>" + result + "</span>";
  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + result + '<br>';

  jQuery('#history').html( new_div_content);

}
sub = function() {
  result = parseInt(jQuery('#operand_1').val()) - parseInt(jQuery('#operand_2').val());
  text = jQuery('#operand_1').val() + "-" +jQuery('#operand_2').val() + "=";
  result= text + result;
  jQuery('#result').html( result);
  result = "<span id='subStyle'>" + result + "</span>";
  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + result + '<br>';

  jQuery('#history').html( new_div_content);
}
show = function() {
  jQuery('#history').show();
}
hide = function() {
  //jQuery('#history').hide() similar
  jQuery('#history').attr('style', 'display : none');
}
setup = function() {
  jQuery('#add_button').click(add);
  jQuery('#sub_button').click(sub);
  jQuery('#mult_button').click(mult);
  jQuery('#divi_button').click(divi);
  jQuery('#show_button').click(show);
  jQuery('#hide_button').click(hide);
}
jQuery(document).ready(setup)
