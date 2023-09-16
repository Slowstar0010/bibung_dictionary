const menu_imgs = document.querySelectorAll(".Module_imgs img")

for (const menu_img of menu_imgs) {
    menu_img.addEventListener('click', function(event) {
      console.log(event)
    })
  }