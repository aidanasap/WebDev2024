export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img_url: string;
  url: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Heimish All Clean Balm бальзам 120 мл',
    price: 5761,
    description:
      'тип: бальзам,объем: 120 мл,тип кожи: для всех типов,страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8a/h03/32773970559006/heimish-all-clean-balm-mnogofunkcionalnyj-dla-lica-120-ml-100341040-1-Container.jpg',

    url: 'https://kaspi.kz/shop/p/heimish-all-clean-balm-bal-zam-120-ml-100341040/?c=750000000',
    rating: 4.89,
  },
  {
    id: 2,
    name: 'Dr.Ceuracle Pro Balance Pure Cleansing гидрофильное масло',
    price: 6714,
    description:
      'тип: гидрофильное масло,объем: 155 мл,тип кожи: для всех типов,sстрана производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h9b/h4e/51067154464798/dr-ceuracle-pro-balance-pure-cleansing-gidrofil-noe-maslo-150-ml-101481415-1.jpg',
    url: 'https://kaspi.kz/shop/p/dr-ceuracle-pro-balance-pure-cleansing-gidrofil-noe-maslo-155-ml-101481415/?c=750000000',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Heimish All Clean Green Foam пенка 150 мл',
    price: 3187,
    description:
      'тип: пенка, объем: 150 мл,тип кожи: для всех типов чувствительная,страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/he1/hf2/49838117650462/heimish-all-clean-green-foam-150-ml-100397062-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/heimish-all-clean-green-foam-penka-150-ml-100397062/?c=750000000',
    rating: 4.79,
  },

  {
    id: 4,
    name: 'Dr.Ceuracle Pro Balance Creamy Cleansing Foam пенка для лица',
    price: 4292,
    description:
      'тип: пенка,объем: 150 мk, тип кожи: для всех типов,страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/h27/33085968613406/dr-ceuracle-pro-balance-creamy-cleansing-foam-150-ml-100904391-1-Container.jpg',
    url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/h27/33085968613406/dr-ceuracle-pro-balance-creamy-cleansing-foam-150-ml-100904391-1-Container.jpg',
    rating: 4.77,
  },
  {
    id: 5,
    name: 'MEDI-PEEL Algo-Tox Deep Clear пенка 150 мл',
    price: 4397,
    description:
      'тип: пенка,объем: 150 мл,тип кожи: для всех типов,страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h0a/he1/32765916545054/medi-peel-algo-tox-deep-clear-150-ml-100272231-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/medi-peel-algo-tox-deep-clear-penka-150-ml-100272231/?c=750000000',
    rating: 4.8,
  },
  {
    id: 6,
    name: 'Dr. Jart Dermaclear Micro pH Foam гель 120 мл',
    price: 4899,
    description:
      'тип: гель,объем: 120 мл,тип кожи: чувствительная,страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h24/h84/31800017420318/dr-jart-dermaclear-micro-ph-foam-21900269-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/dr-jart-dermaclear-micro-ph-foam-gel-120-ml-21900269/?c=750000000',
    rating: 4.79,
  },
  {
    id: 7,
    name: 'By Wishtrend Green Tea & Enzyme Powder Wash энзимная',
    price: 8880,
    description:
      'тип: энзимная пудра,объем: 110 мл,тип кожи: для всех типов,страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h67/hde/50536185757726/by-wishtrend-green-tea-enzyme-powder-wash-enzimnaa-pudra-110-ml-104744971-1.jpg',
    url: 'https://kaspi.kz/shop/p/by-wishtrend-green-tea-enzyme-powder-wash-enzimnaja-pudra-110-ml-104744971/?c=750000000',
    rating: 4.85,
  },
  {
    id: 8,
    name: 'Dr. Jart Ctrl A Teatreement Cleansing Foam гель-пенка 120',
    price: 5817,
    description:
      'тип: энзимная пудра,объем: 110 мл,тип кожи: для всех типов,страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h5e/had/32920034607134/dr-jart-teatreement-cleansing-foam-mousse-nettoyante-100670034-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/dr-jart-ctrl-a-teatreement-cleansing-foam-gel--penka-120-ml-100670034/?c=750000000',
    rating: 4.78,
  },
  {
    id: 9,
    name: 'COSRX Low pH Good Morning Gel Cleanser гель-пенка 150 мл',
    price: 3328,
    description:
      'тип: гель-пенка,объем: 150 мл,тип кожи: жирная, ,комбинированная,страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h88/32617832644638/cosrx-low-ph-good-morning-gel-cleanser-150-ml-100375636-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/cosrx-low-ph-good-morning-gel-cleanser-gel--penka-150-ml-100375636/?c=750000000',
    rating: 4.73,
  },
  {
    id: 10,
    name: 'Sulwhasoo Gentle cleansing oil гидрофильное масло 50 мл',
    price: 1969,
    description:
      'тип: гидрофильное масло,объем: 50 мл,тип кожи: зрелая, ,нормальная, ,сухая чувствительная,страна производства: Корея',
    img_url:
      'https://resources.cdn-kaspi.kz/img/m/p/h09/hb9/64368900014110.jpg?format=preview-medium',
    url: 'https://kaspi.kz/shop/p/sulwhasoo-gentle-cleansing-oil-gidrofil-noe-maslo-50-ml-103287184/?c=750000000',
    rating: 4.74,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
