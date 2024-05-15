module.exports = {
  write: {
    platform: 'yuque-pwd',
    // Token 模式（需要语雀超级会员）
    yuque: {
      token: process.env.YUQUE_TOKEN,
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
      onlyPublic: false,
      onlyPublished: true,
    },
    // 账号密码模式
    "yuque-pwd": {
      username: process.env.YUQUE_USERNAME,
      password: process.env.YUQUE_PASSWORD,
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
    }
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './source/_posts',
      filename: 'title',
      format: 'markdown',
      catalog: false,
      frontMatter: {
        enable: true,
        include: ['categories', 'tags', 'title', 'date', 'updated', 'permalink', 'cover', 'description'],
        timeFormat: true,
      }
    }
  },
  image: {
    enable: true,
    platform: 'local',
    local: {
      outputDir: './source/images',
      prefixKey: '/images'
    }
  },
}
