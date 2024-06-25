function send_advise() {
    var input = document.getElementById("advise_input");

    var params = {
        name: "marameo",
        email: "nicolodentale@gmail.com",
        subject: "miao",
        message: input.value,
      };

    emailjs.send('service_uv3x29g', 'template_gbug8uh', params)
        .then(res=>{
            input.value = ""
            console.log(res);
            alert("Your message sent successfully!!")
        })
        .catch(err=>console.log(err));
    input.value = ""
}

function go_to_homepage() {
    window.location.href = "/";
}