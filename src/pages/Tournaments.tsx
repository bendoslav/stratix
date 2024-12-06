import { motion } from 'framer-motion';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { GiTrophy } from 'react-icons/gi';
import { SiValorant, SiLeagueoflegends, SiCounterstrike } from 'react-icons/si';

type Tournament = {
  name: string;
  game: string;
  date: string;
  prizePool: string;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
  description: string;
  teams?: string[];
  achievements?: string[];
  gameIcon?: JSX.Element;
};

const Tournaments = () => {
  const tournaments: Tournament[] = [
    {
      name: "StratiX Valorant Championship",
      game: "Valorant",
      date: "August 15-20, 2024",
      prizePool: "$50,000",
      status: "Upcoming",
      description: "Premier Valorant tournament featuring top teams from across Europe",
      teams: ["Team Liquid", "Fnatic", "G2 Esports", "StratiX"],
      gameIcon: <SiValorant className="w-6 h-6 text-[#e4bc60]" />
    },
    {
      name: "League of Legends Masters",
      game: "League of Legends",
      date: "July 1-10, 2024",
      prizePool: "$75,000",
      status: "Upcoming",
      description: "Elite LoL competition with international participants",
      teams: ["T1", "DRX", "Gen.G", "StratiX"],
      gameIcon: <SiLeagueoflegends className="w-6 h-6 text-[#e4bc60]" />
    },
    {
      name: "CS2 Global Challenge",
      game: "Counter-Strike 2",
      date: "June 5-8, 2024",
      prizePool: "$100,000",
      status: "Upcoming",
      description: "High-stakes CS2 tournament featuring world's best teams",
      teams: ["NAVI", "FaZe", "Vitality", "StratiX"],
      gameIcon: <SiCounterstrike className="w-6 h-6 text-[#e4bc60]" />
    }
  ];

  const getStatusStyles = (status: Tournament['status']) => {
    switch (status) {
      case 'Upcoming':
        return {
          badge: 'bg-blue-500/20 text-blue-400',
          glow: 'from-transparent via-blue-500/10 to-transparent'
        };
      case 'Ongoing':
        return {
          badge: 'bg-green-500/20 text-green-400',
          glow: 'from-transparent via-green-500/10 to-transparent'
        };
      case 'Completed':
        return {
          badge: 'bg-gray-500/20 text-gray-400',
          glow: 'from-transparent via-gray-500/10 to-transparent'
        };
    }
  };

  return (
    <div className="pt-32 px-4 min-h-screen bg-gradient-to-b from-[#282727] to-[#1a1a1a] pb-24">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e4bc60] to-[#f1d693] mb-4 text-center">
          Tournaments
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Join us in the most prestigious esports tournaments. Compete against the best teams and prove your worth on the global stage.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={tournament.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${getStatusStyles(tournament.status).glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    {tournament.gameIcon}
                    <div>
                      <h3 className="text-2xl font-bold text-[#e4bc60] group-hover:text-[#f1d693] transition-colors">
                        {tournament.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{tournament.game}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(tournament.status).badge}`}>
                    {tournament.status}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-[#e4bc60]/80 mb-2">
                    <HiOutlineChevronRight className="w-4 h-4" />
                    <span>{tournament.date}</span>
                  </div>
                  <p className="text-gray-300">{tournament.description}</p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-[#e4bc60] mb-2">
                    <GiTrophy className="w-5 h-5" />
                    <span className="font-semibold">Prize Pool: {tournament.prizePool}</span>
                  </div>
                </div>

                {tournament.teams && (
                  <div className="mt-4">
                    <h4 className="text-[#e4bc60] mb-2">Participating Teams:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tournament.teams.map((team, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-[#e4bc60]/10 rounded-full text-sm text-gray-300"
                        >
                          {team}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#e4bc60] to-[#f1d693] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 flex flex-col items-center max-w-7xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-[#e4bc60] mb-8 text-center">Archived Tournaments</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {[
            {
              name: "Summer Championship 2023",
              gameIcon: <SiValorant className="w-6 h-6 text-[#e4bc60]" />,
              game: "Valorant", 
              date: "August 15-20, 2023",
              description: "Our biggest Valorant tournament of the summer season",
              prizePool: "$25,000",
              results: [
                { team: "Team Liquid", position: "1st Place" },
                { team: "Fnatic", position: "2nd Place" },
                { team: "Cloud9", position: "3rd Place" }
              ]
            },
            {
              name: "Spring Invitational 2023",
              gameIcon: <SiLeagueoflegends className="w-6 h-6 text-[#e4bc60]" />,
              game: "League of Legends",
              date: "March 10-12, 2023", 
              description: "Elite LoL teams battled for spring supremacy",
              prizePool: "$15,000",
              results: [
                { team: "T1", position: "1st Place" },
                { team: "Gen.G", position: "2nd Place" },
                { team: "DRX", position: "3rd Place" }
              ]
            },
            {
              name: "Winter CS2 Championship",
              gameIcon: <SiCounterstrike className="w-6 h-6 text-[#e4bc60]" />,
              game: "Counter-Strike 2",
              date: "January 5-8, 2023",
              description: "Intense CS2 action featuring top European teams",
              prizePool: "$20,000",
              results: [
                { team: "NAVI", position: "1st Place" },
                { team: "FaZe Clan", position: "2nd Place" },
                { team: "Vitality", position: "3rd Place" }
              ]
            }
          ].map((tournament: {
            name: string;
            gameIcon: JSX.Element;
            game: string;
            date: string;
            description: string;
            prizePool: string;
            results: Array<{
              team: string;
              position: string;
            }>;
          }, index: number) => (
            <motion.div
              key={tournament.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    {tournament.gameIcon}
                    <div>
                      <h3 className="text-2xl font-bold text-[#e4bc60] group-hover:text-[#f1d693] transition-colors">
                        {tournament.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{tournament.game}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-300">
                    Completed
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-[#e4bc60]/80 mb-2">
                    <HiOutlineChevronRight className="w-4 h-4" />
                    <span>{tournament.date}</span>
                  </div>
                  <p className="text-gray-300">{tournament.description}</p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-[#e4bc60] mb-2">
                    <GiTrophy className="w-5 h-5" />
                    <span className="font-semibold">Final Prize Pool: {tournament.prizePool}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-[#e4bc60] mb-2">Final Standings:</h4>
                  <div className="space-y-2">
                    {tournament.results.map((result: { team: string; position: string }, i: number) => (
                      <div 
                        key={i}
                        className="flex items-center justify-between px-3 py-2 bg-[#e4bc60]/10 rounded-lg"
                      >
                        <span className="text-gray-300">{result.team}</span>
                        <span className="text-[#e4bc60]">{result.position}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#e4bc60] to-[#f1d693] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Tournaments;
