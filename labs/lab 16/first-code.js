setup = function() {
  t=0;
  jQuery("#outteroverout").mouseover(function(){
    jQuery("#outerTextoverout").text("mouse over");
    t=t+1;
    jQuery("#outerCounterOver").text(t+"overs");

  });
  j=0;
  jQuery("#inneroverout").mouseover(function(){
    jQuery("#innerTextoverout").text("mouse over");
    j=j+1;
    jQuery("#innerCounterOver").text(j+"overs");

  });
  h=0;
  jQuery("#outteroverout").mouseout(function(){
    jQuery("#outerTextoverout").text("mouse out");
    h=h+1;
    jQuery("#outerCounterOut").text(h+"out");

  });
  f=0;
  jQuery("#inneroverout").mouseout(function(){
    jQuery("#innerTextoverout").text("mouse out");
    f=f+1;
    jQuery("#innerCounterOut").text(f+"out");

  });
  i=0;
  jQuery("#outerenterleave").mouseenter(function(){
    jQuery("#outerTextenterleave").text("mouse enter");
    i=i+1;
    jQuery("#outerCounterEnter").text(i+"enters");

  });
  z=0;
  jQuery("#innerenterleave").mouseenter(function(){
    jQuery("#innerTextenterleave").text("mouse enter");
    z=z+1;
    jQuery("#innerCounterEnter").text(z+"enters");

  });
  d=0;
  jQuery("#outerenterleave").mouseleave(function(){
    jQuery("#outerTextenterleave").text("mouse leave");
    d=d+1;
    jQuery("#outerCounterLeave").text(d+"leaves");

  });
  c=0;
  jQuery("#innerenterleave").mouseleave(function(){
    jQuery("#innerTextenterleave").text("mouse leave");
    c=c+1;
    jQuery("#innerCounterLeave").text(c+"leaves");

  });
};
jQuery(document).ready(setup)
