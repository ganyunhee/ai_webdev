var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var board = [];
var row = 0;
var col = 0;
// FUNCTION. initialize 30x30 board with '-'
function init() {
    // traverse rows
    for (var i = 0; i < 30; i++) {
        var row_1 = [];
        // traverse columns
        for (var j = 0; j < 30; j++) {
            row_1.push('-');
        }
        board.push(row_1);
    }
}
// FUNCTION. print out board contents
function output() {
    console.log("\n");
    for (var _i = 0, board_1 = board; _i < board_1.length; _i++) {
        var row_2 = board_1[_i];
        console.log(row_2.join(' '));
    }
}
// FUNCTION. update the board
// -- based on player input
function update(row, col, player) {
    if (board[row][col] === '-') {
        board[row][col] = player === 1 ? 'B' : 'W';
        return true;
    }
    return false;
}
// FUNCTION. get user input (continuous)
function getPlayerInput(player) {
    return __awaiter(this, void 0, void 0, function () {
        var rl;
        return __generator(this, function (_a) {
            rl = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
            // read and return user input
            return [2 /*return*/, new Promise(function (resolve) {
                    rl.question("Player ".concat(player, "'s turn (row col): "), function (response) {
                        rl.close();
                        resolve(response);
                    });
                })];
        });
    });
}
// FUNCTION. Check if player wins
// -- win condition logic :
// -- check if any row, column, diagonal has five matching symbols
function checkWinCondition() {
    // check rows
    for (var i = 0; i < 30; i++) {
        var countB = 0;
        var countW = 0;
        for (var j = 0; j < 30; j++) {
            if (board[i][j] === 'B') {
                countB++;
                countW = 0;
            }
            else if (board[i][j] === 'W') {
                countW++;
                countB = 0;
            }
            else {
                countB = 0;
                countW = 0;
            }
            if (countB === 5 || countW === 5) {
                return true;
            }
        }
    }
    // check columns
    for (var j = 0; j < 30; j++) {
        var countB = 0;
        var countW = 0;
        for (var i = 0; i < 30; i++) {
            if (board[i][j] === 'B') {
                countB++;
                countW = 0;
            }
            else if (board[i][j] === 'W') {
                countW++;
                countB = 0;
            }
            else {
                countB = 0;
                countW = 0;
            }
            if (countB === 5 || countW === 5) {
                return true;
            }
        }
    }
    // check diagonals
    for (var i = 0; i < 30; i++) {
        for (var j = 0; j < 30; j++) {
            // check diagonals
            // start from (i, j) going right and down
            var countB = 0;
            var countW = 0;
            for (var k = 0; k < 5; k++) {
                if (i + k < 30 && j + k < 30) {
                    if (board[i + k][j + k] === 'B') {
                        countB++;
                        countW = 0;
                    }
                    else if (board[i + k][j + k] === 'W') {
                        countW++;
                        countB = 0;
                    }
                    else {
                        countB = 0;
                        countW = 0;
                    }
                    if (countB === 5 || countW === 5) {
                        return true;
                    }
                }
            }
            // Check diagonals starting from position (i, j) going right and up
            countB = 0;
            countW = 0;
            for (var k = 0; k < 5; k++) {
                if (i - k >= 0 && j + k < 30) {
                    if (board[i - k][j + k] === 'B') {
                        countB++;
                        countW = 0;
                    }
                    else if (board[i - k][j + k] === 'W') {
                        countW++;
                        countB = 0;
                    }
                    else {
                        countB = 0;
                        countW = 0;
                    }
                    if (countB === 5 || countW === 5) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
// FUNCTION. play
// -- continuosly prompt to get user input and check for winner
function playGame() {
    return __awaiter(this, void 0, void 0, function () {
        function checkAndSetGameWon() {
            if (checkWinCondition()) {
                isGameWon = true;
            }
        }
        function handleTimeout() {
            isTimeout = true;
            output();
            console.log("DRAW. Five minutes have passed. No player has won.");
            return;
        }
        var currentPlayer, isGameWon, isTimeout, timeout, input, _a, row_3, col_1, validMove;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    // initialize
                    init();
                    currentPlayer = 1;
                    isGameWon = false;
                    isTimeout = false;
                    timeout = setTimeout(handleTimeout, 5 * 60 * 1000);
                    _b.label = 1;
                case 1:
                    if (!(!isGameWon && !isTimeout)) return [3 /*break*/, 3];
                    // print board
                    output();
                    return [4 /*yield*/, getPlayerInput(currentPlayer)];
                case 2:
                    input = _b.sent();
                    _a = input.split(' ').map(function (coord) { return parseInt(coord); }), row_3 = _a[0], col_1 = _a[1];
                    // check for valid moves
                    if (row_3 >= 0 && row_3 < 30 && col_1 >= 0 && col_1 < 30) {
                        validMove = update(row_3, col_1, currentPlayer);
                        if (validMove) {
                            currentPlayer = currentPlayer === 1 ? 2 : 1;
                            checkAndSetGameWon(); // check if player makes a winning move
                        }
                        else {
                            console.log('Invalid move. Try again.');
                        }
                    }
                    else {
                        console.log('Invalid input. Try again.');
                    }
                    return [3 /*break*/, 1];
                case 3:
                    // cancel timeout at end of game
                    clearTimeout(timeout);
                    // end game
                    output();
                    console.log("GAME OVER. Player ".concat(currentPlayer === 1 ? '1' : '2', " wins!"));
                    return [2 /*return*/];
            }
        });
    });
}
// run game
// -- if error persists, print error
playGame().catch(function (error) { return console.error(error); });
