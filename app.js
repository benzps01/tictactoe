const c1 = document.getElementById('cell1')
const c2 = document.getElementById('cell2')
const c3 = document.getElementById('cell3')
const c4 = document.getElementById('cell4')
const c5 = document.getElementById('cell5')
const c6 = document.getElementById('cell6')
const c7 = document.getElementById('cell7')
const c8 = document.getElementById('cell8')
const c9 = document.getElementById('cell9')

const res = document.getElementById('result')
const xScore = document.getElementById('xScore')
const oScore = document.getElementById('oScore')

var xS = 0
var oS = 0

const p1Choice = 'X'
const p2Choice = 'O'
var turn = 'p1'
var gameState = 'active'

//Array constructor for building nested or 2D array
const board = [...Array(3)].map(x => Array(3).fill(''))

function printBoard(board){
    c1.textContent = board[0][0]
    c2.textContent = board[0][1]
    c3.textContent = board[0][2]
    c4.textContent = board[1][0]
    c5.textContent = board[1][1]
    c6.textContent = board[1][2]
    c7.textContent = board[2][0]
    c8.textContent = board[2][1]
    c9.textContent = board[2][2]
}

function emptySpace(board){
    for(i=0;i<board.length;i++){
        for(j=0;j<board[0].length;j++){
            if(board[i][j] == ''){
                return false
            }
        }
    }
    return true
}

function selectPosition(row,column){
    if (!(board[row][column]=='')){
        res.textContent = 'Space is already filled'
    }
    else{
        res.textContent = 'Result'
        startGame(row,column)
    }
}

function winnerCheck(board,choice){
    for(i=0;i<board.length;i++){
        if((board[i][0] == choice) && (board[i][1] == choice) && (board[i][2] == choice)){
            console.log(board[i][0],board[i][1],board[i][2])
            console.log('1st if has been executed')
            return true
        }
        else if((board[0][i] == choice) && (board[1][i] == choice) && (board[2][i] == choice)){
            console.log('2nd if has been executed')
            return true
        }
        else if((board[0][0] == choice) && (board[1][1] == choice) && (board[2][2] == choice)){
            console.log('3rd if has been executed')
            return true
        }
        else if((board[0][2] == choice) && (board[1][1] == choice) && (board[2][0] == choice)){
            console.log('4th if has been executed')
            return true
        }
        console.log('Winner check has run')
    }
    return false
}

function assignChoice(board,row,column,choice){
    board[row][column] = choice
    console.log('assign Choice has run',board)
}

function startGame(row,column){
    if(!(gameState == 'inactive')){
        if(turn == 'p1'){
            assignChoice(board,row,column,p1Choice)
            printBoard(board)
            if (winnerCheck(board,p1Choice)){
                res.textContent = `Player ${p1Choice} won`
                xS += 1
                xScore.textContent = xS
                gameState = 'inactive'
                return
            }
            else{
                if (emptySpace(board)){
                    printBoard(board)
                    res.textContent = 'Its a Tie'
                }
                else{
                    turn = 'p2'
                }
            }
        }
        else{
            assignChoice(board,row,column,p2Choice)
            printBoard(board)
            if (winnerCheck(board,p2Choice)){
                res.textContent = `Player ${p2Choice} won`
                oS += 1
                oScore.textContent = oS
                gameState = 'inactive'
                return
            }
            else{
                if (emptySpace(board)){
                    printBoard(board)
                    res.textContent = 'Its a Tie'
                }
                else{
                    turn = 'p1'
                }
            }
        }
    }
}

function resetBoard(){
    for(i=0;i<board.length;i++){
        for(j=0;j<board.length;j++){
            board[i][j] = ''
        }
    }
    turn = 'p1'
    gameState = 'active'
    res.textContent = 'Result'
    printBoard(board)
}

function resetScore(){
    resetBoard()
    xS = 0
    oS = 0
    xScore.textContent = xS
    oScore.textContent = oS
}