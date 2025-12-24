// 站点数据配置
const stationsData = {
    1: {
        title: '斑竹园镇·红色摇篮',
        images: [
            'PART1/B5E128AAA30B03C13B6B6297F039F2F0.JPG',
            'PART1/D4C071FDA6678F4DF9690758202CAC9F.JPG'
        ],
        description: '在金寨县西南边陲、大别山的腹地，坐落着一个孕育了不朽红色传奇的小镇——斑竹园。这里是"立夏节起义"的重要策源地与爆发地，是红十一军三十二师的诞生摇篮，更是红二十五军坚持革命斗争的核心区域。历史在这里留下了滚烫的印记，写就了"家家有红军，户户有烈士"的壮烈诗篇。'
    },
    2: {
        title: '将军故里·英雄辈出',
        images: [
            'PART2/37426A00438A20B4310C67F4944DF9C7.JPG'
        ],
        description: '小镇里遍布红色印记，保存有红三十二师成立旧址朱氏祠、会师广场等多处革命遗址，这里走出了包括徐立清、漆远渥、肖选进等在内的15位开国将军，以及周维炯、漆德玮等两千多名载入史册的革命烈士。斑竹园所在的金寨县，在革命战争年代有超过10万人参军参战，新中国成立后为修建水库又有10万人搬迁，谱写了无私牺牲的壮歌。'
    },
    3: {
        title: '立夏节起义·革命烽火',
        images: [
            'PART3/1B42ADFE6C7F4B4F6FE557031F8FE25F.JPG',
            'PART3/77D2E9620ED5DB7752A760A69E8E964D.JPG',
            'PART3/7FC6DDF839BE564C89CE35378D8EE9A2.JPG',
            'PART3/B43A7142CA0B0640A82707DBE0FA090E.JPG'
        ],
        images2: [
            'PART3/B8243584B49A483FAFCE028F6D889D19.JPG',
            'PART3/C425E702955635834A54E9842B1FA7F9.JPG',
            'PART3/C8AA8131CB322B6C635C6EED3978EB00.JPG',
            'PART3/E1B825794C7FA4229F7094C6D570CFC7.JPG',
            'PART3/F40DC97C0FFB28323E3D2F72FF6A8E71.JPG'
        ],
        description: '斑竹园的红色历史，始于一声惊雷。1929年5月6日的"立夏节起义"，在金寨境内点燃了武装暴动的烽火，而当时的11个暴动点中，有7个就在斑竹园地区。起义胜利后，中国工农红军第十一军第三十二师在斑竹园的朱氏祠庄严成立，这支由本地子弟周维炯、漆德玮等领导的队伍，日后成长为人民军队的重要源流之一。',
        description2: '1932年秋，红四方面军主力转移后，以原金寨地区部队为基础重建的红二十五军，继续在鄂豫皖根据地坚持艰苦卓绝的斗争。在此期间，斑竹园地区是红二十五军及鄂豫皖省委的重要活动区域。'
    },
    4: {
        title: '会师广场·红军诞生',
        images: [
            'PART4/0859E7A0AC45F880CFF94F0905E0722B.JPG'
        ],
        description: '会师广场与红十一军三十二师成立旧址（朱氏祠）紧密相连，是红色旅游线路上的关键节点。广场得名于斑竹园革命历史上一次重要的红军会师。1929年5月9日，立夏节起义胜利后，各路部队在朱氏祠前的红檀古树下胜利会师，并成立了安徽省第一支红军队伍——中国工农红军第十一军第三十二师。会师广场正是为了纪念这一重大历史事件而建。'
    },
    5: {
        title: '烈士纪念园·英魂永驻',
        images: [
            'PART5/12C71C97CE1BB9BBBC16004E154FF5F4.JPG',
            'PART5/1CDA552612ADE99177063CE929B958A2.JPG',
            'PART5/4D3C726560AF4BD7D82226ED18501320.JPG',
            'PART5/D5AC44AE57FD6D45D361912C0E11C6AF.JPG'
        ],
        description: '斑竹园立夏节起义烈士纪念园是"红色小镇"最重要的纪念场所之一，主要用于集中安葬和缅怀在立夏节起义及后续革命斗争中牺牲的烈士，有记载的烈士墓800余座，还有大量无名烈士合葬墓。烈士牺牲时年龄最大的68岁，最小的仅13岁。'
    },
    6: {
        title: '红色小镇·薪火相传',
        images: [
            'PART6/91C4FD6F34AF0979384B756E616084D4.jpg'
        ],
        description: '如今，斑竹园镇已成功打造为省级"大别山红色小镇"。在传承红色基因的同时，小镇也焕发着现代生机，昔日烽火地，今朝展新颜。斑竹园的故事，是一部由英雄鲜血写就的革命史，也是一曲老区人民不懈奋斗的振兴歌。'
    }
};

// 全局状态
let unlockedStations = new Set();

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    // 每次刷新重置进度
    localStorage.removeItem('red25_unlocked');
    unlockedStations.clear();
    
    // 键盘快捷键
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // 更新进度显示
    updateProgress();
});

// 开始旅程 - 滚动到地图页
function startJourney() {
    // 添加触觉反馈
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    // 播放音效
    playSound('start');
    
    // 平滑滚动到地图页
    const mapPage = document.getElementById('page-map');
    if (mapPage) {
        mapPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// 解锁站点
function unlockStation(stationId) {
    const marker = document.querySelector(`.marker-${stationId}`);
    const markerIcon = marker.querySelector('.marker-icon');
    
    // 添加触觉反馈
    if (navigator.vibrate) {
        navigator.vibrate([50, 100, 50]);
    }
    
    // 播放音效
    playSound('unlock');
    
    // 如果尚未解锁，则解锁
    if (!unlockedStations.has(stationId)) {
        unlockedStations.add(stationId);
        marker.setAttribute('data-unlocked', 'true');
        markerIcon.classList.remove('locked');
        
        // 保存进度
        saveProgress();
        
        // 更新进度显示
        updateProgress();
        
        // 显示解锁动画
        showUnlockAnimation(marker);
    }
    
    // 延迟显示详情模态框
    setTimeout(() => {
        showStationDetail(stationId);
    }, 400);
}

// 显示解锁动画
function showUnlockAnimation(marker) {
    const animation = document.createElement('div');
    animation.className = 'unlock-animation';
    animation.innerHTML = '★';
    animation.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 80px;
        color: #ffd700;
        pointer-events: none;
        animation: unlockPop 0.6s ease forwards;
    `;
    
    marker.appendChild(animation);
    
    // 添加动画样式
    if (!document.getElementById('unlock-animation-style')) {
        const style = document.createElement('style');
        style.id = 'unlock-animation-style';
        style.textContent = `
            @keyframes unlockPop {
                0% {
                    transform: translate(-50%, -50%) scale(0) rotate(0deg);
                    opacity: 1;
                }
                50% {
                    transform: translate(-50%, -50%) scale(1.5) rotate(180deg);
                    opacity: 1;
                }
                100% {
                    transform: translate(-50%, -50%) scale(2) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        animation.remove();
    }, 600);
}

// 显示站点详情
function showStationDetail(stationId) {
    const data = stationsData[stationId];
    if (!data) return;
    
    const modal = document.getElementById('detailModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalGallery = document.getElementById('modalGallery');
    const modalDesc = document.getElementById('modalDesc');
    const modalFooter = document.getElementById('modalFooter');
    
    // 设置标题
    modalTitle.textContent = data.title;
    
    // 检查是否全部解锁
    const isAllUnlocked = unlockedStations.size === 6;
    
    // 特殊处理第三站（有两组图片）
    if (stationId === 3 && data.images2) {
        // 清空画廊区域，重新构建
        const modalBody = modal.querySelector('.modal-body');
        modalBody.innerHTML = '';
        
        // 第一组图片
        const gallery1 = document.createElement('div');
        gallery1.className = 'modal-gallery';
        data.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = data.title;
            img.onclick = () => viewImageFullscreen(imgSrc);
            gallery1.appendChild(img);
        });
        modalBody.appendChild(gallery1);
        
        // 历史介绍
        const desc1 = document.createElement('div');
        desc1.className = 'modal-description';
        desc1.innerHTML = `
            <h4 class="desc-title">历史介绍</h4>
            <p class="desc-content">${data.description}</p>
        `;
        modalBody.appendChild(desc1);
        
        // 第二组图片
        const gallery2 = document.createElement('div');
        gallery2.className = 'modal-gallery';
        gallery2.style.marginTop = '20px';
        data.images2.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = data.title;
            img.onclick = () => viewImageFullscreen(imgSrc);
            gallery2.appendChild(img);
        });
        modalBody.appendChild(gallery2);

        // 第二段历史介绍
        if (data.description2) {
            const desc2 = document.createElement('div');
            desc2.className = 'modal-description';
            desc2.style.marginTop = '20px';
            desc2.innerHTML = `
                <h4 class="desc-title">历史介绍</h4>
                <p class="desc-content">${data.description2}</p>
            `;
            modalBody.appendChild(desc2);
        }
    } else {
        // 其他站点正常显示 - 先恢复标准结构
        const modalBody = modal.querySelector('.modal-body');
        
        // 确保modalBody有标准结构
        if (!modalBody.querySelector('.modal-gallery') || !modalBody.querySelector('.modal-description')) {
            modalBody.innerHTML = `
                <div class="modal-gallery" id="modalGallery"></div>
                <div class="modal-description">
                    <h4 class="desc-title">历史介绍</h4>
                    <p class="desc-content" id="modalDesc"></p>
                </div>
            `;
        }
        
        // 重新获取元素引用
        const gallery = modalBody.querySelector('.modal-gallery');
        const desc = modalBody.querySelector('.desc-content');
        
        gallery.innerHTML = '';
        if (data.images && data.images.length === 1) {
            gallery.classList.add('single');
        } else {
            gallery.classList.remove('single');
        }
        
        if (data.images && data.images.length > 0) {
            data.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = data.title;
                img.onclick = () => viewImageFullscreen(imgSrc);
                gallery.appendChild(img);
            });
        }
        
        // 设置描述
        if (desc) {
            desc.textContent = data.description;
        }
    }
    
    // 修改弹窗底部按钮
    if (isAllUnlocked && stationId === 6) {
        // 全部解锁且是第6站，显示两个选项
        modalFooter.innerHTML = `
            <button class="modal-btn modal-btn-restart" onclick="restartJourney()">
                <span style="margin-right: 5px;">🔄</span>再走一次
            </button>
            <button class="modal-btn modal-btn-end" onclick="goToEndPage()">
                <span style="margin-right: 5px;">✨</span>结束探索
            </button>
        `;
    } else {
        // 正常情况，显示继续探索按钮
        modalFooter.innerHTML = `
            <button class="modal-btn" onclick="closeModal()">继续探索</button>
        `;
    }
    
    // 显示模态框
    modal.classList.add('active');
    
    // 防止背景滚动
    document.body.style.overflow = 'hidden';
}

// 再走一次 - 重置并返回首页
function restartJourney() {
    // 关闭弹窗
    closeModal();
    
    // 重置进度
    unlockedStations.clear();
    localStorage.removeItem('red25_unlocked');
    
    // 重置UI
    document.querySelectorAll('.location-marker').forEach(marker => {
        marker.setAttribute('data-unlocked', 'false');
        marker.querySelector('.marker-icon').classList.add('locked');
    });
    
    updateProgress();
    
    // 滚动到首页
    setTimeout(() => {
        const coverPage = document.getElementById('page-cover');
        if (coverPage) {
            coverPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 300);
    
    // 播放音效
    playSound('start');
}

// 跳转到结束页
function goToEndPage() {
    // 关闭弹窗
    closeModal();
    
    // 播放胜利音效
    playSound('victory');
    
    // 触觉反馈
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100, 50, 100]);
    }
    
    // 滚动到结束页
    setTimeout(() => {
        const endPage = document.getElementById('page-end');
        if (endPage) {
            endPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 300);
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('active');
    
    // 恢复背景滚动
    document.body.style.overflow = '';
    
    // 播放音效
    playSound('close');
}

// 全屏查看图片
function viewImageFullscreen(imgSrc) {
    // 创建全屏查看器
    let viewer = document.getElementById('imageFullscreen');
    if (!viewer) {
        viewer = document.createElement('div');
        viewer.id = 'imageFullscreen';
        viewer.className = 'image-fullscreen';
        viewer.onclick = closeFullscreen;
        document.body.appendChild(viewer);
    }
    
    viewer.innerHTML = `<img src="${imgSrc}" alt="全屏查看">`;
    viewer.classList.add('active');
}

// 关闭全屏查看
function closeFullscreen() {
    const viewer = document.getElementById('imageFullscreen');
    if (viewer) {
        viewer.classList.remove('active');
    }
}

// 更新进度显示
function updateProgress() {
    const countElement = document.getElementById('unlockCount');
    if (countElement) {
        countElement.textContent = unlockedStations.size;
        
        // 如果全部解锁，显示完成动画
        if (unlockedStations.size === 6) {
            showCompletionMessage();
        }
    }
}

// 显示完成消息
function showCompletionMessage() {
    // 不再显示Toast，因为会在弹窗中显示选项
}

// 创建提示消息
function createToast(message, duration = 2000) {
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #c41e1e, #8b0000);
        color: #ffd700;
        padding: 20px 30px;
        border-radius: 15px;
        border: 3px solid #ffd700;
        font-size: 18px;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        animation: toastFadeIn 0.3s ease;
        text-align: center;
        max-width: 80%;
    `;
    
    // 添加动画
    if (!document.getElementById('toast-animation-style')) {
        const style = document.createElement('style');
        style.id = 'toast-animation-style';
        style.textContent = `
            @keyframes toastFadeIn {
                from {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.8);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
            }
            @keyframes toastFadeOut {
                from {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
                to {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.8);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        toast.style.animation = 'toastFadeOut 0.3s ease';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, duration);
    
    return toast;
}

// 保存进度
function saveProgress() {
    try {
        localStorage.setItem('red25_unlocked', JSON.stringify([...unlockedStations]));
    } catch (e) {
        console.log('无法保存进度');
    }
}

// 加载进度
function loadProgress() {
    try {
        const saved = localStorage.getItem('red25_unlocked');
        if (saved) {
            const stations = JSON.parse(saved);
            unlockedStations = new Set(stations);
            
            // 更新UI
            stations.forEach(id => {
                const marker = document.querySelector(`.marker-${id}`);
                if (marker) {
                    marker.setAttribute('data-unlocked', 'true');
                    marker.querySelector('.marker-icon').classList.remove('locked');
                }
            });
            
            updateProgress();
        }
    } catch (e) {
        console.log('无法加载进度');
    }
}

// 重置进度（调试用）
function resetProgress() {
    if (confirm('确定要重置所有进度吗？')) {
        unlockedStations.clear();
        localStorage.removeItem('red25_unlocked');
        
        // 重置UI
        document.querySelectorAll('.location-marker').forEach(marker => {
            marker.setAttribute('data-unlocked', 'false');
            marker.querySelector('.marker-icon').classList.add('locked');
        });
        
        updateProgress();
        
        const toast = createToast('进度已重置', 1500);
        document.body.appendChild(toast);
    }
}

// 不需要手势控制了，使用原生滚动

// 播放音效
function playSound(type) {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // 根据类型设置不同的音效
        switch(type) {
            case 'unlock':
                oscillator.frequency.value = 880;
                oscillator.type = 'sine';
                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
                break;
            case 'start':
                oscillator.frequency.value = 660;
                oscillator.type = 'triangle';
                gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.2);
                break;
            case 'close':
                oscillator.frequency.value = 440;
                oscillator.type = 'sine';
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.15);
                break;
            case 'victory':
                // 胜利音效 - 三个音符
                [880, 1046, 1318].forEach((freq, i) => {
                    const osc = audioContext.createOscillator();
                    const gain = audioContext.createGain();
                    osc.connect(gain);
                    gain.connect(audioContext.destination);
                    osc.frequency.value = freq;
                    osc.type = 'sine';
                    const startTime = audioContext.currentTime + (i * 0.15);
                    gain.gain.setValueAtTime(0.15, startTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);
                    osc.start(startTime);
                    osc.stop(startTime + 0.3);
                });
                break;
        }
    } catch (e) {
        // 音效播放失败，静默处理
    }
}

// 允许正常滚动，只在模态框打开时阻止背景滚动
// 这部分在 showStationDetail 和 closeModal 中处理

// 页面可见性变化时保存进度
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        saveProgress();
    }
});

// 调试信息
console.log('🚩 红二十五军红色故事H5已加载');
console.log('📍 支持功能：');
console.log('  - 点击解锁6个红色站点');
console.log('  - 查看详细历史介绍');
console.log('  - 自动保存浏览进度');
console.log('  - 触觉反馈和音效');
console.log('  - 图片全屏查看');
console.log('💡 调试命令：resetProgress() - 重置所有进度');
