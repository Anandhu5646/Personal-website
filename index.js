function sendMail(){
  var params = {
      name:document.getElementById("name").value,
      email:document.getElementById("email").value,
      message:document.getElementById("message").value,
  }
const serviceID="service_ii1pboq";
const templateID="template_dik0tab";

emailjs.send(serviceID,templateID,params)
.then(
  res=>{
      console.log(res);
      alert("your message sent successfully.")
  }
)
.catch((err)=> console.log(err));
}