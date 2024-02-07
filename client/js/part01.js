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

const navigation = getNode(".navigation");
// const list = getNodes(".navigation li"); // li를 잡는법
const visualImage = getNode(".visual img");

function handleSlide(e) {
  e.preventDefault();
  const target = e.target.closest("li");
  const list = [...navigation.children];
  const a = e.target.closest("a");
  if (!target | !a) return;
  const index = target.dataset.index;

  // 모든 li들에게 is-active class remove
  //forEach
  list.forEach((li) => removeClass(li, "is-active"));
  // console.log(a.href);
  visualImage.setAttribute("src", a.href);
  // visualImage.src = a.href
  attr(visualImage, "src", `./assets/part01/${data[index - 1].src}`);
  //a가 없을때 이미지를 찾는방법

  attr(visualImage, "alt", data[index - 1].alt);

  //li를 클릭할때마다 visual의 Image를 교체
  // target ims.src

  //1. 선택한 li의 n번째를 찾아서 data 배열의 n번째에 접근
  //2. img.alt = ???
  // console.log(data[index - 1].src);

  addClass(target, "is-active");
  // li 만 수집 (closest)
}

navigation.addEventListener("click", handleSlide);
