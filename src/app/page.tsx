import {
  BarChart,
  CardStat,
  Footer,
  LineChart,
  Navbar,
  PageVisit,
  Sidebar,
  SocialTraffic,
} from '@/components';

import { pageStats } from '@/api/data';

export default function Home() {
  return (
    <>
      {/* Statics Data  */}
      <div className="relative bg-pink-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              {pageStats.map((item) => (
                <CardStat
                  key={item.id}
                  name={item.name}
                  value={item.value}
                  percentChange={item.percentChange}
                  color={item.color}
                  since={item.since}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chart and Report Data  */}
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap">
          <LineChart />
          <BarChart />
        </div>
        <div className="flex flex-wrap mt-4">
          <PageVisit />
          <SocialTraffic />
        </div>
      </div>
    </>
  );
}
