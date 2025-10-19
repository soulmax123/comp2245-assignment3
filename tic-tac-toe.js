
document.addEventListener('DOMContentLoaded', function () {
  const board = document.getElementById('board');
  if (!board) return;

  const squares = Array.from(board.querySelectorAll('div'));

  
  squares.forEach((sq) => {
    sq.classList.add('square'); 
    sq.setAttribute('tabindex', '0'); 
    
  
  });
let xIsNext = true;

  function handleMove(square) {
    if (!square || square.textContent.trim() !== '') return;
    const mark = xIsNext ? 'X' : 'O';
    square.textContent = mark;
    square.classList.add(mark);
    xIsNext = !xIsNext;
    updateStatus();
  }
  squares.forEach((sq) => {
    sq.addEventListener('click', function () {
      handleMove(this);
    });  

})
});