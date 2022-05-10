function validSolution(board) {
  let hresult = checkHorizontal(board);

  if (hresult == false) return false;
  else {
    let vBoard = buildVerticalArray(board);
    let vresult = checkHorizontal(vBoard);

    if (vresult == false) return false;
    else {
      let regions = getRegions(board);

      let rresult = checkHorizontal(regions);

      if (rresult == false) return false;
      else {
        return true;
      }
    }
  }
}

function getOccurrence(array, value) {
  return array.filter((v) => v === value).length;
}

function checkHorizontal(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (
        getOccurrence(board[i], board[j][i]) != 1 ||
        getOccurrence([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], board[j][i]) < 1
      ) {
        return false;
      }
    }
  }
  return true;
}

function buildVerticalArray(board) {
  let vArray = [];
  let vBoard = [];
  let l = 0;

  for (let k = 0; k < 9; k++) {
    for (let l = 0; l < 9; l++) {
      vArray.push(board[l][k]);
      if (l == 8) {
        vBoard.push(vArray);
        vArray = [];
      }
    }
  }
  return vBoard;
}

function getRegions(board) {
  let regionArray = [];

  [1, 2, 3].forEach(function (k) {
    for (let i = 0; i < 7; i += 3) {
      var regionLine1 = board[i].splice(0, 3);
      var regionLine2 = board[i + 1].splice(0, 3);
      var regionLine3 = board[i + 2].splice(0, 3);
      var region = regionLine1.concat(regionLine2, regionLine3);
      regionArray.push(region);
    }
  });
  return regionArray;
}
