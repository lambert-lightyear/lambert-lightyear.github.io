// ============== 极简安全版：点击爱心特效（不盖层） ==============
document.addEventListener('click', function(e) {
    // 创建一个爱心元素
    const heart = document.createElement('div');
    heart.innerText = '🤍'; // 用白色爱心适配黑背景
    heart.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        font-size: 24px;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: top 1s ease, opacity 1s ease;
    `;
    
    // 添加到页面
    document.body.appendChild(heart);
    
    // 触发动画
    setTimeout(() => {
        heart.style.top = (e.clientY - 50) + 'px';
        heart.style.opacity = '0';
    }, 10);
    
    // 移除元素
    setTimeout(() => {
        document.body.removeChild(heart);
    }, 1100);
});

// ============== 滚动动画逻辑 ==============
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.post-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        observer.observe(card);
    });
});