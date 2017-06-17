var target_index;
var guesses = 1;
var colors = ["gold", "violet", "crimson", "teal", "beige", "aqua", "olive", "yellow", "silver", "orange", "coral", "lime"];
var colors = colors.sort();
var colors_message = colors.join(", ");
var guess_input_text = "none";
var guess_input;
var finished = false;

function do_game() {
  var random_number = Math.random() * (colors.length - 1);
  var random_number_integer = Math.floor(random_number);
  target_index = random_number_integer;
  var answer = String(colors[random_number_integer]);
  //Alert correct answer for testing purposes
  alert("The correct answer is: " + answer);
  
  while (!finished) {
    guess_input_text = prompt("I am thinking of one of these colors:\n\n" +
colors_message + "\n\n What color am I thinking of?").toLowerCase();
    guess_input = colors.indexOf(guess_input_text);
    finished = check_guess();
  }
  
  function check_guess() {
    if (guess_input == -1) {
      alert("Sorry, I don't recognize your color. \n\n Please try again.");
      return false;
    }
    if (guess_input > target_index) {
      alert("Sorry, your guess is not correct! \n\n Hint: Your color is alphabetically higher than mine.\n\n Please try again.");
      guesses += 1;
      return false;
    }
    if (guess_input < target_index) {
      alert("Sorry, your guess is not correct!\n\n Hint: Your color is alphabetically lower than mine.\n\n Please try again.");
      guesses += 1;
      return false;
    }
    document.getElementsByTagName("body").setAttribute("bgcolor", "beige");
    alert("Congratulations! You have guessed the color!\n\n It took you " + + " guesses to finish the game!\n\n You can see the color in the background.")
    return true;
  }
}