import { galleryPhotos, type GalleryPhoto } from "@/app/lib/gallery";

// DRAFT Hindi wording: the NGO must approve it in writing.
// Keyed by the photo's file path, so the order always follows gallery.ts.
const hindi: Record<string, { alt: string; caption: string; category: string }> = {
  "/images/gallery/building-entrance.jpg": {
    alt: "बाल देखरेख संस्थान के प्रवेश द्वार पर लगे नाम-पट्ट।",
    caption: "प्रवेश द्वार",
    category: "हमारा परिसर",
  },
  "/images/gallery/garden-trampoline.jpg": {
    alt: "लॉन में आम का पेड़ और सुरक्षा जाली वाला ट्रेंपोलिन।",
    caption: "बगीचा और खेल क्षेत्र",
    category: "हमारा परिसर",
  },
  "/images/gallery/dormitory-1.jpg": {
    alt: "लाल छपी चादरों वाले बिस्तरों की कतारों से सजा एक उजला कमरा।",
    caption: "शयन कक्ष",
    category: "रहने के स्थान",
  },
  "/images/gallery/dormitory-2.jpg": {
    alt: "दीवार के साथ बिस्तरों वाला लंबा कमरा, जिसकी एक ओर खिड़कियाँ हैं।",
    caption: "शयन कक्ष",
    category: "रहने के स्थान",
  },
  "/images/gallery/play-room.jpg": {
    alt: "फर्श पर कैरम बोर्ड और दरियों वाला कमरा।",
    caption: "खेल कक्ष",
    category: "रहने के स्थान",
  },
  "/images/gallery/nursery-cots.jpg": {
    alt: "रंगीन चादर वाले लोहे के पालने और दीवार पर लगे नरम खिलौने।",
    caption: "नर्सरी",
    category: "देखभाल और स्वास्थ्य",
  },
  "/images/gallery/nursery-room.jpg": {
    alt: "देखभाल कक्ष में शिशु वार्मर और प्राथमिक चिकित्सा पेटी।",
    caption: "शिशु देखभाल कक्ष",
    category: "देखभाल और स्वास्थ्य",
  },
  "/images/gallery/health-room.jpg": {
    alt: "जाँच-बिस्तर और प्राथमिक चिकित्सा पेटी वाला चिकित्सा कक्ष।",
    caption: "स्वास्थ्य कक्ष",
    category: "देखभाल और स्वास्थ्य",
  },
  "/images/gallery/learning-hall-1.jpg": {
    alt: "छोटी मेज़-कुर्सियों और कंप्यूटरों की कतार वाला कक्ष।",
    caption: "शिक्षण कक्ष",
    category: "शिक्षा और कौशल",
  },
  "/images/gallery/learning-hall-2.jpg": {
    alt: "मेज़-कुर्सियों वाला कक्ष, जिसकी पिछली दीवार पर कंप्यूटर रखे हैं।",
    caption: "शिक्षण कक्ष",
    category: "शिक्षा और कौशल",
  },
  "/images/gallery/vocational-sewing.jpg": {
    alt: "कार्यशाला में मेज़ों पर रखी दो सिलाई मशीनें।",
    caption: "सिलाई एवं कौशल कोना",
    category: "शिक्षा और कौशल",
  },
  "/images/gallery/dining-hall-1.jpg": {
    alt: "लंबी मेज़ों और काली कुर्सियों वाला हॉल।",
    caption: "व्यावसायिक प्रशिक्षण केंद्र",
    category: "व्यावसायिक प्रशिक्षण केंद्र",
  },
  "/images/gallery/dining-hall-2.jpg": {
    alt: "धातु की छत के नीचे नारंगी कुर्सियों वाली लंबी भोजन मेज़।",
    caption: "व्यावसायिक प्रशिक्षण केंद्र",
    category: "व्यावसायिक प्रशिक्षण केंद्र",
  },
  "/images/gallery/dining-hall-3.jpg": {
    alt: "लंबी भोजन मेज़ के साथ लगी नारंगी कुर्सियाँ।",
    caption: "व्यावसायिक प्रशिक्षण केंद्र",
    category: "व्यावसायिक प्रशिक्षण केंद्र",
  },
};

// Same photos and order as English. A photo with no Hindi entry keeps its English text.
export const galleryPhotosHi: GalleryPhoto[] = galleryPhotos.map((photo) => ({
  ...photo,
  ...(hindi[photo.src] ?? {}),
}));

export const galleryPageHi = {
  description:
    "गोंडा, उत्तर प्रदेश में ग्रामीण विकास समिति चारू के कमरों और सुविधाओं की तस्वीरें।",
  soon: "तस्वीरें जल्द ही यहाँ जोड़ी जाएँगी।",
  privacyNote:
    "ये तस्वीरें केवल कमरों और सुविधाओं को दिखाती हैं। हम ऐसी तस्वीरें प्रकाशित नहीं करते जिनसे हमारी देखरेख में रह रहे बच्चों की पहचान हो सके।",
  all: "सभी",
  filter: "श्रेणी के अनुसार तस्वीरें छाँटें",
};