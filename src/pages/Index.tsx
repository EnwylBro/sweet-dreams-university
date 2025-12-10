import { Link } from "react-router-dom";
import { Moon, BookOpen, Lightbulb, Brain, ExternalLink, ChevronRight, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { ContentCard } from "@/components/ContentCard";

const pageDirectory = [
  {
    title: "基礎認知",
    description: "了解睡眠的重要性，以及什麼是失眠",
    icon: BookOpen,
    path: "/basics",
    color: "text-soft-blue",
  },
  {
    title: "失眠知多點",
    description: "探索失眠對身心的影響和不同類型",
    icon: Brain,
    path: "/learn-more",
    color: "text-lavender",
  },
  {
    title: "失眠小貼士",
    description: "針對不同失眠類型的實用建議",
    icon: Lightbulb,
    path: "/tips",
    color: "text-primary",
  },
  {
    title: "了解更多",
    description: "專業資源和進一步支援",
    icon: ExternalLink,
    path: "/resources",
    color: "text-dream-purple",
  },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-hero opacity-80" />
        
        {/* Moon Glow Effect */}
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-dream-purple/20 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <Moon className="w-20 h-20 mx-auto mb-6 text-primary animate-float" />
          </div>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-gradient glow-text">眠密</span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            專屬於大學生的失眠網站
          </p>
          
          <p 
            className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            嘿！夜貓子同學，又睡不著嗎？🌙<br />
            讓我們一起了解失眠，找回好眠的秘密吧！
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button asChild variant="hero" size="xl">
              <Link to="/questionnaire">
                <ClipboardList className="w-5 h-5 mr-2" />
                開始失眠自測
              </Link>
            </Button>
            <Button asChild variant="soft" size="xl">
              <Link to="/basics">
                了解更多
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Page Directory Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              探索 <span className="text-gradient">眠密</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              我們準備了豐富的內容，幫助你更好地理解和應對失眠問題
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pageDirectory.map((page, index) => (
              <Link 
                key={page.path} 
                to={page.path}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <ContentCard className="h-full transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-muted/50 ${page.color} group-hover:scale-110 transition-transform duration-300`}>
                      <page.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {page.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {page.description}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </ContentCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <ContentCard className="text-center max-w-3xl mx-auto bg-gradient-to-br from-secondary/80 to-muted/50">
            <ClipboardList className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              不確定自己的失眠程度？
            </h3>
            <p className="text-muted-foreground mb-6">
              花 2 分鐘完成我們的小測驗，了解你的睡眠狀況，<br />
              我們會給你最適合的建議！
            </p>
            <Button asChild variant="glow" size="lg">
              <Link to="/questionnaire">
                立即測試
              </Link>
            </Button>
          </ContentCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Moon className="w-5 h-5 text-primary" />
            <span className="font-semibold text-gradient">眠密</span>
          </div>
          <p className="text-sm text-muted-foreground">
            溫馨提示：本網站僅提供健康教育資訊，如有嚴重睡眠問題，請諮詢專業醫療人員
          </p>
        </div>
      </footer>
    </PageLayout>
  );
};

export default Index;
