import {
  BarChart,
  CardStat,
  LineChart,
  Navbar,
  PageVisit,
  Sidebar,
  SocialTraffic,
} from '@/components';

const cardStats = [
  {
    id: 1,
    name: 'Traffic',
    value: '350,897',
    percentChange: 3.48,
    color: 'bg-red-500',
    since: 'last month',
  },
  {
    id: 2,
    name: 'NEW USERS',
    value: '2,356',
    percentChange: -3.48,
    color: 'bg-orange-500',
    since: 'last week',
  },
  {
    id: 3,
    name: 'SALES',
    value: '924',
    percentChange: -1.1,
    color: 'bg-pink-500',
    since: 'yesterday',
  },
  {
    id: 4,
    name: 'PERFORMANCE',
    value: '49,65%',
    percentChange: 12,
    color: 'bg-lightBlue-500',
    since: 'last month',
  },
];

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        {/* Header */}
        <div className="relative bg-pink-600 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              {/* Card stats */}
              <div className="flex flex-wrap">
                {cardStats.map((item) => (
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

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            <LineChart />
            <BarChart />
          </div>
          <div className="flex flex-wrap mt-4">
            <PageVisit />
            <SocialTraffic />
          </div>

          <footer className="block py-4">
            <div className="container mx-auto px-4">
              <hr className="mb-4 border-b-1 border-blueGray-200" />
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Copyright © {new Date().getFullYear()}{' '}
                    <a
                      href="https://www.creative-tim.com"
                      className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                    >
                      Creative Tim
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-8/12 px-4">
                  <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                    <li>
                      <a
                        href="https://www.creative-tim.com"
                        className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                      >
                        Creative Tim
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.creative-tim.com/presentation"
                        className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://blog.creative-tim.com"
                        className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/main/LICENSE.md"
                        className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                      >
                        MIT License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
