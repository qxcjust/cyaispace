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

// 翻译字典
const translations = {
    zh: {
        company_name: '誠雲智科 CYAISPACE',
        nav_home: '首页',
        nav_products: '产品矩阵',
        nav_services: '服务矩阵',
        nav_partners: '合作伙伴',
        hero_description: '20年+精密设备研发经验，专注感知与人机交互系统，<br>在汽车、物联网、具身智能等领域提供一体化的软硬件产品和服务。',
        section_products: '产品矩阵',
        product_mic: '🎙️ 阵列麦克风',
        product_mic_desc: '高精度麦克风阵列，支持多场景拾音与降噪',
        product_speaker: '🔊 喇叭',
        product_speaker_desc: '高品质音频输出设备，清晰还原声音细节',
        product_camera: '📷 摄像头',
        product_camera_desc: '智能视觉采集设备，支持多场景图像识别',
        product_radar: '📡 毫米波雷达',
        product_radar_desc: '高精度雷达传感器，精准探测与感知',
        product_antenna: '📶 天线',
        product_antenna_desc: '高性能天线模组，稳定可靠的信号传输',
        product_aibrain: '🧠 AIBrain',
        product_aibrain_desc: '人工智能大脑，多模态感知与智能决策',
        section_services: '服务矩阵',
        service_voice: '🎙️ 语音前端处理和优化',
        service_voice_desc: '传统信号处理与DNN算法结合，支持64Hz精度调节、65dB回声消除、25dB噪声抑制，覆盖100+声学场景',
        service_multilang: '💬 多语言会话定制服务',
        service_multilang_desc: '支持多国语言定制开发，方言识别，个性化语音交互方案设计',
        service_llm: '🧠 大模型定制开发服务',
        service_llm_desc: '基于先进大模型技术，提供多意图理解、跨域上下文、高可靠性、低延迟的AI解决方案',
        service_data: '📊 数据采集清洗标定训练',
        service_data_desc: '全流程数据服务：采集、清洗、标定、模型训练，确保高质量数据支撑AI系统',
        section_partners: '合作伙伴',
        partners_note: '（排名不分先后）',
        contact_name: '联系人：',
        contact_phone: '电话：',
        contact_email: '邮箱：',
        footer_copyright: '&copy; 2026 上海诚云智科信息科技有限公司 (Cy.AI). 保留所有权利。'
    },
    en: {
        company_name: 'CYAISPACE',
        nav_home: 'Home',
        nav_products: 'Products',
        nav_services: 'Services',
        nav_partners: 'Partners',
        hero_description: '20+ years of precision equipment R&D experience, focusing on perception and human-computer interaction systems,<br>providing integrated hardware and software products and services in automotive, IoT, and embodied intelligence fields.',
        section_products: 'Product Matrix',
        product_mic: '🎙️ Microphone Array',
        product_mic_desc: 'High-precision microphone array supporting multi-scenario pickup and noise reduction',
        product_speaker: '🔊 Speaker',
        product_speaker_desc: 'High-quality audio output device, clearly reproducing sound details',
        product_camera: '📷 Camera',
        product_camera_desc: 'Intelligent visual capture device supporting multi-scenario image recognition',
        product_radar: '📡 Millimeter Wave Radar',
        product_radar_desc: 'High-precision radar sensor for accurate detection and perception',
        product_antenna: '📶 Antenna',
        product_antenna_desc: 'High-performance antenna module for stable and reliable signal transmission',
        product_aibrain: '🧠 AIBrain',
        product_aibrain_desc: 'Artificial intelligence brain with multi-modal perception and intelligent decision-making',
        section_services: 'Service Matrix',
        service_voice: '🎙️ Voice Front-end Processing & Optimization',
        service_voice_desc: 'Combining traditional signal processing with DNN algorithms, supporting 64Hz precision adjustment, 65dB echo cancellation, 25dB noise suppression, covering 100+ acoustic scenarios',
        service_multilang: '💬 Multi-language Conversation Customization',
        service_multilang_desc: 'Supporting multi-language custom development, dialect recognition, personalized voice interaction solution design',
        service_llm: '🧠 Large Model Custom Development',
        service_llm_desc: 'Based on advanced large model technology, providing multi-intent understanding, cross-domain context, high reliability, low-latency AI solutions',
        service_data: '📊 Data Collection, Cleaning & Training',
        service_data_desc: 'Full-process data services: collection, cleaning, calibration, model training, ensuring high-quality data to support AI systems',
        section_partners: 'Partners',
        partners_note: '(In no particular order)',
        contact_name: 'Contact:',
        contact_phone: 'Phone:',
        contact_email: 'Email:',
        footer_copyright: '&copy; 2026 Shanghai CYAI Information Technology Co., Ltd. (Cy.AI). All rights reserved.'
    },
    ja: {
        company_name: '誠雲智科 CYAISPACE',
        nav_home: 'ホーム',
        nav_products: '製品マトリクス',
        nav_services: 'サービスマトリクス',
        nav_partners: 'パートナー',
        hero_description: '20年以上の精密機器開発経験、知覚とヒューマンコンピュータインタラクションシステムに特化し、<br>自動車、IoT、具現化知能などの分野で統合的なハードウェアおよびソフトウェア製品とサービスを提供します。',
        section_products: '製品マトリクス',
        product_mic: '🎙️ マイクアレイ',
        product_mic_desc: '高精度マイクアレイ、マルチシナリオでの集音とノイズキャンセリングをサポート',
        product_speaker: '🔊 スピーカー',
        product_speaker_desc: '高品質オーディオ出力デバイス、音声の詳細を鮮明に再現',
        product_camera: '📷 カメラ',
        product_camera_desc: 'インテリジェントビジュアルキャプチャデバイス、マルチシナリオ画像認識をサポート',
        product_radar: '📡 ミリ波レーダー',
        product_radar_desc: '高精度レーダーセンサー、正確な検出と知覚',
        product_antenna: '📶 アンテナ',
        product_antenna_desc: '高性能アンテナモジュール、安定した信頼性の高い信号伝送',
        product_aibrain: '🧠 AIBrain',
        product_aibrain_desc: '人工知能ブレイン、マルチモーダル知覚とインテリジェント意思決定',
        section_services: 'サービスマトリクス',
        service_voice: '🎙️ 音声フロントエンド処理と最適化',
        service_voice_desc: '従来の信号処理とDNNアルゴリズムを組み合わせ、64Hz精度調整、65dBエコーキャンセレーション、25dBノイズ抑制をサポート、100以上の音響シナリオをカバー',
        service_multilang: '💬 多言語会話カスタマイズサービス',
        service_multilang_desc: '多国語のカスタム開発、方言認識、パーソナライズされた音声対話ソリューション設計をサポート',
        service_llm: '🧠 大規模モデルカスタム開発サービス',
        service_llm_desc: '先進の大規模モデル技術に基づき、マルチ意図理解、クロスドメインコンテキスト、高信頼性、低遅延のAIソリューションを提供',
        service_data: '📊 データ収集・クリーニング・トレーニング',
        service_data_desc: 'フルプロセスデータサービス：収集、クリーニング、キャリブレーション、モデルトレーニング、AIシステムを支える高品質データを確保',
        section_partners: 'パートナー',
        partners_note: '（順不同）',
        contact_name: '連絡先：',
        contact_phone: '電話：',
        contact_email: 'メール：',
        footer_copyright: '&copy; 2026 上海誠雲智科信息技術有限公司 (Cy.AI). 全著作権所有。'
    }
};

// 语言切换功能
function switchLanguage(lang) {
    // 保存用户偏好
    localStorage.setItem('preferred-language', lang);
    
    // 更新HTML lang属性
    const langMap = {
        'zh': 'zh-CN',
        'en': 'en',
        'ja': 'ja'
    };
    document.documentElement.lang = langMap[lang] || 'zh-CN';
    
    // 更新所有带有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // 更新选中状态
    document.querySelectorAll('.language-option').forEach(opt => {
        opt.classList.remove('active');
        if (opt.getAttribute('data-lang') === lang) {
            opt.classList.add('active');
        }
    });
    
    console.log('语言切换到:', lang);
}

// 初始化语言切换
document.addEventListener('DOMContentLoaded', function() {
    // 获取用户偏好或默认中文
    const preferredLang = localStorage.getItem('preferred-language') || 'zh';
    switchLanguage(preferredLang);
    
    // 绑定语言选项点击事件
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
});
