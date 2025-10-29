# 🎵 VisualCodePo - Audio Spectrum Visualizer

[![GitHub stars](https://img.shields.io/github/stars/Dikrey/AudioSpectrum?style=social)](https://github.com/Dikrey/AudioSpectrum/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Dikrey/AudioSpectrum?style=social)](https://github.com/Dikrey/AudioSpectrum/network)
[![GitHub issues](https://img.shields.io/github/issues/Dikrey/AudioSpectrum)](https://github.com/Dikrey/AudioSpectrum/issues)
[![GitHub license](https://img.shields.io/github/license/Dikrey/AudioSpectrum)](https://github.com/Dikrey/AudioSpectrum/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Dikrey/AudioSpectrum/pulls)
[![Live Demo](https://img.shields.io/badge/demo-live-orange.svg)](https://linktr.ee/Visualcodepo)





> 🎧 **Experience music like never before with stunning real-time audio visualizations!**

Transform your audio into mesmerizing visual experiences with multiple visualization modes, customizable themes, and responsive design that works perfectly on all devices.

---

## ✨ Features

### 🎨 **Visualization Modes**
- **📊 Frequency Bars** - Classic spectrum analyzer with gradient effects
- **🌊 Waveform** - Smooth oscilloscope-style visualization
- **⭕ Circular** - Radial frequency display with center branding
- **🎆 Particles** - Dynamic particle system with network connections

### 🎛️ **Audio Controls**
- **📁 File Upload** - Support for all audio formats
- **🎤 Microphone Input** - Real-time microphone visualization
- **▶️ Playback Controls** - Play, pause, and seek functionality
- **🔊 Volume Control** - Adjustable audio levels

### 🎨 **Customization**
- **🌈 5 Color Themes** - Purple, Pink, Blue, Green, Sunset
- **⚡ Sensitivity Control** - Adjust visualization responsiveness
- **📱 Fully Responsive** - Perfect on desktop, tablet, and mobile
- **🌙 Dark Theme** - Easy on the eyes design

### ⚡ **Performance**
- **🚀 Smooth 60fps** - Optimized canvas rendering
- **🎯 Real-time Analysis** - Web Audio API integration
- **💾 Lightweight** - No heavy dependencies
- **🔄 Auto-refresh** - Quick reset functionality

---

## 🚀 Live Demo

Check out the live demo: **[VisualCodePo Live](https://linktr.ee/Visualcodepo)**

### 📸 Screenshots

<!-- #### Desktop View
![Desktop View](https://via.placeholder.com/800x400/1a1a2e/667eea?text=Desktop+View+Demo)

#### Mobile View
![Mobile View](https://via.placeholder.com/400x700/1a1a2e/764ba2?text=Mobile+View+Demo)

#### Visualization Modes
![Visualizations](https://via.placeholder.com/800x300/1a1a2e/667eea?text=Bars+|+Wave+|+Circular+|+Particles) -->

---

## 🛠️ Installation

### 📋 Prerequisites
- Modern web browser with Web Audio API support
- Local web server (for development)

### 📦 Clone the Repository
```bash
git clone https://github.com/Dikrey/AudioSpectrum.git
cd AudioSpectrum
```

### 🚀 Deploy (Recommended)
1. Fork this repository
2. Connect your Netlify account to GitHub
3. Deploy automatically from your fork

---

## 🎯 Usage

### 📁 Using Audio Files
1. Click **"Choose Audio"** button
2. Select any audio file from your device
3. Use playback controls to play/pause
4. Switch between visualization modes

### 🎤 Using Microphone
1. Click **"Microphone"** button
2. Allow browser microphone access
3. Start making noise or playing music
4. Watch real-time visualization

### ⚙️ Customization
1. Click **Settings** button (or mobile menu)
2. Choose your preferred color theme
3. Adjust sensitivity slider
4. Experiment with different modes

---

## 🎨 Customization Guide

### 🎨 Adding New Color Themes
```javascript
// Add to colorThemes object in script.js
this.colorThemes = {
    // ... existing themes
    custom: ['#ff6b6b', '#4ecdc4'] // Add your theme
};
```

### 🔧 Adjusting Sensitivity
```javascript
// Modify sensitivity range
<input type="range" id="sensitivitySlider" min="1" max="15" value="7">
```

### 📱 Mobile Optimization
The visualizer automatically adapts to screen size. For custom mobile layouts, modify the responsive CSS media queries.

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### 📝 How to Contribute
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### 🎯 Contribution Areas
- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations

---

## ⚠️ IMPORTANT - LICENSE & CREDITS

### 🚨 **DO NOT REMOVE OR MODIFY CREDITS**
This project is the intellectual property of **Raihan_Official0307 x VisualCodePo**. 

#### ✅ **What you CAN do:**
- ✅ Use for personal projects
- ✅ Fork and modify for learning
- ✅ Deploy to your own server
- ✅ Contribute improvements via Pull Requests

#### ❌ **What you CANNOT do:**
- ❌ Remove original creator credits
- ❌ Reupload as your own work
- ❌ Rebrand without attribution
- ❌ Remove copyright notices
- ❌ Sell or commercialize without permission

### 📜 **Required Attribution**
If you use, modify, or deploy this project, you **MUST** keep the following credits visible:

```html
<!-- Footer Credits (Must Remain Visible) -->
<div class="developer-credit">
    <i class="fas fa-code"></i>
    Developed by Raihan_Official0307 x VisualCodePo
</div>

<!-- Modal Credits (Must Remain Intact) -->
<p>
    Website ini dibuat oleh <strong>Raihan_Official0307</strong> x <strong>VisualCodePo</strong>
</p>
```

### ⚖️ **Legal Notice**
- This project is protected under intellectual property laws
- Violation of credit requirements may result in legal action
- We monitor unauthorized use and reuploads
- Proper attribution is non-negotiable

---

## 🐛 Troubleshooting

### 🔊 Audio Not Working?
- Check browser permissions for microphone access
- Ensure audio files are supported formats
- Try refreshing the page (click Refresh button)

### 📱 Mobile Issues?
- Ensure you're using a modern browser
- Check if local storage is enabled
- Try in landscape mode for better experience

### ⚡ Performance Issues?
- Close other browser tabs
- Lower the sensitivity setting
- Try a simpler visualization mode

---

## 📞 Contact & Support

### 👨‍💻 **Original Developer**
- **GitHub:** [@Raihan_Official0307](https://github.com/Dikrey)
- **Instagram:** [@Raihan_Official0307](https://instagram.com/Raihan_Official0307)
- **TikTok:** [@Raihan_Official0307](https://www.tiktok.com/@raihan_official0307)
- **Website:** [VisualCodePo.com](https://linktr.ee/Visualcodepo)

### 🆘 **Need Help?**
- 🐛 [Report a Bug](https://github.com/Dikrey/visualcodepo/issues/new?template=bug_report.md)
- 💡 [Request a Feature](https://github.com/Dikrey/visualcodepo/issues/new?template=feature_request.md)
- 💬 [Start a Discussion](https://github.com/Dikrey/visualcodepo/discussions)

---

## 🙏 Acknowledgments

- **Font Awesome** - For amazing icons
- **Web Audio API** - For audio processing capabilities
- **Canvas API** - For smooth visualizations
- **All Contributors** - Who help improve this project

---

## 📄 License

```
Copyright (c) 2025 Raihan_Official0307 x VisualCodePo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

1. The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.

2. Credits to the original creators "Raihan_Official0307 x VisualCodePo" must remain
   visible and unmodified in all versions and derivatives.

3. Rebranding, removing credits, or claiming ownership is strictly prohibited.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

### 🌟 **If you like this project, please give it a star! ⭐**

**Made with ❤️ by Raihan_Official0307 x VisualCodePo**

[![Back to top](https://img.shields.io/badge/Back%20to%20Top-↑-blue.svg)](#visualcodepo---audio-spectrum-visualizer)

</div>

