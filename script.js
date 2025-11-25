
    // Année dans le pied de page
    document.getElementById('year').textContent = new Date().getFullYear();

    // --- i18n (FR/EN) ---
    const dict = {
      fr: {
        'nav.start': 'Accueil', 'nav.brand': 'Marque', 'nav.vision': 'Vision & Mission', 'nav.logo': 'Logo', 'nav.products': 'Produits & Services', 'nav.pricing': 'Tarifs', 'nav.imagery': 'Imagerie & Usage', 'nav.composition': 'Composition', 'nav.maquette': 'Maquette', 'nav.about': 'À propos', 'nav.contact': 'Contact', 'nav.lang': 'FR',
        'hero.tag': 'Slogan', 'hero.head': '« Récolté avec Amour, Partagé avec le Monde »', 'hero.lead': 'DK Bio est une marque née au Cameroun qui promeut l\'alimentation locale et durable, en réduisant le gaspillage grâce à la déshydratation.', 'hero.ctaProducts': 'Nos produits', 'hero.ctaPricing': 'Tarifs', 'hero.placeholder': 'Espace réservé : visuel clé / logo du flyer',
        'brand.title': 'Présentation de la marque', 'brand.p1': 'Ce site Web constitue la pierre angulaire de notre identité et offre une compréhension profonde de l\'essence de DK Bio, avec les outils pour maintenir une présence forte et cohérente.', 'brand.p2': 'En 2022, DK Bio est né d\'une vision simple : remodeler l\'avenir de l\'alimentation au Cameroun en transformant le gaspillage en opportunité. Nous célébrons la richesse des produits locaux et les pratiques durables.', 'brand.placeholder': 'Espace réservé : image « Notre histoire »', 'brand.p3': 'Notre parcours est fait d\'innovation et de durabilité. Rejoignez DK Bio pour réimaginer l’alimentation de demain.', 'brand.essence': 'Essence', 'brand.e1': ' Innovation & Santé', 'brand.e2': ' Durabilité & Agriculture locale', 'brand.e3': ' Réduction du gaspillage alimentaire', 'brand.e4': ' Autonomisation des communautés',
        'vm.visionTitle': 'Vision', 'vm.missionTitle': 'Mission', 'vm.vision': '"Transformer l\'agriculture en pierre angulaire de la prospérité au Cameroun, en créant des emplois durables et en donnant à la prochaine génération les moyens de percevoir la véritable valeur de l\'agriculture locale. En transformant notre abondance naturelle en une alimentation innovante et sans gaspillage, nous visons à réduire la dépendance aux importations étrangères et à construire un avenir où l\'agriculture est chérie comme un trésor national, alimentant à la fois notre économie et nos communautés"', 'vm.mission': '« Chez DK Bio, notre mission est de réduire le gaspillage alimentaire, de créer des emplois durables et de promouvoir la valeur de l\'agriculture locale au Cameroun. Grâce à des techniques de conservation innovantes telles que la déshydratation, nous transformons les produits locaux en aliments nutritifs et durables, renforçant ainsi les communautés et favorisant l\'indépendance économique. Nous sommes dédiés à la construction d\'un avenir où la jeunesse camerounaise perçoit l\'agriculture comme une industrie précieuse et florissante, qui soutient à la fois l\'environnement et l\'autosuffisance de la nation.»',
        'logo.placeholder': 'Espace réservé : logo DK Bio', 'logo.note': 'Ajoutez ici le fichier logo final depuis le flyer.', 'logo.title': 'Logo & signification', 'logo.l1': 'Symbole de la plante : croissance, renouveau, durabilité.', 'logo.l2': 'Ligne de sol brune : terre, stabilité, agriculture.', 'logo.l3': 'Texte « DK Bio » : héritage (Dongmo Kafack) & écoresponsabilité.', 'logo.l4': 'Slogan : « Récolté avec Amour, Partagé avec le Monde ».', 'prod.title': 'Nos produits & Services', 'prod.fruitTitle': 'Fruits déshydratés', 'prod.fruitDesc': 'Conservent les saveurs naturelles, vitamines et minéraux.', 'prod.f1': 'Ananas', 'prod.f2': 'Papayes', 'prod.f3': 'Oranges', 'prod.f4': 'Citrons', 'prod.f5': 'Mangues', 'prod.f6': 'Goyaves', 'prod.f7': 'Noix de coco', 'prod.f8': 'Bananes', 'prod.vegTitle': 'Légumes déshydratés', 'prod.vegDesc': 'Idéaux pour soupes, ragoûts et autres plats.', 'prod.v1': 'Tomates', 'prod.v2': 'Carottes', 'prod.v3': 'Pommes de terre', 'prod.leafTitle': 'Feuilles déshydratées', 'prod.l1': 'Feuilles d\'Eru', 'prod.l2': 'Waterleaf', 'prod.l3': 'Feuilles amères', 'prod.l4': 'Okok', 'prod.l5': 'Feuilles de manioc', 'prod.l6': 'Feuilles de Djek', 'prod.l7': 'Feuilles de laurier', 'prod.l8': 'Citronnelle', 'prod.l9': 'Moringa', 'prod.l10': 'Papaye', 'prod.spiceTitle': 'Épices déshydratées', 'prod.s1': 'Mélanges d\'épices locales', 'prod.s2': 'Échalotes', 'prod.s3': 'Poireaux', 'prod.s4': 'Oignons', 'prod.s5': 'Ail', 'prod.powderTitle': 'Poudres déshydratées', 'prod.p1': 'Farine de manioc', 'prod.p2': 'Poudre de bouillie fermentée', 'prod.p3': 'Poudre de tomates', 'prod.serviceTitle': 'Service à la clientèle', 'prod.serviceDesc': 'Déshydratation sur mesure : fruits, légumes, feuilles, rhizomes, épices.', 'prod.serviceNote': 'Apportez vos produits – nous déshydratons avec un équipement haut de gamme.',
        'price.title': 'Liste de prix', 'price.col1': 'Catégorie', 'price.col2': 'Article', 'price.col3': 'Quantité', 'price.col4': 'Prix', 'price.i14': 'Épices (poudre)', 'price.i1': 'pour poulet', 'price.i2': 'pour poisson', 'price.i3': 'Farine de manioc', 'price.i4': 'Poudre de bouillie fermentée', 'price.i5': 'pourdre de tomate', 'price.i6': 'Ananas (par tranche)', 'price.i7': 'Orange (par tranche)', 'price.i8': 'citron (par tranche)', 'price.i9': 'Piment', 'price.i10': 'Gingembre', 'price.i11': 'Feuille de Menthe', 'price.i12': 'Ndolé (lavée, déshydratée, prête à l\'emploi)', 'price.i13': 'Déshydratation (produits de 100 g)', 'price.i15': 'Poudres déshydratées', 'price.i16': 'Fruits déshydratés', 'price.i17': 'Épices', 'price.i18': 'Feuilles', 'price.i19': 'Service', 'price.note': 'Les prix des fruits déshydratés varient selon la teneur en eau et la durée de séchage.',
        'img.title': 'Imagerie & usages produits', 'img.p1ph': 'Espace réservé : Poudre de bouillie', 'img.p1t': 'Poudre de bouillie', 'img.p1u': '<strong>Utilisation :</strong> option saine pour le petit-déjeuner.', 'img.p1a': '<strong>Avantages :</strong> nutritive, adaptée aux repas familiaux.', 'img.p2ph': 'Espace réservé : Cocktails de fruits déshydratés', 'img.p2t': 'Fruits déshydratés', 'img.p2u': '<strong>Utilisation :</strong> sublimer la saveur des cocktails (ananas, orange, citron).', 'img.p2a': '<strong>Exemple :</strong> bars & restaurants.', 'img.p3ph': 'Espace réservé : Farine de manioc', 'img.p3t': 'Farine de manioc', 'img.p3u': '<strong>Utilisation :</strong> alternative sans gluten.', 'img.p3a': '<strong>Avantages :</strong> substitut à la farine de blé.', 'img.p4ph': 'Espace réservé : Flocons de fruits', 'img.p4t': 'Flocons de fruits', 'img.p4u': '<strong>Utilisation :</strong> mélange à grignoter ou pour les repas.', 'img.p4a': '<strong>Avantages :</strong> riches en nutriments.', 'img.p5ph': 'Espace réservé : Feuilles de Ndolé', 'img.p5t': 'Feuilles de Ndolé (lavées & séchées)', 'img.p5u': '<strong>Utilisation :</strong> feuilles prêtes à cuire.', 'img.p5a': '<strong>Avantages :</strong> gain de temps pour plats traditionnels.',
        'galerie': 'Galerie', 'galerie.text': 'Garde-fous visuels pour une identité cohérente.', 'video.title': 'Vidéo de présentation', 'video.desc': 'Découvrez notre histoire, nos valeurs et notre engagement envers une alimentation durable.', 'about.text1': 'En tant que PDG de DK Bio , je représente une génération de jeunes Africains déterminés à transformer le monde par l’innovation et la durabilité. Mon parcours en affaires internationales m’a révélé l’urgence de solutions face au gaspillage alimentaire et à la gestion des ressources au Cameroun.', 'about.text2': 'DK Bio est ma réponse : nous déshydratons fruits, légumes et épices pour prolonger leur conservation, préserver leur valeur nutritive et soutenir l’économie locale.', 'about.text3': 'Mon ambition est claire : faire de DK Bio un symbole d’ingéniosité africaine, inspirer la jeunesse à entreprendre et à bâtir une Afrique plus autonome, tout en partageant la richesse de nos produits avec le monde.', 'about.text4': 'Notre vision : réduire le gaspillage alimentaire, autonomiser les communautés locales et partager la richesse des produits africains avec le monde.', 'about.sigLabel': 'Signature :', 'about.sig': 'Mme Dongmo Donfack Patricia',
        'contact.title': 'Contact', 'contact.nameL': 'Nom', 'contact.mailL': 'E-mail', 'contact.msgL': 'Message', 'contact.send': 'Envoyer',
        'media.title': 'Médias & téléchargements', 'media.brandbook': 'Brandbook (PDF)', 'media.link': 'ajouter le lien', 'media.logo': 'Logo (PNG/SVG)', 'media.add': 'ajouter ici', 'media.ph': 'Espace réservé : photo équipe / site',
        'footer.rights': 'Tous droits réservés.', 'footer.top': 'Haut de page', 'footer.prices': 'Tarifs', 'footer.about': 'À propos'
      },
      en: {
        'nav.start': 'Home', 'nav.brand': 'Brand', 'nav.vision': 'Vision & Mission', 'nav.logo': 'Logo', 'nav.products': 'Products & Services', 'nav.pricing': 'Pricing', 'nav.imagery': 'Imagery & Usage', 'nav.composition': 'Composition', 'nav.maquette': 'Mockups', 'nav.about': 'About', 'nav.contact': 'Contact', 'nav.lang': 'EN',
        'hero.tag': 'Tagline', 'hero.head': '“Harvested with Love, Shared with the World”', 'hero.lead': 'DK Bio is a Cameroon-born brand that promotes local, sustainable food, reducing waste through dehydration.', 'hero.ctaProducts': 'See products', 'hero.ctaPricing': 'Price list', 'hero.placeholder': 'Placeholder: key visual / logo from flyer',
        'brand.title': 'Brand presentation', 'brand.p1': 'This website is the cornerstone of our identity and offers a deep understanding of the essence of DK Bio, with the tools to maintain a strong and consistent presence.', 'brand.p2': 'In 2022, DK Bio was born from a simple vision: to reshape the future of food in Cameroon by turning waste into opportunity. We celebrate the richness of local products and sustainable practices.', 'brand.placeholder': 'Placeholder: “Our story” image', 'brand.p3': 'Our journey is one of innovation and sustainability. Join DK Bio as we reimagine tomorrow\'s food.', 'brand.essence': 'Essence', 'brand.e1': ' Innovation & Health', 'brand.e2': ' Sustainability & Local farming', 'brand.e3': ' Reducing food waste', 'brand.e4': ' Empowering communities',
        'vm.visionTitle': 'Vision', 'vm.missionTitle': 'Mission', 'vm.vision': '“Transforming agriculture into the cornerstone of prosperity in Cameroon, creating sustainable jobs and empowering the next generation to recognize the true value of local agriculture. By transforming our natural abundance into innovative, waste-free food, we aim to reduce dependence on foreign imports and build a future where agriculture is cherished as a national treasure, fueling both our economy and our communities.”', 'vm.mission': '“At DK Bio, our mission is to reduce food waste, create sustainable jobs, and promote the value of local agriculture in Cameroon. Using innovative preservation techniques such as dehydration, we transform local produce into nutritious and sustainable foods, strengthening communities and promoting economic independence. We are dedicated to building a future where Cameroon\'s youth see agriculture as a valuable and thriving industry that supports both the environment and the nation\'s self-sufficiency.”',
        'logo.placeholder': 'Placeholder: DK Bio logo', 'logo.note': 'Insert the final logo file from the flyer here.', 'logo.title': 'Logo & meaning', 'logo.l1': 'Plant symbol: growth, renewal, sustainability.', 'logo.l2': 'Brown ground line: earth, stability, agriculture.', 'logo.l3': 'Text “DK Bio”: heritage (Dongmo Kafack) & eco-responsibility.', 'logo.l4': 'Tagline: “Harvested with Love, Shared with the World”.',
        'prod.title': 'Our products & services', 'prod.fruitTitle': 'Dehydrated fruits', 'prod.fruitDesc': 'Retain natural flavors, vitamins and minerals.', 'prod.f1': 'Pineapples', 'prod.f2': 'Papayas', 'prod.f3': 'Oranges', 'prod.f4': 'Lemons', 'prod.f5': 'Mangoes', 'prod.f6': 'Guavas', 'prod.f7': 'Coconut', 'prod.f8': 'Bananas', 'prod.vegTitle': 'Dehydrated vegetables', 'prod.vegDesc': 'Great for soups, stews and other dishes.', 'prod.v1': 'Tomatoes', 'prod.v2': 'Carrots', 'prod.v3': 'Potatoes', 'prod.leafTitle': 'Dehydrated leaves', 'prod.l1': 'Eru leaves', 'prod.l2': 'Waterleaf', 'prod.l3': 'Bitter leaves', 'prod.l4': 'Okok', 'prod.l5': 'Cassava leaves', 'prod.l6': 'Djek leaves', 'prod.l7': 'Bay leaves', 'prod.l8': 'Lemongrass', 'prod.l9': 'Moringa', 'prod.l10': 'Papaya', 'prod.spiceTitle': 'Dehydrated spices', 'prod.s1': 'Local spice blends', 'prod.s2': 'Shallots', 'prod.s3': 'Leeks', 'prod.s4': 'Onions', 'prod.s5': 'Garlic', 'prod.powderTitle': 'Dehydrated powders', 'prod.p1': 'Cassava flour', 'prod.p2': 'Fermented porridge powder', 'prod.p3': 'Tomato powder', 'prod.serviceTitle': 'Customer service', 'prod.serviceDesc': 'Custom dehydration: fruits, vegetables, leaves, rhizomes, spices.', 'prod.serviceNote': 'Bring your produce – we dehydrate it with pro-grade equipment.',
        'price.title': 'Price list', 'price.col1': 'Category', 'price.col2': 'Item', 'price.col3': 'Quantity', 'price.col4': 'Price', 'price.i1': 'for chicken', 'price.i2': 'for fish', 'price.i3': 'Cassava flour', 'price.i4': 'Fermented porridge powder', 'price.i5': 'Tomato powder', 'price.i6': 'Pineapple (per slice)', 'price.i7': 'Orange (per slice)', 'price.i8': 'Lemon (per slice)', 'price.i9': 'Chili', 'price.i10': 'Ginger', 'price.i11': 'Mint leaf', 'price.i12': 'Ndole (washed, dehydrated, ready to use)', 'price.i13': 'Dehydration (products weighing 100 g)', 'price.i14': 'Spices (powder)', 'price.i15': 'Dehydrated powders', 'price.i16': 'Dehydrated fruit', 'price.i17': 'Spices', 'price.i18': 'Leaves', 'price.i19': 'Service', 'price.note': 'Fruit prices vary by water content and drying time.',
        'img.title': 'Imagery & product usage', 'img.p1ph': 'Placeholder: Porridge powder', 'img.p1t': 'Porridge powder', 'img.p1u': '<strong>Use:</strong> healthy breakfast option.', 'img.p1a': '<strong>Benefits:</strong> nutritious, family-friendly.', 'img.p2ph': 'Placeholder: Dehydrated fruit cocktails', 'img.p2t': 'Dehydrated fruits', 'img.p2u': '<strong>Use:</strong> elevate cocktail flavor (pineapple, orange, lemon).', 'img.p2a': '<strong>Example:</strong> bars & restaurants.', 'img.p3ph': 'Placeholder: Cassava flour', 'img.p3t': 'Cassava flour', 'img.p3u': '<strong>Use:</strong> gluten-free alternative.', 'img.p3a': '<strong>Benefits:</strong> wheat flour substitute.', 'img.p4ph': 'Placeholder: Fruit flakes', 'img.p4t': 'Fruit flakes', 'img.p4u': '<strong>Use:</strong> snack mix or meals.', 'img.p4a': '<strong>Benefits:</strong> nutrient-dense.', 'img.p5ph': 'Placeholder: Ndolé leaves', 'img.p5t': 'Ndole leaves (washed & dried)', 'img.p5u': '<strong>Use:</strong> ready-to-cook leaves.', 'img.p5a': '<strong>Benefits:</strong> time-saving for traditional dishes.',
        'galerie': 'Gallery', 'galerie.text': 'Visual guidelines for a consistent identity', 'video.title': 'Presentation video', 'video.desc': 'Discover our history, our values, and our commitment to sustainable food.', 'about.title': 'About the author / CEO', 'about.text1': 'As CEO of DK Bio, I represent a generation of young Africans determined to transform the world through innovation and sustainability. My experience in international business has revealed to me the urgent need for solutions to food waste and resource management in Cameroon.', 'about.text2': 'DK Bio is my answer: we dehydrate fruits, vegetables, and spices to extend their shelf life, preserve their nutritional value, and support the local economy.', 'about.text3': 'My ambition is clear: to make DK Bio a symbol of African ingenuity, to inspire young people to become entrepreneurs and build a more self-sufficient Africa, while sharing the richness of our products with the world.', 'about.text4': 'Our vision: to reduce food waste, empower local communities, and share the richness of African products with the world.', 'about.sigLabel': 'Signature:', 'about.sig': 'Mrs. Dongmo Donfack Patricia',
        'contact.title': 'Contact', 'contact.nameL': 'Name', 'contact.mailL': 'Email', 'contact.msgL': 'Message', 'contact.send': 'Send',
        'media.title': 'Media & downloads', 'media.brandbook': 'Brandbook (PDF)', 'media.link': 'add link', 'media.logo': 'Logo (PNG/SVG)', 'media.add': 'add here', 'media.ph': 'Placeholder: team / site photo',
        'footer.rights': 'All rights reserved.', 'footer.top': 'Back to top', 'footer.prices': 'Pricing', 'footer.about': 'About'
      }
    };

    function setLang(lang) {
      const map = dict[lang] || dict.fr;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (map[key] !== undefined) {
          if (/</.test(map[key])) { el.innerHTML = map[key]; }
          else { el.textContent = map[key]; }
        }
      });
      document.documentElement.lang = lang;
    }

    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', e => {
        const lang = e.currentTarget.getAttribute('data-lang');
        setLang(lang);
      });
    });

    // FR par défaut
    setLang('fr');

    // Démo soumission
    document.querySelector('form')?.addEventListener('submit', function (e) {
      e.preventDefault();
      const msg = document.documentElement.lang === 'en' ? 'Thanks! Your message has been sent.' : 'Merci ! Votre message a été envoyé.';
      alert(msg);
    });

    // --- THEME TOGGLE (Bootstrap 5.3) ---
    const THEME_KEY = 'dkbio-theme';
    const htmlEl = document.documentElement;
    const themeBtn = document.getElementById('themeToggle');

    // Systempräferenz
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    function getPreferredTheme() {
      return localStorage.getItem(THEME_KEY) || (prefersDark.matches ? 'dark' : 'light');
    }
    function applyTheme(theme) {
      htmlEl.setAttribute('data-bs-theme', theme);
      if (themeBtn) {
        themeBtn.innerHTML = theme === 'dark'
          ? '<i class="bi bi-sun"></i>'
          : '<i class="bi bi-moon"></i>';
        themeBtn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        themeBtn.setAttribute('title', theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre');
      }
    }
    // Initial setzen
    applyTheme(getPreferredTheme());
    // Klick zum Umschalten + speichern
    themeBtn?.addEventListener('click', () => {
      const next = (htmlEl.getAttribute('data-bs-theme') === 'dark') ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
    // Systemänderungen respektieren, solange kein Nutzerwert gesetzt ist
    prefersDark.addEventListener('change', () => {
      if (!localStorage.getItem(THEME_KEY)) applyTheme(getPreferredTheme());
    });
