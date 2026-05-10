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

// 产品卡片点击展开功能 - 弹窗方式
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card[data-product]');
    const modal = document.getElementById('productModal');
    const modalClose = document.querySelector('.modal-close');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalSpecs = document.getElementById('modalSpecs');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalScenarios = document.getElementById('modalScenarios');
    
    // 产品信息数据
    const productData = {
        mic: {
            title: '阵列麦克风',
            titleKey: 'product_mic',
            description: '环形6麦阵列，支持360°全角度拾音与远场交互',
            descriptionKey: 'product_mic_desc',
            specs: [
                { key: 'product_mic_spec_1' },
                { key: 'product_mic_spec_2' },
                { key: 'product_mic_spec_3' },
                { key: 'product_mic_spec_4' },
                { key: 'product_mic_spec_5' },
                { key: 'product_mic_spec_6' }
            ],
            features: [
                { key: 'product_mic_feature_1' },
                { key: 'product_mic_feature_2' },
                { key: 'product_mic_feature_3' },
                { key: 'product_mic_feature_4' },
                { key: 'product_mic_feature_5' }
            ],
            scenarios: [
                { key: 'product_mic_scenario_1' },
                { key: 'product_mic_scenario_2' },
                { key: 'product_mic_scenario_3' },
                { key: 'product_mic_scenario_4' }
            ]
        }
    };
    
    // 获取当前语言
    function getCurrentLang() {
        return localStorage.getItem('preferred-language') || 'zh';
    }
    
    // 更新弹窗内容
    function updateModalContent(productType) {
        const lang = getCurrentLang();
        const data = productData[productType];
        
        if (!data) return;
        
        // 更新标题
        modalTitle.textContent = translations[lang][data.titleKey] || data.title;
        
        // 更新描述
        modalDescription.textContent = translations[lang][data.descriptionKey] || data.description;
        
        // 更新技术规格
        modalSpecs.innerHTML = '';
        data.specs.forEach(spec => {
            const li = document.createElement('li');
            li.textContent = translations[lang][spec.key] || spec.key;
            modalSpecs.appendChild(li);
        });
        
        // 更新核心优势
        modalFeatures.innerHTML = '';
        data.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = translations[lang][feature.key] || feature.key;
            modalFeatures.appendChild(li);
        });
        
        // 更新应用场景
        if (data.scenarios && modalScenarios) {
            modalScenarios.innerHTML = '';
            data.scenarios.forEach(scenario => {
                const li = document.createElement('li');
                li.textContent = translations[lang][scenario.key] || scenario.key;
                modalScenarios.appendChild(li);
            });
        }
    }
    
    // 打开弹窗
    function openModal(productType) {
        updateModalContent(productType);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // 关闭弹窗
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // 点击卡片打开弹窗
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') return;
            const productType = this.getAttribute('data-product');
            openModal(productType);
            e.stopPropagation();
        });
    });
    
    // 点击关闭按钮
    modalClose.addEventListener('click', closeModal);
    
    // 点击背景关闭弹窗
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // ESC键关闭弹窗
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // 语言切换时更新弹窗内容
    const originalSwitchLanguage = switchLanguage;
    switchLanguage = function(lang) {
        originalSwitchLanguage(lang);
        if (modal.classList.contains('active')) {
            const activeCard = document.querySelector('.product-card[data-product].expanded');
            if (activeCard) {
                const productType = activeCard.getAttribute('data-product');
                updateModalContent(productType);
            }
        }
    };
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
        company_name: '誠雲智科 Cy.AI',
        nav_home: '首页',
        nav_products: '产品矩阵',
        nav_services: '服务矩阵',
        nav_partners: '合作伙伴',
        hero_description: '20年+精密设备研发经验，专注感知与人机交互系统，<br>在汽车、物联网、具身智能等领域提供一体化的软硬件产品和服务。',
        section_products: '产品矩阵',
        product_mic: '🎙️ 阵列麦克风',
        product_mic_desc: '环形6麦阵列，支持360°全角度拾音与远场交互',
        product_mic_specs_title: '技术规格',
        product_mic_spec_1: '• 麦克风配置：6麦环形阵列',
        product_mic_spec_2: '• 拾音角度：360°全角度拾音',
        product_mic_spec_3: '• 声源定位：精度±10°以内',
        product_mic_spec_4: '• 远场交互：5米识别率>92%，3米>94%',
        product_mic_spec_5: '• 唤醒率：5米唤醒率>95%',
        product_mic_spec_6: '• 误唤醒率：仅1次/48h',
        product_mic_features_title: '核心优势',
        product_mic_feature_1: '✓ 回声消除（AEC）技术',
        product_mic_feature_2: '✓ 声源定位（DOA）功能',
        product_mic_feature_3: '✓ 波束成形（BF）算法',
        product_mic_feature_4: '✓ 语音增强（SE）处理',
        product_mic_feature_5: '✓ 支持纠正打断及多轮对话',
        product_mic_scenarios_title: '应用场景',
        product_mic_scenario_1: '• 智能机器人语音交互',
        product_mic_scenario_2: '• 智能音箱全角度拾音',
        product_mic_scenario_3: '• 家居中控系统',
        product_mic_scenario_4: '• 远场语音识别场景',
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
        contact_person: '秦先生',
        contact_phone: '电话：',
        contact_email: '邮箱：',
        footer_copyright: '&copy; 2026 上海诚云智科信息科技有限公司 (Cy.AI). 保留所有权利。'
    },
    en: {
        company_name: 'Cy.AI',
        nav_home: 'Home',
        nav_products: 'Products',
        nav_services: 'Services',
        nav_partners: 'Partners',
        hero_description: '20+ years of precision equipment R&D experience, focusing on perception and human-computer interaction systems,<br>providing integrated hardware and software products and services in automotive, IoT, and embodied intelligence fields.',
        section_products: 'Product Matrix',
        product_mic: '🎙️ Microphone Array',
        product_mic_desc: '6-mic ring array supporting 360° omnidirectional pickup and far-field interaction',
        product_mic_specs_title: 'Technical Specifications',
        product_mic_spec_1: '• Microphone Configuration: 6-mic ring array',
        product_mic_spec_2: '• Pickup Angle: 360° omnidirectional pickup',
        product_mic_spec_3: '• Sound Source Localization: Accuracy within ±10°',
        product_mic_spec_4: '• Far-field Interaction: 5m recognition rate >92%, 3m >94%',
        product_mic_spec_5: '• Wake-up Rate: 5m wake-up rate >95%',
        product_mic_spec_6: '• False Wake-up Rate: Only 1 time/48h',
        product_mic_features_title: 'Key Features',
        product_mic_feature_1: '✓ Acoustic Echo Cancellation (AEC)',
        product_mic_feature_2: '✓ Direction of Arrival (DOA) estimation',
        product_mic_feature_3: '✓ Beamforming (BF) algorithm',
        product_mic_feature_4: '✓ Speech Enhancement (SE) processing',
        product_mic_feature_5: '✓ Support for interruption correction and multi-turn dialogue',
        product_mic_scenarios_title: 'Application Scenarios',
        product_mic_scenario_1: '• Smart robot voice interaction',
        product_mic_scenario_2: '• Smart speaker omnidirectional pickup',
        product_mic_scenario_3: '• Smart home control systems',
        product_mic_scenario_4: '• Far-field voice recognition scenarios',
        expand_hint: '👇 Click to view details',
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
        contact_person: 'Mr. Qin',
        contact_phone: 'Phone:',
        contact_email: 'Email:',
        footer_copyright: '&copy; 2026 Shanghai Cy.AI Information Technology Co., Ltd. (Cy.AI). All rights reserved.'
    },
    ja: {
        company_name: '誠雲智科 Cy.AI',
        nav_home: 'ホーム',
        nav_products: '製品マトリクス',
        nav_services: 'サービスマトリクス',
        nav_partners: 'パートナー',
        hero_description: '20年以上の精密機器開発経験、知覚とヒューマンコンピュータインタラクションシステムに特化し、<br>自動車、IoT、具現化知能などの分野で統合的なハードウェアおよびソフトウェア製品とサービスを提供します。',
        section_products: '製品マトリクス',
        product_mic: '🎙️ マイクアレイ',
        product_mic_desc: '6マイク環形アレイ、360°全角度集音と遠距離対話をサポート',
        product_mic_specs_title: '技術仕様',
        product_mic_spec_1: '• マイク構成：6マイク環形アレイ',
        product_mic_spec_2: '• 集音角度：360°全角度集音',
        product_mic_spec_3: '• 音源定位：精度±10°以内',
        product_mic_spec_4: '• 遠距離対話：5m認識率>92%、3m>94%',
        product_mic_spec_5: '• 起動率：5m起動率>95%',
        product_mic_spec_6: '• 誤起動率：48時間に1回のみ',
        product_mic_features_title: '主な特徴',
        product_mic_feature_1: '✓ エコーキャンセレーション（AEC）技術',
        product_mic_feature_2: '• 音源定位（DOA）機能',
        product_mic_feature_3: '✓ ビームフォーミング（BF）アルゴリズム',
        product_mic_feature_4: '✓ 音声強化（SE）処理',
        product_mic_feature_5: '✓ 訂正割り込みおよび多回対話をサポート',
        product_mic_scenarios_title: '応用シーン',
        product_mic_scenario_1: '• スマートロボット音声対話',
        product_mic_scenario_2: '• スマートスピーカー全角度集音',
        product_mic_scenario_3: '• スマートホームコントロールシステム',
        product_mic_scenario_4: '• 遠距離音声認識シーン',
        expand_hint: '👇 クリックして詳細を表示',
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
        contact_person: '秦さん',
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
