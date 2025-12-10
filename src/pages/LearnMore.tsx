import { useState } from "react";
import { AlertTriangle, Layers, TrendingDown, Brain, Heart, Users, Clock, Sunrise, Moon as MoonIcon, Battery } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { ContentCard } from "@/components/ContentCard";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "effects", label: "失眠的影響" },
  { id: "types", label: "失眠的種類" },
];

const LearnMore = () => {
  const [activeTab, setActiveTab] = useState("effects");

  return (
    <PageLayout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">失眠知多點</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              深入了解失眠對我們的影響，以及不同類型的失眠
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
            {activeTab === "effects" && (
              <div className="space-y-8 animate-fade-in-up">
                <ContentCard>
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-8 h-8 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">失眠會點影響你？</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    唔好睇小失眠呀！佢唔單止會令你攰，仲會影響你好多方面㗎。
                    了解清楚先可以更加重視睡眠健康！
                  </p>
                </ContentCard>

                <div className="grid md:grid-cols-2 gap-6">
                  <ContentCard icon={<Brain className="w-6 h-6" />} title="認知功能下降">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      瞓唔夠會令你：
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-2">
                      <li>• 注意力難以集中，上堂神遊太虛</li>
                      <li>• 記憶力變差，溫咗書都記唔住</li>
                      <li>• 反應變慢，做功課效率低</li>
                      <li>• 創意思維受阻，諗唔到 idea</li>
                    </ul>
                  </ContentCard>

                  <ContentCard icon={<Heart className="w-6 h-6" />} title="情緒波動">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      瞓唔好會令情緒好唔穩定：
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-2">
                      <li>• 容易煩躁、發脾氣</li>
                      <li>• 情緒低落，對嘢提唔起勁</li>
                      <li>• 焦慮感增加</li>
                      <li>• 抗壓能力下降</li>
                    </ul>
                  </ContentCard>

                  <ContentCard icon={<TrendingDown className="w-6 h-6" />} title="學業影響">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      對大學生嚟講，失眠會直接影響學業：
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-2">
                      <li>• GPA 下跌（真係有研究證實！）</li>
                      <li>• 遲到、走堂增加</li>
                      <li>• 參與度下降</li>
                      <li>• 更難完成功課同 Project</li>
                    </ul>
                  </ContentCard>

                  <ContentCard icon={<Users className="w-6 h-6" />} title="社交影響">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      長期失眠仲會影響你同朋友嘅關係：
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-2">
                      <li>• 冇心機同朋友玩</li>
                      <li>• 容易因小事同人有衝突</li>
                      <li>• 社交活動減少</li>
                      <li>• 感覺被孤立</li>
                    </ul>
                  </ContentCard>
                </div>
              </div>
            )}

            {activeTab === "types" && (
              <div className="space-y-8 animate-fade-in-up">
                <ContentCard>
                  <div className="flex items-center gap-3 mb-6">
                    <Layers className="w-8 h-8 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">失眠有咩種類？</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    失眠其實有好多種，了解自己屬於邊種類型，先可以搵到最適合嘅解決方法！
                  </p>
                </ContentCard>

                {/* Duration Types */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    按持續時間分類
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ContentCard className="border-l-4 border-l-soft-blue">
                      <h4 className="font-semibold text-foreground mb-3">🌤️ 短期失眠</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        持續時間：少於 3 個月
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        通常由明確嘅壓力事件引起，例如考試期間、感情問題、搬宿舍等。
                        壓力過去之後通常會自然好返。
                      </p>
                    </ContentCard>

                    <ContentCard className="border-l-4 border-l-dream-purple">
                      <h4 className="font-semibold text-foreground mb-3">🌙 長期失眠</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        持續時間：超過 3 個月
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        每週至少有 3 晚瞓唔好，而且持續超過 3 個月。
                        呢種情況建議搵專業人士幫手。
                      </p>
                    </ContentCard>
                  </div>
                </div>

                {/* Symptom Types */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <MoonIcon className="w-5 h-5 text-primary" />
                    按症狀分類
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ContentCard>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground">入睡困難型</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        躺上床之後超過 30 分鐘都瞓唔著，腦袋停唔落嚟。
                      </p>
                      <div className="text-sm text-muted-foreground/80 bg-muted/30 p-3 rounded-lg">
                        「成日躺喺度諗嘢諗到天光...」
                      </div>
                    </ContentCard>

                    <ContentCard>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-lavender/20">
                          <AlertTriangle className="w-5 h-5 text-lavender" />
                        </div>
                        <h4 className="font-semibold text-foreground">淺眠型</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        瞓得好淺，成晚發夢或者半夜成日醒，有少少嘢就會醒。
                      </p>
                      <div className="text-sm text-muted-foreground/80 bg-muted/30 p-3 rounded-lg">
                        「室友 send message 震一震就醒咗...」
                      </div>
                    </ContentCard>

                    <ContentCard>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-soft-blue/20">
                          <Sunrise className="w-5 h-5 text-soft-blue" />
                        </div>
                        <h4 className="font-semibold text-foreground">早醒型</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        比預定時間早好多醒（例如 4、5 點），之後就點都瞓唔返。
                      </p>
                      <div className="text-sm text-muted-foreground/80 bg-muted/30 p-3 rounded-lg">
                        「鬧鐘未響就自己醒咗，但又好攰...」
                      </div>
                    </ContentCard>

                    <ContentCard>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-dream-purple/20">
                          <Battery className="w-5 h-5 text-dream-purple" />
                        </div>
                        <h4 className="font-semibold text-foreground">睡不飽型</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        明明瞓咗好多個鐘，但起身仲係好攰，感覺冇瞓過咁。
                      </p>
                      <div className="text-sm text-muted-foreground/80 bg-muted/30 p-3 rounded-lg">
                        「瞓咗 10 個鐘但仲係好攰...」
                      </div>
                    </ContentCard>
                  </div>
                </div>

                <ContentCard className="bg-gradient-to-br from-primary/10 to-dream-purple/10 border-primary/30">
                  <p className="text-center text-muted-foreground">
                    💡 了解咗自己嘅失眠類型之後，去睇吓我哋嘅「失眠小貼士」，
                    搵到最適合你嘅解決方法！
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

export default LearnMore;
