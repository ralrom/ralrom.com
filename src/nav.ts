export interface NavItem {
  name: string;
  href: string;
  exactMatch?: boolean;
}

export const nav: NavItem[] = [
  { name: "Home", href: "/", exactMatch: true },
  { name: "Artwork", href: "/artwork/1" },
  { name: "Blog", href: "/blog" },
  // { name: "Book List", href: "/books" },
];
