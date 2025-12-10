import { ExternalLink, Phone, Globe, BookOpen, Heart, AlertCircle } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { ContentCard } from "@/components/ContentCard";
import { Button } from "@/components/ui/button";

const resources = [
  {
    name: "香港中文大學睡眠研究中心",
    description: "提供專業睡眠研究同治療資訊，有詳細嘅失眠知識庫",
    url: "https://jcsleepwell.cuhk.edu.hk/",
    icon: BookOpen,
    color: "text-soft-blue",
  },
  {
    name: "基督教家庭服務中心「睡眠健康計劃」",
    description: "提供睡眠健康教育同支援服務",
    url: "https://health.cfsc.org.hk/sleepwell",
    icon: Heart,
    color: "text-lavender",
  },
  {
    name: "香港心理衞生會",
    description: "提供心理健康資訊同服務，包括失眠相關支援",
    url: "https://www.mhahk.org.hk/",
    icon: Heart,
    color: "text-dream-purple",
  },
  {
    name: "醫院管理局智友站",
    description: "官方健康資訊平台，有豐富嘅睡眠健康知識",
    url: "https://www21.ha.org.hk/smartpatient/",
    icon: Globe,
    color: "text-primary",
  },
];

const hotlines = [
  {
    name: "撒瑪利亞防止自殺會 24 小時熱線",
    number: "2389 2222",
    description: "如果你有情緒困擾，可以隨時打嚟傾",
  },
  {
    name: "香港撒瑪利亞防止自殺會青少年熱線",
    number: "2382 0000",
    description: "專為青少年而設嘅支援熱線",
  },
  {
    name: "社會福利署熱線",
    number: "2343 2255",
    description: "提供各種社會服務轉介",
  },
];

const Resources = () => {
  return (
    <PageLayout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">了解更多</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              我哋唔係專業醫生，如果你需要更深入嘅幫助，以下資源可能幫到你！
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Professional Resources */}
            <section className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                專業資源網站
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource) => (
                  <ContentCard key={resource.name} className="h-full">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-muted/50 ${resource.color}`}>
                        <resource.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">
                          {resource.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {resource.description}
                        </p>
                        <Button asChild variant="soft" size="sm">
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            前往網站
                          </a>
                        </Button>
                      </div>
                    </div>
                  </ContentCard>
                ))}
              </div>
            </section>

            {/* Hotlines */}
            <section className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6 text-primary" />
                求助熱線
              </h2>
              <ContentCard>
                <p className="text-muted-foreground mb-6">
                  如果失眠令你好困擾，或者你有其他情緒問題，唔好收埋自己，搵人傾吓啦！
                </p>
                <div className="space-y-4">
                  {hotlines.map((hotline) => (
                    <div
                      key={hotline.number}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-muted/30 gap-4"
                    >
                      <div>
                        <h4 className="font-semibold text-foreground">{hotline.name}</h4>
                        <p className="text-sm text-muted-foreground">{hotline.description}</p>
                      </div>
                      <a
                        href={`tel:${hotline.number.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 text-primary font-bold text-lg hover:underline whitespace-nowrap"
                      >
                        <Phone className="w-5 h-5" />
                        {hotline.number}
                      </a>
                    </div>
                  ))}
                </div>
              </ContentCard>
            </section>

            {/* School Resources */}
            <section className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                學校資源
              </h2>
              <ContentCard>
                <p className="text-muted-foreground mb-4">
                  大部分大學都有提供免費嘅心理健康服務，記得善用呀！
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">學生輔導處</strong>：提供免費心理輔導服務</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">校醫</strong>：可以轉介睡眠專科</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">舍監/宿舍導師</strong>：如果宿舍環境影響睡眠，可以搵佢哋幫手</span>
                  </li>
                </ul>
              </ContentCard>
            </section>

            {/* Disclaimer */}
            <section className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <ContentCard className="bg-gradient-to-br from-primary/10 to-dream-purple/10 border-primary/30">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">重要提示</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      「眠密」網站嘅內容只係提供一般健康教育資訊，並唔能夠代替專業醫療意見。
                      如果你嘅失眠問題持續超過一個月，或者嚴重影響日常生活，
                      請盡快諮詢醫生或專業人士。記住，主動搵幫助係勇敢嘅表現！💪
                    </p>
                  </div>
                </div>
              </ContentCard>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Resources;
