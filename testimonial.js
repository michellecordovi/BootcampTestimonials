let tanyaTestimonial = document.querySelector(".tanya-block");
let johnTestimonial = document.querySelector(".john-block");

let arrow = document.getElementsByClassName("arrow");


function changeTestimonial() {
      if (johnTestimonial.style.display === "none") {
            tanyaTestimonial.style.display = "none";
            johnTestimonial.style.display = "grid";
      } else {
            tanyaTestimonial.style.display = "grid";
            johnTestimonial.style.display = "none";
      };
}

for (let i = 0; i < arrow.length; i++) {
      arrow[i].onclick = changeTestimonial;
  }