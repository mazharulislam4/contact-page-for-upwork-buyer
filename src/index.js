const buttonWrapper = document.querySelector(
  ".contact-form-details .submit-button-wrapper "
);

const btnIcon = document.querySelector(".submit-button-wrapper .btn-icon");

buttonWrapper.addEventListener("mouseover", function () {
  btnIcon.classList.add("show-ani");
});

buttonWrapper.addEventListener("mouseleave", function () {
  btnIcon.classList.remove("show-ani");
});


const businessHoure = document.querySelectorAll(".business-hours li");

businessHoure.forEach((ele) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date().getDay();
  if (day > 5 || day ===0  && daysOfWeek[day] === ele.children[0].innerText) {
    ele.classList.add("offDay");
  }
  if (day > 0 && day <= 5 && daysOfWeek[day] === ele.children[0].innerText) {
    ele.classList.add("today");
  }
});

