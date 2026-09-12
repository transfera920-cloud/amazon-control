import { Hero } from './components/Hero';
import { PhoneServiceCard } from './components/PhoneServiceCard';
import { LinkCard } from './components/LinkCard';
import { Footer } from './components/Footer';
import {
  ROAD_TRAFFIC_LINKS,
  REGULAR_CONTROL_LINKS,
  FORESTRY_LINKS,
  NATIONAL_PARK_LINKS,
} from './data';

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      {/* 沉穩自然系環境背景光暈與細緻網格 */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* 頂部高山晨霧微光 */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[360px] bg-gradient-to-b from-emerald-900/25 via-teal-950/15 to-transparent rounded-full blur-3xl" />
        {/* 側邊高海拔藍霧漸層 */}
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl" />
        <div className="absolute top-2/3 -right-48 w-96 h-96 bg-emerald-950/20 rounded-full blur-3xl" />
        {/* 幾何微細網格紋理 */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <main className="relative z-10 w-full max-w-xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-9 sm:space-y-11">
        <Hero />

        {/* 四、道路與即時路況 */}
        <section id="section-road-traffic" className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-4 bg-emerald-500 rounded-full" />
            <h2
              id="heading-road-traffic"
              className="text-base sm:text-lg font-bold tracking-wide text-slate-100"
            >
              道路與即時路況
            </h2>
          </div>
          <div className="space-y-2.5">
            <PhoneServiceCard />
            {ROAD_TRAFFIC_LINKS.map((item) => (
              <LinkCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* 五、經常性管制路段 */}
        <section id="section-regular-control" className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-4 bg-amber-500 rounded-full" />
            <h2
              id="heading-regular-control"
              className="text-base sm:text-lg font-bold tracking-wide text-slate-100"
            >
              經常性管制路段
            </h2>
          </div>
          <div className="space-y-2.5">
            {REGULAR_CONTROL_LINKS.map((item) => (
              <LinkCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* 六、林道與森林遊樂區 */}
        <section id="section-forestry" className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-4 bg-teal-500 rounded-full" />
            <h2
              id="heading-forestry"
              className="text-base sm:text-lg font-bold tracking-wide text-slate-100"
            >
              林道與森林遊樂區
            </h2>
          </div>
          <div className="space-y-2.5">
            {FORESTRY_LINKS.map((item) => (
              <LinkCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* 七、國家公園 */}
        <section id="section-national-park" className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-4 bg-cyan-500 rounded-full" />
            <h2
              id="heading-national-park"
              className="text-base sm:text-lg font-bold tracking-wide text-slate-100"
            >
              國家公園
            </h2>
          </div>
          <div className="space-y-2.5">
            {NATIONAL_PARK_LINKS.map((item) => (
              <LinkCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>

      {/* 八、頁尾 */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
