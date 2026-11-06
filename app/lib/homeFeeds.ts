type Text = { en: string; hi: string };

// date as YYYY-MM-DD, newest first. href is optional (an external link).
export type Update = { date: string; title: Text; text: Text; href?: string };
// id = the part after "v=" in the YouTube link
export type Video = { id: string; title: Text };
// Only real reviews, with the person's permission to show their name
export type Review = { quote: Text; name: string; role?: Text };

export const updates: Update[] = [];
export const videos: Video[] = [];
export const reviews: Review[] = [];