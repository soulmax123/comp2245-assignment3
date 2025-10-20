
document.addEventListener('DOMContentLoaded', function () {
  const board = document.getElementById('board');
  if (!board) return;

  const squares = Array.from(board.querySelectorAll('div'));
  const status = document.getElementById('status');
  
  const WIN_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  
];
  
    squares.forEach((sq) => {
    sq.classList.add('square'); 
    sq.setAttribute('tabindex', '0'); 
    
  
  });
let xIsNext = true;
let gameOver = false;
function checkWinner() {
    for (const combo of WIN_COMBOS) {
      const [a, b, c] = combo;
      const valA = squares[a].textContent.trim();
      if (valA !== '' && valA === squares[b].textContent.trim() && valA === squares[c].textContent.trim()) {
        return valA;
      }
    }
    return null;
  }

  function isBoardFull() {
    return squares.every((s) => s.textContent.trim() !== '');
  }

  function updateStatus() {
    if (!status) return;
    if (gameOver) return; 


    status.textContent = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }
  function handleMove(square) {
    if (gameOver) return;
    if (!square || square.textContent.trim() !== '') return;
    
    const mark = xIsNext ? 'X' : 'O';
    square.textContent = mark;
    square.classList.add(mark);

    const winner = checkWinner();
    if (winner) {
      gameOver = true;
      if (status) {
        status.textContent = `Congratulations! ${winner} is the Winner!`;
        status.classList.add('you-won');
      }
      return;
    }

    if (isBoardFull()) {
      gameOver = true;
      if (status) status.textContent = `It's a tie!`;
      return;
    }


    xIsNext = !xIsNext;
    updateStatus();
  }
  squares.forEach((sq) => {
    sq.addEventListener('click', function () {
      handleMove(this);
    });  

        sq.addEventListener('mouseenter', () => sq.classList.add('hover'));
    sq.addEventListener('mouseleave', () => sq.classList.remove('hover'));
   
})
});