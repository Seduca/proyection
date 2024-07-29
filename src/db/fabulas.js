const fabulas =[
    {
        "titulo": "El León y el Ratón",
        "historia": "En la selva, un león poderoso atrapó a un pequeño ratón. A punto de devorarlo, el ratón le pidió clemencia prometiendo ayudarlo algún día. El león, burlándose, lo liberó. Tiempo después, el león cayó en una trampa. El ratón, recordando la promesa, royó la red y salvó al león. Agradecido, el león entendió que la bondad no depende del tamaño.",
        "moraleja": "La bondad y la gratitud son virtudes que no dependen del tamaño o la fuerza."
    },
    {
        "titulo": "El Zorro y el Cuervo",
        "historia": "Un cuervo encontró un queso y lo llevó a un árbol. Un zorro, al verlo, ideó un plan. Alabó su belleza y le pidió cantar para ver si lo hacía tan bien como decía. El cuervo cantó y dejó caer el queso. El zorro se lo comió y dijo: 'Las adulaciones despiertan vanidades.'",
        "moraleja": "No te dejes engañar por las adulaciones."
    },
    {
        "titulo": "La Tortuga y la Liebre",
        "historia": "Una liebre presumida desafió a una tortuga a correr. Al principio, la liebre llevaba ventaja y se durmió. La tortuga, constante, llegó primero. La liebre, al despertar y verla, entendió: 'La constancia y la perseverancia superan a la velocidad.'",
        "moraleja": "La constancia y la perseverancia superan a la velocidad."
    },
    {
        "titulo": "El Perro y su Sombra",
        "historia": "Un perro llevaba un trozo de carne en la boca y, al cruzar un río, vio su reflejo en el agua. Pensando que era otro perro con un trozo más grande, soltó su carne para coger el del reflejo y se quedó sin nada. Moraleja: A veces, queriendo más, se pierde lo que se tiene.",
        "moraleja": "A veces, queriendo más, se pierde lo que se tiene."
    },
    {
        "titulo": "El Lobo y el Cordero",
        "historia": "Un lobo, sediento, encontró un cordero bebiendo en un arroyo. Quiso comerlo, pero el cordero se defendió diciendo que el agua no podía estar turbia porque corría de él hacia el lobo. El lobo, sin razón, lo mató. Moraleja: Los tiranos no necesitan excusas.",
        "moraleja": "Los tiranos no necesitan excusas."
    },
    {
        "titulo": "La Hormiga y la Cigarra",
        "historia": "Durante el verano, una cigarra cantaba mientras una hormiga trabajaba. En invierno, la cigarra, hambrienta, pidió ayuda a la hormiga, que le negó, recordándole que mientras cantaba, ella trabajaba. Moraleja: Hay que trabajar hoy para vivir mañana.",
        "moraleja": "Hay que trabajar hoy para vivir mañana."
    },
    {
        "titulo": "La Rana y el Buey",
        "historia": "Una rana, hinchada, se burlaba de un buey por su tamaño. Al intentar imitarlo, estalló. Moraleja: La envidia puede ser peligrosa.",
        "moraleja": "La envidia puede ser peligrosa."
    },
    {
        "titulo": "El Ratón de Campo y el Ratón de Ciudad",
        "historia": "Un ratón de campo invitó a un ratón de ciudad a su casa. Sirvió una modesta comida que el ratón de ciudad despreció. Lo llevó a la ciudad y le ofreció una lujosa cena que interrumpieron los gatos. El ratón de campo regresó a casa y dijo que prefiere la paz sin miedo a la pobreza con miedo.",
        "moraleja": "Es mejor tener paz y seguridad que vivir en miedo constante."
    },
    {
        "titulo": "El Cuervo y la Jarra de Agua",
        "historia": "Un cuervo sediento encontró una jarra con agua, pero el nivel estaba demasiado bajo para alcanzarlo. Dejó caer piedras para elevar el nivel y poder beber. Moraleja: La perseverancia puede superar dificultades.",
        "moraleja": "La perseverancia puede superar dificultades."
    },
    {
        "titulo": "El Pescador y el Pez de Oro",
        "historia": "Un pescador atrapó un pez de oro que prometió cumplir sus deseos si lo liberaba. Al llegar a casa, su esposa pidió riquezas, pero el pez la dejó sin nada. Moraleja: La avaricia puede llevar a la pérdida.",
        "moraleja": "La avaricia puede llevar a la pérdida."
    },
    {
        "titulo": "El Águila y el Escarabajo",
        "historia": "Un águila capturó un escarabajo que rogaba ser liberado prometiendo enseñar el secreto del vuelo. El águila lo soltó, pero el escarabajo huyó. Moraleja: No todos cumplen sus promesas.",
        "moraleja": "No todos cumplen sus promesas."
    },
    {
        "titulo": "La Zorra y las Uvas",
        "historia": "Una zorra intentó alcanzar unas uvas fuera de su alcance y, al no conseguirlo, dijo que estaban verdes. Moraleja: Despreciar lo que no se puede alcanzar.",
        "moraleja": "Despreciar lo que no se puede alcanzar."
    },
    {
        "titulo": "La Gallina de los Huevos de Oro",
        "historia": "Un granjero tenía una gallina que ponía un huevo de oro al día. En su codicia, la mató para obtener todos los huevos a la vez. Moraleja: La avaricia rompe el saco.",
        "moraleja": "La avaricia rompe el saco."
    },
    {
        "titulo": "El Asno y el Perrito",
        "historia": "Un asno veía cómo su amo mimaba a un perrito y, por querer ser igual, murió. Moraleja: Cada quien debe ser conforme a su capacidad.",
        "moraleja": "Cada quien debe ser conforme a su capacidad."
    },
    {
        "titulo": "El Elefante y la Pulga",
        "historia": "Una pulga desafió a un elefante a luchar y, tras reírse él, la pulga lo picó y murió. Moraleja: No hay que burlarse del adversario.",
        "moraleja": "No hay que burlarse del adversario."
    },
    {
        "titulo": "El Gato y los Ratones",
        "historia": "Un gato prometió paz a unos ratones, pero, al rato, se los comió. Moraleja: No esperar lealtad de quien te perjudica.",
        "moraleja": "No esperar lealtad de quien te perjudica."
    },
    {
        "titulo": "La Liebre y el Armadillo",
        "historia": "Una liebre desafió a una armadilla a correr y, tras ella, se murió.",
        "moraleja": "Saber competir en el terreno es fundamental."
    },
    {
        "titulo": "La Cigüeña y la Zorra",
        "historia": "Una zorra invitó a una cigüeña a su casa y le sirvió en un plato plano, lo cual hizo que la cigüeña no comiera. Más tarde, la cigüeña invitó a la zorra y le sirvió en un vaso largo.",
        "moraleja": "Actuar con los demás como quisiéramos que actuaran con nosotros."
    },
    {
        "titulo": "El Halcón y el Ruiseñor",
        "historia": "Un ruiseñor y un halcón vivían en el mismo árbol. El ruiseñor cantaba dulcemente mientras el halcón lo observaba. Un día, el halcón le preguntó al ruiseñor por qué cantaba tanto sabiendo que no podría volar tan alto como él. El ruiseñor respondió que cantaba porque amaba la música, no porque quisiera ser un halcón.",
        "moraleja": "Cada uno tiene sus propios talentos y debe celebrarlos sin compararse con los demás."
    },
    {
        "titulo": "El Ciervo y el León",
        "historia": "Un ciervo que huía de un león se vio atrapado en una red. El león, acercándose, le preguntó por qué huía si tenía la oportunidad de escapar. El ciervo respondió que prefería morir libre que vivir cautivo.",
        "moraleja": "La libertad es más valiosa que cualquier otra cosa."
    },
    {
        "titulo": "El Escarabajo y el Grillo",
        "historia": "Un escarabajo y un grillo compitieron en un concurso de saltos. Aunque el grillo saltó más alto, el escarabajo ganó porque no se rindió hasta alcanzar la meta.",
        "moraleja": "La persistencia y la determinación llevan al éxito."
    },
    {
        "titulo": "El Oso y las Abejas",
        "historia": "Un oso trató de tomar miel de una colmena, pero las abejas lo picaron. El oso, huyendo, reflexionó sobre su codicia.",
        "moraleja": "La codicia conlleva consecuencias negativas."
    },
    {
        "titulo": "El Caballo y el Asno",
        "historia": "Un caballo y un asno trabajaban juntos. El caballo, más rápido, se burlaba del asno por su lentitud. Cuando los dueños comenzaron a usar al caballo para trabajos más pesados, el asno se rió.",
        "moraleja": "La humildad y la constancia son más importantes que la velocidad y la arrogancia."
    },
    {
        "titulo": "El Pavo Real y la Grulla",
        "historia": "Un pavo real y una grulla se encontraron y discutieron sobre cuál era más hermoso. Llegaron a la conclusión de que cada uno era hermoso a su manera.",
        "moraleja": "La belleza es subjetiva y única para cada individuo."
    },
    {
        "titulo": "La Hormiga y el Saltamontes",
        "historia": "Una hormiga trabajaba todo el verano almacenando comida mientras un saltamontes cantaba. En invierno, la hormiga sobrevivió mientras el saltamontes sufrió frío y hambre.",
        "moraleja": "Es mejor ser previsor y trabajar duro que vivir despreocupadamente."
    },
    {
        "titulo": "El Ganso y los Patos",
        "historia": "Un ganso quería unirse a un grupo de patos. Los patos, burlándose, lo invitaron a nadar. El ganso, torpe en el agua, se rió.",
        "moraleja": "Ser uno mismo es importante y no tratar de ser algo que no eres."
    },
    {
        "titulo": "La Culebra y la Lima",
        "historia": "Una culebra encontró una lima y decidió morderla, pero se rompió los dientes. Ella reflexionó sobre su acción.",
        "moraleja": "No todo lo que brilla es oro."
    },
    {
        "titulo": "El Puercoespín y el Zorro",
        "historia": "Un zorro intentó acercarse a un puercoespín para hacerse amigo de él. El puercoespín, con sus púas, no permitió que el zorro se acercara demasiado.",
        "moraleja": "Es mejor mantener la distancia de aquellos que solo buscan aprovecharse de ti."
    },
    {
        "titulo": "La Araña y la Mariposa",
        "historia": "Una araña atrapó a una mariposa en su red y planeaba comérsela. La mariposa, astuta, le dijo que la admiraba por su belleza y habilidad para tejer redes. La araña, halagada, la dejó ir.",
        "moraleja": "La astucia puede salvar incluso en situaciones difíciles."
    },
    {
        "titulo": "El Gato y la Gaviota",
        "historia": "Un gato y una gaviota discutieron sobre quién era más ágil. Decidieron competir saltando y volando. Al final, se dieron cuenta de que ambos tenían habilidades únicas.",
        "moraleja": "Cada ser vivo tiene sus propios talentos que lo hacen especial."
    },
    {
        "titulo": "El Topo y el Lobo (continuación)",
        "historia": "Un topo y un lobo vivían cerca. El topo, asustado, decidió pedir ayuda al lobo. El lobo, sin dudarlo, la brindó.",
        "moraleja": "La ayuda desinteresada puede venir de donde menos lo esperas."
    },
    {
        "titulo": "La Luciérnaga y el Sol",
        "historia": "Una luciérnaga le preguntó al sol por qué era tan brillante todo el día, mientras que ella solo brillaba por la noche. El sol le respondió que cada uno tiene su momento para brillar y que su luz era necesaria durante la oscuridad.",
        "moraleja": "Todos tenemos nuestras propias capacidades y momentos para brillar."
    },
    {
        "titulo": "El Búho y la Lechuza",
        "historia": "Un búho y una lechuza discutieron sobre cuál era más sabio. Decidieron hacer una competencia de conocimientos. Al final, ambos se dieron cuenta de que la sabiduría no se demuestra en competiciones sino en la vida diaria.",
        "moraleja": "La verdadera sabiduría se muestra en acciones y decisiones, no en palabras."
    },
    {
        "titulo": "El Caracol y la Liebre",
        "historia": "Un caracol y una liebre decidieron competir en una carrera. La liebre corrió rápidamente hacia adelante, pero la caracol avanzó lentamente y llegó a la meta. La liebre se dio cuenta de que subestimó la persistencia del caracol.",
        "moraleja": "La perseverancia y la constancia pueden superar la velocidad y la arrogancia."
    },
    {
        "titulo": "El Pato y el Águila",
        "historia": "Un pato y un águila vivían en el mismo lago. El águila, impresionada por la capacidad del pato para nadar y bucear, lo envidiaba y trató de imitarlo. Pero el águila no podía nadar como el pato y se dio cuenta de que cada uno tiene sus propias habilidades únicas.",
        "moraleja": "Es importante reconocer y apreciar nuestras propias fortalezas en lugar de envidiar las de los demás."
    },
    {
        "titulo": "El Escorpión y la Rana",
        "historia": "Un escorpión quería cruzar un río y pidió ayuda a una rana. La rana tenía miedo de ser picada, pero el escorpión prometió no hacerlo. A mitad del río, el escorpión picó a la rana. Cuando la rana le preguntó por qué lo hizo, el escorpión respondió que era su naturaleza.",
        "moraleja": "Algunas personas o seres tienen comportamientos predecibles y no se puede cambiar su naturaleza."
    },
    {
        "titulo": "El Cangrejo y la Tortuga",
        "historia": "Un cangrejo burlaba a una tortuga por ser lenta. La tortuga desafió al cangrejo a una carrera. A mitad del camino, el cangrejo se quedó atrapado y la tortuga ganó.",
        "moraleja": "La velocidad no siempre garantiza el éxito; la constancia y la perseverancia son más importantes."
    },
    {
        "titulo": "La Hormiga y la Langosta",
        "historia": "Una hormiga trabajaba arduamente recolectando alimentos mientras una langosta disfrutaba del verano. Cuando llegó el invierno, la hormiga tenía suficiente comida mientras la langosta pasaba hambre.",
        "moraleja": "Es importante ser previsor y trabajar duro en lugar de depender de los demás."
    },
    {
        "titulo": "El Buitre y el Cazador",
        "historia": "Un buitre esperaba a que un cazador dejara su presa, pero el cazador lo atrapó y mató.",
        "moraleja": "No esperes recompensas si no estás dispuesto a correr riesgos."
    },
    {
        "titulo": "El Cuervo y el Loro",
        "historia": "Un cuervo se burló de un loro por ser colorido pero no inteligente. El loro respondió que la belleza no necesariamente equivale a la sabiduría.",
        "moraleja": "La verdadera inteligencia no se basa en la apariencia física."
    },
    {
        "titulo": "El Erizo y la Zorra",
        "historia": "Una zorra trató de cazar a un erizo, pero sus espinas la hirieron. La zorra se dio cuenta de que no podía ganarle.",
        "moraleja": "Algunas batallas no valen la pena y es mejor evitarlas."
    },
    {
        "titulo": "El León y el Delfín",
        "historia": "Un león y un delfín discutieron sobre cuál era más fuerte. Decidieron competir. El león, en tierra, no pudo ganarle al delfín en el agua.",
        "moraleja": "La fuerza depende del contexto y las circunstancias."
    },
    {
        "titulo": "El Oso y el Ciervo",
        "historia": "Un oso y un ciervo compartieron el mismo territorio. El ciervo corrió más rápido y el oso no pudo cazarlo.",
        "moraleja": "La astucia y la habilidad pueden superar la fuerza bruta."
    },
    {
        "titulo": "La Serpiente y el Halcón",
        "historia": "Una serpiente intentó trepar a un árbol, pero cayó. Un halcón la ayudó a subir. La serpiente, agradecida, se ofreció a ayudar al halcón en el suelo.",
        "moraleja": "La amabilidad y la gratitud siempre se devuelven."
    },
    {
        "titulo": "El Gorrión y el Águila",
        "historia": "Un gorrión desafió a un águila a volar alto. El águila lo hizo, pero el gorrión se cansó y cayó. El águila lo recogió y lo ayudó a volar.",
        "moraleja": "No subestimes a los demás y ayuda siempre que puedas."
    },
    {
        "titulo": "El Avestruz y el Conejo",
        "historia": "Un avestruz y un conejo discutieron sobre cuál era más rápido. Decidieron competir y el conejo ganó.",
        "moraleja": "La velocidad y la astucia pueden superar la fuerza."
    },
    {
        "titulo": "La Luciérnaga y el Grillo",
        "historia": "Una luciérnaga y un grillo vivieron juntos en el bosque. La luciérnaga brillaba por la noche mientras el grillo cantaba. Ambos disfrutaban de su amistad y de lo que podían ofrecer al mundo.",
        "moraleja": "Cada uno tiene su propio talento y belleza."
    },
    {
        "titulo": "La Comadreja y el Conejo",
        "historia": "Una comadreja intentó cazar a un conejo, pero este último se escondió en su madriguera. La comadreja esperó afuera, pero el conejo fue más astuto y escapó.",
        "moraleja": "La astucia y la inteligencia pueden superar la fuerza física."
    },
    {
        "titulo": "La Libélula y la Mariposa",
        "historia": "Una libélula y una mariposa volaban juntas en el jardín. La libélula era rápida pero la mariposa era más elegante.",
        "moraleja": "La belleza y la gracia pueden ser más valoradas que la velocidad."
    },
    {
        "titulo": "El Cisne y el Pato",
        "historia": "Un cisne y un pato nadaban juntos en el lago. El cisne era elegante y majestuoso mientras que el pato era más común y ruidoso.",
        "moraleja": "La belleza y la elegancia pueden diferenciarte, pero no siempre es mejor."
    },
    {
        "titulo": "La Luciérnaga y el Fuego (continuación)",
        "historia": "Una luciérnaga intentó acercarse al fuego por su brillo, pero se quemó y se dio cuenta de que su luz era única y valiosa por sí misma.",
        "moraleja": "Es importante valorar y apreciar nuestras propias cualidades sin compararnos con los demás."
    },
    {
        "titulo": "El León y el Zorro",
        "historia": "Un león y un zorro discutieron sobre cuál era más astuto. Decidieron probarse en una serie de desafíos y al final se dieron cuenta de que ambos tenían sus propias habilidades únicas.",
        "moraleja": "Todos tenemos fortalezas y debilidades; es importante reconocerlas y utilizarlas sabiamente."
    },
    {
        "titulo": "El Ratón y el Gato",
        "historia": "Un ratón y un gato vivían en la misma casa. El ratón siempre evitaba al gato, pero un día el gato cayó en una trampa y el ratón lo liberó.",
        "moraleja": "A veces, los enemigos pueden convertirse en amigos cuando menos lo esperas."
    },
    {
        "titulo": "El Búho y la Corneja",
        "historia": "Un búho y una corneja discutieron sobre cuál era más inteligente. Decidieron competir en una serie de acertijos y al final se dieron cuenta de que ambos tenían habilidades únicas.",
        "moraleja": "La verdadera sabiduría no se demuestra en competiciones sino en la vida diaria."
    },
    {
        "titulo": "El Sapo y la Libélula",
        "historia": "Un sapo quería ser como una libélula y volar. Intentó atraparla, pero la libélula voló alto y el sapo se dio cuenta de que cada uno tiene su propio lugar en el mundo.",
        "moraleja": "Es importante aceptarnos a nosotros mismos y valorar nuestras propias cualidades."
    },
    {
        "titulo": "El Conejo y la Ardilla",
        "historia": "Un conejo y una ardilla discutieron sobre quién era más veloz. Decidieron competir en una carrera y la ardilla ganó por su agilidad y rapidez.",
        "moraleja": "La velocidad y la agilidad pueden ser más importantes que la fuerza en ciertas situaciones."
    },
    {
        "titulo": "La Cigüeña y el Cuervo",
        "historia": "Una cigüeña y un cuervo discutieron sobre cuál tenía la mejor voz. Decidieron cantar y al final se dieron cuenta de que cada uno tenía su propio estilo y belleza.",
        "moraleja": "La belleza y el talento son únicos para cada individuo."
    },
    {
        "titulo": "El Erizo y el Gato",
        "historia": "Un erizo y un gato vivían en el mismo jardín. El erizo tenía púas y el gato tenía garras, pero aprendieron a convivir y respetarse mutuamente.",
        "moraleja": "La convivencia pacífica y el respeto son importantes entre personas con diferencias."
    },
    {
        "titulo": "El Grillo y el Saltamontes",
        "historia": "Un grillo y un saltamontes discutieron sobre quién tenía la mejor canción. Decidieron cantar y al final se dieron cuenta de que ambos tenían su propio encanto y talento.",
        "moraleja": "Cada uno tiene su propio talento y es importante celebrarlo."
    },
    {
        "titulo": "El Pato y la Oca",
        "historia": "Un pato y una oca discutieron sobre quién era más gracioso. Decidieron contar chistes y al final se dieron cuenta de que ambos tenían su propio sentido del humor.",
        "moraleja": "La diversidad en habilidades y personalidades enriquece nuestras vidas."
    },
    {
        "titulo": "El Unicornio y el Caballo",
        "historia": "Un unicornio y un caballo discutieron sobre quién era más especial. Decidieron correr juntos y al final se dieron cuenta de que ambos eran únicos en su propia manera.",
        "moraleja": "Cada uno tiene sus propias cualidades únicas que los hacen especiales."
    },
    {
        "titulo": "La Nutria y el Castor",
        "historia": "Una nutria y un castor discutieron sobre quién construía mejor. Decidieron construir presas y al final se dieron cuenta de que ambos tenían habilidades únicas en la construcción.",
        "moraleja": "Reconocer y valorar las habilidades únicas de los demás enriquece nuestras vidas."
    },
    {
        "titulo": "El Dragón y el Fénix",
        "historia": "Un dragón y un fénix discutieron sobre quién era más poderoso. Decidieron competir en una serie de pruebas y al final se dieron cuenta de que ambos tenían habilidades únicas.",
        "moraleja": "El verdadero poder radica en cómo usamos nuestras habilidades y no en compararnos con otros."
    },
    {
        "titulo": "La Abeja y la Mariposa",
        "historia": "Una abeja y una mariposa discutieron sobre quién era más trabajador. Decidieron recolectar polen y al final se dieron cuenta de que ambos contribuían de manera única al ecosistema.",
        "moraleja": "Cada uno tiene su propio papel y contribución en el mundo."
    },
    {
        "titulo": "El Zorro y la Comadreja",
        "historia": "Un zorro y una comadreja discutieron sobre quién era más astuto. Decidieron competir en una serie de desafíos y al final se dieron cuenta de que ambos tenían habilidades únicas.",
        "moraleja": "La astucia y la inteligencia pueden ser valiosas en diferentes situaciones."
    },
    {
        "titulo": "El Lobo y el Oso",
        "historia": "Un lobo y un oso discutieron sobre quién era más fuerte. Decidieron competir en una prueba de fuerza y al final se dieron cuenta de que ambos tenían su propia fuerza única.",
        "moraleja": "La verdadera fuerza radica en saber usar nuestras habilidades de manera sabia y efectiva."
    },
    {
        "titulo": "El Zorro y el Erizo",
        "historia": "Un zorro y un erizo discutieron sobre quién era más astuto. Decidieron competir en una serie de pruebas y al final se dieron cuenta de que ambos tenían habilidades únicas.",
        "moraleja": "La astucia y la habilidad pueden superar la fuerza bruta."
    },
    {
        "titulo": "La Tortuga y la Liebre (versión alternativa)",
        "historia": "Una tortuga desafió a una liebre a una carrera. La liebre, burlona, aceptó pensando que ganaría fácilmente. Pero la tortuga avanzó lentamente pero sin parar, y al final ganó la carrera mientras la liebre se confiaba.",
        "moraleja": "La perseverancia y la constancia pueden superar la arrogancia y la falta de atención."
    },
    {
        "titulo": "El Elefante y el Ratón",
        "historia": "Un elefante y un ratón se encontraron en el bosque. El elefante se burló del ratón por ser pequeño. El ratón desafió al elefante a una prueba de fuerza. El elefante aceptó y el ratón se esforzó tanto que el elefante finalmente admitió su fuerza.",
        "moraleja": "No subestimes a los demás por su tamaño; la verdadera fuerza no siempre es evidente a simple vista."
    },
    {
        "titulo": "La Ardilla y el Pájaro Carpintero",
        "historia": "Una ardilla y un pájaro carpintero vivían en el mismo árbol. La ardilla se burlaba del pájaro carpintero por trabajar tanto picando madera. Pero cuando llegó el invierno y la ardilla no tenía suficiente alimento, el pájaro carpintero la ayudó compartiendo su comida.",
        "moraleja": "El trabajo duro y la preparación anticipada pueden ser más valiosos que la ociosidad y la burla."
    },
    {
        "titulo": "El Cuervo y el Pavo Real",
        "historia": "Un cuervo y un pavo real discutieron sobre quién era más bello. Decidieron hacer una competencia de belleza y al final se dieron cuenta de que ambos tenían su propia elegancia única.",
        "moraleja": "La belleza y el encanto son subjetivos y únicos para cada individuo."
    },
    {
        "titulo": "El Perro y el Gato",
        "historia": "Un perro y un gato vivían juntos en una granja. El perro trabajaba duro mientras el gato se relajaba. Cuando llegó un lobo amenazante, el perro defendió la granja mientras el gato se escondía. Al final, el perro recibió elogios mientras el gato se arrepintió de no haber ayudado.",
        "moraleja": "La dedicación y el esfuerzo valen más que la complacencia y la pereza."
    },
    {
        "titulo": "La Rana y el Escarabajo",
        "historia": "Una rana y un escarabajo vivían en el mismo estanque. La rana era rápida nadando mientras el escarabajo se movía lentamente. Pero cuando un depredador apareció, la rana no pudo escapar mientras que el escarabajo se escondió en el barro. Al final, el escarabajo sobrevivió y aprendió a valorar su propia habilidad.",
        "moraleja": "Cada uno tiene su propia habilidad única que puede ser valiosa en momentos diferentes."
    },
    {
        "titulo": "El Lobo y el Zorro",
        "historia": "Un lobo y un zorro se encontraron en el bosque. El zorro se jactaba de su astucia mientras el lobo presumía de su fuerza. Decidieron cazar juntos y al final, utilizando la astucia del zorro y la fuerza del lobo, capturaron una gran presa.",
        "moraleja": "La colaboración y el respeto mutuo pueden llevar al éxito incluso entre individuos diferentes."
    },
    {
        "titulo": "El León y el Elefante",
        "historia": "Un león y un elefante discutieron sobre quién era más poderoso. Decidieron competir en una serie de pruebas y al final se dieron cuenta de que ambos tenían su propia fuerza única.",
        "moraleja": "La verdadera fortaleza radica en reconocer y utilizar nuestras propias habilidades."
    },
    {
        "titulo": "La Cigüeña y el Pelícano",
        "historia": "Una cigüeña y un pelícano discutieron sobre quién podía llevar más en su pico. Decidieron competir y al final se dieron cuenta de que ambos tenían su propio estilo y habilidad únicos.",
        "moraleja": "Cada uno tiene su propio talento y habilidad que los hacen especiales."
    },
    {
        "titulo": "El Murciélago y la Mariposa",
        "historia": "Un murciélago y una mariposa discutieron sobre quién podía volar más alto. Decidieron volar juntos y al final se dieron cuenta de que ambos tenían su propio encanto y habilidad únicos.",
        "moraleja": "Cada uno tiene su propia capacidad y belleza que los hacen especiales."
    },
    {
        "titulo": "La Tortuga y el Caracol",
        "historia": "Una tortuga y un caracol discutieron sobre quién era más lento. Decidieron competir en una carrera y al final se dieron cuenta de que ambos tenían su propio ritmo y velocidad únicos.",
        "moraleja": "La comparación no siempre es justa; cada uno tiene su propio camino y tiempo."
    },
    {
        "titulo": "El Loro y el Canario",
        "historia": "Un loro y un canario vivían en la misma jaula. El loro se burlaba del canario por su tamaño pequeño. Pero cuando llegó un visitante que adoraba los cantos de pájaros, el canario cautivó con su melodía mientras el loro quedó en silencio.",
        "moraleja": "El valor no siempre se basa en el tamaño; todos tenemos cualidades únicas que nos hacen especiales."
    },
    {
        "titulo": "El Grillo y la Libélula",
        "historia": "Un grillo y una libélula discutieron sobre quién tenía el mejor vuelo. Decidieron volar juntos y al final se dieron cuenta de que ambos tenían su propio estilo y gracia únicos en el aire.",
        "moraleja": "Cada uno tiene su propia habilidad y belleza que deben ser valoradas."
    },
    {
        "titulo": "El Castor y la Nutria",
        "historia": "Un castor y una nutria discutieron sobre quién podía construir mejor. Decidieron construir presas juntos y al final se dieron cuenta de que ambos tenían su propio talento y habilidad única en la construcción.",
        "moraleja": "La colaboración y el reconocimiento de las habilidades de los demás pueden llevar a resultados exitosos."
    },
    {
        "titulo": "La Hormiga y el Saltamontes (versión alternativa)",
        "historia": "Una hormiga trabajaba duro todo el verano recolectando alimentos mientras un saltamontes cantaba y jugaba. Cuando llegó el invierno, la hormiga tenía suficiente comida mientras el saltamontes pasaba hambre.",
        "moraleja": "La preparación y el trabajo duro son importantes para enfrentar los tiempos difíciles."
    },
    {
        "titulo": "El Gorrión y el Jilguero",
        "historia": "Un gorrión y un jilguero discutieron sobre quién tenía el canto más melodioso. Decidieron cantar juntos y al final se dieron cuenta de que ambos tenían su propio tono y belleza única en su canto.",
        "moraleja": "La belleza y el talento son únicos para cada individuo."
    },
    {
        "titulo": "El Camaleón y el Sapo",
        "historia": "Un camaleón y un sapo discutieron sobre quién podía esconderse mejor. Decidieron jugar a las escondidas y al final se dieron cuenta de que ambos tenían su propia habilidad única para el camuflaje.",
        "moraleja": "Cada uno tiene su propia habilidad especial que puede ser útil en diferentes situaciones."
    },
    {
        "titulo": "El Zorro y el León",
        "historia": "Un zorro y un león discutieron sobre quién era más astuto. Decidieron competir en una serie de desafíos y al final se dieron cuenta de que ambos tenían su propio tipo de astucia.",
        "moraleja": "La inteligencia viene en muchas formas y no siempre es obvia."
    },
    {
        "titulo": "La Serpiente y la Tortuga",
        "historia": "Una serpiente y una tortuga discutieron sobre quién podía nadar mejor. Decidieron nadar juntas en un estanque y al final se dieron cuenta de que ambos tenían su propio estilo y habilidad única en el agua.",
        "moraleja": "Cada uno tiene sus propias fortalezas que deben ser valoradas."
    },
    {
        "titulo": "El Erizo y el Armadillo",
        "historia": "Un erizo y un armadillo se encontraron en el bosque. El erizo se burlaba de la coraza del armadillo, pensando que era demasiado pesada. Pero cuando llegó un depredador, el armadillo se protegió mientras el erizo buscaba refugio en una madriguera.",
        "moraleja": "Todos tenemos nuestras propias formas de protegernos; la fortaleza puede venir de diferentes maneras."
    },
    {
        "titulo": "La Mariposa y la Abeja",
        "historia": "Una mariposa y una abeja discutieron sobre quién era más importante para las flores. Decidieron trabajar juntas y al final se dieron cuenta de que ambos tenían un papel crucial en la polinización.",
        "moraleja": "Cada uno contribuye de manera única y esencial al ecosistema."
    },
    {
        "titulo": "El Canguro y el Koala",
        "historia": "Un canguro y un koala discutieron sobre quién podía saltar más alto. Decidieron competir en una serie de saltos y al final se dieron cuenta de que ambos tenían su propia habilidad única en el salto.",
        "moraleja": "Cada uno tiene sus propias habilidades que los hacen especiales."
    },
    {
        "titulo": "El Ciervo y el Conejo",
        "historia": "Un ciervo y un conejo discutieron sobre quién podía correr más rápido. Decidieron competir en una carrera y al final se dieron cuenta de que ambos tenían su propio ritmo y velocidad únicos.",
        "moraleja": "La velocidad no siempre es lo más importante; cada uno tiene su propio tiempo y lugar."
    },
    {
        "titulo": "El Águila y el Halcón",
        "historia": "Un águila y un halcón discutieron sobre quién tenía la mejor vista. Decidieron volar juntos y al final se dieron cuenta de que ambos tenían una visión aguda y habilidad única para cazar.",
        "moraleja": "Cada uno tiene sus propios talentos que deben ser apreciados."
    },
    {
        "titulo": "La Oruga y la Mariposa",
        "historia": "Una oruga y una mariposa discutieron sobre quién era más bella. La oruga admiraba la belleza de la mariposa pero la mariposa recordó el esfuerzo y transformación que pasó. A final ambos se dieron cuenta de que ambas eran seres bellos.",
        "moraleja": "Cada uno es hermoso a su manera."
    },
    {
        "titulo": "El Ciervo y el Lobo",
        "historia": "Un ciervo y un lobo se encontraron en el bosque. El lobo quería cazar al ciervo, pero el ciervo le explicó que ser amigos sería más ventajoso. Decidieron ayudarse y al final ambos compartieron la comida.",
        "moraleja": "La cooperación puede llevar a beneficios mutuos."
    },
    {
        "titulo": "El Pato y la Gallina",
        "historia": "Un pato y una gallina discutieron sobre cuál era más importante para la granja. Decidieron trabajar juntos y al final se dieron cuenta de que ambos tenían roles esenciales en la producción de alimentos.",
        "moraleja": "Todos tienen su importancia y valor en una comunidad."
    },
    {
        "titulo": "El Búho y el Cuervo",
        "historia": "Un búho y un cuervo discutieron sobre quién tenía la mejor visión nocturna. Decidieron cazar juntos durante la noche y al final se dieron cuenta de que ambos tenían habilidades únicas para cazar presas en la oscuridad.",
        "moraleja": "Cada uno tiene habilidades que los hacen únicos y valiosos."
    },
    {
        "titulo": "El Gato y el Ratón",
        "historia": "Un gato y un ratón vivían en la misma casa. El gato siempre perseguía al ratón, pero un día el ratón se encontró en peligro y el gato lo rescató. Desde entonces, fueron amigos inseparables.",
        "moraleja": "Incluso los enemigos pueden convertirse en amigos cuando encuentran un propósito común."
    },
    {
        "titulo": "El Cisne y el Pato",
        "historia": "Un cisne y un pato discutieron sobre quién era más elegante nadando. Decidieron nadar juntos en el lago y al final se dieron cuenta de que ambos tenían su propio estilo y gracia única en el agua.",
        "moraleja": "La elegancia y la gracia pueden manifestarse de diferentes maneras."
    },
    {
        "titulo": "El Escarabajo y la Hormiga",
        "historia": "Un escarabajo y una hormiga discutieron sobre quién era más trabajador. Decidieron recolectar comida juntos y al final se dieron cuenta de que ambos tenían una ética laboral fuerte y contribuían al bienestar de la comunidad.",
        "moraleja": "El trabajo duro y la cooperación son fundamentales para el éxito."
    },
    {
        "titulo": "El Loro y el Pavo Real",
        "historia": "Un loro y un pavo real discutieron sobre quién era más llamativo. Decidieron mostrar sus plumajes y al final se dieron cuenta de que ambos tenían belleza en sus propias formas.",
        "moraleja": "La belleza es subjetiva y cada uno tiene su propio encanto."
    },
    {
        "titulo": "El Caballo y el Burro",
        "historia": "Un caballo y un burro discutieron sobre quién era más fuerte. Decidieron tirar de una carreta juntos y al final se dieron cuenta de que ambos tenían su propia fuerza única que contribuía al trabajo.",
        "moraleja": "La fuerza no siempre se mide por tamaño; todos tienen capacidades únicas."
    },
    {
        "titulo": "El Gorrón y el Jilguero",
        "historia": "Un gorrón y un jilguero discutieron sobre quién tenía el canto más melodioso. Decidieron cantar juntos y al final se dieron cuenta de que ambos tenían su propio tono y belleza en su canto.",
        "moraleja": "La belleza y la armonía son únicas para cada individuo."
    },
    {
        "titulo": "El Zorro y el Armadillo",
        "historia": "Un zorro y un armadillo se encontraron en el bosque. El zorro bromeaba con el armadillo por su caparazón, pero cuando un depredador se acercó, el armadillo se protegió mientras el zorro tuvo que huir.",
        "moraleja": "Todos tenemos nuestras propias defensas; la sabiduría está en saber usarlas."
    },
    {
        "titulo": "El Lobo y el Zorro",
        "historia": "Un lobo y un zorro se encontraron en el bosque. El zorro se jactaba de su astucia mientras el lobo presumía de su fuerza. Decidieron cazar juntos y al final, usando la astucia del zorro y la fuerza del lobo, capturaron una gran presa.",
        "moraleja": "La colaboración y el respeto mutuo pueden llevar al éxito incluso entre individuos diferentes."
    },
    {
        "titulo": "El León y el Elefante",
        "historia": "Un león y un elefante discutieron sobre quién era más poderoso. Decidieron competir en una serie de pruebas y al final se dieron cuenta de que ambos tenían su propia fuerza única.",
        "moraleja": "La verdadera fortaleza radica en reconocer y utilizar nuestras propias habilidades."
    },
    {
        "titulo": "La Cigüeña y el Pelícano",
        "historia": "Una cigüeña y un pelícano discutieron sobre quién podía llevar más en su pico. Decidieron competir y al final se dieron cuenta de que ambos tenían su propio estilo y habilidad únicos.",
        "moraleja": "Cada uno tiene su propio talento y habilidad que los hacen especiales."
    },
    {
        "titulo": "El Murciélago y la Mariposa",
        "historia": "Un murciélago y una mariposa discutieron sobre quién podía volar más alto. Decidieron volar juntos y al final se dieron cuenta de que ambos tenían su propio encanto y habilidad únicos.",
        "moraleja": "Cada uno tiene su propia capacidad y belleza que los hacen especiales."
    },
    {
        "titulo": "El Cuervo y el Loro",
        "historia": "Un cuervo y un loro discutieron sobre quién tenía la mejor voz. Decidieron cantar y al final se dieron cuenta de que ambos tenían su propio estilo y melodía únicos.",
        "moraleja": "La belleza y el talento son subjetivos y únicos para cada individuo."
    },
    {
        "titulo": "El Oso y el Puma",
        "historia": "Un oso y un puma discutieron sobre quién era más ágil. Decidieron competir en una carrera de obstáculos y al final se dieron cuenta de que ambos tenían su propia agilidad única.",
        "moraleja": "La agilidad y la destreza pueden ser valiosas en diferentes situaciones."
    },
    {
        "titulo": "La Serpiente y el Camaleón",
        "historia": "Una serpiente y un camaleón discutieron sobre quién podía esconderse mejor. Decidieron jugar al escondite y al final se dieron cuenta de que ambos tenían su propio estilo y habilidad única para el camuflaje.",
        "moraleja": "Cada uno tiene sus propias habilidades que pueden ser útiles en momentos diferentes."
    },
    {
        "titulo": "El Canguro y el Zarigüeya",
        "historia": "Un canguro y una zarigüeya discutieron sobre quién podía saltar más alto. Decidieron competir en una serie de saltos y al final se dieron cuenta de que ambos tenían su propia habilidad única en el salto.",
        "moraleja": "Cada uno tiene habilidades únicas que los hacen especiales."
    },
    {
        "titulo": "El Caracol y la Liebre",
        "historia": "Un caracol y una liebre discutieron sobre quién podía correr más rápido. Decidieron competir en una carrera y al final se dieron cuenta de que ambos tenían su propio ritmo y velocidad únicos.",
        "moraleja": "La velocidad no siempre es lo más importante; cada uno tiene su propio tiempo y ritmo."
    },
    {
        "titulo": "La Abeja y el Escarabajo",
        "historia": "Una abeja y un escarabajo discutieron sobre quién era más trabajador. Decidieron recolectar polen juntos y al final se dieron cuenta de que ambos tenían una ética de trabajo fuerte y contribuían a la comunidad de diferentes maneras.",
        "moraleja": "El trabajo duro y la cooperación son fundamentales para el éxito."
    },
    {
        "titulo": "El Gato y la Rata",
        "historia": "Un gato y una rata vivían en la misma casa. El gato siempre perseguía a la rata, pero un día la rata se encontró en peligro y el gato la rescató. Desde entonces, fueron amigos inseparables.",
        "moraleja": "Incluso los enemigos pueden convertirse en amigos cuando encuentran un propósito común."
    },
    {
        "titulo": "El Burro y el Caballo",
        "historia": "Un burro y un caballo discutieron sobre quién era más fuerte. Decidieron tirar de una carreta juntos y al final se dieron cuenta de que ambos tenían su propia fuerza única que contribuía al trabajo.",
        "moraleja": "La fuerza no siempre se mide por tamaño; todos tienen capacidades únicas."
    },
    {
        "titulo": "El Gorrión y el Jilguero",
        "historia": "Un gorrión y un jilguero discutieron sobre quién tenía el canto más melodioso. Decidieron cantar juntos y al final se dieron cuenta de que ambos tenían su propio tono y belleza en su canto.",
        "moraleja": "La belleza y la armonía son únicas para cada individuo."
    },
    {
        "titulo": "El Zorro y el Armadillo",
        "historia": "Un zorro y un armadillo se encontraron en el bosque. El zorro bromeaba con el armadillo por su caparazón, pensando que era demasiado pesado. Pero cuando un depredador se acercó, el armadillo se protegió mientras el zorro tuvo que huir.",
        "moraleja": "Todos tenemos nuestras propias defensas; la sabiduría está en saber usarlas."
    },
    {
        "titulo": "El Topo y el Pájaro Carpintero",
        "historia": "Un topo y un pájaro carpintero vivían en el mismo árbol. El topo cavaba túneles mientras el pájaro carpintero picaba madera. Al principio se burlaban el uno del otro, pero cuando una tormenta derribó el árbol, ambos se ayudaron mutuamente para encontrar refugio.",
        "moraleja": "La cooperación puede surgir incluso entre aquellos con habilidades diferentes."
    },
    {
        "titulo": "La Luciérnaga y la Estrella",
        "historia": "Una luciérnaga y una estrella discutieron sobre quién iluminaba más en la oscuridad. Decidieron brillar juntas y al final se dieron cuenta de que ambos tenían su propio brillo único y especial.",
        "moraleja": "Cada uno tiene su propia luz que puede ser valiosa en diferentes contextos."
    },
    {
        "titulo": "El Perro y el Lobo",
        "historia": "Un perro y un lobo se encontraron en el bosque. El perro vivía con los humanos y el lobo era salvaje. Al principio desconfiaban el uno del otro, pero cuando llegó un cazador, el perro guió al lobo hacia un lugar seguro. Desde entonces, se volvieron aliados.",
        "moraleja": "La amistad puede superar las diferencias y los prejuicios."
    },
    {
        "titulo": "La Hormiga y el Saltamontes",
        "historia": "Una hormiga trabajaba duro todo el verano recolectando alimentos mientras un saltamontes cantaba y jugaba. Cuando llegó el invierno, la hormiga tenía suficiente comida mientras el saltamontes pasaba hambre.",
        "moraleja": "La preparación y el trabajo duro son importantes para enfrentar los tiempos difíciles."
    },
    {
        "titulo": "El Ruiseñor y la Serpiente",
        "historia": "Un ruiseñor y una serpiente discutieron sobre quién era más rápido. Decidieron tener una carrera y al final se dieron cuenta de que ambos tenían su propia velocidad única y habilidad para moverse.",
        "moraleja": "Cada uno tiene sus propias cualidades que pueden ser valiosas en diferentes situaciones."
    },
    {
        "titulo": "El Búho y el Zorro",
        "historia": "Un búho y un zorro discutieron sobre quién era más sabio. Decidieron resolver acertijos juntos y al final se dieron cuenta de que ambos tenían su propia perspicacia y conocimiento único.",
        "moraleja": "La sabiduría viene en muchas formas y no siempre es obvia."
    },
    {
        "titulo": "El Cuervo y el Búho",
        "historia": "Un cuervo y un búho discutieron sobre quién tenía la mejor visión nocturna. Decidieron cazar juntos durante la noche y al final se dieron cuenta de que ambos tenían habilidades únicas para cazar presas en la oscuridad.",
        "moraleja": "Cada uno tiene habilidades especiales que los hacen valiosos en diferentes situaciones."
    },
    {
        "titulo": "El Lobo y el Puercoespín",
        "historia": "Un lobo y un puercoespín se encontraron en el bosque. El lobo quiso cazar al puercoespín, pero el puercoespín se defendió con sus púas. El lobo aprendió a respetar al puercoespín y ambos encontraron una manera de coexistir en el bosque.",
        "moraleja": "El respeto mutuo y la adaptabilidad son clave para la convivencia pacífica."
    },
    {
        "titulo": "La Liebre y el Zorro",
        "historia": "Una liebre y un zorro discutieron sobre quién era más astuto. Decidieron jugar a las escondidas en el bosque y al final se dieron cuenta de que ambos tenían habilidades únicas para el sigilo y la observación.",
        "moraleja": "La astucia y la inteligencia pueden manifestarse de diferentes maneras."
    },
    {
        "titulo": "El Gorrón y el Pavo Real",
        "historia": "Un gorrón y un pavo real discutieron sobre quién tenía el canto más melodioso. Decidieron cantar juntos y al final se dieron cuenta de que ambos tenían su propio tono y belleza en su canto.",
        "moraleja": "La belleza y la armonía son únicas para cada individuo."
    },
    {
        "titulo": "La Ardilla y el Mapache",
        "historia": "Una ardilla y un mapache encontraron una gran cantidad de nueces en el bosque. Discutieron sobre quién se llevaría más nueces y decidieron compartirlas. Al final, descubrieron que trabajar juntos les permitió recolectar aún más nueces y compartirlas con otros animales del bosque.",
        "moraleja": "La cooperación y el trabajo en equipo pueden llevar a resultados beneficiosos para todos."
    },
    {
        "titulo": "El Pato y el Ganso",
        "historia": "Un pato y un ganso discutieron sobre quién era mejor nadador. Decidieron competir en una carrera de natación y al final se dieron cuenta de que ambos tenían su propio estilo y habilidad únicos en el agua.",
        "moraleja": "Cada uno tiene talentos únicos que los hacen especiales."
    },
    {
        "titulo": "El Caracol y el Ciervo",
        "historia": "Un caracol y un ciervo discutieron sobre quién era más rápido. Decidieron competir en una carrera y al final se dieron cuenta de que ambos tenían su propio ritmo y velocidad únicos.",
        "moraleja": "La velocidad no siempre es lo más importante; cada uno tiene su propio tiempo y ritmo."
    },
    {
        "titulo": "El Oso y el Gorila",
        "historia": "Un oso y un gorila se encontraron en el bosque. El oso se burlaba de la fuerza del gorila, pero cuando llegó un cazador, el gorila utilizó su inteligencia para alejar al cazador mientras el oso se escondía. Desde entonces, aprendieron a respetar y ayudarse mutuamente.",
        "moraleja": "La fuerza y la inteligencia son cualidades valiosas en diferentes situaciones."
    },
    {
        "titulo": "La Hormiga y el Saltamontes (versión alternativa)",
        "historia": "Una hormiga trabajaba arduamente recolectando alimentos mientras un saltamontes cantaba y jugaba. Cuando llegó el invierno, la hormiga tenía suficiente comida mientras el saltamontes pasaba hambre. La hormiga compartió su comida con el saltamontes, enseñándole la importancia del trabajo y la previsión.",
        "moraleja": "La previsión y la preparación son claves para enfrentar los desafíos."
    },
    {
        "titulo": "El Búho y el Zorro",
        "historia": "Un búho y un zorro discutieron sobre quién era más sabio. Decidieron resolver acertijos juntos y al final se dieron cuenta de que ambos tenían su propia perspicacia y conocimiento único.",
        "moraleja": "La sabiduría viene en muchas formas y no siempre es obvia."
    },
    {
        "titulo": "El Elefante y la Cebra",
        "historia": "Un elefante y una cebra discutieron sobre quién era más rápido. Decidieron competir en una carrera y al final se dieron cuenta de que ambos tenían habilidades únicas: el elefante era rápido a pesar de su tamaño y la cebra era ágil y veloz.",
        "moraleja": "Cada uno tiene habilidades especiales que pueden sorprender a los demás."
    },
    {
        "titulo": "El Camello y el Dromedario",
        "historia": "Un camello y un dromedario discutieron sobre quién podía cargar más peso. Decidieron competir en llevar cargas pesadas y al final se dieron cuenta de que ambos tenían su propia resistencia y capacidad única para soportar peso.",
        "moraleja": "La fortaleza y la resistencia pueden variar entre individuos de la misma especie."
    },
    {
        "titulo": "El Zorro y el Conejo",
        "historia": "Un zorro y un conejo discutieron sobre quién era más ágil. Decidieron competir en una carrera de agilidad y al final se dieron cuenta de que ambos tenían su propio estilo y habilidad únicos para moverse rápidamente.",
        "moraleja": "La agilidad y la rapidez pueden manifestarse de diferentes maneras."
    },
    {
        "titulo": "La Mariposa y el Escarabajo",
        "historia": "Una mariposa y un escarabajo discutieron sobre quién tenía el vuelo más hermoso. Decidieron volar juntos y al final se dieron cuenta de que ambos tenían su propia gracia y belleza única en el vuelo.",
        "moraleja": "La belleza y la elegancia son subjetivas y se manifiestan de diversas maneras."
    },
    {
        "titulo": "El León y la Gacela",
        "historia": "Un león y una gacela discutieron sobre quién era más fuerte. Decidieron competir en una prueba de fuerza y resistencia, y al final se dieron cuenta de que ambos tenían su propia fuerza única que era crucial para su supervivencia.",
        "moraleja": "La fuerza y la resistencia son vitales para la supervivencia en la naturaleza."
    },
    {
        "titulo": "El Pájaro Carpintero y el Cuervo",
        "historia": "Un pájaro carpintero y un cuervo discutieron sobre quién tenía el mejor canto. Decidieron cantar juntos y al final se dieron cuenta de que ambos tenían su propio tono y melodía únicos.",
        "moraleja": "La música y el talento son expresiones individuales que deben ser valoradas."
    },
    {
        "titulo": "El Gato y el Perro",
        "historia": "Un gato y un perro vivían en la misma casa y discutían todo el tiempo sobre quién era mejor. Decidieron trabajar juntos para proteger la casa de los intrusos, y al final se dieron cuenta de que ambos tenían habilidades complementarias que ayudaban a mantener la seguridad del hogar.",
        "moraleja": "La colaboración puede superar las rivalidades y fortalecer las relaciones."
    },
    {
        "titulo": "El Búho y la Lechuza",
        "historia": "Un búho y una lechuza discutieron sobre quién era más sabio. Decidieron resolver acertijos y enigmas juntos, pero ninguno pudo resolverlos. Finalmente, se dieron cuenta de que cada uno tenía conocimientos diferentes y complementarios.",
        "moraleja": "La sabiduría se adquiere de diferentes maneras y experiencias."
    },
    {
        "titulo": "El Erizo y el Lobo",
        "historia": "Un erizo y un lobo se encontraron en el bosque. El lobo se burlaba de las espinas del erizo, pero cuando llegó un depredador, el erizo se enrolló en una bola protectora mientras el lobo buscaba refugio en su madriguera.",
        "moraleja": "Todos tenemos nuestras propias defensas; la sabiduría está en saber usarlas."
    },
    {
        "titulo": "La Tortuga y el Sapo",
        "historia": "Una tortuga y un sapo discutieron sobre quién era más resistente. Decidieron competir en una prueba de resistencia y al final se dieron cuenta de que ambos tenían su propia capacidad única para adaptarse y sobrevivir en diferentes entornos.",
        "moraleja": "La adaptabilidad y la resistencia son cualidades importantes en la naturaleza."
    }
]


console.log(fabulas.length)
