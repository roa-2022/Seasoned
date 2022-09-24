exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('produce')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('produce').insert([
        {
          id: 1,
          name: 'apple',
          display_name: 'Apple/Āporo',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/73967/imagegen.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 2,
          name: 'apricot',
          display_name: 'Apricot/Aperekoti',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/14967/apricot.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 3,
          name: 'avocado',
          display_name: 'Avocado/Awakato',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/5210/avocado-one.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 4,
          name: 'banana',
          display_name: 'Banana/Panana',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/585/banana-main.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 5,
          name: 'blackberry',
          display_name: 'Blackberry/Parakipere',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/14982/blackberries.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 6,
          name: 'blackcurrant',
          display_name: 'Blackcurrants',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/14997/blackcurrants.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 7,
          name: 'blueberry',
          display_name: 'Blueberry/Rēua',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/15012/blueberry.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 8,
          name: 'boysenberry',
          display_name: 'Boysenberries',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/15027/boysenberries.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 9,
          name: 'cherry',
          display_name: 'Cherry/Tiere',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/213574/cherry-banner-2017.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 10,
          name: 'feijoa',
          display_name: 'Feijoa/Whitoa',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/14943/feijoa.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 11,
          name: 'gooseberry',
          display_name: 'Gooseberry/Kuihipere',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/15057/gooseberries.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 12,
          name: 'grapefruit',
          display_name: 'Grapefruit/Huakerepe',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/13718/grapefruit.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 13,
          name: 'black grapes',
          display_name: 'Grape/Kerepi - Black',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/13734/grapes.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 14,
          name: 'green grapes',
          display_name: 'Grape/Kerepi - Green',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/144665/grapes-green-copy.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 15,
          name: 'honeydew melon',
          display_name: 'Honeydew Melon',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/15108/honey.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 16,
          name: 'kiwiberry',
          display_name: 'Kiwiberries',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/192460/kiwiberries.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 17,
          name: 'gold kiwifruit',
          display_name: 'Kiwifruit/Huakiwi - Gold',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/144823/gold-kiwifruit-copy.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 18,
          name: 'green kiwifruit',
          display_name: 'Kiwifruit/Huakiwi - Green',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/3435/kiwifruit-lr.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 19,
          name: 'lemon',
          display_name: 'Lemon/Rēmana',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/77644/lemons.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 20,
          name: 'lime',
          display_name: 'Lime/Raima',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/15087/limes.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 21,
          name: 'mandarin',
          display_name: 'Mandarin/Manarini',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/15093/mandarin-product-shot.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 22,
          name: 'mango',
          display_name: 'Mango',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/141458/mango-copy.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 23,
          name: 'nashi',
          display_name: 'Nashi',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/13840/nashipear.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 24,
          name: 'nectarine',
          display_name: 'Nectarine/Pītiti kiri',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/15138/nectarine.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 25,
          name: 'navel orange',
          display_name: 'Orange/Ārani - Navel',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/13855/orangenavel.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 26,
          name: 'orange',
          display_name: 'Orange/Ārani - Valencia',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/5255/orang.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 27,
          name: 'passionfruit',
          display_name: 'Passionfruit/Kōhia',
          type: 'fruit',
          image_url:
            'https://www.thespruceeats.com/thmb/8N3vBJJt-hSQm8SHyFkq9d-8c8M=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-185227039-589d5b065f9b58819ce64410.jpg',
        },
        {
          id: 28,
          name: 'peach',
          display_name: 'Peach/Pītiti',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/15162/peaches.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 29,
          name: 'pear',
          display_name: 'Pear/Pea',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/213631/pears-group-shot-landscape-copy.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 30,
          name: 'pineapple',
          display_name: 'Pineapple/Paināporo',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/79584/pinnapple.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 31,
          name: 'plum',
          display_name: 'Plum/Paramu',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/13910/plums.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 32,
          name: 'raspberry',
          display_name: 'Raspberry/Rāhipere',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/15187/raspberries2.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 33,
          name: 'redcurrant',
          display_name: 'Redcurrants',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/15202/redcurrants.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 34,
          name: 'strawberry',
          display_name: 'Strawberry/Rōpere',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/13961/strawberry.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 35,
          name: 'tamarillo',
          display_name: 'Tamarillo/Tamariro',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/21897/Tamarillo-SM.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 36,
          name: 'tangelo',
          display_name: 'Tangelo/Tānero',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/36390/tangelo-2.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 37,
          name: 'watermelon',
          display_name: 'Watermelon/Waimerengi',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/79561/watermelon.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 38,
          name: 'rock melon',
          display_name: 'Rock Melon/Rāka merengi',
          type: 'fruit',
          image_url:
            'https://www.5aday.co.nz/media/15072/rock.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 39,
          name: 'globe artichoke',
          display_name: 'Artichoke/Atihoka - Globe',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/15217/artichoke-green-globe.bmp?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 40,
          name: 'jerusalem artichoke',
          display_name: 'Artichoke/Atihoka - Jerusalem',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/15241/artichoke-j.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 41,
          name: 'asparagus',
          display_name: 'Asparagus/Apareka',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/5325/asparagus.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 42,
          name: 'beans',
          display_name: 'Bean/Pīni',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/77450/beans.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 43,
          name: 'beetroot',
          display_name: 'Beetroot/Tāmore whero',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/5356/biet.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 44,
          name: 'broccoli',
          display_name: 'Broccoli/Pūpihi',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/214160/steamed-broccoli-with-miso-vinaigrette-1.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 45,
          name: 'broccolini',
          display_name: 'Broccolini',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/77494/broccolini.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 46,
          name: 'brussel sprouts',
          display_name: 'Brussels sprouts/Aonanī',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/15286/brussels-sprouts.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 47,
          name: 'buttercup squash',
          display_name: 'Buttercup Squash',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/78141/buttercup.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 48,
          name: 'butternut',
          display_name: 'Butternut',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/78252/pumpkin-butternut.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 49,
          name: 'cabbage',
          display_name: 'Cabbage/Kāpeti',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/78234/cabbage-green.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 50,
          name: 'capsicum',
          display_name: 'Capsicum/Rapikama',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/5449/capsicum.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 51,
          name: 'carrot',
          display_name: 'Carrot/Kāroti',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/77595/carrots.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 52,
          name: 'cauliflower',
          display_name: 'Cauliflower/Kareparāoa',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/5473/cauliflower.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 53,
          name: 'celery',
          display_name: 'Celery/Herewī',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/5488/celery.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 54,
          name: 'chilli',
          display_name: 'Chilli/Hiri',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/13764/chilli.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 55,
          name: 'courgette',
          display_name: 'Courgette/Kamoriki',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/5512/courgettes.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 56,
          name: 'cucumber',
          display_name: 'Cucumber/Kūkama',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/5542/cucumber-telegraph.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 57,
          name: 'eggplant',
          display_name: 'Eggplant/Otahua',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/5557/aubergine.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 58,
          name: 'fennel',
          display_name: 'Fennel/Huahaunga',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/77499/fennel.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 59,
          name: 'fresh herbs',
          display_name: 'Fresh Herbs/Amiami',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/214246/herbs-libby-2019.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 60,
          name: 'garlic',
          display_name: 'Garlic/Kārika',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/77778/garlic.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 61,
          name: 'ginger',
          display_name: 'Ginger/Tinitia',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/13795/ginger-2.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 62,
          name: 'kale',
          display_name: 'Kale/Kapekape',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/135744/kale-1-copy.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 63,
          name: 'kohlrabi',
          display_name: 'Kohlrabi/Koapi',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/77613/kohlrabi-2.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 64,
          name: 'kumara',
          display_name: 'Kūmara',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/5587/kumara.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 65,
          name: 'leek',
          display_name: 'Leeks/Rikiroa',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/77952/leeks-cropped.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 66,
          name: 'lettuce',
          display_name: 'Lettuce/Rētihi',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/5602/letuce.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 67,
          name: 'mushroom',
          display_name: 'Mushroom/Harore',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/144495/mushroom-medley-copy-cropped.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 68,
          name: 'onion',
          display_name: 'Onion/Riki',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/78283/onions-q.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 69,
          name: 'parsnip',
          display_name: 'Parsnip/Tāmore mā',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/15325/parsnips.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 70,
          name: 'pea',
          display_name: 'Peas/Pī',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/79374/peas.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 71,
          name: 'potato',
          display_name: 'Potato/Rīwai',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/77729/potatoes-3-colours.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 72,
          name: 'pumpkin',
          display_name: 'Pumpkin/Paukena',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/78159/pumpkin.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 73,
          name: 'puha',
          display_name: 'Pūhā',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/15355/puha.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 74,
          name: 'radish',
          display_name: 'Radish/Rarihi ',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/15370/radish.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 75,
          name: 'salad greens',
          display_name: 'Salad Greens',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/5737/salad-greens2.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 76,
          name: 'silverbeet',
          display_name: 'Silver Beet/Korare',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/79418/silverbeet.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 77,
          name: 'snow peas',
          display_name: 'Snow Peas',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/79492/snow-peas.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 78,
          name: 'spinach',
          display_name: 'Spinach/Kōkihi',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/79579/spinach.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 79,
          name: 'spring onion',
          display_name: 'Spring Onions/Rikiriki',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/35359/Spring-Onions-small.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 80,
          name: 'bean sprouts',
          display_name: 'Bean Sprouts',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/80997/sprouts.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 81,
          name: 'swede',
          display_name: 'Swede/Tuwīti tānapu',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/15409/swede-2.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 82,
          name: 'corn',
          display_name: 'Sweetcorn/Kānga',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/78177/sweetcorn.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 83,
          name: 'taewa',
          display_name: 'Taewa',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/15340/taewa-maori-potato.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 84,
          name: 'taro',
          display_name: 'Taro',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/15424/taro.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 85,
          name: 'tomato',
          display_name: 'Tomato/Tōmato',
          type: 'vegetable',
          image_url: '',
        },
        {
          id: 86,
          name: 'turnip',
          display_name: 'Turnip/Tōnape',
          type: 'vegetable',
          image_url: '',
        },
        {
          id: 87,
          name: 'watercress',
          display_name: 'Watercress/Wātakirihi',
          type: 'vegetable',
          image_url: '',
        },
        {
          id: 88,
          name: 'witloof',
          display_name: 'Witloof',
          type: 'vegetable',
          image_url: '',
        },
        {
          id: 89,
          name: 'yam',
          display_name: 'Yam/Uwhi',
          type: 'vegetable',
          image_url: '',
        },
        {
          id: 90,
          name: 'rhubarb',
          display_name: 'Rhubarb/Rūpapa',
          type: 'vegetable',
          image_url:
            'https://www.5aday.co.nz/media/77662/rhubarb.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
      ])
    })
}
