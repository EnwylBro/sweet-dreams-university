import { useState } from "react";
import { Moon, Zap, Brain, Heart, AlertCircle, Clock, Coffee } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { ContentCard } from "@/components/ContentCard";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "importance", label: "睡眠的重要性" },
  { id: "what-is", label: "失眠是什麼？" },
];

const Basics = () => {
  const [activeTab, setActiveTab] = useState("importance");

  return (
    <PageLayout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">基礎認知</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              在開始改善睡眠之前，讓我們先來了解睡眠的基本知識吧！
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 py-3 rounded-xl font-medium transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === "importance" && (
              <div className="space-y-8 animate-fade-in-up">
                <ContentCard>
                  <div className="flex items-center gap-3 mb-6">
                    <Moon className="w-8 h-8 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">為什麼睡眠那麼重要？</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    同學仔，你有冇試過通宵趕 Paper 之後，第二日上堂完全唔知老師講咩？😵
                    其實唔係你變蠢咗，係因為缺乏睡眠會嚴重影響我哋嘅大腦功能！
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    睡眠就好似手機充電咁，冇電點開機？我哋嘅身體同大腦都需要透過睡眠嚟「充電」同「更新系統」。
                  </p>
                </ContentCard>

                <div className="grid md:grid-cols-2 gap-6">
                  <ContentCard icon={<Brain className="w-6 h-6" />} title="記憶力 UP UP">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      瞓覺嗰陣，大腦會將日間學到嘅嘢整理同儲存。所以溫書之後早啲瞓，
                      記憶會更加深刻！比起通宵溫書，早啲瞓覺再早啲起身溫更有效㗎！
                    </p>
                  </ContentCard>

                  <ContentCard icon={<Zap className="w-6 h-6" />} title="精力充沛">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      瞓得好，第二日就會精神爽利，做嘢效率高好多！
                      唔使成日靠咖啡續命，仲可以有更多時間做自己鍾意嘅嘢。
                    </p>
                  </ContentCard>

                  <ContentCard icon={<Heart className="w-6 h-6" />} title="身心健康">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      充足睡眠可以增強免疫力，仲可以調節情緒。
                      瞓唔好嘅人會更容易焦慮、易嬲，所以好好瞓覺真係好重要！
                    </p>
                  </ContentCard>

                  <ContentCard icon={<Clock className="w-6 h-6" />} title="最佳睡眠時間">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      大學生每日需要 7-9 小時睡眠。唔好以為自己係鐵人，
                      長期瞓唔夠會累積「睡眠債」，對身體好傷㗎！
                    </p>
                  </ContentCard>
                </div>
              </div>
            )}

            {activeTab === "what-is" && (
              <div className="space-y-8 animate-fade-in-up">
                <ContentCard>
                  <div className="flex items-center gap-3 mb-6">
                    <AlertCircle className="w-8 h-8 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">咩係失眠？</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    失眠唔係單純「瞓唔著」咁簡單。如果你經常有以下情況，可能就係有失眠問題：
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>躺咗好耐都瞓唔著（超過 30 分鐘）</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>半夜成日醒，醒咗又好難再瞓返</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>比預定時間早好多醒（凌晨 4、5 點），之後就瞓唔返</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>明明瞓咗好耐，但起身仲係好攰</span>
                    </li>
                  </ul>
                </ContentCard>

                <ContentCard>
                  <div className="flex items-center gap-3 mb-6">
                    <Coffee className="w-8 h-8 text-lavender" />
                    <h2 className="text-2xl font-bold text-foreground">大學生失眠嘅常見原因</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-muted/30">
                      <h4 className="font-semibold text-foreground mb-2">📚 學業壓力</h4>
                      <p className="text-sm text-muted-foreground">
                        功課、考試、Deadline 壓力山大，腦袋停唔到落嚟
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/30">
                      <h4 className="font-semibold text-foreground mb-2">📱 電子產品</h4>
                      <p className="text-sm text-muted-foreground">
                        瞓前碌手機、睇片，藍光會影響褪黑激素分泌
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/30">
                      <h4 className="font-semibold text-foreground mb-2">☕ 咖啡因</h4>
                      <p className="text-sm text-muted-foreground">
                        飲太多咖啡、奶茶提神，反而令你夜晚瞓唔著
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/30">
                      <h4 className="font-semibold text-foreground mb-2">🌙 作息不定</h4>
                      <p className="text-sm text-muted-foreground">
                        平日夜瞓、假期亂瞓，生理時鐘亂晒
                      </p>
                    </div>
                  </div>
                </ContentCard>

                <ContentCard className="bg-gradient-to-br from-primary/10 to-dream-purple/10 border-primary/30">
                  <p className="text-center text-muted-foreground">
                    💡 <strong className="text-foreground">小提示：</strong>偶爾失眠係正常嘅，唔使太擔心。
                    但如果情況持續超過一個月，就建議搵專業人士傾吓！
                  </p>
                </ContentCard>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Basics;
