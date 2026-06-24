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

questions.push(
  {category:"SHIS", icon:"🧭", level:"Fondamentaux", source:"Le jeu de direction et le SHIS", page:4, q:"Quelles fonctions principales assure le jeu de direction ?", choices:["La rotation libre de la fourche et le support des efforts transmis","Le changement automatique des vitesses","Le maintien de la pression des pneus","La recharge de la batterie"], answer:"La rotation libre de la fourche et le support des efforts transmis", why:"Le jeu de direction forme la liaison tournante entre cadre et fourche. Il doit permettre une rotation fluide, sans point dur et sans jeu."},
  {category:"SHIS", icon:"🧭", level:"Anatomie", source:"Le jeu de direction et le SHIS", page:5, q:"À quoi sert le cône de fourche ?", choices:["À centrer le roulement inférieur autour du pivot","À bloquer la potence sur le cintre","À régler la longueur de la chaîne","À protéger le disque de frein"], answer:"À centrer le roulement inférieur autour du pivot", why:"Le cône est emmanché sur la base du pivot et offre une portée correctement centrée au roulement inférieur."},
  {category:"SHIS", icon:"🧭", level:"Technologie", source:"Le jeu de direction et le SHIS", page:7, q:"Quel avantage possède un roulement à aiguilles ou à rouleaux dans une direction ?", choices:["Une meilleure résistance aux efforts axiaux","Une suppression totale de l'entretien","Un poids toujours inférieur à un roulement annulaire","Une compatibilité avec tous les diamètres"], answer:"Une meilleure résistance aux efforts axiaux", why:"Les rouleaux supportent bien les charges axiales, mais ce type de roulement reste peu courant en raison de son coût."},
  {category:"SHIS", icon:"🧭", level:"Montage", source:"Le jeu de direction et le SHIS", page:10, q:"Quelle hauteur totale d'entretoises sous la potence ne faut-il généralement pas dépasser ?", choices:["Environ 50 mm","Environ 5 mm","Environ 100 mm","Aucune limite n'existe"], answer:"Environ 50 mm", why:"La limite exacte dépend de la fourche. Une hauteur excessive augmente le bras de levier sur le pivot et peut l'endommager."},
  {category:"SHIS", icon:"🧭", level:"Sécurité", source:"Le jeu de direction et le SHIS", page:11, q:"Quel système de précontrainte utilise-t-on dans un pivot de fourche en carbone ?", choices:["Un expandeur","Une étoile à frapper","Une clavette carrée","Un écrou de cassette"], answer:"Un expandeur", why:"Une étoile ne doit pas être enfoncée dans un pivot carbone. L'expandeur répartit la pression sans blesser les fibres."},
  {category:"SHIS", icon:"🧭", level:"Atelier", source:"Le jeu de direction et le SHIS", page:17, q:"Pourquoi aléser et dresser la douille de direction avant montage ?", choices:["Pour obtenir des portées ajustées et des roulements parallèles","Pour augmenter le diamètre des roues","Pour réduire le nombre de roulements","Pour supprimer le graissage"], answer:"Pour obtenir des portées ajustées et des roulements parallèles", why:"Des portées correctement usinées évitent les contraintes anormales, améliorent la rotation et prolongent la durée de vie des roulements."},

  {category:"ETRTO", icon:"◉", level:"Piège", source:"Pneumatiques Schwalbe TechInfo 2015", page:8, q:"Quelle différence de diamètre intérieur existe entre un pneu 28 pouces et un pneu 29 pouces moderne ?", choices:["Aucune : ils peuvent tous deux utiliser un BSD de 622 mm","Exactement 25,4 mm","Exactement 50 mm","Le 29 pouces utilise toujours 584 mm"], answer:"Aucune : ils peuvent tous deux utiliser un BSD de 622 mm", why:"La différence commerciale vient surtout du volume et du diamètre extérieur du pneu ; le diamètre d'assise sur la jante peut être identique."},
  {category:"ETRTO", icon:"◉", level:"Métrologie", source:"Pneumatiques Schwalbe TechInfo 2015", page:9, q:"Comment mesure-t-on correctement la largeur réelle d'un pneu ?", choices:["Gonflé, à son point extérieur le plus large","À plat avant montage","Uniquement sur la bande de roulement","Entre les crochets de la jante"], answer:"Gonflé, à son point extérieur le plus large", why:"La jante, la pression et le temps après montage influencent la largeur finale du pneu."},
  {category:"ETRTO", icon:"◉", level:"Compatibilité", source:"Pneumatiques Schwalbe TechInfo 2015", page:5, q:"Quel BSD correspond à l'ancien 26 pouces utilisé en triathlon ?", choices:["571 mm","559 mm","584 mm","507 mm"], answer:"571 mm", why:"Plusieurs diamètres incompatibles ont porté l'appellation 26 pouces. Le triathlon ancien utilise notamment 571 mm."},
  {category:"ETRTO", icon:"◉", level:"Piège", source:"Guide Technique Vélo", page:4, q:"Quels sont les deux diamètres ETRTO courants pouvant être appelés 20 pouces ?", choices:["406 et 451 mm","559 et 584 mm","507 et 622 mm","355 et 630 mm"], answer:"406 et 451 mm", why:"Le nom 20 pouces recouvre au moins deux diamètres de siège distincts. Il faut lire le second nombre ETRTO pour éviter une incompatibilité."},

  {category:"Pédalier", icon:"⚙", level:"Technologie", source:"Le Groupe Transmission", page:12, q:"Pourquoi l'emmanchement carré a-t-il remplacé le système à clavette ?", choices:["L'effort est transmis par quatre plats au lieu d'un seul","Il ne nécessite aucun axe","Il permet de monter deux pédales à gauche","Il supprime les roulements"], answer:"L'effort est transmis par quatre plats au lieu d'un seul", why:"La répartition sur quatre faces améliore la fiabilité de l'assemblage et limite la prise de jeu."},
  {category:"Pédalier", icon:"⚙", level:"Fondamentaux", source:"Le Groupe Transmission", page:11, q:"Quelle contrainte ne s'applique pas directement au jeu de pédalier ?", choices:["La pression de gonflage du pneu","Les efforts de pédalage","Les efforts latéraux liés à la torsion du cadre","Le tirage provoqué par la chaîne"], answer:"La pression de gonflage du pneu", why:"Le boîtier subit les à-coups de pédalage, les déformations latérales du cadre et la tension de la chaîne."},
  {category:"Pédalier", icon:"⚙", level:"Ergonomie", source:"Le Groupe Transmission", page:33, q:"Dans quelle plage le support situe-t-il généralement le Q-Factor ?", choices:["Environ 128 à 180 mm","Environ 20 à 40 mm","Environ 250 à 400 mm","Toujours exactement 110 mm"], answer:"Environ 128 à 180 mm", why:"La valeur dépend du pédalier, de la largeur du cadre, des pédales et de la morphologie du cycliste."},
  {category:"Pédalier", icon:"⚙", level:"Route", source:"Le Groupe Transmission", page:41, q:"Quelle combinaison correspond à un double plateau route compact courant ?", choices:["50/34 dents","53/39 dents","42/32/22 dents","36/52 dents uniquement"], answer:"50/34 dents", why:"Le compact offre des petits rapports plus accessibles que le double standard tout en restant plus simple et léger qu'un triple."},
  {category:"Pédalier", icon:"⚙", level:"Standards", source:"Le Groupe Transmission", page:30, q:"Quel diamètre interne de boîte caractérise le standard BB30 présenté ?", choices:["42 mm","34 mm","41 mm","52 mm"], answer:"42 mm", why:"Le BB30 associe une boîte d'environ 42 mm à un axe de 30 mm."},
  {category:"Pédalier", icon:"⚙", level:"Standards", source:"Le Pédalier", page:7, q:"Quel couple diamètre de boîte / diamètre d'axe correspond à BB86 ou BB92 ?", choices:["41 mm / 24 mm","46 mm / 30 mm","42 mm / 30 mm","34 mm / 22 mm"], answer:"41 mm / 24 mm", why:"Les standards press-fit Shimano BB86 et BB92 utilisent une boîte de 41 mm et un axe de 24 mm."},
  {category:"Pédalier", icon:"⚙", level:"Anatomie", source:"Le Pédalier", page:6, q:"Quel élément relie l'axe du pédalier aux plateaux ?", choices:["Le spider","La chape","Le flasque de moyeu","Le capot de direction"], answer:"Le spider", why:"Le spider est l'étoile intermédiaire qui porte les plateaux via les vis correspondant au BCD."},
  {category:"Pédalier", icon:"⚙", level:"Pratique", source:"Le Pédalier", page:7, q:"Quel type de pédale automatique est principalement destiné au VTT et au gravel ?", choices:["SPD","SPD-SL uniquement","Look piste sans cale","Pédale à rétropédalage"], answer:"SPD", why:"Les systèmes SPD VTT sont conçus pour faciliter la marche, l'évacuation de la boue et l'enclenchement dans des conditions variées."},

  {category:"VAE", icon:"🔋", level:"Motorisation", source:"Guide Technique Vélo", page:9, q:"Pourquoi un moteur dans le moyeu arrière ne profite-t-il pas des rapports de vitesse ?", choices:["Il entraîne directement la roue après la transmission","Il est placé dans le pédalier","Il ne contient aucun bobinage","Il fonctionne uniquement à l'arrêt"], answer:"Il entraîne directement la roue après la transmission", why:"Contrairement au moteur pédalier, son effort ne passe pas par le plateau, la chaîne et la cassette."},
  {category:"VAE", icon:"🔋", level:"Motorisation", source:"Guide Technique Vélo", page:9, q:"Quelle sensation peut produire un moteur placé dans le moyeu avant ?", choices:["Une traction avant parfois peu naturelle","Un freinage automatique permanent","Une absence totale d'assistance","Un changement de vitesse sans chaîne"], answer:"Une traction avant parfois peu naturelle", why:"La roue avant tire le vélo alors que la propulsion musculaire agit à l'arrière, ce qui modifie le ressenti de pilotage."},
  {category:"VAE", icon:"🔋", level:"Interface", source:"Guide Technique Vélo", page:9, q:"Quelles informations l'écran d'un VAE affiche-t-il couramment ?", choices:["Vitesse, autonomie, niveau d'assistance et distance","Uniquement la température extérieure","Le couple de serrage de chaque vis","La pression exacte des deux pneus"], answer:"Vitesse, autonomie, niveau d'assistance et distance", why:"L'afficheur centralise les informations de conduite et l'état du système électrique."},
  {category:"VAE", icon:"🔋", level:"Batterie", source:"Guide Technique Vélo", page:9, q:"Après combien de cycles une batterie VAE conserve-t-elle typiquement environ 80 % de sa capacité initiale ?", choices:["Environ 500 à 1 000 cycles","Environ 10 cycles","Toujours plus de 10 000 cycles","Exactement 100 cycles"], answer:"Environ 500 à 1 000 cycles", why:"La durée réelle dépend de la température, de la profondeur des cycles, du stockage et de la qualité des cellules."},

  {category:"Électricité", icon:"ϟ", level:"Calcul", source:"Notions électriques pour les VAE", page:11, q:"Sur une batterie de 14 Ah, à quel courant correspond un taux de décharge de 1C ?", choices:["14 A","1 A","28 A","140 A"], answer:"14 A", why:"Le C-rate rapporte le courant à la capacité : 1C signifie décharger théoriquement la capacité totale en une heure."},
  {category:"Électricité", icon:"ϟ", level:"Batterie", source:"Notions électriques pour les VAE", page:11, q:"Quel effet produit durablement un C-rate élevé ?", choices:["Il chauffe et dégrade plus rapidement les cellules","Il refroidit automatiquement la batterie","Il augmente définitivement la capacité en Ah","Il équilibre mécaniquement les roues"], answer:"Il chauffe et dégrade plus rapidement les cellules", why:"Un courant important accroît les pertes thermiques et accélère le vieillissement électrochimique."},
  {category:"Électricité", icon:"ϟ", level:"Calcul", source:"Notions électriques pour les VAE", page:12, q:"Quelle puissance délivre théoriquement un chargeur de 42 V et 2 A ?", choices:["84 W","21 W","44 W","168 W"], answer:"84 W", why:"P = U × I, donc 42 × 2 = 84 watts. Le support estime environ six heures pour une batterie de 504 Wh."},
  {category:"Électricité", icon:"ϟ", level:"Sécurité", source:"Notions électriques pour les VAE", page:12, q:"À quel seuil de cellule le BMS coupe-t-il généralement la décharge profonde ?", choices:["Environ 3,0 V","Environ 5,0 V","Environ 12 V","Environ 0,1 V"], answer:"Environ 3,0 V", why:"Sous ce seuil, la cellule risque une dégradation irréversible. Le BMS interrompt donc l'alimentation."},

  {category:"Serrage", icon:"🔧", level:"Transmission", source:"Couples de serrage INCM", page:1, q:"Quel couple indicatif s'applique au lockring d'une cassette ?", choices:["40 à 50 N·m","2 à 4 N·m","5 à 7 N·m","12 à 14 N·m"], answer:"40 à 50 N·m", why:"Le lockring de cassette demande un couple élevé pour maintenir les pignons correctement comprimés sur le corps de roue libre."},
  {category:"Serrage", icon:"🔧", level:"Transmission", source:"Couples de serrage généraux", page:13, q:"Quel couple indicatif s'applique à la vis de fixation d'un dérailleur arrière ?", choices:["8 à 10 N·m","35 à 40 N·m","1 à 2 N·m","20 à 25 N·m"], answer:"8 à 10 N·m", why:"Cette valeur reste générique : la notice du fabricant et l'inscription sur la pièce priment toujours."},
  {category:"Serrage", icon:"🔧", level:"Freinage", source:"Couples de serrage généraux", page:13, q:"Quel couple indicatif s'applique aux vis de fixation d'un étrier de frein ?", choices:["6 à 8 N·m","35 à 50 N·m","0,5 à 1 N·m","15 à 20 N·m"], answer:"6 à 8 N·m", why:"Un serrage régulier au couple permet de maintenir l'étrier sans endommager les filetages du cadre ou de la fourche."},
  {category:"Serrage", icon:"🔧", level:"Cockpit", source:"Couples de serrage généraux", page:13, q:"Quel couple indicatif s'applique aux vis de potence qui serrent le cintre ?", choices:["4 à 6 N·m","12 à 15 N·m","35 à 40 N·m","20 à 30 N·m"], answer:"4 à 6 N·m", why:"Les vis doivent être serrées progressivement et uniformément, en respectant particulièrement les limites d'un cintre carbone."},

  {category:"Pneus", icon:"◎", level:"Dimensions", source:"Pneumatiques Schwalbe TechInfo 2015", page:9, q:"Quelle tolérance de largeur un fabricant peut-il prévoir autour de l'indication ETRTO ?", choices:["Environ plus ou moins 3 mm","Exactement zéro millimètre","Plus ou moins 20 mm","Toujours plus 10 mm"], answer:"Environ plus ou moins 3 mm", why:"La largeur réelle dépend du couple pneu-jante, de la pression et de l'évolution du pneu après montage."},
  {category:"Pneus", icon:"◎", level:"Rendement", source:"Pneumatiques Schwalbe TechInfo 2015", page:22, q:"À pression égale, comment se déforme un pneu large par rapport à un pneu étroit ?", choices:["Il s'aplatit davantage en largeur et moins dans le sens de roulement","Il ne se déforme jamais","Il s'allonge davantage dans le sens de roulement","Il réduit toujours sa surface de contact à zéro"], answer:"Il s'aplatit davantage en largeur et moins dans le sens de roulement", why:"La surface de contact est comparable, mais sa forme plus courte limite la déformation qui s'oppose au mouvement."},
  {category:"Pneus", icon:"◎", level:"Tout-terrain", source:"Pneumatiques Schwalbe TechInfo 2015", page:21, q:"Sur un terrain irrégulier, pourquoi une pression plus faible peut-elle réduire la résistance au roulement ?", choices:["Le pneu épouse les obstacles au lieu de buter contre eux","Le pneu devient parfaitement rigide","La roue cesse de tourner","La jante change automatiquement de diamètre"], answer:"Le pneu épouse les obstacles au lieu de buter contre eux", why:"La carcasse absorbe les irrégularités et le vélo perd moins d'énergie dans les mouvements verticaux."},
  {category:"Pneus", icon:"◎", level:"Chambre à air", source:"Pneumatiques Schwalbe TechInfo 2015", page:28, q:"Quel matériau compose généralement une chambre à air classique ?", choices:["Le butyle","Le cuivre","Le PTFE massif","L'acier inoxydable"], answer:"Le butyle", why:"Le butyle est un caoutchouc synthétique élastique et peu perméable à l'air."},
  {category:"Pneus", icon:"◎", level:"Valves", source:"Pneumatiques Schwalbe TechInfo 2015", page:30, q:"Quel critère est prioritaire pour choisir un type de valve ?", choices:["La compatibilité avec le perçage de jante et la pompe","La couleur du capuchon","Le nombre de rayons de la roue arrière","Le matériau du cadre"], answer:"La compatibilité avec le perçage de jante et la pompe", why:"Les principaux types peuvent tous être étanches ; leur diamètre et leur usage doivent surtout correspondre à la jante et au gonflage."},
  {category:"Pneus", icon:"◎", level:"Montage", source:"Pneumatiques Schwalbe TechInfo 2015", page:32, q:"Où commence-t-on à engager le second talon lors du montage d'un pneu avec chambre ?", choices:["À l'opposé de la valve","Toujours directement sur la valve","Au niveau du raccord de jante uniquement","N'importe où avec un outil coupant"], answer:"À l'opposé de la valve", why:"Terminer près de la valve facilite la descente des talons dans la gorge de jante et limite le risque de pincer la chambre."},
  {category:"Pneus", icon:"◎", level:"Diagnostic", source:"Pneumatiques Schwalbe TechInfo 2015", page:26, q:"Quel dommage caractérise souvent une utilisation prolongée à pression insuffisante ?", choices:["De grandes fissures de fatigue sur les flancs","Une usure exclusive du bouchon de valve","Un allongement des rayons en titane","Une disparition du diamètre ETRTO"], answer:"De grandes fissures de fatigue sur les flancs", why:"Le sous-gonflage impose des flexions excessives et répétées aux flancs, jusqu'à leur rupture."},
  {category:"Pneus", icon:"◎", level:"Confort", source:"Pneumatiques Schwalbe TechInfo 2015", page:46, q:"Quelle section caractérise généralement les pneus d'un Balloonbike ?", choices:["Environ 50 à 60 mm","Environ 10 à 15 mm","Toujours plus de 120 mm","Exactement 23 mm"], answer:"Environ 50 à 60 mm", why:"Le grand volume d'air, utilisé autour de 2 bars dans l'exemple, agit comme un amortisseur naturel."},

  {category:"Transmission", icon:"⛓", level:"Entretien", source:"Le Groupe Transmission", page:46, q:"Quand est-il conseillé de nettoyer et lubrifier la chaîne en usage exigeant ?", choices:["De préférence après chaque sortie","Uniquement tous les dix ans","Seulement quand elle casse","Avant de lubrifier le disque"], answer:"De préférence après chaque sortie", why:"La chaîne est exposée à l'humidité, au sable et à la boue. Un entretien régulier protège également cassette et plateaux."},
  {category:"Transmission", icon:"⛓", level:"Chaîne", source:"Le Groupe Transmission", page:45, q:"Quelle particularité possède une chaîne demi-maillon ?", choices:["Tous ses maillons sont identiques","Elle ne comporte aucun axe","Elle fonctionne uniquement avec deux plateaux","Elle est toujours deux fois plus large"], answer:"Tous ses maillons sont identiques", why:"Chaque maillon joue à la fois le rôle de maillon intérieur et extérieur, ce qui permet un réglage plus fin de la longueur."},
  {category:"Transmission", icon:"⛓", level:"Alternatives", source:"Le Groupe Transmission", page:54, q:"Quel avantage offre une transmission par cardan en usage urbain ?", choices:["Un entretien réduit et une transmission protégée de l'eau","Un poids inférieur à toute chaîne","Une absence totale de perte mécanique","Un changement de plateau automatique"], answer:"Un entretien réduit et une transmission protégée de l'eau", why:"Le cardan est robuste, silencieux et propre, mais il est plus lourd, plus cher et présente davantage d'inertie."},
  {category:"Transmission", icon:"⛓", level:"Dérailleur avant", source:"Le Groupe Transmission", page:73, q:"Quel est le rôle de la fourchette du dérailleur avant ?", choices:["Pousser et guider la chaîne d'un plateau à l'autre","Tendre les rayons de la roue","Centrer le pivot de fourche","Actionner les plaquettes de frein"], answer:"Pousser et guider la chaîne d'un plateau à l'autre", why:"La fourchette se déplace grâce au parallélogramme et doit accepter l'écart de denture entre les plateaux."},
  {category:"Transmission", icon:"⛓", level:"Réglage", source:"Le Groupe Transmission", page:78, q:"Quel écart recherche-t-on entre la plaque externe du dérailleur avant et la chaîne sur grand plateau ?", choices:["Environ 0 à 0,5 mm","Environ 10 mm","Environ 25 mm","Aucun contrôle n'est nécessaire"], answer:"Environ 0 à 0,5 mm", why:"Avec la chaîne sur grand plateau et petit pignon, la butée extérieure doit empêcher le déraillement sans créer de frottement excessif."},
  {category:"Transmission", icon:"⛓", level:"Commandes", source:"Le Groupe Transmission", page:89, q:"Pourquoi ne faut-il pas intervertir gaines de frein et gaines de dérailleur ?", choices:["Leur construction répond à des efforts et déformations différents","Elles ont toujours la même structure","La gaine de frein contient du liquide DOT","La gaine de dérailleur est réservée aux pneus"], answer:"Leur construction répond à des efforts et déformations différents", why:"L'indexation exige une gaine peu compressible, tandis que le freinage impose une résistance adaptée à de fortes tensions."},
  {category:"Transmission", icon:"⛓", level:"Moyeu", source:"Le Groupe Transmission", page:55, q:"Quel perçage de moyeu est présenté comme très courant ?", choices:["32 ou 36 trous","3 ou 4 trous","Toujours 12 trous","Plus de 100 trous"], answer:"32 ou 36 trous", why:"Le nombre de trous dépend de l'usage, de la charge et de la conception de la roue."},
  {category:"Transmission", icon:"⛓", level:"Roue libre", source:"Le Groupe Transmission", page:60, q:"Quel mécanisme de roue libre reste le plus courant ?", choices:["Les cliquets","Une courroie lisse","Un frein à tambour","Un cône de direction"], answer:"Les cliquets", why:"Les cliquets s'engagent dans une denture pour transmettre le couple et se dégagent en roue libre."},
  {category:"Transmission", icon:"⛓", level:"Commandes", source:"Le Groupe Transmission", page:79, q:"Sur une poignée tournante, tourner vers l'arrière vise généralement…", choices:["Un rapport plus court","Un rapport toujours plus long","Le freinage de la roue avant","Le blocage de la suspension"], answer:"Un rapport plus court", why:"Le mouvement inverse vise un rapport plus long. La logique exacte doit néanmoins être vérifiée selon le système."},
  {category:"Transmission", icon:"⛓", level:"Route", source:"Le Groupe Transmission", page:41, q:"Quelle combinaison est appelée mid-compact en route ?", choices:["52/36 dents","50/34 dents","53/39 dents uniquement","30/42/52 dents"], answer:"52/36 dents", why:"Le mid-compact est plus sportif qu'un 50/34, mais plus accessible que le traditionnel 53/39."},

  {category:"Freinage", icon:"◉", level:"Hydraulique", source:"Les Freins Hydrauliques", page:5, q:"Pourquoi un circuit hydraulique fermé n'est-il plus utilisé sur les freins à disque ?", choices:["La dilatation du liquide chauffé peut rapprocher les plaquettes du disque","Il manque toujours un câble mécanique","Il refroidit trop rapidement","Il ne contient aucun piston"], answer:"La dilatation du liquide chauffé peut rapprocher les plaquettes du disque", why:"Sans vase d'expansion, l'augmentation de volume liée à la chaleur ne peut pas être compensée correctement."},
  {category:"Freinage", icon:"◉", level:"Hydraulique", source:"Les Freins Hydrauliques", page:6, q:"Quel élément d'un circuit ouvert compense la variation de volume du liquide ?", choices:["La membrane souple du vase d'expansion","Le disque de frein","Le câble de dérailleur","La jante tubeless"], answer:"La membrane souple du vase d'expansion", why:"La membrane sépare le liquide de l'air et se déforme lorsque la température fait varier le volume."},
  {category:"Freinage", icon:"◉", level:"Physique", source:"Les Freins Hydrauliques", page:6, q:"Quelle propriété du liquide rend possible la transmission de l'effort hydraulique ?", choices:["Il est pratiquement incompressible","Il s'évapore dès le freinage","Il est rempli de bulles d'air","Il devient solide dans la durite"], answer:"Il est pratiquement incompressible", why:"Une colonne de liquide sans air transmet efficacement le déplacement du maître-cylindre aux pistons d'étrier."},
  {category:"Freinage", icon:"◉", level:"Liquides", source:"Les Freins Hydrauliques", page:10, q:"Quelle caractéristique distingue un liquide DOT synthétique du liquide minéral dans le support ?", choices:["Il est plus corrosif mais résiste très bien à la chaleur","Il est toujours bleu et non corrosif","Il est compatible avec tous les joints","Il ne nécessite aucune précaution"], answer:"Il est plus corrosif mais résiste très bien à la chaleur", why:"Le choix du fluide est imposé par le constructeur car les joints ne sont pas compatibles avec tous les liquides."},
  {category:"Freinage", icon:"◉", level:"Durite", source:"Les Freins Hydrauliques", page:23, q:"À quoi sert la tresse en fibres d'une durite hydraulique standard ?", choices:["À limiter la déformation du tube plastique","À conduire un courant électrique","À lubrifier le piston","À remplacer la gaine extérieure"], answer:"À limiter la déformation du tube plastique", why:"La durite standard associe tube interne, renfort textile et gaine extérieure de protection."},
  {category:"Freinage", icon:"◉", level:"Durite", source:"Les Freins Hydrauliques", page:24, q:"Quel renfort caractérise une durite dite aviation ?", choices:["Une tresse en acier","Une âme en bois","Une chambre à air en butyle","Un ressort hélicoïdal extérieur"], answer:"Une tresse en acier", why:"La tresse métallique accroît la rigidité et protège mieux le tube contre le pincement."},
  {category:"Freinage", icon:"◉", level:"Plaquettes", source:"Les Freins Hydrauliques", page:31, q:"Quel avantage possède une plaquette organique ?", choices:["Un bon freinage à basse température et un rodage rapide","Une durée de vie toujours supérieure au métal","Une insensibilité totale à la chaleur","Aucun besoin de support"], answer:"Un bon freinage à basse température et un rodage rapide", why:"La garniture organique est silencieuse et mordante, mais elle s'use plus rapidement, notamment dans la boue."},
  {category:"Freinage", icon:"◉", level:"Diagnostic", source:"Les Freins Hydrauliques", page:32, q:"Qu'appelle-t-on fading ?", choices:["Une perte de puissance due à une chaleur excessive","Une fuite d'air dans un pneu","Un voile latéral de la roue","Une augmentation permanente du couple de freinage"], answer:"Une perte de puissance due à une chaleur excessive", why:"La surface de la garniture se dégrade sous la chaleur et le freinage revient généralement après refroidissement."},
  {category:"Freinage", icon:"◉", level:"Diagnostic", source:"Les Freins Hydrauliques", page:32, q:"Qu'est-ce que le glaçage d'une plaquette ?", choices:["Une surface devenue lisse qui ne produit plus assez de friction","Une couche de glace liée à la météo uniquement","Un traitement normal effectué en usine","Une oxydation du levier"], answer:"Une surface devenue lisse qui ne produit plus assez de friction", why:"Un freinage long à faible pression peut faire fondre superficiellement la garniture et créer une couche brillante peu efficace."},
  {category:"Freinage", icon:"◉", level:"Standards", source:"Les Freins Hydrauliques", page:36, q:"Pour quelle pratique le standard Flat Mount a-t-il surtout été développé ?", choices:["La route","Le BMX flat uniquement","Le vélo couché sans frein","Le trial à patins"], answer:"La route", why:"L'étrier compact se fixe sur une portée plane du cadre ou de la fourche, avec une intégration discrète."},

  {category:"Roues", icon:"☼", level:"Jantes", source:"Le Rayonnage", page:9, q:"Quel avantage apporte une jante à double paroi ?", choices:["Une rigidité accrue","Une suppression obligatoire des rayons","Un diamètre variable en roulant","Une incompatibilité avec les pneus"], answer:"Une rigidité accrue", why:"La seconde paroi renforce le profil et permet aussi de mieux organiser la portée des écrous de rayon."},
  {category:"Roues", icon:"☼", level:"Jantes", source:"Le Rayonnage", page:9, q:"Quel est le rôle d'un double œillet de jante ?", choices:["Relier les deux parois et mieux répartir la tension","Boucher la valve","Maintenir le disque Center Lock","Augmenter la pression du pneu"], answer:"Relier les deux parois et mieux répartir la tension", why:"L'œillet offre une portée propre à l'écrou et diffuse les efforts dans la structure de la jante."},
  {category:"Roues", icon:"☼", level:"Tubeless", source:"Le Rayonnage", page:10, q:"Pourquoi la paroi supérieure d'une jante Tubeless peut-elle être dépourvue de trous ?", choices:["Pour empêcher les fuites d'air","Pour réduire le diamètre du moyeu","Pour accueillir une roue libre","Pour permettre le passage des câbles"], answer:"Pour empêcher les fuites d'air", why:"Les écrous prennent appui dans la première paroi, tandis que la seconde forme un fond étanche avec des bossages de maintien des tringles."},
  {category:"Roues", icon:"☼", level:"Rayons", source:"Le Rayonnage", page:15, q:"De quelles dimensions dépend notamment la longueur d'un rayon ?", choices:["Diamètre de jante, diamètre des flasques et type de croisement","Largeur du cintre et hauteur de selle","Diamètre du disque uniquement","Pression du pneu uniquement"], answer:"Diamètre de jante, diamètre des flasques et type de croisement", why:"Il faut également considérer l'écartement des flasques, le nombre de rayons et la géométrie des écrous."},
  {category:"Roues", icon:"☼", level:"Rayons", source:"Le Rayonnage", page:17, q:"Pourquoi un rayon double rétreint peut-il être plus durable qu'un rayon de diamètre constant ?", choices:["Sa partie centrale plus fine lui donne davantage d'élasticité","Il ne travaille jamais en tension","Il est toujours fabriqué en carbone","Il ne comporte aucun filetage"], answer:"Sa partie centrale plus fine lui donne davantage d'élasticité", why:"Il absorbe mieux les variations de charge tout en renforçant les zones critiques du coude et du filetage."},
  {category:"Roues", icon:"☼", level:"Aérodynamique", source:"Le Rayonnage", page:18, q:"À partir de quelle vitesse la résistance de l'air devient-elle particulièrement déterminante selon le support ?", choices:["Au-delà d'environ 25 km/h","Au-delà de 2 km/h","Uniquement au-delà de 150 km/h","Jamais à vélo"], answer:"Au-delà d'environ 25 km/h", why:"C'est pourquoi les rayons plats ou elliptiques sont surtout pertinents lorsque la vitesse et l'aérodynamisme priment."},
  {category:"Roues", icon:"☼", level:"Écrous", source:"Le Rayonnage", page:22, q:"Pourquoi les écrous de rayon standards sont-ils souvent en laiton nickelé ?", choices:["Pour résister à l'oxydation et limiter le grippage","Pour être transparents","Pour augmenter la pression Tubeless","Pour magnétiser les rayons"], answer:"Pour résister à l'oxydation et limiter le grippage", why:"Le laiton est plus lourd que l'aluminium, mais il est fiable et tolérant dans les montages exposés."},
  {category:"Roues", icon:"☼", level:"Outillage", source:"Le Rayonnage", page:32, q:"À quoi sert un comparateur de parapluie ?", choices:["À vérifier que la jante est centrée entre les contre-écrous du moyeu","À mesurer l'épaisseur d'un disque","À régler la garde d'un levier","À déterminer la pression du pneu"], answer:"À vérifier que la jante est centrée entre les contre-écrous du moyeu", why:"Il compare la position de la jante par rapport aux deux côtés de l'axe et révèle un défaut de déport."},
  {category:"Roues", icon:"☼", level:"Outillage", source:"Le Rayonnage", page:33, q:"Dans quelle unité la tension des rayons est-elle généralement fournie ?", choices:["En décanewtons","En volts","En bars","En watt-heures"], answer:"En décanewtons", why:"Le tensiomètre convertit sa lecture selon le matériau et la section du rayon pour obtenir une force de tension."},
  {category:"Roues", icon:"☼", level:"Finition", source:"Le Rayonnage", page:44, q:"Pourquoi masse-t-on les rayons après le montage d'une roue ?", choices:["Pour libérer les contraintes résiduelles avant un nouveau contrôle","Pour desserrer tous les rayons","Pour graisser le pneu","Pour augmenter le diamètre de la jante"], answer:"Pour libérer les contraintes résiduelles avant un nouveau contrôle", why:"Après cette mise en place, il faut revérifier tension, centrage, voile et saut."},

  {category:"Atelier", icon:"🧰", level:"Lubrification", source:"Graisse et utilisations", page:3, q:"Pour quel usage la graisse blanche au PTFE est-elle principalement prévue ?", choices:["Les assemblages statiques et filetages","La piste d'un disque de frein","La bande de roulement du pneu","Le liquide d'un frein hydraulique"], answer:"Les assemblages statiques et filetages", why:"Son faible coefficient de frottement facilite le montage et le démontage tout en limitant grippage et corrosion."},
  {category:"Atelier", icon:"🧰", level:"Carbone", source:"Graisse et utilisations", page:7, q:"Pourquoi la pâte carbone contient-elle de petits grains ?", choices:["Pour augmenter l'adhérence avec un couple de serrage réduit","Pour polir les pistes de freinage","Pour dissoudre la résine","Pour lubrifier les roulements rapides"], answer:"Pour augmenter l'adhérence avec un couple de serrage réduit", why:"Les particules limitent le glissement des pièces carbone fragiles sans imposer un serrage excessif."},
  {category:"Atelier", icon:"🧰", level:"Électricité", source:"Graisse et utilisations", page:7, q:"À quoi sert une graisse silicone diélectrique sur un VAE ?", choices:["À protéger les connecteurs et cosses contre l'humidité","À lubrifier les disques","À augmenter la tension de la batterie","À coller les cellules entre elles"], answer:"À protéger les connecteurs et cosses contre l'humidité", why:"Elle forme une barrière protectrice adaptée aux connexions électriques exposées."},
  {category:"Atelier", icon:"🧰", level:"Chaîne", source:"Graisse et utilisations", page:10, q:"Quel avantage offre une cire de chaîne ?", choices:["Elle attire peu la boue et la poussière","Elle remplace le liquide de frein","Elle augmente le diamètre des rouleaux","Elle nettoie automatiquement une chaîne sale"], answer:"Elle attire peu la boue et la poussière", why:"La cire laisse un film sec et durable, mais elle doit être appliquée sur une chaîne parfaitement propre."},
  {category:"Atelier", icon:"🧰", level:"Sécurité", source:"Graisse et utilisations", page:11, q:"Quelle pièce ne doit jamais être lubrifiée ?", choices:["Le disque de frein","Le filetage d'une pédale","Un roulement ouvert","Une chaîne propre"], answer:"Le disque de frein", why:"Toute contamination réduit fortement le coefficient de friction et peut imposer le remplacement des plaquettes."},
  {category:"Atelier", icon:"🧰", level:"Matériaux", source:"Les Matériaux", page:10, q:"Quelle série d'aluminium est couramment utilisée pour les périphériques fortement sollicités ?", choices:["7075","1000","200 uniquement","953 Reynolds"], answer:"7075", why:"Le 7075 offre de bonnes caractéristiques mécaniques et se retrouve notamment dans des périphériques et composants usinés."},
  {category:"Atelier", icon:"🧰", level:"Matériaux", source:"Les Matériaux", page:11, q:"Quel alliage de titane est très répandu dans les cadres de vélo ?", choices:["Ti 3Al 2,5V","Acier Hi-Ten","Aluminium 6061 pur","Magnésium DOT 4"], answer:"Ti 3Al 2,5V", why:"Cet alliage combine résistance, souplesse, durabilité et faible sensibilité à la corrosion, mais il est coûteux à travailler."},
  {category:"Atelier", icon:"🧰", level:"Matériaux", source:"Les Matériaux", page:16, q:"Que signifie HR dans la classification des fibres carbone ?", choices:["Haute Résistance","Haute Rotation","Hydraulique Renforcé","Humidité Réduite"], answer:"Haute Résistance", why:"Les familles de fibres se distinguent notamment par leur résistance et leur module, puis sont orientées selon le comportement recherché."},
  {category:"Atelier", icon:"🧰", level:"Organisation", source:"Organisation du poste de travail", page:5, q:"Dans la méthode 5S, que signifie Seiri ?", choices:["Ôter l'inutile","Augmenter la cadence","Mesurer les pièces","Lubrifier les machines"], answer:"Ôter l'inutile", why:"Seiri consiste à trier, jeter, recycler ou archiver afin de ne conserver au poste que ce qui est réellement nécessaire."},
  {category:"Atelier", icon:"🧰", level:"Organisation", source:"Organisation du poste de travail", page:7, q:"Quel est l'objectif principal de Seiton ?", choices:["Ranger pour limiter les recherches et déplacements","Nettoyer les disques au lubrifiant","Créer davantage de stock inutile","Reporter les anomalies"], answer:"Ranger pour limiter les recherches et déplacements", why:"Chaque outil reçoit une place définie, visible et adaptée à sa fréquence d'utilisation."},
  {category:"Atelier", icon:"🧰", level:"Types de vélo", source:"Les différents types de vélos", page:8, q:"Quelle configuration de transmission est courante sur un gravel moderne présenté dans le support ?", choices:["Mono-plateau 1×12 ou 1×13","Triple plateau 3×5 uniquement","Pignon fixe obligatoire","Aucune transmission"], answer:"Mono-plateau 1×12 ou 1×13", why:"Le gravel associe généralement pneus tubeless volumineux, freins à disque et fixations pour les équipements."},
  {category:"Atelier", icon:"🧰", level:"Types de vélo", source:"Les différents types de vélos", page:14, q:"Quel débattement caractérise généralement un VTT de descente moderne ?", choices:["Environ 200 mm à l'avant et à l'arrière","Environ 20 mm uniquement","Aucune suspension","Toujours moins de 50 mm"], answer:"Environ 200 mm à l'avant et à l'arrière", why:"Le DH privilégie contrôle, progressivité et robustesse en descente, avec de grands disques et des suspensions à fort débattement."}
);

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
const sheetDetails = {
  SHIS: [
    {title:"Anatomie et rôle", items:["Le jeu de direction guide la rotation de la fourche tout en reprenant les efforts axiaux et radiaux transmis par la roue avant.","L'ensemble comprend généralement un roulement haut, un roulement bas, un cône de fourche, un système de compression et des éléments d'étanchéité.","La précharge supprime le jeu ; les vis de potence immobilisent ensuite le réglage. Le capot supérieur ne sert pas à serrer définitivement la potence."]},
    {title:"Décoder le SHIS", items:["Un code complet se lit de haut en bas : famille de cuvette, diamètre du logement dans le cadre, puis diamètre du pivot au niveau du roulement.","EC signifie External Cup, ZS Zero Stack et IS Integrated. Les parties haute et basse peuvent employer deux familles différentes.","Dans ZS44/28.6, 44 mm correspond au logement du cadre et 28,6 mm au pivot. Une base conique 1,5 pouce vaut 38,1 mm."]},
    {title:"Méthode d'atelier", items:["Nettoyer les portées, vérifier l'absence de bavure et graisser légèrement les surfaces métalliques avant montage.","Presser les cuvettes bien dans l'axe avec l'outil adapté ; ne jamais les faire entrer en frappant directement sur leur bord.","Régler la précharge avant de serrer la potence, puis contrôler la rotation libre, l'alignement du cintre et l'absence de jeu frein avant serré."]},
    {title:"Diagnostic", items:["Un claquement au freinage évoque une précharge insuffisante, une cuvette mobile ou un roulement usé.","Un point dur peut provenir d'une précharge excessive, d'un roulement marqué ou de portées mal alignées.","Des traces d'oxydation ou une graisse chargée d'eau imposent nettoyage, contrôle des pistes et remplacement des roulements si nécessaire."]}
  ],
  ETRTO: [
    {title:"Lire les dimensions", items:["Dans 37-622, 37 indique la largeur nominale du pneu gonflé et 622 le diamètre de portée des tringles, appelé BSD.","Le BSD est la donnée décisive pour la compatibilité du diamètre. Deux pneus portant des noms commerciaux proches peuvent avoir des BSD différents.","700C et 29 pouces utilisent souvent un BSD de 622 mm, mais leur largeur et leur usage restent différents."]},
    {title:"Pneu et jante", items:["La largeur intérieure de jante doit rester cohérente avec la section du pneu : trop étroit, le pneu devient instable ; trop large, son profil s'aplatit.","Le diamètre ETRTO doit correspondre exactement. Un pneu 584 ne se monte pas sur une jante 559 ou 622.","Vérifier aussi le type de tringle, la compatibilité tubeless, la pression maximale de la jante et celle du pneu."]},
    {title:"Montage sûr", items:["Placer d'abord une tringle, installer chambre ou valve tubeless, puis terminer la seconde tringle en partant à l'opposé de la valve.","Ramener les tringles dans la gorge centrale de la jante réduit leur tension et évite l'emploi forcé d'un démonte-pneu.","Après gonflage progressif, contrôler le témoin de centrage sur tout le pourtour et vérifier qu'aucune chambre n'est pincée."]},
    {title:"Pression et contrôle", items:["La pression dépend de la masse totale, du volume du pneu, du terrain et du montage ; l'indication du flanc donne des limites, pas une valeur universelle.","Une pression trop basse favorise talonnage, pincement et instabilité ; trop haute, elle réduit confort et adhérence.","Inspecter coupures, craquelures, déformation des tringles et apparition de la carcasse avant chaque remise en service."]}
  ],
  "Pédalier": [
    {title:"Fonction et architecture", items:["Le pédalier transforme l'effort alternatif des jambes en couple de rotation transmis à la chaîne.","Il réunit manivelles, axe, plateaux et interface de boîtier. Selon le système, l'axe est séparé ou solidaire d'une manivelle.","La longueur des manivelles influence l'amplitude de pédalage ; le nombre de dents des plateaux conditionne les braquets disponibles."]},
    {title:"Standards courants", items:["Le BSA est un boîtier fileté ; la cuvette droite possède généralement un pas inversé. BB86, BB92 et PF30 sont des familles Press Fit.","Hollowtech II utilise un axe de 24 mm intégré à la manivelle droite ; DUB emploie un axe de 28,99 mm.","Le BCD est le diamètre du cercle passant par les vis du plateau. Il détermine les plateaux compatibles, avec le nombre de branches et le déport."]},
    {title:"Montage", items:["Identifier précisément largeur de boîte, filetage ou diamètre d'alésage avant de choisir le boîtier.","Nettoyer les interfaces, appliquer graisse ou produit recommandé, puis respecter ordre, sens et couples du fabricant.","Sur une manivelle à deux vis de pincement, alterner les serrages par petites étapes et installer la plaquette de sécurité lorsqu'elle existe."]},
    {title:"Diagnostic", items:["Un jeu latéral peut venir d'une précharge incorrecte, de roulements usés ou d'une manivelle desserrée.","Un craquement n'accuse pas automatiquement le boîtier : contrôler aussi pédales, plateaux, selle, serrages et interfaces sèches.","Une rotation rugueuse après dépose de la chaîne oriente vers les roulements ; une denture en aileron révèle une usure avancée."]}
  ],
  VAE: [
    {title:"Principe et réglementation", items:["Un VAE standard assiste uniquement lorsque le cycliste pédale, avec une puissance nominale continue maximale de 250 W et une coupure progressive à 25 km/h.","Au-delà de la vitesse d'assistance, le vélo reste utilisable mais le moteur ne doit plus fournir d'aide motrice.","Une gâchette d'aide à la marche reste limitée à faible vitesse ; une machine plus rapide relève d'une autre catégorie réglementaire."]},
    {title:"Chaîne d'énergie", items:["La batterie stocke l'énergie, le contrôleur module le courant et le moteur le transforme en couple mécanique.","Un moteur central transmet son effort par la chaîne ; un moteur moyeu agit directement sur la roue avant ou arrière.","Les capteurs de cadence détectent la rotation, tandis qu'un capteur de couple mesure l'effort et rend l'assistance plus progressive."]},
    {title:"Batterie et autonomie", items:["L'énergie nominale se calcule en Wh : tension en volts multipliée par capacité en ampères-heures.","L'autonomie dépend surtout du niveau d'assistance, du dénivelé, de la masse, de la pression des pneus, du vent et de la température.","Pour un stockage prolongé, conserver la batterie partiellement chargée, au sec, loin du gel et de la chaleur, avec des contrôles périodiques."]},
    {title:"Entretien et sécurité", items:["Retirer batterie ou désactiver le système avant une intervention proche de la transmission ou des connecteurs.","Ne pas ouvrir un pack lithium, ne pas utiliser un chargeur non homologué et isoler immédiatement une batterie gonflée, choquée ou anormalement chaude.","Avant diagnostic électronique, contrôler l'état mécanique, les connecteurs, la charge, l'alignement du capteur de vitesse et les codes d'erreur."]}
  ],
  "Électricité": [
    {title:"Grandeurs essentielles", items:["La tension U s'exprime en volts, l'intensité I en ampères, la résistance R en ohms et la puissance P en watts.","Loi d'Ohm : U = R × I. Puissance électrique : P = U × I.","L'énergie d'une batterie s'exprime en Wh : une batterie 36 V et 14 Ah offre théoriquement 504 Wh."]},
    {title:"Batterie lithium-ion", items:["Les cellules sont assemblées en série pour augmenter la tension et en parallèle pour augmenter la capacité disponible.","Le BMS surveille tension, courant et température, équilibre les groupes de cellules et coupe en cas de situation dangereuse.","Une décharge profonde, une surcharge ou une température extrême accélère le vieillissement et peut rendre le pack dangereux."]},
    {title:"Commande du moteur", items:["Le contrôleur transforme et séquence le courant continu de la batterie pour piloter les phases d'un moteur brushless.","Les capteurs Hall renseignent la position du rotor ; le contrôleur adapte la commutation pour produire le couple demandé.","L'écran, les capteurs, le faisceau et le contrôleur communiquent souvent selon un protocole propre au fabricant."]},
    {title:"Diagnostic raisonné", items:["Commencer par une inspection visuelle : broches tordues, humidité, câble pincé, aimant déplacé et connecteur mal engagé.","Mesurer uniquement avec la procédure et le matériel adaptés ; un court-circuit de batterie peut libérer une énergie considérable.","Lire les codes défaut, vérifier les éléments simples puis isoler les sous-ensembles sans remplacer des pièces au hasard."]}
  ],
  Serrage: [
    {title:"Pourquoi un couple", items:["Le couple crée la précharge qui maintient l'assemblage. Trop faible, il peut bouger ; trop élevé, vis, filetage ou pièce peuvent être endommagés.","Une valeur de couple n'est valable qu'avec l'état de filetage et le lubrifiant prévus par le fabricant.","La valeur gravée sur une pièce ou donnée dans sa documentation prime sur toute table générique."]},
    {title:"Bonne méthode", items:["Employer une clé dynamométrique couvrant la valeur au milieu de sa plage et utiliser l'embout parfaitement adapté.","Approcher les vis à la main, serrer progressivement et alterner en croix ou par petites étapes sur les assemblages multiples.","Arrêter dès le déclenchement, ne pas utiliser la clé dynamométrique pour desserrer et la remettre à sa valeur minimale après usage si son modèle l'exige."]},
    {title:"Zones sensibles", items:["Sur le poste de pilotage, respecter l'écartement régulier du capot de potence et l'ordre recommandé par le fabricant.","Sur le carbone, nettoyer, inspecter, appliquer la pâte de montage prévue et ne jamais dépasser la limite la plus basse indiquée.","Les vis de disque, d'étrier et de manivelle peuvent exiger frein-filet, rondelle ou séquence précise : suivre la documentation."]},
    {title:"Après serrage", items:["Tracer un repère témoin si la procédure atelier le prévoit, puis effectuer un contrôle fonctionnel de la pièce.","Rechercher fissure, déformation ou bruit inhabituel ; un assemblage ayant subi un surcouple doit être inspecté avant remise en service.","Noter les couples critiques sur la fiche d'intervention améliore la traçabilité et évite les oublis."]}
  ],
  Pneus: [
    {title:"Construction", items:["La carcasse donne sa structure au pneu ; les tringles l'ancrent dans la jante et la bande de roulement assure contact, adhérence et résistance à l'usure.","Un nombre de fils par pouce élevé peut apporter souplesse et rendement, mais ne résume pas à lui seul la robustesse du pneu.","Les renforts anticrevaison se placent sous la bande de roulement ou sur les flancs selon l'usage recherché."]},
    {title:"Chambre, tubeless et boyau", items:["Le montage à chambre est simple et universel, mais peut pincer lors d'un choc à basse pression.","Le tubeless utilise une jante étanche, une valve et du préventif ; il autorise souvent une pression plus basse et colmate de petites perforations.","Le boyau est cousu autour de sa chambre puis collé sur une jante spécifique ; il demande une procédure dédiée."]},
    {title:"Montage tubeless", items:["Nettoyer la jante, poser un ruban de largeur adaptée sans plis, percer proprement à la valve et serrer celle-ci sans excès.","Introduire la quantité de préventif recommandée, claquer les tringles puis répartir le liquide en faisant tourner et basculer la roue.","Contrôler les fuites à la valve, aux tringles et aux rayons, puis vérifier la pression après quelques heures."]},
    {title:"Usure et entretien", items:["Retirer régulièrement silex et débris, maintenir une pression adaptée et renouveler le préventif avant qu'il ne sèche.","Remplacer le pneu si la carcasse apparaît, si une tringle est déformée, si le flanc est profondément coupé ou si une hernie se forme.","Une crevaison répétée au même endroit peut révéler un fond de jante déplacé, une bavure ou un corps étranger resté dans le pneu."]}
  ],
  Transmission: [
    {title:"Braquet et développement", items:["Le braquet est le rapport dents du plateau sur dents du pignon. Un grand rapport est plus dur et fait avancer davantage par tour de pédale.","Le développement est égal au braquet multiplié par la circonférence réelle de la roue.","Croiser fortement la chaîne augmente angle, bruit et usure ; choisir une combinaison offrant une ligne de chaîne plus droite."]},
    {title:"Chaîne et pignons", items:["Le pas d'une chaîne de vélo est d'un demi-pouce ; sa largeur extérieure varie selon le nombre de vitesses.","L'allongement mesuré vient surtout de l'usure des axes et rouleaux, pas d'un étirement élastique des plaques.","Remplacer la chaîne assez tôt préserve cassette et plateaux ; une chaîne neuve qui saute peut révéler des pignons déjà usés."]},
    {title:"Réglage du dérailleur", items:["La vis H limite le déplacement vers le petit pignon, la vis L vers le grand pignon ; elles ne servent pas à régler l'indexation courante.","Si la chaîne hésite à monter vers un plus grand pignon, augmenter légèrement la tension de câble ; si elle redescend mal, la diminuer.","Avant tout réglage, contrôler patte de dérailleur, état des câbles, fixation de la roue et alignement de la chape."]},
    {title:"Corps de roue libre et moyeux", items:["Cassette et roue libre vissée ne se déposent pas avec les mêmes outils : identifier le système avant intervention.","Les moyeux à vitesses intégrées changent de rapport dans le moyeu et permettent souvent de sélectionner un rapport à l'arrêt.","Après entretien, vérifier roue libre, serrage, passage de toutes les vitesses et absence de contact chaîne-rayons."]}
  ],
  Freinage: [
    {title:"Principes", items:["Le frein convertit l'énergie cinétique en chaleur. La puissance à dissiper augmente fortement avec la vitesse et la masse.","Le diamètre du disque augmente le bras de levier et la capacité thermique, mais doit rester compatible avec cadre, fourche, moyeu et adaptateur.","L'adhérence du pneu limite le freinage : bloquer une roue réduit généralement le contrôle et peut allonger la distance."]},
    {title:"Freins mécaniques", items:["Le levier tire un câble qui actionne étrier ou bras. Gaine, embouts et cheminement influencent directement la sensation au levier.","Long pull et short pull n'offrent pas le même tirage ; levier et frein doivent être compatibles.","Sur frein sur jante, le patin porte entièrement sur la piste, sans toucher pneu ni passer sous la jante, avec un léger pincement si nécessaire."]},
    {title:"Hydraulique", items:["Le maître-cylindre pousse un liquide presque incompressible vers les pistons de l'étrier, qui appliquent les plaquettes.","Utiliser uniquement le liquide prescrit : DOT et huile minérale ne sont pas interchangeables et attaquent des joints différents.","Une purge élimine air et liquide dégradé ; protéger disque et plaquettes de toute contamination pendant l'opération."]},
    {title:"Contrôle et diagnostic", items:["Mesurer épaisseur du disque et des plaquettes selon les limites fabricant ; rechercher fissure, bleuissement et usure irrégulière.","Un levier spongieux évoque de l'air, une durite déformée ou un réglage ; une course longue peut aussi venir de plaquettes usées.","Après intervention, centrer l'étrier, roder les plaquettes neuves et réaliser un essai progressif dans une zone sûre."]}
  ],
  Roues: [
    {title:"Architecture", items:["La roue associe moyeu, jante, rayons et écrous. Les rayons travaillent principalement en tension et maintiennent la jante centrée autour du moyeu.","Les rayons peuvent être droits, rétreints ou plats ; leur longueur dépend de la géométrie du moyeu, de la jante et du croisement.","Une roue arrière et une roue avant à disque sont souvent asymétriques : les tensions diffèrent entre côté transmission ou disque et côté opposé."]},
    {title:"Rayonnage", items:["Le croisement par trois transmet efficacement le couple et reste courant sur les roues traditionnelles à nombreux rayons.","Les rayons moteurs et tracteurs alternent selon le plan de montage ; leur orientation doit respecter trous de jante et de moyeu.","Monter les écrous de façon uniforme, lubrifier selon la méthode retenue puis augmenter progressivement la tension."]},
    {title:"Défauts et corrections", items:["Le voile est un déplacement latéral : on augmente la tension du côté opposé au défaut et/ou on détend légèrement l'autre côté.","Le saut est un défaut radial : une zone trop éloignée du moyeu demande une tension équilibrée des deux côtés.","Le parapluie décrit le centrage de la jante entre les contre-écrous ; il se vérifie avec une jauge de centrage."]},
    {title:"Finition et contrôle", items:["Le tensiomètre compare les rayons et aide à rester dans la plage admise par la jante ; la régularité compte autant que le centrage.","Détendre les contraintes résiduelles pendant le montage limite les variations de tension et les bruits lors des premières sorties.","Contrôler voile, saut, parapluie, tension, absence de rayon tordu et bon appui des têtes avant montage du fond de jante."]}
  ],
  Atelier: [
    {title:"Mesurer correctement", items:["Le pied à coulisse mesure dimensions extérieures, intérieures et profondeurs ; nettoyer les becs et ne pas forcer sur la pièce.","Le micromètre offre une meilleure précision pour l'épaisseur d'un disque ou un diamètre, avec une plage limitée propre à l'instrument.","Toujours comparer la mesure à la limite du fabricant et tenir compte de la résolution, de l'étalonnage et de la température."]},
    {title:"Lubrifiants et produits", items:["La graisse protège et reste en place dans les roulements et assemblages ; l'huile pénètre mieux les articulations de chaîne.","La pâte carbone augmente le frottement afin de tenir avec moins de couple ; l'antiseize protège certaines interfaces mais modifie le serrage.","Éviter toute graisse ou huile sur pistes de freinage, disques et garnitures. Employer nettoyant et frein-filet compatibles avec les matériaux."]},
    {title:"Matériaux", items:["L'acier est robuste et réparable, l'aluminium léger mais sensible à la fatigue, le titane combine résistance et corrosion avec un coût élevé.","Le carbone est anisotrope : orientation et empilement des fibres déterminent sa résistance. Un choc peut créer un dommage peu visible.","Une fissure, un délaminage suspect ou une forte marque de serrage impose l'arrêt d'utilisation et un diagnostic spécialisé."]},
    {title:"Organisation et contrôle final", items:["La méthode 5S consiste à trier, ranger, nettoyer, standardiser et maintenir les bonnes pratiques pour réduire erreurs et temps perdu.","Avant restitution, contrôler cadre, direction, roues, pneus, freins, transmission, serrages, éclairage et accessoires.","Effectuer un essai fonctionnel, consigner les travaux et signaler clairement au client toute limite, pièce à surveiller ou intervention différée."]}
  ]
};
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
  if (name === "home") updateLearningSummary();
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
    details.innerHTML = `<summary><span class="sheet-icon"></span><span><strong></strong><small></small><em></em></span><span class="sheet-toggle">+</span></summary><div class="sheet-body"></div>`;
    details.querySelector(".sheet-icon").textContent = sheet.icon;
    details.querySelector("summary strong").textContent = sheet.title;
    details.querySelector("summary small").textContent = sheet.subtitle;
    const sections = [{title:"À retenir", items:sheet.bullets}, ...(sheetDetails[sheet.category] || [])];
    details.querySelector("summary em").textContent = `${sections.reduce((total, section) => total + section.items.length, 0)} notions`;
    const body = details.querySelector(".sheet-body");
    sections.forEach(section => {
      const block = document.createElement("section");
      block.className = "sheet-section";
      const title = document.createElement("h3");
      title.textContent = section.title;
      const list = document.createElement("ul");
      section.items.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
      });
      block.append(title, list);
      body.appendChild(block);
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
