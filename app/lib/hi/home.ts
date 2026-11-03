import { heroSlides, type HeroSlide } from "@/app/lib/homeSlides";
import { siteNameHi } from "@/app/lib/site";

// Hindi wording supplied by the NGO, except the lines marked below.
// The photos are reused from the English slides, so only the words change.
export const heroSlidesHi: HeroSlide[] = [
  {
    kicker: "गोंडा में दत्तक ग्रहण", // item 6, NGO wording
    title: "हर बच्चे को परिवार का प्यार", // DRAFT: NGO has not answered yet
    buttons: [
      { label: "दत्तक ग्रहण प्रक्रिया", href: "/hi/adoption" },
      { label: "संपर्क करें", href: "/hi/contact", variant: "outline" },
    ],
    image: heroSlides[0].image,
  },
  {
    kicker: "हमारे कार्य में सहयोग करें", // item 6, NGO wording
    title: "किसी बच्चे को प्यार भरा घर दिलाने में मदद करें", // DRAFT
    buttons: [{ label: "अभी दान करें", href: "/hi/donate" }],
    image: heroSlides[1].image,
  },
];

// Item 7, NGO wording. Year confirmed as 2012 by the client.
export const aboutIntroHi = `वर्ष 2012 से ${siteNameHi}, उत्तर प्रदेश के गोंडा जिले में जरूरतमंद बच्चों की देखभाल, संरक्षण, पुनर्वास एवं सर्वांगीण विकास के लिए प्रतिबद्ध है। मिशन वात्सल्य के उद्देश्यों के अनुरूप कार्य करते हुए संस्था देखभाल एवं संरक्षण की आवश्यकता वाले बच्चों को सुरक्षित, स्नेहपूर्ण और सहयोगात्मक वातावरण प्रदान करने के लिए प्रयासरत है।`;


// Item 8, NGO wording
export const ourPromiseHi =
  "करुणामय देखभाल। जिम्मेदार संरक्षण। बिना भेदभाव के समान अवसर।";

// Item 9, NGO wording
export const missionShortHi =
  "प्रत्येक बच्चे के अधिकारों की रक्षा करना, उसकी क्षमताओं का विकास करना तथा उसके लिए सुरक्षित, सहयोगात्मक और गरिमापूर्ण जीवन के अवसर सुनिश्चित करने की दिशा में कार्य करना।";

export const visionShortHi =
  "एक ऐसा समाज जहाँ कोई भी बच्चा उपेक्षित न रहे, प्रत्येक बचपन सुरक्षित हो और हर युवा को अपनी क्षमता के अनुरूप आगे बढ़ने के समान अवसर प्राप्त हों।";

export const impactHi = [
  { value: "[संख्या 1]", label: "[संख्या 1 क्या गिनती है]" },
  { value: "[संख्या 2]", label: "[संख्या 2 क्या गिनती है]" },
  { value: "[संख्या 3]", label: "[संख्या 3 क्या गिनती है]" },
];

// Item 11, NGO wording. Same order as adoptionSteps in app/lib/adoption.ts.
// These differ from the English step titles: see the question below.
export const adoptionStepTitlesHi = [
  "ऑनलाइन पंजीकरण",
  "दस्तावेज़ों का सत्यापन एवं गृह अध्ययन रिपोर्ट (HSR)",
  "बच्चे का रेफरल एवं मिलान",
  "बच्चे के विवरण की समीक्षा एवं स्वीकृति",
  "दत्तक-पूर्व पालक देखभाल (Pre-Adoption Foster Care)",
  "सक्षम प्राधिकारी द्वारा दत्तक ग्रहण आदेश",
  "दत्तक ग्रहण के बाद अनुवर्ती प्रक्रिया",
];

export const storyPlaceholderHi =
  "[एक छोटा कहानी-अंश, जिसे संस्था और परिवार ने स्वीकृत किया हो। कोई नाम, फ़ोटो या ऐसी जानकारी नहीं जिससे किसी बच्चे की पहचान हो सके।]";