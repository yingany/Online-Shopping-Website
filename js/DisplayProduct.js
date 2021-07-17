function sendEmail() {
var otp=generateOTP();
var id=prompt("Enter mail id to send OTP")
if(id!=null){
	Email.send({
	Host : "smtp.gmail.com",
	Username : "<sender’s mail id>",
	Password : "<sender’s mail app password>",
	To : id,
	From : "<sender’s mail id>",
	Subject : "DobbyLaal",
	Body : "Thanks for ordering. To confirm please enter this otp: "+otp
	}).then(
	message =>{if(otp==prompt('Enter the OTP send to your mail')){
	alert('Your order has been placed. Thank you for Ordering :).')}}
	);}
}
function generateOTP() {
	// Declare a digits variable
	// which stores all digits
	var digits = '0123456789';
	let OTP = '';
	for (let i = 0; i < 4; i++ ) {
		OTP += digits[Math.floor(Math.random() * 10)];
	}
	return OTP;
}