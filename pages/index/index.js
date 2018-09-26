var app = getApp();
var i  ;
var xuanze=0;
var ansflag = [];
var my_xz = [];
Page({
  
  data: {
    
    count:1,
    anniu2:'次へ',
    anniu1:'上へ',
    anniu3:0,
//第1题数据
    ques1: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/163b233ca882a2137.png',
      stem: '1.【送分题】Re的群名是',
      items: [
        { name: '0:A',name1:'A', value: 'A.Re', checked: '' },
        { name: '0:B', value: 'B.Re:君の名は', checked: '' },
        { name: '0:C', value: 'C.Re异世界Life', checked: '' },
        { name: '1:D', value: 'D.Re:君の名はif', checked: '' }, 
      ]
    },
//第2题数据
    ques2: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/28be0b4c64cfc7566.png',
      stem: "2.【继续送分题】群内经常会说到“啊老”这个词，请问以下哪个是“啊老”",
      items0: [
        { name: '1:A', value: 'https://moetu.fastmirror.org/images/2018/09/21/cf9af5c196c7ef027a10168ab4e32f46c43f747bd4c94da6.png', op: 'A.', checked: '' },
        { name: '1:B', value: 'https://moetu.fastmirror.org/images/2018/09/21/23b1d2399afa96397.png', op: 'B.', checked: '' },
      ],
      items1: [
        { name: '1:C', value: 'https://moetu.fastmirror.org/images/2018/09/21/35ed43fd5ff1bfbe3.png', op: 'C.', checked: '' },
        { name: '0:D', value: 'https://moetu.fastmirror.org/images/2018/09/21/5f4915d86eddc4d68f9e6a1cf2101d86d39e30a113ae9e7d.png', op: 'D.', checked: ''},
      ],
    },
 //第3题数据
    ques3: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/36ac893161305ef44.png',
      stem: "3.【再送一波】Re最近流行跑跑，请选出在跑跑卡丁车《城镇手指》地图中，时间最短的跑图路线",
      items0: [
        { name: '0:A', value: 'https://moetu.fastmirror.org/images/2018/09/21/----229276ceaa1445072.png', op: 'A.', checked: '' },
        { name: '0:B', value: 'https://moetu.fastmirror.org/images/2018/09/21/----39a66bbc844045e66.png', op: 'B.', checked: '' },
      ],
      items1: [
        { name: '1:C', value: 'https://moetu.fastmirror.org/images/2018/09/21/---aa614fadf1baa1c1.png', op: 'C.', checked: ''},
        { name: '0:D', value: 'https://moetu.fastmirror.org/images/2018/09/21/654d0c18eb9bd0131865a7b97caf7a5aae3b4472364461c1.png', op: 'D.', checked: ''},
      ],
    },
  //第4题数据
    ques4: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/47039079a8b73a09b.png',
      stem: '4.【正片开始】Re有很多活动，请问下面哪个是Re没有过的活动',
      items: [
        { name: '0:A', value: 'A.Re强化大赛', checked: '' },
        { name: '0:B', value: 'B.Re打桩大赛', checked: ''},
        { name: '1:C', value: 'C.Re我是鸽手', checked: '' },
        { name: '0:D', value: 'D.Re音乐赏', checked: ''},
      ]
    },
  //第5题数据
    ques5: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/4baea1855b8353d9e.png',
      stem: '5.群内成员“魔总”名字的来源',
      items: [
        { name: '0:A', value: 'A.实力财力强大无比，家里有属于自\n己的矿场，曾下豪言要请群内所有人\n吃肯德基', checked: '' },
        { name: '1:B', value: 'B.做事心狠手辣，就连可爱的小猫咪\n也不放过，将其丢在楼梯', checked: '' },
        { name: '0:C', value: 'C.做事风格是：凡是用钱能解决的事\n情，OK，买!', checked: ''},
        { name: '0:D', value: 'D.二拖卢克炸过，蛇夫魔男', checked: ''},
      ]
    },
  //第6题数据
    ques6: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/2313c46d8e1a4c345.jpg',
      stem: "6.最近考驾照风波，世人用功学车风气盛行，然有一人，其在车牌亚试中，重考矣三次，何许人也（请选出以下符合该人物形象的图片）",
      items0: [
        { name: '0:A', value: 'https://moetu.fastmirror.org/images/2018/09/23/00802caf462585e750b.jpg', op: 'A.', checked: ''},
        { name: '0:B', value: 'https://moetu.fastmirror.org/images/2018/09/21/QQ201809192158419f14254ca7e888f0.png', op: 'B.', checked: ''},
      ],
      items1: [
        { name: '1:C', value: 'https://moetu.fastmirror.org/images/2018/09/21/QQ201809192201304c9edba2b55ce564.png', op: 'C.', checked: '' },
        { name: '0:D', value: 'https://moetu.fastmirror.org/images/2018/09/21/van46c78fd823dc35db.png', op: 'D.', checked: '' },
      ],
    },
  //第7题数据
    ques7: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/c3c52246a75d4855868a2048c4c3e31d65b2322b3e01a4e5.png',
      stem: '7.Re的人读大卷书， 大贤世居大邦，见多识广，而且荣列胶庠，自然才贯二酉，学富五车，常品茶会《Re百家讲坛》下面是哪个没谈过的话题？',
      items: [
        { name: '0:A', value: 'A.拯救处世不深少女——婚姻危机', checked: ''},
        { name: '0:B', value: 'B.珠三角经济的崛起——房产停泄', checked: '' },
        { name: '0:C', value: 'C.分析灵异未解之谜——敬畏神明', checked: ''},
        { name: '1:D', value: 'D.人心恍惚的安心药——读心之术', checked: ''},
      ]
    },
  //第8题数据
    ques8: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/ec13c3728716a558cd890c49d1dc2c0f525b25a1ec8d0105.png',
      stem: "8.Re历史悠久，群员名号多有来历，今日来讲一讲群内元老之一【嘟嘟】名字来历，主要是因为下面哪个人物?",
      items0: [
        { name: '1:A', value: 'https://moetu.fastmirror.org/images/2018/09/21/QQ20180919222114f70c162ae191c07b.png', op: 'A.', checked: '' },
        { name: '0:B', value: 'https://moetu.fastmirror.org/images/2018/09/21/QQ201809192222280b4333892c5f8f98.png', op: 'B.', checked: '' },
      ],
      items1: [
        { name: '0:C', value: 'https://moetu.fastmirror.org/images/2018/09/21/2ca59697a207bfc87c7bedfb6accc5c57181a33c121acce0.png', op: 'C.', checked: '' },
        { name: '0:D', value: 'https://moetu.fastmirror.org/images/2018/09/21/QQ201809192222142a687a4e7232ea5b.png', op: 'D.', checked: '' },
      ],
    },
  //第9题数据
    ques9: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/f6119a551dfe82ac856ffba4f506d5ca32ccf58c7649297d.png',
      stem: "9.Re被许多传统的优良文化作品熏陶着，请选出对Re有重大影响的作品",
      items0: [
        { name: '0:A', value: 'https://moetu.fastmirror.org/images/2018/09/21/e65312c20708c1e1e51ef99239f12688fe814512958653bc.png', op: 'A.', checked: '' },
        { name: '0:B', value: 'https://moetu.fastmirror.org/images/2018/09/21/RE02cc766251ae328c3.th.png', op: 'B.', checked: '' },
      ],
      items1: [
        { name: '1:C', value: 'https://moetu.fastmirror.org/images/2018/09/21/QQ20180920145427d98d629b7a263887.th.png', op: 'C.', checked: '' },
        { name: '0:D', value: 'https://moetu.fastmirror.org/images/2018/09/21/QQ20180920145717c65bb7e20d26d67f.png', op: 'D.', checked: '' },
      ],
    },
  //第10题数据
    ques10: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/07812d9646af73b425106362f45d57871eadb3536de4ca23.png',
      stem: '10.Re组织内个个人物个性鲜明，有着独自的见解和自由的思想，从下列形容荔枝的语句中选中正确的人物搭配\n①“啊♂，这个荔枝，That\'s good，I love it for well”\n②“吾辈觉得这个荔枝，果实像丹砂一般地红，核像枇杷核; 壳如红色丝织品”\n③吾以为，此物膜如紫绡，瓤肉莹白如冰雪，浆液甘酸如醴酪\n④一骑红尘妃子笑，无人知是荔枝来。',
      items: [
        { name: '0:A', value: 'A.①→图腾老②→老圣 ③→嘟嘟 ④→姑姑', checked: '' },
        { name: '0:B', value: 'B.①→图腾老②→公孙捏鸡 ③→老圣④→008', checked: ''},
        { name: '0:C', value: 'C.①→嘟嘟②→老圣 ③→公孙捏鸡④→祥哥', checked: ''},
        { name: '1:D', value: 'D.①→图腾老②→老圣 ③→公孙捏鸡 ④→姑姑', checked: ''},
      ]
    },
  //第11题数据
    ques11: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/11417e29f3d5f62892.png',
      stem: "11.Re除了有一些青年才俊外，也不乏一些娇羞少女，请选出下面的唯一男生",
      items0: [
        { name: '0:A', value: 'https://moetu.fastmirror.org/images/2018/09/21/23e34e304f3447ceee1047159dc414a9f2ea9e81cb529342.png', op: 'A.\n灯\n露', checked: '' },
        { name: '1:B', value: 'https://moetu.fastmirror.org/images/2018/09/23/335c3d64d418f339c3.png', op: 'B.\n三\n三', checked: '' },
      ],
      items1: [
        { name: '0:C', value: 'https://moetu.fastmirror.org/images/2018/09/21/2793eff828f28b8547f05bc82ef9622d65b5a977d25330ca.png', op: 'C.\n姑\n姑', checked: '' },
        { name: '0:D', value: 'https://moetu.fastmirror.org/images/2018/09/21/QQ2018092023303389e14ae333a1148b.jpg', op: 'D.\nqun\n酱', checked: ''},
      ],
    },
  //第12题数据
    ques12: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/1298b447d62ef13050.png',
      stem: '12.Re高手如云，人均2拖卢克水平，但也不乏一些组队毒瘤，请选出下面Re最不想要的队友',
      items: [
        { name: '0:A', value: 'A. B和C选一个', checked: ''},
        { name: '1:B', value: 'B. 五月', checked: ''},
        { name: '1:C', value: 'C. 灵灵', checked: '' },
        { name: '0:D', value: 'D. B和C选一个', checked: '' },
      ]
    },
  //第13题数据
    ques13: {
      stem: '13.驾驶机动车遇到这个路标路口时应该怎么经过才安全',
      items: [
        { name: '0:A', value: 'A.停车观察路口情况', checked: '' },
        { name: '0:B', value: 'B.加速尽快进入路口', checked: ''},
        { name: '0:C', value: 'C.减速观察左后方情况', checked: ''},
        { name: '1:D', value: 'D.减速缓慢进入路口', checked: '' },
      ]
    },
  //第14题数据
    ques14: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/281c45c9d774ae0e0aa17c7dd9171b249b612b5bbd6084d9.png',
      stem: '14.Re之人，勤勉好学，相当注重于其他语言的发展，尤其是日语，请你以Re平均日语十级水平，找出下列日语翻译错误的一项',
      items: [
        { name: '1:A', value: 'A.麻吉哑巴库内【真是恶心啊】', checked: '' },
        { name: '0:B', value: 'B.仙贝红豆泥亚撒西【前辈真的很温柔呢】', checked: '' },
        { name: '0:C', value: 'C.一米哇卡奶【搞不懂什么意思哇】', checked: '' },
        { name: '0:D', value: 'D.我喜欢你【阿姨洗铁路】', checked: '' },
      ]
    },
  //第15题数据
    ques15: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/15bb6ee5f9c68aebc2.png',
      stem: "15. 法国学者培根曾经说过：“习惯是人生的主宰，人们应该追求好的行为习惯。”，Re群员有非常良好的品德行为，请问下列哪个是不存在的不良品行",
      items0: [
        { name: '1:A', value: 'https://moetu.fastmirror.org/images/2018/09/21/E1PYX9CDWV0PGKQUc31e1a5ff7b5dda8.jpg', op: 'A.', checked: ''},
        { name: '0:B', value: 'https://moetu.fastmirror.org/images/2018/09/21/QQ20180921001336c9f3e30aa357de05.png', op: 'B.', checked: '' },
      ],
      items1: [
        { name: '0:C', value: 'https://moetu.fastmirror.org/images/2018/09/21/5833b95376defa19cb2e04b62a30caec2ac75ecd68861fa8.jpg', op: 'C.', checked: ''},
        { name: '0:D', value: 'https://moetu.fastmirror.org/images/2018/09/21/QQ20180921002122dc2fdb0b9d166c65.png', op: 'D.', checked: ''},
      ],
    },
  //第16题数据
    ques16: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/b13b672efa17b2020465363b7dd9e3adc0db9f0cba8fb91f.png',
      stem: '16. Re不乏一些奇能异士 ，他们身上许多的奇遇经常震惊RE内外人员，请选出下列真实没有出现过的事例',
      items: [
        { name: '0:A', value: 'A.踢死你—中元节新买AJ\n竟无故失踪，调查监控不了了之', tupian: 'https://moetu.fastmirror.org/images/2018/09/23/16af1f324db8dc5f34.png', checked: ''},
        { name: '0:B', value: 'B.师兄-上班8小时，摸鱼\n7.59小时的神秘划水男？', tupian: 'https://moetu.fastmirror.org/images/2018/09/23/16af1f324db8dc5f34.png', checked: ''},
        { name: '0:C', value: 'C.鸭王-失忆退群，重生后\n竟然拥有生前的所有物品？', tupian: 'https://moetu.fastmirror.org/images/2018/09/23/16af1f324db8dc5f34.png', checked: '' },
        { name: '1:D', value: 'D. 五月-初秀驾照租车，\n半路竟飘逸螺旋升天爆炸？', tupian: 'https://moetu.fastmirror.org/images/2018/09/23/16af1f324db8dc5f34.png', checked: '' },
      ]
    },
  //第17题数据
    ques17: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/lacia72a4d97ec5e08efa.png',
      stem: '17.【判断题】Re人际关系密切，人与人之间就宛如母子之间的脐带一般，二人看似毫不相干，但却有着万般不能分割之情\n那么请问Laica和中二少年尼诺之间的关系是什么',
      items: [
        { name: '1:A', value: 'A.他是帝王府的前二把手的夜幕愣子\n的基佬的灵魂电台姑姑的高中好基佬\n水哥的小学好基佬公孙捏鸡在某一天\n打团路上突然拉到个野人帕拉丁后问\n要不要入群然后她也选择入群的色色\nqun酱的群友', checked: '' },
        { name: '0:B', value: 'B.他是自小从姑姑3表哥的儿子的7\n姨太的情夫的4伯父的6叔的亲家厂\n里打工某夜被盗然后辞职出来做鸭的\n鸭王的一个有着倒霉女友被男友弃于\n不顾的海星的倒霉群友雷剑苦轮之称\n的五月日思夜想做富婆qun酱的老公', checked: ''},
        
      ]
    },
  //第18题数据
    ques18: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/23083cf20f9134490.png',
      stem: '18.Re的人思想开放，追寻平等自由，就比如欧洲人民心中的“上帝”，每个人都有自己的心中的神作，请指出下列与心中“神作”不符的选项',
      items: [
        { name: '0:A', value: 'A.008：巨人吹爆', tupian: 'https://moetu.fastmirror.org/images/2018/09/23/181d30ae402000a7d9d.png', checked: '' },
        { name: '0:B', value: 'B.文旭：火影吹爆', tupian: 'https://moetu.fastmirror.org/images/2018/09/23/1823f80834818741e6c.png', checked: '' },
        { name: '0:C', value: 'C.水哥：石头人吹爆', tupian: 'https://moetu.fastmirror.org/images/2018/09/23/1832a20161ed5023f58.png', checked: '' },
        { name: '1:D', value: 'D.咕咕：一拳超好看，追爆', tupian: 'https://moetu.fastmirror.org/images/2018/09/23/184c2b796174a02690d.png', checked: '' },
      ]
    },
  //第19题数据
    ques19: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/8130487f416b86e2c2f7524dfefc50571a38c98bef348fe4.jpg',
      stem: '19.Re群内电子行业程序猿众多，比如祥哥就是一个，有一天祥哥利用MacBook设计了一个计算程序，输入和输出的数据如下表\n',
      items: [
        { name: '0:A', value: 'A.9/81', checked: '' },
        { name: '1:B', value: 'B.9/82', checked: '' },
        { name: '0:C', value: 'C.9/93', checked: ''},
        { name: '0:D', value: 'D.9/94', checked: ''},
      ]
    },
  //第20题数据
    ques20: {
      link: 'https://moetu.fastmirror.org/images/2018/09/23/laoshengac8d843b95d1a784.jpg',
      stem: '20.Re成员团结一致，一人有难，群方支援，近来老圣与其感情直线下降，为了增进感情。群员们给出许多的助攻良策，以下能提升两人之间的好感是',
      items: [
        { name: '1:A', value: 'A.趁对方围着围裙做饭时朝对方裙底\n偷偷拍照', checked: '' },
        { name: '1:B', value: 'B.趁对方洗澡准备时，把其换洗衣服\n拿去偷偷拍照', checked: '' },
        { name: '1:C', value: 'C.趁对方睡熟时摆出各种姿势拿相机\n偷偷拍照', checked: '' },
        { name: '1:D', value: 'D.趁对方收拾卫生不注意时露出神秘\n领域时偷偷拍照', checked: '' },
      ]
    },
  


    

  },
  radioChange: function (e) {
    
    var detail_xz = e.detail.value;
    var str = detail_xz.split(':');
    console.log('radio发生change事件，携带value值为：', str[0])
    if(str[0] =='1')
    {
      xuanze = 1;
      ansflag[i-1]=1;
      console.log(ansflag[i-1]);
      my_xz[i-1] = str[1];
    }
    else
    {
      xuanze = 0;
      ansflag[i-1]=0;
      console.log(ansflag[i-1]);
      my_xz[i - 1] = str[1];
    }
  },
  
  next: function (e) {
    console.log(ansflag[i-1]);
    if(ansflag[i-1] != 1 & ansflag[i-1] != 0){
      wx.showModal({
        title: 'Warning',
        content: '本题还未作答'
      })
    }
    else{
      i=i+1;
      if(xuanze==1)
      {
        xuanze=0;
        app.globalDate.sum += 1;
        console.log("sum: ", app.globalDate.sum);
      }else{
        console.log("sum: ", app.globalDate.sum)
      }
      if(i<20)
        this.setData({ count: i })
      else if(i==20){
        this.setData({ count: i })
        this.setData({anniu:'完成'})
      }
      else if(i==21){
        let cmp = wx.getStorageSync('complete');
        if(cmp != 1){
          wx.setStorageSync('mydata', my_xz)
        }
        wx.navigateTo({
          url: '/pages/jifen/jifen',
        })
      }
    }
  },

  previous: function(e){
      if(i!=1)
      {
        i=i-1;
        this.setData({ count: i })
        if(ansflag[i-1]==1){
          app.globalDate.sum -= 1;
          console.log("sum: ", app.globalDate.sum);
        }
        
      }
  },

  mydata: function(e){
    let my_xz = wx.getStorageSync('mydata');
    wx.showModal({
      title: 'Warning',
      content: '之前提交的选择是：\n' + my_xz[0] + my_xz[1] + my_xz[2] + my_xz[3] + my_xz[4] + '\n' + my_xz[5] + my_xz[6] + my_xz[7] + my_xz[8] + my_xz[9] + '\n' + my_xz[10] + my_xz[11] + my_xz[12] + my_xz[13] + my_xz[14] + '\n' + my_xz[15] + my_xz[16] + my_xz[17] + my_xz[18] + my_xz[19]
  })
  },
//shishi
  onReady: function () {
    i=1;
  },

  onLoad: function() {
    app.globalDate.sum =0;
    let cmp = wx.getStorageSync('complete');
    if(cmp == 1)
    {
      this.setData({anniu3: 1})
    }
  }
  
})