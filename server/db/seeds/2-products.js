/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('Products').insert([
    {
      id: 'one-piece-luffy',
      name: 'One Piece - Luffy',
      description:
        "Set Sail for One Piece!\nMonkey. D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who'll never give up until he's claimed the greatest treasure on Earth: the Legendary One Piece!\nThis Pop! features Monkey D. Luffy. Add him to your collection today!",
      image_name: 'one-piece-luffy.jpg',
      cost: 2699,
      stock: 100,
      category_id: 'toys',
    },
    {
      id: 'stranger-things-eleven',
      name: 'Stranger Things - Eleven',
      description:
        'Every Ending Has a Beginning\nIn 1986, the party has been split. In Hawkins, life is gradually returning to normal. Mike and Dustin have joined their high school`s "Hellfire Club," a D&D club led by the eccentric Eddie Munson. Max struggles to grieve Billy`s death. Will and El are adjusting to life in California, away from their friends. But on spring break, students of Hawkins High keep turning up dead...\nThis Pop! Vinyl figure features Eleven, as she appears during the Stranger Things season 1.',
      image_name: 'stranger-things-eleven.jpg',
      cost: 2699,
      stock: 100,
      category_id: 'toys',
    },
    {
      id: 'one-piece-donquixote',
      name: 'One Piece - Donquixote',
      description:
        'Set Sail for One Piece!\nDonquixote Doflamingo, nicknamed "Heavenly Yaksha", is the captain of the Donquixote Pirates, a former Shichibukai with a frozen bounty of 340,000,000, the most influential underworld broker under the codename "Joker", and is a former World Noble of the Donquixote Family descent.\nThis Pop! features Monkey Donquixote Doflamingo. Add him to your collection today!',
      image_name: 'one-piece-donquixote.jpg',
      cost: 2699,
      stock: 100,
      category_id: 'toys',
    },
    {
      id: 'one-piece-usopp',
      name: 'One Piece - Usopp',
      description:
        'Set Sail for One Piece!\nUsopp is the sniper of the Straw Hat Pirates, and the former captain of the Usopp Pirates. When Usopp was first introduced, he was often (comically) labeled as the "Liar" of the Straw Hat Pirates. He was born in Syrup Village, and was first mentioned by Yasopp, his father.\nThis Pop! features Monkey Usopp. Add him to your collection today!',
      image_name: 'one-piece-usopp.jpg',
      cost: 2699,
      stock: 100,
      category_id: 'toys',
    },
    {
      id: 'naruto-sasuke',
      name: 'Naruto - Sasuke',
      description:
        'Hero of the Hidden Leaf\nNaruto Uzumaki is a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is in two parts, the first set in Naruto`s pre-teen years, and the second in his teens. The series is based on two one-shot manga by Kishimoto: Karakuri (1995), which earned Kishimoto an honorable mention in Shueisha`s monthly Hop Step Award the following year, and Naruto (1997).\nThis Pop! features Sasuke Uchiha. Add him to your collection today!',
      image_name: 'naruto-sasuke.jpg',
      cost: 2699,
      stock: 100,
      category_id: 'toys',
    },
    {
      id: 'one-piece-portgas',
      name: 'One Piece - Portgas',
      description:
        'Set Sail for One Piece!\nPortgas D. Ace, born as Gol D. Ace and nicknamed "Fire Fist" Ace, was the adopted older brother of Luffy and Sabo, and son of the late Pirate King, Gol D. Roger and his lover, Portgas D. Rouge. He was adopted by Monkey D. Garp as wished by Roger to him before his birth. Ace was the 2nd division commander of the Whitebeard Pirates and one-time captain of the Spade Pirates.\nThis Pop! features Portgas D. Ace. Add him to your collection today!',
      image_name: 'one-piece-portgas.jpg',
      cost: 2699,
      stock: 100,
      category_id: 'toys',
    },
    {
      id: 'the-lord-of-the-rings-legolas',
      name: 'The Lord of the Rings - Legolas',
      description:
        'One Ring to Rule Them All\nThe future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins, who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.\nLegolas was a Sindar Elf who joined the Fellowship of the Ring in the Third Age. Son of the Elven king Thranduil of Mirkwood, Legolas was Mirkwood`s prince, a messenger, and a master archer.\nThis Pop! features Legolas Greenleaf. Add him to your collection today!',
      image_name: 'the-lord-of-the-rings-legolas.jpg',
      cost: 2699,
      stock: 100,
      category_id: 'toys',
    },
    {
      id: 'deddy-bears-series-3',
      name: 'Deddy Bears Series 3',
      description:
        'Introducing Deddy Bears Series 3, the ultimate spooky collectible. These super impulsive 12cm collectibles come in surprise blind bag packaging, making them an exciting addition to the Deddy Bears range. Open the blind bag to reveal one of six plush bears featuring a handy bag clip, so a piece of them can be with you, wherever you go! Sold in a counter display unit of 20 assorted pieces, the Series 3 blind bags come in 6 Deddy Bear characters which include Dr. Beargrave, Skidmark, Bulgebear, Doodlebear, Gutsybear and Dripps. These Deddy Bear Blind Bags are perfect for tweens, collectors, and fright fans alike!',
      image_name: 'deddy-bears-series.jpg',
      cost: 1199,
      stock: 100,
      category_id: 'blind-bags',
    },
    {
      id: 'shinwoo-vampire-candy',
      name: 'Shinwoo - Vampire Candy',
      description:
        'Excessive sweetness and love, like a mysterious old castle, is both darngerous and fascinating\nSouth Korea-based artist 신우 Shin Woo. Powered by Finding UNicorn are back with possibly the 2nd best series to date! Ready to open up shop and with the Halloween season in full swing over at FU comes Shin Woo`s Vampire Candy Shop blind box!  ShinWoo creations hit our sweet tooth sensors over 7 years ago with” Tooth Friends”, Hold on as these ones are creepy yet cute. Fast forward to the present day and she`s back with another blind box series powered by Finding UNicorn. 10 regular, 5 special and 2 hidden.',
      image_name: 'shinwoo-vampire-candy.jpg',
      cost: 2999,
      stock: 100,
      category_id: 'blind-bags',
    },
    {
      id: 'be-your-q-baby',
      name: 'Be Your Q Baby',
      description:
        'Be Your Q Baby Blind Box Series by Kasing Lung x How2work\nKasing Lung and How2work are back with a new blind box series! Be Your Q Baby features 12 different designs, each with a unique personality. Each blind box contains one random figure, so you never know what you`ll get! Collect them all and bring some fun to your collection today!',
      image_name: 'be-your-q-baby.jpg',
      cost: 2999,
      stock: 100,
      category_id: 'blind-bags',
    },
  ])
}
