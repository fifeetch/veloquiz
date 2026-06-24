"use strict";

const questions = [
  {category:"SHIS", icon:"🧭", level:"Fondamentaux", page:3, q:"À quoi sert principalement la codification SHIS ?", choices:["Identifier sans ambiguïté les jeux de direction","Mesurer l'usure d'une chaîne","Définir la largeur d'un pneu","Classer les types de freins"], answer:"Identifier sans ambiguïté les jeux de direction", why:"Le SHIS est un système universel qui décrit précisément les interfaces du jeu de direction et évite les anciennes appellations ambiguës."},
  {category:"SHIS", icon:"🧭", level:"Fondamentaux", page:3, q:"Dans le code ZS44/28.6, que signifie « ZS » ?", choices:["Zero Stack","Zone Standard","Zéro Serrage","Zinc Steel"], answer:"Zero Stack", why:"ZS signifie Zero Stack : la coupelle est interne, à épaulement, et affleure le cadre."},
  {category:"SHIS", icon:"🧭", level:"Atelier", page:3, q:"Quel type SHIS désigne un logement usiné dans le cadre, sans coupelle ?", choices:["IS","EC","TH","ACB"], answer:"IS", why:"IS, pour Integrated Stack, indique que le roulement prend place dans un logement directement usiné dans le cadre."},
  {category:"SHIS", icon:"🧭", level:"Atelier", page:3, q:"Dans un code SHIS, le nombre placé après la barre oblique correspond à…", choices:["Le diamètre du pivot de fourche","La hauteur de la potence","Le diamètre de la roue","Le couple de serrage"], answer:"Le diamètre du pivot de fourche", why:"Le format est : type + diamètre du logement cadre / diamètre du pivot de fourche."},
  {category:"SHIS", icon:"🧭", level:"Expert", page:3, q:"Quel code décrit un jeu intégré pur souvent rencontré sur des cadres haut de gamme ?", choices:["IS42/28.6 | IS52/40","EC34/28.6 | EC34/30","ZS44/28.6 | EC49/40","TH44/28.6 | MH49/40"], answer:"IS42/28.6 | IS52/40", why:"Le guide cite IS42/28.6 | IS52/40 comme montage intégré pur sur cadres haut de gamme."},
  {category:"SHIS", icon:"🧭", level:"Atelier", page:3, q:"Quel diamètre réel correspond à un pivot de 1\"1/8 ?", choices:["28,6 mm","22,2 mm","31,8 mm","38,1 mm"], answer:"28,6 mm", why:"Le pivot 1\"1/8 mesure 28,6 mm ; c'est le standard moderne courant en route et VTT."},

  {category:"ETRTO", icon:"◉", level:"Fondamentaux", page:4, q:"Que décrit le code ETRTO 37-622 ?", choices:["Un pneu de 37 mm sur un siège de jante de 622 mm","Une jante de 37 pouces et un pneu de 622 g","Une pression de 3,7 bar pour une roue de 622 mm","Un pneu de 622 mm de large sur une jante de 37 mm"], answer:"Un pneu de 37 mm sur un siège de jante de 622 mm", why:"Le premier nombre est la largeur du pneu en millimètres, le second le diamètre de siège de jante (BSD)."},
  {category:"ETRTO", icon:"◉", level:"Fondamentaux", page:4, q:"Quel BSD correspond au 700C, très courant en route et gravel ?", choices:["622 mm","584 mm","559 mm","630 mm"], answer:"622 mm", why:"Le 700C, aussi appelé 28 pouces dans certains usages, possède un BSD de 622 mm."},
  {category:"ETRTO", icon:"◉", level:"Atelier", page:4, q:"Quel BSD correspond au 650B / 27,5 pouces ?", choices:["584 mm","559 mm","507 mm","451 mm"], answer:"584 mm", why:"Le 650B, commercialement appelé 27,5 pouces en VTT, correspond au diamètre ETRTO 584 mm."},
  {category:"ETRTO", icon:"◉", level:"Atelier", page:4, q:"Pour une jante de 19 à 21 mm de largeur intérieure, quelle plage de pneu est recommandée ?", choices:["35 à 50 mm","18 à 25 mm","23 à 32 mm","55 mm et plus"], answer:"35 à 50 mm", why:"Le tableau de compatibilité du guide recommande des pneus de 35 à 50 mm sur une jante interne de 19 à 21 mm."},
  {category:"ETRTO", icon:"◉", level:"Fondamentaux", page:4, q:"Quelle largeur de pneu est typique du VTT XC / trail ?", choices:["50 à 65 mm","18 à 25 mm","28 à 35 mm","80 mm et plus"], answer:"50 à 65 mm", why:"Le guide associe 50 à 65 mm au VTT XC / trail, et 65 à 80 mm à l'enduro / all-mountain."},
  {category:"ETRTO", icon:"◉", level:"Piège", page:5, q:"Pourquoi l'appellation « 26 pouces » ne suffit-elle pas pour choisir un pneu ?", choices:["Elle peut désigner plusieurs BSD incompatibles","Elle indique uniquement la pression maximale","Elle ne s'applique qu'aux vélos enfants","Elle mesure la largeur et non le diamètre"], answer:"Elle peut désigner plusieurs BSD incompatibles", why:"Sous le nom 26 pouces se cachent notamment les BSD 559, 571, 584 et 507 : seul le code ETRTO lève l'ambiguïté."},
  {category:"ETRTO", icon:"◉", level:"Expert", page:5, q:"Un ancien « 26 pouces hollandais » possède en réalité quel BSD ?", choices:["584 mm","559 mm","571 mm","507 mm"], answer:"584 mm", why:"Le 26 pouces hollandais du guide est en 584 mm, soit le même diamètre de siège que le 650B."},

  {category:"Pédalier", icon:"⚙", level:"Fondamentaux", page:6, q:"Quel est le rôle principal du pédalier ?", choices:["Transformer la force musculaire en rotation transmise à la chaîne","Maintenir la roue avant alignée","Absorber les vibrations du cadre","Régler automatiquement les vitesses"], answer:"Transformer la force musculaire en rotation transmise à la chaîne", why:"Le pédalier convertit l'effort du cycliste en mouvement rotatif, ensuite transmis à la chaîne."},
  {category:"Pédalier", icon:"⚙", level:"Atelier", page:6, q:"Quelle particularité distingue Hollowtech II ?", choices:["L'axe est intégré à la manivelle droite","Il utilise un axe carré en acier","Il possède dix cannelures","Il impose un boîtier italien"], answer:"L'axe est intégré à la manivelle droite", why:"Sur Hollowtech II, l'axe est solidaire de la manivelle droite et les roulements sont logés dans le boîtier."},
  {category:"Pédalier", icon:"⚙", level:"Expert", page:6, q:"Quel est le diamètre d'axe du standard SRAM DUB ?", choices:["28,99 mm","24 mm","30 mm","22,2 mm"], answer:"28,99 mm", why:"Le DUB utilise un axe de 28,99 mm, standardisé sur la gamme SRAM actuelle."},
  {category:"Pédalier", icon:"⚙", level:"Fondamentaux", page:6, q:"Quel profil de dents aide à retenir la chaîne sur un mono-plateau ?", choices:["Narrow-Wide","Flat-Top","Micro-Spline","Centerlock"], answer:"Narrow-Wide", why:"L'alternance de dents larges et fines du profil Narrow-Wide améliore la rétention de chaîne en mono-plateau."},
  {category:"Pédalier", icon:"⚙", level:"Atelier", page:6, q:"Quel BCD est courant sur un pédalier VTT classique à 4 trous ?", choices:["104 mm","130 mm","110 mm","64 mm uniquement"], answer:"104 mm", why:"Le BCD 104 mm à 4 trous est un classique du VTT ; le 64 mm est souvent associé au petit plateau."},
  {category:"Pédalier", icon:"⚙", level:"Atelier", page:7, q:"Quel standard de boîtier est fileté en G 1,37\" × 24 tpi ?", choices:["BSA / English","ITA","T47","PF30"], answer:"BSA / English", why:"Le BSA, standard fileté le plus répandu, emploie le filetage G 1,37 pouce × 24 tpi."},
  {category:"Pédalier", icon:"⚙", level:"Piège", page:7, q:"Dans quel sens serre-t-on la pédale gauche ?", choices:["Dans le sens anti-horaire","Dans le sens horaire","Dans les deux sens selon le cadre","Sans rotation, par pression"], answer:"Dans le sens anti-horaire", why:"La manivelle gauche possède un filetage inversé : on serre donc la pédale dans le sens anti-horaire."},
  {category:"Pédalier", icon:"⚙", level:"Fondamentaux", page:7, q:"Quel est l'avantage principal d'un boîtier fileté face au press-fit selon le guide ?", choices:["Fiabilité et facilité de montage","Poids toujours inférieur","Aucune maintenance nécessaire","Compatibilité avec tous les axes"], answer:"Fiabilité et facilité de montage", why:"Le fileté privilégie la fiabilité et la facilité de montage, au prix d'un léger surpoids."},

  {category:"VAE", icon:"🔋", level:"Fondamentaux", page:9, q:"En Union européenne, à quelle vitesse l'assistance d'un VAE standard doit-elle se couper ?", choices:["25 km/h","20 km/h","32 km/h","45 km/h"], answer:"25 km/h", why:"Un VAE standard doit assister uniquement au pédalage, rester à 250 W continus maximum et couper l'assistance au-delà de 25 km/h."},
  {category:"VAE", icon:"🔋", level:"Fondamentaux", page:9, q:"Quelle est la puissance moteur continue maximale d'un VAE standard dans l'UE ?", choices:["250 W","500 W","750 W","1 000 W"], answer:"250 W", why:"La limite réglementaire indiquée dans le guide est de 250 W en puissance continue."},
  {category:"VAE", icon:"🔋", level:"Atelier", page:9, q:"Quel capteur offre l'assistance la plus progressive et naturelle ?", choices:["Le capteur de couple","Le capteur de cadence seul","Le capteur de vitesse de roue","Le capteur de température"], answer:"Le capteur de couple", why:"Le capteur de couple mesure la force sur les pédales et module l'assistance en conséquence."},
  {category:"VAE", icon:"🔋", level:"Fondamentaux", page:9, q:"Quel indicateur décrit le mieux la quantité d'énergie disponible dans une batterie ?", choices:["Les watt-heures (Wh)","Les volts (V) seuls","Les ampères (A) instantanés","Les newtons-mètres (N·m)"], answer:"Les watt-heures (Wh)", why:"Les Wh combinent tension et capacité et constituent le vrai indicateur énergétique lié à l'autonomie."},
  {category:"VAE", icon:"🔋", level:"Atelier", page:9, q:"Quel avantage caractérise un moteur pédalier (mid-drive) ?", choices:["Il profite des rapports de transmission","Il n'use jamais la chaîne","Il fonctionne sans contrôleur","Il rend la roue avant motrice"], answer:"Il profite des rapports de transmission", why:"Le moteur pédalier travaille avec la transmission, donne un comportement naturel et une bonne répartition du poids, mais accroît l'usure de la chaîne."},
  {category:"VAE", icon:"🔋", level:"Entretien", page:10, q:"Pour un stockage longue durée, quelle charge de batterie est conseillée ?", choices:["Entre 50 et 80 %","Toujours exactement 100 %","Moins de 5 %","Peu importe si elle reste branchée"], answer:"Entre 50 et 80 %", why:"Le guide conseille 50 à 80 % pour limiter le vieillissement pendant un stockage prolongé."},
  {category:"VAE", icon:"🔋", level:"Entretien", page:10, q:"Sur un VAE à moteur pédalier, chaîne et cassette s'usent généralement…", choices:["2 à 3 fois plus vite","Deux fois moins vite","À la même vitesse qu'un vélo musculaire","Uniquement quand le moteur est coupé"], answer:"2 à 3 fois plus vite", why:"Le couple moteur traverse la transmission ; le guide estime l'usure 2 à 3 fois plus rapide sur un mid-drive."},
  {category:"VAE", icon:"🔋", level:"Culture atelier", page:10, q:"Quel système moteur est décrit comme ultra-compact, avec 50 N·m pour 1,85 kg ?", choices:["TQ HPR50","Bosch Performance Line CX","Shimano EP8","Brose Drive S Mag"], answer:"TQ HPR50", why:"Le TQ HPR50 est cité pour son format ultra-compact : 50 N·m et 1,85 kg."},

  {category:"Électricité", icon:"ϟ", level:"Calcul", page:11, q:"Quelle formule relie puissance, tension et intensité ?", choices:["P = U × I","P = U ÷ I","P = U + I","P = I ÷ U"], answer:"P = U × I", why:"La puissance en watts est le produit de la tension en volts par l'intensité en ampères."},
  {category:"Électricité", icon:"ϟ", level:"Calcul", page:11, q:"Quelle énergie stocke une batterie de 36 V et 14 Ah ?", choices:["504 Wh","360 Wh","672 Wh","50,4 Wh"], answer:"504 Wh", why:"E = U × C, donc 36 × 14 = 504 Wh."},
  {category:"Électricité", icon:"ϟ", level:"Expert", page:11, q:"À pleine charge, quelle tension atteint une batterie 36 V composée de 10 cellules en série (10S) ?", choices:["42 V","36 V","30 V","54,6 V"], answer:"42 V", why:"Chaque groupe atteint 4,2 V à pleine charge : 10 × 4,2 V = 42 V."},
  {category:"Électricité", icon:"ϟ", level:"Fondamentaux", page:12, q:"Que fait le contrôleur d'un moteur BLDC ?", choices:["Il convertit le courant continu en courant alternatif triphasé","Il transforme mécaniquement le couple en tension","Il recharge la batterie en permanence","Il remplace le capteur de pédalage"], answer:"Il convertit le courant continu en courant alternatif triphasé", why:"Le contrôleur alimente les bobinages du moteur BLDC en convertissant le courant continu de la batterie."},
  {category:"Électricité", icon:"ϟ", level:"Atelier", page:12, q:"À quoi sert la PWM dans un contrôleur VAE ?", choices:["À ajuster efficacement la puissance par impulsions","À équilibrer mécaniquement la roue","À mesurer la pression des pneus","À refroidir directement les cellules"], answer:"À ajuster efficacement la puissance par impulsions", why:"La modulation de largeur d'impulsion fait varier la durée des impulsions pour régler précisément la puissance sans pertes résistives inutiles."},
  {category:"Électricité", icon:"ϟ", level:"Entretien", page:12, q:"Quelle fonction du BMS protège une cellule qui dépasse 4,2 V ?", choices:["La protection contre la surcharge","La protection contre la décharge profonde","Le calcul de cadence","La modulation PWM"], answer:"La protection contre la surcharge", why:"Le BMS coupe la charge lorsqu'une cellule dépasse 4,2 V ; il gère aussi équilibrage, température et décharge profonde."},

  {category:"Serrage", icon:"🔧", level:"Atelier", page:13, q:"Quel couple générique est indiqué pour des pédales à filetage standard ?", choices:["35 à 40 N·m","4 à 6 N·m","12 à 14 N·m","2 à 4 N·m"], answer:"35 à 40 N·m", why:"Le guide indique 35 à 40 N·m pour les pédales. Les préconisations du fabricant restent prioritaires."},
  {category:"Serrage", icon:"🔧", level:"Atelier", page:13, q:"Quel couple est indiqué pour un axe traversant ?", choices:["12 à 15 N·m","2 à 4 N·m","35 à 50 N·m","5 à 7 N·m"], answer:"12 à 15 N·m", why:"La valeur générique fournie pour un thru-axle est de 12 à 15 N·m."},
  {category:"Serrage", icon:"🔧", level:"Atelier", page:13, q:"Quel couple est indiqué pour les six vis d'un rotor de disque ?", choices:["2 à 4 N·m","6 à 8 N·m","12 à 15 N·m","40 à 50 N·m"], answer:"2 à 4 N·m", why:"Les vis d'un rotor 6 boulons se serrent à 2 à 4 N·m selon le tableau du guide."},
  {category:"Serrage", icon:"🔧", level:"Expert", page:14, q:"Quel couple Shimano est indiqué pour le capuchon de précontrainte Hollowtech II ?", choices:["0,5 à 1,5 N·m, à la main","12 à 14 N·m","35 à 50 N·m","5 à 7 N·m"], answer:"0,5 à 1,5 N·m, à la main", why:"Ce capuchon règle seulement la précharge : le guide Shimano indique 0,5 à 1,5 N·m, à la main."},
  {category:"Serrage", icon:"🔧", level:"Sécurité", page:13, q:"Quelle précaution est recommandée pour les pièces en carbone ?", choices:["Couple réduit, pâte carbone et clé dynamométrique","Graissage abondant et serrage maximal","Montage à sec sans contrôle de couple","Utilisation systématique d'un frein-filet fort"], answer:"Couple réduit, pâte carbone et clé dynamométrique", why:"Le guide rappelle des couples souvent réduits (2 à 4 N·m), l'emploi d'une pâte de montage carbone et d'une clé dynamométrique."},

  {category:"Pneus", icon:"◎", level:"Fondamentaux", source:"Pneumatiques Schwalbe TechInfo 2015", page:11, q:"Quels sont les trois éléments essentiels d'un pneu de vélo ?", choices:["Carcasse, tringles et bande de roulement","Valve, rayons et fond de jante","Chambre, écrous et carcasse","Jante, moyeu et gomme"], answer:"Carcasse, tringles et bande de roulement", why:"La carcasse forme l'armature, les tringles déterminent le diamètre et assurent le maintien sur la jante, tandis que la bande de roulement est en caoutchouc."},
  {category:"Pneus", icon:"◎", level:"Technologie", source:"Pneumatiques Schwalbe TechInfo 2015", page:16, q:"De quoi sont généralement faites les tringles d'un pneu pliable ?", choices:["De fibres d'aramide ou Kevlar","De fils de cuivre","De caoutchouc plein","De titane tressé"], answer:"De fibres d'aramide ou Kevlar", why:"Les fibres d'aramide remplacent l'acier des tringles rigides et permettent de plier le pneu tout en gagnant environ 50 à 90 g."},
  {category:"Pneus", icon:"◎", level:"Atelier", source:"Pneumatiques Schwalbe TechInfo 2015", page:17, q:"Quel avantage procure un montage Tubeless à basse pression ?", choices:["Plus de confort et aucun risque de pincement de chambre","Une jante automatiquement plus légère","La suppression de toute crevaison possible","Une pression qui ne doit plus être contrôlée"], answer:"Plus de confort et aucun risque de pincement de chambre", why:"Sans chambre à air, le Tubeless évite les crevaisons par pincement et permet une pression plus faible, favorable au confort et à l'adhérence."},
  {category:"Pneus", icon:"◎", level:"Piège", source:"Pneumatiques Schwalbe TechInfo 2015", page:19, q:"Pourquoi l'aquaplaning est-il pratiquement absent à vélo ?", choices:["La petite surface de contact et la forte pression le rendent improbable","Les pneus vélo évacuent toujours l'eau par des rainures","La vitesse des vélos est limitée électroniquement","La jante absorbe l'eau sous le pneu"], answer:"La petite surface de contact et la forte pression le rendent improbable", why:"Le support estime qu'un flottement théorique n'apparaîtrait qu'à une vitesse proche de 200 km/h."},
  {category:"Pneus", icon:"◎", level:"Entretien", source:"Pneumatiques Schwalbe TechInfo 2015", page:25, q:"Quel signe impose le remplacement définitif d'un pneu ?", choices:["La bande de protection ou les fils de carcasse deviennent visibles","Les sculptures sont légèrement arrondies","La valve est munie d'un bouchon différent","Le pneu a roulé sous la pluie"], answer:"La bande de protection ou les fils de carcasse deviennent visibles", why:"Quand les couches internes apparaissent sous la bande de roulement, le pneu est définitivement usé et doit être remplacé."},
  {category:"Pneus", icon:"◎", level:"Atelier", source:"Pneumatiques Schwalbe TechInfo 2015", page:38, q:"Quel est le rôle principal du fond de jante ?", choices:["Protéger la chambre des têtes de rayons et des arêtes","Centrer automatiquement la roue","Augmenter le diamètre ETRTO du pneu","Lubrifier les tringles lors du montage"], answer:"Protéger la chambre des têtes de rayons et des arêtes", why:"Le fond de jante doit couvrir complètement les perçages pour isoler la chambre à air des agressions mécaniques de la jante."},

  {category:"Transmission", icon:"⛓", level:"Calcul", source:"Braquet et développement", page:3, q:"Comment calcule-t-on le braquet d'un vélo ?", choices:["Dents du plateau ÷ dents du pignon","Dents du pignon ÷ dents du plateau","Dents du plateau × circonférence de roue","Diamètre de roue ÷ dents du pignon"], answer:"Dents du plateau ÷ dents du pignon", why:"Le braquet exprime le nombre de tours de roue correspondant à un tour de pédalier."},
  {category:"Transmission", icon:"⛓", level:"Calcul", source:"Braquet et développement", page:4, q:"Quelle formule donne le développement parcouru à chaque tour de pédalier ?", choices:["Braquet × circonférence de roue","Braquet ÷ circonférence de roue","Plateau + pignon + diamètre","Circonférence ÷ nombre de plateaux"], answer:"Braquet × circonférence de roue", why:"Le développement DV est égal au braquet BR multiplié par la circonférence de la roue CR."},
  {category:"Transmission", icon:"⛓", level:"Fondamentaux", source:"Le Groupe Transmission", page:42, q:"Quel rendement approximatif le support attribue-t-il à une transmission par chaîne ?", choices:["98 %","75 %","50 %","100 % en toutes conditions"], answer:"98 %", why:"Une chaîne propre, correctement alignée et entretenue constitue un vecteur de puissance particulièrement efficace."},
  {category:"Transmission", icon:"⛓", level:"Atelier", source:"Le Groupe Transmission", page:33, q:"Que mesure le Q-Factor d'un pédalier ?", choices:["La distance entre les surfaces extérieures des deux manivelles","Le diamètre du cercle de fixation des plateaux","La longueur totale de la chaîne","L'écart entre deux pignons voisins"], answer:"La distance entre les surfaces extérieures des deux manivelles", why:"Le Q-Factor, exprimé en millimètres, dépend notamment de l'axe, du pédalier et de la géométrie du cadre."},
  {category:"Transmission", icon:"⛓", level:"Culture atelier", source:"Le Groupe Transmission", page:41, q:"Quel BCD est généralement associé à un pédalier route compact ?", choices:["110 mm","130 mm","64 mm","144 mm"], answer:"110 mm", why:"Le compact utilise un diamètre de fixation plus petit que le standard route classique de 130 mm."},
  {category:"Transmission", icon:"⛓", level:"Réglage", source:"Le Groupe Transmission", page:72, q:"La chaîne hésite à monter du petit pignon vers le suivant. Que faut-il faire en premier ?", choices:["Augmenter la tension du câble avec la molette","Desserrer complètement la roue arrière","Raccourcir la chaîne d'un maillon","Diminuer la tension du câble"], answer:"Augmenter la tension du câble avec la molette", why:"Une chaîne qui ne monte pas indique généralement une tension insuffisante ; si elle dépasse le deuxième pignon, il faut au contraire la diminuer."},
  {category:"Transmission", icon:"⛓", level:"Fondamentaux", source:"Le Groupe Transmission", page:94, q:"Quel avantage possède un moyeu à vitesses intégrées ?", choices:["Les rapports peuvent être sélectionnés à l'arrêt","Il ne contient aucun engrenage","Il impose une ligne de chaîne oblique","Il nécessite un dérailleur extérieur"], answer:"Les rapports peuvent être sélectionnés à l'arrêt", why:"Le mécanisme fermé offre aussi une ligne de chaîne optimale, un entretien réduit et une bonne protection contre les intempéries."},

  {category:"Freinage", icon:"◉", level:"Fondamentaux", source:"Le Freinage Mécanique", page:3, q:"Sur quel phénomène physique reposent les systèmes de freinage d'un vélo ?", choices:["Le frottement, qui transforme une partie de l'énergie en chaleur","La suppression de la gravité","La compression de l'air dans le pneu","L'allongement élastique de la chaîne"], answer:"Le frottement, qui transforme une partie de l'énergie en chaleur", why:"Un élément souple frotte sur une piste dure et la multiplication des bras de levier amplifie l'effort du cycliste."},
  {category:"Freinage", icon:"◉", level:"Réglage", source:"Le Freinage Mécanique", page:10, q:"Comment corriger un patin qui grince tout en restant bien aligné sur la jante ?", choices:["Pincer légèrement le patin pour que l'avant touche en premier","Lubrifier la piste de freinage","Placer le patin contre le pneu","Desserrer totalement le câble"], answer:"Pincer légèrement le patin pour que l'avant touche en premier", why:"Le pincement crée une attaque progressive du patin et limite les vibrations responsables du bruit."},
  {category:"Freinage", icon:"◉", level:"Compatibilité", source:"Compatibilité des leviers de freins", page:1, q:"Un levier mécanique avec 35 mm entre son axe et l'ancrage du câble convient surtout à…", choices:["Un V-Brake classique ou un disque mécanique pour cintre plat","Un cantilever avec levier route uniquement","Un frein hydraulique sans câble","Un mini V-Brake de moins de 85 mm exclusivement"], answer:"Un V-Brake classique ou un disque mécanique pour cintre plat", why:"Cette géométrie fournit le grand tirage de câble requis par les V-Brakes classiques et les disques mécaniques de cintre plat."},
  {category:"Freinage", icon:"◉", level:"Fondamentaux", source:"Les Freins Hydrauliques", page:4, q:"Comment l'effort du levier atteint-il les plaquettes dans un frein hydraulique ?", choices:["Par une colonne de liquide poussée dans la durite","Par un câble métallique caché dans la durite","Par une liaison radio entre levier et étrier","Par la rotation directe du disque"], answer:"Par une colonne de liquide poussée dans la durite", why:"Le piston du maître-cylindre met le liquide sous pression, ce qui déplace le ou les pistons de l'étrier."},
  {category:"Freinage", icon:"◉", level:"Atelier", source:"Les Freins Hydrauliques", page:10, q:"Quel type de liquide utilisent notamment Shimano, Magura et Tektro ?", choices:["Un liquide minéral","Du DOT 5 silicone uniquement","De l'eau distillée","Une huile de chaîne sèche"], answer:"Un liquide minéral", why:"Le support associe ces marques au liquide minéral, peu corrosif et stable dans le temps, en respectant toujours la préconisation constructeur."},
  {category:"Freinage", icon:"◉", level:"Sécurité", source:"Les Freins Hydrauliques", page:11, q:"Quel liquide ne doit pas être mélangé avec les DOT 3, 4 ou 5.1 ?", choices:["Le DOT 5 à base de silicone","Le DOT 4","Le DOT 5.1","Le DOT 3"], answer:"Le DOT 5 à base de silicone", why:"Le DOT 5 silicone est incompatible avec les autres liquides synthétiques DOT utilisés dans le cycle."},
  {category:"Freinage", icon:"◉", level:"Entretien", source:"Les Freins Hydrauliques", page:46, q:"À quelle épaisseur Shimano et SRAM préconisent-ils le remplacement d'un disque classique selon le support ?", choices:["1,5 mm","0,5 mm","2,5 mm","4 mm"], answer:"1,5 mm", why:"L'épaisseur se contrôle au micromètre ; un disque creusé ayant atteint 1,5 mm doit être remplacé."},

  {category:"Roues", icon:"☼", level:"Fondamentaux", source:"Le Rayonnage", page:3, q:"Quels sont les trois grands éléments structuraux d'une roue rayonnée ?", choices:["Moyeu, jante et rayons","Pneu, cassette et chaîne","Axe, selle et valve","Disque, fourche et écrous"], answer:"Moyeu, jante et rayons", why:"Les rayons relient le moyeu à la jante, transmettent les efforts et maintiennent le moyeu centré."},
  {category:"Roues", icon:"☼", level:"Atelier", source:"Le Rayonnage", page:4, q:"Pourquoi un moyeu arrière classique est-il généralement asymétrique ?", choices:["Parce qu'il porte la roue libre ou la cassette","Parce que sa valve est décentrée","Parce que la jante arrière est toujours plus petite","Parce qu'il ne possède qu'un flasque"], answer:"Parce qu'il porte la roue libre ou la cassette", why:"L'espace occupé par les pignons impose des flasques et des tensions différents entre les deux côtés."},
  {category:"Roues", icon:"☼", level:"Sécurité", source:"Le Rayonnage", page:25, q:"Dans quel cas le rayonnage radial est-il admis selon le support ?", choices:["Sur une roue avant à frein sur jante, si le moyeu l'autorise","Sur toute roue arrière motrice","Sur une roue avant à disque uniquement","Sur une roue de tandem chargée"], answer:"Sur une roue avant à frein sur jante, si le moyeu l'autorise", why:"Le radial ne croise aucun rayon et ne convient pas à la transmission des couples de pédalage ou de freinage à disque."},
  {category:"Roues", icon:"☼", level:"Culture atelier", source:"Le Rayonnage", page:26, q:"Quel type de croisement est présenté comme le plus courant ?", choices:["Le croisement par 3","Le radial","Le croisement par 1","Le croisement par 5"], answer:"Le croisement par 3", why:"Dans ce montage, chaque rayon croise trois autres rayons avant de rejoindre la jante."},
  {category:"Roues", icon:"☼", level:"Diagnostic", source:"Le Rayonnage", page:42, q:"Quelle différence distingue le voile du saut d'une roue ?", choices:["Le voile est latéral, le saut est un défaut de concentricité","Le voile est vertical, le saut est une fissure","Le voile concerne le pneu, le saut concerne la chaîne","Il n'existe aucune différence"], answer:"Le voile est latéral, le saut est un défaut de concentricité", why:"Une roue voilée se déporte sur le côté ; une roue qui saute n'est plus parfaitement ronde autour de l'axe du moyeu."},

  {category:"Atelier", icon:"🧰", level:"Fondamentaux", source:"Graisse et utilisations", page:1, q:"Quelle différence générale distingue la graisse de l'huile ?", choices:["La graisse est pâteuse ; l'huile est un lubrifiant liquide","La graisse sert uniquement aux pneus","L'huile ne lubrifie aucune pièce mobile","La graisse est toujours soluble dans l'eau"], answer:"La graisse est pâteuse ; l'huile est un lubrifiant liquide", why:"La consistance et l'usage diffèrent : la graisse reste en place dans les assemblages et roulements, l'huile convient aux pièces en mouvement comme la chaîne."},
  {category:"Atelier", icon:"🧰", level:"Entretien", source:"Graisse et utilisations", page:5, q:"Quelle graisse est adaptée aux roulements de roue, de direction et de pédales ?", choices:["La graisse noire pour roulements","La pâte de montage carbone","La cire de chaîne","Le liquide DOT"], answer:"La graisse noire pour roulements", why:"Sa résistance à la friction et sa capacité à repousser l'eau la rendent adaptée aux roulements."},
  {category:"Atelier", icon:"🧰", level:"Matériaux", source:"Graisse et utilisations", page:6, q:"Pour quel assemblage la graisse cuivrée est-elle particulièrement indiquée ?", choices:["Les pièces en titane","Les joints de suspension","Les plaquettes de frein","La bande de roulement"], answer:"Les pièces en titane", why:"La graisse enrichie au cuivre est notamment utilisée sur les tubes de selle et axes de pédalier en titane, ainsi que sur certains filetages."},
  {category:"Atelier", icon:"🧰", level:"Sécurité", source:"Graisse et utilisations", page:8, q:"Pourquoi évite-t-on la graisse au lithium sur les joints de suspension ?", choices:["Elle peut détériorer les joints spi et toriques","Elle rend la fourche trop légère","Elle bloque instantanément le débattement","Elle dissout l'aluminium du cadre"], answer:"Elle peut détériorer les joints spi et toriques", why:"Le support recommande une graisse spéciale suspension sans lithium pour préserver l'intégrité des joints."},
  {category:"Atelier", icon:"🧰", level:"Matériaux", source:"Les Matériaux", page:3, q:"Qu'est-ce qu'un alliage métallique ?", choices:["Un métal auquel on ajoute d'autres éléments pour améliorer ses propriétés","Un métal recouvert uniquement de peinture","Une fibre textile moulée sans résine","Un assemblage de deux pièces par vissage"], answer:"Un métal auquel on ajoute d'autres éléments pour améliorer ses propriétés", why:"L'ajout d'éléments vise à modifier les performances mécaniques, la durabilité ou la fabrication du matériau."},
  {category:"Atelier", icon:"🧰", level:"Matériaux", source:"Les Matériaux", page:9, q:"Pourquoi les tubes de cadre en aluminium sont-ils souvent de grand diamètre ?", choices:["Pour compenser leur rigidité moindre à diamètre égal","Pour augmenter volontairement la corrosion","Pour loger obligatoirement une batterie","Pour reproduire l'aspect du bambou"], answer:"Pour compenser leur rigidité moindre à diamètre égal", why:"L'aluminium est léger mais moins rigide que l'acier à diamètre identique ; les sections oversized compensent cette caractéristique."},
  {category:"Atelier", icon:"🧰", level:"Matériaux", source:"Les Matériaux", page:14, q:"Comment le fabricant module-t-il les propriétés d'une pièce en carbone ?", choices:["En choisissant l'orientation des fibres","En augmentant uniquement la quantité de peinture","En aimantant la résine","En remplaçant les fibres par de l'acier"], answer:"En choisissant l'orientation des fibres", why:"L'orientation des nappes permet de rechercher davantage de rigidité, de confort ou un compromis entre les deux."},
  {category:"Atelier", icon:"🧰", level:"Métrologie", source:"La Métrologie", page:5, q:"Quelle précision peut atteindre le pied à coulisse présenté dans le support ?", choices:["Deux centièmes de millimètre","Un centimètre","Un demi-millimètre seulement","Un millième de mètre"], answer:"Deux centièmes de millimètre", why:"Le pied à coulisse à vernier permet des mesures extérieures et intérieures jusqu'au 2/100e de millimètre."},
  {category:"Atelier", icon:"🧰", level:"Métrologie", source:"La Métrologie", page:6, q:"À quoi sert principalement une jauge de profondeur ?", choices:["Mesurer la profondeur d'un logement","Contrôler la pression d'un pneu","Mesurer la tension d'un rayon","Vérifier le couple d'une vis"], answer:"Mesurer la profondeur d'un logement", why:"C'est une variante du pied à coulisse ; sa lecture suit le même principe."},
  {category:"Atelier", icon:"🧰", level:"Métrologie", source:"La Métrologie", page:7, q:"Quel outil est principalement utilisé pour mesurer l'épaisseur d'un disque de frein ?", choices:["Le micromètre extérieur","Le réglet en bois","Le tensiomètre à rayons","La clé dynamométrique"], answer:"Le micromètre extérieur", why:"Sa lecture au centième de millimètre permet de comparer précisément l'épaisseur du disque à sa limite d'usure."},
  {category:"Atelier", icon:"🧰", level:"Métrologie", source:"La Métrologie", page:8, q:"Quel outil permet de contrôler précisément le voile d'un disque ?", choices:["Le comparateur à cadran","Le démonte-pneu","Le fouet à chaîne","Le manomètre"], answer:"Le comparateur à cadran", why:"Le comparateur mesure de faibles variations, au centième de millimètre, pendant la rotation du disque."},
  {category:"Atelier", icon:"🧰", level:"Contrôle", source:"Les Points de contrôle d'un vélo", page:2, q:"Lors du contrôle des pneus, quels éléments doivent être examinés ?", choices:["Bande de roulement, flancs, pression et mise en place","Uniquement la couleur des bouchons de valve","Seulement le diamètre des roues","La longueur des rayons sans regarder le pneu"], answer:"Bande de roulement, flancs, pression et mise en place", why:"Il faut rechercher usure, corps étrangers, perforations et craquelures, puis contrôler pression et bon positionnement."},
  {category:"Atelier", icon:"🧰", level:"Contrôle", source:"Les Points de contrôle d'un vélo", page:3, q:"Que comprend le contrôle du poste de pilotage ?", choices:["Jeu de direction, alignement et serrages de la potence et du cintre","Uniquement la hauteur de selle","Seulement la pression du pneu avant","La lubrification du disque de frein"], answer:"Jeu de direction, alignement et serrages de la potence et du cintre", why:"Le support demande aussi de vérifier l'orientation du cintre et la position des leviers."},
  {category:"Atelier", icon:"🧰", level:"Périphériques", source:"Cours les Périphériques", page:3, q:"À quel endroit correspond le diamètre annoncé d'un cintre ?", choices:["À la zone centrale serrée par la potence","À l'extrémité recevant les bouchons","À la largeur entre les leviers","Au diamètre extérieur de la roue"], answer:"À la zone centrale serrée par la potence", why:"Le diamètre commercial du cintre décrit son interface avec la potence, et non le diamètre aux commandes."},
  {category:"Atelier", icon:"🧰", level:"Périphériques", source:"Cours les Périphériques", page:25, q:"Pourquoi le diamètre d'un collier de selle diffère-t-il de celui de la tige de selle ?", choices:["Le collier correspond au diamètre extérieur du tube du cadre","Le collier est toujours mesuré en pouces","La tige de selle ne possède aucun diamètre","Le collier se monte sur le cintre"], answer:"Le collier correspond au diamètre extérieur du tube du cadre", why:"La tige correspond au diamètre intérieur du tube de selle, tandis que le collier entoure sa paroi extérieure."}
];

const categoryNames = {SHIS:"Direction · SHIS", ETRTO:"Roues · ETRTO", "Pédalier":"Pédalier", VAE:"VAE", "Électricité":"Électricité", "Serrage":"Couples de serrage", "Pneus":"Pneus", "Transmission":"Transmission", "Freinage":"Freinage", "Roues":"Roues & rayonnage", "Atelier":"Atelier"};
const studySheets = [
  {category:"SHIS", icon:"🧭", title:"Direction & SHIS", subtitle:"Lire les interfaces sans ambiguïté", bullets:["Le code décrit le type de coupelle, le logement du cadre et le pivot de fourche.","EC est externe, ZS affleure le cadre et IS utilise un logement directement usiné.","Un pivot 1\"1/8 mesure 28,6 mm ; un pivot 1\"1/2 mesure 38,1 mm.","Toujours identifier séparément les parties haute et basse du jeu de direction."]},
  {category:"ETRTO", icon:"◎", title:"Dimensions ETRTO", subtitle:"La référence fiable pneu-jante", bullets:["Dans 37-622, 37 est la largeur du pneu et 622 le diamètre de siège de jante.","700C et 29 pouces peuvent partager le même BSD de 622 mm.","L'appellation commerciale en pouces ne garantit pas la compatibilité.","Largeur du pneu et largeur intérieure de jante doivent aussi être cohérentes."]},
  {category:"Pédalier", icon:"⚙", title:"Pédalier & boîtier", subtitle:"Axes, plateaux et interfaces", bullets:["Le pédalier transforme l'effort musculaire en rotation transmise à la chaîne.","Hollowtech II intègre l'axe à la manivelle droite ; DUB utilise un axe de 28,99 mm.","Le BSA est fileté, tandis que BB86, BB92 ou PF30 sont montés par pression.","La pédale gauche possède un filetage inversé."]},
  {category:"VAE", icon:"🔋", title:"Vélo électrique", subtitle:"Moteur, batterie et entretien", bullets:["Un VAE européen standard assiste au pédalage jusqu'à 25 km/h et 250 W continus.","L'énergie disponible s'exprime en Wh : tension multipliée par capacité en Ah.","Le capteur de couple offre une assistance progressive liée à l'effort du cycliste.","Pour un stockage prolongé, conserver idéalement la batterie entre 50 et 80 %."]},
  {category:"Électricité", icon:"ϟ", title:"Électricité VAE", subtitle:"Les grandeurs à connaître", bullets:["Puissance : P = U × I. Énergie : E = U × capacité en Ah.","Une batterie 36 V / 14 Ah stocke environ 504 Wh.","Le contrôleur transforme le courant continu pour alimenter un moteur BLDC.","Le BMS protège les cellules contre surcharge, décharge profonde et température."]},
  {category:"Serrage", icon:"🔧", title:"Couples de serrage", subtitle:"Serrer juste, jamais au hasard", bullets:["La valeur indiquée par le fabricant prime toujours sur une valeur générique.","Les pédales se situent couramment autour de 35 à 40 N·m.","Les six vis d'un rotor demandent un faible couple, souvent 2 à 4 N·m.","Le carbone exige une clé dynamométrique, un couple réduit et une pâte adaptée."]},
  {category:"Pneus", icon:"◉", title:"Technologie du pneu", subtitle:"Structure, montage et usure", bullets:["Un pneu réunit carcasse, tringles et bande de roulement.","Le Tubeless permet de réduire la pression et supprime le pincement de chambre.","Le fond de jante protège la chambre des têtes de rayons et des perçages.","Un pneu doit être remplacé lorsque la protection ou les fils de carcasse apparaissent."]},
  {category:"Transmission", icon:"⛓", title:"Transmission", subtitle:"Braquets, chaîne et réglages", bullets:["Braquet = dents du plateau ÷ dents du pignon.","Développement = braquet × circonférence de roue.","Une chaîne hésitant à monter demande généralement davantage de tension de câble.","Un moyeu à vitesses intégrées permet de changer de rapport à l'arrêt."]},
  {category:"Freinage", icon:"◉", title:"Freinage", subtitle:"Mécanique et hydraulique", bullets:["Le freinage transforme l'énergie du vélo en chaleur par frottement.","Un circuit hydraulique transmet l'effort par une colonne de liquide.","Ne jamais mélanger liquide minéral et liquide DOT ; suivre la marque du frein.","Un patin sur jante doit porter entièrement et peut être légèrement pincé pour éviter le bruit."]},
  {category:"Roues", icon:"☼", title:"Roues & rayonnage", subtitle:"Tension, centrage et défauts", bullets:["Les rayons maintiennent le moyeu centré et transmettent les efforts à la jante.","Le croisement par trois est le montage classique le plus courant.","Le voile est un défaut latéral ; le saut est un défaut de concentricité.","Une tension régulière se contrôle au tensiomètre et limite les ruptures."]},
  {category:"Atelier", icon:"🧰", title:"Pratique d'atelier", subtitle:"Contrôle, mesure et matériaux", bullets:["Le pied à coulisse mesure cotes extérieures et intérieures ; le micromètre contrôle un disque.","La graisse reste dans les assemblages ; l'huile convient aux pièces mobiles comme la chaîne.","L'orientation des fibres détermine une grande partie du comportement d'une pièce carbone.","Un contrôle complet vérifie cadre, roues, pneus, freins, transmission et poste de pilotage."]}
];
const visualQuestions = new Map([
  ["Que décrit le code ETRTO 37-622 ?", "etrto"],
  ["Dans le code ZS44/28.6, que signifie « ZS » ?", "headset"],
  ["Quel est le rôle principal du pédalier ?", "drivetrain"],
  ["Comment l'effort du levier atteint-il les plaquettes dans un frein hydraulique ?", "hydraulic"],
  ["Comment corriger un patin qui grince tout en restant bien aligné sur la jante ?", "brakepad"],
  ["Quelle différence distingue le voile du saut d'une roue ?", "wheel"],
]);
const $ = (id) => document.getElementById(id);
const screens = {home:$("screen-home"), progress:$("screen-progress"), sheets:$("screen-sheets"), quiz:$("screen-quiz"), result:$("screen-result")};
const defaultSettings = {display:"auto", largeText:false, reducedMotion:false, darkTheme:false};
let settings = readSettings();
let learning = readLearning();
let selectedCategory = "Toutes";
let selectedCount = 20;
let round = [];
let index = 0;
let score = 0;
let correct = 0;
let streak = 0;
let topStreak = 0;
let answered = false;
let missed = [];
let sessionRecorded = false;
let deferredInstallPrompt = null;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => el.classList.toggle("hidden", key !== name));
  document.body.classList.toggle("quiz-active", name === "quiz");
  document.querySelectorAll("[data-view]").forEach(btn => btn.classList.toggle("active", btn.dataset.view === name || (name === "result" && btn.dataset.view === "progress")));
  if (name === "progress") renderDashboard();
  if (name === "sheets") renderStudySheets();
  window.scrollTo({top:0, behavior:"smooth"});
}

function availableQuestions() {
  return selectedCategory === "Toutes" ? questions : questions.filter(q => q.category === selectedCategory);
}

function updateAvailability() {
  const total = availableQuestions().length;
  $("question-availability").textContent = `${total} question${total > 1 ? "s" : ""} disponible${total > 1 ? "s" : ""} · réponses expliquées`;
  document.querySelectorAll("[data-count]").forEach(btn => {
    const count = Number(btn.dataset.count);
    btn.disabled = count > total && count !== 10;
    btn.title = count > total && count !== 10 ? `Seulement ${total} questions dans ce thème` : "";
  });
  if (selectedCount > total) {
    selectedCount = 10;
    document.querySelectorAll("[data-count]").forEach(btn => btn.classList.toggle("selected", Number(btn.dataset.count) === 10));
  }
}

function begin(customRound = null) {
  round = customRound ? shuffle(customRound) : smartSelect(availableQuestions(), Math.min(selectedCount, availableQuestions().length));
  index = score = correct = streak = topStreak = 0;
  missed = [];
  sessionRecorded = false;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const item = round[index];
  $("progress-label").textContent = `Question ${index + 1} / ${round.length}`;
  $("category-label").textContent = categoryNames[item.category];
  $("progress-bar").style.width = `${(index / round.length) * 100}%`;
  $("question-icon").textContent = item.icon;
  $("difficulty").textContent = item.level;
  $("question-text").textContent = item.q;
  renderQuestionVisual(item);
  $("score").textContent = score.toLocaleString("fr-FR");
  $("streak").textContent = streak;
  $("feedback").classList.add("hidden");
  $("feedback").classList.remove("is-wrong");
  $("next-btn").classList.add("hidden");
  const answers = $("answers");
  answers.innerHTML = "";
  shuffle(item.choices).forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "answer-btn";
    btn.dataset.choice = choice;
    btn.innerHTML = `<span class="answer-key">${i + 1}</span><span></span>`;
    btn.lastElementChild.textContent = choice;
    btn.addEventListener("click", () => selectAnswer(btn, choice));
    answers.appendChild(btn);
  });
}

function selectAnswer(button, choice) {
  if (answered) return;
  answered = true;
  const item = round[index];
  const isCorrect = choice === item.answer;
  recordAnswer(item, isCorrect);
  document.querySelectorAll(".answer-btn").forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.choice === item.answer) btn.classList.add("correct");
    else if (btn === button) btn.classList.add("wrong");
    else btn.classList.add("dimmed");
  });
  if (isCorrect) {
    correct += 1;
    streak += 1;
    topStreak = Math.max(topStreak, streak);
    score += 100 + Math.min((streak - 1) * 20, 100);
    $("feedback-title").textContent = streak >= 3 ? `Bien vu ! Série de ${streak} 🔥` : "Bonne réponse !";
    $("streak-wrap").classList.add("bump");
    setTimeout(() => $("streak-wrap").classList.remove("bump"), 220);
  } else {
    missed.push(item);
    streak = 0;
    $("feedback-title").textContent = `Pas tout à fait — réponse : ${item.answer}`;
    $("feedback").classList.add("is-wrong");
  }
  $("score").textContent = score.toLocaleString("fr-FR");
  $("streak").textContent = streak;
  $("feedback-text").textContent = item.why;
  $("feedback").classList.remove("hidden");
  $("next-btn").textContent = index === round.length - 1 ? "Voir mes résultats →" : "Question suivante →";
  $("next-btn").classList.remove("hidden");
}

function nextQuestion() {
  if (!answered) return;
  if (index < round.length - 1) {
    index += 1;
    renderQuestion();
  } else showResults();
}

function showResults() {
  const percent = Math.round((correct / round.length) * 100);
  const best = Math.max(readBestScore(), score);
  try { localStorage.setItem("veloquiz-best", String(best)); } catch (_) { /* Le quiz reste utilisable si le stockage local est bloqué. */ }
  updateBestScore();
  if (!sessionRecorded) {
    recordSession({correct, total:round.length, score});
    sessionRecorded = true;
  }
  let title, message, emoji;
  if (percent >= 90) { title = "Maître mécano !"; message = "Tu connais le guide sur le bout de la clé dynamométrique."; emoji = "🏆"; }
  else if (percent >= 70) { title = "Belle mécanique !"; message = "Les bases sont solides. Quelques tours de clé et ce sera parfait."; emoji = "🚲"; }
  else if (percent >= 50) { title = "Ça roule !"; message = "Une bonne sortie d'entraînement. Revois tes erreurs pour consolider les réglages."; emoji = "🔧"; }
  else { title = "Retour à l'atelier"; message = "Chaque erreur est un réglage de plus dans ta boîte à outils. On repart ?"; emoji = "🛠️"; }
  $("result-title").textContent = title;
  $("result-message").textContent = message;
  $("result-emoji").textContent = emoji;
  $("result-percent").textContent = `${percent}%`;
  $("score-ring").style.background = `conic-gradient(var(--green) 0deg ${percent * 3.6}deg, #e1e2d9 ${percent * 3.6}deg 360deg)`;
  $("correct-count").textContent = `${correct}/${round.length}`;
  $("result-score").textContent = score.toLocaleString("fr-FR");
  $("best-streak").textContent = topStreak;
  $("retry-missed-btn").disabled = missed.length === 0;
  $("retry-missed-btn").textContent = missed.length ? `Revoir mes erreurs (${missed.length})` : "Aucune erreur !";
  updateLearningSummary();
  showScreen("result");
}

function smartSelect(pool, count) {
  const now = Date.now();
  return [...pool]
    .map(item => {
      const progress = learning.questions[questionKey(item)];
      let priority = 2;
      if (progress && progress.dueAt <= now) priority = 0;
      else if (!progress) priority = 1;
      else priority = 2 + progress.box;
      return {item, rank:priority + Math.random() * .7};
    })
    .sort((a, b) => a.rank - b.rank)
    .slice(0, count)
    .map(entry => entry.item);
}

function questionKey(item) {
  return `${item.category}::${item.q}`;
}

function renderQuestionVisual(item) {
  const container = $("question-visual");
  const type = visualQuestions.get(item.q);
  if (!type) {
    container.innerHTML = "";
    container.classList.add("hidden");
    return;
  }
  container.innerHTML = illustrationFor(type);
  container.classList.remove("hidden");
}

function illustrationFor(type) {
  const visuals = {
    etrto:`<svg viewBox="0 0 520 180" role="img" aria-label="Schéma d'un code ETRTO"><circle class="diagram-soft" cx="390" cy="90" r="62"/><circle class="diagram-line" cx="390" cy="90" r="46"/><path class="diagram-line" d="M344 90h92M390 44v92"/><path class="diagram-line" d="M78 55h118M78 124h118"/><text x="82" y="42">LARGEUR DU PNEU</text><text x="112" y="96" style="font-size:30px">37</text><text x="248" y="96" style="font-size:28px">—</text><text x="356" y="96" style="font-size:25px">622</text><text x="315" y="165">DIAMÈTRE DE SIÈGE</text></svg>`,
    headset:`<svg viewBox="0 0 520 180" role="img" aria-label="Schéma d'un jeu de direction Zero Stack"><path class="diagram-soft" d="M190 20h140l-25 140h-90z"/><path class="diagram-line" d="M250 5v170M205 50h90M215 126h70"/><path class="diagram-accent" d="M205 44h90v12h-90zM215 120h70v12h-70z"/><path class="diagram-line" d="M160 50h-54M360 50h54"/><text x="25" y="55">COUPELLE</text><text x="370" y="55">AFFLEURANTE</text><text x="222" y="98" style="font-size:25px">ZS</text></svg>`,
    drivetrain:`<svg viewBox="0 0 520 180" role="img" aria-label="Schéma de transmission par chaîne"><circle class="diagram-soft" cx="150" cy="90" r="56"/><circle class="diagram-line" cx="150" cy="90" r="42"/><circle class="diagram-soft" cx="395" cy="90" r="34"/><circle class="diagram-line" cx="395" cy="90" r="24"/><path class="diagram-line" d="M155 48 397 66M155 132l242-18"/><path class="diagram-line" d="m130 90 20-20 20 20-20 20zM382 90h26"/><path class="diagram-accent" d="m255 70 30 20-30 20z"/><text x="92" y="170">PÉDALIER</text><text x="358" y="151">CASSETTE</text></svg>`,
    hydraulic:`<svg viewBox="0 0 520 180" role="img" aria-label="Schéma d'un frein hydraulique"><path class="diagram-line" d="M30 54h95l25 32-44 18"/><circle class="diagram-accent" cx="133" cy="79" r="10"/><path class="diagram-line" d="M143 79c85-45 150 68 240 8"/><path class="diagram-soft" d="M384 45h92v91h-92z"/><path class="diagram-accent" d="M402 64h14v54h-14zM444 64h14v54h-14z"/><path class="diagram-line" d="M430 37v107"/><path class="diagram-line" d="m245 51 22 8-18 14M320 92l22 8-18 14"/><text x="28" y="133">LEVIER</text><text x="210" y="30">LIQUIDE SOUS PRESSION</text><text x="386" y="160">ÉTRIER</text></svg>`,
    brakepad:`<svg viewBox="0 0 520 180" role="img" aria-label="Schéma de réglage d'un patin sur jante"><path class="diagram-soft" d="M60 30h400v78H60z"/><path class="diagram-line" d="M60 61h400M60 82h400"/><path class="diagram-accent" d="m195 92 126-8 4 33-126 8z"/><path class="diagram-line" d="m180 141 24-18M340 137l-20-20"/><text x="114" y="159">AVANT : TOUCHE EN PREMIER</text><text x="190" y="50">PISTE DE FREINAGE</text></svg>`,
    wheel:`<svg viewBox="0 0 520 180" role="img" aria-label="Comparaison du voile et du saut d'une roue"><ellipse class="diagram-line" cx="145" cy="88" rx="68" ry="58"/><path class="diagram-soft" d="M145 30c30 10 52 29 68 58-25 27-45 48-68 58-28-10-52-29-68-58 24-29 45-48 68-58z"/><path class="diagram-line" d="M145 30v116M77 88h136"/><ellipse class="diagram-line" cx="380" cy="88" rx="55" ry="68"/><circle class="diagram-soft" cx="380" cy="88" r="58"/><path class="diagram-line" d="M380 30v116M322 88h116"/><text x="122" y="175">VOILE</text><text x="361" y="175">SAUT</text></svg>`
  };
  return visuals[type] || "";
}

function updateBestScore() {
  const best = readBestScore();
  $("best-score").textContent = best ? best.toLocaleString("fr-FR") : "—";
}

function readBestScore() {
  try { return Number(localStorage.getItem("veloquiz-best") || 0); }
  catch (_) { return 0; }
}

function readLearning() {
  try {
    const saved = JSON.parse(localStorage.getItem("veloquiz-learning-v2") || "{}");
    return {questions:saved.questions || {}, sessions:Array.isArray(saved.sessions) ? saved.sessions : []};
  } catch (_) {
    return {questions:{}, sessions:[]};
  }
}

function saveLearning() {
  try { localStorage.setItem("veloquiz-learning-v2", JSON.stringify(learning)); }
  catch (_) { /* La progression reste disponible pendant la session. */ }
}

function recordAnswer(item, isCorrect) {
  const key = questionKey(item);
  const previous = learning.questions[key] || {attempts:0, correct:0, box:1, dueAt:0};
  const box = isCorrect ? Math.min(5, previous.box + 1) : 1;
  const intervals = [0, 0, 1, 3, 7, 14];
  learning.questions[key] = {
    attempts:previous.attempts + 1,
    correct:previous.correct + (isCorrect ? 1 : 0),
    box,
    dueAt:Date.now() + intervals[box] * 86400000,
    lastAt:Date.now()
  };
  saveLearning();
}

function recordSession(session) {
  learning.sessions.unshift({...session, date:Date.now()});
  learning.sessions = learning.sessions.slice(0, 12);
  saveLearning();
}

function learningStats() {
  const entries = Object.values(learning.questions);
  const attempts = entries.reduce((sum, entry) => sum + entry.attempts, 0);
  const correctAnswers = entries.reduce((sum, entry) => sum + entry.correct, 0);
  const mastered = entries.filter(entry => entry.box >= 4).length;
  const due = entries.filter(entry => entry.dueAt <= Date.now() && entry.box < 4).length;
  return {attempts, correctAnswers, mastered, due, success:attempts ? Math.round(correctAnswers / attempts * 100) : 0};
}

function updateLearningSummary() {
  const stats = learningStats();
  const mastery = Math.round(stats.mastered / questions.length * 100);
  $("home-mastery").textContent = `${mastery}%`;
  $("home-mastery-gauge").style.setProperty("--mastery", `${mastery * 3.6}deg`);
  $("home-learning-text").textContent = stats.attempts
    ? `${stats.mastered} questions maîtrisées · ${stats.due} à consolider. La prochaine sélection s'adapte à tes résultats.`
    : "Commence un quiz pour mesurer ta progression.";
}

function renderDashboard() {
  const stats = learningStats();
  $("dash-success").textContent = `${stats.success}%`;
  $("dash-answered").textContent = stats.attempts.toLocaleString("fr-FR");
  $("dash-mastered").textContent = `${stats.mastered}/${questions.length}`;
  $("dash-due").textContent = stats.due;
  const themeContainer = $("theme-progress");
  themeContainer.innerHTML = "";
  Object.keys(categoryNames).forEach(category => {
    const categoryQuestions = questions.filter(item => item.category === category);
    const records = categoryQuestions.map(item => learning.questions[questionKey(item)]).filter(Boolean);
    const attempts = records.reduce((sum, entry) => sum + entry.attempts, 0);
    const correctAnswers = records.reduce((sum, entry) => sum + entry.correct, 0);
    const percent = attempts ? Math.round(correctAnswers / attempts * 100) : 0;
    const row = document.createElement("div");
    row.className = "theme-row";
    row.innerHTML = `<div class="theme-row-header"><strong></strong><span>${percent}%</span></div><div class="theme-bar"><span style="width:${percent}%"></span></div>`;
    row.querySelector("strong").textContent = categoryNames[category];
    themeContainer.appendChild(row);
  });
  const recent = $("recent-sessions");
  recent.innerHTML = "";
  if (!learning.sessions.length) {
    recent.innerHTML = '<div class="empty-state">Tes résultats apparaîtront ici après ton premier quiz.</div>';
  } else {
    learning.sessions.slice(0, 6).forEach(session => {
      const row = document.createElement("div");
      row.className = "session-row";
      row.innerHTML = `<span>${new Date(session.date).toLocaleDateString("fr-FR", {day:"2-digit", month:"short"})}</span><strong>${Math.round(session.correct / session.total * 100)}%</strong>`;
      recent.appendChild(row);
    });
  }
}

function renderStudySheets() {
  const container = $("study-sheets");
  if (container.childElementCount) return;
  studySheets.forEach(sheet => {
    const details = document.createElement("details");
    details.className = "study-card";
    details.innerHTML = `<summary><span class="sheet-icon"></span><span><strong></strong><small></small></span><span class="sheet-toggle">+</span></summary><div class="sheet-body"><ul></ul></div>`;
    details.querySelector(".sheet-icon").textContent = sheet.icon;
    details.querySelector("summary strong").textContent = sheet.title;
    details.querySelector("summary small").textContent = sheet.subtitle;
    const list = details.querySelector("ul");
    sheet.bullets.forEach(text => {
      const li = document.createElement("li");
      li.textContent = text;
      list.appendChild(li);
    });
    container.appendChild(details);
  });
}

function resetLearning() {
  if (!window.confirm("Effacer toute la progression enregistrée sur cet appareil ?")) return;
  learning = {questions:{}, sessions:[]};
  saveLearning();
  updateLearningSummary();
  renderDashboard();
}

function readSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem("veloquiz-settings") || "{}");
    return {
      display: ["auto", "phone", "desktop"].includes(saved.display) ? saved.display : defaultSettings.display,
      largeText: Boolean(saved.largeText),
      reducedMotion: Boolean(saved.reducedMotion),
      darkTheme: Boolean(saved.darkTheme)
    };
  } catch (_) {
    return {...defaultSettings};
  }
}

function saveSettings() {
  try { localStorage.setItem("veloquiz-settings", JSON.stringify(settings)); }
  catch (_) { /* Les paramètres restent actifs pour la session si le stockage est bloqué. */ }
}

function applySettings() {
  const root = document.documentElement;
  root.dataset.display = settings.display;
  root.dataset.text = settings.largeText ? "large" : "normal";
  root.dataset.motion = settings.reducedMotion ? "reduced" : "normal";
  root.dataset.theme = settings.darkTheme ? "dark" : "light";
  document.querySelector('meta[name="theme-color"]').content = settings.darkTheme ? "#0f1d1b" : "#176b58";
  const viewport = document.querySelector('meta[name="viewport"]');
  viewport.content = settings.display === "desktop" ? "width=1100" : "width=device-width, initial-scale=1";
  document.querySelectorAll('input[name="display-mode"]').forEach(input => { input.checked = input.value === settings.display; });
  $("large-text-setting").checked = settings.largeText;
  $("reduced-motion-setting").checked = settings.reducedMotion;
  $("dark-theme-setting").checked = settings.darkTheme;
}

function initializeSettings() {
  applySettings();
  const dialog = $("settings-dialog");
  $("settings-btn").addEventListener("click", () => dialog.showModal());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  document.querySelectorAll('input[name="display-mode"]').forEach(input => input.addEventListener("change", () => {
    settings.display = input.value;
    applySettings();
    saveSettings();
  }));
  $("large-text-setting").addEventListener("change", event => {
    settings.largeText = event.target.checked;
    applySettings();
    saveSettings();
  });
  $("reduced-motion-setting").addEventListener("change", event => {
    settings.reducedMotion = event.target.checked;
    applySettings();
    saveSettings();
  });
  $("dark-theme-setting").addEventListener("change", event => {
    settings.darkTheme = event.target.checked;
    applySettings();
    saveSettings();
  });
}

function initializeInstall() {
  const button = $("install-btn");
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  if (isStandalone) return;
  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredInstallPrompt = event;
    button.classList.remove("hidden");
  });
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  if (isIOS) button.classList.remove("hidden");
  button.addEventListener("click", async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      button.classList.add("hidden");
    } else {
      $("install-dialog").showModal();
    }
  });
  window.addEventListener("appinstalled", () => button.classList.add("hidden"));
}

function initializeServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
  }
}

document.querySelectorAll("[data-category]").forEach(btn => btn.addEventListener("click", () => {
  selectedCategory = btn.dataset.category;
  document.querySelectorAll("[data-category]").forEach(b => b.classList.toggle("selected", b === btn));
  updateAvailability();
}));
document.querySelectorAll("[data-count]").forEach(btn => btn.addEventListener("click", () => {
  if (btn.disabled) return;
  selectedCount = Number(btn.dataset.count);
  document.querySelectorAll("[data-count]").forEach(b => b.classList.toggle("selected", b === btn));
}));
document.querySelectorAll("[data-view]").forEach(btn => btn.addEventListener("click", () => showScreen(btn.dataset.view)));
$("start-btn").addEventListener("click", () => begin());
$("next-btn").addEventListener("click", nextQuestion);
$("quit-btn").addEventListener("click", () => showScreen("home"));
$("restart-btn").addEventListener("click", () => showScreen("home"));
$("retry-missed-btn").addEventListener("click", () => { if (missed.length) begin([...missed]); });
$("reset-progress-btn").addEventListener("click", resetLearning);
document.querySelector(".brand").addEventListener("click", event => { event.preventDefault(); showScreen("home"); });
document.addEventListener("keydown", event => {
  if (!screens.quiz.classList.contains("hidden")) {
    if (!answered && ["1","2","3","4"].includes(event.key)) document.querySelectorAll(".answer-btn")[Number(event.key) - 1]?.click();
    else if (answered && event.key === "Enter") nextQuestion();
  }
});

initializeSettings();
initializeInstall();
initializeServiceWorker();
updateBestScore();
updateAvailability();
updateLearningSummary();
