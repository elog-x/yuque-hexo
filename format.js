const { matterMarkdownAdapter } = require('@elog/cli')

/**
 * 自定义文档处理器
 * @param {DocDetail} doc doc的类型定义为 DocDetail
 */
const format = (doc) => {
  if (doc.body) {
    // hexo note介绍：https://jinnsjj.github.io/uncategorized/hexo-next-note/
    // 将语雀的:::标记转换为 hexo 支持的标记
    const regexTips = /:::(?<type>tips+)\n(?<content>.+)\n:::/gi;
    //
    doc.body = doc.body.replace(regexTips, (match, type, content) => {
      return `{% note default %}\n${content}\n{% endnote %}`;
    });

    const regexNote = /:::(?<type>[a-z]+)\n(?<content>.+)\n:::/gi;
    doc.body = doc.body.replace(regexNote, (match, type, content) => {
      return `{% note ${type} %}\n${content}\n{% endnote %}`;
    });
  }
  return matterMarkdownAdapter(doc);
};

module.exports = {
  format,
};
