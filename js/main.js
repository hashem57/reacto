import { hover } from "@testing-library/user-event/dist/hover";

    document
      .querySelector(".dropdown")
      .addEventListener("mouseenter", function () {
        var animator = document.querySelector(".dropdown-menu");
        animator.setAttribute(
          "animate__animated animate__fadeInDownBig"
        );
      });
    // Swal.fire({
        //     template: "#my-template",
        // });
        //     document.querySelector('#myArticle').innerHTML = "Hashem";






