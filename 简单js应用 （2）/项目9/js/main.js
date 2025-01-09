const follower = document.getElementById('follower');
const trails = [];
const numTrails = 5;

// 创建拖尾效果
for (let i = 0; i < numTrails; i++) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);
    trails.push(trail);
}

// 存储历史位置
const positions = Array(numTrails).fill({ x: 0, y: 0 });

document.addEventListener('mousemove', (e) => {
    // 更新主跟随元素位置
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';

    // 更新位置历史
    positions.unshift({ x: e.clientX, y: e.clientY });
    positions.pop();

    // 更新拖尾元素位置
    trails.forEach((trail, index) => {
        const pos = positions[index];
        trail.style.left = pos.x + 'px';
        trail.style.top = pos.y + 'px';
        trail.style.opacity = 1 - (index / numTrails);
    });
}); 