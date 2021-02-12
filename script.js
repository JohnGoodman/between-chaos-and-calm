function trackBrowserSize(){
  window_height = window.innerHeight;

  panel_2_scroll_position = window_height;
  panel_3_scroll_position = window_height * 2;
  panel_4_scroll_position = window_height * 3;
  panel_5_scroll_position = window_height * 4;
  panel_6_scroll_position = window_height * 5;
  panel_7_scroll_position = window_height * 6;
}

function trackCurrentPanel(){
  current_y_scroll_position = window.pageYOffset;

  if (current_y_scroll_position < window_height) {
    current_panel = 1;
  } else if (current_y_scroll_position >= window_height && current_y_scroll_position < (window_height * 2)){
    current_panel = 2;
  } else if (current_y_scroll_position >= (window_height * 2) && current_y_scroll_position < (window_height * 3)){
    current_panel = 3;
  }else if (current_y_scroll_position >= (window_height * 3) && current_y_scroll_position < (window_height * 4)){
    current_panel = 4;
  }else if (current_y_scroll_position >= (window_height * 4) && current_y_scroll_position < (window_height * 5)){
    current_panel = 5;
  }else if (current_y_scroll_position >= (window_height * 5) && current_y_scroll_position < (window_height * 6)){
    current_panel = 6;
  }else if (current_y_scroll_position >= (window_height * 6) && current_y_scroll_position < (window_height * 7)){
    current_panel = 7;
  }else if (current_y_scroll_position >= (window_height * 7) && current_y_scroll_position < (window_height * 8)){
    current_panel = 8;
  };

  return current_panel;
}

function previousPanel(){
  previous_panel = current_panel - 1;
  if ( previous_panel < 1 ) { previous_panel = 1 };

  panel_variable = 'panel_' + previous_panel + '_scroll_position';
  document.documentElement.scrollTop = eval(panel_variable);
}

function nextPanel(){
  next_panel = current_panel + 1;
  if ( next_panel > 7 ) { next_panel = 7 };

  panel_variable = 'panel_' + next_panel + '_scroll_position';
  document.documentElement.scrollTop = eval(panel_variable);
}

// Gobal variables
var window_height = window.innerHeight;
var current_panel = 1;

var panel_1_scroll_position = 0;
var panel_2_scroll_position = window_height;
var panel_3_scroll_position = window_height * 2;
var panel_4_scroll_position = window_height * 3;
var panel_5_scroll_position = window_height * 4;
var panel_6_scroll_position = window_height * 5;
var panel_7_scroll_position = window_height * 6;

window.onscroll = function() {trackCurrentPanel()};
window.onresize = function() {trackBrowserSize()};



