export interface Product{
 
  id: number;
  name: string;
  price: number;
  description: string;
  url?:string;
  img:string;
  rating:number;
  link? : string ;
  category:string;
  likes:number;
}

export const products : Product[]=[
  {
    id: 1,
    name: 'iPhone 11 128Gb Slim',
    price: 293040,
    description: 'Смартфон Apprating:4le iPhone 11 128Gb Slim Box черный',
    url:"https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg",
    rating:4.5,
    category:"apple",
    likes:0
    // link : "https://web.telegram.org/z/#1211662583"
  },
  {
    id: 2,
    name: 'iPhone 14 256Gb',
    price: 497240 ,
    description: 'Apple iPhone 14 256Gb Blue Smartphone',
    url:"https://kaspi.kz/shop/p/apple-iphone-14-256gb-goluboi-106363155/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hef/h97/63073056096286/apple-iphone-14-128gb-goluboj-106363155-1.jpg",
    rating: 4.75,
    category:"apple",
    likes:0
  },
  {
    id: 3,
    name: 'iPhone 14 Pro Max 256Gb',
    price: 693739,
    description: 'Apple iPhone 14 Pro Max 256Gb Smartphone Black',
    url:"https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-chernyi-106363289/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h6a/63073423065118/apple-iphone-14-pro-max-128gb-cernyj-106363289-1.jpg",
    rating:4.9,
    category:"apple",
    likes:0
  },
  {
  id: 13,
  name: 'iPhone 13 128Gb',
  price: 365320,
 description: 'Apple iPhone 13 128Gb Smartphone Blue',
  url:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000#!/item",
  img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h1d/46392661737502/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg",
  rating:4.9,
  category:"apple",
  likes:0
},
{
  id: 14,
  name: 'iPhone 13 128Gb',
  price: 369510,
  description: 'Apple iPhone 13 128Gb Pink Smartphone',
  url:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000#!/item",
  img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg",
  rating:4.9,
  category:"apple",
  likes:0
},

  {
    id: 4,
    name: 'Galaxy A23 6 GB',
    price: 104605,
    description: 'Samsung Galaxy A23 Smartphone 6GB/128GB Black',
    url:"https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000&tab=reviews#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg",
    rating:4.2,
    category:"samsung",
    likes:0
  },
  {
    id: 5,
    name: 'Galaxy A33 5G 6 GB/128 GB',
    price: 129670 ,
    description: 'Samsung Galaxy A33 5G 6GB/128GB Smartphone Black',
    url:"https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h8c/49894748160030/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg",
    rating:4,
    category:"samsung",
    likes:0
  },
  {
    id: 6,
    name: 'Samsung Galaxy A33 5G',
    price: 129490,
    description: 'Samsung Galaxy A33 5G 6GB/128GB Blue Smartphone',
    url:"https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-goluboi-104399147/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc5/h03/49897401188382/smartfon-samsung-galaxy-a33-5g-128gb-sm-a336blbgskz-blue-104399147-1.jpg",
    rating:4.15,
    category:"samsung",
    likes:0
  },
  {
    id: 15,
    name: 'Galaxy A03 Core',
    price: 36625 ,
    description: 'Samsung Galaxy A03 Core 2GB/32GB Smartphone Black',
    url:"https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-chernyi-103153817/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha4/hce/47719147929630/samsung-galaxy-a03-core-2-32gb-cernyj-103153817-1.jpg",
    rating:4,
    category:"samsung",
    likes:0
  },
  {
    id: 16,
    name: 'Galaxy A04e 4 ',
    price: 60980 ,
    description: 'Samsung Galaxy A04e 4GB/128GB Bronze Smartphone',
    url:"https://kaspi.kz/shop/p/samsung-galaxy-a04e-4-gb-128-gb-bronzovyi-108440376/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h7e/67882490363934/smartfon-samsung-galaxy-a04e-4-128gb-sm-a042fzckskz-copper-108440376-1.jpg",
    rating:4,
    category:"samsung",
    likes:0
  },
  {
    id: 7,
    name: 'Xiaomi Redmi Note 11S',
    price: 128350,
    description: 'Xiaomi Red Note 10 Pro Smartphone 8GB/256GB Grey',
    url:"https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg",
    rating:4.5,
    category:"xiaomi",
    likes:0
  },
  {
    id: 8,
    name: 'Xiaomi Red Note 11S',
    price: 114880 ,
    description: 'Xiaomi Red Note 11S Smartphone 8GB/128GB Grey',
    url:"https://kaspi.kz/shop/p/xiaomi-redmi-note-11s-8-gb-128-gb-seryi-104292774/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h50/49684457259038/xiaomi-redmi-note-11s-6-gb-128-gb-seryj-104292774-1.jpg",
    rating:3.9,
    category:"xiaomi",
    likes:0
    

  },
  {
    id: 9,
    name: 'Xiaomi Redmi Note 11 Pro',
    price: 128450,
    description: 'Xiaomi Red Note 11 Pro Smartphone 8GB/128GB White',
    url:"https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-belyi-104020427/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/h17/49217235550238/xiaomi-redmi-note-11-pro-8-128gb-seryj-104020427-1.jpg",
    rating:4.27,
    category:"xiaomi",
    likes:0

  },
  {
    id: 17,
    name: 'Xiaomi Redmi 10 2022',
    price: 81177,
    description: 'Xiaomi Red Note 10 Pro Smartphone 8GB/256GB Grey',
    url:"https://kaspi.kz/shop/p/xiaomi-redmi-10-2022-4-gb-128-gb-seryi-105170511/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h96/51310464696350/xiaomi-redmi-10-2022-4-gb-128-gb-seryi-105170511-1.jpg",
    rating:4.5,
    category:"xiaomi",
    likes:0

  },
  {
    id: 18,
    name: 'Xiaomi Redmi 9A ',
    price: 39899,
    description: 'Xiaomi Redmi 9A 2GB/32GB Green Smartphone',
    url:"https://kaspi.kz/shop/p/xiaomi-redmi-9a-2-gb-32-gb-zelenyi-100436948/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/ha0/50489568362526/xiaomi-redmi-9a-2-32gb-zelenyj-100436948-1-Container.jpg",
    rating:4.5,
    category:"xiaomi",
    likes:0

  },
  {
    id: 10,
    name: 'Huawei nova Y70',
    price: 104605,
    description: 'Huawei nova 70 Smartphone 4GB/128GB Black',
    url:"https://kaspi.kz/shop/p/huawei-nova-y70-4-gb-128-gb-chernyi-105191899/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg",
    rating:3.95,
    category:"huawei",
    likes:0

  },
  {
    id: 11,
    name: 'Huawei Nova Y90',
    price: 129765 ,
    description: 'Huawei Nova Y90 Smartphone 4GB/128GB Green',
    url:"hhttps://kaspi.kz/shop/p/huawei-nova-y90-4-gb-128-gb-zelenyi-106096427/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/hd6/61766061490206/huawei-nova-y90-4-gb-128-gb-zelenyj-106096427-1.jpg",
    rating:4.6,
    category:"huawei",
    likes:0
  },
  {
    id: 12,
    name: ' Huawei nova 10',
    price: 259890,
    description: 'Huawei nova 10 Smartphone 8GB/128GB silver',
    url:"https://kaspi.kz/shop/p/huawei-nova-10-8-gb-128-gb-serebristyi-107221419/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/ha5/64493127335966/huawei-nova-10-8-gb-128-gb-serebristyi-podarok-watch-fit-2-i-selfie-stick-pro-107221419-1.jpg",
    rating:4.6,
    category:"huawei",
    likes:0
  },
  {
    id: 19,
    name: 'Huawei nova 10 SE',
    price: 184890,
    description: 'Huawei nova 10 SE Smartphone 8GB/128GB Blackk',
    url:"https://kaspi.kz/shop/p/huawei-nova-10-se-8-gb-128-gb-chernyi-107221515/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/hf8/64493888733214/huawei-nova-10-se-8-gb-128-gb-chernyi-podarok-huawei-y5p-i-selfie-stick-pro-107221515-1.jpg",
    rating:3.95,
    category:"huawei",
    likes:0
  },
  {
    id: 20,
    name: 'Huawei Nova 8i ',
    price: 189890,
    description: 'Huawei Nova 8i 6/128Gb Smartphone Blue',
    url:"https://kaspi.kz/shop/p/huawei-nova-8i-6-128gb-sinii-102784716/?c=750000000#!/item",
    img:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/h5b/46985011331102/huawei-nova-8i-neumann-sinij-102784716-1.jpg",
    rating:3.95,
    category:"huawei",
    likes:0
  }
];
