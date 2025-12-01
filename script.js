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
    ],
      cat: {
    name: "Domestic Cat",
    image: "images/cat.jpg",
    population: "Over 600 million worldwide",
    location: "Lives globally as pets and feral populations",
    facts: [
        "Cats can jump up to six times their body length.",
        "A cat’s purr can promote healing and reduce stress.",
        "Cats have 32 muscles in each ear.",
        "The oldest known pet cat was found in a 9,500-year-old grave in Cyprus.",
        "Cats spend 70% of their life sleeping.",
        "They can make over 100 different vocal sounds."
        "If your cat was named Micky you are very lucky and a beautiful person"
    ],
    howToHelp: [
        "Adopt cats instead of buying from breeders.",
        "Keep your cat indoors to protect wildlife.",
        "Spay and neuter to reduce stray cat populations.",
        "Donate old towels or blankets to shelters.",
        "Pick up litter outdoors so wildlife stays safe.",
        "Support TNR (trap-neuter-return) programs."
    ],
          platypus: {
    name: "Platypus",
    image: "images/platypus.jpg",
    population: "Approx. 300,000 (varies by region)",
    location: "Eastern Australia and Tasmania",
    facts: [
        "The platypus is one of the only mammals that lay eggs.",
        "Males have venomous ankle spurs.",
        "They hunt using electroreception in their bill.",
        "Platypuses close their eyes and ears underwater.",
        "Their fur is waterproof and traps warmth.",
        "They store fat in their tails for survival."
    ],
    howToHelp: [
        "Use less plastic to reduce river pollution.",
        "Participate in local creek or river cleanups.",
        "Support conservation groups protecting Australian waterways.",
        "Avoid pouring chemicals down drains.",
        "Report pollution you see in streams or rivers.",
        "Support habitat restoration for wetlands."
    ],
              hippo: {
    name: "Hippopotamus",
    image: "images/hippo.jpg",
    population: "Around 115,000–130,000",
    location: "Sub-Saharan Africa",
    facts: [
        "Hippos secrete a natural sunblock called 'blood sweat'.",
        "They can run up to 30 km/h on land.",
        "Hippos spend up to 16 hours a day in water.",
        "They can hold their breath for 5 minutes underwater.",
        "Despite their size, they are great swimmers.",
        "Their mouths can open nearly 180 degrees."
    ],
    howToHelp: [
        "Avoid purchasing ivory or wildlife products.",
        "Support anti-poaching conservation groups.",
        "Reduce water waste to help river ecosystems.",
        "Share awareness about illegal wildlife trade.",
        "Donate to African wildlife rangers.",
        "Recycle properly to reduce river pollution."
    ],
                  greatWhiteShark: {
    name: "Great White Shark",
    image: "images/greatwhite.jpg",
    population: "Estimated 3,500",
    location: "Worldwide coastal waters",
    facts: [
        "Great whites can detect one drop of blood in 25 gallons of water.",
        "They can swim up to 25 mph.",
        "Great whites have around 300 teeth arranged in rows.",
        "They migrate thousands of miles per year.",
        "They can leap fully out of the water (breaching).",
        "They have special gel-filled organs to sense electrical fields."
    ],
    howToHelp: [
        "Choose sustainable seafood to protect marine food webs.",
        "Reduce single-use plastic to prevent ocean pollution.",
        "Support shark conservation groups.",
        "Learn and teach others about shark importance.",
        "Avoid shark fin products.",
        "Participate in beach cleanups."
    ],
                      giantPacificOctopus: {
    name: "Giant Pacific Octopus",
    image: "images/giantoctopus.jpg",
    population: "Unknown (stable)",
    location: "North Pacific Ocean",
    facts: [
        "They have three hearts.",
        "Each arm can act independently with its own mini-brain.",
        "They can fit through any hole larger than their beak.",
        "They are masters of camouflage.",
        "They can regenerate lost arms.",
        "They are extremely intelligent problem-solvers."
    ],
    howToHelp: [
        "Avoid products with microplastics.",
        "Reduce seafood consumption of octopus species.",
        "Use reef-safe sunscreen when swimming.",
        "Support ocean protection foundations.",
        "Recycle and dispose of waste responsibly.",
        "Participate in marine habitat cleanups."
    ],
                          clownfish: {
    name: "Clownfish",
    image: "images/clownfish.jpg",
    population: "Stable in the wild",
    location: "Warm waters of the Indian and Pacific Oceans",
    facts: [
        "Clownfish live symbiotically with sea anemones.",
        "All clownfish are born male; some turn female.",
        "They communicate with popping and clicking sounds.",
        "Their mucus protects them from anemone stings.",
        "There are 30 known species.",
        "They lay eggs on flat surfaces near their host anemone."
    ],
    howToHelp: [
        "Never touch coral reefs.",
        "Avoid buying wild-caught reef fish.",
        "Choose reef-safe sunscreen.",
        "Reduce plastic pollution.",
        "Support reef restoration organizations.",
        "Educate others about reef conservation."
    ],
                              harborSeal: {
    name: "Harbor Seal",
    image: "images/harborseal.jpg",
    population: "Approximately 500,000",
    location: "Coastal waters of the Northern Hemisphere",
    facts: [
        "Harbor seals can dive up to 1,500 feet.",
        "They sleep on land and in water.",
        "Their whiskers detect vibrations in water.",
        "Pups can swim minutes after birth.",
        "They can hold their breath for 30 minutes.",
        "Each seal has unique spot patterns."
    ],
    howToHelp: [
        "Keep distance from seals on beaches.",
        "Never feed marine wildlife.",
        "Reduce plastic waste.",
        "Support ocean sanctuaries.",
        "Participate in beach cleanups.",
        "Report entangled or injured seals."
    ],
                                  pufferfish: {
    name: "Pufferfish",
    image: "images/pufferfish.jpg",
    population: "Varies by species",
    location: "Warm coastal waters",
    facts: [
        "Pufferfish inflate to appear larger to predators.",
        "They contain tetrodotoxin, a deadly poison.",
        "Some species can change color.",
        "They have strong beaks to crush shells.",
        "There are over 120 species.",
        "They are surprisingly good swimmers."
    ],
    howToHelp: [
        "Avoid buying dried or preserved pufferfish products.",
        "Reduce plastic waste that affects ocean health.",
        "Support marine protected areas.",
        "Help reduce chemical runoff into waterways.",
        "Choose sustainable seafood.",
        "Spread awareness of coral reef protection."
    ],
                                      axolotl: {
    name: "Axolotl",
    image: "images/axolotl.jpg",
    population: "Less than 1,000 in the wild (critically endangered)",
    location: "Xochimilco canals, Mexico",
    facts: [
        "Axolotls can regenerate limbs, organs, and parts of their brain.",
        "They remain in their juvenile form their entire life (neotenic).",
        "They have feathery external gills.",
        "They can regenerate their spinal cord.",
        "Wild axolotls are extremely rare.",
        "They come in many color morphs such as leucistic and golden."
    ],
    howToHelp: [
        "Avoid polluting waterways.",
        "Support conservation of Mexico's Xochimilco wetlands.",
        "Never release pet axolotls into the wild.",
        "Educate others about this endangered species.",
        "Support habitat restoration projects.",
        "Reduce fertilizer use in gardens to prevent water contamination."
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


