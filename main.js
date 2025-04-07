let scene, camera, renderer, controls;
let brainRegionMeshes = [];
let selectedRegion = null;
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let clock = new THREE.Clock();
let currentLanguage = 'en'; // Default language

// Function to create facial features
function createFacialFeatures() {
    const features = new THREE.Group();
    
    // Create eyes
    const eyeGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.8, 1.5, -4.5);
    features.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.8, 1.5, -4.5);
    features.add(rightEye);
    
    // Create eyebrows
    const eyebrowGeometry = new THREE.BoxGeometry(0.4, 0.05, 0.1);
    const eyebrowMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
    
    const leftEyebrow = new THREE.Mesh(eyebrowGeometry, eyebrowMaterial);
    leftEyebrow.position.set(-0.8, 1.8, -4.5);
    leftEyebrow.rotation.z = -0.2; // Slight angle
    features.add(leftEyebrow);
    
    const rightEyebrow = new THREE.Mesh(eyebrowGeometry, eyebrowMaterial);
    rightEyebrow.position.set(0.8, 1.8, -4.5);
    rightEyebrow.rotation.z = 0.2; // Slight angle
    features.add(rightEyebrow);
    
    // Create nose
    const noseGeometry = new THREE.ConeGeometry(0.2, 0.6, 16);
    const noseMaterial = new THREE.MeshPhongMaterial({ color: 0xFFA07A });
    const nose = new THREE.Mesh(noseGeometry, noseMaterial);
    nose.position.set(0, 1.2, -4.8);
    nose.rotation.x = Math.PI / 2;
    features.add(nose);
    
    // Create mouth
    const mouthGeometry = new THREE.TorusGeometry(0.5, 0.1, 16, 32, Math.PI);
    const mouthMaterial = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
    const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
    mouth.position.set(0, 0.8, -4.5);
    mouth.rotation.x = Math.PI;
    features.add(mouth);
    
    // Create ears
    const earGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const earMaterial = new THREE.MeshPhongMaterial({ color: 0xFFA07A });
    
    const leftEar = new THREE.Mesh(earGeometry, earMaterial);
    leftEar.position.set(-1.5, 1.2, -4.2);
    leftEar.scale.set(0.5, 1, 0.3);
    features.add(leftEar);
    
    const rightEar = new THREE.Mesh(earGeometry, earMaterial);
    rightEar.position.set(1.5, 1.2, -4.2);
    rightEar.scale.set(0.5, 1, 0.3);
    features.add(rightEar);
    
    // Create cheeks
    const cheekGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const cheekMaterial = new THREE.MeshPhongMaterial({ color: 0xFFB6C1 });
    
    const leftCheek = new THREE.Mesh(cheekGeometry, cheekMaterial);
    leftCheek.position.set(-1.2, 1.0, -4.3);
    leftCheek.scale.set(0.5, 0.3, 0.1);
    features.add(leftCheek);
    
    const rightCheek = new THREE.Mesh(cheekGeometry, cheekMaterial);
    rightCheek.position.set(1.2, 1.0, -4.3);
    rightCheek.scale.set(0.5, 0.3, 0.1);
    features.add(rightCheek);
    
    // Create chin
    const chinGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const chinMaterial = new THREE.MeshPhongMaterial({ color: 0xFFA07A });
    const chin = new THREE.Mesh(chinGeometry, chinMaterial);
    chin.position.set(0, 0.5, -4.3);
    chin.scale.set(0.8, 0.3, 0.1);
    features.add(chin);
    
    return features;
}

// Function to update UI with current language
function updateUILanguage() {
    if (selectedRegion) {
        const regionData = selectedRegion.userData;
        document.getElementById('region-name').textContent = regionData.name[currentLanguage];
        document.getElementById('region-description').textContent = regionData.description[currentLanguage];
        document.getElementById('normal-function').textContent = regionData.normalFunction[currentLanguage];
        
        const damageEffectsList = document.getElementById('damage-effects-list');
        damageEffectsList.innerHTML = '';
        regionData.damageEffects[currentLanguage].forEach(effect => {
            const li = document.createElement('li');
            li.textContent = effect;
            damageEffectsList.appendChild(li);
        });
    }
}

// Add language switch button
function addLanguageSwitch() {
    const languageSwitch = document.createElement('button');
    languageSwitch.id = 'language-switch';
    languageSwitch.textContent = 'TR/EN';
    languageSwitch.style.position = 'fixed';
    languageSwitch.style.top = '20px';
    languageSwitch.style.right = '20px';
    languageSwitch.style.padding = '10px';
    languageSwitch.style.zIndex = '1000';
    document.body.appendChild(languageSwitch);

    languageSwitch.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'tr' : 'en';
        updateUILanguage();
    });
}

// Initialize the scene
function init() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    scene.fog = new THREE.Fog(0xf0f0f0, 5, 20);

    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 15);

    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById('scene-container').appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Add orbit controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 5;
    controls.maxDistance = 20;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Create brain base
    const brainBase = createBrainBase();
    // Initialize animation properties for brain base
    brainBase.userData.originalScale = brainBase.scale.clone();
    brainBase.userData.pulseSpeed = 0.3; // Slower pulse for the base
    scene.add(brainBase);

    // Add facial features
    const facialFeatures = createFacialFeatures();
    scene.add(facialFeatures);

    // Create brain regions
    for (const regionKey in brainRegions) {
        const region = createBrainRegion(brainRegions[regionKey]);
        // Initialize originalScale for animation
        region.userData.originalScale = region.scale.clone();
        region.userData.pulseSpeed = 0.5 + Math.random() * 0.5; // Random pulse speed for each region
        scene.add(region);
        brainRegionMeshes.push(region);
    }

    // Add event listeners
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('click', onMouseClick);
    window.addEventListener('mousemove', onMouseMove);

    // Add language switch button
    addLanguageSwitch();

    // Start animation loop
    animate();
}

// Handle window resize
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Handle mouse click
function onMouseClick(event) {
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(brainRegionMeshes, true);

    if (intersects.length > 0) {
        // Find the closest intersection
        const clickedRegion = intersects[0].object;
        selectRegion(clickedRegion);
    }
}

// Handle mouse move for highlighting
function onMouseMove(event) {
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(brainRegionMeshes, true);

    // Unhighlight all regions
    brainRegionMeshes.forEach(region => {
        if (region !== selectedRegion) {
            unhighlightRegion(region);
        }
    });

    if (intersects.length > 0) {
        const hoveredRegion = intersects[0].object;
        if (hoveredRegion !== selectedRegion) {
            highlightRegion(hoveredRegion);
        }
    }
}

// Select a brain region
function selectRegion(region) {
    if (selectedRegion) {
        unhighlightRegion(selectedRegion);
    }

    selectedRegion = region;
    highlightRegion(region);

    // Update info panel with current language
    const regionData = region.userData;
    const regionName = document.getElementById('region-name');
    const regionDescription = document.getElementById('region-description');
    const normalFunction = document.getElementById('normal-function');
    const damageEffectsList = document.getElementById('damage-effects-list');

    if (regionName) regionName.textContent = regionData.name[currentLanguage];
    if (regionDescription) regionDescription.textContent = regionData.description[currentLanguage];
    if (normalFunction) normalFunction.textContent = regionData.normalFunction[currentLanguage];
    
    if (damageEffectsList) {
        damageEffectsList.innerHTML = '';
        regionData.damageEffects[currentLanguage].forEach(effect => {
            const li = document.createElement('li');
            li.textContent = effect;
            damageEffectsList.appendChild(li);
        });
    }
    
    const damageEffects = document.getElementById('damage-effects');
    if (damageEffects) damageEffects.style.display = 'none';
}

// Simulate damage to selected region
document.getElementById('simulate-damage').addEventListener('click', () => {
    if (selectedRegion) {
        const regionData = selectedRegion.userData;
        const damageEffects = document.getElementById('damage-effects');
        damageEffects.innerHTML = `
            <h3>Effects of Damage:</h3>
            <ul>
                ${regionData.damageEffects[currentLanguage].map(effect => `<li>${effect}</li>`).join('')}
            </ul>
        `;
        damageEffects.style.display = 'block';

        // Enhanced visual effects for damage
        selectedRegion.material.color.setHex(0x333333);
        selectedRegion.material.emissive.setHex(0xFF0000);
        selectedRegion.material.emissiveIntensity = 0.5;
        
        // Add dramatic damage particles
        const particles = new THREE.Group();
        for (let i = 0; i < 100; i++) {
            const particleGeometry = new THREE.SphereGeometry(0.05 + Math.random() * 0.05, 8, 8);
            const particleMaterial = new THREE.MeshPhongMaterial({
                color: 0xFF0000,
                transparent: true,
                opacity: 0.8,
                emissive: new THREE.Color(0xFF0000),
                emissiveIntensity: 0.5
            });
            const particle = new THREE.Mesh(particleGeometry, particleMaterial);
            particle.position.copy(selectedRegion.position);
            
            // Add random velocity and rotation
            particle.userData.velocity = new THREE.Vector3(
                (Math.random() - 0.5) * 0.3,
                (Math.random() - 0.5) * 0.3,
                (Math.random() - 0.5) * 0.3
            );
            particle.userData.rotationSpeed = new THREE.Vector3(
                Math.random() * 0.1,
                Math.random() * 0.1,
                Math.random() * 0.1
            );
            particle.userData.life = 1.0;
            particles.add(particle);
        }
        scene.add(particles);
        selectedRegion.userData.damageParticles = particles;
        
        // Add shockwave effect
        const shockwaveGeometry = new THREE.RingGeometry(
            selectedRegion.geometry.parameters.radius,
            selectedRegion.geometry.parameters.radius * 2,
            32
        );
        const shockwaveMaterial = new THREE.MeshPhongMaterial({
            color: 0xFF0000,
            transparent: true,
            opacity: 0.5,
            side: THREE.DoubleSide,
            emissive: new THREE.Color(0xFF0000),
            emissiveIntensity: 0.3
        });
        const shockwave = new THREE.Mesh(shockwaveGeometry, shockwaveMaterial);
        shockwave.position.copy(selectedRegion.position);
        shockwave.rotation.x = Math.PI / 2;
        scene.add(shockwave);
        selectedRegion.userData.shockwave = shockwave;
        selectedRegion.userData.shockwaveScale = 1;
    }
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    const delta = clock.getDelta();
    
    // Update orbit controls
    controls.update();
    
    // Animate brain regions
    brainRegionMeshes.forEach(mesh => {
        if (mesh.userData && mesh.userData.originalScale) {
            const pulse = Math.sin(clock.elapsedTime * mesh.userData.pulseSpeed) * 0.1 + 1;
            mesh.scale.copy(mesh.userData.originalScale).multiplyScalar(pulse);
        }
    });
    
    // Animate brain base
    const brainBase = scene.children[0];
    if (brainBase && brainBase.userData && brainBase.userData.originalScale) {
        const pulse = Math.sin(clock.elapsedTime * brainBase.userData.pulseSpeed) * 0.05 + 1;
        brainBase.scale.copy(brainBase.userData.originalScale).multiplyScalar(pulse);
    }
    
    // Animate damage particles if they exist
    if (selectedRegion && selectedRegion.userData.damageParticles) {
        const particles = selectedRegion.userData.damageParticles;
        particles.children.forEach(particle => {
            // Update position
            particle.position.add(particle.userData.velocity);
            
            // Update rotation
            particle.rotation.x += particle.userData.rotationSpeed.x;
            particle.rotation.y += particle.userData.rotationSpeed.y;
            particle.rotation.z += particle.userData.rotationSpeed.z;
            
            // Update life and fade
            particle.userData.life -= delta * 0.5;
            particle.material.opacity = particle.userData.life;
            
            if (particle.userData.life <= 0) {
                particles.remove(particle);
            }
        });
        
        if (particles.children.length === 0) {
            scene.remove(particles);
            selectedRegion.userData.damageParticles = null;
        }
    }
    
    // Animate shockwave if it exists
    if (selectedRegion && selectedRegion.userData.shockwave) {
        const shockwave = selectedRegion.userData.shockwave;
        selectedRegion.userData.shockwaveScale += delta * 2;
        shockwave.scale.set(
            selectedRegion.userData.shockwaveScale,
            selectedRegion.userData.shockwaveScale,
            selectedRegion.userData.shockwaveScale
        );
        shockwave.material.opacity = 1 - selectedRegion.userData.shockwaveScale * 0.2;
        
        if (selectedRegion.userData.shockwaveScale >= 5) {
            scene.remove(shockwave);
            selectedRegion.userData.shockwave = null;
        }
    }
    
    renderer.render(scene, camera);
}

// Function to highlight a brain region
function highlightRegion(region) {
    if (!region) return;
    
    // Store original color
    if (!region.userData.originalColor) {
        region.userData.originalColor = region.material.color.clone();
    }
    
    // Create highlight effect
    region.material.color.setHex(0xFFFFFF); // White highlight
    region.material.emissive.setHex(0x444444);
    region.material.emissiveIntensity = 0.5;
    
    // Add slight scale increase
    if (!region.userData.originalScale) {
        region.userData.originalScale = region.scale.clone();
    }
    region.scale.copy(region.userData.originalScale).multiplyScalar(1.1);
}

// Function to unhighlight a brain region
function unhighlightRegion(region) {
    if (!region) return;
    
    // Restore original color
    if (region.userData.originalColor) {
        region.material.color.copy(region.userData.originalColor);
    }
    
    // Remove highlight effects
    region.material.emissive.setHex(0x000000);
    region.material.emissiveIntensity = 0;
    
    // Restore original scale
    if (region.userData.originalScale) {
        region.scale.copy(region.userData.originalScale);
    }
}

// Initialize the application
init(); 