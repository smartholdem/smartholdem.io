// images
import img_law_1 from '~/assets/img/sth/poker.png';
import img_law_2 from '~/assets/img/sth/Heads.png';
import img_law_3 from '~/assets/img/sth/paper.png';
import img_law_4 from '~/assets/img/sth/smart2FA.png';
import img_lotto from '~/assets/img/projects/lottery.png';
import img_hasher from '~/assets/img/projects/hasher.png';
import img_chess from '~/assets/img/projects/chess.png';
import img_racing from '~/assets/img/projects/racing.png';

export default {
    data() {
        return {
            teamData: [
                {
                    id: 1,
                    page: "poker-details",
                    img: img_law_1,
                    name: 'Blockchain Poker',
                    title: 'Gaming platform',
                    type: "game",
                    sm_desc: this.$t('sm_desc1'),
                    social_links: [
                        {link: 'https://playpoker.pro', target: '_blank', icon: 'fa fa-link', name: 'PlayPoker.pro'},
                        {
                            link: 'https://twitter.com/smartholdem',
                            target: '_blank',
                            icon: 'fa-brands fa-twitter',
                            name: 'Twitter'
                        },
                    ],
                    home_lawyer: true,
                    home: true,
                    team_p: true,
                },
                {
                    id: 2,
                    page: "ht-details",
                    img: img_law_2,
                    name: 'Heads or Tails',
                    title: 'PvP game',
                    type: "game",
                    sm_desc: this.$t('sm_desc2'),
                    social_links: [
                        {
                            link: 'https://github.com/smartholdem',
                            target: '_blank',
                            icon: 'fa-brands fa-github',
                            name: 'GitHub'
                        },
                        {
                            link: 'https://twitter.com/smartholdem',
                            target: '_blank',
                            icon: 'fa-brands fa-twitter',
                            name: 'Twitter'
                        },
                    ],
                    home_lawyer: true,
                    home: true,
                    team_p: true,
                },
                {
                    id: 3,
                    page: "paperwallet-details",
                    img: img_law_3,
                    name: 'Paper Wallet',
                    title: 'Generator',
                    type: "service",
                    sm_desc: this.$t('sm_desc3'),
                    social_links: [
                        {
                            link: 'https://github.com/technologiespro/paper-wallet-generator',
                            target: '_blank',
                            icon: 'fa-brands fa-github',
                            name: 'GitHub'
                        },
                        {
                            link: 'https://twitter.com/paperwallettop',
                            target: '_blank',
                            icon: 'fa-brands fa-twitter',
                            name: 'Twitter'
                        },
                        {link: 'https://paperwallet.top', target: '_blank', icon: 'fa fa-link', name: 'paperwallet'},
                    ],
                    home_lawyer: true,
                    home: true,
                    team_p: true,
                },
                {
                    id: 4,
                    page: "2fa-details",
                    img: img_law_4,
                    name: 'Smart2FA  TOTP',
                    title: 'Authenticator',
                    type: "service",
                    sm_desc: this.$t('sm_desc4'),
                    social_links: [
                        {
                            link: 'https://github.com/smartholdem',
                            target: '_blank',
                            icon: 'fa-brands fa-github',
                            name: 'GitHub'
                        },
                        {
                            link: 'https://github.com/technologiespro/smart2fa/releases',
                            target: '_blank',
                            icon: 'fa-brands fa-github',
                            name: 'Twitter'
                        },
                    ],
                    home_lawyer: true,
                    home: true,
                    team_p: true,
                },
                {
                    id: 5,
                    page: "poker-details",
                    img: img_hasher,
                    name: 'Hasher.link',
                    title: 'Math Converter',
                    type: "service",
                    social_links: [
                        {
                            link: 'https://twitter.com/smartholdem',
                            target: '_blank',
                            icon: 'fa-brands fa-twitter',
                            name: 'Twitter'
                        },
                        {link: 'https://paperwallet.top', target: '_blank', icon: 'fa fa-link', name: 'paperwallet'},
                    ],
                    team_p: true,
                },
                {
                    id: 6,
                    page: "poker-details",
                    img: img_lotto,
                    name: 'Lottery',
                    title: 'Crypto',
                    type: "game",
                    social_links: [
                        {
                            link: 'https://twitter.com/smartholdem',
                            target: '_blank',
                            icon: 'fa-brands fa-twitter',
                            name: 'Twitter'
                        },
                        {link: 'https://paperwallet.top', target: '_blank', icon: 'fa fa-link', name: 'paperwallet'},
                    ],
                    team_p: true,
                },
                {
                    id: 7,
                    page: "poker-details",
                    img: img_chess,
                    name: 'Decentralized Chess',
                    title: 'Crypto',
                    type: "game",
                    social_links: [
                        {
                            link: 'https://twitter.com/smartholdem',
                            target: '_blank',
                            icon: 'fa-brands fa-twitter',
                            name: 'Twitter'
                        },
                    ],
                    team_p: true,
                },
                {
                    id: 8,
                    page: "poker-details",
                    img: img_racing,
                    name: 'Horse Racing',
                    title: 'Crypto',
                    type: "game",
                    social_links: [
                        {
                            link: 'https://twitter.com/smartholdem',
                            target: '_blank',
                            icon: 'fa-brands fa-twitter',
                            name: 'Twitter'
                        },
                    ],
                    team_p: true,
                },
            ]
        };
    },
};
