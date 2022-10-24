export interface NavItem {
  name: string;
  href: string;
}

export const nav: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];
