


//   const carousel = document.querySelector('.carousel')
//   const firstImg = carousel.querySelectorAll('img')[0]


//   const arrows = document.querySelectorAll('.arrow')



 
// let isDragStart = false
// let prevPagex ;
// let  prevScrollLeft;

// let firstImgWidth = firstImg.clientWidth + 32

//  arrows.forEach(arrow => {
//   arrow.addEventListener('click',function(){
//     carousel.scrollLeft += arrow.id == 'left' ? -firstImgWidth : firstImgWidth
//   })
//  })

// const dragStart =(e)=>{
//   isDragStart = true
//   prevPagex = e.pageX
  
 
//   prevScrollLeft = carousel.scrollLeft
  
  
// }

//  const dragging = (e)=>{
//   e.preventDefault()
//   if(!isDragStart) return
//   carousel.classList.add('dragging')
//   let positionDiff = e.pageX - prevPagex
//   carousel.scrollLeft = prevScrollLeft -positionDiff

//  }
//  const dragStop = () => {
//   isDragStart = false
//   carousel.classList.remove('dragging')
// }

//  carousel.addEventListener('mousemove',dragging)
//   carousel.addEventListener('mousedown',dragStart)
//   carousel.addEventListener('mouseup',dragStop)

