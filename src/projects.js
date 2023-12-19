'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event)=> {
    const filter = event.target.dataset.category;
    // 사각형사이의 빈공간을 콘솔창찍어보면 null이 나오는데
    // 그걸 없애주기위함. return의 의미는 종료
     if(filter == null) {
        return;
   }

   handleActiveSelection(event.target);
   filterProjects(filter);
});

// 함수이름은 동사로 시작하기
function handleActiveSelection(target){
      const active = document.querySelector('.category--selected');
      // classList는 그자체로 클래스라는 의미를 내포하고
      //  있기때문에 '.category'가 아니라 쩜을 생략해야함
      active.classList.remove('category--selected');
      target.classList.add('category--selected');
}

// 함수이름은 동사로 시작하기
function filterProjects(filter) {
   projects.forEach((project) => {
    console.log(project.dataset.type);
    if(filter === 'all' || filter === project.dataset.type){
        project.style.display = 'block';
    } else {
        project.style.display = 'none';
    }
   });
    projectsContainer.classList.add('anim-out');
   setTimeout(()=>{
    projectsContainer.classList.remove('anim-out');
   }, 250);
}