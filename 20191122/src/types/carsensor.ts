/**
 * 中古車検索API
 * https://webservice.recruit.co.jp/carsensor/reference.html#a1to
 * のレスポンスtype
 */
/*
（作業用）実際のレスポンスJSONのサンプル
{
    "results_start": 1,
    "results_returned": "10",
    "api_version": "1.01",
    "usedcar": [
        {
            "warranty_fee": "",
            "photo": {
                "sub": [
                    "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_1_001.jpg",
                    "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_2_001.jpg",
                    "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_9_001.jpg"
                ],
                "main": {
                    "l": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/190/783/U00028190783/U00028190783_001L.JPG",
                    "caption": "",
                    "s": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/190/783/U00028190783/U00028190783_001S.JPG"
                }
            },
            "model": "ES",
            "grade": "300h Fスポーツ",
            "brand": {
                "name": "レクサス",
                "code": "LE"
            },
            "urls": {
                "qr": "http://webservice.recruit.co.jp/common/qr?url=http%3A%2F%2Fmob.carsensor.net%2Fc%2Fld.cgi%3FEK%3D59%26BK%3DVU1816855040%26vos%3Dcsr146",
                "mobile": "http://mob.carsensor.net/c/ld.cgi?EK=59&BK=VU1816855040&vos=csr145",
                "pc": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU1816855040&vos=ncsrapis00001"
            },
            "warranty_length": "",
            "warranty_comment": "",
            "body": {
                "name": "セダン",
                "code": "S"
            },
            "color": "ブラック",
            "maintenance_comment": "",
            "desc": "メモリーナビ/マークレビンソン/赤レザーシート/サンルーフ/",
            "maintenance": "法定整備無",
            "maintenance_fee": "",
            "sub_img": [
                {
                    "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_1_001.jpg",
                    "caption": ""
                },
                {
                    "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_2_001.jpg",
                    "caption": ""
                },
            ],
            "id": "VU1816855040",
            "recycle": "リ済別",
            "shop": {
                "lat": "33.817770",
                "pref": {
                    "name": "福岡県",
                    "code": "40"
                },
                "name": "Auto　garage　BooBee ",
                "datum": "world",
                "lng": "130.712723"
            },
            "engine": "ハイブリッド",
            "odd": "0.3万km",
            "price": "応談",
            "warranty_distance": "",
            "inspection": "04.1",
            "year": "2019",
            "warranty": "保証無"
        }
    ],
    "results_available": 24705
}*/


export type CarsensorUsedCarResult = {
  results: {
    api_version: string,
    results_available: number,
    results_returned: string,
    results_start: number,
    usedcar: CarsensorUsedCar[]
  }
}

export type CarsensorUsedCar = {
  id: string,
  brand: {
    code: string,
    name: string,
  },
  model: string,
  grade: string,
  color: string,
  engine: string,
  year: string,
  odd: string,
  price: string,
  desc: string,
  photo: {
    sub: string[],
    main: {
      s: string,
      l: string,
      caption: string
    }
  },
  urls: {
    qr: string,
    mobile: string,
    pc: string
  },
  body: {
    name: string,
    code: string
  },
  sub_img: {
    l: string,
    caption: string
  }[],
  shop: {
    lat: string,
    lng: string,
    pref: {
      name: string,
      code: string
    },
    name: string,
    datum: string,
  },
  warranty: string
  warranty_distance: string,
  warranty_fee: "",
  warranty_length: string,
  warranty_comment: string,
  maintenance_comment: string,
  maintenance: string,
  maintenance_fee: string,
  recycle: string,
  inspection: string,
}
