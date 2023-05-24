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

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
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

// document click animation effect 

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})