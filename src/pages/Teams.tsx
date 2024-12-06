import { motion } from 'framer-motion';
import { FaTwitter, FaTwitch, FaDiscord, FaSteam, FaYoutube } from 'react-icons/fa';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { GiTrophy } from 'react-icons/gi';
import { SiValorant, SiLeagueoflegends, SiCounterstrike } from 'react-icons/si';

type SocialMedia = {
  platform: string;
  url: string;
};

type PlayerStatus = 'Active' | 'Inactive' | 'Vacation';

type Player = {
  name: string;
  nickname: string;
  role: string;
  description: string;
  achievements?: string[];
  status?: PlayerStatus;
  avatar: string;
  socials: SocialMedia[];
  gameIcon?: JSX.Element;
};

const Teams = () => {
  const players: Array<{
    division: string;
    members: Player[];
  }> = [
    {
      division: "Management Team",
      members: [
        {
          name: "Michael Johnson",
          nickname: "MJ",
          role: "CEO",
          description: "Founder and visionary leader of StratiX",
          achievements: ["10+ years in esports management", "Former pro player"],
          status: "Active",
          avatar: "/avatars/mj.jpg",
          socials: [
            { platform: "twitter", url: "https://twitter.com/mj" },
            { platform: "linkedin", url: "https://linkedin.com/mj" }
          ]
        },
        {
          name: "Emily Rodriguez",
          nickname: "Em",
          role: "Team Manager",
          description: "Experienced esports manager and team coordinator",
          achievements: ["5+ years in team management", "Former tournament organizer"],
          status: "Vacation",
          avatar: "/avatars/em.jpg",
          socials: [
            { platform: "twitter", url: "https://twitter.com/em" },
            { platform: "discord", url: "https://discord.gg/em" }
          ]
        }
      ]
    },
    {
      division: "Valorant Division",
      members: [
        {
          name: "Alexander Wright",
          nickname: "Blitz",
          role: "IGL / Controller",
          description: "Former CS:GO pro, known for exceptional strategic calls",
          achievements: ["VCT 2023 Regional Finalist", "3x Tournament MVP"],
          status: "Active",
          avatar: "/avatars/blitz.jpg",
          gameIcon: <SiValorant className="w-6 h-6 text-[#e4bc60]" />,
          socials: [
            { platform: "twitter", url: "https://twitter.com/blitz" },
            { platform: "twitch", url: "https://twitch.tv/blitz" }
          ]
        },
        {
          name: "James Lee",
          nickname: "Phantom",
          role: "Duelist",
          description: "Aggressive playmaker with incredible aim",
          achievements: ["2x Match MVP", "Ranked #1 in Region"],
          status: "Inactive",
          avatar: "/avatars/phantom.jpg",
          gameIcon: <SiValorant className="w-6 h-6 text-[#e4bc60]" />,
          socials: [
            { platform: "twitter", url: "https://twitter.com/phantom" },
            { platform: "twitch", url: "https://twitch.tv/phantom" }
          ]
        },
        {
          name: "Sofia Martinez",
          nickname: "Viper",
          role: "Sentinel",
          description: "Strategic defender with perfect site control",
          achievements: ["Best Defender 2023", "15 Flawless Rounds Record"],
          status: "Vacation",
          avatar: "/avatars/viper.jpg",
          gameIcon: <SiValorant className="w-6 h-6 text-[#e4bc60]" />,
          socials: [
            { platform: "twitter", url: "https://twitter.com/viper" },
            { platform: "youtube", url: "https://youtube.com/viper" }
          ]
        }
      ]
    },
    {
      division: "League of Legends Division",
      members: [
        {
          name: "Sarah Chen",
          nickname: "DragonQueen",
          role: "Mid Laner",
          description: "Challenger rank player with exceptional mechanics",
          status: "Inactive",
          avatar: "/avatars/dragon.jpg",
          gameIcon: <SiLeagueoflegends className="w-6 h-6 text-[#e4bc60]" />,
          socials: [
            { platform: "twitter", url: "https://twitter.com/dragonqueen" },
            { platform: "youtube", url: "https://youtube.com/dragonqueen" }
          ]
        },
        {
          name: "Marcus Thompson",
          nickname: "JungleKing",
          role: "Jungler",
          description: "Aggressive jungler known for early game dominance",
          status: "Inactive",
          avatar: "/avatars/jungle.jpg",
          gameIcon: <SiLeagueoflegends className="w-6 h-6 text-[#e4bc60]" />,
          socials: [
            { platform: "twitch", url: "https://twitch.tv/jungleking" },
            { platform: "twitter", url: "https://twitter.com/jungleking" }
          ]
        }
      ]
    },
    {
      division: "CS2 Division",
      members: [
        {
          name: "Viktor Petrov",
          nickname: "Eagle",
          role: "AWPer",
          description: "Precision sniper with clutch capabilities",
          achievements: ["30+ Clutch rounds won", "Highest AWP accuracy in league"],
          status: "Inactive",
          avatar: "/avatars/eagle.jpg",
          gameIcon: <SiCounterstrike className="w-6 h-6 text-[#e4bc60]" />,
          socials: [
            { platform: "twitter", url: "https://twitter.com/eagle" },
            { platform: "twitch", url: "https://twitch.tv/eagle" }
          ]
        },
        {
          name: "Lucas Silva",
          nickname: "Rush",
          role: "Entry Fragger",
          description: "Aggressive entry fragger with high impact plays",
          achievements: ["Most entry kills 2023", "Tournament MVP"],
          status: "Inactive",
          avatar: "/avatars/rush.jpg",
          gameIcon: <SiCounterstrike className="w-6 h-6 text-[#e4bc60]" />,
          socials: [
            { platform: "twitter", url: "https://twitter.com/rush" },
            { platform: "youtube", url: "https://youtube.com/rush" }
          ]
        }
      ]
    }
  ];

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'twitter': return <FaTwitter />;
      case 'twitch': return <FaTwitch />;
      case 'discord': return <FaDiscord />;
      case 'steam': return <FaSteam />;
      case 'youtube': return <FaYoutube />;
      default: return null;
    }
  };

  const getStatusStyles = (status: PlayerStatus) => {
    switch (status) {
      case 'Active':
        return {
          badge: 'bg-green-500/20 text-green-400',
          glow: 'from-transparent via-green-500/10 to-transparent'
        };
      case 'Inactive':
        return {
          badge: 'bg-red-500/20 text-red-400',
          glow: 'from-transparent via-red-500/10 to-transparent'
        };
      case 'Vacation':
        return {
          badge: 'bg-orange-500/20 text-orange-400',
          glow: 'from-transparent via-orange-500/10 to-transparent'
        };
      default:
        return {
          badge: '',
          glow: 'from-transparent via-transparent to-transparent'
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
          Our Players
        </h1>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Meet the talented individuals who represent StratiX across different competitive scenes
        </p>

        {players.map((division, divisionIndex) => (
          <motion.div
            key={division.division}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: divisionIndex * 0.2 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-8">
              {division.members[0]?.gameIcon}
              <h2 className="text-3xl font-bold text-[#e4bc60]">
                {division.division}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {division.members.map((player, index) => (
                <motion.div
                  key={player.nickname}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + divisionIndex * 0.2 }}
                  className="group relative bg-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${player.status ? getStatusStyles(player.status as PlayerStatus).glow : ''} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="p-6 relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#e4bc60] group-hover:text-[#f1d693] transition-colors">
                          {player.nickname}
                        </h3>
                        <p className="text-gray-400 text-sm">{player.name}</p>
                      </div>
                      {player.status && (
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(player.status as PlayerStatus).badge}`}>
                          {player.status}
                        </span>
                      )}
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-[#e4bc60]/80 mb-2">
                        <HiOutlineChevronRight className="w-4 h-4" />
                        <span>{player.role}</span>
                      </div>
                      <p className="text-gray-300">{player.description}</p>
                    </div>

                    {player.achievements && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-[#e4bc60] mb-2">
                          <GiTrophy className="w-5 h-5" />
                          <span className="font-semibold">Achievements</span>
                        </div>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {player.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1 h-1 bg-[#e4bc60] rounded-full" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex gap-3 mt-4">
                      {player.socials.map((social, i) => (
                        <motion.a
                          key={i}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#e4bc60] transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {getSocialIcon(social.platform)}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#e4bc60] to-[#f1d693] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Teams;
