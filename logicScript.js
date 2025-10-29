 // CODE: Raihan_official0307 X Visualcodepo
 // Jangan hapus credit ini ya kak :D
 // Hargai karya creator dengan tidak mengklaim sebagai milik Anda
 // Pelanggaran akan ditandai
 // Jangan merubah nama author (Raihan_official0307 X Visualcodepo) pada script ini
 // Karya ini dibuat sepenuhnya oleh kami
       
       function showModal2() {
            document.getElementById('welcomeModal1').classList.remove('active');
            setTimeout(() => {
                document.getElementById('welcomeModal2').classList.add('active');
            }, 300);
        }

        function closeModal2() {
            document.getElementById('welcomeModal2').classList.remove('active');
        }

        function toggleSettings() {
            const panel = document.getElementById('settingsPanel');
            panel.classList.toggle('active');
        }

        function closeSettings() {
            document.getElementById('settingsPanel').classList.remove('active');
        }

        function refreshVisualizer() {
            location.reload();
        }

        class AudioVisualizer {
            constructor() {
                this.canvas = document.getElementById('visualizer');
                this.ctx = this.canvas.getContext('2d');
                this.particlesCanvas = document.getElementById('particlesBg');
                this.particlesCtx = this.particlesCanvas.getContext('2d');
                this.audioContext = null;
                this.analyser = null;
                this.source = null;
                this.dataArray = null;
                this.bufferLength = null;
                this.animationId = null;
                this.particlesAnimationId = null;
                this.audio = new Audio();
                this.isPlaying = false;
                this.isMicrophoneActive = false;
                this.visualizationMode = 'bars';
                this.particles = [];
                this.bgParticles = [];
                this.time = 0;
                this.colorTheme = 'purple';
                this.sensitivity = 5;
                
                this.colorThemes = {
                    purple: ['#667eea', '#764ba2'],
                    pink: ['#f093fb', '#f5576c'],
                    blue: ['#4facfe', '#00f2fe'],
                    green: ['#43e97b', '#38f9d7'],
                    sunset: ['#fa709a', '#fee140']
                };
                
                this.setupCanvas();
                this.setupEventListeners();
                this.setupAudio();
                this.initBackgroundParticles();
                this.animateBackgroundParticles();
            }
            
            setupCanvas() {
                const resizeCanvas = () => {
                    const container = this.canvas.parentElement;
                    this.canvas.width = container.clientWidth;
                    this.canvas.height = container.clientHeight;
                    this.particlesCanvas.width = window.innerWidth;
                    this.particlesCanvas.height = window.innerHeight;
                };
                
                resizeCanvas();
                window.addEventListener('resize', resizeCanvas);
            }
            
            initBackgroundParticles() {
                for (let i = 0; i < 50; i++) {
                    this.bgParticles.push({
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        vx: (Math.random() - 0.5) * 0.5,
                        vy: (Math.random() - 0.5) * 0.5,
                        size: Math.random() * 2 + 1,
                        opacity: Math.random() * 0.5 + 0.2
                    });
                }
            }
            
            animateBackgroundParticles() {
                this.particlesAnimationId = requestAnimationFrame(() => this.animateBackgroundParticles());
                
                this.particlesCtx.fillStyle = 'rgba(10, 10, 10, 0.05)';
                this.particlesCtx.fillRect(0, 0, this.particlesCanvas.width, this.particlesCanvas.height);
                
                this.bgParticles.forEach(particle => {
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                    
                    if (particle.x < 0) particle.x = this.particlesCanvas.width;
                    if (particle.x > this.particlesCanvas.width) particle.x = 0;
                    if (particle.y < 0) particle.y = this.particlesCanvas.height;
                    if (particle.y > this.particlesCanvas.height) particle.y = 0;
                    
                    this.particlesCtx.beginPath();
                    this.particlesCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    this.particlesCtx.fillStyle = `rgba(102, 126, 234, ${particle.opacity})`;
                    this.particlesCtx.fill();
                });
            }
            
            setupAudio() {
                this.audio.addEventListener('loadedmetadata', () => {
                    document.getElementById('playBtn').disabled = false;
                    this.updateTrackInfo();
                });
                
                this.audio.addEventListener('timeupdate', () => {
                    this.updateTimeDisplay();
                });
                
                this.audio.addEventListener('ended', () => {
                    this.isPlaying = false;
                    this.updatePlayButton();
                });
            }
 // CODE: Raihan_official0307 X Visualcodepo
 // Jangan hapus credit ini ya kak :D
 // Hargai karya creator dengan tidak mengklaim sebagai milik Anda
 // Pelanggaran akan ditandai
 // Jangan merubah nama author (Raihan_official0307 X Visualcodepo) pada script ini
 // Karya ini dibuat sepenuhnya oleh kami
            setupEventListeners() {
                
                document.getElementById('audioFile').addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        this.loadAudioFile(file);
                    }
                });
                
                document.getElementById('playBtn').addEventListener('click', () => {
                    this.togglePlayPause();
                });
              
                document.getElementById('micBtn').addEventListener('click', () => {
                    this.toggleMicrophone();
                });
                
                
                document.getElementById('volumeSlider').addEventListener('input', (e) => {
                    this.audio.volume = e.target.value / 100;
                });
                
              
                document.querySelectorAll('.mode-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
                        e.currentTarget.classList.add('active');
                        this.visualizationMode = e.currentTarget.dataset.mode;
                        
                        if (this.visualizationMode === 'particles') {
                            this.initParticles();
                        }
                    });
                });
                
                
                document.querySelectorAll('.color-preset').forEach(preset => {
                    preset.addEventListener('click', (e) => {
                        document.querySelectorAll('.color-preset').forEach(p => p.classList.remove('active'));
                        e.target.classList.add('active');
                        this.colorTheme = e.target.dataset.theme;
                    });
                });
                
                document.getElementById('sensitivitySlider').addEventListener('input', (e) => {
                    this.sensitivity = parseInt(e.target.value);
                });
            }
            
            async loadAudioFile(file) {
                const url = URL.createObjectURL(file);
                this.audio.src = url;
               
                document.getElementById('trackName').textContent = file.name.replace(/\.[^/.]+$/, "");
                document.getElementById('trackInfo').classList.add('active');
                document.getElementById('welcomeMessage').style.display = 'none';
                
                if (!this.audioContext) {
                    this.initAudioContext();
                }
                
                if (this.source) {
                    this.source.disconnect();
                }
                this.source = this.audioContext.createMediaElementSource(this.audio);
                this.source.connect(this.analyser);
                this.analyser.connect(this.audioContext.destination);
            }
            
            async toggleMicrophone() {
                const micBtn = document.getElementById('micBtn');
                
                if (!this.isMicrophoneActive) {
                    try {
                        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                        
                        if (!this.audioContext) {
                            this.initAudioContext();
                        }
                        
                        if (this.source) {
                            this.source.disconnect();
                        }
                        
                        this.source = this.audioContext.createMediaStreamSource(stream);
                        this.source.connect(this.analyser);
                        
                        this.isMicrophoneActive = true;
                        micBtn.classList.add('active');
                        micBtn.innerHTML = '<i class="fas fa-microphone-slash"></i> Stop Mic';
                        
                        document.getElementById('welcomeMessage').style.display = 'none';
                        document.getElementById('trackInfo').classList.remove('active');
                        
                        this.startVisualization();
                    } catch (err) {
                        console.error('Error accessing microphone:', err);
                        alert('Could not access microphone. Please check permissions.');
                    }
                } else {
                    if (this.source && this.source.mediaStream) {
                        this.source.mediaStream.getTracks().forEach(track => track.stop());
                    }
                    
                    this.isMicrophoneActive = false;
                    micBtn.classList.remove('active');
                    micBtn.innerHTML = '<i class="fas fa-microphone"></i> Microphone';
                    
                    this.stopVisualization();
                }
            }
            
            initAudioContext() {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                this.analyser = this.audioContext.createAnalyser();
                this.analyser.fftSize = 256;
                this.bufferLength = this.analyser.frequencyBinCount;
                this.dataArray = new Uint8Array(this.bufferLength);
            }
 // CODE: Raihan_official0307 X Visualcodepo
 // Jangan hapus credit ini ya kak :D
 // Hargai karya creator dengan tidak mengklaim sebagai milik Anda
 // Pelanggaran akan ditandai
 // Jangan merubah nama author (Raihan_official0307 X Visualcodepo) pada script ini
 // Karya ini dibuat sepenuhnya oleh kami
            togglePlayPause() {
                if (this.isPlaying) {
                    this.audio.pause();
                    this.stopVisualization();
                } else {
                    this.audio.play();
                    this.startVisualization();
                }
                
                this.isPlaying = !this.isPlaying;
                this.updatePlayButton();
            }
            
            updatePlayButton() {
                const playIcon = document.getElementById('playIcon');
                const playText = document.getElementById('playText');
                
                if (this.isPlaying) {
                    playIcon.className = 'fas fa-pause';
                    playText.textContent = 'Pause';
                } else {
                    playIcon.className = 'fas fa-play';
                    playText.textContent = 'Play';
                }
            }
            
            updateTrackInfo() {
                const duration = this.formatTime(this.audio.duration);
                document.getElementById('timeDisplay').textContent = `0:00 / ${duration}`;
            }
            
            updateTimeDisplay() {
                const current = this.formatTime(this.audio.currentTime);
                const duration = this.formatTime(this.audio.duration);
                document.getElementById('timeDisplay').textContent = `${current} / ${duration}`;
            }
            
            formatTime(seconds) {
                if (isNaN(seconds)) return '0:00';
                const mins = Math.floor(seconds / 60);
                const secs = Math.floor(seconds % 60);
                return `${mins}:${secs.toString().padStart(2, '0')}`;
            }
            
            startVisualization() {
                if (!this.animationId) {
                    this.animate();
                }
            }
            
            stopVisualization() {
                if (this.animationId) {
                    cancelAnimationFrame(this.animationId);
                    this.animationId = null;
                }
            }
// CODE: Raihan_official0307 X Visualcodepo
 // Jangan hapus credit ini ya kak :D
 // Hargai karya creator dengan tidak mengklaim sebagai milik Anda
 // Pelanggaran akan ditandai
 // Jangan merubah nama author (Raihan_official0307 X Visualcodepo) pada script ini
 // Karya ini dibuat sepenuhnya oleh kami
            animate() {
                this.animationId = requestAnimationFrame(() => this.animate());
                
                if (!this.analyser) return;
                
                this.analyser.getByteFrequencyData(this.dataArray);
                this.time += 0.01;
                
              
                this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                
                switch (this.visualizationMode) {
                    case 'bars':
                        this.drawBars();
                        break;
                    case 'wave':
                        this.drawWave();
                        break;
                    case 'circular':
                        this.drawCircular();
                        break;
                    case 'particles':
                        this.drawParticles();
                        break;
                }
            }
            
            drawBars() {
                const barWidth = (this.canvas.width / this.bufferLength) * 2.5;
                let x = 0;
                const colors = this.colorThemes[this.colorTheme];
                
                for (let i = 0; i < this.bufferLength; i++) {
                    const barHeight = (this.dataArray[i] / 255) * this.canvas.height * 0.7 * (this.sensitivity / 5);
                    
                    const gradient = this.ctx.createLinearGradient(0, this.canvas.height, 0, this.canvas.height - barHeight);
                    const hue = (i / this.bufferLength) * 360 + this.time * 50;
                    gradient.addColorStop(0, colors[0] + '88');
                    gradient.addColorStop(0.5, colors[1] + 'cc');
                    gradient.addColorStop(1, colors[0] + 'ff');
                    
                    this.ctx.fillStyle = gradient;
                    this.ctx.fillRect(x, this.canvas.height - barHeight, barWidth - 2, barHeight);
                    
                    this.ctx.fillStyle = colors[1] + '33';
                    this.ctx.fillRect(x, this.canvas.height - barHeight - 5, barWidth - 2, 3);
                    
                    if (this.dataArray[i] > 200) {
                        this.ctx.shadowBlur = 20;
                        this.ctx.shadowColor = colors[0];
                        this.ctx.fillRect(x, this.canvas.height - barHeight, barWidth - 2, barHeight);
                        this.ctx.shadowBlur = 0;
                    }
                    
                    x += barWidth;
                }
            }
            
            drawWave() {
                const colors = this.colorThemes[this.colorTheme];
                this.ctx.lineWidth = 3;
                
                for (let wave = 0; wave < 3; wave++) {
                    this.ctx.strokeStyle = colors[wave % 2] + Math.floor(255 - wave * 50).toString(16);
                    this.ctx.beginPath();
                    
                    const sliceWidth = this.canvas.width / this.bufferLength;
                    let x = 0;
                    
                    for (let i = 0; i < this.bufferLength; i++) {
                        const v = this.dataArray[i] / 255;
                        const y = this.canvas.height / 2 + (v - 0.5) * this.canvas.height * 0.5 * (this.sensitivity / 5) + wave * 20;
                        
                        if (i === 0) {
                            this.ctx.moveTo(x, y);
                        } else {
                            this.ctx.lineTo(x, y);
                        }
                        
                        x += sliceWidth;
                    }
                    
                    this.ctx.stroke();
                }
               
                this.ctx.shadowBlur = 20;
                this.ctx.shadowColor = colors[0];
                this.ctx.stroke();
                this.ctx.shadowBlur = 0;
            }
            
            drawCircular() {
                const centerX = this.canvas.width / 2;
                const centerY = this.canvas.height / 2;
                const radius = Math.min(centerX, centerY) - 50;
                const colors = this.colorThemes[this.colorTheme];
                
                
                this.ctx.save();
                this.ctx.font = 'bold clamp(12px, 3vw, 18px) Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
               
                const textGradient = this.ctx.createLinearGradient(centerX - 100, centerY, centerX + 100, centerY);
                textGradient.addColorStop(0, colors[0]);
                textGradient.addColorStop(1, colors[1]);
                
                this.ctx.fillStyle = textGradient;
                this.ctx.shadowBlur = 20;
                this.ctx.shadowColor = colors[0];
                this.ctx.fillText('VISUALCODEPO', centerX, centerY);
                this.ctx.restore();
                
                for (let i = 0; i < this.bufferLength; i++) {
                    const angle = (i / this.bufferLength) * Math.PI * 2;
                    const barHeight = (this.dataArray[i] / 255) * radius * 0.5 * (this.sensitivity / 5);
                    
                    const x1 = centerX + Math.cos(angle) * radius;
                    const y1 = centerY + Math.sin(angle) * radius;
                    const x2 = centerX + Math.cos(angle) * (radius + barHeight);
                    const y2 = centerY + Math.sin(angle) * (radius + barHeight);
                    
                    const gradient = this.ctx.createLinearGradient(x1, y1, x2, y2);
                    gradient.addColorStop(0, colors[0] + '88');
                    gradient.addColorStop(1, colors[1] + 'ff');
                    
                    this.ctx.strokeStyle = gradient;
                    this.ctx.lineWidth = 3;
                    this.ctx.beginPath();
                    this.ctx.moveTo(x1, y1);
                    this.ctx.lineTo(x2, y2);
                    this.ctx.stroke();
                }
                
              
                for (let ring = 0; ring < 3; ring++) {
                    this.ctx.beginPath();
                    this.ctx.arc(centerX, centerY, radius + ring * 15, 0, Math.PI * 2);
                    this.ctx.strokeStyle = colors[ring % 2] + '33';
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
 // CODE: Raihan_official0307 X Visualcodepo
 // Jangan hapus credit ini ya kak :D
 // Hargai karya creator dengan tidak mengklaim sebagai milik Anda
 // Pelanggaran akan ditandai
 // Jangan merubah nama author (Raihan_official0307 X Visualcodepo) pada script ini
 // Karya ini dibuat sepenuhnya oleh kami
            initParticles() {
                this.particles = [];
                for (let i = 0; i < 150; i++) {
                    this.particles.push({
                        x: Math.random() * this.canvas.width,
                        y: Math.random() * this.canvas.height,
                        vx: (Math.random() - 0.5) * 2,
                        vy: (Math.random() - 0.5) * 2,
                        size: Math.random() * 3 + 1,
                        hue: Math.random() * 360,
                        connections: []
                    });
                }
            }
            
            drawParticles() {
                if (this.particles.length === 0) {
                    this.initParticles();
                }
                
                const colors = this.colorThemes[this.colorTheme];
                const average = this.dataArray.reduce((a, b) => a + b) / this.bufferLength;
                const intensity = average / 255;
                
                this.particles.forEach((particle, index) => {
                    
                    particle.x += particle.vx * (1 + intensity * 3 * (this.sensitivity / 5));
                    particle.y += particle.vy * (1 + intensity * 3 * (this.sensitivity / 5));
                    
                    
                    if (particle.x < 0) particle.x = this.canvas.width;
                    if (particle.x > this.canvas.width) particle.x = 0;
                    if (particle.y < 0) particle.y = this.canvas.height;
                    if (particle.y > this.canvas.height) particle.y = 0;
                    
                  
                    const freqIndex = Math.floor((index / this.particles.length) * this.bufferLength);
                    const freq = this.dataArray[freqIndex] / 255;
                    particle.size = (freq * 8) + 1;
                    
                
                    const gradient = this.ctx.createRadialGradient(
                        particle.x, particle.y, 0,
                        particle.x, particle.y, particle.size
                    );
                    gradient.addColorStop(0, colors[0] + 'ff');
                    gradient.addColorStop(1, colors[1] + '33');
                    
                    this.ctx.beginPath();
                    this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    this.ctx.fillStyle = gradient;
                    this.ctx.fill();
                    
                   
                    this.particles.forEach((other, otherIndex) => {
                        if (index !== otherIndex) {
                            const dx = particle.x - other.x;
                            const dy = particle.y - other.y;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            
                            if (distance < 100) {
                                this.ctx.beginPath();
                                this.ctx.moveTo(particle.x, particle.y);
                                this.ctx.lineTo(other.x, other.y);
                                this.ctx.strokeStyle = colors[0] + Math.floor(50 * (1 - distance / 100)).toString(16);
                                this.ctx.lineWidth = 0.5;
                                this.ctx.stroke();
                            }
                        }
                    });
                });
            }
        }
        
 // CODE: Raihan_official0307 X Visualcodepo
 // Jangan hapus credit ini ya kak :D
 // Hargai karya creator dengan tidak mengklaim sebagai milik Anda
 // Pelanggaran akan ditandai
 // Jangan merubah nama author (Raihan_official0307 X Visualcodepo) pada script ini
 // Karya ini dibuat sepenuhnya oleh kami
       
        document.addEventListener('DOMContentLoaded', () => {
            new AudioVisualizer();
        });