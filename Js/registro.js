function someFunction() {
setTimeout(function () {
$('#feedback-step').nextStep();
}, 2000);
}

$(document).ready(function () {
$('.stepper').mdbStepper();
})