import React from "react";
import "./footer.css";
import Link from "./Link";
const arr = [
  {
    linkname: "Albums",
    linkarr: [
      "English",
      "Hindi",
      "Telugu",
      "Punjabi",
      "Tamil",
      "Kannada",
      "Bhojpuri",
      "Malayalam",
      "Marathi",
      "Bengali",
      "Gujarati Songs",
      "Haryanvi",
    ],
  },
  {
    linkname: "Genres",
    linkarr: [
      "Bollywood Songs",
      "Devotional Songs",
      "Ghazals",
      "Bhajan",
      "Patriotic Songs",
      "Kids Songs",
      "Rock Songs",
      "Disco Songs",
      "Sufi Songs",
      "Love Songs",
    ],
  },
  {
    linkname: "Artists",
    linkarr: [
      "Bollywood Songs",
      "Devotional Songs",
      "Ghazals",
      "Bhajan",
      "Patriotic Songs",
      "Kids Songs",
      "Rock Songs",
      "Disco Songs",
      "Sufi Songs",
      "Love Songs",
    ],
  },
  {
    linkname: "New Releases",
    linkarr: [
      "English Songs",
      "Hindi Songs",
      "Punjabi Songs",
      "Tamil Songs",
      "Telugu Songs",
      "Kannada Songs",
      "Bhojpuri Songs",
      "Malayalam Songs",
      "Marathi Songs",
      "Bengali Songs",
      "Assamese Songs",
      "Haryanvi Songs",
      "Gujarati",
      "Odia Songs",
      "Urdu Songs",
    ],
  },
  {
    linkname: "Trending Songs",
    linkarr: [
      "Vibe Song",
      "Hanuman Chalisa",
      "Black & White",
      "Mast Maula",
      "Party All Night",
      "Manike Mage Hithe Tamil",
      "Dil Galti Kar Baitha Hai",
      "Ik Mili Mainu Apsraa",
      "Baarish Ki Jaaye",
      "Raataan Lambiyan",
      "Phoonk Le",
      "Koi Sehri Babu",
      "Mainu Nai Pehchaandi",
      "Jugnu",
      "Manike Mage Hithe",
    ],
  },
  {
    linkname: "Trending Albums",
    linkarr: [
      "Happy Birthday Songs",
      "Sad Songs",
      "PK Songs",
      "Jersey",
      "Bunty Aur Babli 2",
      "Chandigarh Kare Aashiqui",
      "Shershaah",
      "Jai Bhim",
      "Sooryavanshi",
      "Dhamaka",
      "Gaming Music",
      "Atrangi Re",
      "Radhe Shyam",
      "Master Tamil",
      "Pushpa The Rise",
    ],
  },
  {
    linkname: "Lyrics",
    linkarr: [
      "Shiva Tandava Lyrics",
      "Jingle Bells Lyrics",
      "Dynamite Lyrics",
      "Memories Lyrics",
      "Gayatri Mantra",
      "Lag Ja Gale Lyrics",
      "Jai Laxmi Mata Aarti",
      "Laxmi Ji Aarti Lyrics",
      "Perfect Lyrics",
      "Hanuman Chalisa Lyrics",
      "Jana Gana Mana Lyrics",
      "Ganesh Aarti Lyrics",
    ],
  },
  {
    linkname: "Old Songs",
    linkarr: [
      "Old Hindi Songs",
      "Old English Songs",
      "Old Punjabi Songs",
      "Old Telugu Songs",
      "Old Tamil Songs",
      "Old Bhojpuri Songs",
      "Old Bengali Songs",
      "Old Malayalam Songs",
      "Old Kannada Songs",
      "Old Marathi Songs",
      "Old Gujarati Songs",
      "Old Haryanvi Songs",
      "Old Urdu Songs",
      "Old Assamese Songs",
      "Old Rajasthani Songs",
    ],
  },
  {
    linkname: "Video",
    linkarr: [
      "Chal Oye",
      "Waake",
      "Prada",
      "Wakhra Swag",
      "Kalla Sohna Nai",
      "Tibbeyan Ala Jatt",
      "Aafat Waapas",
      "Dheeme Dheeme",
      "Meri Odhe Naal",
      "Hawa Banke",
      "Nain Tere",
      "8 Parche",
    ],
  },
  {
    linkname: "Podcasts",
    linkarr: [
      "Story Podcasts",
      "Motivation Podcasts",
      "MD Motivation",
      "RJ Kartik Motivation",
      "Dua Lipa: At Your Service",
      "Choti Si Kahani",
      "The Robin Sharma Mastery Sessions",
      "Purpose With Gaur Gopal Das",
      "Life Ki Rann Neeti",
      "Raavn",
    ],
  },
];

export default function Footer() {
  return (
    <div className="footer">
      <div className="inner">
        <div class="Row1">
          <strong>Bas Bajna Chahiye Gaana</strong>
          <p>
            aana is the one-stop solution for all your music needs. Gaana offers
            you free, unlimited access to over 30 <br />
            million Hindi Songs, Bollywood Music, English MP3 songs, Regional
            Music & Mirchi Play.
          </p>
        </div>
        <div class="Row2">
          <a
            href="https://www.facebook.com/gaana.com"
            rel="noopener nofollow"
            target="_blank"
          >
            <button class="fc" aria-label="facebook">
              <svg width="10" height="16">
                <path
                  class="svg_color"
                  fill-rule="evenodd"
                  d="M2.932 16L2.91 8.727H0v-2.91h2.9V4c0-2.7 1.67-4 4.078-4 1.154 0 2.145.086 2.434.124v2.82h-1.67c-1.3 0-1.563.623-1.563 1.536v1.337H10l-1.455 2.9H6.2V16H2.932z"
                ></path>
              </svg>
            </button>
          </a>
          <a
            href="https://twitter.com/gaana"
            rel="noopener nofollow"
            target="_blank"
          >
            <button class="tw" aria-label="twitter">
              <svg width="20" height="16">
                <path
                  class="svg_color"
                  fill-rule="evenodd"
                  d="M18.67.296a7.744 7.744 0 01-2.503.978A3.885 3.885 0 0013.292 0C11.12 0 9.355 1.809 9.355 4.04c0 .316.033.623.101.919C6.182 4.79 3.28 3.184 1.336.737A4.112 4.112 0 00.803 2.77c0 1.4.695 2.637 1.753 3.362A3.867 3.867 0 01.77 5.628v.05c0 1.957 1.358 3.59 3.162 3.96a3.838 3.838 0 01-1.78.07c.502 1.605 1.956 2.773 3.68 2.805A7.779 7.779 0 010 14.187 10.965 10.965 0 006.038 16c7.247 0 11.208-6.154 11.208-11.492 0-.176-.003-.351-.01-.523a8.08 8.08 0 001.964-2.09 7.715 7.715 0 01-2.262.635A4.031 4.031 0 0018.67.296"
                ></path>
              </svg>
            </button>
          </a>
        </div>
        <div class="Row3">
          <a href="">
            <span>Advertise on Gaana.com</span>
          </a>
          <a href="">
            <span>Terms of Use</span>
          </a>
          <a href="">
            <span>Privacy Policy</span>
          </a>
          <a href="">
            <span>Partners</span>
          </a>
          <a href="">
            <span>Sitemap</span>
          </a>
          <a href="">
            <span>FAQ</span>
          </a>
        </div>
        <div className="Row4">
        <strong>Quick Links</strong>
          <Link array={arr} />
        </div>
      </div>
    </div>
  );
}
