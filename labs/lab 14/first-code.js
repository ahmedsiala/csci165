add = function() {
  result = parseInt(jQuery('#operand_1').html()) + parseInt(jQuery('#operand_2').html());
  jQuery('#result').html(result);
}
divi = function() {
  result = parseInt(jQuery('#operand_1').html()) / parseInt(jQuery('#operand_2').html());
  jQuery('#result').html(result);
}
mult = function() {
  result = parseInt(jQuery('#operand_1').html()) * parseInt(jQuery('#operand_2').html());
  jQuery('#result').html(result);
}
sub = function() {
  result = parseInt(jQuery('#operand_1').html()) - parseInt(jQuery('#operand_2').html());
  jQuery('#result').html(result);
}
setup = function() {
  jQuery('#add_button').click(add);
  jQuery('#sub_button').click(sub);
  jQuery('#mult_button').click(mult);
  jQuery('#divi_button').click(divi);
}
jQuery(document).ready(setup)
