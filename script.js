const timer = document.getElementById("timer");
const text = document.getElementById("main-text");
const quiz = document.getElementById("quiz");
const start = document.getElementById("start");
let question = document.getElementById("question");
let progress = document.getElementById("progress");
const choices = document.getElementById("choices");
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
let resetBtn = document.getElementById("reset");
const isRight = document.getElementById("is-right");
const wrong = document.getElementById("is-wrong");



//Quiz Multiple Choice Questions//
const questions = [
    {
        question: "How mant National Championships has Alabama won?",
        choiceA: "13",
        choiceB: "5",
        choiceC: "17",
        choiceD: "2",
        correct: "c"
    },

    {
        question: "How many Heisman trophy winners has Alabama had?",
        choiceA: "2",
        choiceB: "5",
        choiceC: "3",
        choiceD: "0",
        correct: "a",
        
    },

    {
        question: "What is Alabama's current win streak against Tennessee(in years)?",
        choiceA: "15",
        choiceB: "11",
        choiceC: "13",
        choiceD: "8",
        correct: "c",

    },

    {
        question: "How many Alabama players are currently in the NFL?",
        choiceA: "70",
        choiceB: "56",
        choiceC: "28",
        choiceD: "41",
        correct: "b",

    },

    {
        question: "In what year did Nick Saban win his first National Championship at Alabama?" ,
        choiceA: "2007",
        choiceB: "2006",
        choiceC: "2015",
        choiceD: "2009",
        correct: "d",

    },


]