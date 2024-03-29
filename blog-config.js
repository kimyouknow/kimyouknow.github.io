require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  lang: 'ko',
  siteName: `Yunho.blog`,
  author: 'Yunho(kimyouknow)',
  description: `안녕하세요. 프론트엔드 개발자 김윤호입니다. 고민과 문제 해결 과정을 공유하고 있습니다.`,
  siteUrl: 'https://kimyouknow.github.io',
  profileImage: `profile-image.png`,
  mainOgImage: 'main-og-image.png',
  keywords: ['개발블로그', '문제해결', 'gatsby'],
  favicon: 'static/pencil.png',
  social: {
    email: 'kimyouknow@naver.com',
    github: `https://github.com/kimyouknow`,
    til: 'https://github.com/kimyouknow/TIL',
  },
  seo: {
    google: process.env.GATSBY_SEO_GOOGLE,
    naver: process.env.GATSBY_SEO_NAVER,
  },
  gtag: {
    ga: process.env.GATSBY_ANALYTICS_GOOGLE,
  },
  utterances: {
    src: 'https://utteranc.es/client.js',
    repo: 'kimyouknow/kimyouknow.github.io',
    issueTerm: 'pathname',
    theme: 'github-light',
    label: '💬 comments',
    crossorigin: 'anonymous',
    async: 'true',
  },
  giscus: {
    src: 'https://giscus.app/client.js',
    data_repo: 'kimyouknow/kimyouknow.github.io',
    data_repo_id: 'R_kgDOH5iCbA',
    data_category: 'General',
    data_category_id: 'DIC_kwDOH5iCbM4CUKFl',
    data_mapping: 'og:title',
    data_strict: '0',
    data_reactions_enabled: '1',
    data_emit_metadata: '0',
    data_input_position: 'top',
    data_theme: 'preferred_color_scheme',
    data_lang: 'ko',
    crossorigin: 'anonymous',
    async: 'true',
  },
}
