// mathjax-pjax.js
// Butterfly + PJAX + MathJax v3 完全兼容

// 确保 MathJax 配置在 head 已经加载
// 如果还没加载，请在 head 加上下面配置（仅一次）：
/*

<script>
window.MathJax = {
  tex: {
    inlineMath: [['$', '$']],
    displayMath: [['$$', '$$']],
    processEscapes: true,
    packages: {'[+]': ['ams']}
  },
  options: {
    skipHtmlTags: ['script','noscript','style','textarea','pre','code']
  }
};
</script>
<script src="https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.2/es5/tex-chtml.js" defer></script>
*/

(function() {
  // 等待 DOM 加载完成
  document.addEventListener('DOMContentLoaded', function() {
    // 首次页面渲染公式
    if (window.MathJax) {
      MathJax.typesetPromise();
    }
  });

  // PJAX 完成后渲染新文章公式
  document.addEventListener('pjax:complete', function() {
    if (window.MathJax) {
      MathJax.typesetPromise();
    }
  });

})();
