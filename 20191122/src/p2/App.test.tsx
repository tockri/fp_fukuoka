import React from 'react';
import ReactDOM from 'react-dom';
import App, {CarInfo, CarInfoList} from './App';
import {CarsensorUsedCar, CarsensorUsedCarResult} from "../types/carsensor";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const responseSample:CarsensorUsedCarResult = {
  "results": {
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
            "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_3_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_4_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_5_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_6_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_7_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_8_001.jpg",
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
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_3_001.jpg",
            "caption": ""
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_4_001.jpg",
            "caption": ""
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_5_001.jpg",
            "caption": ""
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_6_001.jpg",
            "caption": ""
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_7_001.jpg",
            "caption": ""
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_8_001.jpg",
            "caption": ""
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/190/783/U00028190783/U00028190783_9_001.jpg",
            "caption": ""
          }
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
      },
      {
        "warranty_fee": "",
        "photo": {
          "sub": [
            "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_1_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_2_002.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_3_004.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_4_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_5_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_6_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_7_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_8_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_9_001.jpg"
          ],
          "main": {
            "l": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/360/326/U00028360326/U00028360326_001L.JPG",
            "caption": "【強化買取中】バージョングループ強化買取中！新車乗り換えの下取り価格に不満なお客様、是非当社に査定させて下さい！無料査定・出張査定を行っています。まずはお電話下さい！0066-9711-799936",
            "s": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/360/326/U00028360326/U00028360326_001S.JPG"
          }
        },
        "model": "ES",
        "grade": "300h Fスポーツ",
        "brand": {
          "name": "レクサス",
          "code": "LE"
        },
        "urls": {
          "qr": "http://webservice.recruit.co.jp/common/qr?url=http%3A%2F%2Fmob.carsensor.net%2Fc%2Fld.cgi%3FEK%3D59%26BK%3DVU1966201800%26vos%3Dcsr146",
          "mobile": "http://mob.carsensor.net/c/ld.cgi?EK=59&BK=VU1966201800&vos=csr145",
          "pc": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU1966201800&vos=ncsrapis00001"
        },
        "warranty_length": "保証期間：3年",
        "warranty_comment": "◎バージョン保証付（全国保証・３６ヶ月・走行無制限）です。エンジン関係を始め、ブレーキ関係、動力伝達、電装装備品など多くの部品を対象にしています。また、ご遠方のおお客様も対応出来ます。詳しくは問い合わせ下さい。",
        "body": {
          "name": "セダン",
          "code": "S"
        },
        "color": "ホワイトノーヴァガラスフレーク",
        "maintenance_comment": "【九州運輸局長指定の指定整備工場を完備】法定点検整備を実施し納車いたします。費用は本体価格に含まれております。",
        "desc": "ワンオーナー　禁煙車　サンルーフ　Fスポーツ専用シート（Ltex）　純正メモリーナビ（フルセグTV/DVD/CD/SD/Bluetooth/USB端子/ミュージックサーバー/バックカメラ）　純正19AW",
        "maintenance": "法定整備付",
        "maintenance_fee": "",
        "sub_img": [
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_1_001.jpg",
            "caption": "【価格表示について】当社は公正取引協議会の指導ルールのもと、「全国３年保証・法定点検整備費用・納車準備費用」を“車両本体価格”に含んで表示しております。（※国産車に限る）"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_2_002.jpg",
            "caption": "【車輌品質評価書付】遠方のお客様にも安心してご検討いただけますように、第三者機関ＡＩＳ社の車輌品質検査を受け、修理や傷・凹みの有無・箇所を展示車に表示しております。「安心して選べる」と大変好評です！"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_3_004.jpg",
            "caption": "【大商談会】おかげさまで創業５５周年を迎えることができました！感謝の気持ちを込めまして大商談会を開催いたします！特選車をズラリ展示中です！この機会にぜひお越しくださいませ！"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_4_001.jpg",
            "caption": "【前オーナー情報】50代男性ワンオーナー様・禁煙車・屋根付き車庫保管。当社の車は全てエンドユーザーから直接買取をした車歴のわかる安心なお車を取り揃えております。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_5_001.jpg",
            "caption": "【純正メモリーナビ】遠方へのドライブも安心ですね！　フルセグＴＶ／ＤＶＤ／ＣＤ／ＳＤ／Ｂｌｕｅｔｏｏｔｈ／ＵＳＢ端子／ミュージックサーバー／バックカメラ"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_6_001.jpg",
            "caption": "【バックカメラ】後方の映像がモニターで確認できます。駐車が苦手な方にお勧めの補助機能です。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_7_001.jpg",
            "caption": "【トランスミッション】ＣＶＴ（無段変速車）【駆動方式】ＦＦ"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_8_001.jpg",
            "caption": "【ステアリングヒーター】寒い日でもステアリングヒーターがあれば、運転中に手がかじかむことはありません。手袋をすると操作しにくいボタンも、ステアリングヒーターがあれば素手でも暖かく運転でき快適です。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/360/326/U00028360326/U00028360326_9_001.jpg",
            "caption": "【マルチテレインセレクト】モードセレクタースイッチで、５つのモードの中から路面状態に適したものを選択すると、各モードに応じたブレーキ油圧制御に自動的に切り替わり、駆動力を４輪に最適に分配します。"
          }
        ],
        "id": "VU1966201800",
        "recycle": "リ済別",
        "shop": {
          "lat": "33.858627",
          "pref": {
            "name": "福岡県",
            "code": "40"
          },
          "name": "バージョングループ 北九州店",
          "datum": "world",
          "lng": "130.720804"
        },
        "engine": "ハイブリッド",
        "odd": "0.5万km",
        "price": 6221000,
        "warranty_distance": "保証距離：無制限",
        "inspection": "04.1",
        "year": "2019",
        "warranty": "保証付"
      },
      {
        "warranty_fee": "",
        "photo": {
          "sub": [
            "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_1_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_2_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_3_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_4_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_5_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_6_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_7_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_8_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_9_001.jpg"
          ],
          "main": {
            "l": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/251/363/UZ0029251363/UZ0029251363_001L.JPG",
            "caption": "リベラーラはガリバーグループのBMW、メルセデスベンツ、アウディ専門店です。",
            "s": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/251/363/UZ0029251363/UZ0029251363_001S.JPG"
          }
        },
        "model": "CT",
        "grade": "２００ｈ ブラックシークエンス",
        "brand": {
          "name": "レクサス",
          "code": "LE"
        },
        "urls": {
          "qr": "http://webservice.recruit.co.jp/common/qr?url=http%3A%2F%2Fmob.carsensor.net%2Fc%2Fld.cgi%3FEK%3D59%26BK%3DVU2560837011%26vos%3Dcsr146",
          "mobile": "http://mob.carsensor.net/c/ld.cgi?EK=59&BK=VU2560837011&vos=csr145",
          "pc": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU2560837011&vos=ncsrapis00001"
        },
        "warranty_length": "保証期間：3ヶ月",
        "warranty_comment": "",
        "body": {
          "name": "ハッチバック",
          "code": "D"
        },
        "color": "パール",
        "maintenance_comment": "",
        "desc": "◇当店以外で購入される場合は陸送費等、別途費用が発生致します◇【お問合せ車輌ＩＤ：52585808】☆LDA☆PCS☆アダプティブクルーズコントロール☆オートマチックハイビーム☆メーカー",
        "maintenance": "法定整備無",
        "maintenance_fee": "",
        "sub_img": [
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_1_001.jpg",
            "caption": "安心の性能保証！最長５年間（有償）※、走行距離無制限！消耗品の対応も！！※長期保証を付帯できる車両には条件があります。保証範囲、保証内容には一定の条件があります。詳しくは店舗スタッフまで！"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_2_001.jpg",
            "caption": "リベラーラでは、通常のオートローン（最長120回払い）の他にも「買取保証型プラン」や「残価設定プラン」など、様々なお支払プランをご用意しております。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_3_001.jpg",
            "caption": "LIBERALAの全国在庫約2，600台※！その中から厳選したお車をご提案！お近くの店舗でのご納車可能！その品揃えと品質に驚くこと間違い無し！※2019年7月現在。売約済みの可能性もございます。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_4_001.jpg",
            "caption": "LIBERALAは全国に約20店舗以上※。どの店舗の在庫でもお近くのLIBERALAでご購入いただけます。※2019年7月現在"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_5_001.jpg",
            "caption": "全国納車可能※です！全国のLIBERALA、もしくはガリバーグループ直営店舗のどこでも納車が可能※です。※車両運搬費がかかります。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_6_001.jpg",
            "caption": "直接ご来店が難しいお客様にも、詳細写真等お送りできます。まずはお気軽にお問い合わせ下さい。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_7_001.jpg",
            "caption": "納車後のアフターもお近くのLIBERALAもしくはガリバー店舗（一部店舗除く）で対応が可能です。保証修理のほか、車検もお任せください。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_8_001.jpg",
            "caption": "中古車買取実績No.1※のガリバーグループは高価買取！※2018年9月 （株）日本能率協会総合研究所調べ（国内中古車買取市場の大手買取専門業者を対象とした「中古自動車買取台数No.1調査」より）"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/251/363/UZ0029251363/UZ0029251363_9_001.jpg",
            "caption": "BMW純正のポリマーコーティングは輸入車の塗装に最適です。皮膜の厚さと水に濡れたような艶が自慢です。航空機のボディーコート材としても使われており、信頼性も抜群です。"
          }
        ],
        "id": "VU2560837011",
        "recycle": "リ済別",
        "shop": {
          "lat": "33.853520",
          "pref": {
            "name": "福岡県",
            "code": "40"
          },
          "name": "LIBERALA リベラーラ小倉",
          "datum": "world",
          "lng": "130.894844"
        },
        "engine": "ガソリン",
        "odd": "0.9万km",
        "price": 3988000,
        "warranty_distance": "保証距離：無制限",
        "inspection": "04.2",
        "year": "2019",
        "warranty": "保証付"
      },
      {
        "warranty_fee": "",
        "photo": {
          "sub": [
            "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_1_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_2_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_3_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_4_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_5_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_6_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_7_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_8_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_9_001.jpg"
          ],
          "main": {
            "l": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/096/737/U00029096737/U00029096737_001L.JPG",
            "caption": "レクサスCPO福岡中央の物件をご覧いただきありがとうございます。在庫のお問合せはメール、またはフリーダイヤル0066-9711-764702までお気軽にご連絡下さい。",
            "s": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/096/737/U00029096737/U00029096737_001S.JPG"
          }
        },
        "model": "UX",
        "grade": "200 バージョンL",
        "brand": {
          "name": "レクサス",
          "code": "LE"
        },
        "urls": {
          "qr": "http://webservice.recruit.co.jp/common/qr?url=http%3A%2F%2Fmob.carsensor.net%2Fc%2Fld.cgi%3FEK%3D59%26BK%3DVU2452338072%26vos%3Dcsr146",
          "mobile": "http://mob.carsensor.net/c/ld.cgi?EK=59&BK=VU2452338072&vos=csr145",
          "pc": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU2452338072&vos=ncsrapis00001"
        },
        "warranty_length": "保証期限：2024年2月",
        "warranty_comment": "【ＣＰＯの保証・サービス】<BR>2年間、走行距離無制限で保証書に記載の無料修理をお約束します。<BR>2年間無料で所定のプログラムに基づく定期点検とメンテナンスを行います。",
        "body": {
          "name": "クロカン・ＳＵＶ",
          "code": "X"
        },
        "color": "マーキュリーグレーマイカ",
        "maintenance_comment": "【ＣＰＯの品質基準】<BR>１．納車前交換部品１２品目：エンジンオイルなどの無条件交換をはじめ、年数や走行距離に応じ、所定の基準に沿って部品交換致します。２．納車前点検・整備：２４ヶ月点検を含めた９０項目以上の点検・整備を実地。納車前の最終点検では『納車前確認シート』を発行致します。",
        "desc": "カラーヘッドディスプレイ　ブラインドスポットモニターおくだけ充電",
        "maintenance": "法定整備付",
        "maintenance_fee": "",
        "sub_img": [
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_1_001.jpg",
            "caption": "【スペシャルクリーニング済】レクサスCPO福岡中央の中古車は専用ブースで専任スタッフが隅々まで綺麗に仕上げております。https://www.youtube.com/watch?v=EtTleJFviaMにて作業工程をご確認いただけます。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_2_001.jpg",
            "caption": "【ＣＰＯの品質基準】１．納車前交換部品１２品目：エンジンオイルなどの無条件交換をはじめ、年数や走行距離に応じ、所定の基準に沿って部品交換致します。２．納車前点検・整備：２４ヶ月点検を含みます。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_3_001.jpg",
            "caption": "高輝度の光で夜間走行時の安心感を高めるLEDヘッドランプを装備。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_4_001.jpg",
            "caption": "歩行者検知機能付衝突回避支援タイププリクラッシュセーフティ、LKA、AHS、全車速追従機能付レーダークルーズコントロールをセットにした「Lexus Safety System +」を装備。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_5_001.jpg",
            "caption": "運転中の万が一を記録。もしもの時も心強いドライブレコーダーを装備。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_6_001.jpg",
            "caption": "バックモニターが標準装備。お車の車庫入れが苦手な方も大丈夫です。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_7_001.jpg",
            "caption": "【ＣＰＯの保証・サービス】2年間、走行距離無制限で保証書に記載の無料修理をお約束します。2年間無料で所定のプログラムに基づく定期点検とメンテナンスを行います。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_8_001.jpg",
            "caption": "超音波センサーを利用し、車両前方や車両後方の障害物を検知。障害物との距離と接近部位の位置をマルチインフォメーションディスプレイに表示し、同時に音声とブザーでドライバーに注意を促します。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/096/737/U00029096737/U00029096737_9_001.jpg",
            "caption": "TVは、標準でフルセグ仕様。ワンセグに比べて格段に映像をスムーズに視聴していただけます。"
          }
        ],
        "id": "VU2452338072",
        "recycle": "リ済込",
        "shop": {
          "lat": "33.581514",
          "pref": {
            "name": "福岡県",
            "code": "40"
          },
          "name": "レクサスCPO福岡中央 ",
          "datum": "world",
          "lng": "130.402313"
        },
        "engine": "ガソリン",
        "odd": "1.1万km",
        "price": 4650000,
        "warranty_distance": "保証距離：100000km",
        "inspection": "04.2",
        "year": "2019",
        "warranty": "保証付"
      },
      {
        "warranty_fee": "",
        "photo": {
          "sub": [
            "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_1_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_2_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_3_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_4_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_5_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_6_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_7_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_8_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_9_001.jpg"
          ],
          "main": {
            "l": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/915/736/U00028915736/U00028915736_001L.JPG",
            "caption": "レクサスCPO福岡中央の物件をご覧いただきありがとうございます。在庫のお問合せはメール、またはフリーダイヤル0066-9711-764702までお気軽にご連絡下さい。",
            "s": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/915/736/U00028915736/U00028915736_001S.JPG"
          }
        },
        "model": "LS",
        "grade": "500h バージョンL",
        "brand": {
          "name": "レクサス",
          "code": "LE"
        },
        "urls": {
          "qr": "http://webservice.recruit.co.jp/common/qr?url=http%3A%2F%2Fmob.carsensor.net%2Fc%2Fld.cgi%3FEK%3D59%26BK%3DVU2333715277%26vos%3Dcsr146",
          "mobile": "http://mob.carsensor.net/c/ld.cgi?EK=59&BK=VU2333715277&vos=csr145",
          "pc": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU2333715277&vos=ncsrapis00001"
        },
        "warranty_length": "保証期限：2023年2月",
        "warranty_comment": "【ＣＰＯの保証・サービス】<BR>2年間、走行距離無制限で保証書に記載の無料修理をお約束します。<BR>2年間無料で所定のプログラムに基づく定期点検とメンテナンスを行います。",
        "body": {
          "name": "セダン",
          "code": "S"
        },
        "color": "マンガンラスター",
        "maintenance_comment": "【ＣＰＯの品質基準】<BR>１．納車前交換部品１２品目：エンジンオイルなどの無条件交換をはじめ、年数や走行距離に応じ、所定の基準に沿って部品交換致します。２．納車前点検・整備：２４ヶ月点検を含めた９０項目以上の点検・整備を実地。納車前の最終点検では『納車前確認シート』を発行致します。",
        "desc": "ナンバープレートブラケット　アクセサリーソケット【G-Link】2年間無料で緊急時のサポートや、愛車を見守るセキュリティサービスを提供します。",
        "maintenance": "法定整備付",
        "maintenance_fee": "",
        "sub_img": [
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_1_001.jpg",
            "caption": "【スペシャルクリーニング済】レクサスCPO福岡中央の中古車は専用ブースで専任スタッフが隅々まで綺麗に仕上げております。https://www.youtube.com/watch?v=EtTleJFviaMにて作業工程をご確認いただけます。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_2_001.jpg",
            "caption": "取説、メンテナンスノート付属。お車の整備履歴も確認できて安心。レクサスクオリティーのアフターサービス付きCPOです。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_3_001.jpg",
            "caption": "高輝度の光で夜間走行時の安心感を高めるLEDヘッドランプを装備。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_4_001.jpg",
            "caption": "歩行者検知機能付衝突回避支援タイププリクラッシュセーフティ、LKA、AHS、全車速追従機能付レーダークルーズコントロールをセットにした「Lexus Safety System +」を装備。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_5_001.jpg",
            "caption": "超音波センサーを利用し、車両前方や車両後方の障害物を検知。障害物との距離と接近部位の位置をマルチインフォメーションディスプレイに表示し、同時に音声とブザーでドライバーに注意を促します。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_6_001.jpg",
            "caption": "ナビやオーディオ、エアコンなどの操作機能をまとめたレクサス独自のコントロールシステム「リモートタッチ」を配置。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_7_001.jpg",
            "caption": "パノラミックビューモニター装備。上方から車体を見る事で狭い場所での車庫入れも安心して行えます。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_8_001.jpg",
            "caption": "信号待ちの状態で楽な姿勢が可能にできるＨＯＬＤ機能搭載。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/915/736/U00028915736/U00028915736_9_001.jpg",
            "caption": "TVは、標準でフルセグ仕様。ワンセグに比べて格段に映像をスムーズに視聴していただけます。"
          }
        ],
        "id": "VU2333715277",
        "recycle": "リ済込",
        "shop": {
          "lat": "33.581514",
          "pref": {
            "name": "福岡県",
            "code": "40"
          },
          "name": "レクサスCPO福岡中央 ",
          "datum": "world",
          "lng": "130.402313"
        },
        "engine": "ハイブリッド",
        "odd": "0.2万km",
        "price": 11700000,
        "warranty_distance": "保証距離：100000km",
        "inspection": "03.2",
        "year": "2018",
        "warranty": "保証付"
      },
      {
        "warranty_fee": "",
        "photo": {
          "sub": [
            "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_1_002.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_2_002.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_3_002.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_4_002.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_5_002.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_6_002.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_7_002.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_8_002.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_9_002.jpg"
          ],
          "main": {
            "l": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/939/538/U00028939538/U00028939538_001L.JPG",
            "caption": "",
            "s": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/939/538/U00028939538/U00028939538_001S.JPG"
          }
        },
        "model": "LX",
        "grade": "570 4WD",
        "brand": {
          "name": "レクサス",
          "code": "LE"
        },
        "urls": {
          "qr": "http://webservice.recruit.co.jp/common/qr?url=http%3A%2F%2Fmob.carsensor.net%2Fc%2Fld.cgi%3FEK%3D59%26BK%3DVU2371073874%26vos%3Dcsr146",
          "mobile": "http://mob.carsensor.net/c/ld.cgi?EK=59&BK=VU2371073874&vos=csr145",
          "pc": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU2371073874&vos=ncsrapis00001"
        },
        "warranty_length": "保証期限：2021年9月",
        "warranty_comment": "メーカー保証付",
        "body": {
          "name": "クロカン・ＳＵＶ",
          "code": "X"
        },
        "color": "ソニッククォーツ",
        "maintenance_comment": "",
        "desc": "１オーナー車 マークレビンソン リヤエンターテインメント MODELLISTAエアロキット/マフラー/21AW サンフレアブラウンレザー パワーバックドア クールボックス パノラミックビュー",
        "maintenance": "法定整備付",
        "maintenance_fee": "",
        "sub_img": [
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_1_002.jpg",
            "caption": "１オーナー車 LX570 入庫致しました。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_2_002.jpg",
            "caption": "MODELLISTAエアロキットA：フロントスポイラー オプション：サイドバイザー オプション：メッキドアサイドモール オプション：リモートスタート（プレミアム） オプション：メッキナンバーフレーム"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_3_002.jpg",
            "caption": "Lexus Safety System＋：プリクラッシュセーフティ（昼歩行者検知機能付衝突回避支援タイプ/ミリ波レーダー＋単眼カメラ方式） イモビライザー＆侵入センサー付オートアラーム＆傾斜センサー（国土交通省認可品）"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_4_002.jpg",
            "caption": "三眼フルLEDヘッドランプ（ロー・ハイビーム） LEDフロントフォグランプ＆LEDコーナリングランプ LEDクリアランスランプ（デイライト機能付） LEDシーケンシャルターンシグナルランプ（フロント・リヤ)"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_5_002.jpg",
            "caption": "MODELLISTA：21インチアルミホイール＆タイヤセット（ロックナット付） アルミホイール：スーパーブライトクローム ホイールサイズ：21×8.5J タイヤ：ダンロップ GRANDTREK PT3A タイヤサイズ：275/50R21"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_6_002.jpg",
            "caption": "ムーンルーフ（チルト＆スライド式） アルミルーフレール オート電動格納式ドアミラー（自動防眩・鏡面リバース連動ラストメモリー付チルトダウン・メモリー・ヒーター付） スマートエントリー＆スタートシステム"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_7_002.jpg",
            "caption": "ボディカラー：ソニッククォーツ（085） 5,662cc V型8気筒ガソリンエンジン（3UR-FE） 4輪駆動（フルタイム4WD） 8 Super ECT（スーパーインテリジェント8速オートマチック） ヒルスタートアシストコントロール"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_8_002.jpg",
            "caption": "MODELLISTAエアロキットA：リヤスタイリングキット（リヤスカート・スポーツマフラー/105mm×75mmオーバルデュアル） リヤウインドゥフィルム施工 パワーバックドア（イージークローザー/挟み込み防止機能付/上側）"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/939/538/U00028939538/U00028939538_9_002.jpg",
            "caption": "4-Wheel AHC（乗降モード付）＆AVS マルチテレインセレクト クロールコントロール（ターンアシスト機能付） 寒冷地仕様（ウインドシールドデアイサー・PTC補助ヒーター） マルチテレインABS（電子制動力配分制御付）"
          }
        ],
        "id": "VU2371073874",
        "recycle": "リ済別",
        "shop": {
          "lat": "33.508634",
          "pref": {
            "name": "福岡県",
            "code": "40"
          },
          "name": "カーウイングフクオカ ",
          "datum": "world",
          "lng": "130.449422"
        },
        "engine": "ガソリン",
        "odd": "0.2万km",
        "price": 10850000,
        "warranty_distance": "保証距離：60000km",
        "inspection": "03.9",
        "year": "2018",
        "warranty": "保証付"
      },
      {
        "warranty_fee": "",
        "photo": {
          "sub": [
            "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_1_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_2_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_3_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_4_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_5_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_6_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_7_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_8_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_9_001.jpg"
          ],
          "main": {
            "l": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/673/789/U00028673789/U00028673789_001L.JPG",
            "caption": "厳選車の選りすぐりの車のみを格安価格にて！！お客様により良いカーライフをお楽しみ頂く為だけに！ご来店前に一度ご連絡下さい。",
            "s": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/673/789/U00028673789/U00028673789_001S.JPG"
          }
        },
        "model": "RX",
        "grade": "450h Fスポーツ",
        "brand": {
          "name": "レクサス",
          "code": "LE"
        },
        "urls": {
          "qr": "http://webservice.recruit.co.jp/common/qr?url=http%3A%2F%2Fmob.carsensor.net%2Fc%2Fld.cgi%3FEK%3D59%26BK%3DVU2186513359%26vos%3Dcsr146",
          "mobile": "http://mob.carsensor.net/c/ld.cgi?EK=59&BK=VU2186513359&vos=csr145",
          "pc": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU2186513359&vos=ncsrapis00001"
        },
        "warranty_length": "保証期限：2021年9月",
        "warranty_comment": "",
        "body": {
          "name": "クロカン・ＳＵＶ",
          "code": "X"
        },
        "color": "パールホワイト",
        "maintenance_comment": "",
        "desc": "一足早い歳末セール開催！価格見直し、目玉商品展示☆増税後も低価格・高品質のお車をご準備しております♪全車両1点ものにつき早い者勝ちです!(^^)!",
        "maintenance": "法定整備付",
        "maintenance_fee": "",
        "sub_img": [
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_1_001.jpg",
            "caption": "軽・コンパクト・ステーションワゴン・１ＢＯＸ・セダン等の乗用車から商用車まで幅広いジャンルのお車を取り扱っております。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_2_001.jpg",
            "caption": "低価格＆分かりやすい！ご予算で選べる♪お気軽にお越しください♪下取り、不動車の引き上げ等も可能です！！お客様のご希望に添えるよう全力営業してまいります。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_3_001.jpg",
            "caption": "良質な車両が豊富に！低燃費なハイブリッド車から、人気の軽自動車、ミニバンまで！お探しのクルマをお買い得価格でご用意しております！お車選びに迷ったら当店にお越しください♪"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_4_001.jpg",
            "caption": "良好なコンディションかつ整備暦の良いものだけを厳選して仕入れ、納車前に自社工場でエンジンオイル交換など点検整備し、納車後の整備もお値打ち価格で出来ますので安心です！"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_5_001.jpg",
            "caption": "ヘッドライトの黄ばみ、ボディーの傷から、頑固なウォータースポット等、精一杯対応させて頂きます。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_6_001.jpg",
            "caption": "販売価格徹底対抗！！当グループ独自の仕入れだからできるこのお値段！！上質で綺麗なお車をよりお求めやすくをモットーに営業致しております。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_7_001.jpg",
            "caption": "保証内容は1年間！走行距離無制限の保証！！エンジン機構・AT機構を保証し、その後もお値打ち価格で整備しますので安心です！"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_8_001.jpg",
            "caption": "もしもの時の為に安心・充実の最長、3年間の保証もご用意しております！エンジンやトランスミッションの主要部は勿論、ロードサービス等も対応しております！詳細は当店、スタッフにお尋ね下さい！"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/673/789/U00028673789/U00028673789_9_001.jpg",
            "caption": "オートローン・クレジットカードも各社取扱いお気軽に相談できます。頭金０でも申込みＯＫ！"
          }
        ],
        "id": "VU2186513359",
        "recycle": "リ済別",
        "shop": {
          "lat": "33.617483",
          "pref": {
            "name": "福岡県",
            "code": "40"
          },
          "name": "フレスカー 福岡インター店",
          "datum": "world",
          "lng": "130.484943"
        },
        "engine": "ハイブリッド",
        "odd": "0.4万km",
        "price": 6588000,
        "warranty_distance": "保証距離：50000km",
        "inspection": "03.9",
        "year": "2018",
        "warranty": "保証付"
      },
      {
        "warranty_fee": "",
        "photo": {
          "sub": [
            "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_1_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_2_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_3_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_4_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_5_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_6_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_7_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_8_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_9_001.jpg"
          ],
          "main": {
            "l": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/241/646/U00029241646/U00029241646_001L.JPG",
            "caption": "当店の物件をご覧いただき、ありがとうございます！！",
            "s": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/241/646/U00029241646/U00029241646_001S.JPG"
          }
        },
        "model": "LC",
        "grade": "500 ストラクチュラルブルー",
        "brand": {
          "name": "レクサス",
          "code": "LE"
        },
        "urls": {
          "qr": "http://webservice.recruit.co.jp/common/qr?url=http%3A%2F%2Fmob.carsensor.net%2Fc%2Fld.cgi%3FEK%3D59%26BK%3DVU2552434076%26vos%3Dcsr146",
          "mobile": "http://mob.carsensor.net/c/ld.cgi?EK=59&BK=VU2552434076&vos=csr145",
          "pc": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU2552434076&vos=ncsrapis00001"
        },
        "warranty_length": "保証期間：3ヶ月",
        "warranty_comment": "",
        "body": {
          "name": "クーペ",
          "code": "C"
        },
        "color": "ブルーメタ",
        "maintenance_comment": "",
        "desc": "純正SDナビ地デジ/バックモニター　ガラスパノラマルーフ　本革シート　マークレビンソン　プリクラッシュセーフティ　TOM’Sエアロ＆マフラー　鍛造21インチAW　三眼LEDライト　HUD",
        "maintenance": "法定整備付",
        "maintenance_fee": "",
        "sub_img": [
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_1_001.jpg",
            "caption": "ご希望のクルマが在庫にない場合でも、できる限りお客様のお望みに沿ったクルマをお探しいたします。お気軽にご相談ください☆"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_2_001.jpg",
            "caption": "◇自動車保険◇各種オートローン◇お見積もりもご相談ください。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_3_001.jpg",
            "caption": ""
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_4_001.jpg",
            "caption": ""
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_5_001.jpg",
            "caption": ""
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_6_001.jpg",
            "caption": ""
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_7_001.jpg",
            "caption": ""
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_8_001.jpg",
            "caption": ""
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/241/646/U00029241646/U00029241646_9_001.jpg",
            "caption": ""
          }
        ],
        "id": "VU2552434076",
        "recycle": "リ済別",
        "shop": {
          "lat": "33.430591",
          "pref": {
            "name": "福岡県",
            "code": "40"
          },
          "name": "F－LINE ",
          "datum": "world",
          "lng": "130.643573"
        },
        "engine": "ガソリン",
        "odd": "0.6万km",
        "price": 14500000,
        "warranty_distance": "保証距離：3000km",
        "inspection": "03.7",
        "year": "2018",
        "warranty": "保証付"
      },
      {
        "warranty_fee": "",
        "photo": {
          "sub": [
            "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_1_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_2_002.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_3_004.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_4_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_5_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_6_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_7_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_8_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_9_001.jpg"
          ],
          "main": {
            "l": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/943/135/U00027943135/U00027943135_001L.JPG",
            "caption": "【強化買取中】バージョングループ強化買取中！新車乗り換えの下取り価格に不満なお客様、是非当社に査定させて下さい！無料査定・出張査定を行っています。まずはお電話下さい！0066-9711-799936",
            "s": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/943/135/U00027943135/U00027943135_001S.JPG"
          }
        },
        "model": "RX",
        "grade": "300 バージョンL",
        "brand": {
          "name": "レクサス",
          "code": "LE"
        },
        "urls": {
          "qr": "http://webservice.recruit.co.jp/common/qr?url=http%3A%2F%2Fmob.carsensor.net%2Fc%2Fld.cgi%3FEK%3D59%26BK%3DVU1608889264%26vos%3Dcsr146",
          "mobile": "http://mob.carsensor.net/c/ld.cgi?EK=59&BK=VU1608889264&vos=csr145",
          "pc": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU1608889264&vos=ncsrapis00001"
        },
        "warranty_length": "保証期間：3年",
        "warranty_comment": "◎バージョン保証付（全国保証・３６ヶ月・走行無制限）です。エンジン関係を始め、ブレーキ関係、動力伝達、電装装備品など多くの部品を対象にしています。また、ご遠方のおお客様も対応出来ます。詳しくは問い合わせ下さい。",
        "body": {
          "name": "クロカン・ＳＵＶ",
          "code": "X"
        },
        "color": "グラファイトブラックガラスフレーク",
        "maintenance_comment": "【九州運輸局長指定の指定整備工場を完備】法定点検整備を実施し納車いたします。費用は本体価格に含まれております。",
        "desc": "ワンオーナー　禁煙車　サンルーフ　レザーシート　純正SDナビ（フルセグTV（社外キット）/Blu-ray/DVD/CD/全周囲カメラ）　HUD　衝突被害軽減　純正LEDライト　BSM　純正20AW",
        "maintenance": "法定整備付",
        "maintenance_fee": "",
        "sub_img": [
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_1_001.jpg",
            "caption": "【価格表示について】当社は公正取引協議会の指導ルールのもと、「全国３年保証・法定点検整備費用・納車準備費用」を“車両本体価格”に含んで表示しております。（※国産車に限る）"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_2_002.jpg",
            "caption": "【車輌品質評価書付】遠方のお客様にも安心してご検討いただけますように、第三者機関ＡＩＳ社の車輌品質検査を受け、修理や傷・凹みの有無・箇所を展示車に表示しております。「安心して選べる」と大変好評です！"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_3_004.jpg",
            "caption": "【大商談会】おかげさまで創業５５周年を迎えることができました！感謝の気持ちを込めまして大商談会を開催いたします！特選車をズラリ展示中です！この機会にぜひお越しくださいませ！"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_4_001.jpg",
            "caption": "【前オーナー情報】２０代男性ワンオーナー・禁煙車・屋根付車庫保管・休日利用・メンテナンスはディーラーにて実施。当社の車は全てエンドユーザーから直接買取をした車歴のわかる安心なお車を取り揃えております。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_5_001.jpg",
            "caption": "【純正ＳＤナビ】遠方へのドライブも安心ですね！　Ｂｌｕ−ｒａｙ／ＤＶＤ／ＣＤ／ＳＤ／全周囲カメラ　※社外ＴＶキット（フルセグ）付"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_6_001.jpg",
            "caption": "【全周囲カメラ】車両の周辺３６０度を見渡すことができ、死角をなくせます。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_7_001.jpg",
            "caption": "【トランスミッション】６ＡＴ【駆動方式】ＦＦ"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_8_001.jpg",
            "caption": "【本革巻きステアリング】グリップもよく、操作性に優れています。【ステアリング形式】パワーアシスト付きラック＆ピニオン"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/943/135/U00027943135/U00027943135_9_001.jpg",
            "caption": "【緊急通報ボタン】緊急時にこのボタンを押すとヘルプデスクが車の停車している位置を割り出し、状況に応じ警察署や消防署へ緊急通報をします。"
          }
        ],
        "id": "VU1608889264",
        "recycle": "リ済別",
        "shop": {
          "lat": "33.858627",
          "pref": {
            "name": "福岡県",
            "code": "40"
          },
          "name": "バージョングループ 北九州店",
          "datum": "world",
          "lng": "130.720804"
        },
        "engine": "ガソリン",
        "odd": "0.7万km",
        "price": 5188000,
        "warranty_distance": "保証距離：無制限",
        "inspection": "03.6",
        "year": "2018",
        "warranty": "保証付"
      },
      {
        "warranty_fee": "",
        "photo": {
          "sub": [
            "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_1_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_2_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_3_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_4_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_5_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_6_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_7_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_8_001.jpg",
            "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_9_001.jpg"
          ],
          "main": {
            "l": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/204/095/U00028204095/U00028204095_001L.JPG",
            "caption": "【ＣＰＯの品質基準】１．納車前交換部品１２品目：エンジンオイルなどの無条件交換をはじめ、年数や走行距離に応じ、所定の基準に沿って部品交換致します。２．納車前点検・整備：２４ヶ月点検を含みます。",
            "s": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/204/095/U00028204095/U00028204095_001S.JPG"
          }
        },
        "model": "IS",
        "grade": "300h",
        "brand": {
          "name": "レクサス",
          "code": "LE"
        },
        "urls": {
          "qr": "http://webservice.recruit.co.jp/common/qr?url=http%3A%2F%2Fmob.carsensor.net%2Fc%2Fld.cgi%3FEK%3D59%26BK%3DVU1822147722%26vos%3Dcsr146",
          "mobile": "http://mob.carsensor.net/c/ld.cgi?EK=59&BK=VU1822147722&vos=csr145",
          "pc": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU1822147722&vos=ncsrapis00001"
        },
        "warranty_length": "保証期限：2023年9月",
        "warranty_comment": "【ＣＰＯの保証・サービス】<BR>2年間、走行距離無制限で保証書に記載の無料修理をお約束します。<BR>2年間無料で所定のプログラムに基づく定期点検とメンテナンスを行います。",
        "body": {
          "name": "セダン",
          "code": "S"
        },
        "color": "ソニッククォーツ",
        "maintenance_comment": "【ＣＰＯの品質基準】<BR>１．納車前交換部品１２品目：エンジンオイルなどの無条件交換をはじめ、年数や走行距離に応じ、所定の基準に沿って部品交換致します。２．納車前点検・整備：２４ヶ月点検を含めた９０項目以上の点検・整備を実地。納車前の最終点検では『納車前確認シート』を発行致します。",
        "desc": "本革ステアリングヒーター　クリアランスソナー【G-Link】2年間無料で緊急時のサポートや、愛車を見守るセキュリティサービスを提供します。",
        "maintenance": "法定整備付",
        "maintenance_fee": "",
        "sub_img": [
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_1_001.jpg",
            "caption": "【ＣＰＯの保証・サービス】2年間、走行距離無制限で保証書に記載の無料修理をお約束します。2年間無料で所定のプログラムに基づく定期点検とメンテナンスを行います。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_2_001.jpg",
            "caption": "【レクサスオーナーズデスク】24時間365日、オーナーのご要望にレクサスケアコミュニケーターがお応えします。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_3_001.jpg",
            "caption": "【G-Link】2年間無料で緊急時のサポートや、愛車を見守るセキュリティサービスを提供します。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_4_001.jpg",
            "caption": "SDナビ・バックモニター"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_5_001.jpg",
            "caption": "ヘッドランプは、標準仕様でLEDヘッドランプです。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_6_001.jpg",
            "caption": "クルーズコントロールは、標準装備。高速道路の長距離運転の際、スイッチを入れると、定速で走行できるのが魅力です。解除はブレーキを踏むだけです。非常に簡単で安全。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_7_001.jpg",
            "caption": "バックモニターが標準装備。お車の車庫入れが苦手な方も大丈夫です。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_8_001.jpg",
            "caption": "車両の前方と後方にコーナーセンサーをオプションで装着しております。"
          },
          {
            "l": "http://ccsrpcml.carsensor.net/CSphoto/ml/204/095/U00028204095/U00028204095_9_001.jpg",
            "caption": "TVは、標準でフルセグ仕様。ワンセグに比べて格段に映像をスムーズに視聴していただけます。"
          }
        ],
        "id": "VU1822147722",
        "recycle": "リ済込",
        "shop": {
          "lat": "33.581514",
          "pref": {
            "name": "福岡県",
            "code": "40"
          },
          "name": "レクサスCPO福岡中央 ",
          "datum": "world",
          "lng": "130.402313"
        },
        "engine": "ハイブリッド",
        "odd": "0.7万km",
        "price": 4200000,
        "warranty_distance": "保証距離：100000km",
        "inspection": "03.9",
        "year": "2018",
        "warranty": "保証付"
      }
    ],
    "results_available": 24810
  }
};
const expectedCarInfoList:CarInfoList = {
  "totalCount": 24810,
  "startIndex": 1,
  "lastIndex": 10,
  "cars": [
    {
      "id": "VU1816855040",
      "displayName": "レクサス ES 300h Fスポーツ",
      "color": "ブラック",
      "description": "メモリーナビ/マークレビンソン/赤レザーシート/サンルーフ/",
      "url": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU1816855040&vos=ncsrapis00001",
      "imageUrl": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/190/783/U00028190783/U00028190783_001L.JPG"
    },
    {
      "id": "VU1966201800",
      "displayName": "レクサス ES 300h Fスポーツ",
      "color": "ホワイトノーヴァガラスフレーク",
      "description": "ワンオーナー　禁煙車　サンルーフ　Fスポーツ専用シート（Ltex）　純正メモリーナビ（フルセグTV/DVD/CD/SD/Bluetooth/USB端子/ミュージックサーバー/バックカメラ）　純正19AW",
      "url": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU1966201800&vos=ncsrapis00001",
      "imageUrl": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/360/326/U00028360326/U00028360326_001L.JPG"
    },
    {
      "id": "VU2560837011",
      "displayName": "レクサス CT ２００ｈ ブラックシークエンス",
      "color": "パール",
      "description": "◇当店以外で購入される場合は陸送費等、別途費用が発生致します◇【お問合せ車輌ＩＤ：52585808】☆LDA☆PCS☆アダプティブクルーズコントロール☆オートマチックハイビーム☆メーカー",
      "url": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU2560837011&vos=ncsrapis00001",
      "imageUrl": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/251/363/UZ0029251363/UZ0029251363_001L.JPG"
    },
    {
      "id": "VU2452338072",
      "displayName": "レクサス UX 200 バージョンL",
      "color": "マーキュリーグレーマイカ",
      "description": "カラーヘッドディスプレイ　ブラインドスポットモニターおくだけ充電",
      "url": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU2452338072&vos=ncsrapis00001",
      "imageUrl": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/096/737/U00029096737/U00029096737_001L.JPG"
    },
    {
      "id": "VU2333715277",
      "displayName": "レクサス LS 500h バージョンL",
      "color": "マンガンラスター",
      "description": "ナンバープレートブラケット　アクセサリーソケット【G-Link】2年間無料で緊急時のサポートや、愛車を見守るセキュリティサービスを提供します。",
      "url": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU2333715277&vos=ncsrapis00001",
      "imageUrl": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/915/736/U00028915736/U00028915736_001L.JPG"
    },
    {
      "id": "VU2371073874",
      "displayName": "レクサス LX 570 4WD",
      "color": "ソニッククォーツ",
      "description": "１オーナー車 マークレビンソン リヤエンターテインメント MODELLISTAエアロキット/マフラー/21AW サンフレアブラウンレザー パワーバックドア クールボックス パノラミックビュー",
      "url": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU2371073874&vos=ncsrapis00001",
      "imageUrl": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/939/538/U00028939538/U00028939538_001L.JPG"
    },
    {
      "id": "VU2186513359",
      "displayName": "レクサス RX 450h Fスポーツ",
      "color": "パールホワイト",
      "description": "一足早い歳末セール開催！価格見直し、目玉商品展示☆増税後も低価格・高品質のお車をご準備しております♪全車両1点ものにつき早い者勝ちです!(^^)!",
      "url": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU2186513359&vos=ncsrapis00001",
      "imageUrl": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/673/789/U00028673789/U00028673789_001L.JPG"
    },
    {
      "id": "VU2552434076",
      "displayName": "レクサス LC 500 ストラクチュラルブルー",
      "color": "ブルーメタ",
      "description": "純正SDナビ地デジ/バックモニター　ガラスパノラマルーフ　本革シート　マークレビンソン　プリクラッシュセーフティ　TOM’Sエアロ＆マフラー　鍛造21インチAW　三眼LEDライト　HUD",
      "url": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU2552434076&vos=ncsrapis00001",
      "imageUrl": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/241/646/U00029241646/U00029241646_001L.JPG"
    },
    {
      "id": "VU1608889264",
      "displayName": "レクサス RX 300 バージョンL",
      "color": "グラファイトブラックガラスフレーク",
      "description": "ワンオーナー　禁煙車　サンルーフ　レザーシート　純正SDナビ（フルセグTV（社外キット）/Blu-ray/DVD/CD/全周囲カメラ）　HUD　衝突被害軽減　純正LEDライト　BSM　純正20AW",
      "url": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU1608889264&vos=ncsrapis00001",
      "imageUrl": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/943/135/U00027943135/U00027943135_001L.JPG"
    },
    {
      "id": "VU1822147722",
      "displayName": "レクサス IS 300h",
      "color": "ソニッククォーツ",
      "description": "本革ステアリングヒーター　クリアランスソナー【G-Link】2年間無料で緊急時のサポートや、愛車を見守るセキュリティサービスを提供します。",
      "url": "http://www.carsensor.net/usedcar/detail.php?STID=CS210840&BKKN=VU1822147722&vos=ncsrapis00001",
      "imageUrl": "http://ccsrpcma.carsensor.net/CSphoto/bkkn/204/095/U00028204095/U00028204095_001L.JPG"
    }
  ]
};

it('CarInfo() converts API response', () => {
  const usedCar: CarsensorUsedCar = responseSample.results.usedcar[0];
  const expected = expectedCarInfoList.cars[0];
  const actual = CarInfo(usedCar);
  expect(expected).toEqual(actual);
});

it('CarListInfo() converts API response', () => {
  const actual = CarInfoList(responseSample)
  expect(expectedCarInfoList).toEqual(actual);
});
