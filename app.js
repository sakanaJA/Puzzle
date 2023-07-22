// Create the initial state of the puzzle
let puzzle = [1, 2, 3, 4, 5, 6, 7, 8, null];
// Shuffle the puzzle
puzzle = puzzle.sort(() => Math.random() - 0.5);

// Draw the puzzle
const container = document.querySelector('#puzzle-container');

puzzle.forEach((number, index) => {
  const block = document.createElement('div');
  block.className = 'puzzle-block';
  block.dataset.index = index;
  if (number !== null) {
    block.textContent = number;
    block.addEventListener('click', swapBlocks);
  }
  container.appendChild(block);
});

// Swap blocks
function swapBlocks(event) {
  const clickedBlockIndex = parseInt(event.target.dataset.index);
  const emptyBlockIndex = puzzle.indexOf(null);

  // Check if the clicked block is next to the empty block
  if (
    [clickedBlockIndex - 1, clickedBlockIndex + 1, clickedBlockIndex - 3, clickedBlockIndex + 3].includes(emptyBlockIndex)
  ) {
    // Swap the clicked block and the empty block
    [puzzle[clickedBlockIndex], puzzle[emptyBlockIndex]] = [puzzle[emptyBlockIndex], puzzle[clickedBlockIndex]];

    // Redraw the puzzle
    container.innerHTML = '';
    puzzle.forEach((number, index) => {
      const block = document.createElement('div');
      block.className = 'puzzle-block';
      block.dataset.index = index;
      if (number !== null) {
        block.textContent = number;
        block.addEventListener('click', swapBlocks);
      }
      container.appendChild(block);
    });
  }
}
