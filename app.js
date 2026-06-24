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
const $ = (id) => document.getElementById(id);
const screens = {home:$("screen-home"), quiz:$("screen-quiz"), result:$("screen-result")};
const defaultSettings = {display:"auto", largeText:false, reducedMotion:false};
let settings = readSettings();
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
  round = customRound ? shuffle(customRound) : shuffle(availableQuestions()).slice(0, Math.min(selectedCount, availableQuestions().length));
  index = score = correct = streak = topStreak = 0;
  missed = [];
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
  showScreen("result");
}

function updateBestScore() {
  const best = readBestScore();
  $("best-score").textContent = best ? best.toLocaleString("fr-FR") : "—";
}

function readBestScore() {
  try { return Number(localStorage.getItem("veloquiz-best") || 0); }
  catch (_) { return 0; }
}

function readSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem("veloquiz-settings") || "{}");
    return {
      display: ["auto", "phone", "desktop"].includes(saved.display) ? saved.display : defaultSettings.display,
      largeText: Boolean(saved.largeText),
      reducedMotion: Boolean(saved.reducedMotion)
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
  const viewport = document.querySelector('meta[name="viewport"]');
  viewport.content = settings.display === "desktop" ? "width=1100" : "width=device-width, initial-scale=1";
  document.querySelectorAll('input[name="display-mode"]').forEach(input => { input.checked = input.value === settings.display; });
  $("large-text-setting").checked = settings.largeText;
  $("reduced-motion-setting").checked = settings.reducedMotion;
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
$("start-btn").addEventListener("click", () => begin());
$("next-btn").addEventListener("click", nextQuestion);
$("quit-btn").addEventListener("click", () => showScreen("home"));
$("restart-btn").addEventListener("click", () => showScreen("home"));
$("retry-missed-btn").addEventListener("click", () => { if (missed.length) begin([...missed]); });
document.querySelector(".brand").addEventListener("click", event => { event.preventDefault(); showScreen("home"); });
document.addEventListener("keydown", event => {
  if (!screens.quiz.classList.contains("hidden")) {
    if (!answered && ["1","2","3","4"].includes(event.key)) document.querySelectorAll(".answer-btn")[Number(event.key) - 1]?.click();
    else if (answered && event.key === "Enter") nextQuestion();
  }
});

initializeSettings();
updateBestScore();
updateAvailability();
