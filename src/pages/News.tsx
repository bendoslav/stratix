import { motion } from 'framer-motion';
import { HiOutlineChevronRight, HiSearch } from 'react-icons/hi';
import { useState } from 'react';

type NewsArticle = {
  title: string;
  date: string;
  category: string;
  content: string;
  image?: string;
  division?: string;
};

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dateFilter, setDateFilter] = useState('All');

  const newsArticles: NewsArticle[] = [
    {
      title: "StratiX Valorant Team Qualifies for Major Tournament",
      date: "October 15, 2023",
      category: "Team Updates",
      division: "Valorant",
      content: "Our Valorant division has successfully qualified for the upcoming Winter Championship. The team showed exceptional performance in the qualifiers, winning all their matches with decisive scores.",
      image: "/news/valorant-qualification.jpg"
    },
    {
      title: "CS2 Division Welcomes New Players",
      date: "October 10, 2023", 
      category: "Team Updates",
      division: "CS2",
      content: "We're excited to announce three new additions to our CS2 roster. These talented players bring extensive competitive experience and will strengthen our presence in upcoming tournaments.",
      image: "/news/cs2-team.jpg"
    },
    {
      title: "League of Legends Team Analysis",
      date: "September 25, 2023",
      category: "Analysis",
      division: "League of Legends",
      content: "A detailed breakdown of our LoL team's performance in the recent regional qualifiers, highlighting key strategies and areas for improvement.",
      image: "/news/lol-analysis.jpg"
    },
    {
      title: "Mobile Division Launch",
      date: "September 15, 2023",
      category: "Announcements",
      division: "Mobile",
      content: "StratiX is proud to announce our expansion into mobile esports. We'll be competing in top mobile titles with a roster of experienced players.",
      image: "/news/mobile-launch.jpg"
    },
    {
      title: "Management Team Restructuring",
      date: "September 1, 2023",
      category: "Organization",
      division: "Management",
      content: "As part of our continued growth, we're implementing changes to our management structure to better support our teams and players.",
      image: "/news/management.jpg"
    }
  ];

  const divisions = ['All', 'Valorant', 'CS2', 'League of Legends', 'Mobile', 'Management'];
  const categories = ['All', 'Team Updates', 'Announcements', 'Events', 'Patch Notes', 'Tournaments', 'Content', 'Organization', 'Development', 'Analysis', 'Sponsorship', 'Community'];
  const dateRanges = ['All', 'Last Week', 'Last Month', 'Last 3 Months'];

  const isWithinDateRange = (articleDate: string, range: string) => {
    const date = new Date(articleDate);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = diff / (1000 * 3600 * 24);

    switch (range) {
      case 'Last Week':
        return days <= 7;
      case 'Last Month':
        return days <= 30;
      case 'Last 3 Months':
        return days <= 90;
      default:
        return true;
    }
  };

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDivision = selectedDivision === 'All' || article.division === selectedDivision;
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesDate = dateFilter === 'All' || isWithinDateRange(article.date, dateFilter);

    return matchesSearch && matchesDivision && matchesCategory && matchesDate;
  });

  return (
    <div className="pt-28 pb-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-[#e4bc60] via-[#f1d693] to-[#e4bc60] bg-clip-text text-transparent"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Latest News
        </motion.h1>

        <motion.div 
          className="mb-12 max-w-4xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative">
            <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search news by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl border border-[#e4bc60]/20 text-gray-300 focus:outline-none focus:border-[#e4bc60]/50 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              value={selectedDivision}
              onChange={(e) => setSelectedDivision(e.target.value)}
              className="w-full px-4 py-2 bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl border border-[#e4bc60]/20 text-gray-300 focus:outline-none focus:border-[#e4bc60]/50"
            >
              {divisions.map(div => (
                <option key={div} value={div}>{div} Division</option>
              ))}
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl border border-[#e4bc60]/20 text-gray-300 focus:outline-none focus:border-[#e4bc60]/50"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full px-4 py-2 bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl border border-[#e4bc60]/20 text-gray-300 focus:outline-none focus:border-[#e4bc60]/50"
            >
              {dateRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {article.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#e4bc60]/80 mb-2">
                  <HiOutlineChevronRight className="w-4 h-4" />
                  <span className="text-sm">{article.date}</span>
                </div>

                <h3 className="text-2xl font-bold text-[#e4bc60] group-hover:text-[#f1d693] transition-colors mb-2">
                  {article.title}
                </h3>

                <div className="flex gap-2 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[#e4bc60]/10 text-[#e4bc60]">
                    {article.category}
                  </span>
                  {article.division && (
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[#e4bc60]/10 text-[#e4bc60]">
                      {article.division}
                    </span>
                  )}
                </div>

                <p className="text-gray-300">
                  {article.content}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#e4bc60] to-[#f1d693] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default News;
