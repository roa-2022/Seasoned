exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('fruits')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        {
          id: 1,
          name: 'Apple/Āporo',
          image:
            'https://www.5aday.co.nz/media/73967/imagegen.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 2,
          name: 'Apricot/Aperekoti',
          image:
            'https://www.5aday.co.nz/media/14967/apricot.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 3,
          name: 'Avocado/Awakato',
          image:
            'https://www.5aday.co.nz/media/5210/avocado-one.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 4,
          name: 'Banana/Panana',
          image:
            'https://www.5aday.co.nz/media/585/banana-main.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 5,
          name: 'Blackberry/Parakipere',
          image:
            'https://www.5aday.co.nz/media/14982/blackberries.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 6,
          name: 'Blackcurrants',
          image:
            'https://www.5aday.co.nz/media/14997/blackcurrants.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 7,
          name: 'Blueberry/Rēua',
          image:
            'https://www.5aday.co.nz/media/15012/blueberry.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 8,
          name: 'Boysenberries',
          image:
            'https://www.5aday.co.nz/media/15027/boysenberries.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 9,
          name: 'Cherry/Tiere',
          image:
            'https://www.5aday.co.nz/media/213574/cherry-banner-2017.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 10,
          name: 'Feijoa/Whitoa',
          image:
            'https://www.5aday.co.nz/media/14943/feijoa.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 11,
          name: 'Gooseberry/Kuihipere',
          image:
            'https://www.5aday.co.nz/media/15057/gooseberries.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 12,
          name: 'Grapefruit/Huakerepe',
          image:
            'https://www.5aday.co.nz/media/13718/grapefruit.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 13,
          name: 'Grape/Kerepi - Black',
          image:
            'https://www.5aday.co.nz/media/13734/grapes.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 14,
          name: 'Grape/Kerepi - Green',
          image:
            'https://www.5aday.co.nz/media/144665/grapes-green-copy.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 15,
          name: 'Honeydew Melon',
          image:
            'https://www.5aday.co.nz/media/15108/honey.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 16,
          name: 'Kiwiberries',
          image:
            'https://www.5aday.co.nz/media/192460/kiwiberries.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 17,
          name: 'Kiwifruit/Huakiwi',
          image:
            'https://www.5aday.co.nz/media/144823/gold-kiwifruit-copy.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 18,
          name: 'Kiwifruit/Huakiwi - Gold',
          image:
            'https://www.5aday.co.nz/media/144823/gold-kiwifruit-copy.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 19,
          name: 'Kiwifruit/Huakiwi - Green',
          image:
            'https://www.5aday.co.nz/media/3435/kiwifruit-lr.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 20,
          name: 'Lemon/Rēmana',
          image:
            'https://www.5aday.co.nz/media/77644/lemons.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 21,
          name: 'Lime/Raima',
          image:
            'https://www.5aday.co.nz/media/15087/limes.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 22,
          name: 'Mandarin/Manarini',
          image:
            'https://www.5aday.co.nz/media/15093/mandarin-product-shot.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 23,
          name: 'Mango',
          image:
            'https://www.5aday.co.nz/media/141458/mango-copy.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 24,
          name: 'Nashi',
          image:
            'https://www.5aday.co.nz/media/13840/nashipear.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 25,
          name: 'Nectarine/Pītiti kiri',
          image:
            'https://www.5aday.co.nz/media/15138/nectarine.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 26,
          name: 'Orange/Ārani - Navel',
          image:
            'https://www.5aday.co.nz/media/13855/orangenavel.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 27,
          name: 'Orange/Ārani - Valencia',
          image:
            'https://www.5aday.co.nz/media/5255/orang.png?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 28,
          name: 'Passionfruit/Kōhia',
          image:
            'https://www.thespruceeats.com/thmb/8N3vBJJt-hSQm8SHyFkq9d-8c8M=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-185227039-589d5b065f9b58819ce64410.jpg',
        },
        {
          id: 29,
          name: 'Peach/Pītiti',
          image:
            'https://www.5aday.co.nz/media/15162/peaches.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 30,
          name: 'Pear/Pea',
          image:
            'https://www.5aday.co.nz/media/213631/pears-group-shot-landscape-copy.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 31,
          name: 'Pineapple/Paināporo',
          image:
            'https://www.5aday.co.nz/media/79584/pinnapple.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 32,
          name: 'Plum/Paramu',
          image:
            'https://www.5aday.co.nz/media/13910/plums.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 33,
          name: 'Raspberry/Rāhipere',
          image:
            'https://www.5aday.co.nz/media/15187/raspberries2.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 34,
          name: 'Redcurrants',
          image:
            'https://www.5aday.co.nz/media/15202/redcurrants.jpeg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 35,
          name: 'Strawberry/Rōpere',
          image:
            'https://www.5aday.co.nz/media/13961/strawberry.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 36,
          name: 'Tamarillo/Tamariro',
          image:
            'https://www.5aday.co.nz/media/21897/Tamarillo-SM.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 37,
          name: 'Tangelo/Tānero',
          image:
            'https://www.5aday.co.nz/media/36390/tangelo-2.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 38,
          name: 'Watermelon/Waimerengi',
          image:
            'https://www.5aday.co.nz/media/79561/watermelon.jpg?&width=800&height=400&anchor=top&mode=crop',
        },
        {
          id: 39,
          name: 'Rock Melon/Rāka merengi',
          image:
            'https://www.5aday.co.nz/media/15072/rock.png?&width=800&height=400&anchor=top&mode=crop',
        },
      ])
    })
}
