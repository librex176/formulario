function sendMail(){
    let params = {
       name : document.getElementById("name").value, 
       email : document.getElementById("email").value, 
       texto : document.getElementById("texto").value, 
    }
    emailjs.send("service_f6oqsli", "template_ofs91u5",params).then(alert("si"));
}