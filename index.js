
var variables = {    
      markerArray: [],  
      renderers: [],
      strokeColors: ["#5cb85c","#5c84b8","#eb6b34","#7a34eb","#eb3493","#77fc03","#03fcec","#69430a"],
      flag: "am",
      amroutes: [   
       [21,22,23,20,24,58,60,59,92,103,83,84,85],
       [1,98,99,100,101,4,2,3,66,5,102,68,67],
       [63,64,65,69,88,86,87,89,90,91,25,26,96],
       [34,27,28,29,30,31,33,32,71,70],
       [11,10,9,8,12,7,13,14,15,16,17,18,19,6,95,97],
       [52,57,54,53,56,55,61,62,93,94],
       [47,45,44,43,46,39,40,42,41,49,38,35,36,37,50,51],
       [74,75,73,76,72,77,78,79,80,48,81,82],
      ],
      pmroutes: [
        [2,1,98,100,71,73,72,8],
        [32,36,37,40,39,41,43,42,44,33,35,34],
        [56,53,54,55,48,82,84,83,85,86,87,91,90,88,57,89],
        [93,9,108,102,103,107,106,104,105,62,61,66,63,67,64,65,68,69,70],
        [92,95,94,22,21,12,11,10,75,76,77,115,111,112,113,6,3,4,5],
        [74,7,110,114,116,117,13,19,20,14,18,16,15,17],
        [23,24,109,96,97,99,101,25,26,28,27,30,29,31,78,79],
        [45,46,47,49,50,52,51,58,59,60,81,80,38],
      ],

      stops: [],
 
      amstops: [
      {
              location: "14.6792198570902,-90.5518580300908",
              stopover: true,
              label: "9 calle A 5-90 zona 11 de Mixco Residenciales Minerva sur casa 35. (parada garita)"
            },            {
              location: "14.6628744214531,-90.5372999737286",
              stopover: true,
              label: "Boulevard El Naranjo condominio Santa Gabriela casa E-19 zona 4 Mixco"
            },            {
              location: "14.6640077936524,-90.5401679154443",
              stopover: true,
              label: "Condado Naranjo, Condominio Santa Helena casa L-7 zona 4 Mixco"
            },            {
              location: "14.6480467418409,-90.5533876665564",
              stopover: true,
              label: "Boulevard sur 1-25 condominio el Pedregal del naranjo casa 9 zona 4 de Mixco"
            },            {
              location: "14.6396083269583,-90.5504034871847",
              stopover: true,
              label: "31 ave A 14-63 zona 7 Ciudad de Plata II"
            },            {
              location: "14.6186436892593,-90.5568727759743",
              stopover: true,
              label: "9 calle 22-43 zona 11 Residenciales San Jorge codigo de acceso 285"
            },            {
              location: "14.6390421778957,-90.6012761832756",
              stopover: true,
              label: "18 calle 14-20 zona 7 de Mixco Villas Luzeiro"
            },            {
              location: "14.6481097997177,-90.6071585528541",
              stopover: true,
              label: "20 ave 11-15 zona 7 Cañadas del Encinal casa 25"
            },            {
              location: "14.6475079675384,-90.6063697368109",
              stopover: true,
              label: "Condominio Luces del Encinal casa Robles 22 zona 7 de Mixco, Codigo de ingreso714 o 715"
            },            {
              location: "14.6510028321087,-90.6084344631961",
              stopover: true,
              label: "6a Calle 21-09 zona 7 de mixco Encinos 3 Casa E12"
            },            {
              location: "14.6540133901373,-90.6156579088499",
              stopover: true,
              label: "lote 22 colonia los pinos zona 7 de Mixco"
            },            {
              location: "14.6365466590354,-90.6002186891025",
              stopover: true,
              label: "Calle de los Pinios 12-74 Condominio Privadas de Rosario casa 1 zona 7 de Mixco"
            },            {
              location: "14.6343061443945,-90.5914912477159",
              stopover: true,
              label: "Colonia Molino de las Flores"
            },            {
              location: "14.6332406537761,-90.591541794867",
              stopover: true,
              label: "48 ave A 2-60 zona 2 Mixco Molino de las Flores I"
            },            {
              location: "14.6279380452036,-90.5771482318089",
              stopover: true,
              label: "Colonia Santa Mónica"
            },            {
              location: "14.6279846906293,-90.5657409964837",
              stopover: true,
              label: "2 calle A 34-25 zona 11 Utatlan II COD 1396"
            },            {
              location: "14.6272929195684,-90.5668316695182",
              stopover: true,
              label: "4ta calle 36-70 zona 11 Jardines de Utatlan II"
            },            {
              location: "14.6257739495478,-90.5638634451763",
              stopover: true,
              label: "5 calle 33-79 zona 11 Utatlan 2"
            },            {
              location: "14.623457534177,-90.5628340033903",
              stopover: true,
              label: "30 ave 6-90 zona 11 Edificio Las Gemas"
            },            {
              location: "14.5806754513423,-90.5094429420748",
              stopover: true,
              label: "14 ave 9-00 zona 14 , Edificio Segheria"
            },            {
              location: "14.6050157815919,-90.4998398176782",
              stopover: true,
              label: "14 ave A 3-30 colonia Tecun Uman zona 15 Edificio parque 15"
            },            {
              location: "14.5958608395957,-90.5026852003118",
              stopover: true,
              label: "14 ave 13-21 zona 10 Oakland 1"
            },            {
              location: "14.5918114915334,-90.5042938323936",
              stopover: true,
              label: "15 ave 15-42 zona 10"
            },            {
              location: "14.6033194911835,-90.5310372357405",
              stopover: true,
              label: "4ta ave 2-36 zona 13 Pamplona"
            },            {
              location: "14.5952437270035,-90.5610392395738",
              stopover: true,
              label: "8 ave 32-10 zona 11, Las Charcas"
            },            {
              location: "14.5946783730852,-90.5622079003238",
              stopover: true,
              label: "33 calle 8-60 zona 11 Villas de las Charcas"
            },            {
              location: "14.5530167241234,-90.5926712467432",
              stopover: true,
              label: "Km 14.5 casa 120 sector 5 zona Condominio Hacienda de las Flores Villa nueva"
            },            {
              location: "14.5387039266768,-90.6038663471767",
              stopover: true,
              label: "7 calle 2-42 altos de Barcenas, y solo 1 dia se queda en Altos de Verona apto 305 Villa Nueva en ruta pm"
            },            {
              location: "14.5376259763638,-90.5785756299066",
              stopover: true,
              label: "Condado catalina sector labroz casa 11 zona 6 villa nueva"
            },            {
              location: "14.5354536568189,-90.5784254046254",
              stopover: true,
              label: "Condado Catalina, Condominio Navia"
            },            {
              location: "14.5371477713042,-90.5740460046254",
              stopover: true,
              label: "Manzana Y casa # 22 Llano alto 6 zona 6 Villa Nueva"
            },            {
              location: "14.5409248155968,-90.5789835622959",
              stopover: true,
              label: "H9 llano Alto 1 zona 6 Vila nueva"
            },            {
              location: "14.5379880418935,-90.577372562296",
              stopover: true,
              label: "Llano alto III zona 6 de Villa Nueva"
            },            {
              location: "14.5530924880022,-90.5781210537272",
              stopover: true,
              label: "4 ave B 3-12 sector 5 Residencial Valles de María zona 2 Villa Nueva"
            },            {
              location: "14.6104041677879,-90.5847792334595",
              stopover: true,
              label: "1era calle 11-50 Residenciales Santa Ana casa 14"
            },            {
              location: "14.6055647142931,-90.5820538422777",
              stopover: true,
              label: "12 AVENIDA A, 2-07, SECTOR B1, SAN CRISTOBAL, ZONA 8 DE MIXCO"
            },            {
              location: "14.6044620549081,-90.5836369711856",
              stopover: true,
              label: "14 ave 1-97 sector B 1 San Cristobal por farmacia Batres o Electra"
            },            {
              location: "14.609309903934,-90.5874644046243",
              stopover: true,
              label: "9 ave y 2da calle 9-09 , Condominio Las Orquideas, San Cristobal, Zona 8 de Mixco"
            },            {
              location: "14.6024714851656,-90.604028798346",
              stopover: true,
              label: "5 ave 0-65 camino al campanero, condominio fresnos 2 casa 41"
            },            {
              location: "14.6132149401068,-90.6010616589346",
              stopover: true,
              label: "Mix San Cristóbal"
            },            {
              location: "14.6100658231644,-90.5969312334595",
              stopover: true,
              label: "7AV. 3-54 Z. 8 MIX CONDOMINIO VISTA REAL 2, SN CRISTOBAL / atrás Sankirs Mall"
            },            {
              location: "14.6053558394727,-90.5984330199654",
              stopover: true,
              label: "Bosques de San Marino zona 8 Mixco Residenciales Niza"
            },            {
              location: "14.6032335317507,-90.5947329586841",
              stopover: true,
              label: "8 calle 8-30 zona 8 Mixco Condominio El Pinar"
            },            {
              location: "14.5961694918284,-90.5954123327295",
              stopover: true,
              label: "8 ave final 4-29 zona 8 Mixco casa C2 Residenciales Santa Barbara"
            },            {
              location: "14.5971053111215,-90.5919288812985",
              stopover: true,
              label: "4 calle 0-44 zona 8 Mixco Condominio Santa Barbara"
            },            {
              location: "14.6012626682276,-90.5993946046244",
              stopover: true,
              label: "8 calle D 5-66 zona 8 -mixco Condominio El Escalon casa # 47 por Iglesia Verbo"
            },            {
              location: "14.5986504749497,-90.5928916247793",
              stopover: true,
              label: "9na calle A 9-34 zona 8 condominio Jardines de San Cristobal sector 5 casa # 23"
            },            {
              location: "14.5814069691818,-90.5938104046247",
              stopover: true,
              label: "3era calle Condominio Royal Hill 2 casa 17 zona 8 de Mixco Sn Cristobal"
            },            {
              location: "14.6080811218665,-90.5895394622949",
              stopover: true,
              label: "11AVENIDA 4-30 ZONA 8 Mixco La Arboleda; Palos Verdes 2, casa # 6"
            },            {
              location: "14.6038838681016,-90.5858950046243",
              stopover: true,
              label: "12 calle 5-60 Sc. B3 Z.8 Mixco Condominio Las Ceibas , San Cristobal"
            },            {
              location: "14.6002761211364,-90.5848809334597",
              stopover: true,
              label: "6ta calle 13-35 A Residenciales las 3 ceibas San Cristobal"
            },            {
              location: "14.5492683707235,-90.5480876046252",
              stopover: true,
              label: "Condominio Nimajuyu zona 21"
            },            {
              location: "14.5813938327349,-90.5505249200309",
              stopover: true,
              label: "14 ave 39-48 zona 12 Colonia Villa Sol"
            },            {
              location: "14.5818470859112,-90.5485165046247",
              stopover: true,
              label: "18 ave 37-00 zona 12 Colndominio Villa Sol apto 724"
            },            {
              location: "14.5840474027641,-90.5469252757894",
              stopover: true,
              label: "41 calle 12-59 zona 12 Residenciales Villa Sol"
            },            {
              location: "14.5793457371838,-90.552632076686",
              stopover: true,
              label: "42 calle 12-42 zona 12 Villa sol"
            },            {
              location: "14.5812799020799,-90.5478942881779",
              stopover: true,
              label: "18 avenida 37-24 jardines de Villa Sol Casa 21 Zona 12"
            },            {
              location: "14.6041850346901,-90.5362230098029",
              stopover: true,
              label: "17 ave 11-59 zona 12 Reformita"
            },            {
              location: "14.6104561178336,-90.5380347266814",
              stopover: true,
              label: "5 calle 5-23 zona 12"
            },            {
              location: "14.6091223717348,-90.5353855927239",
              stopover: true,
              label: "11 ave 4-51 zona 12"
            },            {
              location: "14.589878428436,-90.5486620451835",
              stopover: true,
              label: "31 calle 15-22 zona 12"
            },            {
              location: "14.5907649823894,-90.5486851501794",
              stopover: true,
              label: "30 calle 15-70 zona 12 Condominio Quebrada de las Rosas casa 15"
            },            {
              location: "14.6516074858497,-90.4550545757883",
              stopover: true,
              label: "1era calle 20-10 zona 17 casa A24, condominio casa Florentina Premier"
            },            {
              location: "14.6543511993854,-90.5014517307428",
              stopover: true,
              label: "14 ave 11-16 zona 2 Ciudad Nueva"
            },            {
              location: "14.6338087822806,-90.5210083022388",
              stopover: true,
              label: "15 calle A 0-39 zona 1 AM"
            },            {
              location: "14.643395869842,-90.5522763618205",
              stopover: true,
              label: "18 Calle 39-61 Zona 7 Colonia Villa Linda II Sector II"
            },            {
              location: "14.629136274014,-90.551437634028",
              stopover: true,
              label: "5 calle B 26-64 zona 7 Kaminal Juyu1"
            },            {
              location: "14.6318284751678,-90.5537999403008",
              stopover: true,
              label: "8 calle 30-50 zona 7 Jardines de Tikal 1, Ingreso por carril auxiliar del periferico por garita 7a Calle"
            },            {
              location: "14.6207159393088,-90.5373263073401",
              stopover: true,
              label: "5a. Avenida 9-01 apto A zona 7 Colonia Landívar"
            },            {
              location: "14.583869379573,-90.579478992524",
              stopover: true,
              label: "8 Ave 13-41 zona 8 Mixco Condominio Jazmines casa # 10 Praderas de las Flores"
            },            {
              location: "14.5878982654916,-90.5792131137267",
              stopover: true,
              label: "6ta calle A 6-96 Praderas de las Flores"
            },            {
              location: "14.5897210733664,-90.5939686207479",
              stopover: true,
              label: "3 era calle 15-87 Pinares de San Cristobal zona 8 de Mixco"
            },            {
              location: "14.5949671674144,-90.5985208102038",
              stopover: true,
              label: "Boulevard Final de Pinares 9-71 Condominio Prados de San Cristobal casa H-20"
            },            {
              location: "14.5958556906691,-90.6010842429696",
              stopover: true,
              label: "Boulevard Final de Pinares 9-71 Condominio Prados de San Cristobal casa D-C 3"
            },            {
              location: "14.594692857479,-90.5990692369293",
              stopover: true,
              label: "Condominio Prados de San Cristobal (redondel)"
            },            {
              location: "14.5926681218314,-90.5974061880158",
              stopover: true,
              label: "2 Calle A 10-06 Residenciales Pinares de San Cristobal zona 8 de Mixco Cod 0828"
            },            {
              location: "14.5883356161714,-90.5916149301888",
              stopover: true,
              label: "Condominio Hacienda de Vista Hermosa, San Cristobal"
            },            {
              location: "14.5883954242716,-90.5963704212047",
              stopover: true,
              label: "Condominio Mirador de San Cristobal Sector 1, Zona 8 de Mixco / por la tarde dejarlo en Kids Corner"
            },            {
              location: "14.5887645482551,-90.5972756172208",
              stopover: true,
              label: "Condominio El Mirador I casa 21 B"
            },            {
              location: "14.5684468473321,-90.5960635039596",
              stopover: true,
              label: "Residencial Terraza 1 (garita )"
            },            {
              location: "14.586022523167,-90.591898820083",
              stopover: true,
              label: "19 ave 5-63 zona 8 Mixco Colonia Vista al Valle Oriente (enfrente a la torre de pinares)"
            },            {
              location: "14.5829147027117,-90.5876575046247",
              stopover: true,
              label: "7 calle 19-69 San Cristobal II sector B-3 Residencial La Isla"
            },            {
              location: "14.5832425706214,-90.5663218145808",
              stopover: true,
              label: "1 ave 40-96 zona 11 Monte María 2 Villa Nueva 5:00 AM FRENTE A RESIDENCIAL 5:30"
            },            {
              location: "14.576435005722,-90.5688631462087",
              stopover: true,
              label: "2 ave 45-45 zona 12 Monte Maria 1"
            },            {
              location: "14.5758863393788,-90.5660655537329",
              stopover: true,
              label: "4 AVE 46-60 zona 12 Monte María I"
            },            {
              location: "14.6137088603644,-90.546484052912",
              stopover: true,
              label: "8 va calle A 10-33 zona 11 colonia Roosevelt"
            },            {
              location: "14.6119817582542,-90.5495459347128",
              stopover: true,
              label: "11 calle A 12-54 zona 11 colonia Roosevelt"
            },            {
              location: "14.6176724630251,-90.5459744939964",
              stopover: true,
              label: "4 calle A 12-25 zona 11 Colonia Roosevlet"
            },            {
              location: "14.6188263842053,-90.5497674437323",
              stopover: true,
              label: "17 ave 6-23 zona 11 Colonia Miraflores norte"
            },            {
              location: "14.6106822119503,-90.5527859971816",
              stopover: true,
              label: "14 Av.14-05 Zona 11 Colonia Loma Linda"
            },            {
              location: "14.6099719911399,-90.5531807628013",
              stopover: true,
              label: "14 Av.15-71 Zona 11 Colonia Loma Linda"
            },            {
              location: "14.6029415806273,-90.5502410230698",
              stopover: true,
              label: "7 ave 20-09 zona 11 Mariscal Edificio Torre once"
            },            {
              location: "14.6021648681842,-90.5562765622949",
              stopover: true,
              label: "24 calle 11-30 zona 11 Residenciales La Ceiba casa 22"
            },            {
              location: "14.5995031229673,-90.5631731841784",
              stopover: true,
              label: "16 ave A Diagonal 17 30-26 zona 11 garita de condominio las Araucarias de las Charcas II"
            },            {
              location: "14.5974810383644,-90.5627559334597",
              stopover: true,
              label: "Condmominio Santa María de las Charcas, Apto 301 torre 3"
            },            {
              location: "14.5978701858971,-90.5621266334597",
              stopover: true,
              label: "10 ave 31-20 zona Condominio Santa María de las Charcas, Apto 411"
            },            {
              location: "14.5867834266195,-90.5673491355895",
              stopover: true,
              label: "Cañadas de Mariscal Zona 11"
            },            {
              location: "14.6452027636356,-90.5650151940044",
              stopover: true,
              label: "16 ave 3-85 Apartamento 3 Residenciales Valle del sol Zona 4 Mixco"
            },            {
              location: "14.6427310547757,-90.5628401110082",
              stopover: true,
              label: "Lote 6 Manzana J Zona 4 de Mixco Villas Del Rosario"
            },            {
              location: "14.6431787583419,-90.5606445589296",
              stopover: true,
              label: "20 ave 3-30 Condominio Cañadas del Naranjo casa F1 zona 4 de Mixco"
            },            {
              location: "14.6437183138455,-90.5611714182722",
              stopover: true,
              label: "Cañadas del Naranjon casa D16 codigo 4016 / 4116"
            },            {
              location: "14.6333340817616,-90.564174991026",
              stopover: true,
              label: "calzada Doroteo Guamuch 35-14 Residenciales Las Dalias"
            },            {
              location: "14.5965447989648,-90.5574540645011",
              stopover: true,
              label: "30 calle A 7-01 zona 11 Granai I codigo 5701"
            }
        ],
        pmstops: [{
              location: "14.6002573082992,-90.558363039494",
              stopover: true,
              label: "9 ave 27-61 zona 11 Colonia Grani II"
            },            {
              location: "14.5993223063387,-90.5581046782342",
              stopover: true,
              label: "27 calle 12-46 zona 11 Granai II"
            },            {
              location: "14.6628744214531,-90.5372999737286",
              stopover: true,
              label: "Boulevard El Naranjo condominio Santa Gabriela casa E-19 zona 4 Mixco"
            },            {
              location: "14.6640077936524,-90.5401679154443",
              stopover: true,
              label: "Condado Naranjo, Condominio Santa Helena casa L-7 zona 4 Mixco"
            },            {
              location: "14.6792198570902,-90.5518580300908",
              stopover: true,
              label: "9 calle A 5-90 zona 11 de Mixco Residenciales Minerva sur casa 35. (parada garita)"
            },            {
              location: "14.6480467418409,-90.5533876665564",
              stopover: true,
              label: "Boulevard sur 1-25 condominio el Pedregal del naranjo casa 9 zona 4 de Mixco"
            },            {
              location: "14.6396083269583,-90.5504034871847",
              stopover: true,
              label: "31 ave A 14-63 zona 7 Ciudad de Plata II"
            },            {
              location: "14.6344830241817,-90.5266649918617",
              stopover: true,
              label: "15 calle C 5-25 zona 3"
            },            {
              location: "14.623457534177,-90.5628340033903",
              stopover: true,
              label: "30 ave 6-90 zona 11 Edificio Las Gemas"
            },            {
              location: "14.6257739495478,-90.5638634451763",
              stopover: true,
              label: "5 calle 33-79 zona 11 Utatlan 2"
            },            {
              location: "14.6272929195684,-90.5668316695182",
              stopover: true,
              label: "4ta calle 36-70 zona 11 Jardines de Utatlan II"
            },            {
              location: "14.6279846906293,-90.5657409964837",
              stopover: true,
              label: "2 calle A 34-25 zona 11 Utatlan II COD 1396"
            },            {
              location: "14.6390421778957,-90.6012761832756",
              stopover: true,
              label: "18 calle 14-20 zona 7 de Mixco Villas Luzeiro"
            },            {
              location: "14.6365466590354,-90.6002186891025",
              stopover: true,
              label: "Calle de los Pinios 12-74 Condominio Privadas de Rosario casa 1 zona 7 de Mixco"
            },            {
              location: "14.6481097997177,-90.6071585528541",
              stopover: true,
              label: "20 ave 11-15 zona 7 Cañadas del Encinal casa 25"
            },            {
              location: "14.6475079675384,-90.6063697368109",
              stopover: true,
              label: "Condominio Luces del Encinal casa Robles 22 zona 7 de Mixco, Codigo de ingreso714 o 715"
            },            {
              location: "14.6510028321087,-90.6084344631961",
              stopover: true,
              label: "6a Calle 21-09 zona 7 de mixco Encinos 3 Casa E12"
            },            {
              location: "14.6540133901373,-90.6156579088499",
              stopover: true,
              label: "lote 22 colonia los pinos zona 7 de Mixco"
            },            {
              location: "14.6343061443945,-90.5914912477159",
              stopover: true,
              label: "Colonia Molino de las Flores"
            },            {
              location: "14.6332406537761,-90.591541794867",
              stopover: true,
              label: "48 ave A 2-60 zona 2 Mixco Molino de las Flores I"
            },            {
              location: "14.6336226125644,-90.5735371353788",
              stopover: true,
              label: "14 ave 0-30 zona 2 Urbanización Gonzalez (depues de cuchilla de la entrada de Santa Rita)"
            },            {
              location: "14.6279380452036,-90.5771482318089",
              stopover: true,
              label: "Colonia Santa Mónica"
            },            {
              location: "14.5946783730852,-90.5622079003238",
              stopover: true,
              label: "33 calle 8-60 zona 11 Villas de las Charcas"
            },            {
              location: "14.5952437270035,-90.5610392395738",
              stopover: true,
              label: "8 ave 32-10 zona 11, Las Charcas"
            },            {
              location: "14.6024789184229,-90.537836331594",
              stopover: true,
              label: "17 ave 11-59 zona 12 Reformita"
            },            {
              location: "14.6033194911835,-90.5310372357405",
              stopover: true,
              label: "4ta ave 2-36 zona 13 Pamplona"
            },            {
              location: "14.5823558592747,-90.5078720414698",
              stopover: true,
              label: "Edificio los Fiallos zona 14"
            },            {
              location: "14.5806754513423,-90.5094429420748",
              stopover: true,
              label: "14 ave 9-00 zona 14 , Edificio Segheria"
            },            {
              location: "14.5958608395957,-90.5026852003118",
              stopover: true,
              label: "14 ave 13-21 zona 10 Oakland 1"
            },            {
              location: "14.5918114915334,-90.5042938323936",
              stopover: true,
              label: "15 ave 15-42 zona 10"
            },            {
              location: "14.6050157815919,-90.4998398176782",
              stopover: true,
              label: "14 ave A 3-30 colonia Tecun Uman zona 15 Edificio parque 15"
            },            {
              location: "14.5839609985035,-90.5666575263274",
              stopover: true,
              label: "1 ave 40-96 zona 11 Monte María 2 Villa Nueva"
            },            {
              location: "14.5756096136286,-90.566566286713",
              stopover: true,
              label: "2 ave 45-45 zona 12 Monte Maria 1"
            },            {
              location: "14.5764380032945,-90.5657445686116",
              stopover: true,
              label: "4 AVE 46-60 zona 12 Monte María I"
            },            {
              location: "14.5750270946592,-90.5657111369558",
              stopover: true,
              label: "45 calle A 7-65 zona 12 Monte María III"
            },            {
              location: "14.5530924880022,-90.5781210537272",
              stopover: true,
              label: "4 ave B 3-12 sector 5 Residencial Valles de María zona 2 Villa Nueva"
            },            {
              location: "14.5530167241234,-90.5926712467432",
              stopover: true,
              label: "Km 14.5 casa 120 sector 5 zona Condominio Hacienda de las Flores Villa nueva"
            },            {
              location: "14.5387039266768,-90.6038663471767",
              stopover: true,
              label: "7 calle 2-42 altos de Barcenas, y solo 1 dia se queda en Altos de Verona apto 305 Villa Nueva en ruta pm"
            },            {
              location: "14.5376259763638,-90.5785756299066",
              stopover: true,
              label: "Condado catalina sector labroz casa 11 zona 6 villa nueva"
            },            {
              location: "14.5354536568189,-90.5784254046254",
              stopover: true,
              label: "Condado Catalina, Condominio Navia"
            },            {
              location: "14.5371477713042,-90.5740460046254",
              stopover: true,
              label: "Manzana Y casa # 22 Llano alto 6 zona 6 Villa Nueva"
            },            {
              location: "14.5409248155968,-90.5789835622959",
              stopover: true,
              label: "H9 llano Alto 1 zona 6 Vila nueva"
            },            {
              location: "14.5379880418935,-90.577372562296",
              stopover: true,
              label: "Llano alto III zona 6 de Villa Nueva"
            },            {
              location: "14.5544084544994,-90.5709279069241",
              stopover: true,
              label: "4 calle 2-66 Colinas de Monte María Norte, zona 7 Villa Nueva, código de ingreso 2416"
            },            {
              location: "14.6055647142931,-90.5820538422777",
              stopover: true,
              label: "12 AVENIDA A, 2-07, SECTOR B1, SAN CRISTOBAL, ZONA 8 DE MIXCO"
            },            {
              location: "14.6044620549081,-90.5836369711856",
              stopover: true,
              label: "14 ave 1-97 sector B 1 San Cristobal por farmacia Batres o Electra"
            },            {
              location: "14.609309903934,-90.5874644046243",
              stopover: true,
              label: "10 ave 1-23 zona 8 Mixco, Condominio las orquideas, San Cristobal"
            },            {
              location: "14.6024714851656,-90.604028798346",
              stopover: true,
              label: "5 ave 0-65 camino al campanero, condominio fresnos 2 casa 41"
            },            {
              location: "14.6124435059543,-90.6015510447617",
              stopover: true,
              label: "5ta ave B 1-9 zona 8 de mixco San cristobal Paisajes 2 y 3"
            },            {
              location: "14.6132149401068,-90.6010616589346",
              stopover: true,
              label: "Mix San Cristóbal"
            },            {
              location: "14.6100658231644,-90.5969312334595",
              stopover: true,
              label: "7AV. 3-54 Z. 8 MIX CONDOMINIO VISTA REAL 2, SN CRISTOBAL / atrás Sankirs Mall"
            },            {
              location: "14.6053558394727,-90.5984330199654",
              stopover: true,
              label: "8 calle 7-60 sector A-10 condominio Bosques de San Marino Residencial Niza Casa # 10"
            },            {
              location: "14.5961694918284,-90.5954123327295",
              stopover: true,
              label: "8 ave final 4-29 zona 8 Mixco casa C2 Residenciales Santa Barbara"
            },            {
              location: "14.5971053111215,-90.5919288812985",
              stopover: true,
              label: "4 calle 0-44 zona 8 Mixco Condominio Santa Barbara"
            },            {
              location: "14.6012626682276,-90.5993946046244",
              stopover: true,
              label: "8 calle D 5-66 zona 8 -mixco Condominio El Escalon casa # 47 por Iglesia Verbo"
            },            {
              location: "14.5986504749497,-90.5928916247793",
              stopover: true,
              label: "9na calle A 9-34 zona 8 condominio Jardines de San Cristobal sector 5 casa # 23"
            },            {
              location: "14.5814069691818,-90.5938104046247",
              stopover: true,
              label: "3era calle Condominio Royal Hill 2 casa 17 zona 8 de Mixco Sn Cristobal"
            },            {
              location: "14.6080811218665,-90.5895394622949",
              stopover: true,
              label: "11AVENIDA 4-30 ZONA 8 Mixco La Arboleda; Palos Verdes 2, casa # 6"
            },            {
              location: "14.6052427394567,-90.5855409334596",
              stopover: true,
              label: "Kids Corner"
            },            {
              location: "14.6002761211364,-90.5848809334597",
              stopover: true,
              label: "4ta ave 12-65 zona 8 Mixco Residenciales Las tres Ceibas. Se entra por el banco Industrial, 1er calle a mano derecha"
            },            {
              location: "14.5907649823894,-90.5486851501794",
              stopover: true,
              label: "30 calle 15-70 zona 12 Condominio Quebrada de las Rosas casa 15"
            },            {
              location: "14.589878428436,-90.5486620451835",
              stopover: true,
              label: "31 calle 15-22 zona 12"
            },            {
              location: "14.583686482556,-90.5513442263298",
              stopover: true,
              label: "13 ave 35-24zona 12 Colonia Villa sol"
            },            {
              location: "14.5813938327349,-90.5505249200309",
              stopover: true,
              label: "14 ave 39-48 zona 12 Colonia Villa Sol"
            },            {
              location: "14.5818470859112,-90.5485165046247",
              stopover: true,
              label: "18 ave 37-00 zona 12 Colndominio Villa Sol apto 724"
            },            {
              location: "14.5840474027641,-90.5469252757894",
              stopover: true,
              label: "41 calle 12-59 zona 12 Residenciales Villa Sol"
            },            {
              location: "14.5793457371838,-90.552632076686",
              stopover: true,
              label: "42 calle 12-42 zona 12 Villa sol"
            },            {
              location: "14.5812799020799,-90.5478942881779",
              stopover: true,
              label: "18 avenida 37-24 jardines de Villa Sol Casa 21 Zona 12"
            },            {
              location: "14.5601473702009,-90.557631306472",
              stopover: true,
              label: "50 Calle 15 avenida final zona 12 Condominio 1 Casa 15 Vientos del Valle"
            },            {
              location: "14.5492683707235,-90.5480876046252",
              stopover: true,
              label: "Condominio Nimajuyu zona 21"
            },            {
              location: "14.6091223717348,-90.5353855927239",
              stopover: true,
              label: "11 ave 4-51 zona 12 BUS # 3"
            },            {
              location: "14.6207159393088,-90.5373263073401",
              stopover: true,
              label: "5a. Avenida 9-01 apto A zona 7 Colonia Landívar"
            },            {
              location: "14.6186227160725,-90.538647100666",
              stopover: true,
              label: "6ta calle A 5-57 zona 7 Colonia Landivar"
            },            {
              location: "14.629136274014,-90.551437634028",
              stopover: true,
              label: "5 calle B 26-64 zona 7 Kaminal Juyu1"
            },            {
              location: "14.6318284751678,-90.5537999403008",
              stopover: true,
              label: "8 calle 30-50 zona 7 Jardines de Tikal 1, Ingreso por carril auxiliar del periferico por garita 7a Calle"
            },            {
              location: "14.6438505105885,-90.5519184785589",
              stopover: true,
              label: "18 calle 31-62 zona 7 Villa Linda II"
            },            {
              location: "14.643395869842,-90.5522763618205",
              stopover: true,
              label: "18 Calle 39-61 Zona 7 Colonia Villa Linda II Sector II"
            },            {
              location: "14.6543511993854,-90.5014517307428",
              stopover: true,
              label: "14 ave 11-16 zona 2 Ciudad Nueva"
            },            {
              location: "14.6516074858497,-90.4550545757883",
              stopover: true,
              label: "1era calle 20-10 zona 17 casa A24, condominio casa Florentina Premier"
            },            {
              location: "14.583869379573,-90.579478992524",
              stopover: true,
              label: "8 Ave 13-41 zona 8 Mixco Condominio Jazmines casa # 10 Praderas de las Flores"
            },            {
              location: "14.5878982654916,-90.5792131137267",
              stopover: true,
              label: "6ta calle A 6-96 Praderas de las Flores"
            },            {
              location: "14.5958556906691,-90.6010842429696",
              stopover: true,
              label: "Prados de San Cristobal casa D 11 zona 8 de Mixco"
            },            {
              location: "14.5949671674144,-90.5985208102038",
              stopover: true,
              label: "Boulevard Final de Pinares 9-71 Condominio Prados de San Cristobal casa H-20"
            },            {
              location: "14.594692857479,-90.5990692369293",
              stopover: true,
              label: "Condominio Prados de San Cristobal (redondel)"
            },            {
              location: "14.5926681218314,-90.5974061880158",
              stopover: true,
              label: "2 Calle A 10-06 Residenciales Pinares de San Cristobal zona 8 de Mixco Cod 0828"
            },            {
              location: "14.5897210733664,-90.5939686207479",
              stopover: true,
              label: "3 era calle 15-87 Pinares de San Cristobal zona 8 de Mixco"
            },            {
              location: "14.5883356161714,-90.5916149301888",
              stopover: true,
              label: "Condominio Hacienda de Vista Hermosa, San Cristobal"
            },            {
              location: "14.5887645482551,-90.5972756172208",
              stopover: true,
              label: "jueves y viernes Condominio Mirador Sector 2 Casa K1 Z. 8 Mixco San Cristóbal"
            },            {
              location: "14.5684468473321,-90.5960635039596",
              stopover: true,
              label: "Residencial Terraza 1 (garita )"
            },            {
              location: "14.586022523167,-90.591898820083",
              stopover: true,
              label: "19 ave 5-63 zona 8 Mixco Colonia Vista al Valle Oriente (enfrente a la torre de pinares)"
            },            {
              location: "14.5829147027117,-90.5876575046247",
              stopover: true,
              label: "7 calle 19-69 San Cristobal II sector B-3 Residencial La Isla"
            },            {
              location: "14.5867834266195,-90.5673491355895",
              stopover: true,
              label: "Cañadas de Mariscal Zona 11"
            },            {
              location: "14.5978701858971,-90.5621266334597",
              stopover: true,
              label: "10 ave 31-20 zona 11 Condominio Santa María de las Charcas, Apto 411"
            },            {
              location: "14.5974810383644,-90.5627559334597",
              stopover: true,
              label: "Condominio Santa María de las Charcas, Apto 301 torre 3"
            },            {
              location: "14.5995031229673,-90.5631731841784",
              stopover: true,
              label: "16 ave A Diagonal 17 30-26 zona 11 garita de condominio las Araucarias de las Charcas II"
            },            {
              location: "14.6016333095552,-90.5563746740807",
              stopover: true,
              label: "24 calle 9-49 casa 1 Condominio Villa Fontana zona 11"
            },            {
              location: "14.6021648681842,-90.5562765622949",
              stopover: true,
              label: "24 calle 11-30 zona 11 Residenciales La Ceiba casa 22"
            },            {
              location: "14.6038436475733,-90.5540941700046",
              stopover: true,
              label: "Diagonal 17 21-87 zona 11 Mariscal, Preescolar Nanny"
            },            {
              location: "14.6051245679113,-90.5532916546211",
              stopover: true,
              label: "20 calle 11-50 zona 11 Mariscal Edificio Aralia 1"
            },            {
              location: "14.6060576975573,-90.5516071480854",
              stopover: true,
              label: "10 ave 18-26 zona 11 colonia Mariscal frente edificio Borja"
            },            {
              location: "14.6029415806273,-90.5502410230698",
              stopover: true,
              label: "7 ave 20-09 zona 11 Mariscal Edificio Torre once"
            },            {
              location: "14.6106822119503,-90.5527859971816",
              stopover: true,
              label: "14 Av.14-05 Zona 11 Colonia Loma Linda"
            },            {
              location: "14.6099719911399,-90.5531807628013",
              stopover: true,
              label: "14 Av.15-71 Zona 11 Colonia Loma Linda"
            },            {
              location: "14.6137088603644,-90.546484052912",
              stopover: true,
              label: "8 va calle A 10-33 zona 11 colonia Roosevelt"
            },            {
              location: "14.6119817582542,-90.5495459347128",
              stopover: true,
              label: "11 calle A 12-54 zona 11 colonia Roosevelt"
            },            {
              location: "14.6176724630251,-90.5459744939964",
              stopover: true,
              label: "4 calle A 12-25 zona 11 Colonia Roosevlet"
            },            {
              location: "14.6188263842053,-90.5497674437323",
              stopover: true,
              label: "17 ave 6-23 zona 11 Colonia Miraflores norte"
            },            {
              location: "14.6186200723632,-90.5567821371645",
              stopover: true,
              label: "9 calle 22-43 zona 11 Residenciales San Jorge codigo de acceso 285"
            },            {
              location: "14.5965368414032,-90.5573908238475",
              stopover: true,
              label: "30 calle A 7-01 zona 11 Granai I codigo 5701"
            },            {
              location: "14.6333340817616,-90.564174991026",
              stopover: true,
              label: "calzada Doroteo Guamuch 35-14 Residenciales Las Dalias"
            },            {
              location: "14.6427310547757,-90.5628401110082",
              stopover: true,
              label: "Lote 6 Manzana J Zona 4 de Mixco Villas Del Rosario"
            },            {
              location: "14.6431787583419,-90.5606445589296",
              stopover: true,
              label: "20 ave 3-30 Condominio Cañadas del Naranjo casa F1 zona 4 de Mixco"
            },            {
              location: "14.6437183138455,-90.5611714182722",
              stopover: true,
              label: "Cañadas del Naranjoncasa D16 codigo 4016 / 4116"
            },            {
              location: "14.6410320452027,-90.5681036950488",
              stopover: true,
              label: "Pasarela del centro comercial Monserrat"
            },            {
              location: "14.6452027636356,-90.5650151940044",
              stopover: true,
              label: "16 ave 3-85 Apartamento 3 Residenciales Valle del sol Zona 4 Mixco"
            },            {
              location: "14.6504790113906,-90.5802862217761",
              stopover: true,
              label: "1 calle 1-43 zona 4 Monserrat 1"
            },            {
              location: "14.6459802759554,-90.5862076332597",
              stopover: true,
              label: "5a Calle 1-34 zona 7 mixco colonia Belencito"
            }
          ]
      }



function initMap() {
  const markerArray = []
  // Instantiate a directions service.
  const directionsService = new google.maps.DirectionsService();
  // Create a map and center it on Manhattan.
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 14.6210835, lng: -90.521788 },
  });
  variables.stops = (variables.flag == "am") ? variables.amstops : variables.pmstops
  // Create a renderer for directions and bind it to the map.
  const directionsRenderer = new google.maps.DirectionsRenderer({ map: map });
  // Instantiate an info window to hold step text.
  const stepDisplay = new google.maps.InfoWindow();

  // Display the route between the initial start and end selections.
  calculateAndDisplayRoute(
    directionsRenderer,
    directionsService,
    markerArray,
    stepDisplay,
    map,
  );

  // Listen to change events from the start and end lists.
  const onChangeHandler = function () {
    variables.flag = document.getElementById("start").value
    variables.stops = (variables.flag == "am") ? variables.amstops : variables.pmstops
    calculateAndDisplayRoute(
      directionsRenderer,
      directionsService,
      markerArray,
      stepDisplay,
      map,
    );
  };

  document.getElementById("start").addEventListener("change", onChangeHandler);

}

function calculateAndDisplayRoute(
  directionsRenderer,
  directionsService,
  markerArray,
  stepDisplay,
  map,
) {

  // First, remove any existing markers from the map.
  for (let i = 0; i < variables.markerArray.length; i++) {
    variables.markerArray[i].setMap(null);
  }
  for (let i = 0; i < variables.renderers.length; i++) {
    variables.renderers[i].setMap(null);
  }
  
  variables.markerArray = []
  variables.renderers = [];
  var waypts = (variables.flag == "am") ? variables.amroutes : variables.pmroutes;
  for(var j = 0; j < waypts.length ; j++) {
    let route = waypts[j]

    for (var i = 0; i < route.length; i++) {
      var stop = variables.stops[route[i] - 1]
      
        let marker = new google.maps.Marker({
          position:  {lat: parseFloat(stop.location.split(",")[0]), lng: parseFloat(stop.location.split(",")[1])},
          visible: true,
          infoVisible: false,
          label: {text: (i+1) + "", color: "white"},
          school: stop.label,
          
                    icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: variables.strokeColors[j], // Set the desired fill color
            fillOpacity: 1,
            strokeColor: '#FFFFFF', // Set the desired border color
            strokeWeight: 2,
            scale: 10 // Set the desired size of the marker
          }
        });
        google.maps.event.addListener(marker, "click", () => {
          stepDisplay.setContent(marker.school);
          stepDisplay.open(map, marker);
        });

        variables.markerArray.push(marker);
        marker.setMap(map);
      if(variables.flag == "am" && i == 0){
       continue 
      }
     const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer({ map: map, suppressMarkers: true, polylineOptions: { strokeColor: variables.strokeColors[j] }});
      
        if(variables.flag == "pm" && i == 0){
          directionsService
            .route({
              origin: "14.588065,-90.570937",
              destination: stop.location,
              travelMode: google.maps.TravelMode.DRIVING,
            })
            .then((result) => {
              directionsRenderer.setDirections(result);
            })
          }  else {
              directionsService
                .route({
                  origin: variables.stops[route[i-1] - 1].location,
                  destination: stop.location,
                  travelMode: google.maps.TravelMode.DRIVING,
                })
                .then((result) => {
                  directionsRenderer.setDirections(result);
                })
          }
          variables.renderers.push(directionsRenderer)
          if(variables.flag == "am" && i == route.length - 1){
           const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer({ map:  map, suppressMarkers: true, polylineOptions: { strokeColor: variables.strokeColors[j] }});
          directionsService
            .route({
              origin: stop.location,
              destination: "14.588065,-90.570937",
              travelMode: google.maps.TravelMode.DRIVING,
            })
            .then((result) => {
              directionsRenderer.setDirections(result);
            })
            variables.renderers.push(directionsRenderer)
          }

          
    }
  }
}


window.initMap = initMap;
