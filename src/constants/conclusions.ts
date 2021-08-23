/**
 * 诀断断文
 *
 * @packageDocument
 */

import {
  BaZhaiWei,
  CS72LONGType,
  DPZZType,
  JiuXing,
  JiuXingIn8,
  JueDuanType,
  JueDuanType2D,
  SH24JSType,
  ShuangShan,
  ShuiShapeSpec,
  TD60LONGType,
  ZiWuShaType,
} from '@siloqian/fesh-typings';

/**
 * {@inheritDoc ShuiShapeSpec}
 *
 * @public
 * @see {@link ../assets/knowledge/shui.md}
 */
export const shuiShapeSepcDuan: JueDuanType<ShuiShapeSpec> = {
  sjC1: '潮水局，向上有水来朝明堂。其水曲折蜿蜒而来，注入湖泊塘地。是为得官禄之喜，来于何字发于何年。',
  sjC2: '潮水局，向上有水来朝明堂。大海之潮水，涨潮时波涛汹涌而来，退潮悠然而去。此地一发如雷，一败如灰。',
  sjC3: '潮水局，向上有水来朝明堂。直来箭射之水直冲明堂。大江型。封王封侯，禄福悠悠。',
  sjC4: '潮水局，向上有水来朝明堂。直来箭射之水直冲明堂。小河型。主妻女淫荡或损妻害子。',
  sjH1: '横水局，来于生旺方，注于墓绝之方，湾环朝绕，似玉带束腰，抱于穴前，以止来龙之气。横来之水宜绕抱为佳，水外再有朝案，左右龙虎有情，贵人峰立，龙真穴的是为大地，取是地而用，富贵绵远。',
  sjH2: '横水局，来于生旺方，注于墓绝之方，湾环朝绕，似玉带束腰，抱于穴前，以止来龙之气。横来之水直斜为祸，如斜飞，横撞直射此地，易招火灾贼盗及官非或子孙均为贼盗，或者有投河之灾。',
  sjQu: '去水局，指水溪与龙脉同行从穴前明堂直出、斜飞，或砂飞水走，分左右两边直出者。去水局破才损丁，兵连祸结，称为大凶水局，切不可取用。',
  sjJu: '聚水局，指穴前之池塘，湖泊，又有小溪注入其内，水质清辙芳香不腐。聚水之局福禄绵长，如得旺山旺向，人兴财发，如有双星到向一发如猛虎。',
  sjWu: '无水局，平原旷野，黄土高原，无水而来，亦无水而去，既无河流溪涧，又无湖泊池塘，储浒沼泽。无水成局以藏风聚气即为上佳之地，发富发贵。',
};

/**
 * 三合水法断语
 *
 * @public
 */
export const sanHeShuiFaDuan: JueDuanType2D<ShuangShan, ShuangShan> = {
  /** **壬山丙向、子山午向** 壬山兼亥丁亥分金。兼子辛亥分金。子山兼壬丙子分金。兼癸庚子分金。 */
  'RN-ZI': {
    'XN-XU':
      '左水倒右。水出辛戌。为正旺向。名“三合联珠贵无价”。合杨公救贫进神生来会旺。玉带缠腰。金城水法。大富大贵。人丁昌炽。忠孝贤良。男女高寿。房房无异。发福绵远。若得旺山肥满。旺水朝聚富比石崇。',
    'DN-WI':
      '左水倒右。出丁未。为自旺向。名“惟有衰方可去来”。发富发贵。寿高丁旺。',
    'JA-MO':
      '右水倒左。从甲卯沐浴方消水。名“禄存流尽佩金鱼”。富贵双全。人丁兴旺。犯寅卯二字。非淫即绝。不可轻用。',
    'XUEN-SI':
      '水出巽巳方为冲破。向上临官。犯杀人大黄泉，伤成才之子立主败绝并犯软脚。风瘫、痨疾、吐血等症。先伤二门。次及别房。',
    'YI-CN':
      '水出乙辰方。流破向上冠带。主伤年幼聪明之子。并闺中幼妇少女退败田产。久则败绝。',
    'GW-CO': '水出癸丑方。冲破向上养位。主伤儿败财乏嗣。犯退神沐浴不立向。',
    'RN-ZI':
      '水出壬子方。冲破胎神。主坠胎伤人。初年丁财稍利。久则败绝。此名过宫水。有寿无财。',
    'QIAN-HI':
      '水出乾亥方。名过宫水。惰过而亢。太公八十遇文王。即此水法。初年有丁有寿无财。水不归库故也。',
    'GN-YO':
      '水出庚酉方。为交如不及。犯颜回夭寿水。败产乏嗣。初年亦有稍利者。先伤三门。有丁无财。有财无丁。有功名者，即失血夭亡。福禄寿不齐全。死方消水故也。',
    'KUNN-SN':
      '水出坤申病方。犯短命寡宿水。男人寿短。必出寡居五、六人。败产绝嗣。并犯咳嗽、吐痰、肺痨等病症。先败三门。次及别门。凡病死二方。消水发凶相似。',
    'GENG-YN':
      '水出艮寅方。为旺去冲生。犯虽有财。而何为小儿难养。富而无子。十有九绝。先败绝长房。次及别门。',
    'BN-WU':
      '右水倒左。从向上丙字出去。不犯午字。犹须百步转栏。合水局胎向胎方出水。谓之出煞。不作冲胎论。主大富大贵。人丁兴旺。但内中间有寿短者。出幼妇寡居。',
  },
  'GW-CO': {
    /** **癸山丁向、丑山未向** 癸山兼子丙子分金。兼丑庚子分金。丑山兼癸丁丑分金。兼艮辛丑分金。 */
    'XN-XU': '水出辛戍犯衰。不立向。丁财不发。',
    'DN-WI':
      '若右水倒左。即向上正丁字流去。名“绝水倒冲墓库”或当面直去。不能百步转栏。又为“牵动土牛”。立主败绝。书云：“丁庚坤上是黄泉”即此是也。',
    'JA-MO': '水出甲卯方，初年间，或发丁，久则寿短绝嗣，退败田产。',
    'XUEN-SI':
      '右水倒左，出巽巳方，为正养向。名“贵人禄马上御街”，丁旺两旺。功名显达，发福绵远，忠孝贤良，男女高寿，房房皆发，三门九盛，并发女秀。地理中第一吉向。',
    'YI-CN': '水出乙辰方，犯退神，初年发丁不发财。亦无大凶。',
    'GW-CO': '水出癸丑方，犯退神冠带，不立向。夭亡败绝。',
    'RN-ZI':
      '丁水来朝左倒右。从壬字天干而去。不犯子字。名“禄存流尽佩金鱼”。发富发贵，福寿双全。但此向此水。平洋多发。山地多败。',
    'QIAN-HI': '水出乾亥方。丁财日衰。甚则绝嗣。',
    'GN-YO':
      '水出庚酉方。为情过而亢。予验过间有初年发富发贵者。亦有不发者。或寿高、或寿短。吉凶相半。久则不利，有丁无财。',
    'KUNN-SN':
      '左水倒右，出坤方，为木向。书云：“丁坤终是万斯箱”，即此是也。发富发贵，人丁大旺，福寿双全。',
    'GENG-YN':
      '水出艮寅方，主退财，小儿难养。男女夭亡乏嗣。先败长房，次及别房。',
    'BN-WU':
      '水出丙午方，冲破向上禄位，名冲禄小黄泉，主穷乏夭亡，出寡居。予验过无数间有寿高者，有五、六弟兄者。有乏嗣者亦有乞丐者，总之穷困者多，发富者少。若未字上，再有枪刀恶名，出人横暴，争斗好勇。',
  },
  'GENG-YN': {
    /** **艮山坤向、寅山申向** 艮山兼丑丁丑分金。兼寅辛丑分金。寅山兼艮丙寅分金。兼甲庚寅分金。 */
    'XN-XU':
      '水出辛戍方。犯病不立向。退神水法。以向论。又犯冲破冠带。必伤年幼聪明之子。败绝不吉。',
    'DN-WI':
      '右水倒左，出丁未方，为借库消水。自生向。合杨公进神水法。不作冲破养位论。主富贵高寿。人丁大旺。先发小房。',
    'JA-MO': '水出甲卯方。为交如不及。短寿败财。不发。',
    'XUEN-SI':
      '水出巽巳。名过宫水。情过而亢。故主初年有丁有寿。卒不发。穷苦清廉。',
    'YI-CN':
      '右水倒左。出乙辰合三合吊照。正生向。旺去迎生。玉带缠腰。金城水法。书云：“十四进神家业兴”。主妻贤子孝，五福满门，富贵双全。',
    'GW-CO': '水出癸丑方。犯退神临官。不立向。非败即绝。',
    'RN-ZI': '水出壬子方。犯生来破旺。家贫如洗。初年发丁。久则夭寿不吉。',
    'QIAN-HI':
      '水出乾亥方。冲破向上临官。伤成才之子。乏嗣夭寿败财。失血捞疾。大凶。',
    'GN-YO':
      '左水倒右。出庚酉方。合文库消水。杨公进神水法。书云“禄存流尽佩金鱼”。即此是也。主发富贵。福寿双全。少差即绝。不可轻用。',
    'KUNN-SN':
      '右水长大倒左出坤。不犯申字百步栏。大富大贵。人丁兴旺。若犯墓绝冲生大煞，(即左水长大倒右当面出坤)大凶，不能用。',
    'GENG-YN': '水出艮寅方。亦为交如不及。主多病败绝。不发。',
    'BN-WU':
      '水出丙午。为冲破胎神。初年间有发丁旺财寿高者。久则坠胎乏嗣。家道穷苦不利。',
  },
  'JA-MO': {
    /** **甲山庚向、卯山酉向** 甲山兼寅丙寅分金。兼卯庚寅分金。卯山兼甲丁卯分金。兼乙辛卯分金。 */
    'XN-XU':
      '左水倒右。出辛戍方。为自旺向。合“惟有衰方可去来”即杨公救贫进神水法。发富发贵。寿高丁旺。男聪女秀。大吉大利。',
    'DN-WI':
      '水出丁未方。冲破向上冠带。主伤年幼聪明之子。并损闺中幼妇。退败产业。久则绝嗣。',
    'JA-MO':
      '水出甲卯方。为冲破胎神。主坠胎伤人。初年间有丁财稍利寿高者。久则无不败绝。',
    'XUEN-SI':
      '水出巽巳方。犯旺去冲生。虽有财而何为。小儿难养。当向无丁。十有九绝。先败长房。次及别门。',
    'YI-CN':
      '水出乙辰方。为冲破向上养位。主伤小儿。败产绝嗣。犯退神沐浴。不立向。',
    'GW-CO':
      '左水倒右出癸丑为正旺向。名“三合联珠贵无价”。合杨公救贫。进神生来会旺水法。玉带缠腰。金城水法。大富大贵。人丁大旺。忠孝贤良。男女高寿。房房均一。发福绵远。',
    'RN-ZI':
      '水出壬子方。为交如不及。犯颜回短命水。夭亡败产绝嗣。红血痨疾。多出寡发。先伤三门。初年间有稍利者。然总有丁无财。有财无丁。发功名即夭寿。福禄寿不能齐全。',
    'QIAN-HI':
      '水出乾亥病方。犯短命寡宿水。男人寿短。必出寡妇五、六人。败产绝嗣。并犯咳嗽、吐痰、失血痨疾等症。先败三门。次及别房。与兑方消水。发凶相似。',
    'GN-YO':
      '右水倒左。从向上正庚字出。不犯酉字。百步转栏。又须左水细小。合本局胎向胎方放水谓之出煞不作冲胎论。主大富大贵。人丁兴旺但内中间有寿短者。出幼妇寡居。不可用。',
    'KUNN-SN':
      '水出坤申方。为冲破向上临官。犯杀人大黄泉。必丧成才之子。立主败绝。官词卖产。并犯软脚、风瘫、痨疾、吐血杂症。先伤二门。次及别门。无一家不败者。',
    'GENG-YN': '水出艮寅名过宫水。情过而亢。初年有丁、有寿无财。水不归库故也。',
    'BN-WU':
      '右水倒左。从丙字沐浴方消水。合“禄存流尽佩金鱼”。富贵双全。人丁兴旺。虽右边病死。衰水过堂。第至向上。巳会合庚酉旺水归库而去。无妨以水局而论。又有壬子旺水。乾亥临官水。辛戍冠带水。上堂均系合局。故主大发。但若犯午字巳字。非淫即绝，大凶。',
  },
  'YI-CN': {
    /** **乙山辛向、辰山戌向** 乙山兼卯丁卯分金。兼辰辛卯分金。辰山兼乙丙辰分金。兼巽庚辰分金。 */
    'XN-XU':
      '左水倒右。出向上正辛字。不犯戍字。又须百步转栏。有发大富大贵者。稍差即绝。不可轻用。',
    'DN-WI': '水出丁未方。犯退神 。初年稍利。发丁不发财。亦不发凶。',
    'JA-MO':
      '须有辛水朝堂。左水倒右。后甲字天干而去。不犯卯字。禄存流尽佩金鱼。大富大贵。福寿双全。人丁亦旺。平洋地发者多。但山地不可用。多败绝。',
    'XUEN-SI':
      '水出巽巳方。主退财。小儿难养。男女夭亡乏嗣。先败长房。次及别门。',
    'YI-CN': '水出乙辰方。犯退冠带。不立向。主夭亡败绝不发。',
    'GW-CO': '水出丑癸方。犯衰不立向。退神水法。丁财两不旺。',
    'RN-ZI':
      '水出壬子方。为情退而亢。间有初年发富发贵者。亦有不发者。或寿高。或寿短。或乏嗣。吉凶相半。',
    'QIAN-HI':
      '左水倒右。出乾亥方，为火局向。书云: 卒入乾宫百万庄即此是也.发福发贵。人丁大旺、福寿双全。',
    'GN-YO':
      '水出庚酉方。冲破向上禄位。名“冲禄小黄泉”。主穷乏夭亡。出寡居，间有寿高者。有五、六弟兄者。有乏嗣者。亦有为乞丐者。总之穷困者多。发富者少。若戍字上再有枪刀恶石。出性暴人。习拳棒行凶争斗。',
    'KUNN-SN':
      '右水倒左。出坤申方。系正养向。名为贵人禄马上御街”。丁财大旺。功名显达。发福绵远。忠孝贤良。男女寿高。房房皆发。三门尤盛。并发女秀。',
    'GENG-YN': '水出艮寅方。丁财日衰。甚则绝嗣。',
    'BN-WU':
      '水出丙午方。初年间有发丁高寿者。久则夭亡绝嗣。退败田产。穷苦不终。',
  },
  'XUEN-SI': {
    /** **巽山乾向、巳山亥向** 巽山兼辰、丙辰分金。兼巳庚辰分金。巳山兼巽丁巳分金。兼丙辛巳分金。 */
    'XN-XU':
      '右水倒左。出辛戍方为借库消水。自生向。合杨公救贫进神水法。不作冲破养位论。主富贵寿高。人丁大旺。发福悠久。',
    'DN-WI':
      '右水倒左。出丁未方。名三方吊照。正生向。合杨公救贫进神水法。旺去迎生。富贵之期骤至。书云“十四进神家业兴”。主妻贤子孝。五福临门。富贵双全。房分均发。',
    'JA-MO': '水出甲卯方。为生来破旺，贫穷。初年发财，久则败绝不利。',
    'XUEN-SI': '水出巽巳方。名生向。交如不及。年久败绝。',
    'YI-CN': '水出乙辰方。犯“十个退神如鬼灵”临官，不立向。非败即绝。',
    'GW-CO':
      '水出癸丑方。犯病不立向。退神水法。又犯冲破冠带。必伤年幼聪明之子。娇态之妇。',
    'RN-ZI':
      '左水倒右。出壬子方。合文库消水。杨公救贫进神水法。书云“禄存流尽佩金鱼”主发富贵福寿双全。',
    'QIAN-HI':
      '右水长大倒左。出向上正乾字。不犯亥字。百步转栏。大富大贵。人丁亦旺。',
    'GN-YO':
      '水出庚酉方。为冲破胎神。初年间有旺丁，寿高发财者。久则乏嗣，贫苦。有寿必穷。此水不归库故也。',
    'KUNN-SN':
      '水出坤申绝位。为情过而亢。初年发丁，有寿不发财，功名不利。贫而不寿。不绝。',
    'GENG-YN':
      '水出艮寅方。冲破向上临官,犯黄泉大煞。伤成才之子。乏嗣夭寿穷苦大凶。',
    'BN-WU': '水出丙午方。为交如不及。短寿败财不发。',
  },
  'BN-WU': {
    /** **丙山壬向、午山子向** 丙山兼巳丁巳分金。兼午辛巳分金。午山兼丙丙午分金。兼丁庚午分金。 */
    'XN-XU':
      '水出辛戍方。犯退神。主伤幼年聪明之子。并损妇少女。退败产业。久则绝嗣。冲破向上冠带故也。',
    'DN-WI':
      '水出丁未方。为冲破向上养位。主伤小口，败产绝嗣。犯退神沐浴，不立向。',
    'JA-MO':
      '水出甲卯方。为交如不及。犯颜回短命水。夭亡绝嗣，退败产财。多出寡居。先伤三门，内中亦有稍利者，然纵有丁无财。有财无丁。发功名即夭寿。福寿不能相兼，多因吐血痨疾而死。',
    'XUEN-SI':
      '水出巽巳方。为情退而亢不利功名。太公八十遇文王。初年发丁，有寿不发财。水不归库故也。',
    'YI-CN':
      '左水倒右。出乙辰方。为正旺向。名“三合联珠贵无价”。杨公救贫进神生来会旺水法。玉带缠腰，金城水法。大富大贵。忠孝贤良，男聪女秀，夫妇齐眉。房房相似，发福绵远。“申子辰坤壬乙，文曲从头出。”此是也。',
    'GW-CO':
      '左水倒右。出癸丑方。为自旺向，惟有衰方可去求。杨公救贫进神水法。发富发贵，寿高丁旺。',
    'RN-ZI':
      '右水倒左，从向上正壬字流出。不犯子字。百步转栏。又须左水细小。合火局胎向胎方去水。谓之出煞。不作冲胎而论。主大富大贵。人丁兴旺。内中间有寿短寡居者。',
    'QIAN-HI':
      '水出乾亥方。为冲破向上临官，犯杀人大黄泉。必丧成才之子。立主败绝。官词卖产。并犯软脚、风瘫、痨疾、吐血等症。先伤二门。次及别门，无一不败绝者。',
    'GN-YO':
      '右水倒左，从庚字沐浴方消水。合“禄存流尽佩金鱼”，富贵双全，人丁兴旺。若稍犯酉申二字，即凶，不可轻用。',
    'KUNN-SN':
      '水出坤申方。犯旺去冲生大煞。虽有财而何为。小儿难养。富而无丁。十有九绝。先败长房。次及别门。',
    'GENG-YN':
      '水出艮寅病方。犯孤辰寡宿水。男人寿短，必出寡妇五、六人。败产乏嗣。并犯咳嗽、吐痰、痨疾等症。先伤三门。次及别房。',
    'BN-WU':
      '水出丙午方。为冲破胎神，主坠胎伤人。初年间有丁财稍利寿高者。久则败绝，此名过宫水，有寿必穷。',
  },
  'DN-WI': {
    /** **丁山癸向、未山丑向** 丁山兼午丙午分金，兼未庚午分金。未山兼丁丁未分金。兼坤辛未分金。 */
    'XN-XU':
      '水出辛戍方。犯退神。初年旺丁不发财。亦不发凶。功名不利。平安有寿。',
    'DN-WI': '水出丁未方。犯退神冠带。不立向。主夭亡败绝。',
    'JA-MO':
      '水出甲卯方。为情过而亢,初年间有发富贵,亦有不发者,或寿高,或寿短乏嗣,吉凶相半.',
    'XUEN-SI': '水出巽巳方。丁财日衰。甚则绝嗣。',
    'YI-CN': '水出乙辰方。犯衰不立向。退神水法。财丁俱不旺。',
    'GW-CO':
      '左水倒右，出向上正癸字而去。又须百步转栏，有发大富大贵者。但有稍差即绝。不可轻用。',
    'RN-ZI':
      '水出壬子方。冲破向上禄位。名“冲禄小黄泉”。主穷乏夭亡，出寡居。间有寿高者。有五、六弟兄者。有乏嗣者。亦有为乞丐者。总之穷困者多。发富者少,若丑字上有枪刀恶石,出性暴力恶人,好习拳棒发丁不发财。',
    'QIAN-HI':
      '右水倒左。出乾亥方系正养向，名为“贵人禄马上御街”。合进神救贫水法。丁财大旺，功名显达。发福绵远。忠孝贤良。男女寿高。房房皆发。三门尤盛。并发女秀。',
    'GN-YO':
      '水出庚酉方。初年间，有发财发丁寿高者。久则寿短。小产乏嗣。退产败财。',
    'KUNN-SN': '水出坤申方，会退财不发，小儿难养，男女夭亡乏用，先败长房。',
    'GENG-YN':
      '左水倒右。出艮寅方。为金局向。书云“癸归艮位发文章”，发富发贵。人丁大旺。福寿双全。惟年久。主生风疾。',
    'BN-WU':
      '癸山朝堂。左水倒右。从丙字而去。不犯午字。名“禄存流尽佩金鱼”。大富大贵。福寿双全。',
  },
  'KUNN-SN': {
    /** **坤山艮向、申山寅向** 坤山兼未丁未分金,兼申辛未分金.申山兼坤丙申分金. */
    'XN-XU':
      '右水倒左，出辛戍方为正生向。合旺去迎生，救贫水法，玉带缠腰，金城水法。书云“十四进神家业兴”。主妻贤子孝，五福满堂，福寿双全，门门皆发。',
    'DN-WI': '水出丁未方，犯“十个退神如鬼灵”，临官不立向，非败即绝。',
    'JA-MO':
      '左水倒右。出甲卯方。合文库消水，杨公救贫进神水法。书云“禄存流尽佩金鱼”。主发富贵，福寿双全。',
    'XUEN-SI': '水出巽巳方，为冲破向上临官，伤成才之子。夭寿乏嗣。',
    'YI-CN':
      '水出乙辰方，犯病不立向。退神水法，又犯冲冠破带。必伤年幼聪明之子。贞节之女。',
    'GW-CO':
      '右水倒左，出癸丑方，为借库消水，自生向。合杨公救贫进神水法，不作冲破养位论。主富贵寿高，人丁大旺，先小房，龙砂好，后发长房者。',
    'RN-ZI':
      '水出壬子方，为冲破胎神，初年间有丁旺发财寿高者，久则坠胎乏嗣贫苦，有寿必穷水不归库故也。',
    'QIAN-HI': '水出乾亥方，初年发丁不发财，寿高贫苦，功名不利。',
    'GN-YO': '水出庚酉方，为交如不及，短寿败财不吉。',
    'KUNN-SN': '水出坤申方，犯生向交加如不及，多主败绝。',
    'GENG-YN': '右水长大倒左，出艮不犯寅字。百步转栏，大富大贵，人丁亦旺。',
    'BN-WU': '水出丙午方，为生有破旺，主穷乏，初年发丁，久则败绝。',
  },
  'GN-YO': {
    /** **庚山甲向、酉山卯向** 庚山兼申丙申分金、兼酉庚申分金、酉山兼庚丁酉分金，兼辛辛酉分金。 */
    'XN-XU':
      '水出辛戍方。为冲破向上养位。主伤小口，败产绝嗣。犯退神沐浴。不立向。',
    'DN-WI':
      '左水倒右，出丁未方，为正旺向，名“三合联珠贵无价”。合杨公救贫进神生来会旺水法。玉带缠腰。金城水法，大富大贵。忠孝贤良，男女高寿，房房相似，发福绵远。书云“亥卯未乾甲丁。贫狼一路行”。即此向。',
    'JA-MO':
      '右水长大倒左。从向上正甲字出。不犯卯字流去。百步转栏。合金局胎向胎方去水。谓之出煞，不作冲胎论。主大富大贵。人丁兴旺。但丙中间有寿短寡居。不败即绝。不可轻用。',
    'XUEN-SI':
      '水出巽巳方。犯短命寡宿水。男人短寿，多出寡妇。败产乏嗣，并犯咳嗽、吐痰、痨疾等症。先伤三门，次及别房。与死房消水发凶相似。',
    'YI-CN':
      '左水倒右。出乙辰方。为自旺向。合“惟有衰方可去来”，杨公救贫进神水法。发富发贵。寿高丁旺。若艮水来朝，合三吉六秀向水法。',
    'GW-CO':
      '水出癸丑方，冲破向上冠带，犯退神。主伤年幼聪明之子，并闺中幼妇少女。退败产业，久则绝嗣。',
    'RN-ZI':
      '右水倒左，从壬字沐浴方消水，合禄存流尽佩金鱼，富贵双全，人丁兴旺。若稍犯子字亥字大凶，不可乱用。',
    'QIAN-HI':
      '水出乾亥方。为旺去冲生。虽有财而何为，小儿难养，富而无丁，十有九绝。先败长房，次及别房。',
    'GN-YO':
      '水出庚酉方。为冲破胎神。主坠胎伤人，初年间有丁财稍利者。久别败绝。此过宫水，有寿无财，小房更不利。',
    'KUNN-SN':
      '水出坤申方。为情过而亢。功名不利。人多有寿。发丁无财。水不归库故也。',
    'GENG-YN':
      '水出艮寅方，为冲破向上临官，犯杀人大黄泉。必丧成才之子。立主败绝，官词卖产。并犯软脚、风瘫、痨疾、吐血等症，先伤三门，次及别房，大凶。',
    'BN-WU':
      '水出丙午方。为交如不及，犯颜回短命水，夭亡绝嗣。退财产业。多出寡居。先伤三门。此向有丁无财，有财无丁。发功名即夭亡，福禄寿不能相兼，年久败绝。',
  },
  'XN-XU': {
    /** **辛山乙向、戌山辰向** 辛山兼酉丁酉分金，兼戌辛酉分金，戌山兼辛丙戍分金。 */
    'XN-XU': '水出辛戍方。犯退冠带不立向。主夭亡败嗣，凶。',
    'DN-WI': '水出丁未方。犯衰不立向，财丁不利。',
    'JA-MO':
      '水出甲卯方，冲破向上禄位。名为冲禄小黄泉，主穷乏夭亡。出寡居。或间有寿高者.有五,六弟兄者,有乏嗣者,亦有为乞丐者.总之穷困者多,发富者少.若辰字上有枪刀恶石,出横暴人,好争斗行凶。',
    'XUEN-SI':
      '左水倒右，出巽巳方。为水局向。书云“乙向巽流清富贵”是也。发富发贵。人丁大旺，福寿双全。',
    'YI-CN':
      '左水倒右。从向上乙字出去，不犯辰字。又须百步转栏，主发富贵，但稍差即绝,先吉后凶。',
    'GW-CO': '水出癸丑方。犯退神，初年发丁有寿。不发财亦不发凶。',
    'RN-ZI': '水出壬子方。初年间有发丁，久则寿短。小产乏嗣。败产，不吉。',
    'QIAN-HI':
      '水出乾亥方。主退财不发。小儿难养，男女夭亡乏嗣。先败长房，次及别房。',
    'GN-YO':
      '乙水朝堂。左水倒右，从后庚字天干而去。不犯酉字。名“禄存流尽佩金鱼”。大富大贵。福寿双全。此向平原发福。山地败绝。',
    'KUNN-SN': '水出坤申方。丁败日衰甚而绝嗣。大凶。',
    'GENG-YN':
      '右水倒左，出艮寅方。系正养向，名为“贵人禄马上御街”。丁财大旺。功名显达。发福绵远。忠孝贤良。男女寿高。房房皆发。三门尤盛。并发女秀。',
    'BN-WU': '水出丙午为情过而亢。间有初年发富,或寿高,或短寿,或乏嗣,吉凶相半。',
  },
  'QIAN-HI': {
    /** **乾山巽向、亥山巳向** 乾山兼戍丙戌分金。兼亥庚戌分金。亥山兼乾丁亥分金。兼壬辛亥分金。 */
    'XN-XU': '水出辛戍方。犯“十个退神如鬼灵”临官。不立向。非败即绝。',
    'DN-WI':
      '水出丁未方。犯病不立向，退神水法。又犯冠带。伤年幼聪明之子。并娇态妇女。',
    'JA-MO':
      '水出甲卯方。为冲破胎神。初年间有丁财稍利寿高者。久则坠胎乏嗣。贫苦，水不归库故也。',
    'XUEN-SI':
      '右水长大倒左。出巽不犯巳字。百步转栏。大富大贵。人丁大旺。男女寿高。',
    'YI-CN':
      '右水倒左。出乙直射水方。为借库消水。自生向。合杨公救贫进神水法。不作冲破养位论。主富贵寿高。人丁大旺。先发小房。后发长房。',
    'GW-CO':
      '右水倒左，出癸丑方，为正生向。全旺去迎生。救贫水法。玉带缠腰，金城水法，书云“十四进神家业兴”。主妻贤子孝。五福满堂。富贵双全，门门皆发。',
    'RN-ZI': '水出壬子方。为交如不及。短寿败财，凶。',
    'QIAN-HI': '水出乾亥方。亦为交如不及。多主败绝，凶。',
    'GN-YO': '水出庚酉方。为生来破旺主穷苦。初年发丁。久则败绝。',
    'KUNN-SN': '水出坤申方。为冲破向上临官。伤成才之子。夭寿乏嗣。贫苦不利。',
    'GENG-YN': '水出艮寅方。为情过而亢。初年发丁有寿不发财。功名不利。',
    'BN-WU':
      '左水倒右。出丙午者。合文库消水。杨公救贫进神水法。书云“禄存流尽佩金鱼”。主发富贵。福寿双全。少差即绝。不可乱用。',
  },
};

/**
 * 二十四山劫煞断
 *
 * @public
 * @see {@link ../assets/knowledge/shan24jiesha.md}
 */
export const shan24JieShaDuan: JueDuanType<SH24JSType> = {
  RN: `
壬山原来劫在申，门为黄肿断死人，
灶堕胎怀井为药，磨疯手足分左右，
碓为忤逆子无情。
`,
  ZI: `
子癸原来劫居巳，桥路引蛇到宅中，
白蚁原因灶头疯，碓井女瞎男吐红，
砻安此位姑怕媳，胎中坏死磨为凶，
山峰高应士子穷，庙宇伤胎瞎眼翁。
`,
  GW: `
子癸原来劫居巳，桥路引蛇到宅中，
白蚁原因灶头疯，碓井女瞎男吐红，
砻安此位姑怕媳，胎中坏死磨为凶，
山峰高应士子穷，庙宇伤胎瞎眼翁。
`,
  CO: `
丑山门路莫居辰，带乙行来自缢人，
井为毒死他人子，灶应谋夫妻不仁，
砻磨小儿无大便，碓应六指磨亦然，
被人杀死因庙宇，古树由来克妻评，
高梁跌死池塘绝，厕所还应烂背人。
`,
  GENG: `
艮山丁劫午莫兼，门路行来火必灾，
井碓该方妇吐血，砻为瞎眼磨为颠，
水主堕胎池瘟祸，古树双盲实可怜，
桥梁兼未遭雷打，碓为忤逆子无情，
庙宇心疴树死人。
`,
  YN: `
寅山未劫莫兼坤，门路行来吐血论，
井居此位嗟尤甚，水来鼻血莫堪闻，
灶主疯脚聋哑女，碓被牛伤人命凶，
磨应软手高梁火，古树参天雷打死，
庙宇原来主伤胃，厕所背疽烂子孙。
`,
  JA: `
甲山庚向丙方高，女人瞎眼乱吵吵，
路能放火烧人屋，灶应绝嗣井寿短，
砻碓磨应巫道书，古树高梁染疯疾，
庙宇池塘疯背腰，厕所生人软无骨。
`,
  MO: `
卯山门路莫走丁，兼午遭火瞎人眼，
井应小儿雷惊死，路来兼未雷劈人，
砻碓磨应片生熟，庙宇出人多脚趾，
高粱崖石打死人。
`,
  YI: `
乙山劫申莫奈何，门路开申哭老婆，
井主贫寒灶无骨，路坎还应寡妇多，
一坎一个细游荡，砻碓灶颠狗拖过，
桥梁心疾池黄肿，古树还唱鼓盆歌，
厕所申方寄此处，翁媳同奸笑呵呵。
`,
  CN: `
辰山未路出尼姑，井应斋公断无差，
脱肛病起砻碓磨，池塘分明是药炉，
庙宇官事蚁怪生，古树损丁逢冲合。
`,
  XUEN: `
巽山癸劫盗贼生，井遭黄肿灶主贫，
砻遭水厄男人死，安碓须知碓死人，
石生戏子蚁池照，桥梁跌死应男人，
磨应多脚水多指，厕所逞雄打死人。
`,
  SI: `
巳山酉劫实堪嗟，门路池塘女贪花，
井应生人无头面，砻碓耳聋妇女家，
有磨雌鸡常报晓，树应童死石女哑，
庙宇频然人走唱，高梁屠户厕败家，
水神来此人丁绝。
`,
  BN: `
丙山劫辛莫乱猜，井居此位得妻才，
门路行来男女秀，石头打劫灶火灾，
砻碓池塘同水断，男女成婚不用媒，
厕所须防牛遭虎，庙宇持刀兄弟乖，
桥梁古树兄弟丐，磨疯女子淫乱来。
`,
  WU: `
午山见酉忌土堆，门路小屋成堕胎，
井灶妇人多烂脚，碓生淋症女妇人，
古树妇人遭水厄，磨居此位经不对，
水来鼻毁女应真，石应毒死女投亲，
高梁人遭牛马死，庙宇耳聋妇女身，
厕所可怜难享寿，池塘有水妇女淫。
`,
  DN: `
丁山门路莫行寅，兼甲麻疯水石评，
灶破血才主盲目，碓磨石砻主吐血，
古树凶亡桥独脚，庙火焚烧小儿身，
厕所当然多痢疾。
`,
  WI: `
未山癸劫在子方，门路又有六指郎，
井居此位少生养，灶多脚趾最清祥，
见水黄肿主堕胎，砻碓磨来证女伤，
高梁古树池塘照，男女投河命早亡，
庙应男女同服药，必因兼丑断不祥，
厕所多被牛杀命，岁合冲破命难当。
`,
  KUNN: `
坤山乙水莫乱猜，门路当权寡妇方，
井应毒药桥吊颈，怪石抱儿死一堆，
砻碓石磨姑怕媳，庙火妇人心气灾，
池塘水照嫂奸叔，厕所兼辰割颈来。
`,
  SN: `
申山门路居癸方，得运行来发一场，
砻碓磨刀为药碗，井盲伤屋下科场，
怪石嵯峨为忤逆，水来大贼出江洋，
庙宇小孩有缺唇，池塘分明咳嗽亡，
桥应尼姑做猴戏，厕所古树怪异多。
`,
  GN: `
庚山甲向劫在离，门路妇人右眼奇，
井为黄肿多瞽目，石山灶位大无锭，
砻碓嗟烂人手脚，小产皆因水不宜，
峰多贼逆最凶狠，古树神坛必无依，
高梁烧脚盲因厕。
`,
  YO: `
酉山之劫在寅方，门路来时引虎狼，
灶位当时灾六畜，砻碓磨石手疯狂，
怪石粗顽人被虎，池塘火死桥割脚，
厕所发事瞎眼郎，庙宇槌胸嗟命短，
高峰又嫌失火伤。
`,
  XN: `
辛戍畏丑一剑差，路来重舌地翻棺，
井损血才牛跌死，桥生哑子於不样，
灶位生儿无上齿，井砻碓磨败家端，
水来弟妇打死嫂，池生黄肿厕停棺，
古树参天丑兼艮，兄弟为僧上古庵。
`,
  XU: `
辛戍畏丑一剑差，路来重舌地翻棺，
井损血才牛跌死，桥生哑子於不样，
灶位生儿无上齿，井砻碓磨败家端，
水来弟妇打死嫂，池生黄肿厕停棺，
古树参天丑兼艮，兄弟为僧上古庵。
`,
  QIAN: `
乾山怕卯人不正，井方带甲麻疯儿，
砻碓磨石头风痛，风摇树影半颠痴，
水生贼盗生黄肿，男人跏跛定无疑，
乱石成堆居此位，癞痢无世不相逢。
`,
  HI: `
亥山乙位怕带辰，门路单行发殡真，
灶井兼辰人吊颈，砻碓磨夸张奕称，
古树颠狂男人应，池塘吊颈哭坟人，
厕室当鬼随母嫁，桥梁蚯蚓灶下鸣。
`,
};

/**
 * 透地六十龙断
 *
 * @public
 * @see {@link ../assets/knowledge/td60long.md}
 */
export const td60LongDuan: JueDuanType<TD60LONGType> = {
  'RN-ZI':
    '七子三癸是羊刃，出人少亡招贼侵，损妻克子多祸事，申子辰年应，若见庚辛水，棺内可撑船。差错、空亡',
  'YI-CO':
    '为七癸，三子旺人丁，食足衣丰富贵亨，尚见午丁水，棺内烂泥五寸深。巳酉丑年应。差错、空亡',
  'DN-CO':
    '为正癸龙，出聪明又玲珑，富贵悠长久，诸事乐时雍，若见未方水，棺内若塘中，申子辰年应。珠宝',
  'JI-CO':
    '五丑癸是黑风，女妖男痨百事凶，疯疾最可，败绝最可痛。又见亥方水，井有水蚁虫，寅午戍年应，水困火坑中。火坑',
  'XN-CO':
    '为正丑龙，三十富贵大兴隆，人丁大旺诸事吉，慈恭孝友遇凡庸。若见寅上水，棺入泥浆中。珠宝',
  'GW-CO':
    '七丑三艮犯孤虚，葬后官灾实可必，诸事不称意，众房皆不遂，口舌退财多败绝，亥卯未年期。又见干方水，树根穿棺定不疑。差错、空亡',
  'BN-YN':
    '七艮三丑穴平常，纵横发福不久长，寅午戍年应。诸事皆吉祥。若见亥方水，棺烂入泥浆。差错、空亡',
  'WO-YN':
    '气正艮龙，富贵荣华世代隆，申子辰年登科应，只怕卯水冲，棺定有凶。珠宝',
  'GN-YN':
    '五艮五寅是孤虚，火坑黑风空亡的，葬后三六九年疯疾见，人伦败绝最堪啼，又见申方水，井内有水泥。火坑',
  'RN-YN':
    '气正壬(寅)龙，富贵人财丰，田业广置多福泽，巳酉丑年逢，倘见午方水，棺在水泥中。珠宝',
  'JA-YN':
    '七寅三甲主平稳，一代兴发好，后世多眼疾，若见坤方水，棺中白蚁烹。差错、空亡',
  'DN-MO':
    '丁卯气七甲三寅人平常，酒色飘流懒惰扬，寅午戍年应，方忌亥水多泥浆。差错、亡',
  'JI-MO':
    '气正甲龙，人财两发衣食丰，若见巽方水，老鼠穿棺中，申子辰年应不爽，人子哀亲莫糊胸。珠宝',
  'XN-MO':
    '五甲五卯是黑风，火坑败绝出盗翁，三房先绝后及众，官灾叠见事多凶，若见庚申水来现，烂泥一尺入棺中，此坟若还不移改，人财败绝永无踪。火坑',
  'GW-MO':
    '正卯龙，富贵双全出人聪，田庄广进多美境，人安物阜百事通，若见巳方水，木根穿棺定不容，巳酉丑年应。珠宝',
  'YI-MO':
    '三乙七卯，孤寡败绝多寿夭，后代腰驼并曲脚，纵然有人亦难保，又见戍方水，井内泥水养鱼好。差错、空亡',
  'WO-CN':
    '七乙三卯，富贵寿长把名标，倘见申酉水，棺内有蚁虫。巳酉丑年应。差错空亡',
  'GN-CN':
    '正乙龙，出人发福永不穷，七代富贵，出人秀超，群冠世雄，亥卯未年见，只怕丁水主火凶。珠宝',
  'RN-CN':
    '五辰五乙是黑风，火坑败绝最足痛，口舌官非少亡惨，离乡和尚永别踪，若见戍方水，棺内泥若脓。火坑',
  'JA-CN': '正辰龙，七十五年富贵丰，若见子癸水，井内泥水攻。珠宝',
  'BN-CN':
    '七辰三巽，主外发福，衣食平稳，招赘入房，后代人败绝，申子辰年应，若见寅申水，木根穿棺，亡人不安。差错、空亡',
  'JI-SI': '七巽三辰，福贵均平，亥卯未年应，若见干上水，尸骨入泥坑。',
  'XN-SI':
    '五巳五巽是黑风，火坑败绝百事凶，葬后五年并七载，人丁六畜散如风，又见丑方水，老鼠棺内作窠攻。火坑',
  'GW-SI': '正巳龙，荣华富贵福最隆，寅午戍年应有验，癸水来冲棺泥封。',
  'YI-SI': '七三丙，三年七载口舌并，若见卯水来棺木，内外泥浆侵。',
  'DN-SI': '正巽龙，荣华富贵定光宗，巳酉丑年应不克，只怕午丁水来冲。',
  'GN-WU':
    '七丙三巳，人兴财旺有其日，世代进田多吉庆，申子辰寅午戍年应，忌见甲寅水，泥水损丁字。差错、空亡',
  'RN-WU':
    '正丙龙，富贵双全出英雄，三十七代人丁旺，景星庆云授诰封，忌见申方水，井内泥浆凶。珠宝',
  'JA-WU': '五丙五午是火坑，巳酉丑年家败倾，又见午丁水，棺木底烂崩。火坑',
  'BN-WU':
    '正午龙，家业平平发人聪，谋事稳妥诸般吉，申子辰年巳丑逢，若见丑艮水，泥水入棺中。珠宝',
  'WO-WU':
    '七午三丁，官讼口舌纷，人丁平常过，岁招横事临，若见子癸水，寅午戍年应。差错、空亡',
  'XN-WI':
    '七丁三午，出入俊秀性不鲁，户发如雷响，栗陈贯朽库，若见午方水，棺内水穿出。差错、空亡',
  'GW-WI': '正丁龙，出入富贵寿不穷，若见庚方水，亡人灾厄凶，亥卯未年应。珠宝',
  'YI-WI':
    '五丁五未犯孤虚，火坑败绝最堪啼，又见巳水来，尸骨巳成泥，巳酉丑年应。火坑',
  'DN-WI':
    '正未龙，双全富贵长久逢，申子辰年应不爽，寅午戍岁定遭凶，倘见丑艮水，棺在水泥中。珠宝',
  'JI-WI':
    '七未三坤犯孤虚，殃祸退财定不移，寅午戍年出疯迷，己恶人见疑，若见亥壬水，儿孙横事必。差错、空亡',
  'RN-SN':
    '七坤三未破财，疯痰萧索实可哀，巳酉丑年应，诸药难调灾，若见午方水，棺内水洋来。差错、空亡',
  'JA-SN':
    '正坤龙，出人聪俊富贵丰，申子辰年必有应，世代乐无穷，若见艮流水，棺内两分凶。珠宝',
  'BN-SN': '五申五坤是黑风，火坑败绝主贫穷，若见子癸水，井内泥水凶。火坑',
  'WO-SN': '正申龙，出人聪明寿长，富贵双全，若见甲方水，棺内泥水侵。珠宝',
  'GN-SN': '七申三庚犯孤虚，官灾事出奇，又见干方水，亡人受灾逼。差错、空亡',
  'GW-YO': '七庚三申富贵扬，人财两发福寿长，若见丁方水，棺内是小塘。差错、空亡',
  'YI-YO': '正庚龙，出人富贵最聪明，若见辰宫水，棺内水泥坑。珠宝',
  'DN-YO': '五庚五酉是火坑，百事不遂，绝人丁，若见癸上水，棺内泥水永。火坑',
  'JI-YO':
    '正酉龙，文武近三公，申子辰年应，世代富贵丰，若见卯方水，棺板不全空，珠宝',
  'XN-YO':
    '七酉三辛富贵攸，人丁田财旺无忧，亥卯未应乾水，冲棺又堪愁。差错、空亡',
  'JA-XU':
    '七辛三酉，一代富贵发不久，后出僧庙道，寅午戍年有，孤寡又败绝，诸事忧见忧，若见壬方水，墓生奇怪丑。差错空亡',
  'BN-XU':
    '正辛龙，人丁发达乐时雍，登科及第早，申子辰年逢，若见甲卯水，木根穿棺中。珠宝',
  'WO-XU':
    '五戍五辛犯孤虚，火坑败绝人多疾，和尚少亡孤寡惨，损妻克子定无疑，午未年前见，方知受灾奇，若见申方水，棺内不全的。火坑',
  'GN-XU':
    '正戍龙，富贵荣华衣食丰，巳酉丑年多见喜，三十六年出人聪，若见午丁水，棺骨入泥中。珠宝',
  'RN-XU':
    '七戍并三乾，出入无财损少年，离乡僧与道，损妻克子二房占，申子辰年应，败退无期算，若见辰戍水，棺内泥浆灌。差错、空亡',
  'YI-HI':
    '七乾并三戍，出入孀寡少亡孤，疯疾癔哑实足惨，寅午戍年叠见哭。倘见坤宫水，棺内白蚁屋。差错、空亡',
  'DN-HI':
    '正乾龙，富贵大发衣食丰，申子辰年多吉庆，只怕巽水冲，棺内水泥凶。珠宝',
  'JI-HI':
    '五乾五亥并黑风，火坑主败绝，申子辰年寅午戍，人走他乡多奇怪，若见庚酉水，木根穿棺害。火坑',
  'XN-HI': '正亥龙，人财两发福悠隆，若见午丁水，棺板不全凶。珠宝',
  'GW-HI':
    '七亥并三壬，出官享丰亨，人丁昌炽多美境，申子辰年应，又见辰方水，棺内不洁净。差错、空亡',
  'JA-ZI':
    '甲子气七壬三亥为小错，甲子冲棺出黄肿疯癫女哑男痨，若见丙上水，棺内有泥浆，口舌官非，巳酉丑年应。差错、空亡',
  'BN-ZI':
    '为正壬龙，大吉昌，添人进口置田庄，富贵双全定有应，诸事尤吉祥，若见未坤水，棺廓内外是小塘。申子辰巳酉丑年应。珠宝',
  'WO-ZI':
    '五子五壬是火坑，出人风流败人伦，不唯木根穿棺内，白蚁从此生，基见巽方水共内，泥水二三分。寅午戍申子辰年应。火坑',
  'GN-ZI':
    '为正子龙，富贵双全福悠隆，人财六畜盛，申子辰年丰，若见巽方水，棺内泥难容。珠宝',
};
/**
 * 穿山七十二龙断
 *
 * @public
 * @see {@link ../assets/knowledge/cs72long.md}
 */
export const cs72LongDuan: JueDuanType<CS72LONGType> = {
  'GN-ZI': '庚子亦名是吉龙，富贵双全福自隆，人财六畜盛，申子辰年应。大吉。',
  'RN-ZI':
    '壬子出人少亡招贼侵，损妻克子事多凶，申子辰年应；又见庚辛水，棺内可行舟。次吉。',
  GW: '大凶。',
  'YI-CO':
    '乙丑龙必旺人丁，食足衣丰富贵亨，倘见午丁水，棺木泥水五寸深；巳酉丑年应。半吉。',
  'DN-CO':
    '丁丑亦列为吉龙，出人聪明又玲珑，富贵悠长久，诸事乐融融；若见未方水，棺内如水塘，申子辰年应。大吉。',
  'JI-CO':
    '己丑龙来是黑风，女妖男痨百事凶，疯疾最可怕，败绝实可痛；寅午戌年应。大凶。',
  'XN-CO':
    '辛丑原来是吉龙，三十富贵大兴隆，人财六畜诸事吉，慈恭孝友迈凡庸。半吉。',
  'GW-CO':
    '癸丑龙入犯孤虚，葬后官非必不休，诸事不称意，众房皆不遂；若见干方水，树根穿棺定无疑；亥卯未年应。大凶。',
  GENG: '大凶。',
  'BN-YN': '丙寅气入穴平常，纵横发富不久长，寅午戌年中，诸事皆吉祥。次吉。',
  'WO-YN': '戊寅原来是富龙，富贵荣华世代隆，申子辰年登科应。大吉。',
  'GN-YN':
    '庚寅气入是孤虚，火坑黑风空亡宫，葬后三六九年疯疾见，人伦败绝最堪怜；若见申方水，井内有泥水。大凶。',
  'RN-YN':
    '壬寅是吉龙，富贵人财丰，田产广置多福泽，巳酉丑年逢；倘逢午方水，棺在泥水中。吉。',
  'JA-YN':
    '甲寅原本是凶龙，一代兴发好，后世多眼病；若见坤方水，棺中白蚁多。凶。',
  JA: '大凶。',
  'DN-MO': '丁卯气入穴平常，酒气飘流懒情扬，寅午戌年应，亥水多泥浆。半吉。',
  'JI-MO':
    '己卯气正吉龙，人财两发衣食丰，若见巽方水，老鼠穿棺中；申子辰年应不爽。半吉。',
  'XN-MO':
    '辛卯原来是绝龙，火坑败绝出盗翁，三房先绝后及众，官灾迭见事多凶；若逢申方水，滥泥一尺入棺中，此坟若还不移改，人财败绝永无踪。大凶。',
  'GW-MO':
    '癸卯原来是吉龙，富贵双全出人聪，田庄广进多美景，人安物阜百事通；若见巳方水，木根穿棺中，巳酉丑年应。半吉。',
  'YI-MO':
    '乙卯龙非吉，孤寡败绝多寿夭，后代腰跎并曲脚，纵然有人命难保；又见戌方水，井内水养鱼。大凶。',
  YI: '大凶。',
  'WO-CN':
    '戊辰气入必定好，富贵寿长把名标；倘见申酉水，井内有蚁虫；巳酉丑年应。半吉。',
  'GN-CN':
    '庚辰原来是吉龙，出人发福永不穷，七代富贵，子孙秀超群，冠世英雄；亥卯未年应；丁水有火灾。吉。',
  'RN-CN':
    '壬辰气是绝龙，火坑败绝最足痛，口舌官灾少亡惨，离乡和尚永无踪；若见戌方水，棺井泥水兼蚁虫。大凶。',
  'JA-CN': '甲辰气入是吉龙，七十五年富贵丰；若见子方水，井内泥水深。大吉。',
  'BN-CN':
    '丙辰入气亦发福，衣食平平过，入赘过房，后代人败绝；若见寅申水，木根穿棺，亡人不安。大凶。',
  XUEN: '大凶。',
  'JI-SI':
    '己巳气仍半吉龙，富贵均平，亥卯未年应；若见干上水，尸骨入泥坑。大凶。',
  'XN-SI':
    '辛巳也算是吉龙，富贵荣华定光宗；巳酉丑年应不爽，丁水火灾有蚁虫。大吉。',
  'GW-SI':
    '癸巳原来是绝龙，火坑败绝百事凶，葬后五年并七载，老丁六畜败若风；若见丑方水，老鼠穿棺作窠臼。大凶。',
  'YI-SI':
    '乙巳气是吉龙，荣华富贵福最隆；寅午戌年应有验，癸水来冲泥封棺。半吉。',
  'DN-SI': '丁巳原来是凶龙，三年七载口舌并；若见卯水来，棺木泥中有蚁虫。半吉。',
  BN: '大凶。',
  'GN-WU':
    '庚午气入亦有益，人兴财旺有其日，世代兴业多吉庆；申子辰寅午戌年中；若见甲寅水，泥水损人丁。吉。',
  'RN-WU':
    '壬午气入是福龙，富贵双全出英雄，三十七代人丁旺，景星庆云受诰封；忌见甲方水，井内泥浆攻。大吉。',
  'JA-WU':
    '甲午气入是火坑，财败人亡最堪惨，次坟若还不改移，房房必定少后裔；又见午丁水，棺底烂崩有火灾，巳酉丑年见。大凶。',
  'BN-WU':
    '丙午气是吉龙，家业平平发人聪，谋事稳妥诸般吉，巳酉丑年应；若见丑艮水，泥水兼蚁虫。大吉。',
  'WO-WU':
    '戊午是吉龙，房房发人丁，代代多豪富，岁岁吉事临；若见子癸水，井内有白蚁；寅午戌年应。大吉。',
  DN: '大凶。',
  'XN-WI': '辛未气入亦吉龙，出人俊秀性不鲁，户发如雷响，栗陈贯朽库。大吉。',
  'GW-WI':
    '癸未亦算是吉龙，出人富贵寿不穷，亥卯未年应；若见庚上水，阴魂不安阳人凶。半吉。',
  'YI-WI':
    '乙未气入犯孤虚，火坑败绝最堪啼，绝龙又见巳水来，尸骨已成泥；巳酉丑年应。大凶.',
  'DN-WI':
    '丁未气入是吉龙，双全富贵长久逢；申子辰年应不爽，寅午戌年足财丰；倘见丑艮水，骨在泥水中。大吉。',
  'JI-WI':
    '己未来龙不太宜，灾祸退败必不移，寅午戌年出疯迷，已恶人见疑，若见亥壬水，儿孙横事骨生蚁。大凶。',
  KUNN: '大凶。',
  'RN-SN': '壬申龙来是福基，葬后儿孙着绯衣；若见午方水，阴阳受灾逼。大吉。',
  'JA-SN':
    '甲申气入是吉龙，子孙聪明富贵丰；申子辰年必有兆，世代乐无穷；若见艮流水，骨骸定不净。大吉。',
  'BN-SN': '丙申气入是黑风，火坑败绝家业穷；若见子癸水，骨入泥水中。大凶。',
  'WO-SN':
    '戊申气入是福龙，出人聪明寿长久，双全富贵发不休；若见甲方水，骨在泥水中。大吉。',
  'GN-SN': '庚申气入犯孤虚，孀寡事出奇；又见干方水，阴魂受灾逼。大凶。',
  GN: '大凶。',
  'GW-YO': '癸酉来龙富贵扬，人财两发福寿长；若见丁方水，井内若小塘。吉。',
  'YI-YO': '乙酉龙入福无比，出人富贵最聪慧；若见辰方水，井内泥水坑。吉。',
  'DN-YO': '丁酉气入是火坑，百事不遂绝人丁，若见癸方水，树根泥水坑。凶。',
  'JI-YO':
    '己酉是福龙，文武出三公；申子辰年应，世代富贵丰；若见卯方水，白蚁必入侵。大吉。',
  'XN-YO': '辛酉气入龙平常，富贵不久长；亥卯未年应，干水冲堪忧。半吉。',
  XN: '大凶。',
  'JA-XU':
    '甲戌气入是恶龙，一代富贵发不久，后出僧庙道，寅午戌年有，孤寡又败绝，诸事多见忧；若见壬方水，墓生奇怪丑。大凶。',
  'BN-XU':
    '丙戌气入是福龙，人丁发达乐长春，登科及第早，申子辰年应；若见甲卯水，木根穿棺中。半吉。',
  'WO-XU':
    '戊戌龙入犯孤虚，火坑败绝人多疾，和尚少亡孤寡惨，损妻克子定无疑，午未年中见，方知受灾奇；若见申方水，骨骸不清洁。大凶。',
  'GN-XU':
    '庚戌气入亦吉龙，富贵荣华衣食丰，巳酉丑年多见喜，三十六年出人聪；若见午丁水，棺骨入泥中。大吉。',
  'RN-XU':
    '壬戌气入非吉龙，出人无材损少年，离乡僧与道，损妻克子二房占，申子辰年应，败退其无算；若见辰方水，泥水半金罐。凶。',
  QIAN: '大凶。',
  'YI-HI':
    '乙亥气入是凶龙，出人孀寡少年孤，疯疾哑聋实足惨，寅午戌年迭见哭；倘见坤宫水，棺作白蚁屋。凶。',
  'DN-HI':
    '丁亥气入是福龙，富贵大发衣食丰，申子辰年多吉庆，只怕巽水冲，棺中泥水凶。大吉。',
  'JI-HI':
    '己亥气入是黑风，火坑败绝人无踪，申子辰年寅午戌，人走他乡多奇怪；若见庚酉水，木根穿指害。凶。',
  'XN-HI': '辛亥气入是吉龙，人财两发福悠隆，若见午丁水，棺板不全凶。大吉。',
  'GW-HI':
    '癸亥气入是福龙，出官享丰厚，人丁昌炽多美景，申子辰年应；又见辰方水，棺入不洁净。吉。',
  RN: '大凶。',
  'JA-ZI':
    '甲子气入是小错，甲子冲棺，出黄肿疯瘫癞女哑男痨；若见丙上水，棺入有泥浆；巳酉丑年应。大凶。',
  'BN-ZI':
    '丙子来龙大吉昌，添人进财置田庄，富贵双全定有应，诸事优吉祥，申子辰、巳酉丑年应。半吉。',
  'WO-ZI':
    '戊子原来是火坑，风流浪子败人伦，不惟木根穿棺木，白蚁从此生；若见巽方水，棺内浆水二三分，寅午戌、申子辰年应。大凶。',
};

/**
 * 八煞黄泉断
 *
 * @public
 * @see {@link ../assets/knowledge/bashahuangquan.md}
 */
export const baShaHuangQuanDuan: JueDuanType<DPZZType> = {
  RN: '壬山沧沧水云辰，砻碓磨坊一同寻，乙辰有路人吊死，若有圆墩食药人，辰方有树猴上枝，艮丑有桥出仙人，乾亥有石高照破，两宫相会破家庭。',
  ZI: '子山辰水实难精，坎纳申辰出富人，乙辰高照人命见，虽然发福祸不停，刑妻克子也要断，为有高破被水侵，气死眠死难分别，两石相对气死人，若见横石人眠死，水路宜分黄白清，乙辰照见出吐血，何愁祸福无刑晶。',
  GW: '癸山也是忌见辰，代代出得短命人，若是听得砻碓响，烂背之人不消停，左右桥梁并庙宇，削发为尼出僧人，乙辰有路来照穴，其家定有投水浸。',
  CO: '丑山逢寅祸见深，寅午戌年定火焚，兄弟不和如何断，丑上廉贞定杀人，未坤双潮人吐血，代代寡妇破家门，后出屠户谁人晓，若见城乡一样评。',
  GENG: '艮山见寅祸更明，若见高石瞎眼人，兼之寅视麻疯出，石口有藏虎咬人，若见狗咬也难论，看见大小方有灵，发事命案人人晓，刑妻克子永无兴。',
  YN: '寅山见艮耳角边，若见有只缺耳人，社坛庙宇皆须忌，唯有独树定无情，塘窟水圳祸患侵，代代儿孙杀戮人。',
  JA: '甲山原来最怕申，庚申砂水出贼人，若有砂水同照入，定主他人打我们，若是反出我打他，其方有树定杀人，发事破财人口损，离乡外配不回程。',
  MO: '卯山煞见最难精，卦卦配合得真灵，庚申水来人命见，开棺相验土塌人，庚申水走难分别，路死扛尸此中途，红水飘飘血难死，桥梁古树破家庭，日后必定遭军贼，冲破之时定火焚。',
  YI: '乙山辛向水忌申，若见申水带锁人，申方塘窟有路石，红杉红裤遭罪刑，日后官灾出乞丐，刑妻克子永无兴，若见申方有桥梁，出人跛症是其因。',
  CN: '辰山酉水最难当，酉方有树瞎目盲，若是有石堕胎死，若见有桥吐舌唇，山配水来龙配向，定出喑哑缺唇人。',
  XUEN: '巽山酉水主重妻，路水牵动一同推，若有圆墩大石闭，定主鸡母作雄啼，女人贪花定无数，师巫走鼠断不移。',
  SI: '巳山酉水发大家，龙真穴得享荣华，如穴性伪多有祸，刑妻克子断不差，依然富贵不长久，长有命案带锁枷， 若见西方树水照，代代儿孙做戏家，日为阴会夜为阳，出现之后即绝家。',
  BN: '丙山壬向亥是真，天星化穴一同寻，若见乾方同水路，代代出得吐血人，房份纷纷要分别，左右砂水要推详，壬多亥少损长子，亥多壬少二三详。',
  WU: '午山亥水杀最差，乾亥双潮人吐红，乾方高照子打爹，刑妻克子永远凶，亥壬同来遭火厄，亥方有树定见凶，桥梁厕室一同断，神坛社庙一同寻，亥水直出最难分，十八女子私偷情。',
  DN: '丁山本是南极星，若见亥水本无情，酉方见丁峰高照，代代出得高寿人，清中一浊难分别，乾亥双潮有凶闻，虽旺申明作瞎职，到头必定有灾星。',
  WI: '未山卯水定雷伤，或来或去要得详，若见乙卯疯助脚，挨着甲卯出癫狂，官事命案祸和恶，赌钱主人破家亡，红水飘飘血难死，水响堂声—样断。',
  KUNN: '坤山变火分年运，世光纷纷带锁柳，门前树林并大石，红水飘瓢恶和祸，寡妇遭淫多喝首，一场命案削发衣，十八女子带锁枷，神仙妙药也难医。',
  SN: '申山卯水定不良，申龙卯向一同殃，若见乙卯同来劫，定然克妻三五场，若然卯方有大石，盲目之人定见伤，盲目皆因左边损，弄猴之人出一场。',
  GN: '庚山长生曜在巳，贫贫富富也有之，若见巳方同来路，巳酉丑年蛇入屋，巳方有路并开丫，定然蛇来会咬人。',
  YO: '酉山巳水多杀戮，生生死死断不续，左右定闭会养尸，蛇来入屋定然浊，官事破财人口损，赤蛇绕印佩堂印，数岁之人死得凶。',
  XN: '辛山已水盖貌浓，男孤女寡定然凶，巳方路去难分别，女人偷去也无踪。',
  XU: '戌山午水发富贵，马上堂阶出聪明，午方有水惹火灾，重重叠叠定火焚，若然辛戌人重舌，先发富贵后损丁。',
  QIAN: '乾山午水最难当，午山乾水发富强，富贵贫贱为何说，先天后天会一方，金水相逢杀太重。爻路相通富贵长，惟有火焚如何说，千方立碑福绵长。',
  HI: '亥山午水渺茫茫，人命富贵哭一场，午方高耸无制化，周游天下子打娘，山配水来龙配向，山水桥梁要推详，万岁之中要谨避，年年月月断讼详。',
};

/**
 * 子午斜流断
 *
 * @public
 * @see {@link ../assets/knowledge/ziwuxieliu.md}
 */
export const ziWuXieLiuDuan: JueDuanType<ZiWuShaType> = {
  ZI: '子上不堪居，孤寒定不虚，男人遭凶死，女人惹官非。凶',
  CO: '丑上最荣昌，广进好田庄，女人年贵子，为官近帝王。吉',
  YN: '寅上主孤寒，家中事事空，若不遭大贼，病讼见重重。凶',
  MO: '卯上是孤贫，更主妇人淫，产死并吐血，瘟死病沉沉。凶',
  CN: '辰上最风光，富贵无辰长，出入多慷慨，忠孝姓名扬。吉',
  SI: '巳上亦平稳，家败亦无兴，男人三五口，农夫田庄勤。吉',
  WU: '午上是火光，兵贼动刀枪，婴儿得大害，水死及虎伤。凶',
  WI: '未上多安康，丁未财旺相，若有龙局吉，必定出官乡。吉',
  SN: '申上主孤贫，两脚走无停，日夜多思留，谋为不逐心。凶',
  YO: '酉上主恶病，巧计亦难行，孤寡最难当，闺门风声淫。凶',
  XU: '戌上足衣裳，家中多进益，妇人皆和顺，男子定及第。吉',
  HI: '亥上真不济，亦无好男女，龙上稍不吉，久为寡母居。凶',
};

/**
 * 九星吉凶断
 *
 * @public
 * @see {@link ../assets/knowledge/zibaijiuxing.md}
 */
export const jiuXingJiXiongDuan: JueDuanType<JiuXing> = {
  tl: `一白水先天在兑（西方），后天居坎（北）上，应贪狼之宿，号为（文昌），其色白；士人遇之必得其禄，庶人遇之定进财喜，为第一吉神。
一白水，为中男，为魁星，主文学艺术，聪明灵秀，少年科甲，主声名显达，名播四海，紫白诀云：“一白为官星之应，主宰文章。”
一白水，于身为血，为精，为肾，为耳，所以当坎宫有缺陷时，便会产生相应的病变；玄空秘旨云：“坎宫高塞而耳聋漏道在坎宫，遗精泄血。”玄机赋云：“坎宫缺陷而坠胎。”飞星断云：“以象推星，水欹斜兮失志。”
此星先天在坤，后天在坎，别名贪狼星，又号为文昌星，五行属水，其色为黑为蓝又为白。在星盘上，居中宫、乾宫、兑宫时，为生旺；在一年四季中，冬季和秋季为生旺。其余宫位和其余季节，则为衰死。生旺时，旺丁旺财，利文利武，少年科甲，名播四海，多生聪明智慧男子。土人遇之，必得官禄；常人遇之，定进财喜。是为九星中第一吉星。
当其衰死之时，容易惹起酒色之祸，或因酒色而家散财破。对身体容易患后天耳病，肾脏衰竭，以及膀胱、睾丸、疝气、子宫的疾病。严重的会刑妻瞎眼、夭亡飘荡。`,
  jm: `二黑土先天在坎（北方），后天居坤（西南），应巨门之宿，号为（病符），其色黑；玄机赋云：“巨入艮坤，田连阡陌。”当旺时发田财，旺人丁；二运壬山，甲山、午山、丁山、酉山、辛山、向上有水，主富。天玉经云：“坤山坤向水流坤，富贵永无休。”须配合峦头断应。但为晦气病符星，飞星赋云：“若夫申尖兴讼。”（原注：尖者，尖峰也，在一九为文笔，在四为画笔，在申为词讼笔。
二星坤位属西南，未坤申三山。）主忧愁抑郁有所不免；为克煞时，主孕妇有坐草之虑，或涉妇人而兴讼，或因女子以招非，大抵此方不宜修动，犯者阴人不行，患病必久。
此星别名巨门，又号病符星，五行属土，其色为黄、黄黑。在星盘上，居中宫、乾宫、兑宫时，为生旺。在一年四季中，三月、六月、九月、十二月生旺。其余各宫位和其余月份为衰死。生旺时可得权得财、置业兴家、旺丁旺财，多出武贵，妇人当家，多谋吝啬。
当其衰死时，容易有色祸，有火灾之厄；容易招惹官非，并因此而损失钱财；容易引起各种疾病，比如流产、腹疾恶疮、各种皮肤病，特别是下阴及两腋部位。如果居屋阴暗气闷，则容易出现女鬼或阴人作崇。久居则代代寡妇当家，病人日久不愈。`,
  lc: `三碧木先天在艮（东北），后天居震（东方），应禄存之宿，号为（蚩尤），其色碧绿；天玉经云：“卯山卯向卯源水，大富石崇比。”当运主兴家立业，而富贵功名；震为正东，管甲卯乙三山，以卯为正东。失运时，三碧是贼星，主官非盗劫。紫白诀云：“蚩尤碧色，好勇斗狠之神。”飞星赋云：“碧本贼星，怕见探头山位。”这句赋文结合了峦头，贼配探山头定遭贼劫。若遇克煞则官灾讼非立见，残病刑妻遭其凶，犯之者脓血之灾，触之者足疾大祸。震为木，木主仁，若然失运峦头差，便变成不仁，飞星赋云：“木反侧兮无仁。”
此星别名禄存，五行属木，绰号蚩尤。其色青绿。在星盘上，居中宫、乾位、兑位时，为生旺。在一年四季中，春季和冬季为生旺。其余宫位和季节，则为衰死。生旺时，兴家立业、富贵功名、贡监成名，长房大旺。
当其衰死时，易得官讼，易惹贼盗，易造成残病刑妻，易患脓血之灾、足疾大祸。因其如蚩尤好斗，易形成斗牛之煞、官非不断。`,
  nq: `四绿木先天在坤（西南），后天居巽（东南），应文曲之宿，号为（文昌），其色青绿；当其旺主登科甲第、君子加官、小人进产；紫白诀云：“盖四绿为文昌之神，职司禄位。”为克煞时，主有疯哮自缢之厄、淫佚流荡，必势所有。飞星赋云：“风郁而气机不利”（原注：在天为风，在人为气，巽宫窒塞，故有此应）。飞星赋云：“巽如反臂，总怜流落无归。”（原注：四绿到处，砂形如臂向外反抱者，主流落他乡，因风性飘荡故也）。
此星别名文曲，五行属木，其色翠绿。在星盘上，居中宫、乾位、兑位时，为生旺。在一年四季中，春冬为生旺。其余宫位和季节，则为衰死。生旺时，登科甲第，君子加官，小人进产，可得贤妻、良夫，文章名世，亦宜作学术研究和文学创作。
当其衰死时，易遭疯哮血缢之厄，患淫佚流荡之失，受酒色破家之苦。于身体，易患流产及腰部以下疾病，易有意外伤亡。`,
  lz: `五黄土位镇中央，威扬八面，应廉贞之宿，号为（正关煞），其色黄；宜静不宜动，动则终凶；宜化不宜克，克之则祸叠；戊己大煞，灾害并至，会太岁、岁破、祸患频生。此星值方在平坦之地，门路短散，犹有疾病，临高峻之处门路长聚，定主伤人。紫白诀云：“五主孕妇受灾。”又云：“运如已退，廉贞飞处眚不一，总以避之为吉”“正煞为五黄，不拘临方到间，人口常损”五黄值其凶遭回禄之灾，遇愠惶之厄，其性最烈，其祸最酷。盖以土为五行之主，中为建极之基，有天子之尊司万物之命，不可轻犯者，倘有大石尖峰，触其怒，古树神庙，壮其威，如火炎炎不可抵挡。
此星别名廉贞，又号正关。因其为天干戊己，故又号戊已土星。又因其居于天心正位，故又号都天煞神。此星五行属土，其色纯黄。在星盘上，位居中央，威震八方，在八方没有固定的宫位，只是在九星飞行时，填补空缺的位置。比如六白金星入中时，七赤、八白、九紫、一白、二黑、三碧、四绿共七星依次移位，最后空出巽宫，五黄土星则填补之，所以五黄土星在飞星盘的位置，正好是入中星序数被“１０”减去后所得的数的相应宫位。１０－６＝４，４的相应宫位为巽宫，五黄即在巽宫。又此如九紫火星入中，五黄补何宫位呢？１０－９＝１，可知五黄填补坎宫。其他情况依此法类推。
五黄土星，比拟为皇土，“普天之下，莫非皇土”，它至尊至上，号令八方，权极中央，所以历代皇帝及其家族，莫不以黄为象征，自号黄龙，身穿黄袍。当五黄坐中，即为旺盛，视为吉星，遇之可旺丁旺财，事业兴盛。
当其飞至各方时，即变成大凶之星，被称为“五黄大煞”“正关大煞”“戊己大煞”“都天大煞”，为人世间的最大煞星。如果遇着太岁叠至或三煞、七煞叠至，则凶相大发，犯之则折丁破财。轻则灾病，重则丧命至五人为止。若门前平坦、门路短散，有疾病缠身。若门前高峻（比如高峤、灯塔、烟囱、桥梁、尖角等）或门路直冲、必定伤人。若家人命不该绝，则有回禄之灾、万室烧烬。可见其性最烈，其祸最酷，不可轻犯。尤其有大石尖峰触其震怒，古树神庙壮其威力，则火炎漫天，不可收拾。若门外没有任何凶煞之物，也会惹来诸多麻烦，处境困难、官非厄运、破财患病。此星除在中央旺位，或作为旺星被利用而得其旺气之外，其余宫位，不论生克，皆呈现凶相，为历代堪舆家所切重。`,
  uq: `六白金先天在离（南方），后天居干（西北），应武曲之宿，号为（官贵），其色白，性尚刚；当其旺，主登科甲第、威权震世、巨富多丁、君子加官、小人进产；天玉经云：“干山干向水流干，干峰出状元。”遇其克煞，主伶仃孤苦、刑妻伤子。挨星六白方之山忌开路断头；飞星赋云：“干若悬头，更痛遭刑莫避。”（原注：悬头断头，砂也，遭刑杀戳也。）
此星先天在离，后天在乾，别名武曲，五行属金，其色白。在星盘上，居中宫、本位、兑位时，为生旺；在一年四季中，秋末和初冬为生旺。其余宫位和其余季节，则为衰死。生旺时，多有丁财，升官得权，尤其武职、威权震世。是为九星中第三吉星。
当其衰死之时，多患官非或陷入官场苦斗，又易引起头痛，胸痛和被金属所伤。对家境来说，有刑妻伤子、伶仃孤苦之灾。对外游，则容易发生意外，所以要小心行事。`,
  pj: `七赤金先天在巽（东南），后天居兑（正西），应破军之宿，号为（肃煞），其色赤红，有小人之状，为盗贼之精；紫白诀云：“破军赤名，肃杀剑锋之象。”值其生旺财丁亦增；若为克煞，定主官非口舌，必须与峦头及星数合参吉凶。飞星赋云：“赤为形曜，那堪射胁水方。”玄空秘旨云：“兑缺陷而唇亡齿寒。”（原注：下元兑方缺陷，或水冲败，皆主缺唇音哑，口喉诸病。）。飞星赋云：“七有葫芦之异，医卜兴家。”（原注：七为刑，有除之象，故为医，洪范七稽疑故为卜，葫芦砂，形如葫芦也）。飞星赋云：“七逢刀盏之象，屠沽居肆。”（原注：刀盏，砂形也，七乃西方金，故为屠，又为口舌，故为沽也。）又云：“铁匠缘钳锤七地。”（原注：此凭砂之形象以断，千变万化，总在形与星也。）秋金主杀，九紫可制，夏月忌临，八白和之。
此星别名破军、绰号盗贼星，五行属金，其色为白。在星盘上，居中宫、乾宫、本宫时为生旺；在一年中，秋季和夏末为生旺。其余宫位和季节，则为衰死。生旺时，旺丁旺财，守业发家，小房发福，武途仕宦。
当其衰死时，多有官非口舌或变成盗贼离乡、横死兵乱、牢狱受苦。于家境，则易惹火灾伤丁。于身体，则易患呼吸、咽喉、肺部等疾病，特别对女孩子不利。`,
  zf: `八白土先天在干（西北），后天居艮（东北），应左辅之宿，号为（财星），其色杏白；值生旺则富贵功名，旺田宅发丁财，出忠臣孝子富贵寿考。遇克煞则小口损伤，性本慈祥，能化凶神反归吉曜，故与一六皆归吉论，并称三白。玄空秘旨云：“家有少亡，只为冲残子息卦。”又云：“艮伤残而筋枯臂折。”又云；“离乡砂见艮位，定遭驿路之亡。”（原注：艮为山，为岩壁，倘此方有反背离乡砂，更遇失元，主流亡于外，或山脚驿路之旁）。
此星别名左辅，五行属土，其色为白。在星盘上，居中宫、乾宫、兑宫时为生旺。在一年四季中，初春和夏季为生旺。其余各宫位和季节，则为衰死。生旺时，有富贵功名，宜置业旺财，休养生息。由于其本性慈祥、孝义忠良、化凶化煞，故为九星中第二吉星。
当其衰死时，则小口损伤、瘟?腹胀，或容易患手脚、筋骨、腰脊等疾病。`,
  yb: `九紫火先天在震（正东），后天居离（正南），应右弼之宿，号为（吉庆），其色紫红，性最燥，吉者遇之立刻发福，凶者值之勃然大祸，故术数家称为赶煞催贵之神，但火性刚不能容邪，宜吉不宜凶。玄空秘旨云：“火曜连珠相值，青云路上自逍遥。”（原注：山得阳星，水亦得阳星，虽贵而不富。鲍注：火曜尖秀之峰，即文笔也）。天玉经云：“午山午向午来堂，大将值边疆。”玄机赋云：“离位巉岩而损目”离主目，离位峦头有损则伤目。飞星赋云：“火暗而神志难清。”（原注：火为神，若离宫幽暗，主神昏。）
此星别名右弼，五行属火，其色赤红、紫红。在星盘上，居中宫、乾宫、兑宫时为生旺。在一年四季中，夏季和春季为生旺。其余各宫位和季节，则为衰死。生旺时，发福甚速，旺丁旺财，宜置业守业。又因文章科第，骤至荣显，特别是中房得福。
当其衰死时，为性刚烈，易患回禄之灾。于身体，易星吐血疯颠、日疾难产、心脏血管等病，尤其是眼病为多。`,
};

/**
 * 九星吉凶断，八星
 *
 * @param jx - 八星，左辅右弼合为辅弼
 * @returns 断语
 * @public
 * @see {@link ../assets/knowledge/zibaijiuxing.md}
 */
export const getJiuXingJiXiongDuanBy8 = (jx: JiuXingIn8): string => {
  if (jx === 'fb') {
    return `${jiuXingJiXiongDuan.zf}
${jiuXingJiXiongDuan.yb}`;
  }
  return jiuXingJiXiongDuan[jx];
};

/**
 * 八宅吉凶断
 *
 * @public
 * @see {@link ../assets/knowledge/bazhaifengshui.md}
 */
export const baZhaiJiXiongDuan: JueDuanType<BaZhaiWei> = {
  sq: '生气吉方，贪狼星，属木。乃大吉之星曜。旺丁旺财，兼有名声地位。是精力旺盛、生气蓬勃，有冲劲魄力，前途光明的象征。是最有利的方向，能提高工作效率，健康快乐长寿，性欲强。该位不可作为浴室或厕所。',
  ty: '天医吉方，巨门星，属土。乃次吉之星曜。延年益寿，兼且得贵人提携，一切顺利。如果这个位向房子的结构和外型完整无缺，或稍稍的凸出，不作浴厕，就可以祛病除灾。即使是经常生病或体质衰弱的人，住进这方位的房子，时间久了，也可以借自然的力量改善体质，延年益寿，并能使治疗药物发挥更大的效力。生活安逸、稳定、吃得饱、睡得好，烦恼少，身强体健，多有贵人相助。',
  yn: '延年吉方，武曲星，属金。乃中吉之星曜。家庭和睦，兼有朋友扶助。也有延年益寿、增强生命力及抗疾病能力的作用，并且促进感情的滋长、婚姻和谐，而使家庭美满。随和、安逸、有耐性，懂得赞赏别人，自己也受到肯定而满足。',
  fw: '伏位吉方，左辅星，属木。乃小吉之星曜。一切平静，无口舌是非，小人退避。对赚钱敏感、家庭观念重，男性在家中体贴、听从父母和太太的话，但性欲减低。',
  jn: '绝命凶方，破军星，属金。乃至凶之星曜。是最不吉利的位向。开刀动手术剑之伤，或遭贼劫，心情极度恶劣。以阴克阳，影响健康、不孕、破财及容易发生意外灾祸。忧虑、苦恼、烦闷、沉默，凡事压抑心中，易生心理疾病。',
  wg: '五鬼凶方，廉贞星，属火。乃大凶之星曜。发生意外，口舌，中邪，横祸，破大财。以阳克阳、以阴克阴，容易遭窃、火灾、患病、诉讼及口舌是非。容易烦躁、易与人冲突，或无意间得罪他人，人缘不佳，做事徒劳无功，得不到回报。',
  ls: '六煞凶方，文曲星，属水。乃次凶之星曜。宅不宁，口舌是非，婚外情，疾病临身。烦恼多，是非多，易失眠，判断上易出错误，若门向、炉向皆朝此方，男性喜吃喝嫖赌。',
  hh: '祸害凶方，禄存星，属土。乃小凶之星曜。口舌是非，官讼，被人出卖，识毫无上进心，身体染恙。五行相克。容易结仇、纠纷、破财、疾病。易被琐碎的杂事干扰，易疲倦、虚弱，对自己失去信心，懒散。',
};
