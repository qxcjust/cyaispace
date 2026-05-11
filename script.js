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
    const modalSpecsTitle = document.getElementById('modalSpecsTitle');
    const modalFeaturesTitle = document.getElementById('modalFeaturesTitle');
    const modalSpecs = document.getElementById('modalSpecs');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalScenarios = document.getElementById('modalScenarios');
    const scenariosTitle = document.getElementById('scenariosTitle');
    
    // 产品信息数据
    const productData = {
        mic: {
            title: '阵列麦克风',
            titleKey: 'product_mic',
            shortDescription: '具身和人形机器人全链路语音交互模组',
            shortDescriptionKey: 'product_mic_short_desc',
            description: '对具身和人形机器人专门开发的全链路语音交互模组，包括拾音降噪、回声消除、本地唤醒、360度声源定位、本地语音指令识别、语音合成、在线语音识别、语义理解、大模型交互等功能',
            descriptionKey: 'product_mic_desc',
            specsTitleKey: 'product_mic_specs_title',
            featuresTitleKey: 'product_mic_features_title',
            specs: [
                { key: 'product_mic_spec_1' },
                { key: 'product_mic_spec_2' },
                { key: 'product_mic_spec_3' },
                { key: 'product_mic_spec_4' },
                { key: 'product_mic_spec_5' }
            ],
            features: [
                { key: 'product_mic_feature_1' },
                { key: 'product_mic_feature_2' },
                { key: 'product_mic_feature_3' },
                { key: 'product_mic_feature_4' },
                { key: 'product_mic_feature_5' },
                { key: 'product_mic_feature_6' },
                { key: 'product_mic_feature_7' },
                { key: 'product_mic_feature_8' }
            ]
        },
        speaker: {
            title: '高品质喇叭',
            titleKey: 'product_speaker',
            shortDescription: '高保真音频输出单元',
            shortDescriptionKey: 'product_speaker_short_desc',
            description: '专为机器人和智能设备设计的高品质喇叭，额定功率≥5W，阻抗8Ω，频响范围165Hz-20kHz，支持宽温工作（-25℃至+60℃），通过严格的环境可靠性测试',
            descriptionKey: 'product_speaker_desc',
            specsTitleKey: 'product_speaker_specs_title',
            featuresTitleKey: 'product_speaker_features_title',
            specs: [
                { key: 'product_speaker_spec_1' },
                { key: 'product_speaker_spec_2' },
                { key: 'product_speaker_spec_3' },
                { key: 'product_speaker_spec_4' },
                { key: 'product_speaker_spec_5' },
                { key: 'product_speaker_spec_6' }
            ],
            features: [
                { key: 'product_speaker_feature_1' },
                { key: 'product_speaker_feature_2' },
                { key: 'product_speaker_feature_3' },
                { key: 'product_speaker_feature_4' },
                { key: 'product_speaker_feature_5' },
                { key: 'product_speaker_feature_6' }
            ]
        },
        camera: {
            title: '摄像头',
            titleKey: 'product_camera',
            shortDescription: '具身AI 3D视觉传感模块',
            shortDescriptionKey: 'product_camera_short_desc',
            description: '专为具身机器人设计的摄像头，集成RGB彩色成像、深度感知和3D数据采集功能。支持1280×960@60fps深度分辨率和1920×1200@60fps RGB分辨率，深度精度<15m（0.1%精度），IP69K防水等级，工作温度-20℃~60℃，单电缆设计，支持Nvidia Nano Super/Jetson Orin/NXP i.Mx95等平台',
            descriptionKey: 'product_camera_desc',
            specsTitleKey: 'product_camera_specs_title',
            featuresTitleKey: 'product_camera_features_title',
            specs: [
                { key: 'product_camera_spec_1' },
                { key: 'product_camera_spec_2' },
                { key: 'product_camera_spec_3' },
                { key: 'product_camera_spec_4' },
                { key: 'product_camera_spec_5' },
                { key: 'product_camera_spec_6' }
            ],
            features: [
                { key: 'product_camera_feature_1' },
                { key: 'product_camera_feature_2' },
                { key: 'product_camera_feature_3' },
                { key: 'product_camera_feature_4' },
                { key: 'product_camera_feature_5' },
                { key: 'product_camera_feature_6' }
            ]
        },
        radar: {
            title: '激光雷达',
            titleKey: 'product_radar',
            shortDescription: '超广角激光雷达,精准探测与感知',
            shortDescriptionKey: 'product_radar_short_desc',
            description: '超广角激光雷达,无运动部件,可靠耐久。探测距离0.1m-50m,超大广角140°×100°,极小盲区10cm。造型小巧灵活,支持卫星架构模组化设计。IP6K7/IP6K9K防护等级,工作温度-40°C~85°C,广泛应用于人形机器人、辅助驾驶、智慧城市、智慧高速、智慧轨交等领域',
            descriptionKey: 'product_radar_desc',
            specsTitleKey: 'product_radar_specs_title',
            featuresTitleKey: 'product_radar_features_title',
            specs: [
                { key: 'product_radar_spec_1' },
                { key: 'product_radar_spec_2' },
                { key: 'product_radar_spec_3' },
                { key: 'product_radar_spec_4' },
                { key: 'product_radar_spec_5' },
                { key: 'product_radar_spec_6' }
            ],
            features: [
                { key: 'product_radar_feature_1' },
                { key: 'product_radar_feature_2' },
                { key: 'product_radar_feature_3' },
                { key: 'product_radar_feature_4' }
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
        
        // 更新规格标题
        const specsTitleKey = data.specsTitleKey || 'product_mic_specs_title';
        modalSpecsTitle.textContent = translations[lang][specsTitleKey];
        modalSpecsTitle.setAttribute('data-i18n', specsTitleKey);
        
        // 更新特性标题
        const featuresTitleKey = data.featuresTitleKey || 'product_mic_features_title';
        modalFeaturesTitle.textContent = translations[lang][featuresTitleKey];
        modalFeaturesTitle.setAttribute('data-i18n', featuresTitleKey);
        
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
        if (data.scenarios && scenariosTitle) {
            scenariosSection.style.display = 'block';
            const scenariosTitleKey = data.scenariosTitleKey || 'product_mic_scenarios_title';
            scenariosTitle.textContent = translations[lang][scenariosTitleKey];
            scenariosTitle.setAttribute('data-i18n', scenariosTitleKey);
            modalScenarios.innerHTML = '';
            data.scenarios.forEach(scenario => {
                const li = document.createElement('li');
                li.textContent = translations[lang][scenario.key] || scenario.key;
                modalScenarios.appendChild(li);
            });
        } else if (scenariosSection) {
            scenariosSection.style.display = 'none';
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
        product_mic: '🎙️ 机器人交互板',
        product_mic_short_desc: '具身和人形机器人全链路语音交互模组',
        product_mic_desc: '对具身和人形机器人专门开发的全链路语音交互模组，包括拾音降噪、回声消除、本地唤醒、360度声源定位、本地语音指令识别、语音合成、在线语音识别、语义理解、大模型交互等功能',
        product_mic_specs_title: '硬件规格',
        product_mic_spec_1: '• 支持12V输入',
        product_mic_spec_2: '• 支持百兆网口交互语音（网口版）',
        product_mic_spec_3: '• 语音采集：4mic环阵采集，每通道采样率16KHz，采样精度16bit',
        product_mic_spec_4: '• 喇叭播放：双通道最高5W播放',
        product_mic_spec_5: '• 支持USB烧录、调试',
        product_mic_features_title: '软件功能',
        product_mic_feature_1: '✓ 拾音降噪：AI智慧降噪，基于场景动态判断降噪力度',
        product_mic_feature_2: '✓ 回声消除：含深度学习的回声消除，针对非线性处理能力更强',
        product_mic_feature_3: '✓ 本地唤醒：本地唤醒拉起云端交互',
        product_mic_feature_4: '✓ 360度声源定位：360度确定交互人位置，交互更自然',
        product_mic_feature_5: '✓ 本地语音指令识别：指令式词条识别',
        product_mic_feature_6: '✓ 本地与在线语音识别：支持中英文等',
        product_mic_feature_7: '✓ 语义理解：支持自定义技能',
        product_mic_feature_8: '✓ 大模型交互：中枢大模型，低延迟更可靠',
        product_speaker: '🔊 高品质喇叭',
        product_speaker_short_desc: '高保真音频输出单元',
        product_speaker_desc: '专为机器人和智能设备设计的高品质喇叭，额定功率≥5W，阻抗8Ω，频响范围165Hz-20kHz，支持宽温工作（-25℃至+60℃），通过严格的环境可靠性测试',
        product_speaker_specs_title: '硬件规格',
        product_speaker_spec_1: '• 尺寸：40mm直径 × 23.5mm高度',
        product_speaker_spec_2: '• 标称阻抗：8±15% Ω (1.0KHz / 2.83V)',
        product_speaker_spec_3: '• 输入功率：额定≥5W / 最大6W',
        product_speaker_spec_4: '• 共振频率：165±20% Hz',
        product_speaker_spec_5: '• 音压位准：79±3 dB (1W/1M)',
        product_speaker_spec_6: '• 有效频宽：165Hz ~ 20KHz',
        product_speaker_features_title: '性能规范',
        product_speaker_feature_1: '✓ 高保真音质：失真率≤5%，清晰还原音频细节',
        product_speaker_feature_2: '✓ 无异常音设计：140-5KHz全频段无杂音',
        product_speaker_feature_3: '✓ 宽温工作能力：-25℃至+60℃稳定运行',
        product_speaker_feature_4: '✓ 高可靠性：通过48小时连续负荷测试',
        product_speaker_feature_5: '✓ 环境适应性强：耐高温、耐寒、耐湿试验全部通过',
        product_speaker_feature_6: '✓ 耐用性佳：通过跌落测试，结构稳固',
        product_camera: '📷 摄像头',
        product_camera_short_desc: '具身AI 3D视觉传感模块',
        product_camera_desc: '专为具身机器人设计的摄像头，集成RGB彩色成像、深度感知和3D数据采集功能。支持1280×960@60fps深度分辨率和1920×1200@60fps RGB分辨率，深度精度<15m（0.1%精度），IP69K防水等级，工作温度-20℃~60℃，单电缆设计，支持Nvidia Nano Super/Jetson Orin/NXP i.Mx95等平台',
        product_camera_specs_title: '硬件规格',
        product_camera_spec_1: '• TOF分辨率：1280×960 @60fps',
        product_camera_spec_2: '• RGB分辨率：1920×1200 @60fps',
        product_camera_spec_3: '• 深度感知范围：<15m（0.1%精度）',
        product_camera_spec_4: '• 视场角：TOF HFOV 85.6°±3° / RGB HFOV 67.2°±3°',
        product_camera_spec_5: '• 防护等级：IP69K防水防尘',
        product_camera_spec_6: '• 工作温度：-20℃~60℃',
        product_camera_features_title: '性能规范',
        product_camera_feature_1: '✓ 单电缆设计：极低延迟设计，仅1根电缆传输数据和供电',
        product_camera_feature_2: '✓ 高精度深度感知：单光子雪崩技术，0.1%精度',
        product_camera_feature_3: '✓ 内置传感器：6DOF IMU，气压计/磁力计（可选）',
        product_camera_feature_4: '✓ 颜色校准：3D校准基础上增加颜色校准',
        product_camera_feature_5: '✓ 宽平台支持：支持Nvidia Nano Super/Jetson Orin/NXP i.Mx95',
        product_camera_feature_6: '✓ 汽车级可靠性:通过严格环境测试,结构稳固',
        product_radar: '🎯 激光雷达',
        product_radar_short_desc: '超广角激光雷达,精准探测与感知',
        product_radar_desc: '超广角激光雷达,无运动部件,可靠耐久。探测距离0.1m-50m,超大广角140°×100°,极小盲区10cm。造型小巧灵活,支持卫星架构模组化设计。IP6K7/IP6K9K防护等级,工作温度-40°C~85°C,广泛应用于人形机器人、辅助驾驶、智慧城市、智慧高速、智慧轨交等领域',
        product_radar_specs_title: '核心参数',
        product_radar_spec_1: '• 探测距离：0.1m~50m (30m@10%)',
        product_radar_spec_2: '• 视场角(HxV)：140°×100°',
        product_radar_spec_3: '• 角分辨率(HxV)：0.55°×0.52°',
        product_radar_spec_4: '• 帧率：10FPS',
        product_radar_spec_5: '• 工作温度：-40°C~85°C',
        product_radar_spec_6: '• 防水及防尘等级：IP6K7(机体), IP6K9K(视窗)',
        product_radar_features_title: '核心亮点',
        product_radar_feature_1: '✓ 电子扫描：无运动部件，可靠耐久',
        product_radar_feature_2: '✓ 造型小巧：灵活布置，轻松集成',
        product_radar_feature_3: '✓ 超大广角：140°×100°，极小盲区10cm，最远探测50m',
        product_radar_feature_4: '✓ 卫星架构模组化设计：实现系统级最优化',
        product_radar_scenarios_title: '应用领域',
        product_radar_scenario_1: '🚗 辅助驾驶/自动驾驶',
        product_radar_scenario_2: '🏙️ 智慧城市',
        product_radar_scenario_3: '🛣️ 智慧高速',
        product_radar_scenario_4: '🚆 智慧轨交',
        product_radar_scenario_5: ' 智慧港口',
        product_radar_scenario_6: '🚢 智慧航运',
        product_radar_scenario_7: '⛏️ 无人矿卡',
        product_radar_scenario_8: '🤖 泛机器人',
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
        product_mic: '🎙️ Robot Interactive Board',
        product_mic_short_desc: 'Full-link voice interaction module for embodied and humanoid robots',
        product_mic_desc: 'Full-link voice interaction module specifically developed for embodied and humanoid robots, including pickup noise reduction, echo cancellation, local wake-up, 360° sound source localization, local voice command recognition, voice synthesis, online voice recognition, semantic understanding, large model interaction, etc.',
        product_mic_specs_title: 'Hardware Specifications',
        product_mic_spec_1: '• Support 12V input',
        product_mic_spec_2: '• Support 100Mbps Ethernet for voice interaction (Ethernet version)',
        product_mic_spec_3: '• Voice Capture: 4-mic ring array, each channel 16KHz sampling rate, 16bit precision',
        product_mic_spec_4: '• Speaker Playback: Dual-channel up to 5W playback',
        product_mic_spec_5: '• Support USB burning and debugging',
        product_mic_features_title: 'Software Features',
        product_mic_feature_1: '✓ Pickup Noise Reduction: AI smart noise reduction, dynamically adjusts based on scene',
        product_mic_feature_2: '✓ Echo Cancellation: Deep learning-based echo cancellation, stronger non-linear processing capability',
        product_mic_feature_3: '✓ Local Wake-up: Local wake-up triggers cloud interaction',
        product_mic_feature_4: '✓ 360° Sound Source Localization: 360° positioning of the interactant for more natural interaction',
        product_mic_feature_5: '✓ Local Voice Command Recognition: Command-style keyword recognition',
        product_mic_feature_6: '✓ Local & Online Voice Recognition: Supports Chinese, English, etc.',
        product_mic_feature_7: '✓ Semantic Understanding: Supports custom skills',
        product_mic_feature_8: '✓ Large Model Interaction: Central large model, lower latency and more reliable',
        expand_hint: 'Details',
        product_speaker: '🔊 High-Quality Speaker',
        product_speaker_short_desc: 'Hi-Fi Audio Output Unit',
        product_speaker_desc: 'High-quality speaker designed for robots and smart devices, rated power ≥5W, impedance 8Ω, frequency response 165Hz-20kHz, wide temperature operation (-25℃ to +60℃), passed strict environmental reliability tests',
        product_speaker_specs_title: 'Hardware Specifications',
        product_speaker_spec_1: '• Dimensions: 40mm diameter × 23.5mm height',
        product_speaker_spec_2: '• Normal Impedance: 8±15% Ω (1.0KHz / 2.83V)',
        product_speaker_spec_3: '• Input Power: Rated ≥5W / Max 6W',
        product_speaker_spec_4: '• Resonance Frequency: 165±20% Hz',
        product_speaker_spec_5: '• Sound Pressure Level: 79±3 dB (1W/1M)',
        product_speaker_spec_6: '• Frequency Range: 165Hz ~ 20KHz',
        product_speaker_features_title: 'Performance Specifications',
        product_speaker_feature_1: '✓ Hi-Fi Sound Quality: Distortion ≤5%, clearly reproduces audio details',
        product_speaker_feature_2: '✓ No Abnormal Sound Design: No noise across 140-5KHz full frequency range',
        product_speaker_feature_3: '✓ Wide Temperature Operation: Stable operation from -25℃ to +60℃',
        product_speaker_feature_4: '✓ High Reliability: Passed 48-hour continuous load test',
        product_speaker_feature_5: '✓ Strong Environmental Adaptability: Passed high temperature, low temperature, and humidity tests',
        product_speaker_feature_6: '✓ Excellent Durability: Passed drop test with robust structure',
        product_camera: '📷 Camera',
        product_camera_short_desc: 'Embodied AI 3D Vision Sensor Module',
        product_camera_desc: 'Camera designed for embodied robots, integrating RGB color imaging, depth perception, and 3D data collection. Supports 1280×960@60fps depth resolution and 1920×1200@60fps RGB resolution, depth accuracy <15m (0.1% precision), IP69K waterproof rating, operating temperature -20℃~60℃, single cable design, compatible with Nvidia Nano Super/Jetson Orin/NXP i.Mx95 platforms',
        product_camera_specs_title: 'Hardware Specifications',
        product_camera_spec_1: '• TOF Resolution: 1280×960 @60fps',
        product_camera_spec_2: '• RGB Resolution: 1920×1200 @60fps',
        product_camera_spec_3: '• Depth Perception Range: <15m (0.1% accuracy)',
        product_camera_spec_4: '• Field of View: TOF HFOV 85.6°±3° / RGB HFOV 67.2°±3°',
        product_camera_spec_5: '• Protection Rating: IP69K waterproof and dustproof',
        product_camera_spec_6: '• Operating Temperature: -20℃~60℃',
        product_camera_features_title: 'Performance Specifications',
        product_camera_feature_1: '✓ Single Cable Design: Ultra-low latency design, only 1 cable for data and power transmission',
        product_camera_feature_2: '✓ High-Precision Depth Perception: Single photon avalanche technology, 0.1% accuracy',
        product_camera_feature_3: '✓ Built-in Sensors: 6DOF IMU, barometer/magnetometer (optional)',
        product_camera_feature_4: '✓ Color Calibration: Color calibration on top of 3D calibration',
        product_camera_feature_5: '✓ Wide Platform Support: Compatible with Nvidia Nano Super/Jetson Orin/NXP i.Mx95',
        product_camera_feature_6: '✓ Automotive-Grade Reliability: Passed strict environmental tests with robust structure',
        product_radar: '🎯 LiDAR',
        product_radar_short_desc: 'Ultra-Wide Angle LiDAR for Accurate Detection',
        product_radar_desc: 'Ultra-wide angle LiDAR with no moving parts, reliable and durable. Detection range 0.1m-50m, ultra-wide FOV 140°×100°, minimal blind zone 10cm. Compact and flexible, supports satellite architecture modular design. IP6K7/IP6K9K protection rating, operating temperature -40°C~85°C, widely used in humanoid robots, ADAS, smart cities, smart highways, smart rail transit, and more',
        product_radar_specs_title: 'Core Parameters',
        product_radar_spec_1: '• Detection Range: 0.1m~50m (30m@10%)',
        product_radar_spec_2: '• Field of View (HxV): 140°×100°',
        product_radar_spec_3: '• Angular Resolution (HxV): 0.55°×0.52°',
        product_radar_spec_4: '• Frame Rate: 10FPS',
        product_radar_spec_5: '• Operating Temperature: -40°C~85°C',
        product_radar_spec_6: '• Waterproof & Dustproof Rating: IP6K7 (Body), IP6K9K (Window)',
        product_radar_features_title: 'Core Highlights',
        product_radar_feature_1: '✓ Electronic Scanning: No moving parts, reliable and durable',
        product_radar_feature_2: '✓ Compact Design: Flexible placement, easy integration',
        product_radar_feature_3: '✓ Ultra-Wide Angle: 140°×100°, minimal blind zone 10cm, max detection 50m',
        product_radar_feature_4: '✓ Satellite Architecture Modular Design: Achieves system-level optimization',
        product_radar_scenarios_title: 'Application Areas',
        product_radar_scenario_1: '🚗 ADAS/Autonomous Driving',
        product_radar_scenario_2: '🏙️ Smart City',
        product_radar_scenario_3: '🛣️ Smart Highway',
        product_radar_scenario_4: '🚆 Smart Rail Transit',
        product_radar_scenario_5: '🏗️ Smart Port',
        product_radar_scenario_6: '🚢 Smart Shipping',
        product_radar_scenario_7: '⛏️ Unmanned Mining Trucks',
        product_radar_scenario_8: '🤖 General Robotics',
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
        product_mic: '🎙️ ロボットインタラクティブボード',
        product_mic_short_desc: '具現化およびヒューマノイドロボット向けフルリンク音声対話モジュール',
        product_mic_desc: '具現化およびヒューマノイドロボット向けに特別に開発されたフルリンク音声対話モジュール。集音ノイズ低減、エコーキャンセレーション、ローカル起動、360度音源定位、ローカル音声コマンド認識、音声合成、オンライン音声認識、意味理解、大規模モデル対話などの機能を含む',
        product_mic_specs_title: 'ハードウェア仕様',
        product_mic_spec_1: '• 12V入力対応',
        product_mic_spec_2: '• 音声対話用100Mbpsイーサネット対応（イーサネット版）',
        product_mic_spec_3: '• 音声収集：4マイク環形アレイ、各チャンネル16KHzサンプリングレート、16bit精度',
        product_mic_spec_4: '• スピーカー再生：デュアルチャンネル最大5W再生',
        product_mic_spec_5: '• USB書き込み・デバッグ対応',
        product_mic_features_title: 'ソフトウェア機能',
        product_mic_feature_1: '✓ 集音ノイズ低減：AIスマートノイズ低減、シーンに応じて動的に調整',
        product_mic_feature_2: '✓ エコーキャンセレーション：ディープラーニングベースのエコーキャンセレーション、非線形処理能力がより強力',
        product_mic_feature_3: '✓ ローカル起動：ローカル起動がクラウド対話をトリガー',
        product_mic_feature_4: '✓ 360度音源定位：360度で対話者の位置を特定、より自然な対話',
        product_mic_feature_5: '✓ ローカル音声コマンド認識：コマンド式キーワード認識',
        product_mic_feature_6: '✓ ローカル＆オンライン音声認識：中国語、英語などをサポート',
        product_mic_feature_7: '✓ 意味理解：カスタムスキルをサポート',
        product_mic_feature_8: '✓ 大規模モデル対話：中央大規模モデル、低遅延でより信頼性が高い',
        expand_hint: '詳細',
        product_speaker: '🔊 高品質スピーカー',
        product_speaker_short_desc: 'ハイファイ音声出力ユニット',
        product_speaker_desc: 'ロボットおよびスマートデバイス向けに設計された高品質スピーカー、定格出力≥5W、インピーダンス8Ω、周波数特性165Hz-20kHz、広温度帯動作（-25℃〜+60℃）、厳しい環境信頼性試験をクリア',
        product_speaker_specs_title: 'ハードウェア仕様',
        product_speaker_spec_1: '• 寸法：直径40mm × 高さ23.5mm',
        product_speaker_spec_2: '• 標称インピーダンス：8±15% Ω (1.0KHz / 2.83V)',
        product_speaker_spec_3: '• 入力電力：定格≥5W / 最大6W',
        product_speaker_spec_4: '• 共振周波数：165±20% Hz',
        product_speaker_spec_5: '• 音圧レベル：79±3 dB (1W/1M)',
        product_speaker_spec_6: '• 有効周波数帯域：165Hz ~ 20KHz',
        product_speaker_features_title: '性能仕様',
        product_speaker_feature_1: '✓ ハイファイ音質：歪み率≤5%、音声詳細を鮮明に再現',
        product_speaker_feature_2: '✓ 異常音なし設計：140-5KHz全周波数帯域でノイズなし',
        product_speaker_feature_3: '✓ 広温度帯動作：-25℃から+60℃まで安定動作',
        product_speaker_feature_4: '✓ 高信頼性：48時間連続負荷試験をクリア',
        product_speaker_feature_5: '✓ 環境適応性が強い：耐高温、耐寒、耐湿試験すべてクリア',
        product_speaker_feature_6: '✓ 耐久性が優れる：落下試験をクリア、構造が頑丈',
        product_camera: '📷 カメラ',
        product_camera_short_desc: '具身AI 3Dビジョンセンサーモジュール',
        product_camera_desc: '具身ロボット向けに設計されたカメラ、RGBカラーイメージング、深度認識、3Dデータ収集機能を統合。1280×960@60fps深度解像度と1920×1200@60fps RGB解像度をサポート、深度精度<15m（0.1%精度）、IP69K防水等級、動作温度-20℃~60℃、単一ケーブル設計、Nvidia Nano Super/Jetson Orin/NXP i.Mx95プラットフォームに対応',
        product_camera_specs_title: 'ハードウェア仕様',
        product_camera_spec_1: '• TOF解像度：1280×960 @60fps',
        product_camera_spec_2: '• RGB解像度：1920×1200 @60fps',
        product_camera_spec_3: '• 深度認識範囲：<15m（0.1%精度）',
        product_camera_spec_4: '• 視野角：TOF HFOV 85.6°±3° / RGB HFOV 67.2°±3°',
        product_camera_spec_5: '• 防護等級：IP69K防水防塵',
        product_camera_spec_6: '• 動作温度：-20℃~60℃',
        product_camera_features_title: '性能仕様',
        product_camera_feature_1: '✓ 単一ケーブル設計：超低遅延設計、データと電力伝送に1本のケーブルのみ',
        product_camera_feature_2: '✓ 高精度深度認識：単一光子アバランシェ技術、0.1%精度',
        product_camera_feature_3: '✓ 内蔵センサー：6DOF IMU、気圧計/磁力計（オプション）',
        product_camera_feature_4: '✓ カラーキャリブレーション：3Dキャリブレーションの上にカラーキャリブレーション',
        product_camera_feature_5: '✓ 幅広いプラットフォームサポート：Nvidia Nano Super/Jetson Orin/NXP i.Mx95に対応',
        product_camera_feature_6: '✓ 車載グレードの信頼性：厳格な環境試験をクリア、構造が頑丈',
        product_camera_scenario_1: ' 自動運転とADASシステム',
        product_camera_scenario_2: '🤖 マシンビジョンとロボティクス',
        product_camera_scenario_3: '🚁 ドローン',
        product_camera_scenario_4: '🏭 AGV自動誘導車',
        product_radar: '🎯 LiDAR（レーザーレーダー）',
        product_radar_short_desc: '超広角LiDAR、正確な検出と知覚',
        product_radar_desc: '超広角LiDAR、可動部なし、信頼性と耐久性に優れます。検出距離0.1m-50m、超広角140°×100°、最小盲ゾーン10cm。コンパクトで柔軟なデザイン、サテライトアーキテクチャモジュラー設計をサポート。IP6K7/IP6K9K防護等級、動作温度-40°C~85°C、人型ロボット、ADAS、スマートシティ、スマートハイウェイ、スマートレール交通などの分野で広く使用されています',
        product_radar_specs_title: '核心パラメータ',
        product_radar_spec_1: '• 検出距離：0.1m~50m (30m@10%)',
        product_radar_spec_2: '• 視野角(HxV)：140°×100°',
        product_radar_spec_3: '• 角分解能(HxV)：0.55°×0.52°',
        product_radar_spec_4: '• フレームレート：10FPS',
        product_radar_spec_5: '• 動作温度：-40°C~85°C',
        product_radar_spec_6: '• 防水防塵等級：IP6K7(本体), IP6K9K(窓)',
        product_radar_features_title: '核心ハイライト',
        product_radar_feature_1: '✓ 電子スキャン：可動部なし、信頼性と耐久性に優れる',
        product_radar_feature_2: '✓ コンパクトデザイン：柔軟な配置、簡単な統合',
        product_radar_feature_3: '✓ 超広角：140°×100°、最小盲ゾーン10cm、最遠検出50m',
        product_radar_feature_4: '✓ サテライトアーキテクチャモジュラー設計：システムレベルの最適化を実現',
        product_radar_scenarios_title: '応用分野',
        product_radar_scenario_1: ' ADAS/自動運転',
        product_radar_scenario_2: '️ スマートシティ',
        product_radar_scenario_3: '🛣️ スマートハイウェイ',
        product_radar_scenario_4: ' スマートレール交通',
        product_radar_scenario_5: '🏗️ スマートポート',
        product_radar_scenario_6: '🚢 スマートシッピング',
        product_radar_scenario_7: ' 無人鉱山トラック',
        product_radar_scenario_8: '🤖 汎用ロボット',
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
