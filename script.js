// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(102, 126, 234, 0.95)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
});

// 语言切换功能
document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        
        // 更新选中状态
        document.querySelectorAll('.language-option').forEach(opt => {
            opt.classList.remove('active');
        });
        this.classList.add('active');
        
        // 这里可以添加语言切换逻辑
        console.log('切换到语言:', lang);
        
        // 示例：可以根据语言更新页面内容
        if (lang === 'en') {
            // 切换到英文的逻辑
            console.log('Switching to English');
        } else if (lang === 'zh') {
            // 切换到中文的逻辑
            console.log('切换到中文');
        }
    });
});
