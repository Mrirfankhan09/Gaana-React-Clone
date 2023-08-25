import { createContext } from "react";

const SongsArr = [
    [
      {
        category: "Trending Songs",
        SongName: "Chorni",
        cover:
          "https://a10.gaanacdn.com/gn_img/albums/mGjKrP1W6z/jKrrP07JK6/size_m.jpg",
        path: "audio/Chorni- Sidhu Moose Wala.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "Still Rollin",
        cover:
          "https://a10.gaanacdn.com/gn_img/albums/Dk9KN2KBx1/9KNklvYJ3B/size_m.jpg",
        path: "audio/Still-Rollin_320(PagalWorld).mp3",
      },
      {
        category: "Trending Songs",
        SongName: "Rank",
        cover: "https://covers.djpunjab.pro/image/504537/Rank-1-1.jpg",
        path: "audio/Rank.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "FreeFlow",
        cover: "https://dns2.pendusaab.com/thumbmed/6088.jpg",
        path: "audio/Free-Flow-Jordan-Sandhu.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "Malwa Block",
        cover:
          "https://cover.djpunjab.is/50331/300x700/Malwa-Block-Sidhu-Moose-Wala.jpg",
        path: "audio/Malwa Block.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "Legend",
        cover: "https://covers.djpunjab.pro/image/483301/Legend-1.jpg",
        path: "audio/Legend.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "California",
        cover:
          "https://djpunjab.com.se/upload_file/4/91/400x400/thumb_63d665d159b99.webp",
        path: "audio/California Love - DjPunjab.Com.Se.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "52 Bars",
        cover: "https://cover.djpunjab.is/53216/300x700/Four-You-Karan-Aujla.jpg",
        path: "audio/52 Bars - Karan Aujla.mp3",
      },
    ],
    [
      {
        category: "New Releases",
        SongName: "Calculations",
        cover: "https://dns2.pendusaab.com/thumbmed/6041.jpg",
        path: "audio/Calculations (RiskyJatt.Com).mp3",
      },
      {
        category: "New Releases",
        SongName: "Ilzaam",
        cover: "https://dns2.pendusaab.com/thumbmed/6041.jpg",
        path: "audio/ILzaam-Arjan-Dhillon.mp3",
      },
      {
        category: "New Releases",
        SongName: "Thode Vargia",
        cover: "https://dns2.pendusaab.com/thumbmed/6041.jpg",
        path: "audio/Thode Vargia (RiskyJatt.Com).mp3",
      },
      {
        category: "New Releases",
        SongName: "Long Back",
        cover: "https://dns2.pendusaab.com/thumbmed/6041.jpg",
        path: "audio/Long Back (RiskyJatt.Com).mp3",
      },
      {
        category: "New Releases",
        SongName: "Obsessed",
        cover:
          "https://a10.gaanacdn.com/gn_img/albums/mGjKr1b6zX/jKrPNa1yW6/size_l.jpg",
        path: "audio/Obsessed_320(PagalWorld.com.se).mp3",
      },
      {
        category: "New Releases",
        SongName: "Next Level",
        cover: "https://cover.mr-jatt.im/thumb/504573/Next-Level-1.jpg",
        path: "audio/Next Level.mp3",
      },
    ],
    [
      {
        category: "Top Charts",
        SongName: "Dior",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/_Dior_320(PagalWorld.com.se).mp3",
      },
      {
        category: "Top Charts",
        SongName: "OG",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/_OG_320(PagalWorld.com.se) (1).mp3",
      },
      {
        category: "Top Charts",
        SongName: "Still Rollin",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/Still-Rollin_320(PagalWorld).mp3",
      },
      {
        category: "Top Charts",
        SongName: "The Flow",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/The Flow_320(PagalWorld.com.se).mp3",
      },
      {
        category: "Top Charts",
        SongName: "Cheques",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/Cheques_320(PagalWorld.com.se).mp3",
      },
      {
        category: "Top Charts",
        SongName: "Tu Te Sharab",
        cover: "https://i.scdn.co/image/ab67616d00001e02e610dabe31879fbed28b42f0",
        path: "audio/Tu Te Sharab - Jordan Sandhu.mp3",
      },
    ],
    [
      {
        category: "Trending Songs",
        SongName: "Chorni",
        cover:
          "https://a10.gaanacdn.com/gn_img/albums/mGjKrP1W6z/jKrrP07JK6/size_m.jpg",
        path: "audio/Chorni- Sidhu Moose Wala.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "Still Rollin",
        cover:
          "https://a10.gaanacdn.com/gn_img/albums/Dk9KN2KBx1/9KNklvYJ3B/size_m.jpg",
        path: "audio/Still-Rollin_320(PagalWorld).mp3",
      },
      {
        category: "Trending Songs",
        SongName: "Rank",
        cover: "https://covers.djpunjab.pro/image/504537/Rank-1-1.jpg",
        path: "audio/Rank.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "FreeFlow",
        cover: "https://dns2.pendusaab.com/thumbmed/6088.jpg",
        path: "audio/Free-Flow-Jordan-Sandhu.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "Malwa Block",
        cover:
          "https://cover.djpunjab.is/50331/300x700/Malwa-Block-Sidhu-Moose-Wala.jpg",
        path: "audio/Malwa Block.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "Legend",
        cover: "https://covers.djpunjab.pro/image/483301/Legend-1.jpg",
        path: "audio/Legend.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "California",
        cover:
          "https://djpunjab.com.se/upload_file/4/91/400x400/thumb_63d665d159b99.webp",
        path: "audio/California Love - DjPunjab.Com.Se.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "52 Bars",
        cover: "https://cover.djpunjab.is/53216/300x700/Four-You-Karan-Aujla.jpg",
        path: "audio/52 Bars - Karan Aujla.mp3",
      },
    ],
    [
      {
        category: "New Releases",
        SongName: "Calculations",
        cover: "https://dns2.pendusaab.com/thumbmed/6041.jpg",
        path: "audio/Calculations (RiskyJatt.Com).mp3",
      },
      {
        category: "New Releases",
        SongName: "Ilzaam",
        cover: "https://dns2.pendusaab.com/thumbmed/6041.jpg",
        path: "audio/ILzaam-Arjan-Dhillon.mp3",
      },
      {
        category: "New Releases",
        SongName: "Thode Vargia",
        cover: "https://dns2.pendusaab.com/thumbmed/6041.jpg",
        path: "audio/Thode Vargia (RiskyJatt.Com).mp3",
      },
      {
        category: "New Releases",
        SongName: "Long Back",
        cover: "https://dns2.pendusaab.com/thumbmed/6041.jpg",
        path: "audio/Long Back (RiskyJatt.Com).mp3",
      },
      {
        category: "New Releases",
        SongName: "Obsessed",
        cover:
          "https://a10.gaanacdn.com/gn_img/albums/mGjKr1b6zX/jKrPNa1yW6/size_l.jpg",
        path: "audio/Obsessed_320(PagalWorld.com.se).mp3",
      },
      {
        category: "New Releases",
        SongName: "Next Level",
        cover: "https://cover.mr-jatt.im/thumb/504573/Next-Level-1.jpg",
        path: "audio/Next Level.mp3",
      },
    ],
    [
      {
        category: "Top Charts",
        SongName: "Dior",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/_Dior_320(PagalWorld.com.se).mp3",
      },
      {
        category: "Top Charts",
        SongName: "OG",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/_OG_320(PagalWorld.com.se) (1).mp3",
      },
      {
        category: "Top Charts",
        SongName: "Still Rollin",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/Still-Rollin_320(PagalWorld).mp3",
      },
      {
        category: "Top Charts",
        SongName: "The Flow",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/The Flow_320(PagalWorld.com.se).mp3",
      },
      {
        category: "Top Charts",
        SongName: "Cheques",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/Cheques_320(PagalWorld.com.se).mp3",
      },
      {
        category: "Top Charts",
        SongName: "Tu Te Sharab",
        cover: "https://i.scdn.co/image/ab67616d00001e02e610dabe31879fbed28b42f0",
        path: "audio/Tu Te Sharab - Jordan Sandhu.mp3",
      },
    ],
    [
      {
        category: "Trending Songs",
        SongName: "Chorni",
        cover:
          "https://a10.gaanacdn.com/gn_img/albums/mGjKrP1W6z/jKrrP07JK6/size_m.jpg",
        path: "audio/Chorni- Sidhu Moose Wala.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "Still Rollin",
        cover:
          "https://a10.gaanacdn.com/gn_img/albums/Dk9KN2KBx1/9KNklvYJ3B/size_m.jpg",
        path: "audio/Still-Rollin_320(PagalWorld).mp3",
      },
      {
        category: "Trending Songs",
        SongName: "Rank",
        cover: "https://covers.djpunjab.pro/image/504537/Rank-1-1.jpg",
        path: "audio/Rank.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "FreeFlow",
        cover: "https://dns2.pendusaab.com/thumbmed/6088.jpg",
        path: "audio/Free-Flow-Jordan-Sandhu.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "Malwa Block",
        cover:
          "https://cover.djpunjab.is/50331/300x700/Malwa-Block-Sidhu-Moose-Wala.jpg",
        path: "audio/Malwa Block.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "Legend",
        cover: "https://covers.djpunjab.pro/image/483301/Legend-1.jpg",
        path: "audio/Legend.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "California",
        cover:
          "https://djpunjab.com.se/upload_file/4/91/400x400/thumb_63d665d159b99.webp",
        path: "audio/California Love - DjPunjab.Com.Se.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "52 Bars",
        cover: "https://cover.djpunjab.is/53216/300x700/Four-You-Karan-Aujla.jpg",
        path: "audio/52 Bars - Karan Aujla.mp3",
      },
    ],
    [
      {
        category: "New Releases",
        SongName: "Calculations",
        cover: "https://dns2.pendusaab.com/thumbmed/6041.jpg",
        path: "audio/Calculations (RiskyJatt.Com).mp3",
      },
      {
        category: "New Releases",
        SongName: "Ilzaam",
        cover: "https://dns2.pendusaab.com/thumbmed/6041.jpg",
        path: "audio/ILzaam-Arjan-Dhillon.mp3",
      },
      {
        category: "New Releases",
        SongName: "Thode Vargia",
        cover: "https://dns2.pendusaab.com/thumbmed/6041.jpg",
        path: "audio/Thode Vargia (RiskyJatt.Com).mp3",
      },
      {
        category: "New Releases",
        SongName: "Long Back",
        cover: "https://dns2.pendusaab.com/thumbmed/6041.jpg",
        path: "audio/Long Back (RiskyJatt.Com).mp3",
      },
      {
        category: "New Releases",
        SongName: "Obsessed",
        cover:
          "https://a10.gaanacdn.com/gn_img/albums/mGjKr1b6zX/jKrPNa1yW6/size_l.jpg",
        path: "audio/Obsessed_320(PagalWorld.com.se).mp3",
      },
      {
        category: "New Releases",
        SongName: "Next Level",
        cover: "https://cover.mr-jatt.im/thumb/504573/Next-Level-1.jpg",
        path: "audio/Next Level.mp3",
      },
    ],
    [
      {
        category: "Top Charts",
        SongName: "Dior",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/_Dior_320(PagalWorld.com.se).mp3",
      },
      {
        category: "Top Charts",
        SongName: "OG",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/_OG_320(PagalWorld.com.se) (1).mp3",
      },
      {
        category: "Top Charts",
        SongName: "Still Rollin",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/Still-Rollin_320(PagalWorld).mp3",
      },
      {
        category: "Top Charts",
        SongName: "The Flow",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/The Flow_320(PagalWorld.com.se).mp3",
      },
      {
        category: "Top Charts",
        SongName: "Cheques",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/Cheques_320(PagalWorld.com.se).mp3",
      },
      {
        category: "Top Charts",
        SongName: "Tu Te Sharab",
        cover: "https://i.scdn.co/image/ab67616d00001e02e610dabe31879fbed28b42f0",
        path: "audio/Tu Te Sharab - Jordan Sandhu.mp3",
      },
    ],
    [
      {
        category: "Trending Songs",
        SongName: "Chorni",
        cover:
          "https://a10.gaanacdn.com/gn_img/albums/mGjKrP1W6z/jKrrP07JK6/size_m.jpg",
        path: "audio/Chorni- Sidhu Moose Wala.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "Still Rollin",
        cover:
          "https://a10.gaanacdn.com/gn_img/albums/Dk9KN2KBx1/9KNklvYJ3B/size_m.jpg",
        path: "audio/Still-Rollin_320(PagalWorld).mp3",
      },
      {
        category: "Trending Songs",
        SongName: "Rank",
        cover: "https://covers.djpunjab.pro/image/504537/Rank-1-1.jpg",
        path: "audio/Rank.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "FreeFlow",
        cover: "https://dns2.pendusaab.com/thumbmed/6088.jpg",
        path: "audio/Free-Flow-Jordan-Sandhu.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "Malwa Block",
        cover:
          "https://cover.djpunjab.is/50331/300x700/Malwa-Block-Sidhu-Moose-Wala.jpg",
        path: "audio/Malwa Block.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "Legend",
        cover: "https://covers.djpunjab.pro/image/483301/Legend-1.jpg",
        path: "audio/Legend.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "California",
        cover:
          "https://djpunjab.com.se/upload_file/4/91/400x400/thumb_63d665d159b99.webp",
        path: "audio/California Love - DjPunjab.Com.Se.mp3",
      },
      {
        category: "Trending Songs",
        SongName: "52 Bars",
        cover: "https://cover.djpunjab.is/53216/300x700/Four-You-Karan-Aujla.jpg",
        path: "audio/52 Bars - Karan Aujla.mp3",
      },
    ],
    [
      {
        category: "New Releases",
        SongName: "Calculations",
        cover: "https://dns2.pendusaab.com/thumbmed/6041.jpg",
        path: "audio/Calculations (RiskyJatt.Com).mp3",
      },
      {
        category: "New Releases",
        SongName: "Ilzaam",
        cover: "https://dns2.pendusaab.com/thumbmed/6041.jpg",
        path: "audio/ILzaam-Arjan-Dhillon.mp3",
      },
      {
        category: "New Releases",
        SongName: "Thode Vargia",
        cover: "https://dns2.pendusaab.com/thumbmed/6041.jpg",
        path: "audio/Thode Vargia (RiskyJatt.Com).mp3",
      },
      {
        category: "New Releases",
        SongName: "Long Back",
        cover: "https://dns2.pendusaab.com/thumbmed/6041.jpg",
        path: "audio/Long Back (RiskyJatt.Com).mp3",
      },
      {
        category: "New Releases",
        SongName: "Obsessed",
        cover:
          "https://a10.gaanacdn.com/gn_img/albums/mGjKr1b6zX/jKrPNa1yW6/size_l.jpg",
        path: "audio/Obsessed_320(PagalWorld.com.se).mp3",
      },
      {
        category: "New Releases",
        SongName: "Next Level",
        cover: "https://cover.mr-jatt.im/thumb/504573/Next-Level-1.jpg",
        path: "audio/Next Level.mp3",
      },
    ],
    [
      {
        category: "Top Charts",
        SongName: "Dior",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/_Dior_320(PagalWorld.com.se).mp3",
      },
      {
        category: "Top Charts",
        SongName: "OG",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/_OG_320(PagalWorld.com.se) (1).mp3",
      },
      {
        category: "Top Charts",
        SongName: "Still Rollin",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/Still-Rollin_320(PagalWorld).mp3",
      },
      {
        category: "Top Charts",
        SongName: "The Flow",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/The Flow_320(PagalWorld.com.se).mp3",
      },
      {
        category: "Top Charts",
        SongName: "Cheques",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/Cheques_320(PagalWorld.com.se).mp3",
      },
      {
        category: "Top Charts",
        SongName: "Tu Te Sharab",
        cover: "https://i.scdn.co/image/ab67616d00001e02e610dabe31879fbed28b42f0",
        path: "audio/Tu Te Sharab - Jordan Sandhu.mp3",
      },
    ],
  
    [
      {
        category: "Top Charts",
        SongName: "Dior",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/_Dior_320(PagalWorld.com.se).mp3",
      },
      {
        category: "Top Charts",
        SongName: "OG",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/_OG_320(PagalWorld.com.se) (1).mp3",
      },
      {
        category: "Top Charts",
        SongName: "Still Rollin",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/Still-Rollin_320(PagalWorld).mp3",
      },
      {
        category: "Top Charts",
        SongName: "The Flow",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/The Flow_320(PagalWorld.com.se).mp3",
      },
      {
        category: "Top Charts",
        SongName: "Cheques",
        cover: "https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",
        path: "audio/Cheques_320(PagalWorld.com.se).mp3",
      },
      {
        category: "Top Charts",
        SongName: "Tu Te Sharab",
        cover: "https://i.scdn.co/image/ab67616d00001e02e610dabe31879fbed28b42f0",
        path: "audio/Tu Te Sharab - Jordan Sandhu.mp3",
      },
    ],
  ];
const Songsd = createContext(SongsArr);
export default  Songsd;
