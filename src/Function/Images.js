import _1 from '@/assets/images/1.jpeg'
import _2 from '@/assets/images/2.jpeg'
import _3 from '@/assets/images/3.jpeg'
import _4 from '@/assets/images/4.jpeg'
import _5 from '@/assets/images/5.jpeg'
import _6 from '@/assets/images/6.jpeg'
import _7 from '@/assets/images/7.jpeg'
import _8 from '@/assets/images/8.jpeg'
import _9 from '@/assets/images/9.jpeg'
import _10 from '@/assets/images/10.jpeg'
import _11 from '@/assets/images/11.jpeg'
import _12 from '@/assets/images/12.jpeg'
import _13 from '@/assets/images/13.jpeg'

const loopingData = (params, isTrue = false) => {

    const temp = [];

    for (let i = 0; i < 13; i++) {

    const nameImage = '_'.concat(i);
        
    const cek = isTrue ? _1 : params.concat(i) 
        temp.push(cek);
    }

    return temp;

}

export function getAllGallery() {
    const galleryImage = [{
        id: 0,
        image: _1,
      }, {
        id: 1,
        image: _2,
      }, {
        id: 2,
        image: _3,
      }, {
        id: 3,
        image: _4,
      }, {
        id: 4,
        image: _5,
      }, {
        id: 5,
        image: _6,
      }, {
        id: 6,
        image: _7,
      }, {
        id: 7,
        image: _8,
      },{
        id: 8,
        image: _9,
      },
      {
        id: 9,
        image: _10,
      },
      {
        id: 10,
        image: _11,
      },
      {
        id: 11,
        image: _12,
      },
      {
        id: 12,
        image: _13,
      },
    ];

    return galleryImage;
}

const paramsPathOrClassName = () => {
    const pathImage = getAllGallery();
    const bullet = 'bullet';
    const line = 'line';
    const img = 'img'

    return [pathImage, bullet, line, img];
}

export function getAllImages() {
    
    const arrayParams = paramsPathOrClassName();

    const temp = [];

    arrayParams.map((items, index) => {
        const validateBollean = index > 0 ? false : true;
        temp.push(loopingData(items, validateBollean))
    })

    return temp;
}