// Easter Egg 🥚

'use client'

import { useState, useEffect, useCallback } from 'react'
import NavigationBar from '../features/navbar/navigation'

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isPlayerTurn, setIsPlayerTurn] = useState(true)
  const [gameOver, setGameOver] = useState(false)

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [ 
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const robotMove = useCallback((currentBoard: (string | null)[]) => {
    const emptySquares = currentBoard.reduce((acc: number[], curr, index) => {
      if (curr === null) acc.push(index)
      return acc
    }, [])
    if (emptySquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length)
      const newBoard = [...currentBoard]
      newBoard[emptySquares[randomIndex]] = 'O'
      return newBoard
    }
    return currentBoard
  }, [])

  const checkGameState = useCallback((currentBoard: (string | null)[]) => {
    const winner = calculateWinner(currentBoard)
    if (winner || currentBoard.every(square => square !== null)) {
      setGameOver(true)
    }
  }, [])

  const handleClick = (i: number) => {
    if (!isPlayerTurn || gameOver || board[i]) {
      return
    }
    const newBoard = [...board]
    newBoard[i] = 'X'
    setBoard(newBoard)
    checkGameState(newBoard)
    setIsPlayerTurn(false)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsPlayerTurn(true)
    setGameOver(false)
  }


  useEffect(() => {
    checkGameState(board)
    if (!isPlayerTurn && !gameOver) {
      const timer = setTimeout(() => {
        setBoard(prevBoard => {
          const newBoard = robotMove(prevBoard)
          checkGameState(newBoard)
          return newBoard
        })
        setIsPlayerTurn(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isPlayerTurn, gameOver, robotMove, checkGameState, board])

  const renderSquare = (i: number) => (
    <button
      className="w-20 h-20 border border-black text-4xl font-bold bg-ray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
      onClick={() => handleClick(i)}
    >
      {board[i]}
    </button>
  )

  const winner = calculateWinner(board)
  let status
  if (winner) {
    status = winner === 'X' ? 'You win!' : 'The robot wins!'
  } else if (board.every(square => square !== null)) {
    status = 'A draw!'
  } else {
    status = isPlayerTurn ? 'Your turn' : 'The robot thinks...'
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <NavigationBar />
      <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
      <div className="mb-4 text-2xl font-bold">{status}</div>
      <div className="mb-4">
        <div className="flex">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="flex">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="flex">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button onClick={resetGame} className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition-all">
        Reset
      </button>
    </div>
  )
}