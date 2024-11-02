export interface NavItem {
  name: string;
  href: string;
}

export const nav: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Artwork", href: "/artwork" },
  { name: "Blog", href: "/blog" },
  { name: "Book List", href: "/books" },
];
