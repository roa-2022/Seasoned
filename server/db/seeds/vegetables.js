exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('vegetables')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('vegetables').insert([
        {
          id: 1,
          name: 'Artichoke/Atihoka - Globe',
          image:
            'https://www.5aday.co.nz/media/15217/artichoke-green-globe.bmp?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 2,
          name: 'Artichoke/Atihoka - Jerusalem',
          image:
            'https://www.5aday.co.nz/media/15241/artichoke-j.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 3,
          name: 'Asparagus/Apareka',
          image:
            'https://www.5aday.co.nz/media/5325/asparagus.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 4,
          name: 'Bean/Pīni',
          image:
            'https://www.5aday.co.nz/media/77450/beans.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 5,
          name: 'Beetroot/Tāmore whero',
          image:
            'https://www.5aday.co.nz/media/5356/biet.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 6,
          name: 'Broccoli/Pūpihi',
          image:
            'https://www.5aday.co.nz/media/214160/steamed-broccoli-with-miso-vinaigrette-1.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 7,
          name: 'Broccolini',
          image:
            'https://www.5aday.co.nz/media/77494/broccolini.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 8,
          name: 'Brussels sprouts/Aonanī',
          image:
            'https://www.5aday.co.nz/media/15286/brussels-sprouts.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 9,
          name: 'Buttercup Squash',
          image:
            'https://www.5aday.co.nz/media/78141/buttercup.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 10,
          name: 'Butternut',
          image:
            'https://www.5aday.co.nz/media/78252/pumpkin-butternut.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 11,
          name: 'Cabbage/Kāpeti',
          image:
            'https://www.5aday.co.nz/media/78234/cabbage-green.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 12,
          name: 'Capsicum/Rapikama',
            'https://www.5aday.co.nz/media/5449/capsicum.png?&width=800&height=400&anchor=top&mode=crop',
          image: '',
        },
        {
          id: 13,
          name: 'Carrot/Kāroti',
          image:
            'https://www.5aday.co.nz/media/77595/carrots.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 14,
          name: 'Cauliflower/Kareparāoa',
          image:
            'https://www.5aday.co.nz/media/5473/cauliflower.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 15,
          name: 'Celery/Herewī',
          image:
            'https://www.5aday.co.nz/media/5488/celery.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 16,
          name: 'Chilli/Hiri',
          image:
            'https://www.5aday.co.nz/media/13764/chilli.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 17,
          name: 'Courgette/Kamoriki',
          image:
            'https://www.5aday.co.nz/media/5512/courgettes.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 18,
          name: 'Cucumber/Kūkama',
          image:
            'https://www.5aday.co.nz/media/5542/cucumber-telegraph.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 19,
          name: 'Eggplant/Otahua',
          image:
            'https://www.5aday.co.nz/media/5557/aubergine.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 20,
          name: 'Fennel/Huahaunga',
          image:
            'https://www.5aday.co.nz/media/77499/fennel.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 21,
          name: 'Fresh Herbs/Amiami',
          image:
            'https://www.5aday.co.nz/media/214246/herbs-libby-2019.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 22,
          name: 'Garlic/Kārika',
          image:
            'https://www.5aday.co.nz/media/77778/garlic.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 23,
          name: 'Ginger/Tinitia',
          image:
            'https://www.5aday.co.nz/media/13795/ginger-2.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 24,
          name: 'Kale/Kapekape',
          image:
            'https://www.5aday.co.nz/media/135744/kale-1-copy.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 25,
          name: 'Kohlrabi/Koapi',
          image:
            'https://www.5aday.co.nz/media/77613/kohlrabi-2.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 26,
          name: 'Kūmara',
          image:
            'https://www.5aday.co.nz/media/5587/kumara.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 27,
          name: 'Leeks/Rikiroa',
          image:
            'https://www.5aday.co.nz/media/77952/leeks-cropped.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 28,
          name: 'Lettuce/Rētihi',
          image:
            'https://www.5aday.co.nz/media/5602/letuce.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 29,
          name: 'Mushroom/Harore',
          image:
            'https://www.5aday.co.nz/media/144495/mushroom-medley-copy-cropped.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 30,
          name: 'Onion/Riki',
          image:
            'https://www.5aday.co.nz/media/78283/onions-q.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 31,
          name: 'Parsnip/Tāmore mā',
          image:
            'https://www.5aday.co.nz/media/15325/parsnips.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 32,
          name: 'Peas/Pī',
          image:
            'https://www.5aday.co.nz/media/79374/peas.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 33,
          name: 'Potato/Rīwai',
          image:
            'https://www.5aday.co.nz/media/77729/potatoes-3-colours.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 34,
          name: 'Pumpkin/Paukena',
          image:
            'https://www.5aday.co.nz/media/78159/pumpkin.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 35,
          name: 'Pūhā',
          image:
            'https://www.5aday.co.nz/media/15355/puha.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 36,
          name: 'Radish/Rarihi ',
          image:
            'https://www.5aday.co.nz/media/15370/radish.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 37,
          name: 'Salad Greens',
          image:
            'https://www.5aday.co.nz/media/5737/salad-greens2.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 37,
          name: 'Silver Beet/Korare',
          image:
            'https://www.5aday.co.nz/media/79418/silverbeet.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 37,
          name: 'Snow Peas',
          image:
            'https://www.5aday.co.nz/media/79492/snow-peas.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 37,
          name: 'Spinach/Kōkihi',
          image:
            'https://www.5aday.co.nz/media/79579/spinach.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 37,
          name: 'Spring Onions/Rikiriki',
          image:
            'https://www.5aday.co.nz/media/35359/Spring-Onions-small.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 37,
          name: 'Bean Sprouts',
          image:
            'https://www.5aday.co.nz/media/80997/sprouts.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 37,
          name: 'Swede/Tuwīti tānapu',
          image:
            'https://www.5aday.co.nz/media/15409/swede-2.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 38,
          name: 'Sweetcorn/Kānga',
          image:
            'https://www.5aday.co.nz/media/78177/sweetcorn.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 39,
          name: 'Taewa',
          image:
            'https://www.5aday.co.nz/media/15340/taewa-maori-potato.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 39,
          name: 'Taro',
          image:
            'https://www.5aday.co.nz/media/15424/taro.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 40,
          name: 'Tomato/Tōmato',
          image: '',
        },
        {
          id: 41,
          name: 'Turnip/Tōnape',
          image: '',
        },
        {
          id: 42,
          name: 'Watercress/Wātakirihi',
          image: '',
        },
        {
          id: 43,
          name: 'Witloof',
          image: '',
        },
        {
          id: 44,
          name: 'Yam/Uwhi',
          image: '',
        },
        {
          id: 45,
          name: 'Rhubarb/Rūpapa',
          image:
            'https://www.5aday.co.nz/media/77662/rhubarb.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
      ])
    })
}
