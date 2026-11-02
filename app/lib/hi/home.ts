import { heroSlides, type HeroSlide } from "@/app/lib/homeSlides";

// DRAFT Hindi wording: the NGO must approve every line in writing.
// The photos are reused from the English slides, so only the words change.
export const heroSlidesHi: HeroSlide[] = [
  {
    kicker: "गोंडा में बाल दत्तक ग्रहण",
    title: "हर बच्चे को परिवार का प्यार",
    buttons: [
      { label: "दत्तक ग्रहण प्रक्रिया", href: "/hi/adoption" },
      { label: "संपर्क करें", href: "/hi/contact", variant: "outline" },
    ],
    image: heroSlides[0].image,
  },
  {
    kicker: "हमारे कार्य में सहयोग करें",
    title: "किसी बच्चे को प्यार भरा घर दिलाने में मदद करें",
    buttons: [{ label: "अभी दान करें", href: "/hi/donate" }],
    image: heroSlides[1].image,
  },
];

export const aboutIntroHi =
  "1998 से ग्रामीण विकास समिति चारु गोंडा ज़िले (देवीपाटन मंडल, उत्तर प्रदेश) में ज़रूरतमंद बच्चों की देखभाल, संरक्षण, पुनर्वास और समग्र विकास के लिए प्रतिबद्ध है। मिशन वात्सल्य के उद्देश्यों के अनुरूप कार्य करते हुए हम देखभाल और संरक्षण की आवश्यकता वाले बच्चों को सुरक्षित और स्नेहपूर्ण वातावरण देने का प्रयास करते हैं।";

export const ourPromiseHi =
  "देखभाल करुणा के साथ। संरक्षण ज़िम्मेदारी के साथ। अवसर बिना भेदभाव के।";

export const missionShortHi =
  "हर बच्चे के अधिकारों की रक्षा करना, उसकी क्षमताओं को निखारना, और सुरक्षित, सहयोगी तथा गरिमापूर्ण जीवन के रास्ते बनाना।";

export const visionShortHi =
  "ऐसा समाज जहाँ कोई बच्चा भुलाया न जाए, हर बचपन सुरक्षित हो, और हर युवा को आगे बढ़ने का अवसर मिले।";

export const impactHi = [
  { value: "[संख्या 1]", label: "[संख्या 1 क्या गिनती है]" },
  { value: "[संख्या 2]", label: "[संख्या 2 क्या गिनती है]" },
  { value: "[संख्या 3]", label: "[संख्या 3 क्या गिनती है]" },
];

// Same order as adoptionSteps in app/lib/adoption.ts.
// Official CARA/CARINGS terms: the NGO must confirm each one.
export const adoptionStepTitlesHi = [
  "ऑनलाइन पंजीकरण",
  "दस्तावेज़ सत्यापन और होम स्टडी",
  "पात्रता मूल्यांकन और बच्चे का रेफ़रल",
  "बच्चे की समीक्षा और स्वीकृति",
  "दत्तक-पूर्व फ़ोस्टर केयर और कानूनी औपचारिकताएँ",
  "दत्तक ग्रहण आदेश और कानूनी पूर्णता",
  "दत्तक ग्रहण के बाद अनुवर्ती जाँच",
];

export const storyPlaceholderHi =
  "[एक छोटा कहानी-अंश, जिसे संस्था और परिवार ने स्वीकृत किया हो। कोई नाम, फ़ोटो या ऐसी जानकारी नहीं जिससे किसी बच्चे की पहचान हो सके।]"; 