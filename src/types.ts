export interface LinkItem {
  id: string;
  title: string;
  url: string;
}

export interface SectionData {
  id: string;
  title: string;
  links: LinkItem[];
}
