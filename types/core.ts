export type QuickLinkConfig = {
  auto_increment: number;
  data: QuickLink[];
};

export type QuickLink = {
  id: number;
  name: string;
  url: string;
  iconLink?: string;
};
