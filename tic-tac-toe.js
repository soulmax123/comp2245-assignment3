
document.addEventListener('DOMContentLoaded', function () {
  const board = document.getElementById('board');
  if (!board) return;

  const squares = Array.from(board.querySelectorAll('div'));

  
  squares.forEach((sq) => {
    sq.classList.add('square'); 
    sq.setAttribute('tabindex', '0'); 
    
  
  });

  


});