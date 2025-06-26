'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9c4f98c408828061c4d7de47fbd9166b",
"version.json": "e1a810530d50a07deacecd86c50f8254",
"splash/img/light-2x.png": "d1d99b4148a1312e03eddc2795a2c30d",
"splash/img/dark-4x.png": "6c9c785ee7358db5091e105499a4ef3b",
"splash/img/light-3x.png": "d0db2e17630d4a8daa2670efbe20691f",
"splash/img/dark-3x.png": "d0db2e17630d4a8daa2670efbe20691f",
"splash/img/light-4x.png": "6c9c785ee7358db5091e105499a4ef3b",
"splash/img/dark-2x.png": "d1d99b4148a1312e03eddc2795a2c30d",
"splash/img/dark-1x.png": "0a151f04a7854cafe3d036dee06480dc",
"splash/img/light-1x.png": "0a151f04a7854cafe3d036dee06480dc",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "f5546f8bce6825d4865b6ce8c09c1d39",
"index.html": "547b4c1aa37f7dac2662b3625840f2cb",
"/": "547b4c1aa37f7dac2662b3625840f2cb",
"main.dart.js": "2ad50d62a2954d813c3f7e94b6449ef8",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5808dc819b4200338b594df80b8a4603",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "56ceafc6a6f057bb89cc2fde7f1794bd",
".git/config": "a864155a740e48ce2518eb67b1a48e01",
".git/objects/61/eae0d5f99673fd3e20a407dd2614bb3f7018f1": "d9de584ef94c826da17c913f6c99f4b2",
".git/objects/0d/ded5749aa833b59003bef14f3320755f0ae915": "92fb951087d4c16e38cfacf521ea1169",
".git/objects/0c/c9c21f7aa8e086a605e0bf5752371a3f3c318a": "d10127b15e09da7cb102de07d362545b",
".git/objects/66/3b6b15f90fb987b62790e5036fca55970cdff7": "0e818425a87bbac0fd6260aa26882dda",
".git/objects/3e/381b5c7d6346d39a512264a83a9946b03a6627": "74e916917f489ffa763cc4b65a7c95a7",
".git/objects/57/23e8b8b8aa8bc2795b783c8c46d29559f8e5b3": "4a29b827cbfc956fc73ea3a17bf25139",
".git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/6f/2b8562e6416ac5dff0f4397a38f0f1a5b8ab43": "161238acd98a1cb32e13a01b44f3c1ab",
".git/objects/9b/c02f0212dd538d49c066722f586d0616490bf9": "37095813aeb7b84c7d4eddbd99610764",
".git/objects/9b/060835f6410e4230269806bb8743213e7efe32": "e86e1c25d823a1e58e7c5eda6b2dbe39",
".git/objects/9e/3592e55cc92508721db3a838032036ecc2f9a0": "aeb0dc534a066421927e73ab43d19d24",
".git/objects/6a/6dcb51a631c1ee4ff51770ae896e9f32c79e99": "ea00e6cbbfc8665060877f1d3a727bda",
".git/objects/32/d10b0dd5150607267dbb7ab78ab900e9b825c4": "37f896611ba47462c9bcc6fc120aee3a",
".git/objects/35/1281182585e9ab6919dab4fc5fa534e7aef613": "261d75b2c5b02c573beff5a5cc85789d",
".git/objects/69/d6e703edc00efe439329cdd43b974d6839e0a4": "19f4db0f2938cb3bf1e99e71316666f7",
".git/objects/51/b301a9d8cf10468fe33cfc8f0c5bff1ddca127": "b0530af48768fe2b96dbea43a3769254",
".git/objects/67/6e8247c99cdb25d5d14670df90c479876b1518": "fbf0be25a6d39934b2a7dafa3c0c26b4",
".git/objects/0b/618c7b37fbf5f02af1c92eaa573e222454e06f": "0bccebedf82668d711170593f4b21bfc",
".git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
".git/objects/60/9baf51a83e2351684135788f54f2ef9b9ca649": "7cb7774f28b9ee3b510c43bdcc283171",
".git/objects/5a/fe32a9cf82a552f8f5ac8084c0930d0c6a0e12": "ef91991a9f937914369301b192978846",
".git/objects/5f/fbe68172c02975d58bc6c520d653e4e12139c3": "135dedacdc217b31faa0bb72ea32ceb6",
".git/objects/9d/dc1aa447b587c21b21817df43c409438f99695": "563c6c216243a49c43d4539aca27d4d7",
".git/objects/9d/d6ff40372466a3dc2bb98add1cd87563f07df3": "428f768f614c706d6bc8a58142d2dc07",
".git/objects/9c/55d7bee499eb9cdac7752690bb6e753ad3aea1": "f36b90a291a3af3ef3b40646738182be",
".git/objects/b5/8d6e864945ec4ee59684cbda8406d5172566d7": "13df0bf1f9c39a988a081d0a7fd4c6c8",
".git/objects/b2/fca0a2a049bcaeaab260e40c0ed285822370e4": "745969994b2b98cfa619d6204531134c",
".git/objects/b2/a240ca32b3aaf0753461e75c924a619d55496f": "d0f5291ecc6e623267bb12c901129711",
".git/objects/b2/b31258e1de4cd45bca4f501b1779178d94e717": "d4706966a170b78abb810b1261a7a9ad",
".git/objects/b2/a8a4ac0405c5bcdab68103ea2e095bb9f0b892": "531174575af94201ee5c8b9cd2b90c8d",
".git/objects/b2/3d74d642c3504d9a901f2a79555a05a579a98e": "343c0253eb6e3e56867237913e66a721",
".git/objects/ac/b571564a8c3b98cd081d600f95b2389b3095f8": "cba3ee5f29bc6e78db6b68005a485876",
".git/objects/ad/8a1c90be18f66a8c13876005689914768405b6": "2fc1ec0a8522952c44f20846bd3648d8",
".git/objects/d0/6bc4766565d14e9404d228c38b1e6748a37460": "17d2f3a88b21f5e0d464aa6c4701558a",
".git/objects/d0/d501298f4b5b476db81fad80f8fdf4dd95d4f9": "03cbc2377b0f7736dc5373b5fe00679b",
".git/objects/df/0b365fd244ef796faffae223b754783db04c58": "48af032f784e017bcd956de8d8da4bd7",
".git/objects/da/330d18f5f688e0f5e5ceb9664aea61c74671be": "9f679e487520573c62aeab318ca460d3",
".git/objects/b4/5a9ddf79dcafe24c098eacbed678a420b3de54": "f1b393b440ecc3a33f8c6caed28e8af3",
".git/objects/b4/c2a633da7e0a2930371d861a7d18d031239153": "e20c239723b1791924f803d0018e8f79",
".git/objects/b4/ee4951f33ada1a1c4ec71349d9755ea95063fd": "fa0e4209f2b68124bd1b018aa5e4f741",
".git/objects/b4/e6db11f83c7e9674755dcc8b3bf5795fa1d5c9": "da6748db69db31b03eed94f2355d1b18",
".git/objects/b4/bf4538917654041aaca81b8f68df5f33c3fd27": "29c58d96010f01857fd71c1048673571",
".git/objects/a2/4d53120b1556a116bfb5f551fecceab9ce15dd": "7ec8d44862fc7d36f55c6786db6b1aa5",
".git/objects/a2/bc7cffb6ea55fb63b124235dc898191ae56f4a": "f67a2ce4a5b063856b81c550977856aa",
".git/objects/a2/bb5d64069d23085e09766c8b10994679cd3c5c": "c9c40231b034ebe89b98a64c37e9c6e3",
".git/objects/a5/32eae9ead7531cf7fd99ce2c8baac8c273ef3d": "67bfa1a4779891ecf2f018c649da2a86",
".git/objects/d1/5541db1828b475fa6ed199b3810f2d500a2712": "077aa47bee52b10042a350665368cdce",
".git/objects/d1/46e9c5a6e0535ba482ae62a2a89f2a33cddf88": "23ac0fd67d72822f04f398167a0256c8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/03c0e2db340512091fb52714877d29a65b16d1": "3795743c09b165949bc7899cd2d44449",
".git/objects/bc/cf664531b78314d2fe7399db6fae2329507bc5": "cd6ab78e8f8880fb54dd0a21fdf8a95b",
".git/objects/ae/d8041f918e67e14248090eed387afbd3e64119": "40f962bacd9965566c3ab4bf67df30de",
".git/objects/ab/adb469ec0fc3f4e73c4b39aa759f02fd52eaeb": "d2698752d32aaa9ad55a1a9f13b309a1",
".git/objects/ab/13967075f2eac25dab912fc3a4f8345a11969e": "d8ced7b222b39ea68618ed7d6d18f88f",
".git/objects/e2/a88be731dc9d212121868eb49c5fb772061ee1": "9a6950a0f41d349932253bcac3a7142f",
".git/objects/f4/bd22ed518504c30e46f35e63a7fb6623a8bc74": "5200f432618d6bb445946369e37c54b1",
".git/objects/f3/e20289b20e61ae240aacc0d1a70df8fe3dc67c": "ccc0014e69584e2390f723ca37f22760",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/4232a0c2cd4970128e5271fec45b6868fa2eae": "82bdd55a92e7f57744f34ab6ab555ae9",
".git/objects/eb/f89342b9b850e2af807e2c21db82d72fc46a1d": "07b61a75b8a5fd7c1784c5f1d9e53bee",
".git/objects/c7/503b5971c730896c8ac3a3d84af48c3a3e81ff": "661b90d45e489c9fc22b70fdebeb36ea",
".git/objects/c0/c8173b2cdd33983d8438e1ec52ab7962492132": "b3d7d9201f3f0f9f590875a50054c27e",
".git/objects/ee/42d450766b0a3a9305b22e0ed1cf4c9820eee0": "2b6f45e1ac5b00363cacff8b43faa250",
".git/objects/ee/675c15d6b6a74452708b346f5eebf93bf0bc7b": "00cc014bea28a727720eb3c303f335de",
".git/objects/c9/7c8c3ce3889326932e08ac1f93496238ac56af": "23fd68a9466b4e3174cdecf3ff6857c4",
".git/objects/fc/fd8a0991beb240b7ddd5f15b1de5fef5a3d0b1": "b55b401773ad6a6f9dafbfea7e9a5e00",
".git/objects/fc/66ff2b0d7fdce6b60163ab3a71d14238b1367e": "9ebe233914a75e39476e2c259c6bd615",
".git/objects/fc/e795a8231af6a912ee0319186e8eb6a10e191d": "1cf05ceb58160a370d1c1ea2ea4ae6ac",
".git/objects/fc/6007e3e1725da7ec7afe2523d57871f7abe48a": "e17295ee2bcaaba2af0e0e6e0534734f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/2a7f4da65fe5e945d6730766d11a34ba372be8": "4567daaf54be2a1377e0ea90a0c2d4de",
".git/objects/f5/ccf8a061dffc367058382fb0cae998896e1457": "7b254a0a8f7d395eaec4164154726349",
".git/objects/fe/9ca40445c81b2dc800a8014f51d658d4e034d9": "1e7eba0a4e2ee141814ea252e34d3451",
".git/objects/fe/ce45ece7f5ebb4671d19996058cf02ecd2d476": "12b98f6a529758d774cf8e6943297c0d",
".git/objects/ed/3383437e0b9d5f62e03fed4ff5a02dbe7c3de5": "33cc9f211c7d5a49986cc58bcab69207",
".git/objects/c1/319d2c80fc019af43f69279a3bdd7c324b10d4": "8989334793124af97d4d681a8414d666",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/a895e0bdc7abf96b4391faba85a45a28611417": "e46399fe06a9c391783968b93d55d1b4",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/4b/cb50bd63047b1acc02c2ed841f82bc59b676f0": "58e27be735ce91d13a41bc3534fb76fb",
".git/objects/45/b2c3f3b8f82239a912d0b927858a9e85458cc3": "a6ecd4431f620c0ad2c3afdcb7727474",
".git/objects/45/92a58336a117302e7c746c4b860c1a9a9150aa": "6b5432d26ec3e7450ace49a890d6691a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/87/632314945512979b60651cfdf58ec1540d3150": "fa15ba70fa0b3b494baad2b3f3e72304",
".git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
".git/objects/7b/ca5ad54540c6e1b55416e1a524bc26a016e5d3": "41228ff72dc3a0e2c887e2600c182879",
".git/objects/7b/742e607a85b18829a49b9e5e7d700c35d673c8": "bf8e84dc71fafb69f52bac0ad45012f6",
".git/objects/7b/71ac3a5db3b7556e0802a41a26f5e093eb971d": "275f2b3d5f4b894b8d63cd0d62d779a3",
".git/objects/8a/38b4850250586462f21b2a1c06e69249186086": "0b912ef818715c26e0b257f9e3a0a865",
".git/objects/8a/276b612c4711f9be800cb97afa929c36674484": "c2ca1fce894e0a7cc5dde9c42a2b6e92",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/1dbac3b483bf0f4daacf04df73a2e51cead9f9": "cc060bf3c27cbb623014bdcc7f51b4bd",
".git/objects/4c/4bc88221084396fca84aa4aea8811df0f56191": "6fffe7748e8a6849e0eb4c7b098424c5",
".git/objects/4c/1d4dcaae7f12b80780cf06c217c45a1e3483b9": "c976c2266fe3de10d131d09c6e8d0bf9",
".git/objects/26/f00d1e2dac319b3c34b5519dfd715485c70dec": "464aeba16af3e71138be84f9082552bb",
".git/objects/21/f5f16481ed04834e0133327a713f78e291d363": "3341008c740893914085fbde5a60b4e1",
".git/objects/4d/a7ea0a514de0166c2776b6fd9580f2b923361c": "1a8c39f5312ee8708948550ac48d13f5",
".git/objects/81/9c8ac583a94094c2e33d196ac7e3ad25f94f2d": "e691b0490f6f4e33edb93e8c334b519f",
".git/objects/81/158462a685d770351fc832ba3fea2150b1379c": "ffa9e69d53574864e104d54b5afadb74",
".git/objects/81/338bcdc0ff77d39e994da4121b25510ac374dd": "d1c26d107d7836a0cc007953b2f328bc",
".git/objects/86/b2b83347aba40566b86fd22c78d70951afb59e": "63ef0138bae5df3675b8e1928f6d9ebe",
".git/objects/72/ef917de959c8ddd8b9a0a42139f611bd71b123": "f3ece05db8276f999d61ff2d463ae7ea",
".git/objects/44/f72ebe2876bf8f84947d385f1f28e369c4f762": "38adbd355de5f2d7a2f5f4edcfcf9c70",
".git/objects/44/346ad6d8a1b82c6c1e91f7dc2820ebb1603de2": "a433a28aff1c92dde5fade6e2949589c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ef0c69d475a66a0661ad4ea55b0e637affa7e2": "4a9d0d3d2b47cc958f4b030379a0dc36",
".git/objects/9f/56b500811b3a294630db13371d38e594518ae1": "4d6804b6cbed48afd282fb2d256c2833",
".git/objects/07/fdf851f7d8940ccc23e29984e5364ed17a584e": "edd88c43d25cdc3cb908595838ee944d",
".git/objects/38/909079e10e43cb8df397e7000fc6c2f002b0b7": "caa98e5db7e0fecdc9a66f0c7bd9e87b",
".git/objects/00/ab46c722dbe6149b86d58182fac7fc3bc74287": "01d3b9c3b5c12b6a27e058a8d60adb4a",
".git/objects/00/19938cb27f0b9db6ceed06665c15667525d5f2": "267ccb786bc25362b652a059dfbe953c",
".git/objects/36/343aceefd23e54cf529af4f85b6c288e042cc3": "734a9b39cfedbcee40fa567767465822",
".git/objects/91/2c76e600874040edc37591f1da775bae43bbb0": "2680587dcfef4925efe4e22240b14c06",
".git/objects/53/a11e6cb189573f2138264e1d0e1f0d304f54b7": "62706c324dfa72662d4fc93c179cef8f",
".git/objects/30/fc2e0dd2baec47075c84603bfca745c9e00219": "cd8a0cbfbb3482fc001b4d913c4cb4ad",
".git/objects/30/487331559c1094b7d6061f6d6aca4bd807f065": "95a5d7b7e220a7553418efc7e56fd429",
".git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
".git/objects/5e/21cd15ef8952dad1a9a6b0f9d0a2998a72fb54": "5462bd525b8d6e7f5d8f01093585184d",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/692139c83bc229015db221b01877f9da232501": "dc26077948067f5a5597be09b77069ad",
".git/objects/01/f8ee572643edd35c5a8f4d3d51711a333c3a9a": "4657f5116b9b9371fe82a0ea79de5128",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/52/2319875e10c4ee19ab08a5c373f0197ffebd9c": "e6ecefe3ebbd93afa0d15bf87c1fc3f9",
".git/objects/55/a8f6d8169cb91e396c1584bbe6a27fb89f3460": "7ab7f37059e4f02db1d5cb204a4e85be",
".git/objects/55/2070cec130c929a3b6b264bf55d81840475760": "5a276161a005a53cb9e924ce9b6def50",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/4110d4ceb2496f4be01035db6d1bf2e798f0b8": "9ecde9e9404e5e6ec6882649dbc2f6ed",
".git/objects/90/0c30a6ca0f5462967706ec127a9ceed5c0b9d2": "cfd5e164a1e69da5214a9be63f7b1a65",
".git/objects/90/57ccd1328a84d359e98d331abb66a2d46e2aae": "db3c49933511b9425fa36074f8c1acd0",
".git/objects/d3/0e854fc4b8272889dc3e436516eaf7050f4f3f": "4455f8c7bcc76a9f8566bced2b849b6d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/5c18fb8a1e97a124675e9641e06239e48a42b8": "a431503397cd8f183836bb5a96a59252",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/2ebcd45a4b81f4172a614fe99b47f7b9b8bb88": "e72f1f7ab03ed76eb4ac64f867d180d4",
".git/objects/a7/ec5dede4858e31aed0b59915f6c9a11b1826ec": "3337269406cdb70485801c6e90f9b22c",
".git/objects/b8/ad752d88911a389ee35d7a59d370cbfdf6f9e8": "e73f460e8eee40c6d5dc5a87fbb56c53",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/5117e9d368cf987c423de201a56d9e949b4939": "ba5a69cfbec80bc23423ba057c2f7ef4",
".git/objects/b1/5ad4ed7cd3e288474e41542cadf553583221d7": "67fa169e9ccf00e2c9bc00cb50e7075b",
".git/objects/dc/629150d12bbad89c8bf7abef69b624aca4c215": "72ba2b40b9631cc3723098587ccffd86",
".git/objects/b6/bb5dc9984bd5fd9758c4686e66f5f71f610ab4": "bb0e0553e6e8dbc7e2332264fdd2c4c0",
".git/objects/b6/6f254cf97254d999b8bf8e2cd7ab5ffc53828f": "6f40f2afc6b277eb16c2f7b8fecdace4",
".git/objects/b6/1ddc96e5347169ef629ca049f020ccf0798126": "f5984a91cb4130dab51d0651ca84de87",
".git/objects/a9/53d2e243814306553733133f9bc8c0c6dfe0e7": "36bc2bc0b71f5523a9ea685cf29ae723",
".git/objects/aa/55c8e80e40eeb0ef477b4cc8e4a4e6eec5aed1": "e0507ea9aaeb06fc57f3a08b32be852f",
".git/objects/aa/f8d53c0280f76ae923346c7cd973e4b3cb6dfa": "4a13b67e7be9a249c53902ed787ded5f",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/eb0d8f7d457e4a34101752c7762e169c4613e8": "aa1ba55b175a463bddeaf9471716d3f5",
".git/objects/b7/6d90117c720389664777785c94eba7a7582a24": "e4d3af5def33fa3ed63f549352b21a8a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/131148501be69e07eeffc415dd168589552b3a": "ff7239e52d423f2c1c464c4c9f43945e",
".git/objects/a6/44bee0bbdbf5b44670efaeae70f2b5d1b44270": "63d4c1537ed4317c813728a6d13bbf6b",
".git/objects/b9/07a7525b87d98bdc41ff335771929e67eee11d": "af98dab0d804cd06fd577faacc46bfbf",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
".git/objects/e1/553ada20beacca24f6111412bd1fae45dd3246": "781dab8879a3c2f08063f9ee8b84750e",
".git/objects/cd/3b4768dae4c2e5f9483d666fdf78d8e0a1fc89": "cdeef13aee8984d44b9c497bd1b3a1f3",
".git/objects/e6/559433a209337d0f47eb799d7e51e4ac7a7f7f": "5e45895695e1e4e1f7e6dd6517b1c926",
".git/objects/f9/0a0b4222c01a5810657e71a9d7c1f7be49acee": "86797abfb7a17c5f05017880230be888",
".git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
".git/objects/f7/569515b615b8f09454d9a2680e58f5b369e62a": "907be260620fe4c6ee612e10a19f7ea6",
".git/objects/e8/deaa66ad31aac21391b1f3308b751f5ec33639": "b6e9502b7cf5b217b307dedb85b47fcc",
".git/objects/fa/a9ca3f9aef287a066ee41fc54b514418f07666": "c9f1dd6e65214a9270b8404a51596378",
".git/objects/c5/dd94151e44d36715d80d64a498a867bb98998b": "db998a9526badc1991331f7a2a850867",
".git/objects/c5/9f76cc04ada2da8d4c1d8aa2a620387b75e5fa": "3c737a829ea028e66442897ed7fbe0b1",
".git/objects/c2/103d7efcd108838dc5561931eca657c9633957": "6d723d6ef6f5e2c02c62d20e45cebfaf",
".git/objects/f6/94a3807ec18b5685e1a7ba6fafe17d78157121": "dad65a95d0e38bee068982afa3a4031f",
".git/objects/e9/7d91fc6e188a27d7198306caab6e55186f519a": "bb2583389d08ce1aa957765fad868c10",
".git/objects/e9/b69fc25fc6b78e0d374b66fb9cec3bd78415f2": "feda46c1e08242d37a6719cac4e47f91",
".git/objects/e9/9008466be66758a8a146d8787123d6c0bea42e": "d0bacf3cd4333ccdb0c782e0cd8bef91",
".git/objects/f1/1733fd751c205e302a159d8711cacfafd46953": "804753bba10c354cce9bf909464fce79",
".git/objects/cb/162d3add3c942de37582447aa28c7ac6d0c452": "20c03d0f94ccad4e5e90ccca0db07c13",
".git/objects/cb/deddcd6fdaa099035da14b0fdd6ab3a589c5e4": "bca832bf6059b7b3d820509e83142071",
".git/objects/cb/50213c7067e145eee8e9fed791a0f1c53f8533": "f880f21e8b8e87eaf43f0b969c85de1c",
".git/objects/46/b3b99387e33ae81940d9a486ba4e0e9fe5b5e6": "73a7f6c4ed3d848f6bad362ed9febed6",
".git/objects/2c/47f68d6ecc543988492c0c2ba6f62a4b4da445": "1b6d58881949d5fce32ee1e67bcc9526",
".git/objects/2c/6d22745868c5eef1652b5c544fe5d81726dcb4": "37bea12844af11e499771c00339a9f24",
".git/objects/2c/55c256edb51768a059c32891b136635f94cd4c": "9678d86d9968e912fc260186afeb22bb",
".git/objects/2d/32dfaccd5d2397d944999a8cd08ef3f6f16c90": "cff43af665d01ea37dbdd1a942efda80",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/83/1210a6ff08fbdfdbafeda60ba6ddc791ee938b": "539bbbf0f176b11e05605923961b0bcf",
".git/objects/83/af598d8b3e70e12168838c865406c5fb57573e": "cab359868c10b0f2473e7ec72c346745",
".git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
".git/objects/77/aa00298da87ed0d85546ccb97f37218b3c3c5c": "c858aed7e5dc74ae60e570b03dc64b1c",
".git/objects/70/14872868c45d597b14553d860f2c4a5a4f8df6": "ae606d8e96f11e13546a08d5aece8a78",
".git/objects/1e/5b3950886b844ec0145ab9670c83354e007f99": "25e2bb085f40a208e07042b99cdb3689",
".git/objects/1e/5512f892ac94daa0e31bf9d6f761a2e4ba5074": "fa574faf6b51f7d6bb05d7b6360961d7",
".git/objects/4a/3cf2069f281f3993170401e7160d4939e40b78": "40d95e8359a8d7f72ecd362486602900",
".git/objects/23/18e06366816ee42de5bfe48597e3ed8b5fca38": "72228fefad0c0ac4f2756d03d899c3e4",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8d/ff7ae7ee823c3cec16cb33148a1ca1d21baffd": "833e12a19516142b367e1a8cd1fb3e1b",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/15/b9185a48ea2ca2fa5f0d5e83430a055fcb3611": "d0d5b42ed9cb1ff430ec705590340000",
".git/objects/8c/79e4ecbd7f36b77ecb2f315b06e68ac9abffcc": "84ac449437a007b4c3926ff006840124",
".git/objects/85/17bcf96cb0fcbeb42a0bb0381f4bfecca3c5db": "d5936e1df93a59684d6e7a23d8583310",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/d3ae92c34751080b0a79f85e8ece382f90a2c4": "6d22ccc21a982a215403cb677ded813e",
".git/objects/1d/6e3d7676d92b4f58370d4baa3f9c763942bcbf": "8a7cd5d028d91d2a1559910b396dd0ea",
".git/objects/82/92fe3e85ad1aff5724aa0abe48e2a5695d0e72": "8fa926d42d8660a1f24cda3a35cd4322",
".git/objects/82/14a3cc962799e65b1b6bc74b9443ba6d7c774c": "ccd473ad78d0bc011c82ccf71f21e977",
".git/objects/40/afaaae4c01464014f1fce4e44b067d80897c27": "fd6e22827459d50cc144fab6ebd0ef55",
".git/objects/40/0796d5e61177f2d7e8537f3df9b9873218b896": "4df917c328d002123b585ec89c568bf3",
".git/objects/2e/586dc2c4408f04eef27b88ed426dd4f69e0afe": "6da646f1baa625077fc65a267381b473",
".git/objects/2e/6bca16e91e83326005515ec748ec4b6f3d6459": "92dbeaa2dfc442fa003c763c521da4e3",
".git/objects/2b/1c6f986b9c53b2bc11f5bd5dcf9ec5c456b7f0": "bae105dbbe63e6b30d04a567f8288059",
".git/objects/47/7bf2496890055cb52245503df3b4480ebb2c99": "978e00330274fbd397832458d0ba618f",
".git/objects/13/71291c144323cd58a59fb2bc91b031059c8f4d": "1fea0a242676d7c953a8cbaf25928031",
".git/objects/13/627287561b580ca1650ae97d27d6c8e96b9a3d": "2c1dd5503f672155b13397b321a58406",
".git/objects/22/658b22e1a5ab79de7d6300bb5fe272511f0138": "cd850f6e995b83834eba3d7c338eac19",
".git/objects/22/73fb7e684ffa911024226b24e4e0bec6fe7e86": "d10ce35c18f5ddaf7c22560d3ab3729f",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/objects/22/7271cc8379115f2b866492b404029b0df45b30": "38b6ffa45e623c38d9b4d50ec488261d",
".git/objects/25/629f70e5b87618ee60e09d462b9f0851fbf75e": "9d0ae11f67f31a90409731fa04bba5f7",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "89bf33166c12afd49eeb4d536b9eff56",
".git/logs/refs/heads/gh-pages": "89bf33166c12afd49eeb4d536b9eff56",
".git/logs/refs/remotes/origin/gh-pages": "7345ed2f4b7bc8a062860e3fdd1243db",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "1e671484209606944144325bc9b1dafb",
".git/refs/remotes/origin/gh-pages": "1e671484209606944144325bc9b1dafb",
".git/index": "4f849f41b0973ed39edd53f2b59bf636",
".git/COMMIT_EDITMSG": "ef1a27de28ed85f232e264ae2c4d80a8",
"assets/AssetManifest.json": "9d839016d437cfb8ce4e7d05128f0463",
"assets/NOTICES": "1186b8b45a7255b62444bf125f89031d",
"assets/FontManifest.json": "d77defbd17bf80c80a8de2e9c245fa2f",
"assets/AssetManifest.bin.json": "106a435718bf67a734cc255b68fb1ddc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/progress_dialog_null_safe/assets/double_ring_loading_io.gif": "a03b96c4f7bef9fd9ed90eb516267a11",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1d59b3a4a997d790bc4c7aee1cba0958",
"assets/fonts/MaterialIcons-Regular.otf": "e8a615b07530581a0982e8ccf2a1c7c9",
"assets/assets/images/Thumbs.db": "6d5c578149db247735dc1ad6a5c29797",
"assets/assets/images/confirm_pass_3.png": "36349a67bee167623ce2ebb6857407eb",
"assets/assets/images/confirm_pass.png": "1a2856f7208aa995be26ee13e709eeae",
"assets/assets/images/user_avatar.png": "682cea2b105dc504967c414bc0306b2e",
"assets/assets/images/forgot_password.png": "1637578c10df300a3fc28631298b48ff",
"assets/assets/images/clipboard.png": "3c756b639de3880da06b045fa94fcb98",
"assets/assets/images/main_top.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/images/empty.png": "a9d988cd6785918680f105ce032970be",
"assets/assets/images/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/assets/images/stock.png": "cb097432348d4272e6184588e0f618f2",
"assets/assets/images/saloga.png": "37d4c28037f7ec7ea99b97ed1096dd25",
"assets/assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/images/bm_img.jpeg": "014fc434c7121d13d0e7cb2884d753da",
"assets/assets/images/bio_image.png": "d3a4b3063a438344cb34eda5565e4fdb",
"assets/assets/images/user-img.jpg": "0fccfed352f5e439d898dde94febde25",
"assets/assets/images/monitoring.png": "73ac362e9995113ec58d47d6317152ba",
"assets/assets/images/round-table.png": "92688dd549b7e5e34a0ae6602ac9c105",
"assets/assets/images/placeholder.png": "44fe0097d867fe9f87f7393eda55c437",
"assets/assets/images/documents.png": "b1bbc003e08649dd613a640ef3fd3f8f",
"assets/assets/images/splash1.png": "dd93f2d560e0a0950d8f681abe3446c3",
"assets/assets/images/splash.png": "dab311e4b0cb5f337cb37afbf1ae9106",
"assets/assets/images/splash3.png": "d9b2e4098cd5890a149de4f7f4b27070",
"assets/assets/images/password_forgot.png": "7a7d2a5e141e1a64bb8f0283dc6863df",
"assets/assets/images/salogo1.png": "07d2acc4e6b04ac47207de53ffe0b50f",
"assets/assets/images/splashs.png": "46313aa8f1426f64cefdc82c3dd0609c",
"assets/assets/images/logo.png": "f362d52acf20b208fc0a7448d7ba3b80",
"assets/assets/images/forgotpass.png": "bfc3c6f2bd08bfcc094290908575d73e",
"assets/assets/images/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/images/pdf-logo.png": "d63049de11240a69563087ac699f8292",
"assets/assets/images/salogo.png": "514ea0cc70d5fe6a37f01fc8ece81724",
"assets/assets/images/interFace1.png": "cd8a44e8d0af949a031c0ea83958d623",
"assets/assets/images/interFace3.png": "25e4c23657b1dac674e352d274ad8b2e",
"assets/assets/images/al_bkg.webp": "6fd4a32bd3c07a04df2452aaa3ab08e3",
"assets/assets/images/approval_bg.webp": "13c2ec951b0b53ea8c6c51789e79f7ca",
"assets/assets/images/forgot_pass.png": "df00004d4af70caeda669a8278bcb766",
"assets/assets/images/updated_sa_logo.webp": "5c19730255eaf279114a729ee188b4fa",
"assets/assets/images/interFace2.png": "c101d35e907f00f40900fca7f9c4c69e",
"assets/assets/images/otp.gif": "e43409b4d81b20d31994baac31eccf97",
"assets/assets/images/box.png": "11b367225c7b90a8b1e136e5b95e97b2",
"assets/assets/images/al_logo.png": "94cc53e93fc4b0378f685c96c1d8d7be",
"assets/assets/images/burger.png": "c9bb52efd1e4573597f65c51c670572d",
"assets/assets/images/interFace4.png": "aeaa1e1b0de05128ab97337e9a73c25c",
"assets/assets/icons/branch_expenses_icon.png": "c4070b53c2def581912d66ad70228df0",
"assets/assets/icons/otp_verification.png": "e9fb5ed20ea94dfcfa73c265271d4233",
"assets/assets/icons/document.png": "a341d598679d1535425a0365b7940cf7",
"assets/assets/icons/user_signatory.png": "cd10701f56e628dae2c0ae4f0bc8e365",
"assets/assets/icons/icon.png": "a9924d4fad9d9275414ca4d660f56026",
"assets/assets/icons/decline.png": "804cb5b00619a649eeddb1703415ceef",
"assets/assets/icons/user_meal.png": "383e535d4693dd82bb436b1bb1343e6d",
"assets/assets/icons/approved.png": "7cc1fc87cfdc442acea970a996428f5d",
"assets/assets/icons/iconn.png": "e96d7d00f1895cc03e84bfc4dbeec9d7",
"assets/assets/icons/finger_print_icon.png": "e1dbf41f7163029a3aa63d05831a9afc",
"assets/assets/icons/settlement.png": "110a2c334ecf8f7a401ee3030c22ac6f",
"assets/assets/icons/user_inventory.png": "fb215e9da912a39894829d513c543062",
"assets/assets/icons/agency_hr_icon.png": "bd2c16e745e19ba2291747055bfeca86",
"assets/assets/icons/logout.png": "3c38aa75bcf06c80c549e5e5b82ab9ba",
"assets/assets/icons/hide_password.png": "c47c2a0bfc7fcace38ec336be13d1bed",
"assets/assets/icons/approval.png": "50311f1ae42c3e964c273c6ccf024477",
"assets/assets/icons/interest.png": "54b15aa8479f884906a816fb9afba4aa",
"assets/assets/icons/change_of_report_icon.png": "704d3b3b98627c20153aa2430c30823d",
"assets/assets/icons/revert_icon.png": "2406f1c68e4a780adeee1604e181f574",
"assets/assets/icons/forward.png": "06eaca6c302b63ef10d5ef55ec8169ca",
"assets/assets/icons/activity.png": "ea396c09924f6ee49538b958f4df200a",
"assets/assets/icons/bm_icon.png": "26aa8670572229c78042d3b908aace8d",
"assets/assets/icons/user_payouts.png": "8ed4b388cf91fd45bba1fa2b50f2f8f1",
"assets/assets/icons/interest_icon.png": "26d75388c130f7b0523cc2e34efab4a1",
"assets/assets/icons/user_rop.png": "bc30c8357d67da339205e626fbad3567",
"assets/assets/icons/drawer_menu_icon.png": "20848770f54c4eda964b77b0cc39c27a",
"assets/assets/icons/rop_sig_icon.png": "412110b3accbf0745986a48275dcb752",
"assets/assets/icons/show_password.png": "6736cdec64ceabe672f11476bcb6e541",
"assets/assets/icons/biometric_icon.png": "b10f0c33432115a9b02ff81974fc201c",
"assets/assets/icons/user_iou.png": "09fe6177608af5210350dbfab3ec1399",
"assets/assets/icons/user_activity.png": "d04f5c2c11567e4ee9ed190edd5891f3",
"assets/assets/fonts/OpenSansCondensed/OpenSansCondensed-Bold.ttf": "cfd3dce57f28f5955c90fc5b5385d4b3",
"assets/assets/fonts/OpenSansCondensed/OpenSansCondensed-LightItalic.ttf": "d828c28462d9842695ba992b521389c3",
"assets/assets/fonts/OpenSansCondensed/OpenSansCondensed-Light.ttf": "3589bddbe338e444d408f4dbc545ca1e",
"assets/assets/fonts/Ovink%2520SemiBold.ttf": "08685c242e5b63e896db015b49173542",
"assets/assets/fonts/SegoeUI/Segoe-UI-Italic.ttf": "5eb716ee36ae3ea66de512bcb63af3d8",
"assets/assets/fonts/SegoeUI/Segoe-UI-Bold.ttf": "65099f98c7cb19b3dac57b15a6a708cf",
"assets/assets/fonts/SegoeUI/Segoe-UI.ttf": "0e7e9a9b5c4abaadef7bc8f4e4574084",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/Montserrat/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"assets/assets/fonts/Zemestro/zemestro_medium.ttf": "af792d6f108816b38d6e36a0eb94b0a2",
"assets/assets/fonts/Zemestro/zemestro_regular.ttf": "3d7bd6c43e09607d118a3ae06a895ec9",
"assets/assets/fonts/Zemestro/zemestro_bold.ttf": "07203adf179b24aa2d2f0e942d5d19f1",
"assets/assets/fonts/Raleway/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/fonts/Raleway/Raleway-Italic.ttf": "f73026bcd64e5a5265ab616e5083cd48",
"assets/assets/fonts/Raleway/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
