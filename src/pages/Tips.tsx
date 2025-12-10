import { useState } from "react";
import { Lightbulb, Clock, Moon, Sunrise, Battery, Zap, Coffee, Smartphone, Wind, Dumbbell } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { ContentCard } from "@/components/ContentCard";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "short-term", label: "短期失眠", icon: Zap },
  { id: "long-term", label: "長期失眠", icon: Clock },
  { id: "difficulty", label: "入睡困難", icon: Moon },
  { id: "light-sleep", label: "淺眠", icon: Wind },
  { id: "early-wake", label: "早醒型", icon: Sunrise },
  { id: "not-rested", label: "睡不飽", icon: Battery },
];

const Tips = () => {
  const [activeTab, setActiveTab] = useState("short-term");

  const renderContent = () => {
    switch (activeTab) {
      case "short-term":
        return (
          <div className="space-y-6 animate-fade-in-up">
            <ContentCard>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">短期失眠小貼士</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                短期失眠通常係因為壓力或者環境改變引起，以下係一啲即時有用嘅方法！
              </p>
            </ContentCard>

            <div className="grid md:grid-cols-2 gap-6">
              <ContentCard title="🎯 面對壓力來源">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 寫低令你瞓唔著嘅嘢，將佢「倒」出嚟</li>
                  <li>• 制定計劃，將大任務拆細</li>
                  <li>• 同朋友傾訴，唔好收埋自己</li>
                  <li>• 提醒自己：呢個只係暫時嘅！</li>
                </ul>
              </ContentCard>

              <ContentCard title="🧘 放鬆技巧">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 4-7-8 呼吸法：吸 4 秒、閉 7 秒、呼 8 秒</li>
                  <li>• 聽白噪音或輕柔音樂</li>
                  <li>• 瞓前沖個暖水涼</li>
                  <li>• 做簡單伸展運動</li>
                </ul>
              </ContentCard>

              <ContentCard title="📝 考試期間特別貼士">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 考試前一晚唔好通宵！瞓夠比溫多更重要</li>
                  <li>• 下午 2 點之後避免飲咖啡</li>
                  <li>• 溫完書做啲輕鬆嘢先瞓</li>
                  <li>• 相信自己，已經盡力就得啦！</li>
                </ul>
              </ContentCard>

              <ContentCard title="🌿 快速入睡秘訣">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 房間保持黑暗、涼爽</li>
                  <li>• 如果 20 分鐘瞓唔著，起身做啲悶嘢</li>
                  <li>• 想像一個平靜嘅場景</li>
                  <li>• 唔好睇鐘！會更焦慮</li>
                </ul>
              </ContentCard>
            </div>
          </div>
        );

      case "long-term":
        return (
          <div className="space-y-6 animate-fade-in-up">
            <ContentCard>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">長期失眠小貼士</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                長期失眠需要更系統性嘅改善方法。記住，改變需要時間，要有耐性！
              </p>
            </ContentCard>

            <div className="grid md:grid-cols-2 gap-6">
              <ContentCard title="⏰ 建立規律作息">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 每日同一時間起身，包括週末！</li>
                  <li>• 逐漸調整，每次提早 15-30 分鐘</li>
                  <li>• 就算攰都唔好日間瞓太多</li>
                  <li>• 建立睡前儀式（刷牙→護膚→睇書）</li>
                </ul>
              </ContentCard>

              <ContentCard title="🛏️ 改善睡眠環境">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 投資一個好枕頭（真係好重要！）</li>
                  <li>• 用遮光窗簾或眼罩</li>
                  <li>• 如果室友嘈，考慮用耳塞</li>
                  <li>• 床只用嚟瞓覺，唔好喺床上溫書</li>
                </ul>
              </ContentCard>

              <ContentCard title="🥗 生活習慣調整">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 定期運動，但避免臨瞓前</li>
                  <li>• 減少酒精攝取（酒精會影響睡眠質素）</li>
                  <li>• 注意飲食，避免太夜食嘢</li>
                  <li>• 日間多曬太陽，調整生理時鐘</li>
                </ul>
              </ContentCard>

              <ContentCard title="🏥 尋求專業幫助">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 如果持續 3 個月以上，建議睇醫生</li>
                  <li>• 學校輔導處可能有相關服務</li>
                  <li>• 認知行為治療（CBT-I）對失眠好有效</li>
                  <li>• 唔好自己亂食安眠藥！</li>
                </ul>
              </ContentCard>
            </div>
          </div>
        );

      case "difficulty":
        return (
          <div className="space-y-6 animate-fade-in-up">
            <ContentCard>
              <div className="flex items-center gap-3 mb-6">
                <Moon className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">入睡困難小貼士</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                躺咗好耐都瞓唔著？腦袋諗個不停？以下方法可以幫到你！
              </p>
            </ContentCard>

            <div className="grid md:grid-cols-2 gap-6">
              <ContentCard icon={<Smartphone className="w-6 h-6" />} title="減少螢幕時間">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 瞓前 1 小時停止用電子產品</li>
                  <li>• 開啟手機「夜間模式」減少藍光</li>
                  <li>• 用真正嘅鬧鐘，唔好用手機</li>
                  <li>• 將手機放喺床頭以外嘅地方</li>
                </ul>
              </ContentCard>

              <ContentCard icon={<Coffee className="w-6 h-6" />} title="注意咖啡因">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 下午 2 點後避免咖啡、奶茶</li>
                  <li>• 注意隱藏咖啡因：朱古力、可樂、能量飲品</li>
                  <li>• 改飲花草茶或暖牛奶</li>
                  <li>• 留意自己對咖啡因嘅敏感度</li>
                </ul>
              </ContentCard>

              <ContentCard title="🧠 停止思緒技巧">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 「憂慮時間」：日間抽 15 分鐘專門諗煩惱</li>
                  <li>• 寫日記將想法倒出嚟</li>
                  <li>• 聽 Podcast 或有聲書分散注意力</li>
                  <li>• 嘗試冥想 App（如 Headspace、Calm）</li>
                </ul>
              </ContentCard>

              <ContentCard title="🌡️ 身體放鬆">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 漸進式肌肉放鬆：由腳趾開始逐部分放鬆</li>
                  <li>• 瞓前 1-2 小時沖暖水涼</li>
                  <li>• 確保房間夠涼（約 18-22°C 最理想）</li>
                  <li>• 著舒服嘅睡衣</li>
                </ul>
              </ContentCard>
            </div>
          </div>
        );

      case "light-sleep":
        return (
          <div className="space-y-6 animate-fade-in-up">
            <ContentCard>
              <div className="flex items-center gap-3 mb-6">
                <Wind className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">淺眠小貼士</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                成晚發夢、容易醒？以下方法可以幫你瞓得更深！
              </p>
            </ContentCard>

            <div className="grid md:grid-cols-2 gap-6">
              <ContentCard title="🔇 減少干擾">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 用耳塞或者白噪音機</li>
                  <li>• 同室友溝通，互相尊重作息</li>
                  <li>• 手機設定「勿擾模式」</li>
                  <li>• 考慮用厚窗簾阻隔光線</li>
                </ul>
              </ContentCard>

              <ContentCard title="😌 改善睡眠深度">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 日間做帶氧運動（跑步、游水）</li>
                  <li>• 減少酒精：酒精會令你瞓得淺</li>
                  <li>• 瞓前避免大量飲水</li>
                  <li>• 保持固定作息時間</li>
                </ul>
              </ContentCard>

              <ContentCard title="🛏️ 床墊枕頭">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 檢查床墊係咪太舊（7-10 年要換）</li>
                  <li>• 選擇適合自己嘅枕頭高度</li>
                  <li>• 試吓加重被，有助穩定情緒</li>
                  <li>• 保持床單清潔，定期更換</li>
                </ul>
              </ContentCard>

              <ContentCard title="🌙 睡前準備">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 瞓前去廁所，減少半夜醒嚟</li>
                  <li>• 避免臨瞓食太飽</li>
                  <li>• 做深呼吸放鬆</li>
                  <li>• 如果醒咗，唔好睇時間</li>
                </ul>
              </ContentCard>
            </div>
          </div>
        );

      case "early-wake":
        return (
          <div className="space-y-6 animate-fade-in-up">
            <ContentCard>
              <div className="flex items-center gap-3 mb-6">
                <Sunrise className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">早醒型小貼士</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                成日太早醒，之後瞓唔返？以下方法可以幫到你！
              </p>
            </ContentCard>

            <div className="grid md:grid-cols-2 gap-6">
              <ContentCard title="☀️ 調整光線">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 用遮光窗簾阻隔晨光</li>
                  <li>• 戴眼罩瞓覺</li>
                  <li>• 夜晚減少光線接觸</li>
                  <li>• 傍晚可以曬吓夕陽，延遲睡意</li>
                </ul>
              </ContentCard>

              <ContentCard title="⏰ 調整作息">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 嘗試遲啲瞓，逐漸推遲 15-30 分鐘</li>
                  <li>• 晚餐可以食得稍微遲啲</li>
                  <li>• 傍晚做啲輕鬆活動</li>
                  <li>• 避免太早食晚餐</li>
                </ul>
              </ContentCard>

              <ContentCard title="😣 處理焦慮">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 早醒可能同焦慮有關</li>
                  <li>• 寫低明日要做嘅嘢，放低擔憂</li>
                  <li>• 學習放鬆技巧</li>
                  <li>• 如果持續，考慮搵輔導員傾</li>
                </ul>
              </ContentCard>

              <ContentCard title="🔄 醒咗點算？">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 如果真係瞓唔返，唔好強迫自己</li>
                  <li>• 起身做啲悶嘅事（摺衫、睇悶書）</li>
                  <li>• 避免立即睇手機</li>
                  <li>• 當攰返再躺低</li>
                </ul>
              </ContentCard>
            </div>
          </div>
        );

      case "not-rested":
        return (
          <div className="space-y-6 animate-fade-in-up">
            <ContentCard>
              <div className="flex items-center gap-3 mb-6">
                <Battery className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">睡不飽小貼士</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                瞓咗好多但起身仲係好攰？問題可能出喺睡眠質素！
              </p>
            </ContentCard>

            <div className="grid md:grid-cols-2 gap-6">
              <ContentCard icon={<Dumbbell className="w-6 h-6" />} title="增加運動">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 每日做 30 分鐘帶氧運動</li>
                  <li>• 早上或下午運動效果最好</li>
                  <li>• 瞓前 3 小時避免劇烈運動</li>
                  <li>• 就算只係行多幾步都好</li>
                </ul>
              </ContentCard>

              <ContentCard title="🍎 飲食調整">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 多食含鎂食物（香蕉、堅果）</li>
                  <li>• 減少高糖高脂食物</li>
                  <li>• 瞓前 2-3 小時避免進食</li>
                  <li>• 保持適當水分攝取</li>
                </ul>
              </ContentCard>

              <ContentCard title="💤 改善睡眠品質">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 控制睡眠時間（7-9 小時就夠）</li>
                  <li>• 避免「補眠」瞓太多</li>
                  <li>• 保持規律作息</li>
                  <li>• 減少午睡時間（20 分鐘內）</li>
                </ul>
              </ContentCard>

              <ContentCard title="⚠️ 留意健康警號">
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• 如果打鼻鼾好大聲，可能有睡眠窒息症</li>
                  <li>• 持續疲倦可能係其他健康問題</li>
                  <li>• 貧血、甲狀腺問題都會令人攰</li>
                  <li>• 建議做身體檢查排除其他原因</li>
                </ul>
              </ContentCard>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">失眠小貼士</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              針對不同類型嘅失眠，我哋有唔同嘅建議！搵到最適合你嘅方法
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Tips;
