/**
 * Pinlish
 * The dictionary use to mapping the English letters to Chinese Pinyin
 * @author Jiang ning
 * @example
 * dict = {
 *      'The English Alphabet - A' : [
 *          'The default pronunciation of Pinyin Shengmu A', 'This Shengmu A + Yunmu',...
 *      ],
 *      'The English Alphabet - B' : [
 *          'The default pronunciation of Pinyin Shengmu B', 'This Shengmu B + Yunmu',...
 *      ],
 *      .
 *      .
 *      .,
 *      'The English Alphabet - Z' : [
 *          ...
 *      ]
 * }
 */

const dict = {
    a : [
        'a', 'ai', 'an', 'ang', 'ao'
    ],
    b : [
        'bo', 'ba', 'bai', 'ban', 'bang', 'bao', 'bei', 'ben', 'beng', 'bi', 'bian', 'biao', 'bie', 'bin', 'bing', 'bu'
    ],
    c : [
        'ci', 'ca', 'cai', 'can', 'cang', 'cao', 'ce', 'cen', 'ceng', 'cha', 'chai', 'chan', 'chang', 'chao', 'che', 'chen', 'cheng', 'chi', 'chong', 'chou', 'chu', 'chua', 'chuai', 'chuan', 'chuang', 'chui', 'chun', 'chuo', 'cong', 'cou', 'cu', 'cuan', 'cui', 'cun', 'cuo'
    ],
    d : [
        'de', 'da', 'dai', 'dan', 'dang', 'dao', 'dei', 'den', 'deng', 'di', 'dia', 'dian', 'diao', 'die', 'ding', 'diu', 'dong', 'dou', 'du', 'duan', 'dui', 'dun', 'duo'
    ],
    e : [
        'e', 'ei', 'en', 'eng', 'er'
    ],
    f : [
        'fo', 'fa', 'fan', 'fang', 'fei', 'fen', 'feng', 'fou', 'fu'
    ],
    g : [
        'ge', 'ga', 'gai', 'gan', 'gang', 'gao', 'gei', 'gen', 'geng', 'gong', 'gou', 'gu', 'gua', 'guai', 'guan', 'guang', 'gui', 'gun', 'guo'
    ],
    h : [
        'he', 'ha', 'hai', 'han', 'hang', 'hao', 'hei', 'hen', 'heng', 'hong', 'hou', 'hu', 'hua', 'huai', 'huan', 'huang', 'hui', 'hun', 'huo'
    ],
    i : [
        'yi'
    ],
    j : [
        'ji', 'jia', 'jian', 'jiang', 'jiao', 'jie', 'jin', 'jing', 'jiong', 'jiu', 'ju', 'juan', 'jue', 'jun'
    ],
    k : [
        'ke', 'ka', 'kai', 'kan', 'kang', 'kao', 'ken', 'keng', 'kong', 'kou', 'ku', 'kua', 'kuai', 'kuan', 'kuang', 'kui', 'kun', 'kuo'
    ],
    l : [
        'le', 'la', 'lai', 'lan', 'lang', 'lao', 'lei', 'leng', 'li', 'lia', 'lian', 'liang', 'liao', 'lie', 'lin', 'ling', 'liu', 'lo', 'long', 'lou', 'lu', 'luan', 'lun', 'luo', 'lv', 'lve'
    ],
    m : [
        'mo', 'ma', 'mai', 'man', 'mang', 'mao', 'me', 'mei', 'men', 'meng', 'mi', 'mian', 'miao', 'mie', 'min', 'ming', 'miu', 'mou', 'mu'
    ],
    n : [
        'ne', 'na', 'nai', 'nan', 'nang', 'nao', 'nei', 'nen', 'neng', 'ni', 'nian', 'niang', 'niao', 'nie', 'nin', 'ning', 'niu', 'nong', 'nou', 'nu', 'nuan', 'nun', 'nuo', 'nv', 'nve'
    ],
    o : [
        'wo', 'ou'
    ],
    p : [
        'po', 'pa', 'pai', 'pan', 'pang', 'pao', 'pei', 'pen', 'peng', 'pi', 'pian', 'piao', 'pie', 'pin', 'ping', 'pou', 'pu'
    ],
    q : [
        'qi', 'qia', 'qian', 'qiang', 'qiao', 'qie', 'qin', 'qing', 'qiong', 'qiu', 'qu', 'quan', 'que', 'qun'
    ],
    r : [
        'ri', 'ran', 'rang', 'rao', 're', 'ren', 'reng', 'rong', 'rou', 'ru', 'ruan', 'rui', 'run', 'ruo'
    ],
    s : [
        'si', 'sa', 'sai', 'san', 'sang', 'sao', 'se', 'sen', 'seng', 'sha', 'shai', 'shan', 'shang', 'shao', 'she', 'shen', 'sheng', 'shi', 'shou', 'shu', 'shua', 'shuai', 'shuan', 'shuang', 'shui', 'shun', 'shuo', 'song', 'sou', 'su', 'suan', 'sui', 'sun', 'suo'
    ],
    t : [
        'te', 'ta', 'tai', 'tan', 'tang', 'tao', 'teng', 'ti', 'tian', 'tiao', 'tie', 'ting', 'tong', 'tou', 'tu', 'tuan', 'tui', 'tun', 'tuo'
    ],
    u : [
        'wu'
    ],
    v : [
        'yu'
    ],
    w : [
        'wu', 'wa', 'wai', 'wan', 'wang', 'wei', 'wen', 'weng', 'wo'
    ],
    x : [
        'xi', 'xia', 'xian', 'xiang', 'xiao', 'xie', 'xin', 'xing', 'xiong', 'xiu', 'xu', 'xuan', 'xue', 'xun'
    ],
    y : [
        'yi', 'ya', 'yan', 'yang', 'yao', 'ye', 'yin', 'ying', 'yo', 'yong', 'you', 'yu', 'yuan', 'yue', 'yun'
    ],
    z : [
        'zi', 'za', 'zai', 'zan', 'zang', 'zao', 'ze', 'zei', 'zen', 'zeng', 'zha', 'zhai', 'zhan', 'zhang', 'zhao', 'zhe', 'zhen', 'zheng', 'zhi', 'zhong', 'zhou', 'zhu', 'zhua', 'zhuai', 'zhuan', 'zhuang', 'zhui', 'zhun', 'zhuo', 'zong', 'zou', 'zu', 'zuan', 'zui', 'zun', 'zuo'
    ]
};

export default dict;
