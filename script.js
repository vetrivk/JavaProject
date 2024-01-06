const data = [
  {
    id: 1,
    names: "Vetri.Coder",
    role: "webDeveloper",
    img: (scr = "/JavaProject/image/1 jpg.jpg"),
    text: "I am Vetri and I come from Madurai City. I finished my Bsc Conputer Science Degree 2018.Lately I have been getting into IT, especfically learning not developer program. ",
  },
  {
    id: 1,
    names: "Prakash",
    role: "Builder",
    img: (scr = "/JavaProject/image/4 jpg.jpg"),
    text: "I am Prakash and I come from Madurai City. I finished my Bsc Conputer Science Degree 2018.Lately I have been getting into IT, especfically learning not developer program. ",
  },
  {
    id: 1,
    names: "Aravind",
    role: "Tester",
    img: (src = "/JavaProject/image/2 jpg.jpg"),
    text: "I am Aravind and I come from Madurai City. I finished my Bsc Conputer Science Degree 2018.Lately I have been getting into IT, especfically learning not developer program. ",
  },
];

const img = document.querySelector(" #pic");
const names = document.querySelector(" #names");
const role = document.querySelector(" #role");
const text = document.querySelector(" #text");
const btnnext = document.querySelector(" #btn-next");
const btnprev = document.querySelector(" #btn-prev");
let index = 0;

window.addEventListener("DOMContentLoaded", function () {
  const testimonial = data[0];
  console.log(testimonial);
});

function loadTestimonial(data) {
  img.src = data.img;
  names.textContent = data.names;
  role.textContent = data.role;
  text.innerHTML = `<i class="fa-solid fa-quote-left"></i> ${data.text}
    <iclass="fa-solid fa-quote-right"></i>`;
}
