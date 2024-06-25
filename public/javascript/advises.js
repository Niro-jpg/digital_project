function send_advise() {
    var input = document.getElementById("advise_input_text");

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

function go_to_faq() {
    window.location.href = "/faq";
}

function go_to_info() {
    window.location.href = "/info";
}
