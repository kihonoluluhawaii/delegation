const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];

// $(".navigation").on("click", "li", function () {
//   const index = $(this).attr("data-index");

//   // $(".visual img").attr("src", `./assets/part01/${data[index - 1].src}`);
//   // $(".visual img").attr("alt", data[index - 1].alt);

//   $(".visual img").attr({
//     src: `./assets/part01/${data[index - 1].src}`,
//     alt: data[index - 1].alt,
//   });
//   $(".navigation > li").removeClass("is-active");
//   $(this).addClass("is-active");
//   return false;
// });

//jQuery

$(".navigation > li").on("click", function (e) {
  e.preventDefault();

  const index = $(this).index();

  $(".navigation > li").removeClass("is-active");
  $(this).addClass("is-active");

  $(".visual img").attr({
    src: `./assets/part01/${data[index].src}`,
    alt: data[index].alt,
  });
});

// vanilajs
// const list = document.querySelectorAll(".navigation > li");

// list.forEach((li, index) => {
//   li.addEventListener("click", () => {
//     console.log(index);
//   });
// });
