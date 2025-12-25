// Toggle navigation menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');

  // Change icon between ⋮ and ✖
  if (navMenu.classList.contains('show')) {
    menuToggle.innerHTML = '&times;'; // X icon
  } else {
    menuToggle.innerHTML = '&#8942;'; // 3 dots
  }
});
function fnOnClick(){
  debugger;
  alert("Hi");
}

const logoUpload = document.getElementById('logoUpload');
const extraLogos = document.getElementById('extra-logos');
logoUpload.addEventListener('change', function(event) {
   console.log("Upload triggered!"); // check console
    const file = event.target.files[0]; // rest of your code...
    });
// logoUpload.addEventListener('change', function(event) {
//   debugger;
//   const file = event.target.files[0];
//   if (file && file.type === "image/jpeg") 
//     {
//     const reader = new FileReader();
//     debugger;
//     reader.onload = function(e) {
//       // Create a new image element
//       const newLogo = document.createElement('img');
//       newLogo.src = e.target.result;
//       newLogo.alt = "Uploaded Logo";
//       newLogo.classList.add('logo-icon'); // reuse your logo styling

//       // Append it to the container
//       extraLogos.appendChild(newLogo);
//     };
//     reader.readAsDataURL(file);
//   } else
//      {
//     alert("Please upload a PNG image.");
//   }
// });
