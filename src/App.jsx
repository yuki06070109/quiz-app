import { useState } from 'react'
import './App.css'

const questions = [
  {
    question: "問題1：裕暉と優里の初デートはいつ？",
    choices: ["1月9日", "6月23日", "6月7日", "5月19日"],
    answer: 2,
  },
  {
    question: "問題2：二人が初めてキスをした場所はどこ？",
    choices: ["海", "家", "レストラン", "会社"],
    answer: 0,
  },
  {
    question: "問題3：裕暉が初めて食事に誘ったのはどこ？",
    choices: ["スシロー", "梅の花", "丸亀製麺", "万作"],
    answer: 3,
  },
  {
    question: "問題4：新婚旅行での目的地はハウステンボスとどこ？",
    choices: ["ウォーターマークホテル", "大阪駅", "WBC合宿", "熊本ドライブ"],
    answer: 2,
  },
  {
    question: "問題5：プロポーズに対する優里のセリフは？",
    choices: ["はめて〜", "よろしく", "結婚します", "またね"],
    answer: 0,
  },
  {
    question: "問題6：結婚式を挙げたのはどこ？",
    choices: ["ハウステンボス", "each day", "富山迎賓館", "家"],
    answer: 1,
  },
  {
    question: "問題7：2人が初めて出会った場所は？",
    choices: ["道の上", "長崎県", "東京", "シニアタウン龍宮"],
    answer: 3,
  },
  {
    question: "問題8：裕暉が優里に指輪をプレゼントしたことで起こったことは？",
    choices: ["裕暉が泣いた", "アトラクション列を省略", "裕暉が転んだ", "優里が笑った"],
    answer: 1,
  },
  {
    question: "問題9：2人が初めて同棲したアパートは？",
    choices: ["PaPas", "レオパレス", "オプティム新庄", "まちゅざわ家"],
    answer: 2,
  },
  {
    question: "問題10：どこの神社の婚姻届けを提出した？",
    choices: ["乃木神社", "於保多神社", "諏訪神社", "黒龍神社"],
    answer: 0,
  },
  {
    question: "問題11：ハウステンボスの白い観覧車の頂上でなにをした？",
    choices: ["自撮り", "プロポーズ", "キス", "ハグ"],
    answer:2,
  },
  {
    question: "問題12：婚姻届けの証人の欄を家族みんなで書いた場所は？",
    choices: ["家","梅の花","丸亀製麺","万作"],
    answer:1,
  },
  {
    question: "問題13：二度目の東京旅行の目的は？",
    choices: ["東京ディズニーリゾート","ベンツのカフェ","乃木神社","東京スカイツリー"],
    answer:3,
  },
  {
    question: "問題14：事故の後、二人で泊まった温泉は？",
    choices: ["宇奈月温泉","和倉温泉","下呂温泉","別府温泉"],
    answer:0,
  },
  {
    question: "問題15：三度目の東京旅行の二日目に行ったのは？",
    choices: ["原宿","浅草","明治神宮","ハリーポッター"],
    answer:2,
  },
]

function App() {
  const [screen, setScreen] = useState("title")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [message, setMessage] = useState("")
  const [correctCount, setCorrectCount] = useState(0)
  const currentQuestion = questions[currentIndex]
  const isLastQuestion = currentIndex === questions.length - 1
  const isFinished = currentIndex >= questions.length

  function handleAnswer(choiceIndex) {
    setSelected(choiceIndex)
    if (choiceIndex === currentQuestion.answer) {
      setMessage("正解！🎉")
      setCorrectCount(correctCount + 1)
    } else {
      setMessage("惜しい！😢")
    }
  }

  function handleNext() {
    setSelected(null)
    setMessage("")
    setCurrentIndex(currentIndex + 1)
  }

  function handleRestart() {
    setSelected(null)
    setMessage("")
    setCurrentIndex(0)
    setCorrectCount(0)
    setScreen("title")
  }

  if (screen === "title") {
    return (
      <div className="quiz-container">
        <h1>2人の思い出クイズ💕</h1>
        <p className="subtitle">答えられるかな？</p>
        <button className="next-button" onClick={() => setScreen("quiz")}>
          スタート！
        </button>
      </div>
    )
  }

  if (isFinished) {
    return (
      <div className="quiz-container">
        <h1>クイズ終了！</h1>
        <p>お疲れ様でした😊</p>
        <p>正解数:{correctCount}/{questions.length}問</p>
        <button className="next-button" onClick={handleRestart}>もう一度やる</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>{currentQuestion.question}</h2>
      <div className="choices">
        {currentQuestion.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={selected !== null}
            className={selected === index ? "selected" : ""}
          >
            {choice}
          </button>
        ))}
      </div>
      {message && <p className="message">{message}</p>}
      {selected !== null && (
        <button className="next-button" onClick={handleNext}>
          {isLastQuestion ? "結果を見る" : "次の問題へ"}
        </button>
      )}
    </div>
  )
}

export default App