const brainRegions = {
    visualCortex: {
        name: {
            en: "Visual Cortex",
            tr: "Görsel Korteks"
        },
        description: {
            en: "Processes visual information from the eyes",
            tr: "Gözlerden gelen görsel bilgileri işler"
        },
        normalFunction: {
            en: "Visual perception, object recognition, color processing",
            tr: "Görsel algı, nesne tanıma, renk işleme"
        },
        damageEffects: {
            en: [
                "Blindness in specific visual fields",
                "Difficulty recognizing objects or faces",
                "Color perception problems"
            ],
            tr: [
                "Belirli görüş alanlarında körlük",
                "Nesne veya yüz tanımada zorluk",
                "Renk algılama sorunları"
            ]
        },
        color: 0xFF0000,
        position: { x: 0, y: 0, z: -4.5 },
        size: 0.9,
        shape: 'flat'
    },
    hippocampus: {
        name: {
            en: "Hippocampus",
            tr: "Hipokampus"
        },
        description: {
            en: "Forms and stores memories",
            tr: "Anıları oluşturur ve depolar"
        },
        normalFunction: {
            en: "Memory formation, spatial navigation, learning",
            tr: "Bellek oluşumu, mekansal yönelim, öğrenme"
        },
        damageEffects: {
            en: [
                "Memory loss (amnesia)",
                "Difficulty forming new memories",
                "Spatial disorientation"
            ],
            tr: [
                "Bellek kaybı (amnezi)",
                "Yeni anılar oluşturmada zorluk",
                "Mekansal yönelim bozukluğu"
            ]
        },
        color: 0x00FF00,
        position: { x: -1.2, y: 0.3, z: -2.8 },
        size: 0.7,
        shape: 'curved'
    },
    prefrontalCortex: {
        name: {
            en: "Prefrontal Cortex",
            tr: "Prefrontal Korteks"
        },
        description: {
            en: "Controls decision-making and personality",
            tr: "Karar verme ve kişiliği kontrol eder"
        },
        normalFunction: {
            en: "Decision making, personality, social behavior",
            tr: "Karar verme, kişilik, sosyal davranış"
        },
        damageEffects: {
            en: [
                "Poor decision-making",
                "Personality changes",
                "Impulse control problems"
            ],
            tr: [
                "Zayıf karar verme",
                "Kişilik değişiklikleri",
                "Dürtü kontrolü sorunları"
            ]
        },
        color: 0x0000FF,
        position: { x: 0, y: 2.2, z: -1.8 },
        size: 1.4,
        shape: 'folded'
    },
    amygdala: {
        name: {
            en: "Amygdala",
            tr: "Amygdala"
        },
        description: {
            en: "Processes emotions, especially fear",
            tr: "Duyguları, özellikle korkuyu işler"
        },
        normalFunction: {
            en: "Emotional processing, fear response, memory",
            tr: "Duygusal işleme, korku tepkisi, bellek"
        },
        damageEffects: {
            en: [
                "Reduced fear response",
                "Difficulty recognizing emotions",
                "Impaired emotional memory"
            ],
            tr: [
                "Azalmış korku tepkisi",
                "Duyguları tanımada zorluk",
                "Bozulmuş duygusal bellek"
            ]
        },
        color: 0xFFFF00,
        position: { x: 1.2, y: 0.3, z: -2.8 },
        size: 0.6,
        shape: 'oval'
    },
    cerebellum: {
        name: {
            en: "Cerebellum",
            tr: "Beyincik"
        },
        description: {
            en: "Coordinates movement and balance",
            tr: "Hareket ve dengeyi koordine eder"
        },
        normalFunction: {
            en: "Motor coordination, balance, posture",
            tr: "Motor koordinasyon, denge, duruş"
        },
        damageEffects: {
            en: [
                "Poor coordination",
                "Balance problems",
                "Difficulty with fine movements"
            ],
            tr: [
                "Zayıf koordinasyon",
                "Denge sorunları",
                "İnce hareketlerde zorluk"
            ]
        },
        color: 0x800080,
        position: { x: 0, y: -2.2, z: -3.8 },
        size: 1.2,
        shape: 'folded'
    },
    brainstem: {
        name: {
            en: "Brainstem",
            tr: "Beyin Sapı"
        },
        description: {
            en: "Controls basic life functions",
            tr: "Temel yaşam fonksiyonlarını kontrol eder"
        },
        normalFunction: {
            en: "Breathing, heart rate, consciousness",
            tr: "Solunum, kalp atışı, bilinç"
        },
        damageEffects: {
            en: [
                "Breathing problems",
                "Heart rate irregularities",
                "Loss of consciousness"
            ],
            tr: [
                "Solunum sorunları",
                "Kalp atışı düzensizlikleri",
                "Bilinç kaybı"
            ]
        },
        color: 0x8B4513,
        position: { x: 0, y: -1.2, z: -1.8 },
        size: 0.8,
        shape: 'cylinder'
    },
    thalamus: {
        name: {
            en: "Thalamus",
            tr: "Talamus"
        },
        description: {
            en: "Relay station for sensory information",
            tr: "Duyusal bilgiler için aktarma istasyonu"
        },
        normalFunction: {
            en: "Sensory relay, consciousness, sleep regulation",
            tr: "Duyusal aktarım, bilinç, uyku düzenlemesi"
        },
        damageEffects: {
            en: [
                "Sensory processing problems",
                "Sleep disorders",
                "Consciousness issues"
            ],
            tr: [
                "Duyusal işleme sorunları",
                "Uyku bozuklukları",
                "Bilinç sorunları"
            ]
        },
        color: 0xFFA500,
        position: { x: 0, y: 0.8, z: -1.8 },
        size: 0.8,
        shape: 'oval'
    },
    basalGanglia: {
        name: {
            en: "Basal Ganglia",
            tr: "Bazal Ganglionlar"
        },
        description: {
            en: "Controls movement and learning",
            tr: "Hareket ve öğrenmeyi kontrol eder"
        },
        normalFunction: {
            en: "Movement control, habit formation, reward",
            tr: "Hareket kontrolü, alışkanlık oluşumu, ödül"
        },
        damageEffects: {
            en: [
                "Movement disorders",
                "Tremors",
                "Learning difficulties"
            ],
            tr: [
                "Hareket bozuklukları",
                "Titreme",
                "Öğrenme zorlukları"
            ]
        },
        color: 0x00FFFF,
        position: { x: 0.8, y: 0, z: -1.8 },
        size: 0.9,
        shape: 'cluster'
    },
    motorCortex: {
        name: {
            en: "Motor Cortex",
            tr: "Motor Korteks"
        },
        description: {
            en: "Controls voluntary movements",
            tr: "İstemli hareketleri kontrol eder"
        },
        normalFunction: {
            en: "Voluntary movement, motor planning",
            tr: "İstemli hareket, motor planlama"
        },
        damageEffects: {
            en: [
                "Paralysis",
                "Movement coordination problems",
                "Muscle weakness"
            ],
            tr: [
                "Felç",
                "Hareket koordinasyon sorunları",
                "Kas zayıflığı"
            ]
        },
        color: 0xFF00FF,
        position: { x: 0, y: 1.8, z: -2.8 },
        size: 1.1,
        shape: 'strip'
    },
    somatosensoryCortex: {
        name: {
            en: "Somatosensory Cortex",
            tr: "Somatosensoriyel Korteks"
        },
        description: {
            en: "Processes touch and body sensations",
            tr: "Dokunma ve vücut duyumlarını işler"
        },
        normalFunction: {
            en: "Touch perception, body awareness",
            tr: "Dokunma algısı, vücut farkındalığı"
        },
        damageEffects: {
            en: [
                "Loss of sensation",
                "Numbness",
                "Difficulty perceiving touch"
            ],
            tr: [
                "Duyu kaybı",
                "Uyuşukluk",
                "Dokunmayı algılamada zorluk"
            ]
        },
        color: 0x00FF00,
        position: { x: 0, y: 1.5, z: -3.2 },
        size: 1.1,
        shape: 'strip'
    },
    wernickeArea: {
        name: {
            en: "Wernicke's Area",
            tr: "Wernicke Alanı"
        },
        description: {
            en: "Involved in language comprehension",
            tr: "Dil anlama ile ilgilidir"
        },
        normalFunction: {
            en: "Language comprehension, speech understanding",
            tr: "Dil anlama, konuşmayı anlama"
        },
        damageEffects: {
            en: [
                "Difficulty understanding language",
                "Fluent but nonsensical speech",
                "Reading comprehension problems"
            ],
            tr: [
                "Dili anlamada zorluk",
                "Akıcı ama anlamsız konuşma",
                "Okuduğunu anlama sorunları"
            ]
        },
        color: 0xFFD700,
        position: { x: -1.5, y: 0.6, z: -2.8 },
        size: 0.6,
        shape: 'patch'
    },
    brocaArea: {
        name: {
            en: "Broca's Area",
            tr: "Broca Alanı"
        },
        description: {
            en: "Involved in speech production",
            tr: "Konuşma üretimi ile ilgilidir"
        },
        normalFunction: {
            en: "Speech production, language expression",
            tr: "Konuşma üretimi, dil ifadesi"
        },
        damageEffects: {
            en: [
                "Difficulty speaking",
                "Slow, effortful speech",
                "Grammar problems"
            ],
            tr: [
                "Konuşmada zorluk",
                "Yavaş, zorlu konuşma",
                "Dilbilgisi sorunları"
            ]
        },
        color: 0xFF69B4,
        position: { x: 1.5, y: 0.6, z: -2.8 },
        size: 0.6,
        shape: 'patch'
    }
};

// Function to create a brain region mesh with different shapes
function createBrainRegion(regionData) {
    let geometry;
    
    switch(regionData.shape) {
        case 'sphere':
            geometry = new THREE.SphereGeometry(regionData.size, 32, 32);
            break;
        case 'curved':
            geometry = new THREE.TorusKnotGeometry(regionData.size * 0.5, regionData.size * 0.2, 100, 16);
            break;
        case 'flat':
            geometry = new THREE.BoxGeometry(regionData.size * 2, regionData.size * 0.3, regionData.size);
            break;
        case 'folded':
            geometry = new THREE.SphereGeometry(regionData.size, 32, 32);
            // Add folds
            const folds = new THREE.Group();
            for (let i = 0; i < 8; i++) {
                const fold = new THREE.Mesh(
                    new THREE.TorusGeometry(regionData.size * 0.8, 0.1, 16, 32),
                    new THREE.MeshPhongMaterial({ color: regionData.color, transparent: true, opacity: 0.3 })
                );
                fold.rotation.x = Math.random() * Math.PI;
                fold.rotation.y = Math.random() * Math.PI;
                folds.add(fold);
            }
            break;
        case 'cylinder':
            geometry = new THREE.CylinderGeometry(regionData.size * 0.5, regionData.size * 0.5, regionData.size * 2, 32);
            break;
        case 'oval':
            geometry = new THREE.SphereGeometry(regionData.size, 32, 32);
            break;
        case 'cluster':
            geometry = new THREE.SphereGeometry(regionData.size, 32, 32);
            // Add sub-regions
            const subRegions = new THREE.Group();
            for (let i = 0; i < 4; i++) {
                const subRegion = new THREE.Mesh(
                    new THREE.SphereGeometry(regionData.size * 0.4, 16, 16),
                    new THREE.MeshPhongMaterial({ color: regionData.color, transparent: true, opacity: 0.6 })
                );
                subRegion.position.set(
                    (Math.random() - 0.5) * regionData.size,
                    (Math.random() - 0.5) * regionData.size,
                    (Math.random() - 0.5) * regionData.size
                );
                subRegions.add(subRegion);
            }
            break;
        case 'strip':
            geometry = new THREE.BoxGeometry(regionData.size * 2, regionData.size * 0.2, regionData.size * 0.5);
            break;
        case 'patch':
            geometry = new THREE.CircleGeometry(regionData.size, 32);
            break;
        default:
            geometry = new THREE.SphereGeometry(regionData.size, 32, 32);
    }

    const material = new THREE.MeshPhongMaterial({
        color: regionData.color,
        transparent: true,
        opacity: 0.8,
        shininess: 100,
        specular: new THREE.Color(0xffffff),
        emissive: new THREE.Color(regionData.color).multiplyScalar(0.1)
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(regionData.position.x, regionData.position.y, regionData.position.z);
    mesh.userData = regionData;

    // Add pulsing animation
    mesh.userData.originalScale = mesh.scale.clone();
    mesh.userData.pulseSpeed = 0.5 + Math.random() * 0.5;

    return mesh;
}

// Function to create the brain base shape with more detail
function createBrainBase() {
    // Create main brain hemispheres
    const leftHemisphere = new THREE.Group();
    const rightHemisphere = new THREE.Group();
    
    // Create detailed brain surface
    const brainGeometry = new THREE.SphereGeometry(3, 128, 128);
    const brainMaterial = new THREE.MeshPhongMaterial({
        color: 0xE0E0E0,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
        shininess: 30,
        bumpScale: 0.1
    });
    
    // Add detailed surface texture
    const textureLoader = new THREE.TextureLoader();
    const bumpTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/terrain/grasslight-big.jpg');
    brainMaterial.bumpMap = bumpTexture;
    
    const leftBrain = new THREE.Mesh(brainGeometry, brainMaterial);
    const rightBrain = new THREE.Mesh(brainGeometry, brainMaterial);
    
    // Position hemispheres
    leftBrain.position.x = -1.5;
    rightBrain.position.x = 1.5;
    
    leftHemisphere.add(leftBrain);
    rightHemisphere.add(rightBrain);
    
    // Add detailed sulci and gyri
    function addBrainFolds(hemisphere) {
        const folds = new THREE.Group();
        for (let i = 0; i < 100; i++) {
            const foldGeometry = new THREE.TorusGeometry(
                3 + Math.random() * 0.5,
                0.1 + Math.random() * 0.1,
                16,
                32
            );
            const foldMaterial = new THREE.MeshPhongMaterial({
                color: 0xCCCCCC,
                transparent: true,
                opacity: 0.2,
                shininess: 50
            });
            const fold = new THREE.Mesh(foldGeometry, foldMaterial);
            
            // Random rotation for natural look
            fold.rotation.x = Math.random() * Math.PI;
            fold.rotation.y = Math.random() * Math.PI;
            fold.rotation.z = Math.random() * Math.PI;
            
            // Add slight random position offset
            fold.position.set(
                (Math.random() - 0.5) * 0.5,
                (Math.random() - 0.5) * 0.5,
                (Math.random() - 0.5) * 0.5
            );
            
            folds.add(fold);
        }
        hemisphere.add(folds);
    }
    
    addBrainFolds(leftHemisphere);
    addBrainFolds(rightHemisphere);
    
    // Add detailed blood vessels
    function addBloodVessels(hemisphere) {
        const vessels = new THREE.Group();
        for (let i = 0; i < 50; i++) {
            const points = [];
            const numPoints = 5 + Math.floor(Math.random() * 5);
            
            for (let j = 0; j < numPoints; j++) {
                points.push(new THREE.Vector3(
                    (Math.random() - 0.5) * 6,
                    (Math.random() - 0.5) * 6,
                    (Math.random() - 0.5) * 6
                ));
            }
            
            const curve = new THREE.CatmullRomCurve3(points);
            const vesselGeometry = new THREE.TubeGeometry(curve, 64, 0.05 + Math.random() * 0.05, 8, false);
            const vesselMaterial = new THREE.MeshPhongMaterial({
                color: 0xFF0000,
                transparent: true,
                opacity: 0.3,
                emissive: new THREE.Color(0xFF0000),
                emissiveIntensity: 0.2
            });
            const vessel = new THREE.Mesh(vesselGeometry, vesselMaterial);
            vessels.add(vessel);
        }
        hemisphere.add(vessels);
    }
    
    addBloodVessels(leftHemisphere);
    addBloodVessels(rightHemisphere);
    
    // Add neural connections
    function addNeuralConnections(hemisphere) {
        const connections = new THREE.Group();
        for (let i = 0; i < 200; i++) {
            const start = new THREE.Vector3(
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 6
            );
            const end = new THREE.Vector3(
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 6
            );
            
            const curve = new THREE.LineCurve3(start, end);
            const connectionGeometry = new THREE.TubeGeometry(curve, 1, 0.02, 8, false);
            const connectionMaterial = new THREE.MeshPhongMaterial({
                color: 0x00FF00,
                transparent: true,
                opacity: 0.1,
                emissive: new THREE.Color(0x00FF00),
                emissiveIntensity: 0.1
            });
            const connection = new THREE.Mesh(connectionGeometry, connectionMaterial);
            connections.add(connection);
        }
        hemisphere.add(connections);
    }
    
    addNeuralConnections(leftHemisphere);
    addNeuralConnections(rightHemisphere);
    
    // Create brain group
    const brain = new THREE.Group();
    brain.add(leftHemisphere);
    brain.add(rightHemisphere);
    
    // Add subtle animation
    brain.userData = {
        pulseSpeed: 0.2,
        originalScale: new THREE.Vector3(1, 1, 1)
    };
    
    return brain;
}

// Function to highlight a brain region with enhanced effects
function highlightRegion(mesh) {
    mesh.material.opacity = 1;
    mesh.material.emissive = new THREE.Color(0xffffff);
    mesh.material.emissiveIntensity = 0.5;
    mesh.material.shininess = 200;
    
    // Add enhanced glow effect
    const glowGeometry = new THREE.SphereGeometry(mesh.geometry.parameters.radius * 1.3, 32, 32);
    const glowMaterial = new THREE.MeshPhongMaterial({
        color: mesh.material.color,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide,
        emissive: mesh.material.color,
        emissiveIntensity: 0.3
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.copy(mesh.position);
    mesh.parent.add(glow);
    mesh.userData.glow = glow;
    
    // Add connection lines to related regions
    const connections = new THREE.Group();
    const relatedRegions = brainRegionMeshes.filter(r => r !== mesh);
    relatedRegions.forEach(region => {
        const curve = new THREE.LineCurve3(
            mesh.position,
            region.position
        );
        const connectionGeometry = new THREE.TubeGeometry(curve, 1, 0.05, 8, false);
        const connectionMaterial = new THREE.MeshPhongMaterial({
            color: 0xFFFFFF,
            transparent: true,
            opacity: 0.3,
            emissive: new THREE.Color(0xFFFFFF),
            emissiveIntensity: 0.2
        });
        const connection = new THREE.Mesh(connectionGeometry, connectionMaterial);
        connections.add(connection);
    });
    mesh.parent.add(connections);
    mesh.userData.connections = connections;
}

// Function to unhighlight a brain region
function unhighlightRegion(mesh) {
    mesh.material.opacity = 0.8;
    mesh.material.emissive = new THREE.Color(0x000000);
    mesh.material.emissiveIntensity = 0;
    mesh.material.shininess = 100;
    
    // Remove glow effect
    if (mesh.userData.glow) {
        mesh.parent.remove(mesh.userData.glow);
        mesh.userData.glow = null;
    }
    
    // Remove connections
    if (mesh.userData.connections) {
        mesh.parent.remove(mesh.userData.connections);
        mesh.userData.connections = null;
    }
} 