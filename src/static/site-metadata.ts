interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Cycling Page',
  siteUrl: 'https://cycling.ppqq.me',
  logo: '/images/favicon.png',
  description: '骑行记录',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://blog.ppqq.me',
    },
    {
      name: 'About',
      url: 'https://ppqq.me',
    },
  ],
};

export default data;
