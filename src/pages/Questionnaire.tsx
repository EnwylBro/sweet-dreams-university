import { useState } from "react";
import { Link } from "react-router-dom";
import { ClipboardList, ChevronRight, ChevronLeft, CheckCircle, RefreshCw, Lightbulb } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { ContentCard } from "@/components/ContentCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const questions = [
  {
    id: 1,
    question: "過去一個月，你幾難入睡？",
    options: [
      { value: 0, label: "完全冇問題" },
      { value: 1, label: "偶爾有少少困難" },
      { value: 2, label: "經常有困難" },
      { value: 3, label: "幾乎每晚都好難入睡" },
    ],
  },
  {
    id: 2,
    question: "過去一個月，你幾常半夜醒咗之後難以再瞓返？",
    options: [
      { value: 0, label: "完全冇呢個問題" },
      { value: 1, label: "每週少於一次" },
      { value: 2, label: "每週 1-2 次" },
      { value: 3, label: "每週 3 次或以上" },
    ],
  },
  {
    id: 3,
    question: "過去一個月，你幾常比預定時間早好多醒？",
    options: [
      { value: 0, label: "完全冇呢個問題" },
      { value: 1, label: "每週少於一次" },
      { value: 2, label: "每週 1-2 次" },
      { value: 3, label: "每週 3 次或以上" },
    ],
  },
  {
    id: 4,
    question: "你對而家嘅睡眠質素滿唔滿意？",
    options: [
      { value: 0, label: "好滿意" },
      { value: 1, label: "幾滿意" },
      { value: 2, label: "唔太滿意" },
      { value: 3, label: "好唔滿意" },
    ],
  },
  {
    id: 5,
    question: "你嘅睡眠問題有冇影響到日間表現（例如疲倦、專注力下降）？",
    options: [
      { value: 0, label: "完全冇影響" },
      { value: 1, label: "有少少影響" },
      { value: 2, label: "有明顯影響" },
      { value: 3, label: "嚴重影響" },
    ],
  },
  {
    id: 6,
    question: "你覺得自己嘅睡眠問題有幾明顯？",
    options: [
      { value: 0, label: "完全冇問題" },
      { value: 1, label: "有少少問題" },
      { value: 2, label: "問題幾明顯" },
      { value: 3, label: "問題好嚴重" },
    ],
  },
  {
    id: 7,
    question: "你有幾擔心自己嘅睡眠問題？",
    options: [
      { value: 0, label: "完全唔擔心" },
      { value: 1, label: "有少少擔心" },
      { value: 2, label: "幾擔心" },
      { value: 3, label: "好擔心" },
    ],
  },
];

const getResult = (score: number) => {
  if (score <= 7) {
    return {
      level: "睡眠狀況良好",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      description: "恭喜你！你嘅睡眠狀況睇嚟幾好。繼續保持良好嘅作息習慣，記得瞓前放低手機啊！",
      tips: ["保持規律作息", "繼續良好習慣", "適時放鬆心情"],
      link: "/basics",
      linkText: "了解更多睡眠知識",
    };
  } else if (score <= 14) {
    return {
      level: "輕度失眠",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      description: "你可能有輕度失眠問題。唔使太擔心，透過一啲簡單嘅方法通常可以改善！",
      tips: ["建立規律作息時間", "瞓前減少使用電子產品", "學習放鬆技巧"],
      link: "/tips",
      linkText: "睇吓失眠小貼士",
    };
  } else if (score <= 21) {
    return {
      level: "中度失眠",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      description: "你嘅失眠問題需要認真對待。建議你參考我哋嘅建議，如果持續唔好轉，可以考慮搵專業人士幫手。",
      tips: ["認真改善睡眠環境", "嘗試放鬆訓練", "減少咖啡因攝取", "考慮諮詢學校輔導"],
      link: "/tips",
      linkText: "獲取針對性建議",
    };
  } else {
    return {
      level: "嚴重失眠",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      description: "你嘅失眠問題比較嚴重，強烈建議你尋求專業幫助。學校輔導處或者醫生都可以幫到你！",
      tips: ["盡快尋求專業幫助", "善用學校輔導服務", "唔好自己硬撐"],
      link: "/resources",
      linkText: "了解專業資源",
    };
  }
};

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: number) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
  const result = getResult(totalScore);
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers[questions[currentQuestion]?.id];

  if (showResult) {
    return (
      <PageLayout>
        <div className="min-h-screen py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <ContentCard className="animate-fade-in-up">
                <div className="text-center mb-8">
                  <CheckCircle className={`w-16 h-16 mx-auto mb-4 ${result.color}`} />
                  <h1 className="text-3xl font-bold text-foreground mb-2">測試完成！</h1>
                  <p className="text-muted-foreground">以下係你嘅測試結果</p>
                </div>

                <div className={`p-6 rounded-2xl ${result.bgColor} mb-6`}>
                  <div className="text-center">
                    <p className="text-muted-foreground mb-2">你嘅分數</p>
                    <p className={`text-5xl font-bold mb-2 ${result.color}`}>{totalScore}</p>
                    <p className={`text-xl font-semibold ${result.color}`}>{result.level}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {result.description}
                  </p>
                  <div className="flex items-start gap-3 mb-4">
                    <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground mb-2">建議：</p>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        {result.tips.map((tip, index) => (
                          <li key={index}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="hero" size="lg" className="flex-1">
                    <Link to={result.link}>
                      {result.linkText}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                  <Button variant="soft" size="lg" onClick={handleReset}>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    再測一次
                  </Button>
                </div>
              </ContentCard>

              <p className="text-center text-sm text-muted-foreground mt-6">
                *此測試僅供參考，並非專業診斷。如有嚴重問題，請諮詢專業人士。
              </p>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 animate-fade-in-up">
              <ClipboardList className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h1 className="text-3xl font-bold text-foreground mb-2">失眠自我測試</h1>
              <p className="text-muted-foreground">
                回答以下 7 條問題，了解你嘅睡眠狀況
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>問題 {currentQuestion + 1} / {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <ContentCard className="animate-fade-in-up">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3 mb-8">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={cn(
                      "w-full p-4 rounded-xl text-left transition-all duration-300 border",
                      currentAnswer === option.value
                        ? "bg-primary/20 border-primary text-foreground"
                        : "bg-muted/30 border-transparent hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="flex justify-between">
                <Button
                  variant="soft"
                  onClick={handlePrev}
                  disabled={currentQuestion === 0}
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  上一題
                </Button>
                <Button
                  variant="hero"
                  onClick={handleNext}
                  disabled={currentAnswer === undefined}
                >
                  {currentQuestion === questions.length - 1 ? "睇結果" : "下一題"}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </ContentCard>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Questionnaire;
