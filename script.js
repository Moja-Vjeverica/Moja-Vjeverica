// =================== DAILY MESSAGES ===================
const messages = [
    "Hope your day is as lovely as you!",
    "Just a reminder: you are amazing.",
    "Thinking of you 💕",
    "Another day, another smile for you.",
    "You make everything better simply by being you.",
    "Can’t wait for our adventures together!",
    "Your smile brightens my day every time.",
    "Every moment with you is special.",
    "I love you more than words can say.",
    "Counting down the days until our Fiji trip together! 🌴"
];

function newMessage() {
    const today = new Date().getDate();
    document.getElementById('dailyMessage').innerText = messages[today % messages.length];
}


// =================== COUNTDOWN ===================
function updateCountdown() {
    const now = new Date();
    const year = now.getFullYear();
    let targetDate = new Date(`${year}-12-28T00:00:00`);
    if (now > targetDate) targetDate.setFullYear(year + 1);
    const diff = targetDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById('countdown').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// =================== ANIMAL DATA ===================
const animals = {
  "Tiger": {
    image: "images/tiger.jpg",
    scientificName: "Panthera tigris",
    population: "Approx. 3,900 wild individuals",
    distribution: "Southeast Asia, India, Russia, Sumatra",
    diet: "Carnivore — deer, wild boar, and other large mammals",
    behavior: "Solitary, territorial; nocturnal; excellent swimmer",
    conservationStatus: "Endangered",
    coolFacts: [
      "Unique stripe patterns like fingerprints",
      "Excellent swimmers",
      "Can leap 10 meters in a single jump",
      "Communicate with roars up to 3 km",
      "Mark territory with scent",
      "Can climb trees when young"
    ],
    howToHelp: [
      "Pick up litter in natural areas",
      "Avoid unsustainable palm oil products",
      "Support forest conservation",
      "Reduce meat from unsustainable sources",
      "Educate friends about tigers",
      "Donate to anti-poaching groups"
    ]
  },
  "Lion": {
    image: "images/lion.jpg",
    scientificName: "Panthera leo",
    population: "Approx. 20,000–25,000 wild individuals",
    distribution: "Sub-Saharan Africa; small population in India",
    diet: "Carnivore — large herbivores",
    behavior: "Social, live in prides; hunt mostly at night",
    conservationStatus: "Vulnerable",
    coolFacts: [
      "Male lions have manes",
      "Roar can be heard 8 km away",
      "Females do most hunting",
      "Run up to 80 km/h in bursts",
      "Territorial, mark land with scent",
      "Young lions play to learn hunting"
    ],
    howToHelp: [
      "Participate in cleanups to protect savannas",
      "Support community conservation",
      "Reduce deforestation products",
      "Avoid exploitative safari parks",
      "Educate about lions' ecological role",
      "Donate to lion protection organizations"
    ]
  },
  "Giant Panda": {
    image: "images/panda.jpg",
    scientificName: "Ailuropoda melanoleuca",
    population: "Approx. 2,000 wild individuals",
    distribution: "Central China",
    diet: "Mostly bamboo",
    behavior: "Solitary; spends most day eating/resting",
    conservationStatus: "Vulnerable",
    coolFacts: [
      "Pseudo-thumb helps hold bamboo",
      "Climb trees despite size",
      "Eat 10–16 hours/day",
      "Newborns tiny: 1/900th of mother's weight",
      "Communicate with scent and sounds",
      "Excellent swimmers"
    ],
    howToHelp: [
      "Plant bamboo or support reforestation",
      "Avoid deforestation products",
      "Support panda rescue centers",
      "Educate about panda conservation",
      "Adopt a panda through programs",
      "Reduce habitat destruction"
    ]
  },
  "Koala": {
    image: "images/koala.jpg",
    scientificName: "Phascolarctos cinereus",
    population: "Approx. 80,000",
    distribution: "Eastern Australia",
    diet: "Eucalyptus leaves",
    behavior: "Mostly solitary; sleeps up to 20 hours/day",
    conservationStatus: "Vulnerable",
    coolFacts: [
      "Have human-like fingerprints",
      "Rarely drink water",
      "Unique vocalizations",
      "Live 13–18 years in wild",
      "Low metabolic rate",
      "Excellent climbers"
    ],
    howToHelp: [
      "Plant eucalyptus trees",
      "Participate in tree planting",
      "Drive carefully in koala zones",
      "Keep dogs on leash",
      "Support koala rescues",
      "Avoid deforestation products"
    ]
  },
  "Kangaroo": {
    image: "images/kangaroo.jpg",
    scientificName: "Macropus",
    population: "Approx. 50 million",
    distribution: "Australia",
    diet: "Herbivore — grasses, leaves",
    behavior: "Live in mobs; strong jumpers",
    conservationStatus: "Least Concern",
    coolFacts: [
      "Can leap 9 meters in a single bound",
      "Powerful tail used for balance",
      "Can survive without drinking for long periods",
      "Boxing behavior in males",
      "Live in social mobs",
      "Strong swimming ability"
    ],
    howToHelp: [
      "Pick up litter in natural habitats",
      "Drive carefully in wildlife zones",
      "Support Australian wildlife parks",
      "Avoid introducing invasive species",
      "Educate about habitat preservation",
      "Donate to kangaroo conservation programs"
    ]
  },
  "Giraffe": {
    image: "images/giraffe.jpg",
    scientificName: "Giraffa camelopardalis",
    population: "Approx. 117,000",
    distribution: "Sub-Saharan Africa",
    diet: "Leaves, shoots, fruits",
    behavior: "Loose herds; males neck-fight",
    conservationStatus: "Vulnerable",
    coolFacts: [
      "Tallest land animals",
      "Tongue up to 45 cm",
      "Seven neck vertebrae",
      "Run up to 60 km/h",
      "Unique coat patterns",
      "Sleep only 2 hours/day"
    ],
    howToHelp: [
      "Support wildlife reserves",
      "Avoid habitat-loss products",
      "Participate in conservation campaigns",
      "Educate about giraffes",
      "Donate to giraffe projects",
      "Reduce water waste impacting ecosystems"
    ]
  },
  "Cheetah": {
    image: "images/cheetah.jpg",
    scientificName: "Acinonyx jubatus",
    population: "Approx. 6,700",
    distribution: "Sub-Saharan Africa; small population in Iran",
    diet: "Carnivore — antelopes, hares",
    behavior: "Solitary; diurnal hunters",
    conservationStatus: "Vulnerable",
    coolFacts: [
      "Fastest land animal up to 112 km/h",
      "Tail for balance while running",
      "Cannot roar",
      "Hunt during day to avoid predators",
      "High cub mortality",
      "Semi-retractable claws for grip"
    ],
    howToHelp: [
      "Avoid trophy hunting",
      "Support cheetah programs",
      "Educate friends about habitats",
      "Reduce harmful land-use",
      "Participate in fundraising",
      "Adopt a cheetah through programs"
    ]
  },
  "Sloth": {
    image: "images/sloth.jpg",
    scientificName: "Folivora",
    population: "Varies by species",
    distribution: "Central & South America",
    diet: "Leaves, some fruits/flowers",
    behavior: "Slow; hang in trees; solitary",
    conservationStatus: "Vulnerable/Least Concern",
    coolFacts: [
      "Algae grow on fur",
      "Rotate head 270°",
      "Sleep 15–20 hours/day",
      "Low metabolic rate",
      "Hold breath 40 min underwater",
      "Two-toed vs three-toed differences"
    ],
    howToHelp: [
      "Plant native trees",
      "Drive carefully in rainforest areas",
      "Support reforestation",
      "Avoid wild pet trade",
      "Educate about rainforests",
      "Donate to sloth rescues"
    ]
  },
  "Orangutan": {
    image: "images/orangutan.jpg",
    scientificName: "Pongo pygmaeus / abelii",
    population: "Approx. 104,700",
    distribution: "Borneo, Sumatra",
    diet: "Fruits, leaves, bark, insects",
    behavior: "Solitary, arboreal, intelligent",
    conservationStatus: "Critically Endangered",
    coolFacts: [
      "97% DNA shared with humans",
      "Use tools to get food",
      "Long-term memory",
      "Mostly lives in trees",
      "Communicate facially and vocally",
      "Mothers care 8 years"
    ],
    howToHelp: [
      "Use sustainable palm oil",
      "Support rescue centers",
      "Avoid wild pet trade",
      "Educate about rainforest",
      "Participate in reforestation",
      "Donate to orangutan organizations"
    ]
  },
  "Sea Turtle": {
    image: "images/sea_turtle.jpg",
    scientificName: "Chelonioidea",
    population: "Varies; many endangered",
    distribution: "Oceans worldwide",
    diet: "Seagrass, jellyfish, crustaceans",
    behavior: "Migratory; nest on beaches",
    conservationStatus: "Endangered/Vulnerable",
    coolFacts: [
      "Migrate thousands of km",
      "Live up to 80 years",
      "Navigate with Earth's magnetic field",
      "Hold breath for hours",
      "Hatchlings follow moonlight",
      "Existed over 100 million years"
    ],
    howToHelp: [
      "Beach clean-ups",
      "Reduce plastic use",
      "Support marine protected areas",
      "Educate about fishing",
      "Protect nesting beaches",
      "Donate to turtle conservation"
    ]
  },
  "Wolf": {
    image: "images/wolf.jpg",
    scientificName: "Canis lupus",
    population: "Approx. 200,000",
    distribution: "North America, Europe, Asia",
    diet: "Deer, elk, rabbits",
    behavior: "Live in packs; social hierarchy",
    conservationStatus: "Least Concern / Endangered locally",
    coolFacts: [
      "Communicate via howls and body language",
      "Run up to 60 km/h",
      "Teamwork in hunting",
      "Pack hierarchy is strict",
      "Top predator role",
      "Can swim across rivers"
    ],
    howToHelp: [
      "Avoid harming wolves",
      "Support wolf conservation",
      "Educate about predators",
      "Reduce conflict near habitats",
      "Restore habitats",
      "Donate to wolf organizations"
    ]
  },
  "Dolphin": {
    image: "images/dolphin.jpg",
    scientificName: "Delphinidae",
    population: "Varies by species",
    distribution: "Oceans worldwide",
    diet: "Fish, squid, crustaceans",
    behavior: "Highly social; communicate with clicks/whistles",
    conservationStatus: "Least Concern/Endangered",
    coolFacts: [
      "Use echolocation",
      "Swim 37 km/h in bursts",
      "Live in pods",
      "Playful, surf waves",
      "Self-recognition in mirrors",
      "Complex communication"
    ],
    howToHelp: [
      "Reduce ocean plastic",
      "Support sustainable fishing",
      "Participate in clean-ups",
      "Avoid dolphin parks",
      "Educate about oceans",
      "Donate to marine wildlife orgs"
    ]
  },
  "Owl": {
    image: "images/owl.jpg",
    scientificName: "Strigiformes",
    population: "Varies by species",
    distribution: "Worldwide",
    diet: "Small mammals, insects, birds",
    behavior: "Nocturnal; excellent vision/hearing",
    conservationStatus: "Varies; some endangered",
    coolFacts: [
      "Rotate head 270°",
      "Silent flight feathers",
      "Excellent night vision",
      "Strong talons",
      "Facial discs focus sound",
      "Unique hoots per species"
    ],
    howToHelp: [
      "Provide nesting boxes",
      "Avoid pesticides",
      "Protect forests",
      "Educate others",
      "Drive carefully",
      "Support wildlife orgs"
    ]
  },
  "Eagle": {
    image: "images/eagle.jpg",
    scientificName: "Accipitridae",
    population: "Varies by species",
    distribution: "Worldwide",
    diet: "Fish, small mammals, birds",
    behavior: "Excellent hunters; strong vision/talons",
    conservationStatus: "Varies; some endangered",
    coolFacts: [
      "See 8x farther than humans",
      "Dive over 150 km/h",
      "Strong talons can lift heavy prey",
      "Monogamous in many species",
      "Build large nests called eyries",
      "Use thermals to soar long distances"
    ],
    howToHelp: [
      "Support wildlife sanctuaries",
      "Avoid nesting disturbance",
      "Use organic farming",
      "Educate about eagles",
      "Report illegal hunting",
      "Donate to raptor orgs"
    ]
  },
  "Camel": {
    image: "images/camel.jpg",
    scientificName: "Camelus dromedarius / bactrianus",
    population: "Dromedary ~14M; Bactrian ~1.1M",
    distribution: "Middle East, Central Asia, North Africa",
    diet: "Herbivore — grasses, desert plants",
    behavior: "Adapted to desert; survive long without water",
    conservationStatus: "Domesticated / Wild Bactrian Endangered",
    coolFacts: [
      "Drink 40 gallons of water at once",
      "Store fat in humps",
      "Withstand high temps",
      "Wide feet for sand",
      "Eyelashes/nostrils protect against sand",
      "Can close nostrils during sandstorms"
    ],
    howToHelp: [
      "Support desert habitat conservation",
      "Avoid overexploiting water",
      "Educate about sustainable grazing",
      "Donate to camel programs",
      "Promote eco-tourism",
      "Avoid products harming desert ecosystems"
    ]
  },
  "Penguin": {
    image: "images/penguin.jpg",
    scientificName: "Spheniscidae",
    population: "Varies; millions",
    distribution: "Southern Hemisphere",
    diet: "Fish, squid, krill",
    behavior: "Flightless; excellent swimmers; live in colonies",
    conservationStatus: "Varies; some endangered",
    coolFacts: [
      "Dive over 500m",
      "Swim 36 km/h",
      "Waterproof feathers",
      "Mate for life",
      "Chicks form crèches",
      "Some travel thousands of km annually"
    ],
    howToHelp: [
      "Reduce carbon footprint",
      "Participate in coastal clean-ups",
      "Support sustainable fishing",
      "Educate about penguins",
      "Avoid disturbing colonies",
      "Donate to penguin conservation"
    ]
  }
};

// =================== DROPDOWN ANIMAL DISPLAY ===================
const select = document.getElementById("animalSelect");
const display = document.getElementById("animalInfo");

// Populate dropdown
for (let name in animals) {
    const option = document.createElement("option");
    option.value = name;
    option.innerText = name;
    select.appendChild(option);
}

select.addEventListener("change", () => {
    const animalName = select.value;
    const animal = animals[animalName];
    if (!animal) return;

    display.innerHTML = `
        <h2>${animalName}</h2>
        <img src="${animal.image}" alt="${animalName}">
        <p><strong>Scientific Name:</strong> ${animal.scientificName}</p>
        <p><strong>Population:</strong> ${animal.population}</p>
        <p><strong>Distribution:</strong> ${animal.distribution}</p>
        <p><strong>Diet:</strong> ${animal.diet}</p>
        <p><strong>Behavior:</strong> ${animal.behavior}</p>
        <p><strong>Conservation Status:</strong> ${animal.conservationStatus}</p>
        <h3>Cool Facts:</h3>
        <ul>${animal.coolFacts.map(f => `<li>${f}</li>`).join('')}</ul>
        <h3>How You Can Help:</h3>
        <ul>${animal.howToHelp.map(f => `<li>${f}</li>`).join('')}</ul>
    `;
});

